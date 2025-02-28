"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import Link from "next/link";

// Define multiple sections with their own projects
const sections = [
  {
    category: "1",
    projects: [
      {
        title: "Site Relaunch 2025",
        description:
          "With 2024 ending, and my old portfolio site development progress interrupted with another contract gig, I decided to take a new direction with this one and make some updates.",
        date: "Feb 26, 2025",
        link: "/blog/sitereleaunch2025/",
        image: "/images/featured/codeconnect/Codeconnect_Thumb.png",
        bgColor: "bg-emerald-500",
      },
      {
        title: "Project Alchemy",
        description: "Site Redesign",
        link: "/casestudies/projectalchemy",
        image: "/images/featured/projectalchemy/ProjectAlchemy_Thumb.png",
        bgColor: "bg-orange-500",
      },
      {
        title: "Project Alchemy",
        description: "Site Redesign",
        link: "/casestudies/projectalchemy",
        image: "/images/featured/projectalchemy/ProjectAlchemy_Thumb.png",
        bgColor: "bg-orange-500",
      },
    ],
  },
  {
    category: "2",
    projects: [
      {
        title: "BEON",
        description: "E-Commerce Platform",
        link: "/casestudies/beon",
        image: "/images/global/na.png",
        bgColor: "bg-blue-500",
      },
      {
        title: "Another Project",
        description: "Marketplace Expansion",
        link: "/casestudies/anotherproject",
        image: "/images/global/na.png",
        bgColor: "bg-purple-500",
      },
      {
        title: "Another Project",
        description: "Marketplace Expansion",
        link: "/casestudies/anotherproject",
        image: "/images/global/na.png",
        bgColor: "bg-purple-500",
      },
    ],
  },
  {
    category: "3",
    projects: [
      {
        title: "BEON",
        description: "E-Commerce Platform",
        link: "/casestudies/newproject",
        image: "/images/other/RoomRender_Thumb.png",
        bgColor: "bg-blue-500",
      },
      {
        title: "Another Project",
        description: "Marketplace Expansion",
        link: "/casestudies/anotherproject",
        image: "/images/other/LaptopRender_Thumb.png",
        bgColor: "bg-purple-500",
      },
    ],
  },
];

export default function Blog() {
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
    <section className="mx-auto max-w-7xl px-8 md:px-20">
      {/* Filter Buttons */}
      <div className="justify-left mb-12 flex space-x-4">
        {["All", "1", "2", "3"].map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`mt-8 rounded-full px-3 py-1 font-sans text-sm tracking-tight hover:bg-black hover:text-white ${
              selectedCategory === category
                ? "bg-black text-white"
                : "bg-zinc-400 text-white"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Display Filtered Sections */}
      {filteredSections.map((section, sectionIndex) => (
        <div key={sectionIndex} className="border-t border-t-zinc-300 pt-16">
          {/* Project List */}
          <div className="mb-48 grid grid-cols-3 gap-12">
            {section.projects.map((project, projectIndex) => (
              <div key={projectIndex} className="">
                <div
                  className={`relative h-64 w-full overflow-hidden ${project.bgColor}`}
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
                <p className="font-light text-zinc-400">
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
