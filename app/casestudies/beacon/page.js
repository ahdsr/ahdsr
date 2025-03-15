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

export default function Beacon() {
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
            src="/images/featured/codeconnect/UseCase_Hero.png"
            alt="Beacon Mobile"
            fill
            priority
            className="object-cover"
          />
        </div>
        <div className="relative z-10">
          <HeroSection
            backgroundColor="bg-emerald-500 bg-opacity-80"
            paddingTop="pt-24"
            paddingBottom="pb-24"
            heading="Beacon Mobile"
            headingSize="text-4xl sm:text-7xl"
            headingWeight="font-semibold"
            headingTracking="tracking-tighter"
            paragraph="Design Systems"
            paragraphSize="text-base"
            paragraphWeight="font-light"
            paragraphColor="text-gray-300"
          />
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-8 sm:px-20">
        {/* Intro */}
        <div className="mx-auto flex flex-col gap-8 border-t border-t-zinc-300 py-12 font-sans md:flex-row md:py-24">
          <div className="flex-1 text-xl font-light tracking-normal text-zinc-600 md:text-2xl md:font-thin">
            Beacon mobile is FIS's white label mobile banking platform. It is
            used by many local and independant banks all over the US.
          </div>
          <div className="mb-8 text-5xl font-medium tracking-tighter text-zinc-800">
            <div className="mb-4">
              <p className="font-sans text-lg font-light tracking-tighter text-zinc-600 md:text-xl">
                Client
              </p>
              <p className="font-sans text-lg font-medium tracking-tighter text-zinc-600 md:text-xl">
                FIS Global
              </p>
            </div>
            <div className="mb-4">
              <p className="font-sans text-lg font-light tracking-tighter text-zinc-600 md:text-xl">
                Role
              </p>
              <p className="font-sans text-lg font-medium tracking-tighter text-zinc-600 md:text-xl">
                Design Systems
              </p>
            </div>
            <div className="mb-4">
              <p className="font-sans text-lg font-light tracking-tighter text-zinc-600 md:text-xl">
                Duration
              </p>
              <p className="font-sans text-lg font-medium tracking-tighter text-zinc-600 md:text-xl">
                6 months - current
              </p>
            </div>
          </div>
        </div>
        {/* My Role & Team */}
        <div className="mx-auto flex flex-col gap-8 border-t border-t-zinc-300 py-12 font-sans md:flex-row md:py-24">
          <div className="mb-8 flex-1 text-5xl font-medium tracking-tighter text-zinc-800">
            My role & team
          </div>
          <div className="flex-1 text-lg font-light tracking-tight text-zinc-600 md:text-lg">
            As a design on the design system team my responsibility is to review
            the existing Beacon screens and flows and apply the new design
            system look and feel to the existing screens. Along the way I am
            also responsible for improving any exisitng interactions, suggesting
            new and more efficient flows as well as ensuring that we keep true
            to the new design ssytgem being rolled out at FIS.
          </div>
        </div>

        <VideoSection
          videoSrc="/videos/beacon.mp4"
          overlay={true}
          overlayText=""
        />

        {/* Next & Previous Project Navigation */}
        <ProjectNavigation
          prevProject={prevProject}
          nextProject={nextProject}
        />
      </div>
    </>
  );
}
