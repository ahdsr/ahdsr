"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

const ImageGallery = ({
  images,
  captions,
  className,
  captionPosition = "bottom-4 left-4",
}) => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const nextImage = () => {
    setDirection(1);
    setIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setDirection(-1);
    setIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: { x: 0, opacity: 1 },
    exit: (direction) => ({
      x: direction < 0 ? 100 : -100,
      opacity: 0,
    }),
  };

  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      {/* Previous Button */}
      <button
        onClick={prevImage}
        className="absolute left-2 top-1/2 z-10 -translate-y-1/2 transform rounded-full bg-black/100 p-2 text-white"
      >
        <ChevronLeftIcon className="h-6 w-6" />
      </button>

      {/* Image Display */}
      <div className="relative flex h-full w-full items-center justify-center overflow-hidden">
        <AnimatePresence custom={direction} mode="popLayout">
          <motion.img
            key={index}
            src={images[index]}
            alt={`Gallery Image ${index}`}
            className="absolute h-full w-full rounded-lg object-contain"
            initial="enter"
            animate="center"
            exit="exit"
            variants={variants}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            custom={direction}
          />
        </AnimatePresence>

        {/* Animated Caption */}
        {captions?.[index] && (
          <motion.div
            key={index}
            className={`absolute ${captionPosition} rounded-lg bg-black/70 p-2 text-sm text-white`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            {captions[index]}
          </motion.div>
        )}
      </div>

      {/* Next Button */}
      <button
        onClick={nextImage}
        className="absolute right-2 top-1/2 z-10 -translate-y-1/2 transform rounded-full bg-black/100 p-2 text-white"
      >
        <ChevronRightIcon className="h-6 w-6" />
      </button>
    </div>
  );
};

export default ImageGallery;
