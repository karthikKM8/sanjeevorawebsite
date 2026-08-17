import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteShell";
import { Reveal } from "@/components/site/Reveal";
import hero from "@/assets/1 (1).jpeg";
import education from "@/assets/1 (2).jpeg";
import healthcare from "@/assets/1 (3).jpeg";
import women from "@/assets/1 (4).jpeg";
import child from "@/assets/1 (5).jpeg";
import environment from "@/assets/1 (6).jpeg";
import rural from "@/assets/1 (7).jpeg";
import story1 from "@/assets/1 (8).jpeg";
import story2 from "@/assets/1 (1).jpeg";
import story3 from "@/assets/1 (2).jpeg";

const IMAGES: { src: string; alt: string }[] = [
  { src: hero, alt: "Children learning together" },
  { src: education, alt: "Classroom education program" },
  { src: healthcare, alt: "Nutrition and healthcare camp" },
  { src: women, alt: "Career readiness program" },
  { src: child, alt: "Child development workshop" },
  { src: environment, alt: "Community drive" },
  { src: rural, alt: "Rural community support" },
  { src: story1, alt: "Student success story" },
  { src: story2, alt: "Young adult mentorship" },
  { src: story3, alt: "Confidence-building program" },
];

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Sanjeevora Vidya Mission" },
      { name: "description", content: "Moments from Sanjeevora Vidya Mission's programs — meals served, classrooms supported, and futures built." },
      { property: "og:title", content: "Gallery — Sanjeevora Vidya Mission" },
      { property: "og:description", content: "See the lives you're helping transform." },
      { property: "og:url", content: "/gallery" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  return (
    <SiteShell>
      <div className="gradient-soft py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="font-display text-4xl font-extrabold sm:text-5xl">Gallery</h1>
          <p className="mt-3 max-w-2xl text-foreground/70">
            Moments from the field — the children, communities, and journeys
            your support makes possible.
          </p>
        </div>
      </div>
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {IMAGES.map((img, i) => (
              <Reveal key={img.src} delay={(i % 6) * 0.05}>
                <div className="group overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
                  <img
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    className="aspect-square w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
