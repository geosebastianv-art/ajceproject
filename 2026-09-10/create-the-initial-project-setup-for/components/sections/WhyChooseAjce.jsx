"use client";

import { motion, useReducedMotion } from "framer-motion";
import { BriefcaseBusiness, Lightbulb, Sprout, Trees } from "lucide-react";

const reasons = [
  {
    number: "01",
    title: "Innovation",
    description: "A culture of inquiry that encourages students to explore, question, and create.",
    icon: Lightbulb,
  },
  {
    number: "02",
    title: "Industry Readiness",
    description: "A practical mindset for translating engineering knowledge into work that matters.",
    icon: BriefcaseBusiness,
  },
  {
    number: "03",
    title: "Campus Experience",
    description: "Spaces and moments that invite collaboration, perspective, and a sense of belonging.",
    icon: Trees,
  },
  {
    number: "04",
    title: "Student Growth",
    description: "Room to develop confidence, curiosity, and a clear sense of direction.",
    icon: Sprout,
  },
];

const listVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function WhyChooseAjce() {
  const shouldReduceMotion = useReducedMotion();
  const revealProps = shouldReduceMotion
    ? {}
    : {
        initial: "hidden",
        whileInView: "visible",
        viewport: { once: true, amount: 0.18 },
      };

  return (
    <section id="why-ajce" aria-labelledby="why-ajce-heading" className="relative bg-[#030814] py-24 sm:py-32 lg:py-40">
      <div aria-hidden="true" className="absolute inset-x-0 top-0 h-px bg-white/10" />

      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <motion.div {...revealProps} variants={itemVariants} className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <div className="mb-7 flex items-center gap-3">
              <span className="h-px w-9 bg-[#dfb861]" />
              <span className="text-xs font-semibold tracking-[0.18em] text-[#f0cf85] uppercase">Why Choose AJCE</span>
            </div>
            <h2 id="why-ajce-heading" className="max-w-3xl text-balance text-4xl font-semibold leading-[1.02] tracking-[-0.045em] text-white sm:text-5xl lg:text-6xl">
              A place to build more than a career.
            </h2>
          </div>
          <p className="max-w-sm text-pretty text-base leading-7 text-white/63 lg:col-span-4 lg:col-start-9 lg:pb-1">
            An engineering education is shaped by what you learn, who you learn alongside, and what you choose to make possible.
          </p>
        </motion.div>

        <motion.div
          {...revealProps}
          variants={listVariants}
          className="mt-16 grid border-t border-white/15 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4"
        >
          {reasons.map((reason, index) => {
            const Icon = reason.icon;

            return (
              <motion.article
                key={reason.title}
                variants={itemVariants}
                whileHover={shouldReduceMotion ? undefined : { y: -5 }}
                className={`group relative min-h-72 border-b border-white/15 px-0 py-8 transition-colors duration-300 hover:bg-white/[0.025] sm:min-h-80 sm:px-7 sm:py-9 sm:odd:border-r sm:odd:border-r-white/15 lg:min-h-[22rem] lg:px-8 lg:py-10 lg:odd:border-r-0 ${
                  index < reasons.length - 1 ? "lg:border-r lg:border-r-white/15" : ""
                }`}
              >
                <span className="text-xs font-semibold tracking-[0.16em] text-[#dfb861]">{reason.number}</span>
                <div className="mt-11 flex size-12 items-center justify-center border border-white/15 text-[#f0cf85] transition-all duration-300 group-hover:-translate-y-1 group-hover:border-[#dfb861]/80 group-hover:bg-[#d8af59] group-hover:text-[#07111e]">
                  <Icon size={21} strokeWidth={1.65} aria-hidden="true" />
                </div>
                <h3 className="mt-8 text-2xl font-semibold tracking-[-0.03em] text-white">{reason.title}</h3>
                <p className="mt-4 max-w-56 text-sm leading-6 text-white/62">{reason.description}</p>
                <span aria-hidden="true" className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-[#dfb861] transition-transform duration-300 group-hover:scale-x-100" />
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
