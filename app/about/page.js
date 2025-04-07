import HeroSection from "@/components/HeroSection";

export default function AboutPage() {
  return (
    <>
      <HeroSection
        backgroundColor="bg-gray-500"
        paddingTop="pt-12"
        paddingBottom="pb-12"
        heading="Lucas is a designer based out of "
        headingColor="text-black"
        headingHighlight="Toronto, Canada."
        headingHighlightColor="text-white"
        headingSize="text-7xl"
        headingWeight="font-semibold"
        headingTracking="tracking-tighter"
        paragraph="I'm a father of 2, trainer to a hyper Vizsla, design is my passion."
        paragraphSize="text-3xl"
        paragraphWeight="font-light"
        paragraphColor="text-white"
      />
    </>
  );
}
