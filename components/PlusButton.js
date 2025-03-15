import { motion } from "framer-motion";
import { PlusIcon } from "@heroicons/react/24/solid";

const PlusButton = ({ isHovered }) => {
  // Animation variants similar to the Button component
  const buttonVariants = {
    initial: {
      y: 0,
      opacity: 1,
    },
    hover: {
      y: -40,
      opacity: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
      },
    },
  };

  const altButtonVariants = {
    initial: {
      y: 40,
      opacity: 0,
    },
    hover: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
      },
    },
  };

  return (
    <div className="pointer-events-none absolute right-4 top-4 z-10">
      <div className="relative h-8 w-8 overflow-hidden rounded-full">
        {/* Original button */}
        <motion.div
          className="absolute flex h-8 w-8 items-center justify-center rounded-full bg-white text-black"
          variants={buttonVariants}
          initial="initial"
          animate={isHovered ? "hover" : "initial"}
        >
          <PlusIcon className="h-4 w-4" />
        </motion.div>

        {/* Alternate button that slides in */}
        <motion.div
          className="absolute flex h-8 w-8 items-center justify-center rounded-full bg-black text-white"
          variants={altButtonVariants}
          initial="initial"
          animate={isHovered ? "hover" : "initial"}
        >
          <PlusIcon className="h-4 w-4" />
        </motion.div>
      </div>
    </div>
  );
};

export default PlusButton;
