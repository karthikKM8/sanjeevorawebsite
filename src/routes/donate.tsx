import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { CreditCard, Loader2, Shield, IndianRupee, ArrowLeft } from "lucide-react";
import { SiteShell } from "@/components/site/SiteShell";
import { insertDonation } from "@/lib/db";
import { CAUSES } from "@/lib/causes";
import { toast } from "sonner";

const search = z.object({
  amount: z.coerce.number().min(10).optional(),
  name: z.string().optional(),
  email: z.string().email().optional(),
  cause: z.string().optional(),
});

export const Route = createFileRoute("/donate")({
  validateSearch: search,
  head: () => ({
    meta: [
      { title: "Donate — Sanjeevora Vidya Mission" },
      { name: "description", content: "Make a secure one-time or monthly donation to Sanjeevora Vidya Mission — funds nutrition, education, mentorship and career opportunities for children." },
      { property: "og:title", content: "Donate to Sanjeevora Vidya Mission" },
      { property: "og:description", content: "Secure online donation page — one-time or monthly giving." },
      { property: "og:url", content: "/donate" },
    ],
    links: [{ rel: "canonical", href: "/donate" }],
  }),
  component: DonatePage,
});

const ONE_TIME_PRESETS = [5000, 8000, 14000, 20000];
const MONTHLY_PRESETS = [800, 1600, 2400, 5000];

