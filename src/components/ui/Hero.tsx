"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence, delay } from "framer-motion";
import Button from "@/components/ui/Button"; // adjust path to your Button

export default function HeroCarousel() {
  const slides = [
    {
      title: "Welcome to The Encounter City Christian Center",
      subtitle: "Where lives are transformed in Christ’s presence.",
      image: "/images/slide1.jpeg"
    },
    {
      title: "Worship. Word. Encounter.",
      subtitle: "Join us in vibrant worship and deep teaching.",
      image: "/images/slide2.jpeg",
    },
    {
      title: "A Family in Christ",
      subtitle: "Experience love, growth, and community.",
      image: "/images/slide3.jpeg",
    }
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 10000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section className="relative w-full h-screen overflow-hidden z-0">
      {/* Background Carousel */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${slides[current].image})` }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2 }}
        />
      </AnimatePresence>

      {/* Purple Glow Overlay */}
      {/* <div className="absolute inset-0 bg-primary opacity-70 mix-blend-multiply z-0" /> */}
      <div className="absolute inset-0 bg-primary/80" />

      {/* Content */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-6">
        <motion.h1
          key={slides[current].title}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2, delay: 1.0 }}
          className="text-4xl md:text-6xl font-bold text-white"
        >
          {slides[current].title}
        </motion.h1>

        <motion.p
          key={slides[current].subtitle}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="mt-4 text-lg md:text-2xl text-gray-200 max-w-2xl"
        >
          {slides[current].subtitle}
        </motion.p>

        {/* CTA Buttons (reusable component) */}
        <div className="mt-8 flex gap-4">
          <Button text="Watch Live" inverted onClick={() => window.open("https://www.youtube.com/@theencountercity", "_blank")} />
          <Button text="Become a Member" onClick={() => window.open('/member')} />

        </div>
      </div>
    </section>
  );
}

export function HeroStatic() {

}

