"use client";

import HeroSection from "@/components/HeroSection";
import ProjectNavigation from "@/components/ProjectNavigation";
import VideoSection from "@/components/VideoSection";
import Image from "next/image";
import { usePathname } from "next/navigation";

const caseStudies = [
  { slug: "codeconnect", title: "Code Connect" },
  { slug: "quest", title: "Quest Insurance" },
  { slug: "beon", title: "Beon" },
  { slug: "projectalchemy", title: "Project Alchemy" },
];

export default function ProjectAlchemy() {
  const pathname = usePathname();
  const currentSlug = pathname.split("/").pop();
  const currentIndex = caseStudies.findIndex(
    (caseStudy) => caseStudy.slug === currentSlug,
  );

  const prevProject = caseStudies[currentIndex - 1] || null;
  const nextProject = caseStudies[currentIndex + 1] || null;

  return (
    <>
      <div className="relative">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/featured/projectalchemy/UseCase_Hero.png"
            alt="Project Alchemy Hero"
            fill
            priority
            className="object-cover"
          />
        </div>
        <div className="relative z-10">
          <HeroSection
            backgroundColor="bg-orange-500 bg-opacity-80"
            paddingTop="pt-24"
            paddingBottom="pb-24"
            heading="Alchemy."
            headingSize="text-4xl sm:text-7xl"
            headingWeight="font-semibold"
            headingTracking="tracking-tighter"
            headingHighlight="Product Design"
            headingHighlightColor="text-gray-300"
            secondHighlight="UX Design"
            secondHighlightColor="text-gray-300"
            paragraph="AI-powered tool designed to streamline and enhance meeting documentation."
            paragraphSize="text-base"
            paragraphWeight="font-light"
            paragraphColor="text-gray-300"
          />
        </div>
      </div>

      <div className="px-8 sm:px-20">
        {/* Intro */}
        <div className="mx-auto flex flex-col gap-8 border-t border-t-zinc-300 py-12 font-sans md:flex-row md:py-24">
          <div className="flex-1 text-xl font-light tracking-normal text-zinc-600 md:text-2xl md:font-thin">
            Project Alchemy is an AI-powered tool designed to streamline and
            enhance meeting documentation. Initially developed to solve the
            challenge of capturing and organizing discussions, it enables users
            to efficiently generate summaries, extract key insights, and
            retrospectively review meeting transcripts. Unlike traditional
            note-taking methods, Project Alchemy leverages AI to reduce manual
            effort, ensuring that important conversations are documented without
            disrupting workflow.
          </div>
          <div className="mb-8 text-5xl font-medium tracking-tighter text-zinc-800">
            <div className="mb-4">
              <p className="font-sans text-lg font-light tracking-tighter text-zinc-600 md:text-xl">
                Client
              </p>
              <p className="font-sans text-lg font-medium tracking-tighter text-zinc-600 md:text-xl">
                ARL
              </p>
            </div>
            <div className="mb-4">
              <p className="font-sans text-lg font-light tracking-tighter text-zinc-600 md:text-xl">
                Role
              </p>
              <p className="font-sans text-lg font-medium tracking-tighter text-zinc-600 md:text-xl">
                Product & UX Design
              </p>
            </div>
            <div className="mb-4">
              <p className="font-sans text-lg font-light tracking-tighter text-zinc-600 md:text-xl">
                Duration
              </p>
              <p className="font-sans text-lg font-medium tracking-tighter text-zinc-600 md:text-xl">
                4 weeks
              </p>
            </div>
          </div>
        </div>
        {/* My Role & Team */}
        <div className="mx-auto flex flex-col gap-8 border-t border-t-zinc-300 py-12 font-sans md:flex-row md:py-24">
          <div className="mb-8 flex-1 text-2xl font-medium tracking-tighter text-zinc-800 md:text-5xl">
            My role & team
          </div>
          <div className="flex-1 text-lg font-light tracking-tight text-zinc-600 md:text-lg">
            My role on our small team is project strategy, vision, and of course
            my UX and UI expertise.
          </div>
        </div>

        {/* Homepage Section */}
        <div className="mx-auto flex max-w-7xl flex-col border-t border-t-zinc-300 py-12 md:flex-row md:py-24">
          <div className="mb-8 flex-1 font-sans text-5xl font-medium tracking-tighter text-zinc-800">
            Concept creation
          </div>
          <div className="flex-1 font-sans tracking-tight text-zinc-600 md:text-base">
            Project Alchemy is not just another AI-powered meeting documentation
            tool—it’s the bridge between conversations and real, working
            projects. Unlike existing solutions like Otter.ai, Tactiq, or
            Sembly, which focus primarily on summarization, Project Alchemy is
            designed with the next step in mind: turning documentation into
            actionable, AI-driven execution. Our goal is to create structured,
            AI-optimized documentation that seamlessly integrates with tools
            like Cursor and Aider, allowing teams to transform discussions into
            fully developed working code. By enhancing documentation quality and
            context, Project Alchemy enables AI agents to generate, refine, and
            execute projects with minimal human intervention. This means faster
            iteration cycles, reduced development overhead, and a direct path
            from ideation to implementation. With a focus on precision,
            structure, and AI-driven workflow automation, Project Alchemy is not
            just about keeping records—it’s about accelerating innovation.
          </div>
        </div>
        <VideoSection
          videoSrc="/videos/projectalchemy.mp4"
          overlay={true}
          overlayText=""
        />
        <ProjectNavigation
          prevProject={prevProject}
          nextProject={nextProject}
        />
      </div>
    </>
  );
}
