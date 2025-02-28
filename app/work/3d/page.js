"use client";

import HeroCaseStudy from "@/components/HeroCaseStudy";
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

  // Add more image paths as needed
];

export default function ContactPage() {
  return (
    <>
      <HeroCaseStudy
        title="3D Rendering"
        subtitle="Modeling & 3D"
        description="UX Design"
        backgroundImage="/images/other/3D_hero.png"
        bgColor="bg-green-700"
      />
      <div className="mx-auto max-w-7xl px-8 sm:px-20">
        {/* My Role & Team */}
        <div className="mx-auto flex flex-col gap-8 border-t border-t-zinc-300 py-12 font-sans md:flex-row md:py-24">
          <div className="mb-8 flex-1 text-5xl font-medium tracking-tighter text-zinc-800">
            My role & team
          </div>
          <div className="flex-1 text-lg font-light tracking-tight text-zinc-600 md:text-lg">
            My role on the team was to conceptualize the MVP for a digital
            experience that would allow users to seamlessly apply the ACT model
            in their everyday lives. This involved designing an intuitive app
            experience for individuals looking to train their mindset daily,
            enhance focus, and gain a competitive edge over their peers. My
            process included brainstorming, user journey mapping, and
            formulating a rough concept to assess whether BEON Performance was
            interested in expanding beyond in-person seminars and one-on-one
            coaching to include a scalable digital solution.
          </div>
        </div>
      </div>

      <ImageGallery images={images} />
    </>
  );
}
