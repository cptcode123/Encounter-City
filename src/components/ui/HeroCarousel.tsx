"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence, delay } from "framer-motion";
import Button from "@/components/ui/Button"; 

type Slide = {
  title: string;
  subtitle?: string;
  image?: string;
};

interface HeroCarouselProps {
  slides: Slide[];
}

export default function HeroCarousel({ slides }: HeroCarouselProps) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
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
          transition={{ duration: 0.8 }}
        />
      </AnimatePresence>

      {/* Purple Glow Overlay */}
      <div className="absolute inset-0 bg-primary/70" />


      {/* Content */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-6">
        <motion.h1
          key={slides[current].title}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="text-4xl md:text-6xl font-bold text-white"
        >
          {slides[current].title}
        </motion.h1>

        <motion.p
          key={slides[current].subtitle}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2}}
          className="mt-4 text-lg md:text-2xl text-gray-200 max-w-2xl"
        >
          {slides[current].subtitle}
        </motion.p>

        {/* CTA Buttons (reusable component) */}
        <div className="mt-8 flex gap-4">
          <Button text="Watch Live" inverted   />
          <Button text="Become a Member"  />

        </div>
      </div>
    </section>
  );
}


