"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import MotionButton from "./Button";

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const isHome = pathname === "/";

  useEffect(() => {
    if (!isHome) {
      return;
    }

    const handleScroll = () => {
      const triggerSection = document.getElementById("trigger-section");

      if (!triggerSection) return;

      const triggerPosition =
        triggerSection.getBoundingClientRect().top + window.scrollY;

      setScrolled(window.scrollY >= triggerPosition);
    };

    const animationFrame = window.requestAnimationFrame(handleScroll);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isHome]);

  const navTheme =
    isHome && !scrolled
      ? "bg-zinc-300 text-gray-600 border-b border-b-zinc-400"
      : "bg-white text-black shadow-lg";

  return (
    <nav
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${navTheme}`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-4 md:px-20">
        <div className="rounded-full bg-zinc-100 px-2.5 py-2 font-sans text-xl font-bold tracking-tight hover:bg-zinc-200">
          <Link href="/">LC</Link>
        </div>

        <div className="mt-2 hidden space-x-4 font-sans text-sm md:flex md:text-base">
          <Link href="/">
            <MotionButton text="Home" size="regular" />
          </Link>
          <Link href="/work">
            <MotionButton text="Work" size="regular" />
          </Link>
          <Link href="/contact">
            <MotionButton text="Contact" size="regular" />
          </Link>
        </div>

        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(true)}
            className="flex h-10 w-10 items-center justify-center rounded-full focus:outline-none"
            aria-label="Open menu"
            type="button"
          >
            <motion.div
              className="flex flex-col gap-1"
              whileTap={{ scale: 0.9 }}
              aria-hidden="true"
            >
              <span className="block h-0.5 w-5 bg-current" />
              <span className="block h-0.5 w-5 bg-current" />
              <span className="block h-0.5 w-5 bg-current" />
            </motion.div>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black text-white"
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute right-6 top-6 text-3xl"
              aria-label="Close menu"
              type="button"
            >
              &times;
            </button>

            <div className="flex flex-col space-y-6 text-center text-2xl">
              <Link
                href="/"
                className="font-sans text-7xl font-bold tracking-tight hover:text-gray-500"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/work"
                className="font-sans text-7xl font-bold tracking-tight hover:text-gray-500"
                onClick={() => setIsOpen(false)}
              >
                Work
              </Link>
              <Link
                href="/contact"
                className="font-sans text-7xl font-bold tracking-tight hover:text-gray-500"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
