"use client";

import { motion } from "framer-motion";
import Image from "next/image";

function AnimatedImage({
  src,
  labels = [],
  delay = 0,
  bgColor = "bg-indigo-400",
}) {
  const images = Array.isArray(src) ? src : [src]; // Ensure src is always an array
  const imageCount = images.length;

  // Determine grid layout dynamically based on image count
  let gridCols;
  if (imageCount === 1) {
    gridCols = "grid-cols-1";
  } else if (imageCount === 2) {
    gridCols = "grid-cols-2";
  } else {
    gridCols = "grid-cols-1 sm:grid-cols-2 md:grid-cols-3"; // Responsive for 3+ images
  }

  return (
    <motion.div
      className={`mx-auto mt-4 grid max-w-7xl ${gridCols} gap-4`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5, ease: "easeOut", delay }}
    >
      {images.map((imageSrc, index) => {
        // Get the label and emoji for this specific image (if available)
        const label = labels[index]?.text || null;
        const emoji = labels[index]?.emoji || "😒"; // Default emoji if not provided

        return (
          <div
            key={index}
            className={`relative w-full ${bgColor} flex items-center justify-center`}
          >
            {/* Optional Label - Centered Horizontally */}
            {label && (
              <div className="absolute left-1/2 top-12 z-10 -translate-x-1/2 transform rounded-md bg-indigo-700 px-4 py-2 text-sm font-medium text-white shadow-md">
                {emoji} {label}
              </div>
            )}

            {/* Background Image - Adjusted for Proper Scaling */}
            <div className="relative h-full w-full">
              <Image
                src={imageSrc}
                alt={`Image ${index + 1}`}
                layout="responsive"
                width={800}
                height={450}
                className="object-contain"
              />
            </div>
          </div>
        );
      })}
    </motion.div>
  );
}

export default AnimatedImage;
