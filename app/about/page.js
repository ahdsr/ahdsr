import HeroSection from "@/components/HeroSection";

export default function AboutPage() {
  return (
    <>
      <HeroSection
        backgroundColor="bg-gray-500"
        paddingTop="pt-12"
        paddingBottom="pb-12"
        heading="Lucas is a product designer based in "
        headingColor="text-black"
        headingHighlight="Toronto, Canada."
        headingHighlightColor="text-white"
        headingSize="text-7xl"
        headingWeight="font-semibold"
        headingTracking="tracking-tighter"
        paragraph="I design practical, polished digital products and bring a hands-on approach to research, UX, UI, and front-end implementation."
        paragraphSize="text-3xl"
        paragraphWeight="font-light"
        paragraphColor="text-white"
      />
    </>
  );
}
