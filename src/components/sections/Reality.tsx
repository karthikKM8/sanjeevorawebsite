import { Reveal } from "../site/Reveal";
import { GraduationCap, AlertCircle, Wrench, Briefcase } from "lucide-react";

const ITEMS = [
  {
    icon: GraduationCap,
    stat: "6.5 MILLION",
    title: "SCHOOL DROPOUTS",
    desc: "Children in India drop out of school every year.",
  },
  {
    icon: AlertCircle,
    stat: "6.7 MILLION",
    title: "CHILD HUNGER",
    desc: "Children in India suffer from hunger every day.",
  },
  {
    icon: Wrench,
    stat: "63%",
    title: "LACK OF SKILLS",
    desc: "Of India's youth lack employable skills required for jobs.",
  },
  {
    icon: Briefcase,
    stat: "15 MILLION",
    title: "YOUTH UNEMPLOYMENT",
    desc: "Young people in India are currently unemployed.",
  },
];

export function Reality() {
  return (
    <section className="bg-secondary/30 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">THE PROBLEMS WE AIM TO SOLVE</p>
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
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
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
