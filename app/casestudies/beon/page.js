"use client";

import HeroSection from "@/components/HeroSection";
import ProjectNavigation from "@/components/ProjectNavigation";
import AnimatedImage from "@/components/AnimatedImage";
import ImageCarousel from "@/components/ImageCarousel";
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

const images = [
  "/images/featured/beon/1.png",
  "/images/featured/beon/2.png",
  "/images/featured/beon/3.png",
];

const captions = [
  "Initial screen to engage with insights",
  "Insights related to an event",
  "Spider chart showing strengths and weaknesses",
];

export default function Beon() {
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
            src="/images/featured/beon/BEON_Hero.png"
            alt="BEON Performance Hero"
            fill
            priority
            className="object-cover"
          />
        </div>
        <div className="relative z-10">
          <HeroSection
            backgroundColor="bg-green-700 bg-opacity-10"
            paddingTop="pt-24"
            paddingBottom="pb-96"
            heading="BEON Performance"
            headingSize="text-4xl sm:text-7xl"
            headingWeight="font-semibold"
            headingTracking="tracking-tighter"
            h
            paragraph="Product Design & Strategy"
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
            In collaboration with BEON Performance, I conceptualized a digital
            experience for tracking, planning, and practicing the ACT model, a
            structured approach to mental performance. The concept helped users
            manage ACT models, track important events, and review insights that
            support focus, confidence, and resilience.
          </div>
          <div className="mb-8 text-5xl font-medium tracking-tighter text-zinc-800">
            <div className="mb-4">
              <p className="font-sans text-lg font-light tracking-tighter text-zinc-600 md:text-xl">
                Client
              </p>
              <p className="font-sans text-lg font-medium tracking-tighter text-zinc-600 md:text-xl">
                beonperformance.com
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
                3 months
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
            I conceptualized the MVP for a digital experience that would help
            users apply the ACT model in everyday life. My process included
            brainstorming, journey mapping, and early product definition to help
            BEON Performance evaluate whether a scalable digital product could
            complement its in-person seminars and one-on-one coaching.
          </div>
        </div>
        {/* Competitive landscape */}
        <div className="mx-auto flex flex-row gap-12 border-t border-t-zinc-300 py-12 font-sans md:py-24">
          <div className="flex-1 text-lg font-light tracking-tight text-zinc-600 md:text-lg">
            <div className="mb-4 text-5xl font-medium tracking-tighter text-zinc-800">
              Core Pillars of the Experience
            </div>
            <div className="text-lg font-light tracking-tight text-zinc-600 md:text-lg">
              The experience centered on three pillars: ACT Models, Events, and
              Insights.
              <ul className="mt-8 text-lg font-light tracking-tight text-zinc-600 md:text-lg">
                <li className="border-b border-b-zinc-300 py-4">
                  ACT Models gave users a structured way to manage key terms,
                  concepts, and ideas for mental training.
                </li>
                <li className="border-b border-b-zinc-300 py-4">
                  Events captured important moments where users could apply ACT
                  Models and reflect on performance.
                </li>
                <li className="border-b border-b-zinc-300 py-4">
                  Insights helped users review progress and refine their
                  approach over time.
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* ACT model */}
        <div className="mx-auto flex flex-col gap-x-8 py-12 font-sans md:flex-row md:py-24">
          <div className="mb-8 flex-1 text-2xl font-medium tracking-tighter text-zinc-800 md:text-5xl">
            The ACT model
          </div>
          <div className="flex-1 text-lg font-light tracking-tight text-zinc-600 md:text-lg">
            The ACT Model was intended to guide people through mental
            performance training, but the challenge was translating an abstract
            framework into a tangible digital experience. I designed a guided
            creation flow that helped users build, refine, and apply personal
            mental frameworks while keeping the core philosophy intact.
          </div>
        </div>
        <AnimatedImage
          src={[
            "/images/featured/beon/ACT-Create1.png",
            "/images/featured/beon/ACT-Create2.png",
          ]}
          bgColor="bg-white"
        />
        <div>
          <div className="mt-2 border-b border-b-zinc-300 pb-2 text-right font-sans text-xs tracking-tight text-black">
            The user flow for creating a model
          </div>
        </div>
        <AnimatedImage
          src="/images/featured/beon/ACT-Create3.png"
          labels={[]}
          bgColor="bg-white"
        />
        {/* Tracking and Reflecting on Performance */}
        <div className="mx-auto flex flex-col gap-8 gap-x-8 py-12 font-sans md:flex-row md:py-24">
          <div className="mb-8 flex-1 text-2xl font-medium tracking-tighter text-zinc-800 md:text-5xl">
            Tracking and reflecting on performance
          </div>
          <div className="flex-1 text-lg font-light tracking-tight text-zinc-600 md:text-lg">
            Events functioned as a hybrid calendar and performance tracker.
            Users could schedule meetings, competitions, practices, and other
            key moments, then reflect on their performance afterward to uncover
            insights and trends.
          </div>
          <div className="flex-1 text-lg font-light tracking-tight text-zinc-600 md:text-lg">
            I explored several ways to present the feature, from a traditional
            calendar to a streamlined list. The challenge was balancing familiar
            patterns with enough structure to encourage meaningful reflection.
          </div>
        </div>
        {/* Quote and Bundle */}
        <AnimatedImage
          src="/images/featured/beon/EventCreation.png"
          label="Added"
          delay={0.3}
          bgColor="bg-white"
        />
        <AnimatedImage
          src={["/images/featured/beon/EventScoring.png"]}
          labels={[]}
          bgColor="bg-white"
        />
        {/* Insight */}
        <div className="mx-auto flex flex-col gap-8 gap-x-8 py-12 font-sans md:flex-row md:py-24">
          <div className="mb-8 flex-1 text-2xl font-medium tracking-tighter text-zinc-800 md:text-5xl">
            Insights
          </div>
          <div className="flex-1 text-lg font-light tracking-tight text-zinc-600 md:text-lg">
            Over time, users would receive personalized insights based on their
            progress. I explored progress bars, radial charts, and heatmaps to
            make milestones and engagement patterns easier to understand. A
            small user group helped refine the direction for clarity and
            motivation.
          </div>
        </div>
        <div className="my-4 flex items-center justify-center border border-zinc-300 bg-zinc-50 py-8">
          {/* Define Gallery Size Here */}

          <ImageCarousel
            images={images}
            captions={captions}
            className="h-[800px] w-[800px]"
            captionPosition="bottom-2 " // Customize caption position
          />
        </div>
        {/* Insight */}
        <div className="mx-auto flex flex-col gap-8 gap-x-8 py-12 font-sans md:flex-row md:py-24">
          <div className="mb-8 flex-1 text-2xl font-medium tracking-tighter text-zinc-800 md:text-5xl">
            Final thoughts
          </div>
          <div className="flex-1 text-lg font-light tracking-tight text-zinc-600 md:text-lg">
            This project helped define and pitch a product concept from the
            ground up. At the time, BEON Performance was still refining its
            business strategy. The team ultimately chose to focus on in-person
            seminars and one-on-one coaching, so the digital product did not
            move beyond ideation.
          </div>
        </div>
        {/* Next & Previous Project Navigation */}
        <ProjectNavigation
          prevProject={prevProject}
          nextProject={nextProject}
        />
      </div>
    </>
  );
}
