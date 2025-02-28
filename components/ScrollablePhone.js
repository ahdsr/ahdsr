import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function ScrollablePhone({ imageSrc, frameSrc }) {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setScrollY((prev) => (prev >= 320 ? 0 : prev + 1)); // Adjust scroll range
    }, 50); // Adjust speed
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative m-4 flex h-[532px] w-[253px] items-center justify-center overflow-hidden rounded-[40px]">
      {/* Phone frame overlay */}
      <Image
        src={frameSrc}
        alt="Phone Frame"
        width={290}
        height={600}
        className="pointer-events-none absolute z-10 overflow-hidden rounded-[40px]"
        priority
      />

      {/* Scrollable screen container with auto-scroll animation */}
      <motion.div
        className="no-scrollbar absolute z-0 overflow-hidden rounded-[40px]"
        animate={{ y: -scrollY }}
        transition={{ ease: "linear", duration: 0.05 }}
        style={{ top: "0px" }} // Adjust alignment to fit within the frame
      >
        <Image
          src={imageSrc}
          alt="Phone Screen"
          width={275}
          height={2200} // Adjust this based on the image height
          className="overflow-hidden rounded-[40px]"
          priority
        />
      </motion.div>
    </div>
  );
}
