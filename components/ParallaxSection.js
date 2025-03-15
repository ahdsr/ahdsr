"use client";
import { useState, useEffect } from "react";

export default function ParallaxSection({ mediaSrc, isVideo = false }) {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.scrollY * 0.3); // Reduced parallax speed to minimize gaps
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden bg-black">
      <div className="absolute inset-0" style={{ overflow: "hidden" }}>
        {isVideo ? (
          <video
            className="absolute left-0 top-[-15%] h-[160%] w-full object-cover"
            src={mediaSrc}
            autoPlay
            loop
            muted
            style={{
              transform: `translateY(${offset * 0.3}px) scale(1.05)`, // Reduced movement and slight scale up
              objectFit: "cover",
              objectPosition: "center center",
              minHeight: "160vh", // Increased height for better coverage
            }}
          />
        ) : (
          <img
            className="absolute left-0 top-[-15%] h-[160%] w-full object-cover"
            src={mediaSrc}
            alt="Parallax Background"
            style={{
              transform: `translateY(${offset * 0.3}px) scale(1.05)`, // Reduced movement and slight scale up
              objectFit: "cover",
              objectPosition: "center center",
              minHeight: "160vh", // Increased height for better coverage
            }}
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
