// components/ui/DropdownLink.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface DropdownLinkProps {
  title: string;
  links: { label: string; href: string }[];
}

const DropdownLink: React.FC<DropdownLinkProps> = ({ title, links }) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      {/* Main link */}
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1 hover:text-secondary-dark transition-colors"
      >
        {title}
        <ChevronDown
          size={16}
          className={`transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>

      {/* Dropdown */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            transition={{ duration: 0.2 }}
            className="absolute left-0 mt-2 min-w-max rounded-lg bg-white text-gray-800 shadow-lg border border-gray-200 z-20"
          >
            <ul>
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="block px-4 py-4 hover:bg-purple-100 hover:text-purple-700 whitespace-nowrap rounded-lg"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default DropdownLink;
