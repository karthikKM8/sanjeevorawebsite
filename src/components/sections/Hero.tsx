import { Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
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

      <div className="relative mx-auto grid max-w-7xl gap-12 px-4 pb-20 pt-12 sm:px-6 lg:grid-cols-[1.1fr_minmax(0,1fr)] lg:gap-8 lg:px-8 lg:pt-20">
        <div className="flex flex-col justify-center">
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
                  className={`h-1.5 rounded-full transition-all ${
                    currentIdx === i ? "w-6 bg-white" : "w-2 bg-white/50 hover:bg-white/75"
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
                className={`h-1.5 rounded-full transition-all ${
                  currentIdx === i ? "w-6 bg-white" : "w-2 bg-white/50 hover:bg-white/75"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}