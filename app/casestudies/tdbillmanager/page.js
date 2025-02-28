"use client";

import HeroCaseStudy from "@/components/HeroCaseStudy";
import ProjectNavigation from "@/components/ProjectNavigation";
import AnimatedImage from "@/components/AnimatedImage";
import { usePathname } from "next/navigation";

const caseStudies = [
  { slug: "codeconnect", title: "Code Connect" },
  { slug: "quest", title: "Quest Insurance" },
  { slug: "beon", title: "Beon" },
  { slug: "projectalchemy", title: "Project Alchemy" },
];

export default function CodeConnect() {
  const pathname = usePathname();
  const currentSlug = pathname.split("/").pop();
  const currentIndex = caseStudies.findIndex(
    (caseStudy) => caseStudy.slug === currentSlug,
  );

  const prevProject = caseStudies[currentIndex - 1] || null;
  const nextProject = caseStudies[currentIndex + 1] || null;

  return (
    <>
      <HeroCaseStudy
        title="TD Bill Mananger"
        subtitle="Native App"
        description="UX Design"
        backgroundImage="/images/featured/tdbillmanager/tdpaybills_hero.webp"
        bgColor="bg-green-700"
      />

      <div className="mx-auto max-w-7xl px-8 sm:px-20">
        {/* Intro */}
        <div className="mx-auto flex flex-col gap-8 border-t border-t-zinc-300 py-12 font-sans md:flex-row md:py-24">
          <div className="flex-1 text-xl font-light tracking-normal text-zinc-600 md:text-2xl md:font-thin">
            ...
          </div>
          <div className="mb-8 text-5xl font-medium tracking-tighter text-zinc-800">
            <div className="mb-4">
              <p className="font-sans text-lg font-light tracking-tighter text-zinc-600 md:text-xl">
                Client
              </p>
              <p className="font-sans text-lg font-medium tracking-tighter text-zinc-600 md:text-xl">
                TD Canada Trust
              </p>
            </div>
            <div className="mb-4">
              <p className="font-sans text-lg font-light tracking-tighter text-zinc-600 md:text-xl">
                Role
              </p>
              <p className="font-sans text-lg font-medium tracking-tighter text-zinc-600 md:text-xl">
                UX & UI Designer
              </p>
            </div>
            <div className="mb-4">
              <p className="font-sans text-lg font-light tracking-tighter text-zinc-600 md:text-xl">
                Duration
              </p>
              <p className="font-sans text-lg font-medium tracking-tighter text-zinc-600 md:text-xl">
                4 months
              </p>
            </div>
          </div>
        </div>
        {/* My Role & Team */}
        <div className="mx-auto flex flex-col gap-8 border-t border-t-zinc-300 py-12 font-sans md:flex-row md:py-24">
          <div className="mb-8 flex-1 text-5xl font-medium tracking-tighter text-zinc-800">
            ...
          </div>
          <div className="flex-1 text-lg font-light tracking-tight text-zinc-600 md:text-lg">
            ...
          </div>
        </div>

        <AnimatedImage
          src={[
            "/images/featured/tdbillmanager/tdpaybills_mobile_onboarding.webp",
          ]}
          bgColor="bg-white"
        />
        <div>
          <div className="mb-24 mt-2 border-b border-b-zinc-300 pb-2 text-right font-sans text-xs tracking-tight text-black">
            Onboarding Flow
          </div>
        </div>
        <AnimatedImage
          src={[
            "/images/featured/tdbillmanager/tdpaybills_tablet1.webp",
            "/images/featured/tdbillmanager/tdpaybills_tablet2.webp",
          ]}
          bgColor="bg-white"
        />

        <div>
          <div className="mt-2 border-b border-b-zinc-300 pb-2 text-right font-sans text-xs tracking-tight text-black">
            Biller screens showing a timeline of bills
          </div>
        </div>
      </div>
    </>
  );
}
