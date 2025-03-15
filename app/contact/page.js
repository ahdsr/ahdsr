"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import HeroSection from "@/components/HeroSection";
import AnimatedImage from "@/components/AnimatedImage";

export default function ContactPage() {
  const { ref, inView } = useInView({
    triggerOnce: true, // Ensures animation happens once
    threshold: 0.1, // Triggers animation when 10% of the component is visible
  });
  return (
    <>
      <HeroSection
        backgroundColor="bg-white"
        paddingTop="pt-12"
        paddingBottom="pb-24"
        heading="Contact"
        headingColor="text-black"
        headingSize="text-8xl md:text-9xl"
        headingWeight="font-semibold"
        headingTracking="tracking-[-10]"
        paragraph="Let's connect and create something impactful. I bring together strategy, research, and technology to craft intuitive experiences that engage users and drive real results. If you're ready to build something that matters, reach out—I'd love to collaborate."
        paragraphColor="text-zinc-500"
        initialAnimation={{ y: "100%" }}
        mainTransition={{
          duration: 0.3,
          type: "spring",
          stiffness: 100,
          damping: 10,
        }}
      />
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
