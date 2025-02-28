"use client";

import HeroCaseStudy from "@/components/HeroCaseStudy";
import ProjectNavigation from "@/components/ProjectNavigation";
import AnimatedImage from "@/components/AnimatedImage";
import Summary from "@/components/Summary";
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
        title="Code Connect."
        subtitle="Product Design"
        description="UX Design"
        backgroundImage="/images/featured/codeconnect/UseCase_Hero.png"
        bgColor="bg-emerald-500"
      />

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
        <div className="mx-auto flex flex-col gap-8 border-t border-t-zinc-300 py-12 font-sans md:flex-row md:py-24">
          <div className="mb-8 flex-1 text-5xl font-medium tracking-tighter text-zinc-800">
            My role & team
          </div>
          <div className="flex-1 text-lg font-light tracking-tight text-zinc-600 md:text-lg">
            ...
          </div>
        </div>

        {/* Homepage */}
        <div className="mx-auto flex flex-col gap-x-8 py-12 font-sans md:flex-row md:py-24">
          <div className="mb-8 flex-1 text-5xl font-medium tracking-tighter text-zinc-800">
            Homepage: Improving Navigation & Clarity
          </div>
          <div className="flex-1 text-lg font-light tracking-tight text-zinc-600 md:text-lg">
            <div className="font-medium">Problem</div>
            The homepage lacked clear direction, leaving users uncertain about
            where to navigate next. Developers, in particular, found the content
            too marketing-heavy, making it difficult to quickly access relevant
            information.
            <div className="mt-8 font-medium">Solution</div>
            <ul className="text-lg font-light tracking-tight text-zinc-600 md:text-lg">
              <li className="border-b border-b-zinc-300 py-4">
                Improved navigation and information hierarchy.
              </li>
              <li className="border-b border-b-zinc-300 py-4">
                Prominent display of platform announcements.
              </li>
              <li className="border-b border-b-zinc-300 py-4">
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
          <div className="mb-8 flex-1 text-5xl font-medium tracking-tighter text-zinc-800">
            Dashboards: Enhancing User Insights
          </div>
          <div className="flex-1 text-lg font-light tracking-tight text-zinc-600 md:text-lg">
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
          <div className="mb-8 flex-1 text-5xl font-medium tracking-tighter text-zinc-800">
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
        {/* Impact & Results */}
        <div className="mx-auto flex flex-col gap-8 border-t border-t-zinc-300 py-12 font-sans md:flex-row md:py-24">
          <div className="mb-8 flex-1 text-5xl font-medium tracking-tighter text-zinc-800">
            Impact & Results
          </div>
          <div className="flex-1 text-lg font-light tracking-tight text-zinc-600 md:text-lg">
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
      <Summary />
    </>
  );
}
