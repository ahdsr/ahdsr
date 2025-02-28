"use client";

import { motion } from "motion/react";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

export default function HeroCaseStudy({
  title,
  subtitle,
  description,
  backgroundImage,
  bgColor = "bg-black", // Default background color if not provided
}) {
  const { ref, inView } = useInView({
    triggerOnce: true, // Ensures animation happens once
    threshold: 0.1, // Triggers animation when 10% of the component is visible
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: -50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`relative flex items-center justify-center w-full py-24 mx-auto aspect-video overflow-hidden mt-16 ${bgColor}`}
    >
      {/* Background Image */}
      {backgroundImage && (
        <Image
          src={backgroundImage}
          alt="Background Image"
          fill
          className="object-cover object-center"
          priority // Ensures fast loading
        />
      )}

      {/* Content */}
      <div className="relative z-10 flex flex-col w-full h-full px-8 pb-48 mx-auto sm:px-20 max-w-7xl">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="max-w-5xl mt-24 font-sans text-4xl font-semibold tracking-tighter text-white sm:text-7xl"
        >
          {title}
          {subtitle && (
            <span className="block font-sans text-base font-normal tracking-tighter text-gray-300">
              {subtitle}
            </span>
          )}
          {description && (
            <span className="block font-sans text-base font-light tracking-tighter text-gray-300 text-md">
              {description}
            </span>
          )}
        </motion.h1>
      </div>
    </motion.div>
  );
}
