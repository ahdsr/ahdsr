"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const ImageGallery = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="container mx-auto max-w-7xl px-8 md:px-20">
      {/* Masonry Grid */}
      <div className="mt-8 columns-1 gap-4 sm:columns-2 md:columns-3 lg:columns-4">
        {images.map((image, index) => (
          <motion.div
            key={image}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="mb-4 break-inside-avoid"
            onClick={() => setSelectedImage(image)}
          >
            <Image
              src={image}
              alt={`Gallery image ${index + 1}`}
              width={500}
              height={500}
              className="h-auto w-full cursor-pointer transition-opacity hover:opacity-90"
              style={{ objectFit: "cover" }}
            />
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-100"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.5 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.5 }}
              className="relative max-h-[90vh] max-w-[90vw]"
            >
              <button
                className="absolute -top-10 right-0 text-xl text-white hover:text-gray-300"
                onClick={() => setSelectedImage(null)}
              >
                Close
              </button>
              <Image
                src={selectedImage}
                alt="Selected image"
                width={1200}
                height={800}
                className="h-auto max-h-[90vh] w-auto max-w-full rounded-lg"
                style={{ objectFit: "contain" }}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ImageGallery;
