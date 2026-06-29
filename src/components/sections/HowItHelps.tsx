import { Utensils, BookOpen, Sparkles, Rocket } from "lucide-react";
import { Reveal } from "../site/Reveal";

const STEPS = [
  { step: "Step 1", icon: Utensils, title: "Nourish", desc: "We start by ensuring children have access to nutritious meals and essential support." },
  { step: "Step 2", icon: BookOpen, title: "Educate", desc: "We provide educational resources, mentoring and learning opportunities to keep children in school." },
  { step: "Step 3", icon: Sparkles, title: "Empower", desc: "Children develop confidence, leadership, digital literacy and practical life skills." },
  { step: "Step 4", icon: Rocket, title: "Build Futures", desc: "Young adults receive career guidance, skill training and opportunities to become independent and successful." },
];

export function HowItHelps() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">How We Create Impact</p>
            <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">
              Every child's journey matters.
            </h2>
          </div>
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((t, i) => {
            const Icon = t.icon;
            return (
              <Reveal key={t.title} delay={i * 0.08}>
                <div className="group relative flex h-full flex-col rounded-3xl border border-border bg-card p-7 transition hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl gradient-brand text-white">
                    <Icon className="h-5 w-5" />
                  </div>
                  <p className="mt-5 text-xs font-semibold uppercase tracking-wider text-primary">{t.step}</p>
                  <h3 className="mt-1 font-display text-xl font-bold">{t.title}</h3>
                  <p className="mt-2 flex-1 text-sm text-foreground/70">{t.desc}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}