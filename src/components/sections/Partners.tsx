import { Reveal } from "../site/Reveal";

const LOGOS = ["Tata Trust", "Infosys Foundation", "Wipro Cares", "HDFC Bank", "Reliance Foundation", "Mahindra Rise", "ITC Mission", "Axis Bank"];

export function Partners() {
  return (
    <section className="border-y border-border bg-secondary/30 py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <p className="text-center text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">
            Partners & Sponsors
          </p>
        </Reveal>
        <div className="mt-8 grid grid-cols-2 items-center gap-6 sm:grid-cols-4 lg:grid-cols-8">
          {LOGOS.map((l, i) => (
            <Reveal key={l} delay={i * 0.04}>
              <div className="flex items-center justify-center rounded-xl border border-border bg-white px-3 py-4 text-center font-display text-sm font-bold text-foreground/60 transition hover:text-primary">
                {l}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}