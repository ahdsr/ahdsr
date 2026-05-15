import HeroSection from "@/components/HeroSection";
import Featured from "@/components/Featured";
import Skills from "@/components/Skills";
import ParallaxSection from "@/components/ParallaxSection";

export default function Home() {
  return (
    <>
      <HeroSection
        backgroundColor="bg-zinc-300"
        paddingTop="pt-32 md:pt-64"
        paddingBottom="pb-32 md:pb-96"
        heading="Designing clear, useful digital experiences."
        headingColor="text-black"
        headingTracking="tracking-tighter"
        headingHighlight="clear"
        headingHighlightColor="text-white"
        secondHighlight="experiences"
        secondHighlightColor="text-indigo-500"
        paragraph="I combine product strategy, research, UX, and front-end implementation to turn complex ideas into focused digital products."
        paragraphColor="text-zinc-500"
        headingSize="text-6xl md:text-7xl"
        headingWeight="font-black"
        paragraphSize="text-xl"
        paragraphWeight="font-normal"
        image="/images/global/11.png"
        imageAlt="Featured Image"
        imageWidth={256}
        imageHeight={256}
      />
      <ParallaxSection mediaSrc="/videos/sample1.mp4" isVideo={true} />
      <Featured />
      <Skills />
    </>
  );
}
