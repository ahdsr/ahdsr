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
        title="TD Bill Mananger"
        subtitle="Native App"
        description="UI Design"
        backgroundImage="/images/featured/tdbillmanager/tdpaybills_hero.webp"
        bgColor="bg-green-700"
      />

      <div className="mx-auto max-w-7xl px-8 sm:px-20">
        {/* Intro */}
        <div className="mx-auto flex flex-col gap-8 border-t border-t-zinc-300 py-12 font-sans md:flex-row md:py-24">
          <div className="flex-1 text-xl font-light tracking-normal text-zinc-600 md:text-2xl md:font-thin">
            TD Bill Pay is a digital payment solution that allows users to pay
            bills conveniently and securely from their TD Bank account. Designed
            for ease of use, it enables customers to pay virtually anyone in the
            U.S., set up electronic billing, and manage payments efficiently.
            The platform provides both ACH electronic transfers and paper check
            options, catering to a wide range of billers. As part of ongoing
            enhancements, the project introduced improvements to the biller
            enrollment process. TD Bank partnered with a vendor that allows
            users to find all their billers automatically by simply entering the
            name and mailing address. This feature streamlines the setup
            process, reducing manual entry and ensuring greater accuracy when
            adding new billers. This case study highlights the user experience
            of TD Bill Pay, outlining its key features, payment processing
            methods, and best practices for seamless financial management.
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
          <div className="mb-8 flex-1 text-5xl font-medium tracking-tighter text-zinc-800">
            My role
          </div>
          <div className="flex-1 text-lg font-light tracking-tight text-zinc-600 md:text-lg">
            My primary role on the project was to create all the new UI elements
            this experience needed. It challanged me to inroduce a new visual
            language that can play nice with the existing styling and look &
            feel of the app.
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
        {/* Make the journey short and easy!!! */}
        <div className="mx-auto flex flex-col gap-x-8 py-12 font-sans md:flex-row md:py-24">
          <div className="mb-8 flex-1 text-5xl font-medium tracking-tighter text-zinc-800">
            Onboarding onto the new experience
          </div>
          <div className="flex-1 text-lg font-light tracking-tight text-zinc-600 md:text-lg">
            TD US Banking app users already had the ability to pay for bills.
            Since this was an improvement, we needed a way to promote and let
            users enroll in the new experience. The onboarding would entise
            users to learn about what they can get by enrolling, and there was
            not much else to it. They only had to press the "Let's Go" button
            and then the system would start to automatically search for the
            users bills.
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
        {/* Make the journey short and easy!!! */}
        <div className="mx-auto flex flex-col gap-x-8 py-12 font-sans md:flex-row md:py-24">
          <div className="mb-8 flex-1 text-5xl font-medium tracking-tighter text-zinc-800">
            Testing onboaring experience
          </div>
          <div className="flex-1 text-lg font-light tracking-tight text-zinc-600 md:text-lg">
            We tested two sets of onboarding flows with users. The above
            required users to first enroll and accept terms and conditions, and
            at that point the would get to see what the feature was about. The B
            experience below front loaded the terms and conditions and then the
            user would learn about the features.
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
        {/* Make the journey short and easy!!! */}
        <div className="mx-auto flex flex-col gap-x-8 py-12 font-sans md:flex-row md:py-24">
          <div className="mb-8 flex-1 text-5xl font-medium tracking-tighter text-zinc-800">
            Adding new Billers
          </div>
          <div className="flex-1 text-lg font-light tracking-tight text-zinc-600 md:text-lg">
            Search for billers not found by the system can be added manually by
            searching the biller name. The improvement allows for easier
            identification of billers by introducing the merchant logo. This was
            part of the purchsed vendor solution.
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
        {/* Make the journey short and easy!!! */}
        <div className="mx-auto flex flex-col gap-x-8 py-12 font-sans md:flex-row md:py-24">
          <div className="mb-8 flex-1 text-5xl font-medium tracking-tighter text-zinc-800">
            Responsive experience
          </div>
          <div className="flex-1 text-lg font-light tracking-tight text-zinc-600 md:text-lg">
            The bill list, and the pay bill page illustrated on the tablet.
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
