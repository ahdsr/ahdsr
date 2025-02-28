import { motion } from "framer-motion";
import Link from "next/link";

export default function Button({ text, href, onClick, size = "regular" }) {
  const baseClass =
    "font-sans tracking-tight rounded-full bg-zinc-200 text-zinc-800 hover:bg-black hover:text-white transition transform-gpu";

  const sizeClass =
    size === "large"
      ? "px-6 py-3 text-lg" // Larger padding and font size
      : "px-3 py-1 text-sm"; // Default size

  const buttonClass = `${baseClass} ${sizeClass}`;

  const motionProps = {
    initial: false,
    layout: true,
    whileHover: {
      scale: 1.1,
      transition: { duration: 0.2, ease: "easeOut" },
    },
    whileTap: {
      scale: 0.95,
      transition: { duration: 0.15, ease: "easeInOut" },
    },
  };

  return href ? (
    <Link href={href} passHref>
      <motion.div {...motionProps} className={buttonClass}>
        {text}
      </motion.div>
    </Link>
  ) : (
    <motion.button {...motionProps} onClick={onClick} className={buttonClass}>
      {text}
    </motion.button>
  );
}
