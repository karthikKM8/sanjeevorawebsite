import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteShell";

export const Route = createFileRoute("/events")({
  head: () => ({
    meta: [
      { title: "Events — Sanjeevora Vidya Mission" },
      { name: "description", content: "Upcoming Sanjeevora Vidya Mission events, drives, and community programs you can join." },
      { property: "og:title", content: "Events — Sanjeevora Vidya Mission" },
      { property: "og:description", content: "Upcoming events you can be part of." },
      { property: "og:url", content: "/events" },
    ],
    links: [{ rel: "canonical", href: "/events" }],
  }),
  component: () => (
    <SiteShell>
      <div className="gradient-soft py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="font-display text-4xl font-extrabold sm:text-5xl">Events</h1>
          <p className="mt-3 max-w-2xl text-foreground/70">Come build with us — there's always a way to show up.</p>
        </div>
      </div>
    </SiteShell>
  ),
});