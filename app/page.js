import HeroSection from "@/components/HeroSection";
import Featured from "@/components/Featured";
import Skills from "@/components/Skills";
import ParallaxSection from "@/components/ParallaxSection";

export default function Home() {
  return (
    <>
      <HeroSection
        backgroundColor="bg-zinc-300"
        paddingTop="pt-32"
        paddingBottom="pb-80"
        heading="Transforming ideas into intuitive experiences."
        headingColor="text-black"
        headingTracking="tracking-tighter"
        headingHighlight="intuitive"
        headingHighlightColor="text-white"
        secondHighlight="experiences"
        secondHighlightColor="text-indigo-500"
        paragraph="I blend strategy, research, and technology to craft seamless, intuitive experiences that engage users and drive meaningful outcomes. Let's build something that matters."
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
