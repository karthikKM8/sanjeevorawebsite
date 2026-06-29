import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import story1 from "@/assets/1 (8).jpeg";
import story2 from "@/assets/1 (1).jpeg";
import story3 from "@/assets/1 (2).jpeg";
import { Reveal } from "../site/Reveal";

const STORIES = [
  {
    img: story1,
    name: "Priya, 14 — Karnataka",
    story:
      "Priya skipped school often because there was rarely food at home. With daily nutrition support and tutoring, she's now the first in her family to qualify for the district science olympiad.",
    impact: "Back in school. Full scholarship secured.",
  },
  {
    img: story2,
    name: "Aarthi, 19 — Bengaluru",
    story:
      "Through our career readiness program — digital literacy, communication training and mentorship — Aarthi landed her first full-time job and now supports her younger siblings' education.",
    impact: "First job. Financially independent.",
  },
  {
    img: story3,
    name: "Ravi, 12 — Tamil Nadu",
    story:
      "Once shy and falling behind in class, Ravi joined our child-development program. With mentoring, art classes and leadership workshops, he now leads his school's debate club.",
    impact: "Confidence rebuilt. Class topper.",
  },
];

export function Stories() {
  const [i, setI] = useState(0);
  const s = STORIES[i];
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Success Stories</p>
            <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">
              Real people. Real change.
            </h2>
          </div>
        </Reveal>

        <Reveal>
          <div className="mt-12 grid gap-8 overflow-hidden rounded-3xl border border-border bg-card shadow-sm md:grid-cols-2">
            <img
              key={s.img}
              src={s.img}
              alt={s.name}
              loading="lazy"
              width={600}
              height={600}
              className="h-full max-h-[420px] w-full object-cover"
            />
            <div className="flex flex-col justify-between p-7 sm:p-10">
              <div>
                <Quote className="h-8 w-8 text-primary" />
                <p className="mt-4 font-display text-lg font-medium leading-snug text-foreground sm:text-xl">
                  "{s.story}"
                </p>
                <p className="mt-4 text-sm font-semibold text-foreground">{s.name}</p>
                <p className="mt-1 inline-block rounded-full bg-green-tint px-3 py-1 text-xs font-semibold text-primary">
                  {s.impact}
                </p>
              </div>
              <div className="mt-8 flex items-center justify-between">
                <div className="flex gap-1.5">
                  {STORIES.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setI(idx)}
                      aria-label={`Story ${idx + 1}`}
                      className={`h-1.5 rounded-full transition-all ${
                        idx === i ? "w-8 bg-primary" : "w-3 bg-border"
                      }`}
                    />
                  ))}
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => setI((i - 1 + STORIES.length) % STORIES.length)}
                    className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border hover:border-primary hover:text-primary"
                    aria-label="Previous"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => setI((i + 1) % STORIES.length)}
                    className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border hover:border-primary hover:text-primary"
                    aria-label="Next"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}