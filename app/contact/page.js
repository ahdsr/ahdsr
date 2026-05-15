"use client";

import HeroSection from "@/components/HeroSection";
import AnimatedImage from "@/components/AnimatedImage";

export default function ContactPage() {
  return (
    <>
      <HeroSection
        backgroundColor="bg-white"
        paddingTop="pt-12"
        paddingBottom="pb-24"
        heading="Contact"
        headingColor="text-black"
        headingSize="text-8xl md:text-9xl"
        headingWeight="font-semibold"
        headingTracking="tracking-[-6px] md:tracking-[-10px]"
        paragraph="Have a product, design system, or digital experience that needs clarity? I can help shape the strategy, UX, UI, and implementation details."
        paragraphColor="text-zinc-500"
        initialAnimation={{ y: "100%" }}
        mainTransition={{
          duration: 0.3,
          type: "spring",
          stiffness: 100,
          damping: 10,
        }}
      />
      <div className="mx-auto max-w-7xl px-8 pb-96 sm:px-20">
        <div className="flex flex-col gap-20 md:flex-row">
          <div>
            <h2 className="mb-8 flex-1 font-sans text-4xl font-bold tracking-tighter text-zinc-600">
              Let&apos;s talk about the work.
            </h2>
            <div className="font-xl mb-4 font-sans text-black">
              Email me with project inquiries, questions, or a quick note about
              what you&apos;re building.
            </div>
            <div className="font-xl font-sans text-blue-700">
              <a href="mailto:lucas.czuchraj@gmail.com">
                lucas.czuchraj@gmail.com
              </a>
            </div>
          </div>

          <div>
            <AnimatedImage
              src={["/images/global/Contact.webp"]}
              bgColor="bg-white"
            />
          </div>
        </div>
      </div>
    </>
  );
}
