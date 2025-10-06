'use client'
import Image from "next/image";
import HeroCarousel from "../components/ui/HeroCarousel";

import Button from "@/components/ui/Button";
import NewsCarousel from "@/components/ui/NewsCarousel";
import { churchNews } from '../../lib/news'

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
      <section id="about-section" className="w-full bg-primary-dark bg-fixed py-20 mt-30">
        <div className="w-[80%] flex flex-col md:flex-row gap-7 justify-between mx-auto px-10 min-w-48">
          <div className="flex flex-col gap-8 w-full md:w-[50%] order-2" >
            <h1 className="text-4xl font-bold text-white"> You are welcome here</h1>
            <p className="text-lg text-gray-300 text-wrap mb-3">At Encounter City, we believe in the transformative power of Christ love. Join us as we worship, learn, and grow together in faith.</p>

            <div className=" flex justify-center md:align-left md:w-[30%]"><Button text="Join our Family" href="/member"/></div>
            
          </div>
          <div className="order-1 md:order-2">
            <Image src="/rect-img-6.jpg" alt="" />
          </div>
        </div>

      </section>

      {/* News Section with CTA  leading to blog */}
      <section className="w-full flex flex-col  text-center py-4 pt-10">
        <h1 className="mt-5 text-3xl font-bold text-primary-dark"> Here is what we have been up to</h1>

        <div className="w-full mx-auto my-10 bg-gray-300 pb-10">
          <NewsCarousel cards={churchNews} />
        </div>

      </section>

      
      {/* Counselling section with CTA button leading to contact page */}
      <section className="w-full mt-20 bg-gray-300">
    

      </section>

      {/* Leaders section with cta leading to leaders page */}


      {/* Community section leading to member page */}
      <section className=" relative w-full flex text-white py-10 pt-10 bg-[url(/rect-img-1.jpg)] bg-fixed bg-cover my-10 z-0">

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-primary-dark to-transparent pointer-events-none"/>

      {/* Content */}
        <div className="relative flex flex-col gap-10 w-full text-center md:text-left md:w-[60%] md:px-20">

          <h1 className="text-4xl font-bold">We are a community </h1>

          <p className="w-[95%]">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi, asperiores assumenda. Facere ut ad pariatur sint animi quibusdam, sequi mollitia veritatis dolores culpa? Quaerat voluptatem, rerum magnam facere libero quam.</p>

          <div className=" md:align-left md:w-[30%]"><Button text="Join our Community" href="/member" /></div>
          
        </div>


      </section>

      <section className="w-full flex flex-col justify-center mx-auto text-center" id='live'>
        <h1 className="text-bold text-3xl text-primary my-4">We are Live...</h1>
        <a href="/service/encounter-service" className="text-primary">On Sundays: 9:00AM - 12:00PM</a>
        <a href="/services/school-of-the-spirit" className="text-primary">On Tuesdays: 6:00PM - 8:00PM</a>
        <a href="/services/a-time-to-contend" className="text-primary">Every Monday and Friday Morning: 6:00AM-8:00AM</a>
        <iframe src="https://theencountercity.mixlr.com/embed" frameBorder="0" scrolling="no" height="200px" width="100%" className="mt-3"></iframe>
      </section>

    </>
  );
}
