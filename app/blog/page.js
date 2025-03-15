import HeroSection from "@/components/HeroSection";
import Blog from "@/components/Blog";
export default function BlogPage() {
  return (
    <>
      <HeroSection
        backgroundColor="bg-blue-800"
        paddingTop="pt-12"
        paddingBottom="pb-64"
        heading="Blog blog."
        headingHighlight="blog"
        headingHighlightColor="text-white"
        paragraph="Thoughts, insights, and occasional design musings—sometimes profound, sometimes just me thinking out loud."
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
