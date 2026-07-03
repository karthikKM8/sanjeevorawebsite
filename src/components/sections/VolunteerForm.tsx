import { useState, type FormEvent } from "react";
import { toast } from "sonner";
import { Loader2, HandHeart, HeartHandshake, Users, Megaphone } from "lucide-react";
import { insertVolunteer } from "@/lib/db";
import { Reveal } from "../site/Reveal";

const AREAS = ["Teach", "Mentor", "Support Events", "Partner With Us", "Nutrition Programs", "Career Readiness"];

export function VolunteerForm() {
  const [busy, setBusy] = useState(false);
  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    setBusy(true);
    try {
      await insertVolunteer({
        full_name: String(fd.get("name") || "").trim(),
        email: String(fd.get("email") || "").trim(),
        phone: String(fd.get("phone") || "").trim(),
        area_of_interest: String(fd.get("area") || ""),
        message: String(fd.get("message") || "").trim() || undefined,
      });
      toast.success("Thank you! We'll be in touch shortly.");
      e.currentTarget.reset();
    } catch (err) {
      console.error(err);
      toast.error("Couldn't submit. Please try again.");
    } finally {
      setBusy(false);
    }
  }
  return (
    <section id="volunteer" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 overflow-hidden rounded-3xl border border-border bg-card shadow-sm md:grid-cols-2">
          <div className="relative gradient-soft p-8 sm:p-10">
            <Reveal>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Be Part of the Change</p>
              <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">Give your time. Change a life.</h2>
              <p className="mt-4 text-foreground/75">
                Your time, skills and compassion can make a lasting difference.
                Join our community of volunteers and help create brighter
                futures for children and young adults.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-6">
                <div className="flex flex-col items-start gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <HeartHandshake className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold uppercase tracking-wider text-sm">Volunteer</h3>
                    <p className="text-sm text-foreground/70">Be the Change</p>
                  </div>
                </div>
                <div className="flex flex-col items-start gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <HandHeart className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold uppercase tracking-wider text-sm">Support</h3>
                    <p className="text-sm text-foreground/70">Our Initiatives</p>
                  </div>
                </div>
                <div className="flex flex-col items-start gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Users className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold uppercase tracking-wider text-sm">Collaborate</h3>
                    <p className="text-sm text-foreground/70">For Greater Good</p>
                  </div>
                </div>
                <div className="flex flex-col items-start gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Megaphone className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold uppercase tracking-wider text-sm">Spread</h3>
                    <p className="text-sm text-foreground/70">Awareness</p>
                  </div>
                </div>
              </div>

            </Reveal>
          </div>
          <form onSubmit={onSubmit} className="space-y-4 p-8 sm:p-10">
            <Field name="name" label="Full Name" required />
            <Field name="email" type="email" label="Email" required />
            <Field name="phone" label="Phone" required />
            <div>
              <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-foreground/70">
                How would you like to help?
              </label>
              <select
                name="area"
                required
                defaultValue=""
                className="w-full rounded-xl border border-border bg-background px-3.5 py-2.5 text-sm outline-none focus:border-primary"
              >
                <option value="" disabled>Choose a way to help</option>
                {AREAS.map((a) => <option key={a} value={a}>{a}</option>)}
              </select>
            </div>
            <div>
              <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-foreground/70">
                Anything else? (optional)
              </label>
              <textarea
                name="message"
                rows={3}
                className="w-full rounded-xl border border-border bg-background px-3.5 py-2.5 text-sm outline-none focus:border-primary"
              />
            </div>
            <button
              disabled={busy}
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl gradient-brand px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/30 disabled:opacity-60"
            >
              {busy && <Loader2 className="h-4 w-4 animate-spin" />}
              Become a Volunteer
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({ name, label, type = "text", required }: { name: string; label: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-foreground/70">{label}</label>
      <input
        name={name}
        type={type}
        required={required}
        className="w-full rounded-xl border border-border bg-background px-3.5 py-2.5 text-sm outline-none focus:border-primary"
      />
    </div>
  );
}