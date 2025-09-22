// components/Footer.tsx
import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full bg-surface text-gray-300 px-6 py-5 mt-10 text-primary">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo / About */}
        <div>
          <h2 className="text-primary-dark font-bold text-lg">The Encounter City Christian Centre</h2>
          <p className="mt-2 text-sm">
            Inspiring tagline or description goes here.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-primary-dark font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/about" className="hover:text-secondary-dark">About</Link></li>
            <li><Link href="/news" className="hover:text-secondary-dark">News</Link></li>
            <li><Link href="/contact" className="hover:text-secondary-dark">Contact</Link></li>
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h3 className="text-primary-dark font-semibold mb-3">Follow Us</h3>
          <div className="flex gap-4">
            <a href="#" className="hover:text-secondary-dark">Twitter</a>
            <a href="#" className="hover:text-secondary-dark">Facebook</a>
            <a href="#" className="hover:text-secondary-dark">Instagram</a>
          </div>
        </div>
      </div>

      <div className="mt-10 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} The Encounter City Christian Centre. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
