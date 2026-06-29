import { Reveal } from "../site/Reveal";
import { BookOpen, Utensils, GraduationCap } from "lucide-react";

const ITEMS = [
  {
    icon: BookOpen,
    stat: "1.17 Million",
    title: "Children Are Out of School",
    desc: "More than 1.17 million children across India remain out of school, denying them the education needed to build a brighter future.",
  },
  {
    icon: Utensils,
    stat: "35.5%",
    title: "Children Under Five Are Stunted",
    desc: "Over one-third of children under five suffer from chronic malnutrition, affecting growth, cognitive development, and ability to learn.",
  },
  {
    icon: GraduationCap,
    stat: "1 in 10",
    title: "Drop Out During Secondary",
    desc: "Many students leave school before completing secondary education due to financial hardship, family responsibilities, and lack of resources.",
  },
];

export function Reality() {
  return (
    <section className="bg-secondary/30 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">The Reality We Face</p>
            <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">
              The problems that still remain unseen
            </h2>
            <p className="mt-4 text-foreground/70">
              Every child deserves the opportunity to learn, grow, and dream.
              Yet millions across India continue to face challenges that prevent
              them from reaching their full potential.
            </p>
          </div>
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {ITEMS.map((it, i) => {
            const Icon = it.icon;
            return (
              <Reveal key={it.title} delay={i * 0.08}>
                <div className="flex h-full flex-col rounded-3xl border border-border bg-card p-7 shadow-sm">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="mt-5 font-display text-3xl font-extrabold text-primary">
                    {it.stat}
                  </div>
                  <h3 className="mt-1 font-display text-lg font-bold">{it.title}</h3>
                  <p className="mt-2 text-sm text-foreground/70">{it.desc}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
        <Reveal>
          <p className="mx-auto mt-10 max-w-2xl text-center text-sm text-foreground/70">
            These challenges inspire our commitment to creating opportunities
            that transform lives through education, nutrition, mentorship, and
            community support.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
