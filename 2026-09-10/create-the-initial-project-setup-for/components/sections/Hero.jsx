"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowRight, Compass } from "lucide-react";
import { heroImageUrl } from "@/lib/site-config";

const heroContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.18,
      staggerChildren: 0.12,
    },
  },
};

const heroItemVariants = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="relative isolate flex min-h-[700px] min-h-[100svh] items-end overflow-hidden bg-[#030814]"
    >
      <motion.div
        aria-hidden="true"
        className="absolute inset-0 bg-cover bg-center will-change-transform"
        style={{ backgroundImage: `url(${heroImageUrl})` }}
        initial={false}
        animate={
          shouldReduceMotion
            ? undefined
            : { scale: [1.04, 1.075, 1.04], x: [0, -6, 0], y: [0, -4, 0] }
        }
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      <div aria-hidden="true" className="absolute inset-0 bg-[#020713]/44" />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,7,19,0.94)_0%,rgba(2,7,19,0.72)_45%,rgba(2,7,19,0.2)_100%)]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(0deg,rgba(2,7,19,0.96)_0%,rgba(2,7,19,0.2)_52%,rgba(2,7,19,0.05)_100%)]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.16] [background-image:linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] [background-size:72px_72px] [mask-image:linear-gradient(to_bottom,transparent,black_35%,transparent)]"
      />

      <motion.div
        aria-hidden="true"
        className="absolute bottom-[18%] right-[7%] hidden h-28 w-28 border border-[#dfb861]/35 lg:block"
        initial={{ opacity: 0, rotate: -12 }}
        animate={shouldReduceMotion ? { opacity: 0.55 } : { opacity: 0.55, rotate: 0 }}
        transition={{ delay: 0.9, duration: 1.2, ease: "easeOut" }}
      />

      <motion.div
        className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-24 pt-40 sm:px-8 sm:pb-28 lg:px-10 lg:pb-28"
        variants={heroContainerVariants}
        initial={shouldReduceMotion ? false : "hidden"}
        animate="visible"
      >
        <motion.div variants={heroItemVariants} className="mb-7 flex items-center gap-3">
          <span className="h-px w-10 bg-[#dfb861]" />
          <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.18em] text-[#f0cf85] uppercase">
            <Compass size={14} aria-hidden="true" />
            Amal Jyothi College of Engineering
          </span>
        </motion.div>

        <motion.h1
          id="hero-heading"
          variants={heroItemVariants}
          className="max-w-4xl text-balance text-[clamp(3.2rem,8vw,7.25rem)] font-semibold leading-[0.95] tracking-[-0.055em] text-white"
        >
          Where Knowledge Meets Purpose.
        </motion.h1>

        <motion.p
          variants={heroItemVariants}
          className="mt-7 max-w-xl text-pretty text-base leading-7 text-white/78 sm:text-lg sm:leading-8"
        >
          Discover an engineering education shaped by curiosity, practical learning, and the ambition to make a difference.
        </motion.p>

        <motion.div variants={heroItemVariants} className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
          <a
            href="#programs"
            className="group inline-flex min-h-12 items-center justify-center gap-3 bg-[#d8af59] px-6 text-sm font-semibold text-[#07111e] transition-colors duration-200 hover:bg-[#f0cf85] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f0cf85]"
          >
            Explore AJCE
            <ArrowRight size={17} aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-1" />
          </a>
          <a
            href="#apply"
            className="inline-flex min-h-12 items-center justify-center border border-white/35 bg-white/[0.05] px-6 text-sm font-semibold text-white backdrop-blur-sm transition-colors duration-200 hover:border-[#dfb861] hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f0cf85]"
          >
            Apply Now
          </a>
        </motion.div>
      </motion.div>

      <motion.a
        href="#about"
        aria-label="Scroll to learn more"
        className="absolute bottom-7 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 rounded-sm px-3 py-2 text-[10px] font-semibold tracking-[0.15em] text-white/60 uppercase transition-colors hover:text-[#f0cf85] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f0cf85] sm:bottom-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: shouldReduceMotion ? 0 : 1.1, duration: 0.5 }}
      >
        Scroll to explore
        <motion.span
          animate={shouldReduceMotion ? undefined : { y: [0, 5, 0] }}
          transition={{ duration: 1.7, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={16} aria-hidden="true" />
        </motion.span>
      </motion.a>
    </section>
  );
}
