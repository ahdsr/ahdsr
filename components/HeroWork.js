"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import Work from "./Work";

export default function HeroWork() {
  const { ref, inView } = useInView({
    triggerOnce: true, // Ensures animation happens once
    threshold: 0.1, // Triggers animation when 10% of the component is visible
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="mx-auto flex w-full items-center justify-center bg-white pb-64 pt-12"
    >
      <div className="mx-auto flex h-full w-full max-w-7xl flex-col px-8 sm:px-20">
        {/* Masking container */}
        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: "100%" }} // Starts below the div
            animate={{ y: "0%" }} // Animates into view
            transition={{ duration: 0.5, ease: "easeOut" }} // Smooth easing
            className="mt-24 max-w-5xl font-sans text-9xl font-semibold tracking-tighter text-black"
          >
            Work
          </motion.h1>
        </div>
        <div className="mt-6 flex h-full flex-row items-center justify-between space-x-8">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, ease: "easeOut", delay: 0.5 }}
            className="flex flex-col text-left font-sans text-3xl font-light text-zinc-500"
          ></motion.p>
        </div>

        <Work />
      </div>
    </motion.div>
  );
}
