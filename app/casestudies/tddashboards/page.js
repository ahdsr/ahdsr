"use client";

import HeroSection from "@/components/HeroSection";
import AnimatedImage from "@/components/AnimatedImage";
import ScrollablePhone from "@/components/ScrollablePhone";
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

export default function TDDashboards() {
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
            src="/images/featured/tddashboards/TDDash_hero.webp"
            alt="TD Dashboards Hero"
            fill
            priority
            className="object-cover"
          />
        </div>
        <div className="relative z-10">
          <HeroSection
            backgroundColor="bg-green-700 bg-opacity-0"
            paddingTop="pt-24"
            paddingBottom="pb-64"
            heading="TD Dashboards"
            headingSize="text-4xl sm:text-7xl"
            headingWeight="font-semibold"
            headingTracking="tracking-tighter"
            paragraph="UI/UX Design"
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
            TD needed to improve how customers discovered and used online
            banking features before and after sign-on. We designed dashboard
            concepts that displayed balances, surfaced AI-driven insights, and
            highlighted relevant information on the homepage.
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
                1 year
              </p>
            </div>
          </div>
        </div>
        {/* My Role & Team */}
        <div className="mx-auto flex flex-col gap-8 border-t border-t-zinc-300 py-12 font-sans md:flex-row md:py-24">
          <div className="mb-8 flex-1 text-2xl font-medium tracking-tighter text-zinc-800 md:text-5xl">
            Product evolution
            {/* <div className="flex items-center justify-center">
              <ScrollablePhone
                imageSrc={"/images/global/screen.png"}
                frameSrc={"/images/global/iPhone.png"}
              />
            </div> */}
          </div>
          <div className="flex-1 text-lg font-light tracking-tight text-zinc-600 md:text-lg">
            The work explored how dashboards could better support customers at
            different stages of the online banking experience. Pre- and
            post-sign-on concepts helped clarify account information, surface
            useful insights, and give the homepage a stronger product role.
          </div>
        </div>

        <AnimatedImage
          src="/images/featured/tddashboards/tddash_evolution.webp"
          bgColor="bg-white"
        />
        <div>
          <div className="mb-24 mt-2 border-b border-b-zinc-300 pb-2 text-right font-sans text-xs tracking-tight text-black">
            Design evolution
          </div>
        </div>
        <AnimatedImage
          src={[
            "/images/featured/tddashboards/tddash_links.webp",
            "/images/featured/tddashboards/tddash_overflow.webp",
          ]}
          bgColor="bg-gray-300"
        />
        <AnimatedImage
          src={[
            "/images/featured/tddashboards/tddash_performance.webp",
            "/images/featured/tddashboards/tddash_watchlist.webp",
          ]}
          bgColor="bg-gray-300"
        />
        <div>
          <div className="mb-24 mt-2 border-b border-b-zinc-300 pb-2 text-right font-sans text-xs tracking-tight text-black">
            Developer documentation and specs
          </div>
        </div>
        <AnimatedImage
          src={[
            "/images/featured/tddashboards/Artboard1.webp",
            "/images/featured/tddashboards/Artboard2.webp",
          ]}
          bgColor="bg-gray-300"
        />
        <div>
          <div className="mt-2 border-b border-b-zinc-300 pb-2 text-right font-sans text-xs tracking-tight text-black">
            Iconography examples for cards
          </div>
        </div>
      </div>
    </>
  );
}
