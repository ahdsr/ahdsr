"use client";

import HeroSection from "@/components/HeroSection";
import ProjectNavigation from "@/components/ProjectNavigation";
import AnimatedImage from "@/components/AnimatedImage";
import Image from "next/image";

import VideoSection from "@/components/VideoSection";
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
            FIS Code Connect is an API marketplace with 700+ open APIs across
            banking, payments, fraud prevention, and related financial services.
            The platform helps businesses discover solutions, streamline
            integration, and improve digital experiences. An independent study
            reported a 193% ROI over three years.
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
                6 months, ongoing
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
              As a UX/Product Designer, I focused on modernizing the Code
              Connect marketplace, improving the user experience, and
              introducing features that helped the product better compete with
              other API discovery platforms.
              <h2 className="mt-4">Key Contributions:</h2>
              <ul className="ml-12 list-disc">
                <li>
                  Research & competitive analysis: identified gaps and areas of
                  differentiation through industry research.
                </li>
                <li>
                  Navigation & information architecture: improved usability by
                  restructuring key sections.
                </li>

                <li>
                  Cross-functional collaboration: worked closely with marketing
                  and project management to ensure a cohesive user experience
                  and brand alignment.
                </li>
                <li>
                  Data-driven enhancements: introduced insights-driven
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
            Homepage: improving navigation and clarity
          </div>
          <div className="flex-1 text-lg font-light tracking-tight text-zinc-600 md:text-lg">
            <div className="font-medium">Problem</div>
            <div className="text-base text-zinc-600 md:text-lg">
              The homepage lacked clear direction, leaving users uncertain about
              where to go next. Developers found the content too
              marketing-heavy, which made relevant technical information harder
              to access.
            </div>
            <div className="mt-8 font-medium">Solution</div>
            <ul className="text-lg font-light tracking-tight text-zinc-600 md:text-lg">
              <li className="border-b border-b-zinc-300 py-4 text-base text-zinc-600 md:text-lg">
                Improved navigation and information hierarchy.
              </li>
              <li className="border-b border-b-zinc-300 py-4 text-base text-zinc-600 md:text-lg">
                Added a prominent area for platform announcements.
              </li>
              <li className="border-b border-b-zinc-300 py-4 text-base text-zinc-600 md:text-lg">
                Replaced ambiguous terminology with clear labels such as Home,
                Catalog, and Help Center.
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
            Dashboards: improving user insight
          </div>
          <div className="text-base text-zinc-600 md:text-lg">
            Users lacked a centralized way to track API usage trends and
            financial forecasts. I introduced dashboard views that surfaced key
            usage metrics, historical patterns, and projected costs so users
            could make more informed resource decisions.
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
            Product catalog: streamlining discovery
          </div>
          <div className="flex-1 text-lg font-light tracking-tight text-zinc-600 md:text-lg">
            The catalog contained 100+ products, which made it difficult for
            users to find the right solution. We reduced the list to 30 focused
            products, added a &quot;My Solutions&quot; filter for client-specific
            products, introduced favorites for quick access, and added inline
            search for users who already knew what they needed.
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
            User feedback
          </div>
          <div className="flex-1 text-lg font-light tracking-tight text-zinc-600 md:text-lg">
            Users had no clear way to give feedback on Code Connect content,
            especially API documentation.
          </div>{" "}
          <div className="flex-1 text-lg font-light tracking-tight text-zinc-600 md:text-lg">
            We added a lightweight feedback pattern for API documentation pages.
            Because the action was secondary to the main task, the feedback
            controls were placed at the bottom of the page.
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
            Design iterations
          </div>
          <div className="flex-1 text-lg font-light tracking-tight text-zinc-600 md:text-lg">
            The redesign required multiple iterations across navigation,
            product discovery, dashboard views, and documentation feedback.
          </div>{" "}
          <div className="flex-1 text-lg font-light tracking-tight text-zinc-600 md:text-lg">
            I explored alternative layouts and interaction patterns, then
            refined the work based on product priorities, stakeholder input, and
            usability needs.
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
            Impact and results
          </div>
          <div className="flex-1">
            The work improved homepage clarity, added more useful dashboard
            insights, reduced friction in product discovery, and created a more
            developer-friendly balance between marketing content and usability.
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
