"use client";

import FullScreenBackground from "@/components/FullScreenBackground";
import HeroSection from "@/components/HeroSection";

export default function FullScreenBackgroundExample() {
  return (
    <div className="bg-black">
      <main>
        {/* Original FullScreenBackground component */}
        <FullScreenBackground
          backgroundImage="/images/global/Background.jpg"
          overlayImage="/images/global/pa.png"
          headline="Project Alchemy"
          headlineColor="text-black"
          headlineSize="text-7xl md:text-8xl"
          headlineWeight="font-black"
          headlineTracking="tracking-tighter"
          sensitivity={0.5}
          maxMovement={10}
        />

        {/* New HeroSection component */}
        <HeroSection
          backgroundColor="bg-transparent"
          paddingTop="pt-24"
          paddingBottom="pb-24"
          heading="Project Alchemy with HeroSection"
          headingSize="text-5xl md:text-6xl"
          headingWeight="font-black"
          headingTracking="tracking-tighter"
          headingHighlight="HeroSection"
          headingHighlightColor="text-blue-500"
          paragraph="This is an example of the new HeroSection component that can be used across the site."
          paragraphColor="text-white"
          paragraphSize="text-xl"
          paragraphWeight="font-normal"
          buttonText="Learn More"
          buttonLink="/about"
          buttonClassName="rounded-lg bg-blue-600 px-6 py-3 text-white hover:bg-blue-500"
        />
      </main>
    </div>
  );
}