function DonatePage() {
  const sp = Route.useSearch();
  const navigate = useNavigate();
  const [frequency, setFrequency] = useState<"one-time" | "monthly">("one-time");
  const [amount, setAmount] = useState<number>(sp.amount ?? 5000);
  const [name, setName] = useState(sp.name ?? "");
  const [email, setEmail] = useState(sp.email ?? "");
  const [cause, setCause] = useState<string>(sp.cause ?? "general");
  const [gateway, setGateway] = useState<"razorpay" | "stripe">("razorpay");
  const [busy, setBusy] = useState(false);

  const PRESETS = frequency === "monthly" ? MONTHLY_PRESETS : ONE_TIME_PRESETS;

  async function pay() {
    if (!name.trim() || !email.trim()) return toast.error("Name and email are required");
    if (!amount || amount < 10) return toast.error("Minimum donation is ₹10");
    setBusy(true);
    try {
      // === Payment gateway integration placeholder ===
      // Real Razorpay flow would call window.Razorpay({ key, amount: amount*100, ... }).open()
      // Real Stripe flow would call a server fn to create a Checkout Session and redirect.
      const ref = `${gateway.toUpperCase()}_${Date.now()}`;
      const ok = Math.random() > 0.1; // simulate 90% success
      const status = ok ? "succeeded" : "failed";
      const donation = await insertDonation({
        donor_name: name.trim(),
        donor_email: email.trim(),
        amount,
        cause,
        payment_gateway: gateway,
        payment_status: status,
        payment_reference: ref,
      });
      await new Promise((r) => setTimeout(r, 700));
      navigate({
        to: ok ? "/donate/thank-you" : "/donate/failure",
        search: { id: donation.id, amount, name, ref },
      });
    } catch (e) {
      console.error(e);
      toast.error("Payment could not start. Please try again.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <SiteShell>
      <div className="gradient-soft py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link to="/" className="inline-flex items-center gap-1 text-sm text-foreground/70 hover:text-primary">
            <ArrowLeft className="h-4 w-4" /> Back
          </Link>
          <h1 className="mt-2 font-display text-4xl font-extrabold sm:text-5xl">Make a difference today</h1>
          <p className="mt-2 max-w-2xl text-foreground/70">
            Every contribution helps provide nutritious meals, quality
            education, mentorship and brighter opportunities for the children
            who need them most. Secure, transparent, tax-deductible (80G).
          </p>
        </div>
      </div>

      <section className="py-12">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 sm:px-6 lg:grid-cols-[1.3fr_1fr] lg:px-8">
          <div className="rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-8">
            <h2 className="font-display text-xl font-bold">1. Choose giving option</h2>
            <div className="mt-4 inline-flex rounded-full border border-border bg-background p-1 text-sm font-semibold">
              {(["one-time", "monthly"] as const).map((f) => (
                <button
                  key={f}
                  onClick={() => { setFrequency(f); setAmount((f === "monthly" ? MONTHLY_PRESETS : ONE_TIME_PRESETS)[0]); }}
                  className={`rounded-full px-4 py-1.5 transition ${frequency === f ? "bg-primary text-white shadow" : "text-foreground/70 hover:text-foreground"}`}
                >
                  {f === "one-time" ? "One-Time" : "Monthly"}
                </button>
              ))}
            </div>
            <p className="mt-3 text-xs text-muted-foreground">
              {frequency === "monthly"
                ? "Become a monthly supporter and help us create sustainable, long-term impact."
                : "Support our initiatives with a one-time contribution."}
            </p>
            <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-4">
              {PRESETS.map((p) => (
                <button
                  key={p}
                  onClick={() => setAmount(p)}
                  className={`rounded-xl border px-3 py-2.5 text-sm font-semibold ${amount === p ? "border-primary bg-primary text-white" : "border-border hover:border-primary/50"}`}
                >
                  ₹{p.toLocaleString("en-IN")}
                </button>
              ))}
            </div>
            <div className="mt-3 flex items-center gap-2 rounded-xl border border-border px-3 py-2.5">
              <IndianRupee className="h-4 w-4 text-muted-foreground" />
              <input
                type="number"
                value={amount}
                min={10}
                onChange={(e) => setAmount(Number(e.target.value))}
                placeholder="Custom amount"
                className="w-full bg-transparent text-sm outline-none"
              />
            </div>

            <h2 className="mt-8 font-display text-xl font-bold">2. Support a cause</h2>
            <div className="mt-3 flex flex-wrap gap-2">
              <CauseChip value="general" cur={cause} set={setCause} label="Where most needed" />
              {CAUSES.map((c) => (
                <CauseChip key={c.slug} value={c.slug} cur={cause} set={setCause} label={c.title} />
              ))}
            </div>

            <h2 className="mt-8 font-display text-xl font-bold">3. Your details</h2>
            <div className="mt-3 grid gap-3 sm:grid-cols-2">
              <input required placeholder="Full name" value={name} onChange={(e) => setName(e.target.value)} className="rounded-xl border border-border bg-background px-3.5 py-2.5 text-sm outline-none focus:border-primary" />
              <input required type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="rounded-xl border border-border bg-background px-3.5 py-2.5 text-sm outline-none focus:border-primary" />
            </div>

            <h2 className="mt-8 font-display text-xl font-bold">4. Payment method</h2>
            <div className="mt-3 grid gap-3 sm:grid-cols-2">
              <GatewayCard label="Razorpay" desc="UPI, Cards, Net Banking" current={gateway} value="razorpay" set={setGateway} />
              <GatewayCard label="Stripe" desc="International cards" current={gateway} value="stripe" set={setGateway} />
            </div>
          </div>

          <aside className="h-fit rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-8">
            <h3 className="font-display text-lg font-bold">Payment summary</h3>
            <dl className="mt-4 space-y-3 text-sm">
              <Row k="Donor" v={name || "—"} />
              <Row k="Email" v={email || "—"} />
              <Row k="Frequency" v={frequency === "monthly" ? "Monthly" : "One-Time"} />
              <Row k="Cause" v={cause === "general" ? "Where most needed" : (CAUSES.find((c) => c.slug === cause)?.title ?? cause)} />
              <Row k="Method" v={gateway === "razorpay" ? "Razorpay" : "Stripe"} />
              <div className="my-3 border-t border-border" />
              <Row k="Donation" v={`₹${amount?.toLocaleString("en-IN") || 0}${frequency === "monthly" ? " /mo" : ""}`} bold />
            </dl>
            <button
              onClick={pay}
              disabled={busy}
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl gradient-brand px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/30 disabled:opacity-60"
            >
              {busy ? <Loader2 className="h-4 w-4 animate-spin" /> : <CreditCard className="h-4 w-4" />}
              {frequency === "monthly" ? `Donate ₹${amount?.toLocaleString("en-IN") || 0} Monthly` : `Donate ₹${amount?.toLocaleString("en-IN") || 0}`}
            </button>
            <ul className="mt-4 space-y-1.5 text-xs text-muted-foreground">
              <li>✔ Secure Payments</li>
              <li>✔ Instant Donation Receipt</li>
              <li>✔ Trusted &amp; Transparent Giving</li>
            </ul>
            <p className="mt-3 flex items-center justify-center gap-1.5 text-xs text-muted-foreground">
              <Shield className="h-3.5 w-3.5" /> Encrypted & PCI-DSS compliant
            </p>
          </aside>
        </div>
      </section>
    </SiteShell>
  );
}

function CauseChip({ value, cur, set, label }: { value: string; cur: string; set: (v: string) => void; label: string }) {
  return (
    <button onClick={() => set(value)} className={`rounded-full border px-3.5 py-1.5 text-sm ${cur === value ? "border-primary bg-primary text-white" : "border-border hover:border-primary/50"}`}>
      {label}
    </button>
  );
}

function GatewayCard({ label, desc, value, current, set }: { label: string; desc: string; value: "razorpay" | "stripe"; current: string; set: (v: "razorpay" | "stripe") => void }) {
  const active = current === value;
  return (
    <button onClick={() => set(value)} className={`rounded-2xl border p-4 text-left ${active ? "border-primary bg-primary/5" : "border-border hover:border-primary/40"}`}>
      <p className="font-semibold">{label}</p>
      <p className="text-xs text-muted-foreground">{desc}</p>
    </button>
  );
}

function Row({ k, v, bold }: { k: string; v: string; bold?: boolean }) {
  return (
    <div className="flex items-center justify-between gap-3">
      <dt className="text-muted-foreground">{k}</dt>
      <dd className={`text-right ${bold ? "font-display text-lg font-extrabold text-primary" : ""}`}>{v}</dd>
    </div>
  );
}