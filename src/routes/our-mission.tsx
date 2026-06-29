import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteShell";
import { Target, Eye } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/our-mission")({
  head: () => ({
    meta: [
      { title: "Our Mission — Sanjeevora Vidya Mission" },
      { name: "description", content: "Our mission and vision: empowering underprivileged children and young adults through nutrition, education, mentorship and career opportunities." },
      { property: "og:title", content: "Our Mission — Sanjeevora Vidya Mission" },
      { property: "og:description", content: "Empowering children with food, education, mentorship and opportunity." },
      { property: "og:url", content: "/our-mission" },
    ],
    links: [{ rel: "canonical", href: "/our-mission" }],
  }),
  component: MissionPage,
});

function MissionPage() {
  return (
    <SiteShell>
      <div className="gradient-soft py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="font-display text-4xl font-extrabold sm:text-5xl">Our Mission &amp; Vision</h1>
          <p className="mt-3 max-w-2xl text-foreground/70">
            The promise we make to every child we serve.
          </p>
        </div>
      </div>
      <section className="py-20">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 sm:px-6 md:grid-cols-2 lg:px-8">
          <Reveal>
            <div className="h-full rounded-3xl border border-border bg-green-tint/60 p-8">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary text-white">
                <Target className="h-5 w-5" />
              </div>
              <h2 className="mt-5 font-display text-2xl font-bold">Our Mission</h2>
              <p className="mt-3 text-foreground/75">
                To empower underprivileged children and young adults by
                providing nutritious food, quality education, mentorship, skill
                development, and career opportunities — enabling them to build
                independent, confident, and meaningful lives.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="h-full rounded-3xl border border-border bg-sky-tint/60 p-8">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-accent-blue text-white">
                <Eye className="h-5 w-5" />
              </div>
              <h2 className="mt-5 font-display text-2xl font-bold">Our Vision</h2>
              <p className="mt-3 text-foreground/75">
                A future where every child, regardless of socioeconomic
                background, has equal access to education, opportunity, and the
                support needed to reach their full potential and become a
                positive force in society.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </SiteShell>
  );
}
