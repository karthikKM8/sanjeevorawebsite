import { Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Sparkles, Shield, Check } from "lucide-react";
import { useState, useEffect } from "react";

import img1 from "@/assets/1 (1).jpeg";
import img2 from "@/assets/1 (2).jpeg";
import img3 from "@/assets/1 (3).jpeg";
import img4 from "@/assets/1 (4).jpeg";
import img5 from "@/assets/1 (5).jpeg";
import img6 from "@/assets/1 (6).jpeg";
import img7 from "@/assets/1 (7).jpeg";
import img8 from "@/assets/1 (8).jpeg";

const IMAGES = [img1, img2, img3, img4, img5, img6, img7, img8];

const LeafBranch = ({ className, flip }: { className?: string; flip?: boolean }) => (
  <svg
    viewBox="0 0 100 24"
    fill="currentColor"
    className={`${className} ${flip ? "scale-x-[-1]" : ""}`}
  >
    <path d="M5,20 C35,16 65,12 95,12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
    <path d="M25,18 C22,14 26,9 32,12 C29,15 27,18 25,18 Z" />
    <path d="M40,15 C37,10 42,6 47,9 C44,12 42,15 40,15 Z" />
    <path d="M55,13 C52,8 57,4 62,7 C59,10 57,13 55,13 Z" />
    <path d="M70,12 C67,7 72,3 77,6 C74,9 72,12 70,12 Z" />
    <path d="M85,12 C82,7 87,3 92,6 C89,9 87,12 85,12 Z" />
  </svg>
);

const HighlightBanner = () => (
  <motion.div
    initial={{ opacity: 0, y: -10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.1 }}
    className="mb-8 w-full rounded-full border border-emerald-500/10 bg-white/60 dark:bg-zinc-900/60 backdrop-blur-md px-4 py-2.5 sm:px-8 sm:py-3.5 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 sm:gap-x-6 md:gap-x-12 text-sm text-foreground shadow-sm transition-all duration-300 hover:border-emerald-500/20 hover:shadow-md hover:shadow-emerald-500/5"
  >
    <LeafBranch className="h-4 sm:h-5 w-12 sm:w-16 text-emerald-600/40 hidden sm:block" />
    
    <div className="flex items-center gap-2 font-bold text-emerald-850 dark:text-emerald-350">
      <Shield className="h-4 sm:h-4.5 w-4 sm:w-4.5 text-emerald-600 fill-emerald-600/10" />
      <span className="tracking-wide uppercase text-xs sm:text-sm font-semibold">Certified NGO</span>
    </div>
    
    <span className="text-emerald-500/20 font-light hidden sm:inline">|</span>
    
    <a
      href="/12A Certificate.pdf"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 font-semibold text-emerald-800 dark:text-emerald-300 hover:text-emerald-600 transition-all duration-200 hover:scale-[1.02] underline decoration-emerald-500/30 underline-offset-4"
    >
      <div className="flex h-4.5 w-4.5 items-center justify-center rounded-full border border-emerald-500 text-emerald-500">
        <Check className="h-2.5 w-2.5 stroke-[3]" />
      </div>
      <span className="text-xs sm:text-sm">12A Registered</span>
    </a>
    
    <span className="text-emerald-500/20 font-light hidden sm:inline">|</span>
    
    <a
      href="/80G Certificate.pdf"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 font-semibold text-emerald-800 dark:text-emerald-300 hover:text-emerald-600 transition-all duration-200 hover:scale-[1.02] underline decoration-emerald-500/30 underline-offset-4"
    >
      <div className="flex h-4.5 w-4.5 items-center justify-center rounded-full border border-emerald-500 text-emerald-500">
        <Check className="h-2.5 w-2.5 stroke-[3]" />
      </div>
      <span className="text-xs sm:text-sm">80G Approved</span>
    </a>
    
    <LeafBranch className="h-4 sm:h-5 w-12 sm:w-16 text-emerald-600/40 hidden sm:block" flip />
  </motion.div>
);

export function Hero() {
  const [currentIdx, setCurrentIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % IMAGES.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 gradient-soft" aria-hidden />
      <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-primary/10 blur-3xl" aria-hidden />
      <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-accent-blue/20 blur-3xl" aria-hidden />

      <div className="relative mx-auto max-w-7xl px-4 pt-6 sm:px-6 lg:px-8 lg:pt-10">
        <HighlightBanner />

        <div className="grid gap-12 pb-20 pt-4 lg:grid-cols-[1.1fr_minmax(0,1fr)] lg:gap-8">
          <div className="flex flex-col justify-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-4xl font-extrabold leading-[1.1] tracking-tight text-foreground sm:text-5xl lg:text-[4rem]"
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
            className="flex flex-col justify-center"
          >
            <div className="hidden w-full overflow-hidden rounded-[2rem] lg:block relative h-[500px]">
              <AnimatePresence mode="popLayout">
                <motion.img
                  key={currentIdx}
                  src={IMAGES[currentIdx]}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1 }}
                  alt="Children smiling in a Sanjeevora Vidya Mission-supported classroom"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </AnimatePresence>
              <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-10">
                {IMAGES.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentIdx(i)}
                    className={`h-1.5 rounded-full transition-all ${currentIdx === i ? "w-6 bg-white" : "w-2 bg-white/50 hover:bg-white/75"
                      }`}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          <div className="lg:hidden w-full max-w-[420px] mx-auto relative h-64 sm:h-80 rounded-[2rem] overflow-hidden shadow-xl border border-border">
            <AnimatePresence mode="popLayout">
              <motion.img
                key={currentIdx}
                src={IMAGES[currentIdx]}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
                alt="Children smiling in a Sanjeevora Vidya Mission-supported classroom"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </AnimatePresence>
            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-1.5 z-10">
              {IMAGES.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIdx(i)}
                  className={`h-1.5 rounded-full transition-all ${currentIdx === i ? "w-6 bg-white" : "w-2 bg-white/50 hover:bg-white/75"
                    }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}