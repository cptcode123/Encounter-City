'use client'
import { motion } from "framer-motion";
import HeroStatic from "@/components/ui/HeroStatic";
import { Rocket, Eye } from "lucide-react";


export default function AboutPage() {
    return (
        <div className="w-[100%] mx-auto">
            <div className="w-[100%] h-auto">
                <HeroStatic title="About Us" subtitle="Learn more about The Encounter City Christian Centre" image="/landscape-2.jpg"/>
            </div>
            <div className="w-full flex flex-col items-center justify-stretch py-20 mx-auto gap-20">
                <section className="flex flex-col md:flex-row w-full gap-8 p-10 bg-primary shadow-lg" id='mission' >
                    <div className="order-1 flex flex-col gap-3 md:w-[40%] items-center justify-center my-10">
                        <div className="mx-auto my-2 p-6 bg-primary rounded-full shadow-2xl text-primary-dark border-8 border-primary-dark"><Rocket size={120}/></div>
                    </div>
                    <div className="order-2 text-center md:w-[60%] mx-10 flex flex-col items-center gap-5">
                        <h2 className="text-4xl font-extrabold mx-auto mt-15 text-[#CCb3E6]">Our Mission</h2>
                        <p className="text-xl leading-relaxed text-bold text-wrap text-[#CCb3E6]">
                            Our mission is to be a vibrant and inclusive community of believers, dedicated to sharing the love of Christ and making a positive impact in our city and beyond.
                        </p>
                    </div>
                </section>
                <section className="flex flex-col md:flex-row w-full my-5 gap-8 p-10 bg-primary shadow-lg" id='mission' >
                    <div className="order-1 md:order-2 flex flex-col gap-3 md:w-[40%] items-center justify-center my-10">
                        <div className="mx-auto my-2 p-6 bg-primary rounded-full shadow-2xl text-primary-dark border-8 border-primary-dark"><Eye size={120}/></div>
                    </div>
                    <div className="order-2 md:order-1 text-center md:w-[60%] mx-10 flex flex-col items-center gap-5">
                        <h2 className="text-4xl font-extrabold mx-auto mt-15 text-[#CCb3E6]">Our Vision</h2>
                        <p className="text-xl leading-relaxed text-bold text-wrap text-[#CCb3E6]">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque harum assumenda, doloribus ab nobis nesciunt id animi necessitatibus labore omnis sit adipisci, delectus et aliquid laudantium est porro pariatur. Temporibus!
                        </p>
                    </div>
                </section>
            </div>
            
        </div>
    )
}