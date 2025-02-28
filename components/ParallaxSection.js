"use client";
import { useState, useEffect } from "react";

export default function ParallaxSection({ mediaSrc, isVideo = false }) {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.scrollY * 0.5); // Adjust speed of parallax effect
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden bg-black">
      {isVideo ? (
        <video
          className="absolute left-0 top-0 -mt-96 h-full w-full object-cover md:-mt-64"
          src={mediaSrc}
          autoPlay
          loop
          muted
          style={{ transform: `translateY(${offset * 0.5}px)` }} // Apply parallax effect
        />
      ) : (
        <img
          className="absolute left-0 top-0 -mt-96 h-full w-full object-cover md:-mt-64"
          src={mediaSrc}
          alt="Parallax Background"
          style={{ transform: `translateY(${offset * 0.5}px)` }} // Apply parallax effect
        />
      )}
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="font-sans text-2xl font-bold tracking-tighter text-indigo-500 md:text-2xl">
          Reel coming soon.
        </h1>
      </div>
    </div>
  );
}
