"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

export default function HeroAbout() {
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
      className="flex items-center justify-center w-full pt-12 pb-64 mx-auto bg-orange-500"
    >
      <div className="flex flex-col w-full h-full px-8 mx-auto sm:px-20 max-w-7xl">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="max-w-5xl mt-24 font-sans font-semibold tracking-tighter text-black text-7xl"
        >
          Helping brands thrive in the{" "}
          <span className="text-white"> digital world.</span>
        </motion.h1>

        <div className="flex flex-row items-center justify-between h-full mt-6 space-x-8">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
            className="flex flex-col font-sans text-3xl font-light text-left text-zinc-500 "
          >
            As a designer, I've been lucky enough to be exposed to a vast number
            of employers, teams and projects. Each of them have given me a
            rewarding learning experience.
          </motion.p>
        </div>
      </div>
    </motion.div>
  );
}
