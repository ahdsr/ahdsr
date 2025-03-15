"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation"; // Import usePathname to detect the current route
import { motion, AnimatePresence } from "framer-motion";
import MotionButton from "./Button";
import Link from "next/link";

export default function Navbar() {
  const pathname = usePathname(); // Get the current route
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (pathname !== "/") return; // Only enable scrolling effect on the homepage

    const handleScroll = () => {
      const triggerSection = document.getElementById("trigger-section");

      if (!triggerSection) return;

      const triggerPosition =
        triggerSection.getBoundingClientRect().top + window.scrollY;
      const scrollPosition = window.scrollY;

      // If scrolled past the trigger section, keep the navbar grey
      setScrolled(scrollPosition >= triggerPosition);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]); // Re-run only when the pathname changes

  // Define background color based on page
  const pageBgColors = {
    "/": scrolled
      ? "bg-white text-zinc-800 shadow-xl shadow-zinc-500/10"
      : "bg-zinc-300 text-gray-600 border-b border-b-zinc-400",
    "/about": "bg-white text-black border-b border-b-zinc-300",
    "/work": "bg-white text-black border-b border-b-zinc-300",
    "/contact": "bg-white text-black border-b border-b-zinc-300",
    "/blog": "bg-blue-800 text-white border-b border-b-zinc-300",
    "/casestudies/codeconnect": "bg-white text-black shadow-xl",
    "/casestudies/projectalchemy": "bg-orange-500 text-black shadow-xl",
    "/casestudies/beon": "bg-white text-black shadow-xl",
    "/casestudies/quest": "bg-white text-black shadow-xl",
    "/casestudies/tddashboards": "bg-white text-black shadow-xl",
    "/casestudies/tdbillmanager": "bg-white text-black shadow-xl",
    "/casestudies/beacon": "bg-white text-black shadow-xl",
    "/work/3d": "bg-teal-700 text-white",
    "/examples/fullscreen-background": "bg-black text-white",
  };

  return (
    <nav
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${
        pageBgColors[pathname] || "bg-gray-800 text-white"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-4 md:px-20">
        {/* Logo */}
        <div className="rounded-full bg-zinc-100 px-2.5 py-2 font-sans text-xl font-bold tracking-tight hover:bg-zinc-200">
          <Link href="/" className="">
            LC
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="mt-2 hidden space-x-4 font-sans text-sm md:flex md:text-base">
          <Link href="/">
            <MotionButton text="Home" size="regular" />
          </Link>

          {/* <Link href="/about" className="hover:text-gray-300">
            About
          </Link> */}
          <Link href="/work">
            <MotionButton text="Work" size="regular" />
          </Link>
          <Link href="/contact">
            <MotionButton text="Contact" size="regular" />
          </Link>
        </div>

        {/* Mobile Hamburger Menu */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(true)}
            className="focus:outline-none"
          >
            <motion.div whileTap={{ scale: 0.9 }}>☰</motion.div>
          </button>
        </div>
      </div>

      {/* Fullscreen Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black text-white"
          >
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute right-6 top-6 text-3xl"
            >
              ✕
            </button>

            {/* Mobile Navigation Links */}
            <div className="flex flex-col space-y-6 text-center text-2xl">
              <Link
                href="/"
                className="font-sans text-7xl font-bold tracking-tight hover:text-gray-500"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              {/* <Link
                href="/about"
                className="hover:text-gray-500"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link> */}
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
