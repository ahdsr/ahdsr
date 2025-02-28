"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import Button from "./Button";
import Link from "next/link";

// Define multiple sections with their own projects
const sections = [
  {
    title: "Client digital products",
    description:
      "From concept to launch, this category showcases comprehensive client work—covering everything from initial strategy and UX/UI design to full-scale front-end and back-end development. Whether partnering with startups or established businesses, these projects reflect a seamless process of transforming ideas into fully realized digital products.",
    cta: "Learn more",
    number: "1",
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
    title: "Conceptual & pitches",
    description: "A collection of personal projects outside client work.  ",
    cta: "Learn more",
    number: "2",
    projects: [
      {
        title: "Beon",
        description: "Site Redesign",
        link: "/casestudies/beon",
        image: "/images/featured/beon/BEON_Thumb.png",
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
];

export default function Featured({ sectionList = sections }) {
  return (
    <>
      <div className="mx-auto h-full w-full max-w-7xl px-8 sm:px-20">
        <motion.h1
          initial={{ y: "50" }} // Starts below the div
          animate={{ y: "0" }} // Animates into view
          transition={{ duration: 0.5, ease: "easeOut" }} // Smooth easing
          className="mt-24 max-w-5xl font-sans text-4xl font-black tracking-[-0.08em] text-black md:text-7xl"
          id="trigger-section"
        >
          Use Cases
        </motion.h1>
      </div>
      <section className="mx-auto w-full max-w-7xl px-8 py-12 sm:px-20 md:py-24">
        {sectionList.map((section, sectionIndex) => {
          const { title, number, cta, description, projects } = section;
          const { ref, inView } = useInView({
            triggerOnce: true,
            threshold: 0.1,
          });

          return (
            <div
              key={sectionIndex}
              className="border-t border-t-zinc-300 pt-12 md:mt-24"
            >
              {/* Section Title and Description */}

              <motion.div
                ref={ref}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="mb-24 pb-12 text-center md:text-left"
              >
                <div className="flex flex-col items-start gap-6 md:flex-row">
                  {/* Left Column - Number & CTA Button */}
                  <div className="flex items-center space-x-4 md:flex-1">
                    <Button text={number} />
                    <Button text={cta} />
                  </div>

                  {/* Right Column - Title & Description */}
                  <div className="md:mb-12 md:flex-1 md:pb-12">
                    <h2 className="pb-4 text-left font-sans text-3xl font-semibold tracking-tighter text-zinc-800 md:text-5xl">
                      {title}
                    </h2>
                    <p className="mt-4 pb-4 text-left font-sans text-xl tracking-tight text-zinc-600">
                      {description}
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Project List - Flexbox with Wrapping */}
              <motion.div
                ref={ref}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.5 }}
                className="grid md:grid-cols-2 md:gap-8"
              >
                {projects.map((project, projectIndex) => (
                  <div key={projectIndex} className="">
                    <div
                      className={`relative h-64 w-full overflow-hidden ${project.bgColor}`}
                    >
                      <Link href={project.link}>
                        <motion.div
                          className="h-full w-full"
                          initial={{ scale: 1 }}
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.2, ease: "easeOut" }}
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

                    {/* Text Below */}
                    <div className="pb-8">
                      <h3 className="mt-2 font-light text-zinc-800">
                        {project.title}
                      </h3>
                      <p className="font-light text-zinc-400">
                        {project.description}
                      </p>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          );
        })}
      </section>
    </>
  );
}
