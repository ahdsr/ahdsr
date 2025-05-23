"use client";

import HeroSection from "@/components/HeroSection";
import ProjectNavigation from "@/components/ProjectNavigation";
import VideoSection from "@/components/VideoSection";
import AnimatedImage from "@/components/AnimatedImage";
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
            src="/images/featured/unify/Components.png"
            alt="Beacon Mobile"
            fill
            priority
            className="object-cover"
          />
        </div>
        <div className="relative z-10">
          <HeroSection
            backgroundColor="bg-blue-700 bg-opacity-80"
            paddingTop="pt-24"
            paddingBottom="pb-64"
            heading="Unify Design System"
            headingSize="text-4xl sm:text-7xl"
            headingWeight="font-semibold"
            headingTracking="tracking-tighter"
            paragraph="Coming soon"
            paragraphSize="text-base"
            paragraphWeight="font-light"
            paragraphColor="text-gray-300"
          />
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-8 sm:px-20"></div>
    </>
  );
}
