import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteShell";
import { About } from "@/components/sections/About";
import { Testimonials } from "@/components/sections/Testimonials";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Sanjeevora Vidya Mission" },
      { name: "description", content: "Sanjeevora Vidya Mission is dedicated to creating lasting change in the lives of underprivileged children and young adults through nutrition, education, mentorship and career opportunities." },
      { property: "og:title", content: "About Us — Sanjeevora Vidya Mission" },
      { property: "og:description", content: "Building brighter futures, one child at a time." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: () => (
    <SiteShell>
      <div className="gradient-soft py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="font-display text-4xl font-extrabold sm:text-5xl">About Sanjeevora Vidya Mission</h1>
          <p className="mt-3 max-w-2xl text-foreground/70">
            Building brighter futures, one child at a time — through food, education, mentorship and opportunity.
          </p>
        </div>
      </div>
      <About />
      <Testimonials />
    </SiteShell>
  ),
});