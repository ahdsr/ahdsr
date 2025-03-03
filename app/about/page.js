import HeroSection from "@/components/HeroSection";

export default function AboutPage() {
  return (
    <>
      <HeroSection
        backgroundColor="bg-green-500"
        paddingTop="pt-24"
        paddingBottom="pb-24"
        heading="This is large heading"
        headingHighlight=" with why text."
        headingHighlightColor="text-white"
        headingSize="text-7xl"
        headingWeight="font-semibold"
        headingTracking="tracking-tighter"
        paragraph="As a designer, I've been lucky enough to be exposed to a vast number of employers, teams and projects. Each of them have given me a rewarding learning experience."
        paragraphSize="text-3xl"
        paragraphWeight="font-light"
        paragraphColor="text-white"
      />
    </>
  );
}
