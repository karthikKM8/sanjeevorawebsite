import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import hero from "@/assets/1 (1).jpeg";
import { QuickDonate } from "./QuickDonate";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 gradient-soft" aria-hidden />
      <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-primary/10 blur-3xl" aria-hidden />
      <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-accent-blue/20 blur-3xl" aria-hidden />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-4 pb-20 pt-12 sm:px-6 lg:grid-cols-[1.1fr_minmax(0,1fr)] lg:gap-8 lg:px-8 lg:pt-20">
        <div className="flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/20 bg-white px-3.5 py-1.5 text-xs font-medium text-[#22c55e] shadow-sm"
          >
            <Sparkles className="h-3.5 w-3.5" />
            Trusted by 12,000+ donors across India
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-5 font-display text-4xl font-extrabold leading-[1.1] tracking-tight text-foreground sm:text-5xl lg:text-[4rem]"
          >
            Every Child Deserves<br />
            <span className="text-[#22c55e]">Food, Education &amp;</span><br />
            <span className="text-[#38bdf8]">Opportunity</span>
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 max-w-xl text-base sm:text-lg"
          >
            <p className="font-semibold text-foreground/80">
              Poverty should never decide a child's future.
            </p>
            <p className="mt-4 text-foreground/70">
              At Sanjeevora Vidya Mission, we are committed to transforming
              lives by providing nutritious meals, quality education, mentorship,
              and opportunities that empower children to build brighter, more
              independent futures. Every contribution helps create lasting
              change—one child, one family, and one community at a time.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <Link
              to="/donate"
              className="inline-flex items-center gap-2 rounded-full gradient-brand px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-primary/30 transition hover:scale-[1.03]"
            >
              Donate Now <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-foreground shadow-sm transition hover:text-primary"
            >
              Learn More
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex flex-col items-center justify-start gap-8 lg:items-end"
        >
          <div className="w-full max-w-[420px]">
            <QuickDonate />
          </div>
          <div className="hidden w-full max-w-[420px] overflow-hidden rounded-[2rem] lg:block">
            <img
              src={hero}
              alt="Children smiling in a Sanjeevora Vidya Mission-supported classroom"
              width={1600}
              height={1024}
              className="h-64 w-full object-cover"
            />
          </div>
        </motion.div>

        <div className="lg:hidden w-full max-w-[420px] mx-auto">
          <img
            src={hero}
            alt="Children smiling in a Sanjeevora Vidya Mission-supported classroom"
            width={1600}
            height={1024}
            className="h-64 w-full sm:h-80 rounded-[2rem] border border-border object-cover shadow-xl"
          />
        </div>
      </div>
    </section>
  );
}