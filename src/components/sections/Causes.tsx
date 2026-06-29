import { Link } from "@tanstack/react-router";
import { Heart } from "lucide-react";
import { CAUSES } from "@/lib/causes";
import { Reveal } from "../site/Reveal";

export function Causes() {
  return (
    <section id="causes" className="relative py-20">
      <div className="absolute inset-0 gradient-soft opacity-50" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Our Programs</p>
            <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">
              Creating sustainable change through four core programs.
            </h2>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {CAUSES.map((c, i) => {
            const Icon = c.icon;
            return (
              <Reveal key={c.slug} delay={i * 0.06}>
                <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={c.image}
                      alt={c.title}
                      loading="lazy"
                      width={800}
                      height={600}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                    <div className="absolute left-3 top-3 inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-white/95 text-primary shadow">
                      <Icon className="h-5 w-5" />
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col gap-3 p-5">
                    <h3 className="font-display text-lg font-bold">{c.title}</h3>
                    <p className="flex-1 text-sm text-foreground/70">{c.description}</p>
                    <Link
                      to="/donate"
                      search={{ cause: c.slug }}
                      className="mt-2 inline-flex w-fit items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-2 text-sm font-semibold text-primary transition hover:bg-primary hover:text-white"
                    >
                      <Heart className="h-4 w-4" /> Donate
                    </Link>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}