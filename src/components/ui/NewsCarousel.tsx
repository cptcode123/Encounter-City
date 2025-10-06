"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";

type NewsCard = {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  slug: string; // for linking to blog pages later
};

interface Props {
  cards: NewsCard[];
}

export default function NewsCarousel({ cards }: Props) {
  const [index, setIndex] = useState(0);

  const prev = () => setIndex((i) => (i - 1 + cards.length) % cards.length);
  const next = () => setIndex((i) => (i + 1) % cards.length);

  // visible cards
  const visibleDesktop = [
    cards[(index - 1 + cards.length) % cards.length], // left
    cards[index], // center
    cards[(index + 1) % cards.length], // right
  ];
  const visibleMobile = [cards[index]];

  return (
    <div className="relative w-full flex items-center justify-center">
      {/* Left Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        onClick={prev}
        className="absolute left-2 md:left-8 z-20 p-2 md:p-3 rounded-full bg-gray-100/80 hover:bg-gray-200 shadow"
      >
        <ArrowLeft className="w-5 h-5 md:w-6 md:h-6" />
      </motion.button>

      {/* Cards */}
      <div className="flex items-center justify-center space-x-0 md:space-x-6 h-[22rem] md:h-[26rem] w-full px-10 md:px-20">
        {/* Mobile: 1 card */}
        <div className="block md:hidden w-full flex justify-center">
          {visibleMobile.map((card) => (
            <motion.div
              key={card.id}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="rounded-2xl shadow-lg bg-white w-64 h-80 overflow-hidden"
              whileHover={{ scale: 1.05 }}
            >
              <Image
                src={card.image}
                alt={card.title}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="font-bold text-lg">{card.title}</h3>
                <p className="text-sm text-gray-600 line-clamp-3">
                  {card.excerpt}
                </p>
              </div>
              <a href={`/blog/${card.slug}`} className="absolute inset-0"></a>
            </motion.div>
          ))}
        </div>

        {/* Desktop: 3 cards */}
        <div className="hidden md:flex items-center justify-center space-x-6">
          {visibleDesktop.map((card, i) => {
            const isCenter = i === 1;
            const scale = isCenter ? 1 : 0.85;
            const blur = isCenter
              ? "blur-none opacity-100"
              : "blur-sm opacity-60";
            const zIndex = isCenter ? 10 : 5;

            return (
              <motion.div
                key={card.id}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale, opacity: isCenter ? 1 : 0.6 }}
                transition={{ duration: 0.4 }}
                style={{ zIndex }}
                className={`rounded-2xl shadow-lg bg-white w-56 h-80 md:w-72 md:h-96 overflow-hidden transform ${blur}`}
                whileHover={{ scale: isCenter ? 1.05 : 0.9 }}
              >
                <Image
                  src={card.image}
                  alt={card.title}
                  className="w-full h-32 md:h-40 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-bold text-lg">{card.title}</h3>
                  <p className="text-sm text-gray-600 line-clamp-3">
                    {card.excerpt}
                  </p>
                </div>
                <a href={`/blog/${card.slug}`} className="absolute inset-0"></a>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Right Button */}
      <motion.button
      whileHover={{ scale: 1.1 }}
        onClick={next}
        className="absolute right-2 md:right-8 z-20 p-2 md:p-3 rounded-full bg-gray-100/80 hover:bg-gray-200 shadow"
      >
        <ArrowRight className="w-5 h-5 md:w-6 md:h-6" />
      </motion.button>
    </div>
  );
}