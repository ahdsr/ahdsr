"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

export default function HeroBlog() {
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
      className="mx-auto flex w-full items-center justify-center bg-blue-800 pb-64 pt-12"
    >
      <div className="mx-auto flex w-full max-w-7xl flex-col px-8 md:px-20">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="mt-24 max-w-5xl font-sans text-7xl font-semibold tracking-tighter text-black"
        >
          Blog <span className="text-white"> blog.</span>
        </motion.h1>

        <div className="mt-6 flex h-full flex-row items-center justify-between space-x-8">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
            className="flex flex-col text-left font-sans text-3xl font-light leading-normal tracking-tight text-white"
          >
            Thoughts, insights, and occasional design musings—sometimes
            profound, sometimes just me thinking out loud.
          </motion.p>
        </div>
      </div>
    </motion.div>
  );
}
