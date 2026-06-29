import { Quote } from "lucide-react";
import { Reveal } from "../site/Reveal";

const T = [
  { name: "Aarav Mehta", role: "Monthly Donor, Mumbai", text: "I've donated to dozens of NGOs. Sanjeevora Vidya Mission is the only one that sends me photos and stories of the children my contribution is supporting." },
  { name: "Ishita Banerjee", role: "Volunteer, Kolkata", text: "Two weekends a month and I've never felt more useful. The team is warm, organized, and ridiculously hard-working." },
  { name: "Dr. Karan Singh", role: "Nutrition Partner", text: "Their nutrition and education programs are field-tested and built on real respect for the communities. A rare thing in this sector." },
];

export function Testimonials() {
  return (
    <section className="bg-secondary/30 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Testimonials</p>
            <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">What donors & volunteers say</h2>
          </div>
        </Reveal>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {T.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.07}>
              <div className="flex h-full flex-col rounded-3xl border border-border bg-card p-6">
                <Quote className="h-6 w-6 text-primary" />
                <p className="mt-3 flex-1 text-sm text-foreground/80">"{t.text}"</p>
                <div className="mt-5 border-t border-border pt-4">
                  <p className="text-sm font-semibold">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}