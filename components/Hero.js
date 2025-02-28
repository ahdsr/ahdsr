"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

export default function Hero() {
  const { ref, inView } = useInView({
    triggerOnce: true, // Ensures animation happens once
    threshold: 0.1, // Triggers animation when 10% of the component is visible
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: -100 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="mx-auto flex w-full items-center justify-center bg-zinc-300 pb-80 pt-32"
    >
      <div className="mx-auto flex h-full w-full max-w-7xl flex-col px-8 sm:px-20">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="mb-24 mt-24 max-w-2xl font-sans text-7xl font-black tracking-[-0.08em] text-black"
        >
          Strategy. Craft. <span className="text-white"> Design.</span>
          <span className="text-indigo-500"> Impact.</span>
        </motion.h1>

        <div className="mt-6 flex h-full flex-row items-center justify-between space-x-8">
          <div className="relative h-64 w-64">
            <Image
              src="/images/global/11.png"
              alt="Featured Image"
              layout="fill" // Makes it responsive
              objectFit="cover" // Ensures the image scales properly
            />
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
            className="flex w-80 flex-col items-start text-left font-sans text-xl tracking-tight text-zinc-500"
          >
            Great UX is the perfect balance of form and function—designed to
            solve real problems. By combining research, creativity, and
            technology, I create intuitive experiences that drive engagement,
            efficiency, and impact.
            <Link href="/blog " className="mt-4">
              <Button
                className="rounded-lg bg-blue-600 px-6 py-3 text-white hover:bg-blue-500"
                text="More on me"
              />
            </Link>
          </motion.p>
        </div>
      </div>
    </motion.div>
  );
}
