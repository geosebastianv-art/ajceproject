"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { navigationItems } from "@/lib/site-config";

const mobileMenuVariants = {
  closed: {
    opacity: 0,
    y: -12,
    transition: { duration: 0.16, ease: "easeIn" },
  },
  open: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.22, ease: "easeOut", staggerChildren: 0.045 },
  },
};

const mobileLinkVariants = {
  closed: { opacity: 0, y: -6 },
  open: { opacity: 1, y: 0 },
};

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const updateNavbar = () => setIsScrolled(window.scrollY > 24);

    updateNavbar();
    window.addEventListener("scroll", updateNavbar, { passive: true });

    return () => window.removeEventListener("scroll", updateNavbar);
  }, []);

  useEffect(() => {
    const closeOnEscape = (event) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("keydown", closeOnEscape);

    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,box-shadow,backdrop-filter] duration-500 ${
        isScrolled
          ? "border-b border-white/10 bg-[#050b16]/82 shadow-[0_14px_40px_rgba(0,0,0,0.2)] backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav
        aria-label="Main navigation"
        className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10"
      >
        <a
          href="#top"
          className="group inline-flex items-center gap-3 rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#dfb861]"
          aria-label="Amal Jyothi College of Engineering home"
        >
          <span className="flex size-10 items-center justify-center overflow-hidden border border-[#dfb861]/80 bg-white transition-colors duration-300 group-hover:border-[#f0cf85]">
            <Image src="/images/ajce/logo/ajce-logo.jpg" alt="AJCE official emblem" width={40} height={40} priority className="size-full object-cover" />
          </span>
          <span className="flex flex-col leading-none text-white">
            <span className="text-sm font-semibold tracking-[0.16em]">AJCE</span>
            <span className="mt-1 hidden text-[9px] font-medium tracking-[0.12em] text-white/60 sm:block">
              AMAL JYOTHI COLLEGE OF ENGINEERING
            </span>
          </span>
        </a>

        <div className="hidden items-center gap-7 lg:flex">
          <div className="flex items-center gap-6">
            {navigationItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="relative py-2 text-sm font-medium text-white/75 transition-colors duration-200 after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:origin-left after:scale-x-0 after:bg-[#dfb861] after:transition-transform after:duration-300 hover:text-white hover:after:scale-x-100 focus-visible:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#dfb861]"
              >
                {item.label}
              </a>
            ))}
          </div>
          <a
            href="#apply"
            className="inline-flex items-center gap-2 border border-[#dfb861] bg-[#d8af59] px-4 py-2.5 text-sm font-semibold text-[#08111e] transition-colors duration-200 hover:bg-[#f0cf85] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f0cf85]"
          >
            Apply Now <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </div>

        <button
          type="button"
          className="inline-flex size-11 items-center justify-center border border-white/20 text-white transition-colors hover:border-[#dfb861] hover:text-[#f0cf85] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#dfb861] lg:hidden"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
        >
          {isMenuOpen ? <X size={21} aria-hidden="true" /> : <Menu size={21} aria-hidden="true" />}
        </button>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              id="mobile-navigation"
              variants={mobileMenuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="absolute left-4 right-4 top-[68px] border border-white/15 bg-[#08111e]/95 p-3 shadow-2xl backdrop-blur-xl sm:left-6 sm:right-6 lg:hidden"
            >
              <div className="flex flex-col">
                {navigationItems.map((item) => (
                  <motion.a
                    key={item.label}
                    variants={mobileLinkVariants}
                    href={item.href}
                    onClick={closeMenu}
                    className="border-b border-white/10 px-3 py-3.5 text-sm font-medium text-white/85 transition-colors hover:bg-white/5 hover:text-[#f0cf85] focus-visible:bg-white/5 focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[#dfb861]"
                  >
                    {item.label}
                  </motion.a>
                ))}
                <motion.a
                  variants={mobileLinkVariants}
                  href="#apply"
                  onClick={closeMenu}
                  className="mt-3 inline-flex items-center justify-center gap-2 bg-[#d8af59] px-4 py-3 text-sm font-semibold text-[#08111e] transition-colors hover:bg-[#f0cf85] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f0cf85]"
                >
                  Apply Now <ArrowUpRight size={16} aria-hidden="true" />
                </motion.a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
