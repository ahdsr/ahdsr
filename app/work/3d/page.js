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
            A Journey in Design & Visualization
          </div>
          <div className="flex-1 text-lg font-light tracking-tight text-zinc-600 md:text-lg">
            3D rendering has always been a passion of mine—an avenue where
            creativity meets technology. As part of my learning and development,
            I’ve explored different techniques to bring ideas to life in a
            three-dimensional space. This collection showcases my journey in 3D
            modeling, texturing, and rendering, experimenting with light, form,
            and composition. Whether it’s product visualization, architectural
            concepts, or artistic explorations, each piece reflects my curiosity
            and drive to push creative boundaries. I’m continuously learning,
            refining my craft, and finding new ways to merge 3D with UX,
            storytelling, and interactive experiences. Take a look at my work
            and feel free to reach out—I’d love to collaborate or discuss ideas!
          </div>
        </div>
      </div>

      <ImageGallery images={images} />
    </>
  );
}
