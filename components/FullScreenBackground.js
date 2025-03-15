"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function FullScreenBackground({
  backgroundImage,
  overlayImage,
  headline,
  headlineColor = "text-white",
  headlineSize = "text-6xl md:text-7xl",
  headlineWeight = "font-black",
  headlineTracking = "tracking-[-0.08em]",
  sensitivity = 0.5, // Controls how much the elements move with the mouse
  maxMovement = 30, // Maximum pixel movement in any direction
}) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);
  const [containerDimensions, setContainerDimensions] = useState({
    width: 0,
    height: 0,
  });
  const [centerPoint, setCenterPoint] = useState({ x: 0, y: 0 });

  // Initialize container dimensions and center point
  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        const { width, height } = containerRef.current.getBoundingClientRect();
        setContainerDimensions({ width, height });
        setCenterPoint({ x: width / 2, y: height / 2 });
      }
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);

    return () => {
      window.removeEventListener("resize", updateDimensions);
    };
  }, []);

  // Track mouse movement
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (containerRef.current) {
        const { left, top } = containerRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - left,
          y: e.clientY - top,
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // Calculate movement based on mouse position relative to center
  const calculateMovement = () => {
    if (containerDimensions.width === 0 || containerDimensions.height === 0) {
      return { x: 0, y: 0 };
    }

    // Calculate distance from center
    const deltaX = mousePosition.x - centerPoint.x;
    const deltaY = mousePosition.y - centerPoint.y;

    // Calculate distance from center as a percentage of container dimensions
    const distancePercentX = Math.abs(deltaX) / (containerDimensions.width / 2);
    const distancePercentY =
      Math.abs(deltaY) / (containerDimensions.height / 2);

    // Calculate overall distance percentage (0 to 1)
    const distancePercent = Math.min(
      1,
      Math.max(distancePercentX, distancePercentY),
    );

    // Define boundary threshold (0.85 means 85% of the way to the edge)
    const boundaryThreshold = 0.85;

    // If mouse exceeds boundary, return to original position
    if (distancePercent > boundaryThreshold) {
      return { x: 0, y: 0, resetAnimation: true };
    }

    // Apply sensitivity and limit maximum movement
    const moveX = Math.min(
      Math.max(deltaX * sensitivity, -maxMovement),
      maxMovement,
    );
    const moveY = Math.min(
      Math.max(deltaY * sensitivity, -maxMovement),
      maxMovement,
    );

    return { x: moveX, y: moveY, resetAnimation: false };
  };

  const movement = calculateMovement();

  return (
    <div
      ref={containerRef}
      className="relative h-screen w-full overflow-hidden"
    >
      {/* Background Image with subtle parallax effect */}
      <motion.div
        className="absolute inset-0"
        animate={{
          x: movement.resetAnimation ? 0 : movement.x * -1, // Move slightly in opposite direction
          y: movement.resetAnimation ? 0 : movement.y * -1,
        }}
        transition={{
          type: "spring",
          stiffness: movement.resetAnimation ? 60 : 40,
          damping: movement.resetAnimation ? 20 : 40,
          mass: 4,
          ease: "easeOut",
        }}
      >
        <Image
          src={backgroundImage}
          alt="Background"
          fill
          sizes="100vw"
          style={{
            objectFit: "cover",
            objectPosition: "center",
            transform: "scale(1.1)", // Scale up the image by 10% to prevent edges from showing
          }}
          priority
        />
      </motion.div>

      {/* Overlay with mouse movement effect */}
      <motion.div
        className="absolute inset-0 mt-32 flex items-center justify-center"
        animate={{
          x: movement.resetAnimation ? 0 : movement.x,
          y: movement.resetAnimation ? 0 : movement.y,
          rotate: movement.resetAnimation ? 0 : movement.x * 0.03, // Subtle rotation based on horizontal movement
        }}
        transition={{
          type: "spring",
          stiffness: movement.resetAnimation ? 100 : 80, // Higher stiffness for reset animation
          damping: movement.resetAnimation ? 15 : 25, // Lower damping for more bounce on reset
          mass: 4, // Slightly higher mass for more inertia
          ease: "easeOut", // Add easing for smoother transitions
        }}
      >
        {/* Transparent PNG Overlay */}
        <div className="relative text-2xl font-bold tracking-tighter text-yellow-300">
          Work in progress
        </div>
      </motion.div>

      {/* Headline with mouse movement effect */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        animate={{
          x: movement.resetAnimation ? 0 : movement.x * 0.7, // Slightly less movement than the overlay
          y: movement.resetAnimation ? 0 : movement.y * 0.7,
        }}
        transition={{
          type: "spring",
          stiffness: movement.resetAnimation ? 80 : 60, // Higher stiffness for reset animation
          damping: movement.resetAnimation ? 20 : 30, // Lower damping for more bounce on reset
          mass: 3, // Higher mass for more inertia and natural feel
          ease: "easeOut", // Add easing for smoother transitions
          delay: movement.resetAnimation ? 0 : 0.05, // No delay on reset
        }}
      >
        <h1
          className={`z-10 text-center font-sans ${headlineSize} ${headlineWeight} ${headlineTracking} ${headlineColor}`}
        >
          {headline}
        </h1>
      </motion.div>
    </div>
  );
}
