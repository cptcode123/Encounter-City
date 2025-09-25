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
    <header className="w-full bg-surface text-text px-6 py-4 flex justify-between items-center z-20">
      {/* Logo */}
      <Link href="/" className="text-xl font-bold text-wrap">
        The Encounter City Christian Centre
      </Link>

      {/* Nav Links */}
      <nav className="hidden lg:flex gap-7 items-center shrink text-nowrap ">
        <Link href="/about" className="hover:text-secondary-dark">About Us</Link>
        <DropdownLink 
                title="Words from our Pastors"
                links={[
                    { label: "Sermons", href: "/sermons" },
                    { label: "Daily Devotions", href: "/daily-devotions" },
                    { label: "Deep in Thought", href: "/deep-in-thought" }
                ]}
                />
        <Link href="/ministries" className="hover:text-secondary-dark">Ministries</Link>
      </nav>

      {/* CTA Button */}
      <div className="hidden lg:flex gap-5 ml-5 -mr-3">
        <Button text="Request a Prayer" inverted href="/contact"/>
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
                title="Words from our Pastor"
                links={[
                    { label: "Sermons", href: "/youth" },
                    { label: "Daily Devotions", href: "/women-warriors" },
                    { label: "Deep in Thought", href: "/workers" }
                ]}
                />
                <Link href="/ministries" className="hover:text-secondary-dark">Ministries</Link>
                <Link href="/contact" className="hover:text-secondary-dark">Get in touch</Link>
                </motion.nav>
            )}
        </AnimatePresence>        
    </header>
  );
};

export default Header;
