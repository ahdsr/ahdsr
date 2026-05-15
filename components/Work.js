"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import Link from "next/link";
import MotionButton from "./Button";

// Animation variants
const sectionContainerVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3, // Longer stagger between sections
      delayChildren: 0.1,
    },
  },
};

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.15, // Stagger between projects in a section
      delayChildren: 0.1,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.3,
      ease: "easeIn",
    },
  },
};

const projectVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.3,
      ease: "easeIn",
    },
  },
};

// Define multiple sections with their own projects
const sections = [
  {
    title: "Case Studies",
    category: "Case Studies",
    description:
      "Selected case studies across product strategy, UX, UI, design systems, and front-end implementation. Each project shows how I frame problems, shape the user experience, and move ideas toward usable products.",
    projects: [
      {
        title: "Unify Design System",
        description: "Design Systems",
        link: "/casestudies/unify",
        image: "/images/featured/unify/Components.png",
        bgColor: "bg-blue-500",
      },
      {
        title: "Beacon Mobile",
        description: "Design Systems",
        link: "/casestudies/beacon",
        image: "/images/featured/beacon/Beacon.png",
        bgColor: "bg-blue-500",
      },
      {
        title: "Code Connect",
        description: "Site Redesign",
        link: "/casestudies/codeconnect",
        image: "/images/featured/codeconnect/Codeconnect_Thumb.png",
        bgColor: "bg-emerald-500",
      },
      {
        title: "Quest Insurance",
        description: "Product Design",
        link: "/casestudies/quest",
        image: "/images/featured/quest/Quest_Thumb.png",
        bgColor: "bg-yellow-500",
      },
      {
        title: "TD Dashboards",
        description: "Native App",
        link: "/casestudies/tddashboards",
        image: "/images/featured/tddashboards/Thumb.png",
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
    category: "Conceptual",
    description:
      "Self-directed concepts and early-stage product ideas outside client work. These projects show how I explore strategy, structure, and interaction before a product moves into delivery.",
    projects: [
      {
        title: "BEON",
        description: "Product & UX Design",
        link: "/casestudies/beon",
        image: "/images/featured/beon/BEON_Thumb.png",
        bgColor: "bg-blue-500",
      },
      {
        title: "Project Alchemy",
        description: "Product & UX Design",
        link: "/casestudies/projectalchemy",
        image: "/images/featured/projectalchemy/ProjectAlchemy_Thumb.png",
        bgColor: "bg-orange-500",
      },
    ],
  },
  {
    title: "Explorations",
    category: "3D",
    description:
      "Personal explorations in rendering, photography, animation, and visual design that support my broader product design practice.",
    projects: [
      {
        title: "Rendering",
        description: "Blender, Rendering",
        link: "/work/3d",
        image: "/images/other/RoomRender_Thumb.png",
        bgColor: "bg-blue-500",
      },

      // {
      //   title: "Project visualization",
      //   description: "Blender, Rendering",
      //   link: "/casestudies/anotherproject",
      //   image: "/images/other/LaptopRender_Thumb.png",
      //   bgColor: "bg-purple-500",
      // },
    ],
  },
];

export default function Work() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Ensure `useInView` is always called at the top level
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const filteredSections =
    selectedCategory === "All"
      ? sections
      : sections.filter((section) => section.category === selectedCategory);

  return (
    <section className="mx-auto max-w-7xl" id="trigger-section">
      {/* Filter Buttons */}
      <div className="justify-left mb-12 mt-8 flex space-x-4">
        {["All", "Case Studies", "Conceptual", "3D"].map((category) => (
          <MotionButton
            key={category}
            text={category}
            onClick={() => setSelectedCategory(category)}
            bgColor={selectedCategory === category ? "black" : "gray"}
            textColor={selectedCategory === category ? "white" : "white"}
            hoverBgColor="black"
            hoverTextColor="white"
            size="regular"
          />
        ))}
      </div>

      {/* Display Filtered Sections */}
      <AnimatePresence mode="wait">
        <motion.div
          key={selectedCategory}
          variants={sectionContainerVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          {filteredSections.map((section, sectionIndex) => (
            <motion.div
              key={`${section.category}-${sectionIndex}`}
              className="border-t border-t-zinc-300 pt-16"
              variants={sectionVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {/* Section Title */}
              <div className="mb-8 overflow-hidden">
                <h2 className="pb-4 font-sans text-3xl font-semibold tracking-tighter text-zinc-800">
                  {section.title}
                </h2>
              </div>

              {/* Section Description */}
              <p
                ref={ref}
                className="mb-12 font-sans text-lg tracking-tight text-gray-600"
              >
                {section.description}
              </p>

              {/* Project List */}
              <motion.div
                className="mb-48 grid grid-cols-1 gap-8 md:grid-cols-2"
                variants={sectionVariants}
              >
                {section.projects.map((project, projectIndex) => (
                  <motion.div
                    key={`${project.title}-${projectIndex}`}
                    className="flex w-full flex-col"
                    variants={projectVariants}
                  >
                    <div
                      className={`relative h-64 w-full overflow-hidden rounded-md ${project.bgColor} flex-grow`}
                    >
                      <Link href={project.link}>
                        <motion.div
                          className="h-full w-full"
                          initial={{ scale: 1 }}
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.3, ease: "easeOut" }}
                        >
                          <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="object-cover"
                          />
                        </motion.div>
                      </Link>
                    </div>

                    {/* Project Title & Description */}
                    <div className="pb-8">
                      <h3 className="mt-2 font-medium tracking-tight text-zinc-800">
                        {project.title}
                      </h3>
                      <p className="text-sm font-light text-zinc-400">
                        {project.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
