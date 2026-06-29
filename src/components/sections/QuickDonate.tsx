import { useState, type FormEvent } from "react";
import { useNavigate } from "@tanstack/react-router";
import { Heart, Loader2 } from "lucide-react";
import { toast } from "sonner";

const PRESETS = [5000, 8000, 14000] as const;

export function QuickDonate() {
  const navigate = useNavigate();
  const [amount, setAmount] = useState<number | "custom">(5000);
  const [custom, setCustom] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [busy, setBusy] = useState(false);

  const finalAmount = amount === "custom" ? Number(custom) : amount;

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!name.trim() || !email.trim()) return toast.error("Please add your name and email");
    if (!finalAmount || finalAmount < 10) return toast.error("Please enter an amount of at least ₹10");
    setBusy(true);
    navigate({
      to: "/donate",
      search: { amount: finalAmount, name, email },
    }).finally(() => setBusy(false));
  }

  return (
    <div className="relative w-full max-w-md rounded-3xl border border-border bg-white/95 p-6 shadow-2xl shadow-primary/10 backdrop-blur sm:p-7">
      <div className="mb-4 flex items-center gap-2">
        <span className="inline-flex h-9 w-9 items-center justify-center rounded-full gradient-brand text-white">
          <Heart className="h-4 w-4 fill-current" />
        </span>
        <div>
          <h3 className="font-display text-lg font-bold leading-none">Make a donation</h3>
          <p className="text-xs text-muted-foreground">100% goes to programs on the ground</p>
        </div>
      </div>

      <form onSubmit={onSubmit} className="space-y-4">
        <div>
          <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-foreground/70">
            Choose amount
          </label>
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
            {PRESETS.map((p) => (
              <button
                type="button"
                key={p}
                onClick={() => setAmount(p)}
                className={`rounded-xl border px-3 py-2.5 text-sm font-semibold transition ${
                  amount === p
                    ? "border-primary bg-primary text-white shadow"
                    : "border-border bg-background hover:border-primary/50"
                }`}
              >
                ₹{p.toLocaleString("en-IN")}
              </button>
            ))}
            <button
              type="button"
              onClick={() => setAmount("custom")}
              className={`rounded-xl border px-3 py-2.5 text-sm font-semibold transition ${
                amount === "custom"
                  ? "border-primary bg-primary text-white shadow"
                  : "border-border bg-background hover:border-primary/50"
              }`}
            >
              Custom
            </button>
          </div>
          {amount === "custom" && (
            <div className="mt-3 flex items-center gap-2 rounded-xl border border-border bg-background px-3 py-2.5">
              <span className="text-sm font-semibold text-muted-foreground">₹</span>
              <input
                type="number"
                min={10}
                value={custom}
                onChange={(e) => setCustom(e.target.value)}
                placeholder="Enter amount"
                className="w-full bg-transparent text-sm outline-none"
              />
            </div>
          )}
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          <input
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Full name"
            className="rounded-xl border border-border bg-background px-3.5 py-2.5 text-sm outline-none focus:border-primary"
          />
          <input
            required
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email address"
            className="rounded-xl border border-border bg-background px-3.5 py-2.5 text-sm outline-none focus:border-primary"
          />
        </div>

        <button
          type="submit"
          disabled={busy}
          className="group inline-flex w-full items-center justify-center gap-2 rounded-xl gradient-brand px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/30 transition hover:shadow-xl disabled:opacity-60"
        >
          {busy ? <Loader2 className="h-4 w-4 animate-spin" /> : <Heart className="h-4 w-4 fill-current" />}
          Donate {finalAmount ? `₹${finalAmount.toLocaleString("en-IN")}` : ""} Securely
        </button>
        <p className="text-center text-[11px] text-muted-foreground">
          You'll be redirected to a secure payment page (Razorpay / Stripe).
        </p>
      </form>
    </div>
  );
}