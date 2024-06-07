import React from "react";
import { motion } from "framer-motion";

const colors = {
  initial: {
    opacity: 1,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.5,
      staggerChildren: 0.08,
    },
  },
};

const singleWordColor = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: "easeInOut",
      loop: Infinity,
    },
  },
};

const colorsArray = ["#ff6f91", "#ff9671", "#ffc75f", "#f9f871"]; // Array of colors to cycle through

const AnimatedColors = ({ text, className = "" }) => {
  return (
    <div className="w-full mx-auto py-2 flex overflow-hidden sm:py-0">
      <motion.h1
        className={`inline-block w-full text-dark font-bold capitalize text-8xl dark:text-light ${className}`}
        variants={colors}
        initial="initial"
        animate="animate"
        style={{
          animation: "text 5s ease infinite", // Apply animation from theme config
        }}
      >
        {text.split(" ").map((word, index) => (
          <motion.span
            key={word + "-" + index}
            className="inline-block"
            variants={singleWordColor}
            style={{ color: colorsArray[index % colorsArray.length] }}
          >
            {word}&nbsp;
          </motion.span>
        ))}
      </motion.h1>
    </div>
  );
};

export default AnimatedColors;
