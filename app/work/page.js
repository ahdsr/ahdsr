import HeroSection from "@/components/HeroSection";
import Work from "@/components/Work";
export default function WorkPage() {
  return (
    <>
      <HeroSection
        backgroundColor="bg-white"
        paddingTop="pt-12"
        paddingBottom="pb-32"
        heading="Work"
        headingColor="text-black"
        headingSize="text-8xl md:text-9xl"
        headingWeight="font-semibold"
        headingTracking="tracking-[-6] md:tracking-[-10]"
        paragraph=""
        initialAnimation={{ y: "100%" }}
        mainTransition={{
          duration: 0.3,
          type: "spring",
          stiffness: 100,
          damping: 10,
        }}
      />
      <div className="mx-auto flex h-full w-full max-w-7xl flex-col px-8 sm:px-20">
        <Work />
      </div>
    </>
  );
}
