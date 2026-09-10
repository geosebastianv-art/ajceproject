"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { achievementHighlights } from "@/lib/site-config";

const listVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

function CountUpValue({ value, suffix }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.6 });
  const shouldReduceMotion = useReducedMotion();
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!Number.isFinite(value) || !isInView || shouldReduceMotion) return undefined;

    const duration = 900;
    const startTime = performance.now();
    let frameId;

    const updateValue = (time) => {
      const progress = Math.min((time - startTime) / duration, 1);
      const eased = 1 - (1 - progress) ** 3;
      setDisplayValue(Math.round(value * eased));

      if (progress < 1) frameId = requestAnimationFrame(updateValue);
    };

    frameId = requestAnimationFrame(updateValue);
    return () => cancelAnimationFrame(frameId);
  }, [isInView, shouldReduceMotion, value]);

  return (
    <span ref={ref} className="text-[clamp(3.25rem,6vw,5.5rem)] font-semibold leading-none tracking-[-0.065em] text-white">
      {Number.isFinite(value) ? `${shouldReduceMotion ? value : displayValue}${suffix}` : `${value}${suffix}`}
    </span>
  );
}

export default function Achievements() {
  const shouldReduceMotion = useReducedMotion();
  const revealProps = shouldReduceMotion
    ? {}
    : {
        initial: "hidden",
        whileInView: "visible",
        viewport: { once: true, amount: 0.15 },
      };

  return (
    <section id="achievements" aria-labelledby="achievements-heading" className="relative overflow-hidden bg-[#07111e] py-24 sm:py-32 lg:py-40">
      <div aria-hidden="true" className="absolute inset-x-0 top-0 h-px bg-white/10" />
      <div aria-hidden="true" className="absolute right-[-12rem] top-[-10rem] size-[32rem] rounded-full bg-[#d8af59]/[0.045] blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <motion.div {...revealProps} variants={itemVariants} className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <div className="mb-7 flex items-center gap-3">
              <span className="h-px w-9 bg-[#dfb861]" />
              <span className="text-xs font-semibold tracking-[0.18em] text-[#f0cf85] uppercase">Achievements</span>
            </div>
            <h2 id="achievements-heading" className="max-w-3xl text-balance text-4xl font-semibold leading-[1.02] tracking-[-0.045em] text-white sm:text-5xl lg:text-6xl">
              A record worth building on.
            </h2>
          </div>
          <div className="max-w-sm lg:col-span-4 lg:col-start-9 lg:pb-1">
            <p className="text-pretty text-base leading-7 text-white/63">
              A focused view of institutional milestones listed by AJCE, with room to grow as further verified updates are published.
            </p>
          </div>
        </motion.div>

        <motion.div {...revealProps} variants={listVariants} className="mt-16 grid border-t border-white/15 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4">
          {achievementHighlights.map((highlight, index) => (
            <motion.article
              key={highlight.category}
              variants={itemVariants}
              whileHover={shouldReduceMotion ? undefined : { y: -5 }}
              className={`group relative min-h-80 overflow-hidden border-b border-white/15 px-0 py-8 transition-colors duration-300 hover:bg-white/[0.025] sm:min-h-[22rem] sm:px-7 sm:py-9 sm:odd:border-r sm:odd:border-r-white/15 lg:min-h-[25rem] lg:px-8 lg:py-10 lg:odd:border-r-0 ${
                index < achievementHighlights.length - 1 ? "lg:border-r lg:border-r-white/15" : ""
              }`}
            >
              <div className="flex items-center justify-between gap-4">
                <span className="text-xs font-semibold tracking-[0.16em] text-[#dfb861]">{highlight.number}</span>
                <Sparkles size={18} strokeWidth={1.5} aria-hidden="true" className="text-white/25 transition-colors duration-300 group-hover:text-[#f0cf85]" />
              </div>

              <div className="mt-10">
                <CountUpValue value={highlight.value} suffix={highlight.suffix} />
                <span className="mt-3 block text-[11px] font-semibold tracking-[0.15em] text-[#f0cf85] uppercase">
                  {highlight.category}
                </span>
              </div>

              <h3 className="mt-8 text-2xl font-semibold tracking-[-0.035em] text-white">{highlight.title}</h3>
              <p className="mt-3 max-w-56 text-sm leading-6 text-white/61">{highlight.description}</p>
              <ArrowUpRight size={18} aria-hidden="true" className="absolute bottom-8 right-0 text-white/30 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#f0cf85] sm:right-7 lg:bottom-10 lg:right-8" />
              <span aria-hidden="true" className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-[#dfb861] transition-transform duration-300 group-hover:scale-x-100" />
            </motion.article>
          ))}
        </motion.div>

        <motion.p {...revealProps} variants={itemVariants} className="mt-8 max-w-2xl text-sm leading-6 text-white/45">
          Figures and credentials above are presented as stated on AJCE’s official website.
        </motion.p>
      </div>
    </section>
  );
}
