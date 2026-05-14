"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export default function ParallaxSection({ mediaSrc, isVideo = false }) {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1200], [0, 160]);
  const mediaClassName =
    "absolute left-0 top-[-15%] h-[160%] min-h-[160vh] w-full object-cover object-center";

  return (
    <div className="relative h-screen w-full overflow-hidden bg-black">
      <div className="absolute inset-0 overflow-hidden">
        {isVideo ? (
          <motion.video
            className={mediaClassName}
            src={mediaSrc}
            autoPlay
            loop
            muted
            playsInline
            style={{ y, scale: 1.05 }}
          />
        ) : (
          <motion.img
            className={mediaClassName}
            src={mediaSrc}
            alt="Parallax Background"
            style={{ y, scale: 1.05 }}
          />
        )}
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="font-sans text-2xl font-bold tracking-tighter text-indigo-500 md:text-2xl">
          Reel coming soon.
        </h1>
      </div>
    </div>
  );
}
