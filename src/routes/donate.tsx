import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState, useEffect, type FormEvent } from "react";
import { z } from "zod";
import { CreditCard, Loader2, Shield, IndianRupee, ArrowLeft } from "lucide-react";
import { SiteShell } from "@/components/site/SiteShell";
import { BankDetails } from "@/components/sections/BankDetails";
import { toast } from "sonner";
import { insertDonation } from "@/lib/db";

const search = z.object({
  amount: z.coerce.number().min(10).optional(),
  frequency: z.enum(["one-time", "monthly"]).optional(),
  cause: z.string().optional(),
});

export const Route = createFileRoute("/donate")({
  validateSearch: search,
  head: () => ({
    meta: [
      { title: "Donate — Sanjeevora Vidya Mission" },
      { name: "description", content: "Make a secure one-time or monthly donation to Sanjeevora Vidya Mission." },
    ],
  }),
  component: DonatePage,
});

type Step = "details" | "payu" | "npci";

const ONE_TIME_PRESETS = [5000, 8000, 14000, 20000];
const MONTHLY_PRESETS = [800, 1600, 2400, 5000];

const CAUSES = [
  "Where Most Needed",
  "Nutrition Support",
  "Education Support",
  "Child Development",
  "Career Readiness",
];

function DonatePage() {
  const sp = Route.useSearch();
  const navigate = useNavigate();

  const [frequency, setFrequency] = useState<"one-time" | "monthly">(sp.frequency ?? "one-time");
  const [amount, setAmount] = useState<number>(sp.amount ?? 5000);
  const [cause, setCause] = useState(sp.cause ?? CAUSES[0]);

  const [step, setStep] = useState<Step>("details");
  const [busy, setBusy] = useState(false);

  const [donor, setDonor] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    country: "India",
    state: "",
    city: "",
    pincode: "",
    pan: "",
    taxExempt: true,
    consent: true,
  });

  const PRESETS = frequency === "one-time" ? ONE_TIME_PRESETS : MONTHLY_PRESETS;
  const finalAmount = amount;
  const minAmount = frequency === "one-time" ? 500 : 800;

  useEffect(() => {
    if (step !== "npci") return;
    const timer = setTimeout(async () => {
      try {
        const refNo = "ENACH-" + Math.floor(100000 + Math.random() * 900000);
        const result = await insertDonation({
          donor_name: donor.name,
          donor_email: donor.email,
          amount: finalAmount,
          cause: cause,
          payment_gateway: "NPCI eNACH",
          payment_status: "active",
          payment_reference: refNo,
        });
        navigate({
          to: "/donate/thank-you",
          search: {
            name: donor.name,
            amount: finalAmount,
            ref: refNo,
            id: result?.id,
          }
        });
      } catch (err) {
        console.error(err);
        toast.error("Failed to register donation. Please try again.");
        setStep("details");
      }
    }, 3000);
    return () => clearTimeout(timer);
  }, [step, donor.name, donor.email, finalAmount, cause, navigate]);

  const handleDetailsSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!finalAmount || finalAmount < minAmount) {
      return toast.error(`It is financially unviable for us to process transactions which are less than ${minAmount} rupees`);
    }
    if (!donor.name || !donor.phone || !donor.email || !donor.address || !donor.city || !donor.state || !donor.pincode) {
      return toast.error("Please fill all mandatory donor information fields");
    }
    if (!donor.consent) {
      return toast.error("Please agree to the consent");
    }

    setBusy(true);
    if (frequency === "one-time") {
      setStep("payu");
      setTimeout(() => {
        toast.success("Please complete the transfer using the bank details provided.");
        setBusy(false);
      }, 1500);
    } else {
      setStep("npci");
      setTimeout(() => {
        toast.success("Redirecting to Official NPCI eNACH Portal...");
        setBusy(false);
      }, 1500);
    }
  };

  return (
    <SiteShell>
      <div className="gradient-soft py-10">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <Link to="/" className="inline-flex items-center gap-1 text-sm text-foreground/70 hover:text-primary">
            <ArrowLeft className="h-4 w-4" /> Back to Home
          </Link>
          <h1 className="mt-4 font-display text-3xl font-extrabold sm:text-4xl">Complete Your Donation</h1>
        </div>
      </div>

      <section className="py-10 pb-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          {step === "details" && (
            <div className="grid gap-8 lg:grid-cols-[1.5fr_1fr]">
              <div className="space-y-8">
                {/* Donation Configuration */}
                <div className="rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-8">
                  <h2 className="mb-6 font-display text-2xl font-bold">1. Donation Details</h2>
                  
                  <div className="space-y-6">
                    <div>
                      <label className="mb-2 block text-sm font-semibold text-foreground/80">Donation Frequency</label>
                      <div className="inline-flex rounded-xl border border-border bg-background p-1 text-sm font-semibold">
                        {(["one-time", "monthly"] as const).map((f) => (
                          <button
                            key={f}
                            type="button"
                            onClick={() => {
                              setFrequency(f);
                              setAmount((f === "one-time" ? ONE_TIME_PRESETS : MONTHLY_PRESETS)[0]);
                            }}
                            className={`rounded-lg px-6 py-2 transition ${frequency === f ? "bg-primary text-white shadow" : "text-foreground/70 hover:text-foreground"}`}
                          >
                            {f === "one-time" ? "One-Time" : "Monthly"}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="mb-2 block text-sm font-semibold text-foreground/80">Choose Amount</label>
                      <div className="flex flex-wrap gap-2">
                        {PRESETS.map((p) => (
                          <button
                            key={p}
                            type="button"
                            onClick={() => setAmount(p)}
                            className={`rounded-xl border px-4 py-2 text-sm font-semibold transition ${
                              amount === p ? "border-primary bg-primary text-white" : "border-border bg-background hover:border-primary/50"
                            }`}
                          >
                            ₹{p.toLocaleString("en-IN")}
                          </button>
                        ))}
                      </div>
                      
                      <div className="mt-3 flex max-w-xs items-center gap-2 rounded-xl border border-border bg-background px-3 py-2.5">
                        <IndianRupee className="h-4 w-4 text-muted-foreground" />
                        <input
                          type="number"
                          min={minAmount}
                          value={amount || ""}
                          onChange={(e) => setAmount(Number(e.target.value))}
                          placeholder="Enter amount"
                          className="w-full bg-transparent text-sm outline-none"
                        />
                      </div>
                      {amount > 0 && amount < minAmount && (
                        <p className="mt-2 text-sm font-medium text-red-500">
                          It is financially unviable for us to process transactions which are less than {minAmount} rupees
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="mb-2 block text-sm font-semibold text-foreground/80">Support a Cause</label>
                      <select
                        value={cause}
                        onChange={(e) => setCause(e.target.value)}
                        className="w-full max-w-sm rounded-xl border border-border bg-background px-4 py-2.5 text-sm outline-none focus:border-primary"
                      >
                        {CAUSES.map((c) => (
                          <option key={c} value={c}>{c}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                {/* Donor Information */}
                <div className="rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-8">
                  <h2 className="mb-6 font-display text-2xl font-bold">2. Donor Information</h2>
                  <form id="donor-form" onSubmit={handleDetailsSubmit} className="space-y-6">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label className="mb-1.5 block text-sm font-semibold text-foreground/80">Full Name <span className="text-red-500">*</span></label>
                        <input required value={donor.name} onChange={(e) => setDonor({ ...donor, name: e.target.value })} placeholder="e.g. Rahul Kumar" className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm outline-none focus:border-primary" />
                      </div>
                      <div>
                        <label className="mb-1.5 block text-sm font-semibold text-foreground/80">Mobile Number <span className="text-red-500">*</span></label>
                        <input required type="tel" value={donor.phone} onChange={(e) => setDonor({ ...donor, phone: e.target.value })} placeholder="10-digit mobile number" className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm outline-none focus:border-primary" />
                      </div>
                    </div>

                    <div>
                      <label className="mb-1.5 block text-sm font-semibold text-foreground/80">Email Address <span className="text-red-500">*</span></label>
                      <input required type="email" value={donor.email} onChange={(e) => setDonor({ ...donor, email: e.target.value })} placeholder="e.g. name@example.com" className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm outline-none focus:border-primary" />
                    </div>

                    <div>
                      <label className="mb-1.5 block text-sm font-semibold text-foreground/80">Address <span className="text-red-500">*</span></label>
                      <input required value={donor.address} onChange={(e) => setDonor({ ...donor, address: e.target.value })} placeholder="House/Flat No, Street, Landmark" className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm outline-none focus:border-primary" />
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label className="mb-1.5 block text-sm font-semibold text-foreground/80">City <span className="text-red-500">*</span></label>
                        <input required value={donor.city} onChange={(e) => setDonor({ ...donor, city: e.target.value })} className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm outline-none focus:border-primary" />
                      </div>
                      <div>
                        <label className="mb-1.5 block text-sm font-semibold text-foreground/80">State <span className="text-red-500">*</span></label>
                        <input required value={donor.state} onChange={(e) => setDonor({ ...donor, state: e.target.value })} className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm outline-none focus:border-primary" />
                      </div>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label className="mb-1.5 block text-sm font-semibold text-foreground/80">Pincode <span className="text-red-500">*</span></label>
                        <input required value={donor.pincode} onChange={(e) => setDonor({ ...donor, pincode: e.target.value })} className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm outline-none focus:border-primary" />
                      </div>
                      <div>
                        <label className="mb-1.5 block text-sm font-semibold text-foreground/80">Country <span className="text-red-500">*</span></label>
                        <input required value={donor.country} onChange={(e) => setDonor({ ...donor, country: e.target.value })} className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm outline-none focus:border-primary" />
                      </div>
                    </div>

                    <div className="space-y-3 pt-2">

                      <label className="flex items-start gap-3">
                        <input type="checkbox" checked={donor.consent} onChange={(e) => setDonor({ ...donor, consent: e.target.checked })} className="mt-1 h-4 w-4 rounded border-border text-primary focus:ring-primary" />
                        <span className="text-sm text-foreground/80">I agree to the Terms & Conditions and Privacy Policy, and consent to be contacted regarding my donation.</span>
                      </label>
                    </div>
                  </form>
                </div>
              </div>

              <aside className="h-fit rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-8">
                <h3 className="font-display text-lg font-bold">Donation Summary</h3>
                <dl className="mt-4 space-y-3 text-sm">
                  <div className="flex justify-between">
                    <dt className="text-muted-foreground">Amount</dt>
                    <dd className="font-bold">₹{finalAmount ? finalAmount.toLocaleString("en-IN") : 0}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-muted-foreground">Frequency</dt>
                    <dd className="font-medium capitalize">{frequency.replace("-", " ")}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-muted-foreground">Cause</dt>
                    <dd className="font-medium text-right max-w-[150px]">{cause}</dd>
                  </div>
                </dl>
                <div className="my-5 border-t border-border" />
                <button
                  type="submit"
                  form="donor-form"
                  disabled={busy || !finalAmount || finalAmount < minAmount}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl gradient-brand px-5 py-3.5 text-sm font-semibold text-white shadow-lg shadow-primary/30 transition hover:shadow-xl disabled:opacity-60"
                >
                  {busy ? <Loader2 className="h-4 w-4 animate-spin" /> : <CreditCard className="h-4 w-4" />}
                  Donate Now
                </button>
                <p className="mt-4 flex items-center justify-center gap-1.5 text-xs text-muted-foreground">
                  <Shield className="h-3.5 w-3.5" /> 100% Secure Encrypted Payment
                </p>
                <div className="mt-6 rounded-2xl border border-border/80 bg-background/50 p-4 text-center">
                  <div className="flex items-center justify-center gap-1.5 text-xs font-bold text-foreground">
                    <Shield className="h-3.5 w-3.5 text-emerald-600" />
                    <span>Certified NGO</span>
                  </div>
                  <div className="mt-1.5 flex flex-wrap justify-center items-center gap-x-2 text-[11px]">
                    <a
                      href="/12A Certificate.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-foreground underline decoration-primary/40 underline-offset-2 hover:text-primary transition-colors"
                    >
                      12A Registered
                    </a>
                    <span className="text-muted-foreground">•</span>
                    <a
                      href="/80G Certificate.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-foreground underline decoration-primary/40 underline-offset-2 hover:text-primary transition-colors"
                    >
                      80G Approved
                    </a>
                  </div>
                  <p className="mt-1 text-[10px] font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                    Tax Benefits Available
                  </p>
                </div>
              </aside>
            </div>
          )}

          {step === "payu" && (
            <div className="mx-auto w-full max-w-4xl space-y-6">
              <div className="rounded-3xl border border-border bg-card shadow-sm overflow-hidden">
                <BankDetails />
                <div className="border-t border-border bg-muted/30 p-6 sm:p-8">
                  <div className="mx-auto max-w-lg">
                    <h3 className="font-display text-lg font-bold text-center">Submit Payment Reference</h3>
                    <p className="mt-1 text-center text-xs text-muted-foreground">
                      Once you have completed the bank transfer or scanned the QR code, please paste your transaction ID / UTR number below to receive your 80G tax benefits.
                    </p>
                    
                    <form onSubmit={async (e) => {
                      e.preventDefault();
                      const fd = new FormData(e.currentTarget);
                      const utr = String(fd.get("utr") || "").trim();
                      if (!utr) return toast.error("Please enter your payment reference / UTR number.");
                      
                      setBusy(true);
                      try {
                        const result = await insertDonation({
                          donor_name: donor.name,
                          donor_email: donor.email,
                          amount: finalAmount,
                          cause: cause,
                          payment_gateway: "UPI/Bank Transfer",
                          payment_status: "pending_verification",
                          payment_reference: utr,
                        });
                        
                        navigate({
                          to: "/donate/thank-you",
                          search: {
                            name: donor.name,
                            amount: finalAmount,
                            ref: utr,
                            id: result?.id,
                          }
                        });
                      } catch (err) {
                        console.error(err);
                        toast.error("Could not register your reference. Please contact support.");
                      } finally {
                        setBusy(false);
                      }
                    }} className="mt-4 space-y-4">
                      <div>
                        <label className="mb-1 block text-xs font-semibold text-foreground/80">Transaction ID / UTR Reference Number</label>
                        <input
                          required
                          name="utr"
                          placeholder="e.g. 12-digit UTR or UPI Transaction ID"
                          className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm outline-none focus:border-primary"
                        />
                      </div>
                      <div className="flex flex-col gap-3 pt-2">
                        <button
                          disabled={busy}
                          className="inline-flex w-full items-center justify-center gap-2 rounded-xl gradient-brand px-5 py-3 text-sm font-semibold text-white shadow disabled:opacity-60"
                        >
                          {busy && <Loader2 className="h-4 w-4 animate-spin" />}
                          I have Transferred & Submitted Details
                        </button>
                        <button
                          type="button"
                          onClick={() => setStep("details")}
                          className="text-xs font-semibold text-muted-foreground hover:text-primary transition-colors underline"
                        >
                          Go back to details
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          )}

          {step === "npci" && (
            <div className="mx-auto max-w-lg text-center">
              <div className="rounded-3xl border border-border bg-card p-10 shadow-sm">
                <Loader2 className="mx-auto h-10 w-10 animate-spin text-primary" />
                <h2 className="mt-4 font-display text-2xl font-bold">Connecting to NPCI eNACH</h2>
                <p className="mt-2 text-muted-foreground">Please wait while we redirect you to the official NPCI portal to securely authorize your monthly recurring mandate.</p>
                <button onClick={() => setStep("details")} className="mt-6 text-sm font-semibold text-primary underline">Cancel and return</button>
              </div>
            </div>
          )}
        </div>
      </section>
    </SiteShell>
  );
}