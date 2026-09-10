"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, BookOpen } from "lucide-react";
import { useState } from "react";
import { programCategories } from "@/lib/site-config";

const reveal = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function Programs() {
  const shouldReduceMotion = useReducedMotion();
  const [activeCategory, setActiveCategory] = useState(programCategories[0].id);
  const active = programCategories.find((category) => category.id === activeCategory) ?? programCategories[0];
  const revealProps = shouldReduceMotion ? {} : { initial: "hidden", whileInView: "visible", viewport: { once: true, amount: 0.16 } };

  return (
    <section id="programs" aria-labelledby="programs-heading" className="relative overflow-hidden bg-[#030814] py-24 sm:py-32 lg:py-40">
      <div aria-hidden="true" className="absolute inset-x-0 top-0 h-px bg-white/10" />
      <div aria-hidden="true" className="absolute right-[-14rem] top-20 size-[32rem] rounded-full bg-[#d8af59]/[0.035] blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <motion.div {...revealProps} variants={reveal} className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <div className="mb-7 flex items-center gap-3"><span className="h-px w-9 bg-[#dfb861]" /><span className="text-xs font-semibold tracking-[0.18em] text-[#f0cf85] uppercase">Programmes</span></div>
            <h2 id="programs-heading" className="max-w-3xl text-balance text-4xl font-semibold leading-[1.02] tracking-[-0.045em] text-white sm:text-5xl lg:text-6xl">Choose the problem you want to solve.</h2>
          </div>
          <p className="max-w-sm text-pretty text-base leading-7 text-white/63 lg:col-span-4 lg:col-start-9 lg:pb-1">Explore AJCE’s official programme portfolio across engineering, computing, business, and research.</p>
        </motion.div>

        <motion.div {...revealProps} variants={reveal} className="mt-14 border-y border-white/15 py-3 lg:mt-20">
          <div role="tablist" aria-label="Programme categories" className="flex gap-1 overflow-x-auto pb-1 [scrollbar-width:none]">
            {programCategories.map((category) => {
              const selected = category.id === active.id;
              return <button key={category.id} id={`${category.id}-tab`} type="button" role="tab" aria-selected={selected} aria-controls={`${category.id}-panel`} onClick={() => setActiveCategory(category.id)} className={`shrink-0 px-4 py-3 text-left text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f0cf85] ${selected ? "bg-[#d8af59] text-[#07111e]" : "text-white/62 hover:bg-white/[0.06] hover:text-white"}`}>{category.label}</button>;
            })}
          </div>
        </motion.div>

        <motion.div key={active.id} id={`${active.id}-panel`} role="tabpanel" aria-labelledby={`${active.id}-tab`} initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35 }} className="mt-8">
          <div className="flex flex-col justify-between gap-5 border-b border-white/15 pb-7 sm:flex-row sm:items-end">
            <div><span className="text-xs font-semibold tracking-[0.17em] text-[#f0cf85] uppercase">{active.label}</span><p className="mt-2 text-xl font-semibold tracking-[-0.03em] text-white sm:text-2xl">{active.detail}</p></div>
            <a href="#apply" className="group inline-flex min-h-11 items-center gap-2 self-start border-b border-[#dfb861]/60 text-sm font-semibold text-white transition-colors hover:border-[#f0cf85] hover:text-[#f0cf85] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f0cf85] sm:self-auto">Enquire about admissions <ArrowUpRight size={16} aria-hidden="true" className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></a>
          </div>
          <div className="grid border-l border-t border-white/12 sm:grid-cols-2 lg:grid-cols-3">
            {active.programmes.map((programme, index) => <motion.article key={programme} initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: shouldReduceMotion ? 0 : index * 0.035, duration: 0.35 }} whileHover={shouldReduceMotion ? undefined : { y: -3 }} className="group relative flex min-h-44 flex-col justify-between border-b border-r border-white/12 p-6 transition-colors hover:bg-white/[0.035] sm:p-7">
              <div className="flex items-start justify-between gap-4"><span className="text-xs font-semibold tracking-[0.15em] text-[#dfb861]">{String(index + 1).padStart(2, "0")}</span><BookOpen size={18} strokeWidth={1.5} aria-hidden="true" className="text-white/30 transition-all duration-300 group-hover:-translate-y-1 group-hover:text-[#f0cf85]" /></div>
              <h3 className="mt-8 max-w-xs text-xl font-semibold leading-snug tracking-[-0.03em] text-white">{programme}</h3>
              <span aria-hidden="true" className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-[#dfb861] transition-transform duration-300 group-hover:scale-x-100" />
            </motion.article>)}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
