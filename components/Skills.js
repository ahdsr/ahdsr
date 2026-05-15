"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const accordionData = [
  {
    title: "Research",
    content:
      "Define the problem, audience, goals, and constraints. Use qualitative and quantitative research to understand user needs, behavior, and pain points.",
    image: "/images/global/research.png",
  },
  {
    title: "Design",
    content:
      "Explore possible solutions through sketches, flows, and interface concepts. Refine the strongest direction based on usability, feasibility, and user needs.",
    image: "/images/global/design.png",
  },
  {
    title: "Prototype",
    content:
      "Build prototypes that make the experience tangible. Use them to test flows, clarify requirements, and identify technical or interaction constraints early.",
    image: "/images/global/prototype.png",
  },
  {
    title: "Test",
    content:
      "Run usability testing with representative users to evaluate ease of use, navigation, comprehension, and task completion.",
    image: "/images/global/test.png",
  },
  {
    title: "Evaluate",
    content:
      "Turn findings into design decisions. Iterate on the work, revisit assumptions when needed, and refine the experience before delivery.",
    image: "/images/global/evaluate.png",
  },
];

export default function Skills() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-zinc-800">
      <div className="mx-auto max-w-7xl px-8 py-20 sm:px-20">
        <h1 className="mb-12 w-full pb-2 text-left font-sans text-6xl font-semibold tracking-tighter text-indigo-500">
          The process
        </h1>
        <div className="flex flex-col items-center justify-center gap-6 md:flex-row">
          <div className="flex w-full flex-1 items-center justify-center md:w-1/2">
            <div className="relative flex h-full w-full items-center justify-center">
              <Image
                src={
                  openIndex !== null
                    ? accordionData[openIndex].image
                    : "/images/global/11.png"
                }
                alt="Process step illustration"
                width={330}
                height={330}
                className="transition-all duration-300 ease-in-out"
              />
            </div>
          </div>

          <div className="w-full flex-1 space-y-4 md:w-1/2">
            {accordionData.map((item, index) => (
              <div
                key={item.title}
                className={`border-zinc-700 ${
                  index !== accordionData.length - 1 ? "border-b" : ""
                }`}
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="flex w-full items-center justify-between bg-zinc-800 p-4 text-left font-sans text-3xl font-medium tracking-tight transition hover:bg-zinc-900"
                  type="button"
                >
                  {item.title}
                  <span className="text-xl">
                    {openIndex === index ? "-" : "+"}
                  </span>
                </button>

                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={
                    openIndex === index
                      ? { height: "auto", opacity: 1 }
                      : { height: 0, opacity: 0 }
                  }
                  transition={{ duration: 0.2, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <p className="bg-zinc-800 p-4 font-sans text-xl font-light tracking-tight md:text-xl">
                    {item.content}
                  </p>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
