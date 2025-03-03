"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

export default function HeroSection({
  backgroundColor = "bg-zinc-300", // Default background color
  paddingTop = "pt-32",
  paddingBottom = "pb-80",
  heading = "Default Heading",
  headingHighlight = null, // Optional highlighted text in heading
  headingHighlightColor = "text-white", // Color for the highlighted text
  secondHighlight = null, // Optional second highlighted text
  secondHighlightColor = "text-indigo-500", // Color for the second highlighted text
  paragraph = "Default paragraph text",
  paragraphColor = "text-zinc-500",
  headingSize = "text-6xl md:text-7xl",
  headingWeight = "font-black",
  headingTracking = "tracking-[-0.08em]",
  paragraphSize = "text-xl",
  paragraphWeight = "font-normal",
  image = null, // Optional image path
  imageAlt = "Featured Image",
  imageWidth = 256,
  imageHeight = 256,
  buttonText = null, // Optional button text
  buttonLink = "/", // Button link if button is shown
  buttonClassName = "rounded-lg bg-blue-600 px-6 py-3 text-white hover:bg-blue-500",
  initialAnimation = { opacity: 0, y: 50 },
  headingAnimation = { opacity: 0, y: 30 },
  paragraphAnimation = { opacity: 0, y: 20 },
  mainTransition = { duration: 0.5, ease: "easeOut" },
  headingTransition = { duration: 1, ease: "easeOut", delay: 0.2 },
  paragraphTransition = { duration: 1, ease: "easeOut", delay: 0.6 },
  children, // Optional additional content
}) {
  const { ref, inView } = useInView({
    triggerOnce: true, // Ensures animation happens once
    threshold: 0.1, // Triggers animation when 10% of the component is visible
  });

  // Function to render heading with optional highlighted parts
  const renderHeading = () => {
    if (!headingHighlight && !secondHighlight) {
      return heading;
    }

    const parts = heading.split(headingHighlight || "");

    if (!secondHighlight) {
      return (
        <>
          {parts[0]}
          {headingHighlight && (
            <span className={headingHighlightColor}> {headingHighlight}</span>
          )}
          {parts[1]}
        </>
      );
    }

    // If there's a second highlight, we need to further split the second part
    const secondParts = parts[1].split(secondHighlight || "");

    return (
      <>
        {parts[0]}
        {headingHighlight && (
          <span className={headingHighlightColor}> {headingHighlight} </span>
        )}
        {secondParts[0]}
        {secondHighlight && (
          <span className={secondHighlightColor}>{secondHighlight}</span>
        )}
        {secondParts[1]}
      </>
    );
  };

  return (
    <motion.div
      ref={ref}
      initial={initialAnimation}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={mainTransition}
      className={`mx-auto flex w-full items-center justify-center ${backgroundColor} ${paddingTop} ${paddingBottom}`}
    >
      <div className="mx-auto flex h-full w-full max-w-7xl flex-col px-8 sm:px-20">
        <motion.h1
          initial={headingAnimation}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={headingTransition}
          className={`mt-24 max-w-5xl font-sans ${headingSize} ${headingWeight} ${headingTracking} text-black`}
        >
          {renderHeading()}
        </motion.h1>

        <div className="mt-6 flex h-full flex-row items-center justify-between space-x-8">
          {image && (
            <div
              className={`relative h-[${imageHeight}px] w-[${imageWidth}px]`}
            >
              <Image
                src={image}
                alt={imageAlt}
                layout="fill"
                objectFit="cover"
              />
            </div>
          )}

          <motion.p
            initial={paragraphAnimation}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={paragraphTransition}
            className={`flex flex-col text-left font-sans ${paragraphSize} ${paragraphWeight} ${paragraphColor}`}
          >
            {paragraph}
            {buttonText && (
              <Link href={buttonLink} className="mt-4">
                <Button className={buttonClassName} text={buttonText} />
              </Link>
            )}
          </motion.p>

          {children}
        </div>
      </div>
    </motion.div>
  );
}
