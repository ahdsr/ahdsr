"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import Link from "next/link";

// Define multiple sections with their own projects
const sections = [
  {
    title: "Digital Products",
    category: "Product Design",
    description:
      "From idea to a product: creating successful digital services for innovative startups and established businesses with cutting-edge UX, UI design, front and back-end development.",
    projects: [
      {
        title: "Code Connect",
        description: "Product & UX Design",
        link: "/casestudies/codeconnect",
        image: "/images/featured/codeconnect/Codeconnect_Thumb.png",
        bgColor: "bg-emerald-500",
      },
      {
        title: "Quest Insurance",
        description: "Product & UX Design",
        link: "/casestudies/projectalchemy",
        image: "/images/featured/projectalchemy/ProjectAlchemy_Thumb.png",
        bgColor: "bg-orange-500",
      },
    ],
  },
  {
    title: "Conceptual & Product Pitches",
    category: "Product Design",
    description:
      "We design and develop powerful e-commerce platforms, enabling businesses to grow their online presence and reach customers worldwide.",
    projects: [
      {
        title: "BEON",
        description: "Product & UX Design",
        link: "/casestudies/beon",
        image: "/images/featured/beon/BEON_Thumb.png",
        bgColor: "bg-blue-500",
      },
      // {
      //   title: "Project Alchemy",
      //   description: "Product & UX Design",
      //   link: "/casestudies/projectalchemy",
      //   image: "/images/featured/projectalchemy/ProjectAlchemy_Thumb.png",
      //   bgColor: "bg-orange-500",
      // },
    ],
  },
  {
    title: "All Other",
    category: "Other",
    description: "Personal project, concepts and mediums I regularly explore",
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
      <div className="justify-left mb-12 flex space-x-4">
        {["All", "Product Design", "UX Design", "Other"].map((category) => (
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
          <div className="mb-48 flex flex-wrap gap-12">
            {section.projects.map((project, projectIndex) => (
              <div
                key={projectIndex}
                className="w-full sm:w-[48%] lg:w-[47.5%]"
              >
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
