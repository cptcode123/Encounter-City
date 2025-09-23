'use client'
import React from "react";
import Link from "next/link";
import DropdownLink from "../ui/DropdownLink";
import Button from "../ui/Button";
import { Menu,X } from "lucide-react";
import {motion, AnimatePresence} from 'framer-motion';

const Header = () => {
    const [isOpen, setIsOpen] = React.useState(false);

  return (
    <header className="w-full bg-surface text-primary px-6 py-4 flex justify-between items-center shadow-md">
      {/* Logo */}
      <Link href="/" className="text-xl font-bold text-wrap">
        The Encounter City Christian Centre
      </Link>

      {/* Nav Links */}
      <nav className="hidden lg:flex gap-7 items-center shrink text-nowrap">
        <Link href="/about" className="hover:text-secondary-dark">About Us</Link>
        <DropdownLink 
        title="Our Ministries"
        links={[
            { label: "Youth@Church", href: "/youth" },
            { label: "Where Women Warriors War", href: "/women-warriors" },
            { label: "Workers in Church", href: "/workers"}
          ]}
        />
        <Link href="/" className="hover:text-secondary-dark">Blog</Link>
      </nav>

      {/* CTA Button */}
      <div className="hidden lg:flex gap-5 ml-5 -mr-3">
        <Button text="Become a member!" inverted />
        <Button text="Give" />
      </div>

       {/*Menu Button */}
          <button
          className="lg:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu">
            {isOpen ? <X size={28}/> : <Menu size={28}/>}
          </button>

        {/* Mobile Menu */}
        <AnimatePresence>
            {isOpen && (
                <motion.nav
                initial={{ opacity: 0 }}
                animate={{ opacity: 1}}
                exit={{ opacity: 0}}
                className="lg:hidden bg-surface text-primary flex flex-col gap-5 px-6 py-4 absolute top-15 left-0 right-0 z-20">
                <Link href="/about" className="hover:text-secondary-dark">About Us</Link>
                <DropdownLink 
                title="Our Ministries"
                links={[
                    { label: "Youth@Church", href: "/youth" },
                    { label: "Where Women Warriors War", href: "/women-warriors" },
                    { label: "Workers in Church", href: "/workers" }
                ]}
                />
                <Link href="/" className="hover:text-secondary-dark">Blog</Link>
                </motion.nav>
            )}
        </AnimatePresence>        
    </header>
  );
};

export default Header;
