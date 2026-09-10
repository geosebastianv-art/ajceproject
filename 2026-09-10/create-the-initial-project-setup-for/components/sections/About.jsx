"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, MoveUpRight } from "lucide-react";
import Image from "next/image";
import { aboutImageUrl, aboutStats } from "@/lib/site-config";

const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function About() {
  const shouldReduceMotion = useReducedMotion();
  const revealProps = shouldReduceMotion
    ? {}
    : {
        initial: "hidden",
        whileInView: "visible",
        viewport: { once: true, amount: 0.25 },
      };

  return (
    <section id="about" aria-labelledby="about-heading" className="relative overflow-hidden bg-[#07111e] py-24 sm:py-32 lg:py-40">
      <div aria-hidden="true" className="absolute left-0 top-0 h-px w-2/3 bg-gradient-to-r from-[#dfb861]/70 to-transparent" />
      <div aria-hidden="true" className="absolute -left-48 top-24 size-[28rem] rounded-full bg-[#d8af59]/[0.035] blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <div className="grid gap-14 lg:grid-cols-12 lg:items-end lg:gap-x-12 xl:gap-x-20">
          <motion.div {...revealProps} variants={sectionVariants} className="lg:col-span-5 lg:pb-8">
            <div className="mb-7 flex items-center gap-3">
              <span className="h-px w-9 bg-[#dfb861]" />
              <span className="text-xs font-semibold tracking-[0.18em] text-[#f0cf85] uppercase">About AJCE</span>
            </div>

            <h2 id="about-heading" className="max-w-lg text-balance text-4xl font-semibold leading-[1.02] tracking-[-0.045em] text-white sm:text-5xl lg:text-6xl">
              Engineering Ideas Into Impact.
            </h2>

            <p className="mt-7 max-w-md text-pretty text-base leading-7 text-white/70 sm:text-lg sm:leading-8">
              Established in 2001, AJCE is an autonomous engineering college in Kottayam, Kerala. Its official profile describes a 68-acre learning environment where engineering, research, innovation, and student life meet.
            </p>

            <a
              href="#programs"
              className="group mt-9 inline-flex items-center gap-3 border-b border-[#dfb861]/70 pb-2 text-sm font-semibold text-white transition-colors hover:border-[#f0cf85] hover:text-[#f0cf85] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f0cf85]"
            >
              Discover the AJCE approach
              <ArrowUpRight size={17} aria-hidden="true" className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </motion.div>

          <motion.div
            {...revealProps}
            variants={sectionVariants}
            className="relative lg:col-span-7"
            transition={{ delay: shouldReduceMotion ? 0 : 0.14 }}
          >
            <div className="relative aspect-[1.05] overflow-hidden border border-white/10 sm:aspect-[1.28] lg:aspect-[1.08]">
              <motion.div initial={shouldReduceMotion ? false : { scale: 1.09 }} whileInView={shouldReduceMotion ? undefined : { scale: 1 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }} className="absolute inset-0">
                <Image src={aboutImageUrl} alt="Amal Jyothi College of Engineering campus" fill sizes="(max-width: 1024px) 100vw, 58vw" className="object-cover object-center" />
              </motion.div>
              <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-[#07111e]/65 via-transparent to-[#07111e]/10" />
              <div aria-hidden="true" className="absolute inset-y-0 left-0 w-1 bg-[#dfb861]" />

              <div className="absolute bottom-0 right-0 hidden max-w-52 border-l border-t border-white/15 bg-[#081422]/90 px-6 py-5 backdrop-blur-sm sm:block">
                <MoveUpRight size={18} aria-hidden="true" className="mb-3 text-[#f0cf85]" />
                <p className="text-xs font-medium leading-5 text-white/72">Designed for thoughtful learning, collaboration, and exploration.</p>
              </div>
            </div>

            <div aria-hidden="true" className="absolute -bottom-5 -left-5 hidden size-20 border border-[#dfb861]/55 lg:block" />
          </motion.div>
        </div>

        <motion.dl {...revealProps} variants={sectionVariants} className="mt-12 grid grid-cols-2 border-l border-t border-white/12 sm:mt-16 sm:grid-cols-4 lg:ml-[calc(41.666667%+1rem)]">
          {aboutStats.map((stat) => <div key={stat.label} className="border-b border-r border-white/12 p-4 sm:p-5"><dt className="text-[11px] font-semibold tracking-[0.13em] text-white/52 uppercase">{stat.label}</dt><dd className="mt-3 text-2xl font-semibold tracking-[-0.045em] text-white sm:text-3xl">{stat.value.toLocaleString()}{stat.suffix}</dd></div>)}
        </motion.dl>
      </div>
    </section>
  );
}
