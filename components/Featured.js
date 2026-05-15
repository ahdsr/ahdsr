"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import MotionButton from "./Button";
import PlusButton from "./PlusButton";

const sections = [
  {
    title: "Client digital products",
    description:
      "Selected client work across product strategy, UX, UI, design systems, and implementation support.",
    cta: "View work",
    number: "1",
    projects: [
      {
        title: "FIS Global - Code Connect",
        description: "API Marketplace",
        link: "/casestudies/codeconnect",
        image: "/images/featured/codeconnect/Codeconnect_Thumb.png",
        bgColor: "bg-emerald-500",
      },
      {
        title: "Quest Insurance",
        description: "Product Design",
        link: "/casestudies/quest",
        image: "/images/featured/quest/Quest_Thumb.png",
        bgColor: "bg-indigo-500",
      },
      {
        title: "TD Dashboards",
        description: "Native App",
        link: "/casestudies/tddashboards",
        image: "/images/featured/tddashboards/TDDash_hero.webp",
        bgColor: "bg-indigo-500",
      },
      {
        title: "TD Bill Manager",
        description: "Native App",
        link: "/casestudies/tdbillmanager",
        image: "/images/featured/tdbillmanager/tdpaybills_hero.webp",
        bgColor: "bg-indigo-500",
      },
    ],
  },
  {
    title: "Conceptual",
    description:
      "Self-directed product concepts used to explore strategy, interaction patterns, and early-stage ideas.",
    cta: "View concepts",
    number: "2",
    projects: [
      {
        title: "Beon",
        description: "Product Concept",
        link: "/casestudies/beon",
        image: "/images/featured/beon/BEON_Thumb.png",
        bgColor: "bg-orange-500",
      },
      {
        title: "Project Alchemy",
        description: "AI Product Concept",
        link: "/casestudies/projectalchemy",
        image: "/images/featured/projectalchemy/ProjectAlchemy_Thumb.png",
        bgColor: "bg-orange-500",
      },
    ],
  },
];

function FeaturedProjectCard({ project }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div>
      <div
        className={`relative h-64 w-full overflow-hidden rounded-md ${project.bgColor}`}
      >
        <div className="relative h-full w-full">
          <Link href={project.link}>
            <motion.div
              className="h-full w-full"
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.1 }}
              transition={{
                duration: 0.2,
                ease: "easeOut",
              }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
            </motion.div>
          </Link>

          <PlusButton isHovered={isHovered} />
        </div>
      </div>

      <div className="pb-8">
        <h3 className="mt-2 font-medium tracking-tight text-zinc-800">
          {project.title}
        </h3>
        <p className="text-sm font-light text-zinc-400">
          {project.description}
        </p>
      </div>
    </div>
  );
}

function FeaturedSection({ section }) {
  const { title, number, cta, description, projects } = section;

  return (
    <div className="border-t border-t-zinc-300 pt-12 md:mt-24">
      <motion.div
        initial={false}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="mb-8 text-center md:mb-24 md:text-left"
      >
        <div className="flex flex-col items-start gap-6 md:flex-row">
          <div className="flex items-center space-x-4 md:flex-1">
            <MotionButton
              text={number}
              bgColor="gray"
              textColor="black"
              hoverBgColor="black"
              hoverTextColor="white"
            />
            <MotionButton
              text={cta}
              bgColor="gray"
              textColor="black"
              hoverBgColor="black"
              hoverTextColor="white"
            />
          </div>

          <div className="md:mb-4 md:flex-1">
            <h2 className="mt-4 text-left font-sans text-2xl font-semibold tracking-tighter text-zinc-800 md:text-4xl">
              {title}
            </h2>
            <p className="mt-4 pb-4 text-left font-sans text-base font-light tracking-tight text-zinc-600 md:text-lg">
              {description}
            </p>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={false}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.5 }}
        className="grid md:grid-cols-2 md:gap-8"
      >
        {projects.map((project) => (
          <FeaturedProjectCard key={project.title} project={project} />
        ))}
      </motion.div>
    </div>
  );
}

export default function Featured({ sectionList = sections }) {
  return (
    <>
      <div className="mx-auto h-full w-full max-w-7xl px-8 sm:px-20">
        <motion.h1
          initial={{ y: "50" }}
          animate={{ y: "0" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mt-24 max-w-5xl font-sans text-4xl font-black tracking-[-0.08em] text-black md:text-7xl"
          id="trigger-section"
        >
          Selected Work
        </motion.h1>
      </div>
      <section className="mx-auto w-full max-w-7xl px-8 py-12 sm:px-20 md:py-24">
        {sectionList.map((section) => (
          <FeaturedSection key={section.title} section={section} />
        ))}
      </section>
    </>
  );
}
