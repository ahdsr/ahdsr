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

export default function TDBillManager() {
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
            src="/images/featured/tdbillmanager/tdpaybills_hero.webp"
            alt="TD Bill Manager Hero"
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
            heading="TD Bill Manager"
            headingSize="text-4xl sm:text-7xl"
            headingWeight="font-semibold"
            headingTracking="tracking-tighter"
            paragraph="UX/Product Design"
            paragraphSize="text-base"
            paragraphWeight="font-light"
            paragraphColor="text-white"
          />
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-8 sm:px-20">
        {/* Intro */}
        <div className="mx-auto flex flex-col gap-8 border-t border-t-zinc-300 py-12 font-sans md:flex-row md:py-24">
          <div className="flex-1 text-xl font-light tracking-normal text-zinc-600 md:text-2xl md:font-thin">
            TD Bill Pay lets U.S. banking customers pay bills from their TD Bank
            account, set up electronic billing, and manage payments through ACH
            transfers or paper checks. This project improved biller enrollment
            by helping users find billers automatically through a vendor-powered
            search using name and mailing address, reducing manual entry during
            setup.
          </div>
          <div className="mb-8 text-5xl font-medium tracking-tighter text-zinc-800">
            <div className="mb-4">
              <p className="font-sans text-lg font-light tracking-tighter text-zinc-600 md:text-xl">
                Client
              </p>
              <p className="font-sans text-lg font-medium tracking-tighter text-zinc-600 md:text-xl">
                TD Canada Trust US Banking
              </p>
            </div>
            <div className="mb-4">
              <p className="font-sans text-lg font-light tracking-tighter text-zinc-600 md:text-xl">
                Role
              </p>
              <p className="font-sans text-lg font-medium tracking-tighter text-zinc-600 md:text-xl">
                UI Designer
              </p>
            </div>
            <div className="mb-4">
              <p className="font-sans text-lg font-light tracking-tighter text-zinc-600 md:text-xl">
                Duration
              </p>
              <p className="font-sans text-lg font-medium tracking-tighter text-zinc-600 md:text-xl">
                4 months
              </p>
            </div>
          </div>
        </div>
        {/* My Role & Team */}
        <div className="mx-auto flex flex-col gap-8 border-t border-t-zinc-300 py-12 font-sans md:flex-row md:py-24">
          <div className="mb-8 flex-1 text-2xl font-medium tracking-tighter text-zinc-800 md:text-5xl">
            My role
          </div>
          <div className="flex-1 text-lg font-light tracking-tight text-zinc-600 md:text-lg">
            My primary role was to design the new UI elements needed for the
            experience. The work required a visual language that felt fresh
            while still fitting within the existing app.
          </div>
        </div>

        <AnimatedImage
          src={[
            "/images/featured/tdbillmanager/tdpaybills_mobile_onboarding.webp",
          ]}
          bgColor="bg-white"
        />
        <div>
          <div className="mb-24 mt-2 border-b border-b-zinc-300 pb-2 text-right font-sans text-xs tracking-tight text-black">
            Onboarding Flow
          </div>
        </div>
        {/* Onboarding */}
        <div className="mx-auto flex flex-col gap-x-8 py-12 font-sans md:flex-row md:py-24">
          <div className="mb-8 flex-1 text-2xl font-medium tracking-tighter text-zinc-800 md:text-5xl">
            Onboarding into the new experience
          </div>
          <div className="flex-1 text-lg font-light tracking-tight text-zinc-600 md:text-lg">
            TD U.S. Banking app users could already pay bills, so the team
            needed a simple way to introduce and enroll users in the improved
            experience. The onboarding explained the benefits, then let users
            start the automatic bill search with a single &quot;Let&apos;s Go&quot; action.
          </div>
        </div>
        <AnimatedImage
          src={[
            "/images/featured/tdbillmanager/iPhone 7 - Onboarding 1.png",
            "/images/featured/tdbillmanager/iPhone 7 - Onboarding 2.png",
            "/images/featured/tdbillmanager/iPhone 7 - Onboarding 3.png",
            "/images/featured/tdbillmanager/iPhone 7 - Onboarding 4.png",
            "/images/featured/tdbillmanager/iPhone 7 - Finding Your Bills 1.png",
            "/images/featured/tdbillmanager/iPhone 7 - Finding Your Bills 2.png",
          ]}
          bgColor="bg-white"
        />
        <div>
          <div className="mt-2 border-b border-b-zinc-300 pb-2 text-right font-sans text-xs tracking-tight text-black">
            Onboarding Experience - A
          </div>
        </div>
        {/* Onboarding testing */}
        <div className="mx-auto flex flex-col gap-x-8 py-12 font-sans md:flex-row md:py-24">
          <div className="mb-8 flex-1 text-2xl font-medium tracking-tighter text-zinc-800 md:text-5xl">
            Testing the onboarding experience
          </div>
          <div className="flex-1 text-lg font-light tracking-tight text-zinc-600 md:text-lg">
            We tested two onboarding flows. In the first, users enrolled and
            accepted terms before learning more about the feature. In the second,
            terms and conditions appeared earlier, followed by feature
            education.
          </div>
        </div>
        <AnimatedImage
          src={[
            "/images/featured/tdbillmanager/Onboard2-1.png",
            "/images/featured/tdbillmanager/Onboard2-2.png",
            "/images/featured/tdbillmanager/Onboard2-3.png",
            "/images/featured/tdbillmanager/Onboard2-4.png",
            "/images/featured/tdbillmanager/Onboard2-5.png",
            "/images/featured/tdbillmanager/Onboard2-6.png",
          ]}
          bgColor="bg-white"
        />
        <div>
          <div className="mt-2 border-b border-b-zinc-300 pb-2 text-right font-sans text-xs tracking-tight text-black">
            Onboarding Experience - B
          </div>
        </div>
        {/* Biller search */}
        <div className="mx-auto flex flex-col gap-x-8 py-12 font-sans md:flex-row md:py-24">
          <div className="mb-8 flex-1 text-2xl font-medium tracking-tighter text-zinc-800 md:text-5xl">
            Adding new billers
          </div>
          <div className="flex-1 text-lg font-light tracking-tight text-zinc-600 md:text-lg">
            Users could manually add billers that were not found automatically
            by searching for the biller name. Merchant logos helped users
            identify the correct biller more easily as part of the vendor
            solution.
          </div>
        </div>
        <AnimatedImage
          src={[
            "/images/featured/tdbillmanager/A - Menu opened - Bill Manager Copy@2x.png",
            "/images/featured/tdbillmanager/A - Menu opened - Bill Manager@2x.png",
            "/images/featured/tdbillmanager/A - Menu opened - Bill Manager __@2x.png",
          ]}
          bgColor="bg-white rounded-xl"
        />
        <div>
          <div className="mt-2 border-b border-b-zinc-300 pb-2 text-right font-sans text-xs tracking-tight text-black">
            Adding billers
          </div>
        </div>
        {/* Responsive layouts */}
        <div className="mx-auto flex flex-col gap-x-8 py-12 font-sans md:flex-row md:py-24">
          <div className="mb-8 flex-1 text-2xl font-medium tracking-tighter text-zinc-800 md:text-5xl">
            Responsive experience
          </div>
          <div className="flex-1 text-lg font-light tracking-tight text-zinc-600 md:text-lg">
            Tablet layouts for the bill list and pay bill flow.
          </div>
        </div>
        <AnimatedImage
          src={[
            "/images/featured/tdbillmanager/tdpaybills_tablet1.webp",
            "/images/featured/tdbillmanager/tdpaybills_tablet2.webp",
          ]}
          bgColor="bg-white mb-12"
        />
      </div>
    </>
  );
}
