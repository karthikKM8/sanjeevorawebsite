import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteShell";
import { VolunteerForm } from "@/components/sections/VolunteerForm";

export const Route = createFileRoute("/volunteer")({
  head: () => ({
    meta: [
      { title: "Volunteer — Sanjeevora Vidya Mission" },
      { name: "description", content: "Be part of the change. Volunteer to teach, mentor, create content, support events or partner with us." },
      { property: "og:title", content: "Volunteer — Sanjeevora Vidya Mission" },
      { property: "og:description", content: "Give your time. Change a life." },
      { property: "og:url", content: "/volunteer" },
    ],
    links: [{ rel: "canonical", href: "/volunteer" }],
  }),
  component: () => (
    <SiteShell>
      <div className="gradient-soft py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="font-display text-4xl font-extrabold sm:text-5xl">Volunteer</h1>
          <p className="mt-3 max-w-2xl text-foreground/70">A weekend, a skill, a few hours — all of it counts.</p>
        </div>
      </div>
      <VolunteerForm />
    </SiteShell>
  ),
});