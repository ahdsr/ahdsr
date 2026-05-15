"use client";

import HeroSection from "@/components/HeroSection";
import ImageGallery from "@/components/ImageGallery";

// Define your images array here
const images = [
  "/images/other/LaptopRender_Thumb.png",
  "/images/other/RoomRender_Thumb.png",
  "/images/other/MK7_v005.png",
  "/images/other/OrthoCity_v001.png",
  "/images/other/OrthoCity_v002.png",
  "/images/other/Random_v001.png",
  "/images/other/Random_v002.png",
  "/images/other/RoomRender.png",
  "/images/other/Moon.png",
  "/images/other/Dunny.png",

  // Add more image paths as needed
];

export default function ThreeDPage() {
  return (
    <>
      <HeroSection
        backgroundColor="bg-green-700"
        paddingTop="pt-24"
        paddingBottom="pb-24"
        heading="3D Rendering"
        headingSize="text-4xl sm:text-7xl"
        headingWeight="font-semibold"
        headingTracking="tracking-tighter"
        headingHighlight="Modeling & 3D"
        headingHighlightColor="text-gray-300"
        secondHighlight="UX Design"
        secondHighlightColor="text-gray-300"
        paragraphSize="text-base"
        paragraphWeight="font-light"
        paragraphColor="text-gray-300"
        image="/images/other/3D_Hero.png"
        imageAlt="3D Rendering Hero"
        imageWidth={1920}
        imageHeight={1080}
      />
      <div className="mx-auto max-w-7xl px-8 sm:px-20">
        {/* My Role & Team */}
        <div className="mx-auto flex flex-col gap-8 border-t border-t-zinc-300 py-12 font-sans md:flex-row md:py-24">
          <div className="mb-8 flex-1 text-2xl font-medium tracking-tighter text-zinc-800 md:text-5xl">
            Design and visualization
          </div>
          <div className="flex-1 text-lg font-light tracking-tight text-zinc-600 md:text-lg">
            This collection shows personal explorations in 3D modeling,
            texturing, lighting, and rendering. The work includes product
            visualization, architectural concepts, and visual experiments that
            help me explore form, composition, and storytelling in digital
            experiences.
          </div>
        </div>
      </div>

      <ImageGallery images={images} />
    </>
  );
}
