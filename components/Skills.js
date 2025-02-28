"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Skills() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const accordionData = [
    {
      title: "Research",
      content:
        "Clearly outline the goals and objectives of the project. What problem are you trying to solve? Who are the users or stakeholders? Conduct qualitative and quantitative research to understand user needs, behaviors, and pain points.",
      image: "/images/global/research.png",
    },
    {
      title: "Design",
      content:
        "Generate ideas and concepts to address the identified problem. This can involve brainstorming sessions, sketching, and exploring different design alternatives. Refine the most promising ideas into coherent concepts. Consider factors such as usability, feasibility, and alignment with user needs.",
      image: "/images/global/design.png",
    },
    {
      title: "Prototype",
      content:
        "Develop more detailed prototypes that closely resemble the final product or solution. Test the prototype to ensure that it functions as intended and meets the defined requirements. Identify any technical challenges or limitations that need to be addressed.",
      image: "/images/global/prototype.png",
    },
    {
      title: "Test",
      content:
        "Conduct usability testing with representative users to evaluate how they interact with the prototype. Gather feedback on aspects such as ease of use, navigation, and clarity of information.",
      image: "/images/global/test.png",
    },
    {
      title: "Evaluate",
      content:
        "Analyze the findings from testing to identify strengths, weaknesses, and areas for improvement in the design. Use insights from evaluation to iterate on the design and make necessary refinements. This may involve revisiting earlier stages of the design process to address any issues or incorporate new ideas.",
      image: "/images/global/evaluate.png",
    },
  ];

  return (
    <section className="mx-auto max-w-7xl bg-zinc-800 px-8 py-20 sm:px-20">
      <h1 className="mb-12 w-full pb-2 text-left font-sans text-6xl font-semibold tracking-tighter text-indigo-500">
        The process
      </h1>
      <div className="flex flex-col items-center justify-center gap-6 md:flex-row">
        {/* Left Side - Image */}
        <div className="flex w-full flex-1 items-center justify-center md:w-1/2">
          <div className="relative flex h-full w-full items-center justify-center">
            <Image
              src={
                openIndex !== null
                  ? accordionData[openIndex].image
                  : "/images/global/11.png"
              }
              alt="Descriptive alt text"
              width={330}
              height={330}
              className="transition-all duration-300 ease-in-out"
            />
          </div>
        </div>

        {/* Right Side - Accordion */}
        <div className="w-full flex-1 space-y-4 md:w-1/2">
          {accordionData.map((item, index) => (
            <div
              key={index}
              className={`border-zinc-700 ${
                index !== accordionData.length - 1 ? "border-b" : ""
              }`}
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="flex w-full items-center justify-between bg-zinc-800 p-4 text-left font-sans text-3xl font-medium tracking-tight transition hover:bg-zinc-900"
              >
                {item.title}
                <span className="text-xl">
                  {openIndex === index ? "−" : "+"}
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
    </section>
  );
}
