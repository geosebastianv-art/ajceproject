"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, BookOpen, Building2, Cpu, FlaskConical, Trees, UsersRound } from "lucide-react";
import Image from "next/image";
import { facilities } from "@/lib/site-config";

const facilityIcons = [Building2, FlaskConical, BookOpen, Cpu, UsersRound, Trees];

const listVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Campus() {
  const shouldReduceMotion = useReducedMotion();
  const revealProps = shouldReduceMotion
    ? {}
    : {
        initial: "hidden",
        whileInView: "visible",
        viewport: { once: true, amount: 0.15 },
      };

  const featuredFacility = facilities[0];

  return (
    <section id="campus" aria-labelledby="campus-heading" className="relative overflow-hidden bg-[#030814] py-24 sm:py-32 lg:py-40">
      <div aria-hidden="true" className="absolute inset-x-0 top-0 h-px bg-white/10" />
      <div aria-hidden="true" className="absolute -left-56 bottom-10 size-[33rem] rounded-full bg-[#d8af59]/[0.035] blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <motion.div {...revealProps} variants={itemVariants} className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <div className="mb-7 flex items-center gap-3">
              <span className="h-px w-9 bg-[#dfb861]" />
              <span className="text-xs font-semibold tracking-[0.18em] text-[#f0cf85] uppercase">Campus & Facilities</span>
            </div>
            <h2 id="campus-heading" className="max-w-3xl text-balance text-4xl font-semibold leading-[1.02] tracking-[-0.045em] text-white sm:text-5xl lg:text-6xl">
              Space for ideas to take shape.
            </h2>
          </div>
          <p className="max-w-sm text-pretty text-base leading-7 text-white/63 lg:col-span-4 lg:col-start-9 lg:pb-1">
            From focused study to practical exploration, campus spaces are part of how every engineering journey takes form.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 lg:mt-20 lg:grid-cols-12 lg:gap-12 xl:gap-16">
          <motion.article {...revealProps} variants={itemVariants} className="group relative overflow-hidden border border-white/12 lg:col-span-7">
            <div className="relative aspect-[1.05] overflow-hidden sm:aspect-[1.32] lg:aspect-[1.07]">
              <motion.div
                className="absolute inset-0"
                initial={shouldReduceMotion ? false : { scale: 1.08 }}
                whileInView={shouldReduceMotion ? undefined : { scale: 1 }}
                whileHover={shouldReduceMotion ? undefined : { scale: 1.035 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              >
                <Image src={featuredFacility.image} alt="Amal Jyothi College of Engineering campus" fill sizes="(max-width: 1024px) 100vw, 58vw" className="object-cover object-center" />
              </motion.div>
              <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-[#030814]/90 via-[#030814]/16 to-transparent" />
              <div aria-hidden="true" className="absolute inset-y-0 left-0 w-px bg-[#dfb861]" />

              <div className="absolute bottom-0 left-0 max-w-md p-6 sm:p-8 lg:p-10">
                <span className="text-xs font-semibold tracking-[0.16em] text-[#f0cf85]">{featuredFacility.number}</span>
                <h3 className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">{featuredFacility.title}</h3>
                <p className="mt-3 max-w-sm text-sm leading-6 text-white/75 sm:text-base">{featuredFacility.description}</p>
              </div>
            </div>
          </motion.article>

          <motion.div {...revealProps} variants={listVariants} className="border-t border-white/15 lg:col-span-5 lg:mt-10">
            {facilities.slice(1, 4).map((facility, index) => {
              const Icon = facilityIcons[index + 1];

              return (
                <motion.a
                  key={facility.title}
                  href="#apply"
                  aria-label={`Enquire about ${facility.title.toLowerCase()}`}
                  variants={itemVariants}
                  whileHover={shouldReduceMotion ? undefined : { x: 5 }}
                  className="group flex min-h-36 items-start gap-5 border-b border-white/15 py-7 transition-colors hover:bg-white/[0.025] focus-visible:bg-white/[0.04] focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[#f0cf85] sm:px-2 lg:min-h-40 lg:py-8"
                >
                  <span className="pt-1 text-xs font-semibold tracking-[0.14em] text-[#dfb861]">{facility.number}</span>
                  <span className="flex-1">
                    <span className="flex items-start justify-between gap-4">
                      <span className="flex size-10 shrink-0 items-center justify-center border border-white/15 text-[#f0cf85] transition-all duration-300 group-hover:border-[#dfb861] group-hover:bg-[#d8af59] group-hover:text-[#07111e] group-focus-visible:border-[#dfb861] group-focus-visible:bg-[#d8af59] group-focus-visible:text-[#07111e]">
                        <Icon size={18} strokeWidth={1.65} aria-hidden="true" />
                      </span>
                      <ArrowUpRight size={18} aria-hidden="true" className="mt-1 shrink-0 text-white/45 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#f0cf85]" />
                    </span>
                    <span className="mt-5 block text-xl font-semibold tracking-[-0.03em] text-white">{facility.title}</span>
                    <span className="mt-2 block max-w-sm text-sm leading-6 text-white/60">{facility.description}</span>
                  </span>
                </motion.a>
              );
            })}
          </motion.div>
        </div>

        <motion.div {...revealProps} variants={listVariants} className="mt-8 grid gap-4 sm:grid-cols-2 lg:mt-12 lg:gap-6">
          {facilities.slice(4).map((facility, index) => {
            const Icon = facilityIcons[index + 4];

            return (
              <motion.a
                key={facility.title}
                href="#apply"
                aria-label={`Enquire about ${facility.title.toLowerCase()}`}
                variants={itemVariants}
                whileHover={shouldReduceMotion ? undefined : { y: -4 }}
                className="group relative min-h-48 overflow-hidden border border-white/12 p-6 transition-colors hover:border-[#dfb861]/65 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f0cf85] sm:p-7"
              >
                <Image
                  src={facility.image}
                  alt=""
                  fill
                  sizes="(max-width: 640px) 100vw, 50vw"
                  className="object-cover opacity-[0.11] grayscale transition-all duration-500 group-hover:scale-105 group-hover:opacity-[0.18]"
                />
                <span aria-hidden="true" className="absolute inset-0 bg-[#07111e]/65" />
                <span className="relative flex items-center justify-between">
                  <Icon size={20} strokeWidth={1.65} className="text-[#f0cf85] transition-transform duration-300 group-hover:-translate-y-1" aria-hidden="true" />
                  <span className="text-xs font-semibold tracking-[0.14em] text-[#dfb861]">{facility.number}</span>
                </span>
                <span className="relative mt-10 block text-xl font-semibold tracking-[-0.03em] text-white">{facility.title}</span>
                <span className="relative mt-2 block max-w-xs text-sm leading-6 text-white/64">{facility.description}</span>
              </motion.a>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
