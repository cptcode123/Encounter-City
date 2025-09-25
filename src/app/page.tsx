'use client'
import { div } from "framer-motion/client";
import Image from "next/image";
import HeroCarousel from "../components/ui/HeroCarousel";
import Accordion from "@/components/ui/Accordion";
import { title } from "process";

export default function Home() {
  return (
    <>
      <HeroCarousel slides={[ 
    {  title: "Welcome to The Encounter City Christian Center",
      subtitle: "Where lives are transformed in Christ’s presence.",
      image: "/landscape-1.jpg"
    },
    {
      title: "Worship. Word. Encounter.",
      subtitle: "Join us in vibrant worship and deep teaching.",
      image: "/landscape-2.jpg",
    },
    {
      title: "A Family in Christ",
      subtitle: "Experience love, growth, and community.",
      image: "/rect-img-6.jpg",
    }]} />
      <div className="w-[80%] flex flex-col mx-auto my-10 gap-0 bg-surface">

      </div>
    </>
  );
}
