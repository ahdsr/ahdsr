"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import Link from "next/link";
import MotionButton from "./Button";

// Define multiple sections with their own projects
const sections = [
  {
    title: "Digital Products",
    category: "Use Cases",
    description:
      "Transforming ideas into standout digital services with innovative UX, UI design, and full-stack development. From early-stage concepts to fully functional products, I craft seamless digital experiences that drive engagement and business success.",
    projects: [
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
    title: "Conceptual & Product Pitches",
    category: "Conceptual & Pitches",
    description:
      "Exploring bold ideas—projects that started or remained as concepts beyond client work. These creative explorations push boundaries, challenge industry norms, and serve as a testing ground for fresh, innovative approaches to digital solutions.",
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
    title: "All Other",
    category: "3D",
    description:
      "A showcase of personal creativity, including design, rendering, photography, and animation. This space highlights passion projects, experimental work, and artistic expressions that inspire and influence my professional design process.",
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
        {["All", "Use Cases", "Conceptual & Pitches", "3D"].map((category) => (
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
      {filteredSections.map((section, sectionIndex) => (
        <div key={sectionIndex} className="border-t border-t-zinc-300 pt-16">
          {/* Section Title */}
          <div className="mb-8 overflow-hidden">
            <h2 className="pb-4 font-sans text-3xl font-semibold tracking-tighter text-zinc-800">
              {section.title}
            </h2>
          </div>

          {/* Section Description */}
          <p
            ref={ref}
            className="s mb-12 font-sans text-lg tracking-tight text-gray-600"
          >
            {section.description}
          </p>

          {/* Project List */}
          <div className="mb-48 grid grid-cols-1 gap-8 md:grid-cols-2">
            {section.projects.map((project, projectIndex) => (
              <div key={projectIndex} className="flex w-full flex-col">
                <div
                  className={`relative h-64 w-full overflow-hidden ${project.bgColor} flex-grow`}
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
                <h3 className="mt-2 font-light text-zinc-800">
                  {project.title}
                </h3>
                <p className="w-full font-light text-zinc-400">
                  {project.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
