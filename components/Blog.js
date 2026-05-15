"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import Link from "next/link";

// Define multiple sections with their own projects
const sections = [
  {
    category: "Notes",
    projects: [
      {
        title: "Site Relaunch 2025",
        description:
          "Why I rebuilt the portfolio around clearer case studies, stronger project context, and more useful writing.",
        date: "Feb 26, 2025",
        link: "/blog/sitereleaunch2025/",
        image: "/images/featured/codeconnect/Codeconnect_Thumb.png",
        bgColor: "bg-emerald-500",
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
        {["All", "Notes"].map((category) => (
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
          <div className="mb-48 grid grid-cols-1 gap-12 md:grid-cols-3">
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
                {project.date && (
                  <p className="mt-2 font-mono text-xs text-zinc-500">
                    {project.date}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
