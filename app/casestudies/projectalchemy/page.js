"use client";

import HeroSection from "@/components/HeroSection";
import ProjectNavigation from "@/components/ProjectNavigation";
import VideoSection from "@/components/VideoSection";
import Image from "next/image";
import { usePathname } from "next/navigation";

const caseStudies = [
  { slug: "unify", title: "Unify Design System" },
  { slug: "beacon", title: "Beacon Mobile" },
  { slug: "codeconnect", title: "Code Connect" },
  { slug: "quest", title: "Quest Insurance" },
  { slug: "tddashboards", title: "TD Dashboards" },
  { slug: "tdbillmanager", title: "TD Bill Manager" },
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
            heading="Project Alchemy"
            headingSize="text-4xl sm:text-7xl"
            headingWeight="font-semibold"
            headingTracking="tracking-tighter"
            headingHighlight="Product Design"
            headingHighlightColor="text-gray-300"
            secondHighlight="UX Design"
            secondHighlightColor="text-gray-300"
            paragraph="An AI-powered tool for clearer meeting documentation."
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
            Project Alchemy is an AI-powered tool for capturing, organizing, and
            reviewing meeting documentation. It helps users generate summaries,
            extract key insights, and review transcripts without relying on
            manual note-taking during the meeting.
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
            On a small team, I contributed to product strategy, product vision,
            UX, and UI design.
          </div>
        </div>

        {/* Homepage Section */}
        <div className="mx-auto flex max-w-7xl flex-col border-t border-t-zinc-300 py-12 md:flex-row md:py-24">
          <div className="mb-8 flex-1 font-sans text-5xl font-medium tracking-tighter text-zinc-800">
            Concept creation
          </div>
          <div className="flex-1 font-sans tracking-tight text-zinc-600 md:text-base">
            The concept focused on moving beyond meeting summaries. Project
            Alchemy explored how structured meeting documentation could support
            AI-assisted execution by giving tools like Cursor and Aider clearer
            context. The goal was to turn discussions into better source
            material for planning, coding, and follow-up work.
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
