import { Calendar, ArrowRight } from "lucide-react";
import { Reveal } from "../site/Reveal";
import education from "@/assets/1 (2).jpeg";
import women from "@/assets/1 (4).jpeg";
import env from "@/assets/1 (6).jpeg";

const EVENTS = [
  { date: "Jul 12, 2026", img: education, title: "Scholarships Day 2026", summary: "Awarding 250 new merit scholarships at our annual ceremony in Delhi." },
  { date: "Aug 03, 2026", img: women, title: "Women's Skill Mela", summary: "A 3-day exhibition featuring products made by our self-help groups." },
  { date: "Sep 21, 2026", img: env, title: "10,000 Trees Drive", summary: "Join volunteers across 6 cities for our biggest plantation drive yet." },
];

export function Updates() {
  return (
    <section id="events" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Latest Updates & Events</p>
            <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">What's happening on the ground</h2>
          </div>
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {EVENTS.map((e, i) => (
            <Reveal key={e.title} delay={i * 0.07}>
              <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                <div className="aspect-[16/10] overflow-hidden">
                  <img src={e.img} alt={e.title} loading="lazy" width={800} height={500} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                </div>
                <div className="flex flex-1 flex-col gap-2 p-5">
                  <p className="inline-flex w-fit items-center gap-1.5 rounded-full bg-green-tint px-2.5 py-1 text-xs font-semibold text-primary">
                    <Calendar className="h-3 w-3" /> {e.date}
                  </p>
                  <h3 className="font-display text-lg font-bold">{e.title}</h3>
                  <p className="flex-1 text-sm text-foreground/70">{e.summary}</p>
                  <a className="mt-2 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                    Learn more <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}