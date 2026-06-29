import { useState, type FormEvent } from "react";
import { Mail, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { subscribeNewsletter } from "@/lib/db";
import { Reveal } from "../site/Reveal";

export function Newsletter() {
  const [busy, setBusy] = useState(false);
  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    setBusy(true);
    try {
      await subscribeNewsletter({
        full_name: String(fd.get("name") || "").trim(),
        email: String(fd.get("email") || "").trim(),
      });
      toast.success("Subscribed! Welcome to the community.");
      e.currentTarget.reset();
    } catch (err) {
      console.error(err);
      toast.error("Couldn't subscribe. Please try again.");
    } finally {
      setBusy(false);
    }
  }
  return (
    <section className="py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl gradient-brand p-8 text-white shadow-2xl shadow-primary/20 sm:p-12">
            <div className="absolute -right-12 -top-12 h-48 w-48 rounded-full bg-white/10 blur-2xl" aria-hidden />
            <div className="relative grid gap-6 md:grid-cols-[1.2fr_1fr] md:items-center">
              <div>
                <Mail className="h-7 w-7 opacity-90" />
                <h2 className="mt-3 font-display text-2xl font-bold sm:text-3xl">Stories from the field, in your inbox.</h2>
                <p className="mt-2 text-sm opacity-90">A short, honest newsletter once a month. No spam.</p>
              </div>
              <form onSubmit={onSubmit} className="grid gap-3">
                <input
                  required name="name" placeholder="Your name"
                  className="rounded-xl border border-white/30 bg-white/15 px-4 py-3 text-sm text-white placeholder:text-white/70 outline-none focus:border-white"
                />
                <input
                  required name="email" type="email" placeholder="Email address"
                  className="rounded-xl border border-white/30 bg-white/15 px-4 py-3 text-sm text-white placeholder:text-white/70 outline-none focus:border-white"
                />
                <button disabled={busy} className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-primary shadow disabled:opacity-60">
                  {busy && <Loader2 className="h-4 w-4 animate-spin" />}
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}