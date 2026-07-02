import { Reveal } from "../site/Reveal";
import { Target, Eye } from "lucide-react";

export function About() {
  return (
    <section id="about" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">About Us</p>
            <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl uppercase">
              FROM CLASSROOM TO CAREER
            </h2>
            <p className="mt-4 text-base text-foreground/70">
              Sanjeevora Vidya Mission is dedicated to creating meaningful, lasting
              change in the lives of underprivileged children and young adults.
              We believe every child deserves access to nutritious food, quality
              education, mentorship and opportunities — regardless of background.
              Our goal is simple: educate, elevate and empower. Together with donors, volunteers, and partners, we are building
              stronger communities where every child can dream, learn, and succeed.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-3xl border border-border bg-green-tint/60 p-7">
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-primary text-white">
                <Target className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-display text-xl font-bold">Our Mission</h3>
              <p className="mt-2 text-foreground/75">
                To empower underprivileged children and young adults by providing
                nutritious food, quality education, mentorship, skill development
                and career opportunities — enabling them to build independent,
                confident, and meaningful lives.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="h-full rounded-3xl border border-border bg-sky-tint/60 p-7">
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-accent-blue text-white">
                <Eye className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-display text-xl font-bold">Our Vision</h3>
              <p className="mt-2 text-foreground/75">
                A future where every child, regardless of socioeconomic
                background, has equal access to education, opportunity, and the
                support needed to reach their full potential and become a
                positive force in society.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}