"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function VideoSection({ videoSrc, overlayText = "" }) {
  const { ref, inView } = useInView({
    triggerOnce: true, // Ensures animation happens once
    threshold: 0.1, // Triggers animation when 10% of the component is visible
  });

  const overlayEnabled = overlayText.trim() !== "";

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: -50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="relative mx-auto my-4 flex w-full max-w-7xl items-center justify-center"
    >
      {/* Video Container with Aspect Ratio */}
      <div className="relative flex aspect-video w-full max-w-7xl items-center justify-center overflow-hidden">
        {videoSrc && (
          <video
            className="h-full max-h-full w-full max-w-full object-contain"
            autoPlay
            controls
            loop
            muted
            playsInline
            key={videoSrc} // Ensure video updates when prop changes
          >
            <source src={videoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}

        {/* Overlay with Text */}
        {overlayEnabled && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-40 p-6 text-center text-white">
            <p className="max-w-2xl font-sans text-lg md:text-xl">
              {overlayText}
            </p>
          </div>
        )}
      </div>
    </motion.div>
  );
}
