import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteShell";
import { Contact } from "@/components/sections/Contact";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Sanjeevora Vidya Mission" },
      { name: "description", content: "Get in touch with the Sanjeevora Vidya Mission team — partnerships, volunteering, donations." },
      { property: "og:title", content: "Contact — Sanjeevora Vidya Mission" },
      { property: "og:description", content: "Every conversation begins a change. We respond within one business day." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: () => (
    <SiteShell>
      <div className="gradient-soft py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="font-display text-4xl font-extrabold sm:text-5xl">Contact</h1>
          <p className="mt-3 max-w-2xl text-foreground/70">We'd love to hear from you.</p>
        </div>
      </div>
      <Contact />
    </SiteShell>
  ),
});