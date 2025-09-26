"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

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

  // get visible cards (left, center, right)
  const visible = [
    cards[(index - 1 + cards.length) % cards.length], // left
    cards[index], // center
    cards[(index + 1) % cards.length], // right
  ];

  return (
    <div className="relative w-[80%]  mx-auto flex flex-row items-center justify-center gap-15">

        {/* Previous button */}
        <button
          onClick={prev}
          className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 shadow order-1"
        >
          <ArrowLeft />
        </button>
        
      {/* Card row */}
      <div className="flex items-center justify-between space-x-6 h-[26rem] order-2">
        {visible.map((card, i) => {
          const isCenter = i === 1;
          const scale = isCenter ? 1 : 0.85;
          const blur = isCenter ? "blur-none opacity-100" : "blur-sm opacity-60";
          const zIndex = isCenter ? 10 : 5;

          return (
            <motion.div
              key={card.id}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale, opacity: isCenter ? 1 : 0.6 }}
              transition={{ duration: 0.4 }}
              style={{ zIndex }}
              className={`rounded-2xl shadow-lg bg-white w-72 h-96 overflow-hidden transform ${blur} flex flex-col gap-5`}
              whileHover={{ scale: isCenter ? 1.05 : 0.9 }}
            >
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="font-bold text-lg mb-5">{card.title}</h3>
                <p className="text-sm text-gray-600">{card.excerpt}</p>
              </div>
              <a href={`/blog/${card.slug}`} className="bg-primary-dark text-white py-2 px-4 w-full"> Learn More</a>
            </motion.div>
          );
        })}
      </div>

      {/* Controls */}
        
        <button
          onClick={next}
          className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 shadow order-3"
        >
          <ArrowRight />
        </button>
    </div>
  );
}