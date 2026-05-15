import HeroSection from "@/components/HeroSection";
import Blog from "@/components/Blog";
export default function BlogPage() {
  return (
    <>
      <HeroSection
        backgroundColor="bg-blue-800"
        paddingTop="pt-12"
        paddingBottom="pb-64"
        heading="Notes on design and development."
        headingHighlight="design"
        headingHighlightColor="text-white"
        paragraph="Short reflections on portfolio work, design process, and product decisions."
        paragraphColor="text-white"
        headingSize="text-7xl"
        headingWeight="font-semibold"
        headingTracking="tracking-tighter"
        paragraphSize="text-3xl"
        paragraphWeight="font-light"
      />
      <Blog />
    </>
  );
}
