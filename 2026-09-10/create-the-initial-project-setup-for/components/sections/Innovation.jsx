"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, FlaskConical, Lightbulb, Rocket } from "lucide-react";
import Image from "next/image";
import { ajceImages, innovationHighlights } from "@/lib/site-config";

const reveal = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.62, ease: [0.22, 1, 0.36, 1] } } };
const count = (value, suffix) => `${value}${suffix}`;

export default function Innovation() {
  const reduced = useReducedMotion();
  const props = reduced ? {} : { initial: "hidden", whileInView: "visible", viewport: { once: true, amount: 0.16 } };
  return <section id="innovation" aria-labelledby="innovation-heading" className="relative overflow-hidden bg-[#07111e] py-24 sm:py-32 lg:py-40">
    <div aria-hidden="true" className="absolute inset-x-0 top-0 h-px bg-white/10" />
    <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
      <motion.div {...props} variants={reveal} className="grid gap-8 lg:grid-cols-12 lg:items-end">
        <div className="lg:col-span-7"><div className="mb-7 flex items-center gap-3"><span className="h-px w-9 bg-[#dfb861]" /><span className="text-xs font-semibold tracking-[0.18em] text-[#f0cf85] uppercase">Innovation ecosystem</span></div><h2 id="innovation-heading" className="max-w-3xl text-balance text-4xl font-semibold leading-[1.02] tracking-[-0.045em] text-white sm:text-5xl lg:text-6xl">Turn a promising idea into a practical next step.</h2></div>
        <p className="max-w-sm text-pretty text-base leading-7 text-white/63 lg:col-span-4 lg:col-start-9 lg:pb-1">AJCE brings together incubation, hands-on making, research, and student-led innovation.</p>
      </motion.div>
      <div className="mt-16 grid gap-6 lg:mt-20 lg:grid-cols-12 lg:gap-8">
        <motion.div {...props} variants={reveal} className="relative min-h-[30rem] overflow-hidden border border-white/12 lg:col-span-7">
          <Image src={ajceImages.iedc} alt="AJCE innovation event" fill sizes="(max-width: 1024px) 100vw, 58vw" className="object-cover" />
          <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-[#07111e] via-[#07111e]/48 to-[#07111e]/5" />
          <div className="absolute inset-x-0 bottom-0 p-7 sm:p-10"><Rocket size={22} aria-hidden="true" className="text-[#f0cf85]" /><h3 className="mt-6 max-w-lg text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">A place to build beyond the brief.</h3><p className="mt-4 max-w-xl text-sm leading-6 text-white/75 sm:text-base sm:leading-7">AJCE lists Startups Valley, an AICTE IDEA Lab, its Innovation and Entrepreneurship Development Centre, and Smart India Hackathon activity among its innovation initiatives.</p></div>
        </motion.div>
        <motion.div {...props} variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }} className="grid gap-4 lg:col-span-5">
          {innovationHighlights.map((item) => <motion.article key={item.label} variants={reveal} whileHover={reduced ? undefined : { x: 4 }} className="group flex min-h-36 items-center gap-6 border border-white/12 p-6 transition-colors hover:border-[#dfb861]/65 hover:bg-white/[0.025] sm:p-7"><Lightbulb size={22} aria-hidden="true" className="shrink-0 text-[#f0cf85] transition-transform duration-300 group-hover:-translate-y-1" /><div><p className="text-4xl font-semibold leading-none tracking-[-0.06em] text-white sm:text-5xl">{count(item.value, item.suffix)}</p><p className="mt-3 text-sm leading-6 text-white/62">{item.label}</p></div></motion.article>)}
          <motion.a variants={reveal} href="#contact" className="group flex min-h-20 items-center justify-between border-b border-[#dfb861]/65 py-4 text-sm font-semibold text-white transition-colors hover:text-[#f0cf85] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f0cf85]"><span className="flex items-center gap-3"><FlaskConical size={18} aria-hidden="true" className="text-[#f0cf85]" />Connect with AJCE</span><ArrowUpRight size={18} aria-hidden="true" className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" /></motion.a>
        </motion.div>
      </div>
    </div>
  </section>;
}
