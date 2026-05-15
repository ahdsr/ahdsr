"use client";

import HeroSection from "@/components/HeroSection";
import ProjectNavigation from "@/components/ProjectNavigation";
import AnimatedImage from "@/components/AnimatedImage";
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

export default function Quest() {
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
            src="/images/featured/quest/Quest_Hero.png"
            alt="Quest Insurance Hero"
            fill
            priority
            className="object-cover"
          />
        </div>
        <div className="relative z-10">
          <HeroSection
            backgroundColor="bg-green-700 bg-opacity-10"
            paddingTop="pt-24"
            paddingBottom="pb-64"
            heading="Quest Insurance"
            headingColor="text-black"
            headingSize="text-4xl sm:text-7xl"
            headingWeight="font-semibold"
            headingTracking="tracking-tighter"
            paragraph="UX/Product Design"
            paragraphSize="text-base"
            paragraphWeight="font-light"
            paragraphColor="text-black"
          />
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-8 sm:px-20">
        {/* Intro */}
        <div className="mx-auto flex flex-col gap-8 border-t border-t-zinc-300 py-12 font-sans md:flex-row md:py-24">
          <div className="flex-1 text-xl font-light tracking-normal text-zinc-600 md:text-2xl md:font-thin">
            Questrade, a Canadian-owned trading platform, was expanding into
            broader financial services with a mission to help Canadians take
            control of their financial futures. Quest Insurance was developed
            from the ground up, including strategy, product positioning, and new
            customer journeys for auto and home insurance.
          </div>
          <div className="mb-8 text-5xl font-medium tracking-tighter text-zinc-800">
            <div className="mb-4">
              <p className="font-sans text-lg font-light tracking-tighter text-zinc-600 md:text-xl">
                Client
              </p>
              <p className="font-sans text-lg font-medium tracking-tighter text-zinc-600 md:text-xl">
                Questrade
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
                1.5 years
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
            I co-led research, product design, and UI/UX for Quest Insurance,
            working with an experienced Canadian insurance development team and
            a lean product leadership group to shape the end-to-end customer
            experience.
          </div>
        </div>
        {/* Competitive landscape */}
        <div className="mx-auto flex flex-row gap-12 border-t border-t-zinc-300 py-12 font-sans md:py-24">
          <div className="flex-1 text-lg font-light tracking-tight text-zinc-600 md:text-lg">
            <div className="mb-8 flex-1 text-2xl font-medium tracking-tighter text-zinc-800 md:text-5xl">
              Competitive landscape
            </div>
            <div className="text-lg font-light tracking-tight text-zinc-600 md:text-lg">
              To design a stronger online quote journey, our first step was to
              analyze the competition both within Canada and internationally.
              We examined major financial institutions such as RBC and TD, as
              well as direct-to-consumer offerings like Onlia, Belairdirect,
              Aviva, and Sonnet. Our analysis focused on identifying unique
              features, evaluating the overall user journey, and assessing the
              complexity of the quoting process. We conducted deep dives into
              the number of questions and inputs required, the number of pages
              users had to navigate, and how clear the transition was from
              receiving a quote to purchasing (or “binding”) a policy online.
              Additionally, we examined post-quote interactions, including
              emails and other touch points, to understand how competitors
              guided users through the journey.
            </div>
          </div>
        </div>
        {/* <VideoSection
          videoSrc="/videos/quest_competitive.mp4"
          overlay={true}
          overlayText=""
        /> */}

        <AnimatedImage
          src={[
            "/images/featured/quest/CompetitiveLandscape-01.png",
            "/images/featured/quest/CompetitiveLandscape-02.png",
            "/images/featured/quest/CompetitiveLandscape-03.png",
            "/images/featured/quest/CompetitiveLandscape-04.png",
            "/images/featured/quest/CompetitiveLandscape-05.png",
            "/images/featured/quest/CompetitiveLandscape-06.png",
          ]}
          bgColor="bg-gray-300"
        />
        <div>
          <div className="mt-2 border-b border-b-zinc-300 pb-2 text-right font-sans text-xs tracking-tight text-black">
            Examples of research findings
          </div>
        </div>
        {/* Quote journey */}
        <div className="mx-auto flex flex-col gap-x-8 py-12 font-sans md:flex-row md:py-24">
          <div className="mb-8 flex-1 text-2xl font-medium tracking-tighter text-zinc-800 md:text-5xl">
            Making the quote journey faster
          </div>
          <div className="flex-1 text-lg font-light tracking-tight text-zinc-600 md:text-lg">
            We explored pre-filling as a way to reduce the time required to get
            a quote. In insurance, that convenience can carry a significant
            business cost, so the team had to weigh effort, cost, and customer
            value. User testing showed that participants were comfortable
            entering their license number online, and the step helped reduce the
            quote process by several minutes.
          </div>
        </div>
        <AnimatedImage
          src="/images/featured/quest/CompetitiveProcess.png"
          labels={[
            {
              text: "Evaluating the user journey pain points",
              emoji: "🔥",
            },
          ]}
          bgColor="bg-white"
          emoji="💡"
        />
        <AnimatedImage
          src="/images/featured/quest/Quest-Prefill1.png"
          labels={[
            {
              text: "Users can pre-fill with a license number",
              emoji: "🔥",
            },
          ]}
          bgColor="bg-green-700"
          emoji="💡"
        />
        <AnimatedImage
          src="/images/featured/quest/Quest-Prefill2.png"
          labels={[
            {
              text: "Vehicle and driver information is pre-filled after a successful database match",
              emoji: "🔥",
            },
          ]}
          bgColor="bg-green-700"
          emoji="💡"
          delay={0.3}
        />
        {/* Bundling */}
        <div className="mx-auto flex flex-col gap-8 gap-x-8 py-12 font-sans md:flex-row md:py-24">
          <div className="mb-8 flex-1 text-2xl font-medium tracking-tighter text-zinc-800 md:text-5xl">
            Bundling coverage clearly
          </div>
          <div className="flex-1 text-lg font-light tracking-tight text-zinc-600 md:text-lg">
            Bundling was less of an interaction challenge and more of a product
            definition challenge. Customers expected bundled options, but the
            team needed clear distinctions between coverage choices. We designed
            an interstitial screen that presented bundle comparisons before the
            full quote, with interaction patterns that made savings easier to
            understand.
            <ul className="mt-8 text-lg font-light tracking-tight text-zinc-600 md:text-lg">
              <li className="border-b border-b-zinc-300 py-4">
                A toggle and animation to show price savings.
              </li>
              <li className="border-b border-b-zinc-300 py-4">
                A clear recommended option in the center.
              </li>
              <li className="border-b border-b-zinc-300 py-4">
                Tooltip content to explain coverage terms.
              </li>
            </ul>
          </div>
        </div>
        {/* Quote and Bundle */}
        <AnimatedImage
          src="/images/featured/quest/Quest-Bundle.png"
          label="Added"
          delay={0.3}
        />
        <AnimatedImage
          src={["/images/featured/quest/Quest-Quote2.png"]}
          labels={[
            {
              text: "Tooltips and expandable sections provide context",
              emoji: "👍",
            }, // First image has a label
          ]}
          bgColor="bg-gray-300"
        />
        <AnimatedImage
          src={["/images/featured/quest/Quest-Quote3.png"]}
          labels={[
            {
              text: "A focused layout keeps attention on coverage choices",
              emoji: "👍",
            }, // First image has a label
          ]}
          bgColor="bg-gray-300"
        />

        {/* Responsive layouts */}
        <div className="mx-auto flex flex-col gap-x-8 py-12 font-sans md:flex-row md:py-24">
          <div className="mb-8 flex-1 text-2xl font-medium tracking-tighter text-zinc-800 md:text-5xl">
            Responsive customer journeys
          </div>
          <div className="flex-1 text-lg font-light tracking-tight text-zinc-600 md:text-lg">
            A significant part of the work was making each journey responsive
            across devices while staying aligned with a new design system that
            was evolving alongside the project. This required close
            collaboration with design and development teams as guidelines,
            components, and interaction patterns changed.
            <ul className="mt-8 text-lg font-light tracking-tight text-zinc-600 md:text-lg">
              <li className="border-b border-b-zinc-300 py-4">
                Tested layouts across screen sizes and refined typography,
                spacing, and interactive components.
              </li>
              <li className="border-b border-b-zinc-300 py-4">
                Iterated on components as the design system matured, with a
                focus on accessibility and usability.
              </li>
            </ul>
          </div>
        </div>
        <AnimatedImage
          src={["/images/featured/quest/Quest-Responsive1.png"]}
          labels={[]}
          bgColor="bg-white"
        />
        <AnimatedImage
          src={["/images/featured/quest/Quest-Responsive2.png"]}
          labels={[]}
          bgColor="bg-white"
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
