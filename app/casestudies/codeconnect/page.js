"use client";

import HeroSection from "@/components/HeroSection";
import ProjectNavigation from "@/components/ProjectNavigation";
import AnimatedImage from "@/components/AnimatedImage";
import Image from "next/image";

import VideoSection from "@/components/VideoSection";
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
      <div className="relative">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/featured/codeconnect/UseCase_Hero.png"
            alt="Code Connect Hero"
            fill
            priority
            className="object-cover"
          />
        </div>
        <div className="relative z-10">
          <HeroSection
            backgroundColor="bg-emerald-500 bg-opacity-80"
            paddingTop="pt-24"
            paddingBottom="pb-64"
            heading="Code Connect"
            headingSize="text-4xl sm:text-7xl"
            headingWeight="font-semibold"
            headingTracking="tracking-tighter"
            paragraph="UX/Product Design"
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
            FIS Code Connect is an API marketplace offering 700+ open APIs for
            banking, payments, fraud prevention, and more. It empowers
            businesses to innovate, streamline operations, and enhance digital
            experiences. An independent study found it delivers a 193% ROI over
            three years, proving its financial and efficiency benefits.
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
                Product & UX Design
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

        <div className="mb-8 flex-1 text-2xl font-medium tracking-tighter text-zinc-800 md:text-5xl">
          My role & team
        </div>
        <div className="mx-auto flex flex-col gap-8 border-t border-t-zinc-300 py-12 font-sans md:flex-row md:py-24">
          <div className="flex-1">
            <div className="font-regular flex-1 text-base text-zinc-600 md:text-lg">
              As a UX/Product Designer on the project, my focus was on
              redesigning and creating a seamless user experience and
              introducing new key features into the Code Connect Marketplace
              that was starting to show its age based on its competitors.
              <h2 className="mt-4">Key Contributions:</h2>
              <ul className="ml-12 list-disc">
                <li>
                  Research & Competitive Analysis: Identified gaps and areas of
                  differentiation through industry research.
                </li>
                <li>
                  Navigation & Information Architecture: Improved usability by
                  restructuring key sections.
                </li>

                <li>
                  ross-Functional Collaboration: Worked closely with marketing
                  and project management to ensure a cohesive user experience
                  and brand alignment.
                </li>
                <li>
                  Data-Driven Enhancements: Introduced insights-driven
                  dashboards and search features to enhance decision-making for
                  users.
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Homepage */}
        <div className="mx-auto flex flex-col gap-x-8 py-12 font-sans md:flex-row md:py-24">
          <div className="mb-8 flex-1 text-2xl font-medium tracking-tighter text-zinc-800 md:text-5xl">
            Homepage: Improving Navigation & Clarity
          </div>
          <div className="flex-1 text-lg font-light tracking-tight text-zinc-600 md:text-lg">
            <div className="font-medium">Problem</div>
            <div className="text-base text-zinc-600 md:text-lg">
              The homepage lacked clear direction, leaving users uncertain about
              where to navigate next. Developers, in particular, found the
              content too marketing-heavy, making it difficult to quickly access
              relevant information.
            </div>
            <div className="mt-8 font-medium">Solution</div>
            <ul className="text-lg font-light tracking-tight text-zinc-600 md:text-lg">
              <li className="border-b border-b-zinc-300 py-4 text-base text-zinc-600 md:text-lg">
                Improved navigation and information hierarchy.
              </li>
              <li className="border-b border-b-zinc-300 py-4 text-base text-zinc-600 md:text-lg">
                Prominent display of platform announcements.
              </li>
              <li className="border-b border-b-zinc-300 py-4 text-base text-zinc-600 md:text-lg">
                Clear, intuitive labels for navigation (e.g., Home, Catalog,
                Help Center) instead of ambiguous terminology.
              </li>
            </ul>
          </div>
        </div>
        <AnimatedImage
          src="/images/featured/codeconnect/Homepage-Original.png"
          label="Original"
        />
        <AnimatedImage
          src="/images/featured/codeconnect/Homepage-New.png"
          label="Redesigned"
          delay={0.3}
        />
        {/* Dashboards */}
        <div className="mx-auto flex flex-col gap-8 border-t border-t-zinc-300 py-12 font-sans md:flex-row md:py-24">
          <div className="mb-8 flex-1 text-2xl font-medium tracking-tighter text-zinc-800 md:text-5xl">
            Dashboards: Enhancing User Insights
          </div>
          <div className="text-base text-zinc-600 md:text-lg">
            Users lacked a centralized way to track their API usage trends and
            financial forecasts, making it harder to make informed decisions.
            Solution: Introduced a comprehensive dashboard displaying key usage
            metrics and financial forecasts. Users can analyze past usage
            patterns and anticipate future costs based on historical data.
            Improved data visualization for proactive resource management.
          </div>
        </div>

        <AnimatedImage
          src="/images/featured/codeconnect/Dashboard-New.png"
          label="Added"
          delay={0.3}
        />
        <AnimatedImage
          src="/images/featured/codeconnect/Dashboard2-New.png"
          label="Added"
          delay={0.3}
        />
        {/* Product Catalog */}
        <div className="mx-auto flex flex-col gap-8 border-t border-t-zinc-300 py-12 font-sans md:flex-row md:py-24">
          <div className="mb-8 flex-1 text-2xl font-medium tracking-tighter text-zinc-800 md:text-5xl">
            Product Catalog: Streamlining Discovery & Usability
          </div>
          <div className="flex-1 text-lg font-light tracking-tight text-zinc-600 md:text-lg">
            Problem: The catalog was overwhelming, featuring 100+ products,
            making it difficult to find relevant solutions. Solution: Optimized
            product list from 100+ to 30, ensuring a more focused experience.
            Toggle for "My Solutions" to filter client-specific products.
            Favorites feature for quick access to bookmarked solutions. Inline
            search functionality for users who know exactly what they need.
          </div>
        </div>
        {/* Product Catalog Section */}
        <AnimatedImage
          src="/images/featured/codeconnect/ProductCatalog-Original.png"
          label="Original"
          delay={0.3}
        />
        <AnimatedImage
          src="/images/featured/codeconnect/ProductCatalog-New.png"
          label="Redesigned"
          delay={0.3}
        />
        {/* Feedback */}
        <div className="mx-auto flex flex-col gap-8 border-t border-t-zinc-300 py-12 font-sans md:flex-row md:py-24">
          <div className="mb-8 flex-1 text-2xl font-medium tracking-tighter text-zinc-800 md:text-5xl">
            User Feedback Mechanism
          </div>
          <div className="flex-1 text-lg font-light tracking-tight text-zinc-600 md:text-lg">
            Problem: In the current application, user were not able to give
            feedback on the various content types present in Code Connect. This
            was especially needed for the API documentation pages.
          </div>{" "}
          <div className="flex-1 text-lg font-light tracking-tight text-zinc-600 md:text-lg">
            Solution: Present users with a quick and easy way to provide
            feedback starting with the API Documentation pages. Since this was
            not a priority placing the actions at the bottom of the screen made
            the most sense.
          </div>
        </div>
        <VideoSection
          videoSrc="/videos/Feedback.mp4"
          overlay={false}
          overlayText=""
        />
        {/* Design Iterations */}
        <div className="mx-auto flex flex-col gap-8 border-t border-t-zinc-300 py-12 font-sans md:flex-row md:py-24">
          <div className="mb-8 flex-1 text-2xl font-medium tracking-tighter text-zinc-800 md:text-5xl">
            Design Iterations
          </div>
          <div className="flex-1 text-lg font-light tracking-tight text-zinc-600 md:text-lg">
            Problem: In the current application, user were not able to give
            feedback on the various content types present in Code Connect. This
            was especially needed for the API documentation pages.
          </div>{" "}
          <div className="flex-1 text-lg font-light tracking-tight text-zinc-600 md:text-lg">
            Solution: Present users with a quick and easy way to provide
            feedback starting with the API Documentation pages. Since this was
            not a priority placing the actions at the bottom of the screen made
            the most sense.
          </div>
        </div>
        <VideoSection
          videoSrc="/videos/Design.mp4"
          overlay={false}
          overlayText=""
        />
        {/* Impact & Results */}
        <div className="mx-auto flex flex-col gap-8 border-t border-t-zinc-300 py-12 font-sans md:flex-row md:py-24">
          <div className="mb-8 flex-1 text-2xl font-medium tracking-tighter text-zinc-800 md:text-5xl">
            Impact & Results
          </div>
          <div className="flex-1">
            Improved homepage clarity, ensuring users navigate more efficiently.
            Enhanced dashboard insights, allowing businesses to make data-driven
            decisions. Streamlined product catalog, reducing friction in
            discovery and selection. Created a more developer-friendly
            experience, balancing marketing content with usability.
          </div>
        </div>
        <AnimatedImage
          src="/images/featured/codeconnect/ProductCatalog2-New.png"
          label="Final"
          delay={0.3}
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
