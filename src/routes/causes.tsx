import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteShell";
import { Causes } from "@/components/sections/Causes";

export const Route = createFileRoute("/causes")({
  head: () => ({
    meta: [
      { title: "Our Programs — Sanjeevora Vidya Mission" },
      { name: "description", content: "Nutrition, education, child development, and career readiness — the four programs through which we transform lives." },
      { property: "og:title", content: "Our Programs — Sanjeevora Vidya Mission" },
      { property: "og:description", content: "Four core programs creating sustainable change." },
      { property: "og:url", content: "/causes" },
    ],
    links: [{ rel: "canonical", href: "/causes" }],
  }),
  component: () => (
    <SiteShell>
      <div className="gradient-soft py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="font-display text-4xl font-extrabold sm:text-5xl uppercase">OUR FOCUSING AREAS</h1>
          <p className="mt-3 max-w-2xl text-foreground/70">Creating sustainable change through four core programs — nutrition, education, child development, and career readiness.</p>
        </div>
      </div>
      <Causes />
    </SiteShell>
  ),
});