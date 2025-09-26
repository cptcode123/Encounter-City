'use client'
import { div } from "framer-motion/client";
import Image from "next/image";
import HeroCarousel from "../components/ui/HeroCarousel";
import Accordion from "@/components/ui/Accordion";
import { title } from "process";
import Button from "@/components/ui/Button";
import NewsCarousel from "@/components/ui/NewsCarousel";
import { churchNews } from '@/components/news'

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
      
      {/* About Us section with CTA leading to about us page */}
      <section id="about-section" className="w-full bg-primary-dark bg-fixed py-20">
        <div className="w-[80%] flex flex-row gap-7 justify-between mx-auto px-10">
          <div className="flex flex-col gap-8 w-[40%]">
            <h1 className="text-4xl font-bold text-white"> You are welcome here</h1>
            <p className="text-lg text-gray-300 text-wrap mb-10">At Encounter City, we believe in the transformative power of Christ's love. Join us as we worship, learn, and grow together in faith.</p>
            <Button text="Join our Family" href="/member"/>
          </div>
          <div>
            <img src="/rect-img-6.jpg" alt="" />
          </div>
        </div>

      </section>

      {/* News Section with CTA  leading to blog */}
      <section className="w-full flex flex-col  text-center py-4 pt-10">
        <h1 className="mt-5 text-3xl font-bold text-primary-dark"> Here's what we've been up to</h1>

        <div className="w-full mx-auto my-10 bg-gray-300 pb-10 ">
          <NewsCarousel cards={churchNews} />
        </div>

      </section>

      {/* Community section leading to member page */}

      {/* Counselling section with CTA button leading to contact page */}

      {/* Leaders section with cta leading to leaders page */}


    </>
  );
}
