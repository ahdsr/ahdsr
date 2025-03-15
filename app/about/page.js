import HeroSection from "@/components/HeroSection";

export default function AboutPage() {
  return (
    <>
      <HeroSection
        backgroundColor="bg-red-500"
        paddingTop="pt-12"
        paddingBottom="pb-12"
        heading="Cline is the shit!"
        headingHighlight=" Eat your heart out JR Developer."
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
