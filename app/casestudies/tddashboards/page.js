"use client";

import HeroCaseStudy from "@/components/HeroCaseStudy";
import AnimatedImage from "@/components/AnimatedImage";
import ScrollablePhone from "@/components/ScrollablePhone";

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
        title="TD Dashboards"
        subtitle="Native App"
        description="UX Design"
        backgroundImage="/images/featured/tddashboards/TDDash_hero.webp"
        bgColor="bg-green-700"
      />

      <div className="mx-auto max-w-7xl px-8 sm:px-20">
        {/* Intro */}
        <div className="mx-auto flex flex-col gap-8 border-t border-t-zinc-300 py-12 font-sans md:flex-row md:py-24">
          <div className="flex-1 text-xl font-light tracking-normal text-zinc-600 md:text-2xl md:font-thin">
            TD needed to enhance its online banking application. Our goal was to
            inform customers about its features before account creation or
            online banking registration. We achieved this by developing a pre
            and post-sign-on dashboard that displayed balances, provided
            AI-driven insights, and showcased relevant information on the
            homepage.
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
          <div className="mb-8 flex-1 text-5xl font-medium tracking-tighter text-zinc-800">
            Product evolution
            {/* <div className="flex items-center justify-center">
              <ScrollablePhone
                imageSrc={"/images/global/screen.png"}
                frameSrc={"/images/global/iPhone.png"}
              />
            </div> */}
          </div>
          <div className="flex-1 text-lg font-light tracking-tight text-zinc-600 md:text-lg">
            TD needed to enhance its online banking application. Our goal was to
            inform customers about its features before account creation or
            online banking registration. We achieved this by developing a pre-
            and post-sign-on dashboard that displayed balances, provided
            AI-driven insights, and showcased relevant information on the
            homepage.
          </div>
        </div>

        <AnimatedImage
          src="/images/featured/tddashboards/tddash_evolution.webp"
          bgColor="bg-white"
        />
        <div>
          <div className="mb-24 mt-2 border-b border-b-zinc-300 pb-2 text-right font-sans text-xs tracking-tight text-black">
            Evolution of designs
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
            Documentation and spec work for developers
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
            Examples of iconography work for Cards
          </div>
        </div>
      </div>
    </>
  );
}
