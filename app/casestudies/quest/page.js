"use client";

import HeroSection from "@/components/HeroSection";
import ProjectNavigation from "@/components/ProjectNavigation";
import AnimatedImage from "@/components/AnimatedImage";
import Image from "next/image";
import { usePathname } from "next/navigation";

const caseStudies = [
  { slug: "codeconnect", title: "Code Connect" },
  { slug: "quest", title: "Quest Insurance" },
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
            Questrade, a Canadian-owned trading platform, has been expanding
            into full financial services with a clear mission: to empower
            Canadians to take control of their financial futures. As part of
            this growth, Quest Insurance was developed from the ground
            up—encompassing strategy, product positioning, and the creation of
            innovative customer journeys. The goal was to establish a
            competitive presence in the auto and home insurance market,
            delivering best-in-class experiences that rival industry leaders.
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
            I co-led research, product design, and UI/UX for the Quest Insurance
            product, ensuring a seamless experience across all customer touch
            points. Collaborating with a seasoned Canadian insurance development
            team and a lean product director team.
          </div>
        </div>
        {/* Competitive landscape */}
        <div className="mx-auto flex flex-row gap-12 border-t border-t-zinc-300 py-12 font-sans md:py-24">
          <div className="flex-1 text-lg font-light tracking-tight text-zinc-600 md:text-lg">
            <div className="mb-8 flex-1 text-2xl font-medium tracking-tighter text-zinc-800 md:text-5xl">
              Competitive landscape
            </div>
            <div className="text-lg font-light tracking-tight text-zinc-600 md:text-lg">
              To design a best-in-class online quote journey, our first step was
              to analyze the competition both within Canada and internationally.
              We examined major financial institutions such as RBC and TD, as
              well as direct-to-consumer offerings like Onlia, Belairdirect,
              Aviva, and Sonnet. Our analysis focused on identifying unique
              features, evaluating the overall user journey, and assessing the
              complexity of the quoting process. We conducted deep dives into
              the number of questions and inputs required, the number of pages
              users had to navigate, and how seamless the transition was from
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
        {/* Make the journey short and easy!!! */}
        <div className="mx-auto flex flex-col gap-x-8 py-12 font-sans md:flex-row md:py-24">
          <div className="mb-8 flex-1 text-2xl font-medium tracking-tighter text-zinc-800 md:text-5xl">
            Make the journey short and easy!!!
          </div>
          <div className="flex-1 text-lg font-light tracking-tight text-zinc-600 md:text-lg">
            How many times have you heard that before? Well, in our case, it was
            somewhat possible—at a cost. And there’s the catch you were
            expecting. Pre-filling is a common UX pattern used to shorten the
            time users spend on a task when some of their information is already
            available. In the insurance world, however, this convenience comes
            with a significant price tag. The journey supported pre-filling, but
            the business had to weigh whether the cost justified the benefit.
            User testing revealed that not a single participant objected to
            entering their license number online. More importantly, this small
            step shaved off several valuable minutes from the quote
            process—proving that, in this case, convenience truly mattered.
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
              text: "User is asked to pre-fill with license number",
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
              text: "Upon a successful database return, users vehicles and driver info is pre-filled",
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
            Bundling? We have got it.
          </div>
          <div className="flex-1 text-lg font-light tracking-tight text-zinc-600 md:text-lg">
            Bundling posed challenges—not in the user journey, but in defining
            the bundles themselves. While Canadians expected them, working with
            underwriters and insurers to create clear distinctions was
            difficult. The solution was an interstitial screen offering bundles
            with a clear comparison just before getting to the full quote. The
            team explored interactive elements and ways to highlight savings
            effectively.
            <ul className="mt-8 text-lg font-light tracking-tight text-zinc-600 md:text-lg">
              <li className="border-b border-b-zinc-300 py-4">
                A toggle and animation to show price savings
              </li>
              <li className="border-b border-b-zinc-300 py-4">
                Highlighting a clear &quot;winning&quot; choice in the middle
              </li>
              <li className="border-b border-b-zinc-300 py-4">
                Ability to look up what the coverages meant with tooltips
                content
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
              text: "Tooltips text, and expandable section to get context",
              emoji: "👍",
            }, // First image has a label
          ]}
          bgColor="bg-gray-300"
        />
        <AnimatedImage
          src={["/images/featured/quest/Quest-Quote3.png"]}
          labels={[
            {
              text: "Distraction free layout to focus user attention to coverages",
              emoji: "👍",
            }, // First image has a label
          ]}
          bgColor="bg-gray-300"
        />

        {/* Responsive layouts */}
        <div className="mx-auto flex flex-col gap-x-8 py-12 font-sans md:flex-row md:py-24">
          <div className="mb-8 flex-1 text-2xl font-medium tracking-tighter text-zinc-800 md:text-5xl">
            Responsive customer journeys for all
          </div>
          <div className="flex-1 text-lg font-light tracking-tight text-zinc-600 md:text-lg">
            A significant aspect of the work involved ensuring that the user
            journeys were fully responsive across various devices while
            maintaining consistency with the new design system, which was
            evolving alongside our project. This required close collaboration
            with both design and development teams to align our work with
            evolving guidelines, components, and interaction patterns.
            <ul className="mt-8 text-lg font-light tracking-tight text-zinc-600 md:text-lg">
              <li className="border-b border-b-zinc-300 py-4">
                We focused on creating a fluid, adaptable experience by testing
                layouts across different screen sizes and refining elements such
                as typography, spacing, and interactive components.{" "}
              </li>
              <li className="border-b border-b-zinc-300 py-4">
                Since the design system was still in development, we had to
                remain flexible, frequently iterating on components to ensure
                they met accessibility standards and usability best practices.
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
