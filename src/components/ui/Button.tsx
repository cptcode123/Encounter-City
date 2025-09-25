// components/Button.tsx
import React from "react";
import { motion } from "framer-motion";

interface ButtonProps {
  text: string;
  inverted?: boolean; // toggles between normal + inverted styles
  href?: string;
}

const Button: React.FC<ButtonProps> = ({ text, inverted = false, href }) => {
  return (
    <motion.a
      whileHover={{scale: 1.05}}
      whileClick={{scale:0.95}}
      href='/'
      className={`
        px-6 py-2 rounded-sm font-medium transition-colors duration-300 shadow-sm shadow-secondary text-nowrap
        ${inverted
          ? "bg-primary text-white hover:bg-primary-dark"
          : "bg-white text-primary hover:bg-primary-dark hover:text-white"}
      `}
    >
      {text}
    </motion.a>
  );
};

export default Button;
