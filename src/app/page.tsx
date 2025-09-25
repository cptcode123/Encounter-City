import { div } from "framer-motion/client";
import Image from "next/image";
import HeroCarousel from "../components/ui/HeroCarousel";
import { title } from "process";

export default function Home() {
  return (
    <>
      <HeroCarousel slides={[ 
    {  title: "Welcome to The Encounter City Christian Center",
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
    }]} />
      <div className="w-[80%]">
        
      </div>
    </>
  );
}
