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
        title="Alchemy."
        subtitle="Product Design"
        description="UX Design"
        backgroundImage="/images/featured/codeconnect/UseCase_Hero.png"
        bgColor="bg-orange-500"
      />

      <div className="px-8 sm:px-20">
        {/* Summary */}
        <div className="mx-auto flex max-w-7xl flex-col gap-8 py-12 md:flex-row md:py-24">
          <div className="flex-1 font-sans text-xl font-light tracking-tighter text-zinc-600 md:text-2xl">
            <div className="mb-4">
              <p className="font-sans text-sm font-light tracking-tighter text-zinc-400">
                Client
              </p>
              <p className="font-sans text-xl font-light tracking-tighter text-zinc-600 md:text-2xl">
                FIS Global
              </p>
            </div>
            <div className="mb-4">
              <p className="font-sans text-sm font-light tracking-tighter text-zinc-400">
                Role
              </p>
              <p className="font-sans text-xl font-light tracking-tighter text-zinc-600 md:text-2xl">
                Product & UX Design
              </p>
            </div>
            <div className="mb-4">
              <p className="font-sans text-sm font-light tracking-tighter text-zinc-400">
                Duration
              </p>
              <p className="font-sans text-xl font-light tracking-tighter text-zinc-600 md:text-2xl">
                6 months
              </p>
            </div>
          </div>
          <div className="flex-1 font-sans text-xl font-light tracking-tighter text-zinc-600 md:text-2xl">
            FIS Code Connect is an API marketplace offering 700+ open APIs for
            seamless integration of banking, payments, fraud prevention, and
            more. It enables businesses to innovate quickly, streamline
            operations, and enhance digital experiences. An independent study
            found it delivers a 193% ROI over three years, proving its financial
            and efficiency benefits.
          </div>
        </div>

        {/* Homepage Section */}
        <div className="mx-auto flex max-w-7xl flex-col border-t border-t-zinc-300 py-12 md:flex-row md:py-24">
          <div className="mb-8 flex-1 font-sans text-5xl font-medium tracking-tighter text-zinc-800">
            Homepage
          </div>
          <div className="flex-1 font-sans tracking-tight text-zinc-600 md:text-base">
            The homepage lacked clear direction, leaving users unsure of where
            to navigate next. Developers, in particular, found the content too
            marketing-heavy, making it difficult to quickly access the
            information they needed.
            <ul className="mt-8">
              <li className="border-b border-b-zinc-300 py-4">
                Improved navigation and information hierarchy
              </li>
              <li className="border-b border-b-zinc-300 py-4">
                Prominent display of platform announcements
              </li>
              <li className="border-b border-b-zinc-300 py-4">
                Clear labels for main navigation items such as Home, Catalog,
                and Help Center - removing ambiguous labels
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
        <div className="mx-auto flex max-w-7xl flex-col py-12 md:flex-row md:py-24">
          <div className="mb-8 flex-1 font-sans text-5xl font-medium tracking-tighter text-zinc-800">
            Dashboards
          </div>
          <div className="flex-1 font-sans tracking-tight text-zinc-600 md:text-base">
            The new Dashboard Page provides users with a comprehensive view of
            their usage trends and financial forecasts, enabling better
            decision-making. Users can now track key metrics, analyze past usage
            patterns, and anticipate future costs based on historical data,
            helping them stay informed and proactive in managing their
            resources.
          </div>
        </div>
        {/* Dashboard Section */}
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
        <div className="mx-auto flex max-w-7xl flex-col py-12 md:flex-row md:py-24">
          <div className="mb-8 flex-1 font-sans text-5xl font-medium tracking-tighter text-zinc-800">
            Product Catalog
          </div>
          <div className="flex-1 font-sans tracking-tight text-zinc-600 md:text-base">
            The new Product Catalog has been optimized for efficiency and ease
            of use, reducing the product list from 100+ to 30 for a more focused
            experience. Users can now toggle between their client-specific
            catalog and the public catalog, ensuring they see only the most
            relevant products. Additionally, a search function has been
            introduced, allowing users to quickly find specific products,
            improving navigation and overall usability.
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
        {/* Point 3 */}
        <div className="mx-auto flex max-w-7xl flex-col py-12 md:flex-row md:py-24">
          <div className="mb-8 flex-1 font-sans text-4xl font-medium tracking-tighter text-zinc-800 md:flex-row"></div>
          <div className="flex-1 font-sans tracking-tight text-zinc-600 md:text-base">
            <ul className="mt-8">
              <li className="border-b border-b-zinc-300 py-4">
                Toggle for My Solutions, allows useres to quickly only see a
                subset of the catalog
              </li>
              <li className="border-b border-b-zinc-300 py-4">
                Favorites serves as bookmarked solutions
              </li>
              <li className="border-b border-b-zinc-300 py-4">
                Inline search for users who are returning and know what they are
                looking for
              </li>
            </ul>
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
