"use client";

import { Play } from "lucide-react";
import Image from "next/image";

type ServiceCardProps = {
  title: string;
  image: string;
  onClick?: () => void;
  href?: string;
};

export  function ServiceCard({ title, image, onClick, href }: ServiceCardProps) {
  const Wrapper = href ? "a" : "div";

  return (
    <Wrapper
      href={href}
      onClick={onClick}
      className="relative group rounded-2xl overflow-hidden shadow-lg cursor-pointer"
    >
      <Image
        src={image}
        alt={title}
        className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
      />

      {/* Overlay for readability */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
        <h3 className="text-white text-lg font-semibold">{title}</h3>
      </div>
    </Wrapper>
  );
}



type RecordingCardProps = {
  title: string;
  image: string;
  onClick: () => void;
};

export function RecordingCard({ title, image, onClick }: RecordingCardProps) {
  return (
    <div
      className="relative rounded-xl overflow-hidden shadow-lg h-64 w-full bg-cover bg-center cursor-pointer group"
      style={{ backgroundImage: `url(${image})` }}
      onClick={onClick}
    >
      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition"></div>

      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
        <Play size={48} className="text-white" />
      </div>

      <div className="absolute bottom-0 left-0 w-full bg-black/50 text-white p-2">
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
    </div>
  );
}

