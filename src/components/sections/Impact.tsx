import { Reveal } from "../site/Reveal";
import { Counter } from "../site/Counter";
import { IndianRupee, Users, CheckCircle2, HandHeart } from "lucide-react";

const ITEMS = [
  { icon: IndianRupee, label: "Total Donations Raised", value: 24800000, prefix: "₹", suffix: "" },
  { icon: Users, label: "Active Volunteers", value: 1842, suffix: "" },
  { icon: CheckCircle2, label: "Projects Completed", value: 215, suffix: "" },
  { icon: HandHeart, label: "Beneficiaries Supported", value: 158000, suffix: "+" },
];

export function Impact() {
  return (
    <section className="relative overflow-hidden py-20">
      <div className="absolute inset-0 gradient-brand opacity-95" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center text-white">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] opacity-90">Our Impact</p>
            <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">
              Numbers that translate into lives changed.
            </h2>
          </div>
        </Reveal>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {ITEMS.map((it, i) => {
            const Icon = it.icon;
            return (
              <Reveal key={it.label} delay={i * 0.08}>
                <div className="rounded-3xl bg-white/15 p-6 text-white shadow-lg backdrop-blur">
                  <Icon className="h-7 w-7 opacity-90" />
                  <div className="mt-4 font-display text-3xl font-extrabold sm:text-4xl">
                    {"prefix" in it ? it.prefix : ""}
                    <Counter to={it.value} suffix={it.suffix} />
                  </div>
                  <p className="mt-1 text-sm opacity-90">{it.label}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}