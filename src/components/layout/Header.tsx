'use client'
import React from "react";
import Link from "next/link";
import { Menu,X } from "lucide-react";
import {motion, AnimatePresence} from 'framer-motion';
import Image from "next/image";

const Header = () => {
    const [isOpen, setIsOpen] = React.useState(false);

  return (
    <header className="w-full bg-[#fffff] text-primary px-10 py-4 flex justify-between items-center z-20">
      {/* Logo */}
      <Link href="/" className="text-xl font-bold text-wrap">
        <Image src="/logo.jpg" alt="The Encounter City Christian Centre" className="w-15 h-auto" width={20} height={20}/>
      </Link>

      {/* Nav Links */}
      <nav className="hidden lg:flex gap-7 items-center shrink text-nowrap pr-10">
        <Link href="/about" className="hover:text-secondary-dark">About Us</Link>
        <Link href="/blog" className="hover:text-secondary-dark">Words from our Pastor</Link>
        <Link href="/services" className="hover:text-secondary-dark">Services</Link>
        <Link href="/give" className="hover:text-secondary-dark">Give</Link>
        <Link href='https://theencountercity.mixlr.com/' target="_blank">Listen to us Live</Link>
      </nav>

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
                <Link href="/about" className="hover:text-secondary-dark" onClick={() => setIsOpen(false)}>About Us</Link>
                <Link href="/blog" className="hover:text-secondary-dark" onClick={() => setIsOpen(false)}> Words from our Pastor</Link>
                <Link href="/services" className="hover:text-secondary-dark" onClick={() => setIsOpen(false)}>Services</Link>
                <Link href="/contact" className="hover:text-secondary-dark" onClick={() => setIsOpen(false)}>Get in touch</Link>
                <Link href="/give" className="hover:text-secondary-dark" onClick={() => setIsOpen(false)}>Give</Link>
                </motion.nav>
            )}
        </AnimatePresence>        
    </header>
  );
};

export default Header;
