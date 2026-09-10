"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, HeartHandshake } from "lucide-react";
import Image from "next/image";
import { studentLifeStories } from "@/lib/site-config";

const listVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.62, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function StudentLife() {
  const shouldReduceMotion = useReducedMotion();
  const revealProps = shouldReduceMotion
    ? {}
    : {
        initial: "hidden",
        whileInView: "visible",
        viewport: { once: true, amount: 0.16 },
      };
  const featuredStory = studentLifeStories[0];

  return (
    <section id="student-life" aria-labelledby="student-life-heading" className="relative overflow-hidden bg-[#030814] py-24 sm:py-32 lg:py-40">
      <div aria-hidden="true" className="absolute inset-x-0 top-0 h-px bg-white/10" />
      <div aria-hidden="true" className="absolute -left-56 bottom-0 size-[34rem] rounded-full bg-[#d8af59]/[0.035] blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <motion.div {...revealProps} variants={itemVariants} className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <div className="mb-7 flex items-center gap-3">
              <span className="h-px w-9 bg-[#dfb861]" />
              <span className="text-xs font-semibold tracking-[0.18em] text-[#f0cf85] uppercase">Student Life</span>
            </div>
            <h2 id="student-life-heading" className="max-w-3xl text-balance text-4xl font-semibold leading-[1.02] tracking-[-0.045em] text-white sm:text-5xl lg:text-6xl">
              The moments between the milestones.
            </h2>
          </div>
          <p className="max-w-sm text-pretty text-base leading-7 text-white/63 lg:col-span-4 lg:col-start-9 lg:pb-1">
            Campus life is a chance to take part, meet people, share ideas, and make each day feel more your own.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-5 lg:mt-20 lg:grid-cols-12 lg:gap-6">
          <motion.article
            {...revealProps}
            variants={itemVariants}
            whileHover={shouldReduceMotion ? undefined : { y: -4 }}
            className="group relative min-h-[30rem] overflow-hidden border border-white/12 sm:min-h-[36rem] lg:col-span-7 lg:min-h-[41rem]"
          >
            <Image
              src={featuredStory.image}
              alt="Students gathered on a contemporary campus"
              fill
              priority={false}
              sizes="(max-width: 1024px) 100vw, 58vw"
              className="object-cover transition-transform duration-700 group-hover:scale-[1.035]"
              style={{ objectPosition: featuredStory.imagePosition }}
            />
            <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-[#030814] via-[#030814]/35 to-[#030814]/5" />
            <div aria-hidden="true" className="absolute inset-y-0 left-0 w-px bg-[#dfb861]" />

            <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8 lg:p-10">
              <div className="flex items-center justify-between gap-4">
                <span className="text-xs font-semibold tracking-[0.16em] text-[#f0cf85]">{featuredStory.number}</span>
                <HeartHandshake size={21} strokeWidth={1.5} aria-hidden="true" className="text-[#f0cf85]" />
              </div>
              <span className="mt-8 block text-[11px] font-semibold tracking-[0.15em] text-white/65 uppercase">{featuredStory.category}</span>
              <h3 className="mt-3 max-w-lg text-3xl font-semibold tracking-[-0.045em] text-white sm:text-4xl lg:text-5xl">{featuredStory.title}</h3>
              <p className="mt-4 max-w-md text-sm leading-6 text-white/76 sm:text-base sm:leading-7">{featuredStory.description}</p>
            </div>
          </motion.article>

          <motion.div {...revealProps} variants={listVariants} className="grid gap-5 sm:grid-cols-3 lg:col-span-5 lg:grid-cols-1 lg:gap-6">
            {studentLifeStories.slice(1).map((story) => (
              <motion.article
                key={story.title}
                variants={itemVariants}
                whileHover={shouldReduceMotion ? undefined : { x: 4 }}
                className="group relative min-h-72 overflow-hidden border border-white/12 lg:min-h-0 lg:flex-1"
              >
                <Image
                  src={story.image}
                  alt=""
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 42vw"
                  className="object-cover opacity-35 transition-all duration-700 group-hover:scale-105 group-hover:opacity-50"
                  style={{ objectPosition: story.imagePosition }}
                />
                <div aria-hidden="true" className="absolute inset-0 bg-[#07111e]/76" />
                <div className="relative flex size-full flex-col justify-end p-6 sm:p-5 lg:p-7">
                  <div className="absolute left-6 right-6 top-6 flex items-center justify-between sm:left-5 sm:right-5 lg:left-7 lg:right-7">
                    <span className="text-xs font-semibold tracking-[0.14em] text-[#dfb861]">{story.number}</span>
                    <ArrowUpRight size={17} aria-hidden="true" className="text-white/45 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#f0cf85]" />
                  </div>
                  <span className="text-[10px] font-semibold tracking-[0.15em] text-[#f0cf85] uppercase">{story.category}</span>
                  <h3 className="mt-3 text-2xl font-semibold tracking-[-0.035em] text-white">{story.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-white/68">{story.description}</p>
                </div>
                <span aria-hidden="true" className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-[#dfb861] transition-transform duration-300 group-hover:scale-x-100" />
              </motion.article>
            ))}
          </motion.div>
        </div>

        <motion.p {...revealProps} variants={itemVariants} className="mt-8 max-w-2xl text-sm leading-6 text-white/45">
          A student experience that extends from festivals and sport to technical communities, service, and collaborative projects.
        </motion.p>
      </div>
    </section>
  );
}
