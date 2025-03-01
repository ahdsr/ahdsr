"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import HeroContact from "@/components/HeroContact";
import AnimatedImage from "@/components/AnimatedImage";
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
  const { ref, inView } = useInView({
    triggerOnce: true, // Ensures animation happens once
    threshold: 0.1, // Triggers animation when 10% of the component is visible
  });
  return (
    <>
      <HeroContact />
      <div className="mx-auto max-w-7xl px-8 pb-96 sm:px-20">
        <div className="flex flex-col gap-20 md:flex-row">
          <div>
            <h2 className="mb-8 flex-1 font-sans text-4xl font-bold tracking-tighter text-zinc-600">
              Got ideas? I've got the skills.
            </h2>
            <div className="font-xl mb-4 font-sans text-black">
              Email me for inquires, quesitons or a quick chat about your
              project.
            </div>
            <div className="font-xl font-sans text-blue-700">
              <a href="mailto:lucas.czuchraj@gmail.com">
                lucas.czuchraj@gmail.com
              </a>
            </div>
          </div>

          <div>
            <AnimatedImage
              src={["/images/global/Contact.webp"]}
              bgColor="bg-white"
            />
          </div>
        </div>
      </div>
    </>
  );
}
