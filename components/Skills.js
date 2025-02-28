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
    <section className="bg-zinc-800">
      <h1 className="w-full gap-6 py-24 pb-2 mx-auto font-sans text-6xl font-semibold tracking-tighter text-indigo-600 max-w-7xl md:flex-row md:px-20">
        The process
      </h1>
      <div className="flex flex-col items-center justify-center w-full gap-6 py-24 mx-auto max-w-7xl md:flex-row md:px-20">
        {/* Left Side - Image */}
        <div className="flex items-center justify-center flex-1 w-full md:w-1/2">
          <div className="relative flex items-center justify-center w-full h-full">
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
        <div className="flex-1 w-full space-y-4 md:w-1/2">
          {accordionData.map((item, index) => (
            <div
              key={index}
              className={`border-zinc-700 ${
                index !== accordionData.length - 1 ? "border-b" : ""
              }`}
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="flex items-center justify-between w-full p-4 font-sans text-3xl font-medium tracking-tight text-left transition bg-zinc-800 hover:bg-zinc-900"
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
                <p className="p-4 font-sans text-base font-light tracking-tight bg-zinc-800">
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
