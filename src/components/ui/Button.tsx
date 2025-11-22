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
    <a
      href={href}
      className={`
        px-6 py-2 rounded-3xl font-medium transition-colors duration-300 shadow-sm text-center text-nowrap
        ${inverted
          ? "bg-primary text-white hover:bg-primary-dark"
          : "bg-white text-primary hover:bg-primary-dark hover:text-white"}
      `}
    >
      {text}
    </a>
  );
};

export default Button;
