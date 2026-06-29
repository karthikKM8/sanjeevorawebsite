import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteShell";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Causes } from "@/components/sections/Causes";
import { Reality } from "@/components/sections/Reality";
import { Stories } from "@/components/sections/Stories";
import { Impact } from "@/components/sections/Impact";
import { HowItHelps } from "@/components/sections/HowItHelps";
import { VolunteerForm } from "@/components/sections/VolunteerForm";
import { Testimonials } from "@/components/sections/Testimonials";
import { Updates } from "@/components/sections/Updates";
import { Newsletter } from "@/components/sections/Newsletter";
import { Contact } from "@/components/sections/Contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sanjeevora Vidya Mission — Food, Education & Opportunity for Every Child" },
      { name: "description", content: "Sanjeevora Vidya Mission empowers underprivileged children and young adults with nutritious meals, quality education, mentorship and career opportunities. Donate today." },
      { property: "og:title", content: "Sanjeevora Vidya Mission — Food, Education & Opportunity for Every Child" },
      { property: "og:description", content: "Donate to provide nutrition, education, mentorship and career opportunities for children in need." },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <SiteShell>
      <Hero />
      <About />
      <Causes />
      <Reality />
      <HowItHelps />
      <Stories />
      <Impact />
      <VolunteerForm />
      <Testimonials />
      <Updates />
      <Newsletter />
      <Contact />
    </SiteShell>
  );
}
