import { motion } from "framer-motion";
import { useState } from "react";

const MotionButton = ({
  text,
  href,
  onClick,
  size = "regular",
  bgColor = "bg-transparent", // default background color
  transparent = false, // option for transparent background
  hoverBgColor = "black", // default hover background color
  textColor = "zinc-800", // default text color
  hoverTextColor = "white", // default hover text color
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const baseClass = "font-sans tracking-tight rounded-full";

  // Determine background color class based on props
  let normalBgClass = "";
  if (!transparent) {
    switch (bgColor) {
      case "gray":
        normalBgClass = "bg-zinc-200";
        break;
      case "white":
        normalBgClass = "bg-white";
        break;
      case "black":
        normalBgClass = "bg-black";
        break;
      case "blue":
        normalBgClass = "bg-blue-500";
        break;
      case "red":
        normalBgClass = "bg-red-500";
        break;
      case "green":
        normalBgClass = "bg-green-500";
        break;
      default:
        normalBgClass = `bg-${bgColor}-500`; // For other Tailwind colors
    }
  }

  // Text color classes
  const normalTextClass = `text-${textColor}`;

  // Hover background class
  let hoverBgClass = "";
  switch (hoverBgColor) {
    case "black":
      hoverBgClass = "bg-black";
      break;
    case "white":
      hoverBgClass = "bg-white";
      break;
    case "blue":
      hoverBgClass = "bg-blue-500";
      break;
    case "red":
      hoverBgClass = "bg-red-500";
      break;
    case "green":
      hoverBgClass = "bg-green-500";
      break;
    default:
      hoverBgClass = `bg-${hoverBgColor}-500`; // For other Tailwind colors
  }

  const hoverTextClass = `text-${hoverTextColor}`;

  const sizeClass =
    size === "large" ? "px-6 py-3 text-lg" : "px-3 py-1 text-sm";

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

  const buttonContent = (
    <div
      className="relative overflow-hidden rounded-2xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={() => setIsHovered(true)}
      onTouchEnd={() => setIsHovered(false)}
    >
      {/* Original button */}
      <motion.div
        className={`${baseClass} ${normalBgClass} ${normalTextClass} ${sizeClass} absolute inset-0 flex items-center justify-center rounded-2xl`}
        variants={buttonVariants}
        initial="initial"
        animate={isHovered ? "hover" : "initial"}
      >
        {text}
      </motion.div>

      {/* Alternate button that slides in */}
      <motion.div
        className={`${baseClass} ${hoverBgClass} ${hoverTextClass} ${sizeClass} absolute inset-0 flex items-center justify-center rounded-2xl`}
        variants={altButtonVariants}
        initial="initial"
        animate={isHovered ? "hover" : "initial"}
      >
        {text}
      </motion.div>

      {/* Invisible placeholder to maintain space */}
      <div className={`invisible ${sizeClass}`}>{text}</div>
    </div>
  );

  // For regular button
  if (!href) {
    return (
      <button
        onClick={onClick}
        style={{
          background: "none",
          border: "none",
          padding: 0,
          cursor: "pointer",
        }}
      >
        {buttonContent}
      </button>
    );
  }

  // For link version
  return (
    <a href={href} className="no-underline" style={{ textDecoration: "none" }}>
      {buttonContent}
    </a>
  );
};

export default MotionButton;
