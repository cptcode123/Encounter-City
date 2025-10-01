'use client'
import { motion } from "framer-motion";
import HeroStatic from "@/components/ui/HeroStatic";
import { Rocket, Eye, Church, HeartHandshake, PersonStanding, Heart } from "lucide-react";
import { div } from "framer-motion/client";


export default function AboutPage() {

    const values = [
        {
            name:'Love God',
            icon: Heart,
        },
        {
            name:'Love people',
            icon: PersonStanding,
        },
        {
            name:'Service to others',
            icon:HeartHandshake
        }
    ]

    const leadership = [
        {
            name: 'Pastor John Doe',
            role: 'Lead Pastor',
            image: '/leader1.jpg',
            bio: 'John has been leading our church for over 10 years with a passion for community and faith.'
        },
        {
            name: 'Pastor Jane Smith',
            role: 'Associate Pastor',
            image: '/leader2.jpg',
            bio: 'Jane is dedicated to youth ministry and helping the next generation grow in their faith.'
        },
        {
            name: 'Elder Mike Johnson',
            role: 'Church Elder',
            image: '/leader3.jpg',
            bio: 'Mike has been a guiding presence in our church for many years, offering wisdom and support to both leaders and congregants.'
        }
    ]

    return (
        <div className="w-[100%] mx-auto">
            <div className="w-[100%] h-auto">
                <HeroStatic title="About Us" subtitle="Learn more about The Encounter City Christian Centre" image="/landscape-2.jpg"/>
            </div>
            <div className="w-full flex flex-col items-center justify-stretch py-20 mx-auto gap-20">
                <section className="flex flex-col md:flex-row w-full gap-8 p-15 bg-primary shadow-lg " id='mission' >
                    <div className="order-1 flex flex-col gap-3 md:w-[40%] items-center justify-center py-10">
                        <div className="mx-auto my-2 p-6 bg-primary rounded-full shadow-2xl text-primary-dark border-8 border-primary-dark"><Rocket size={120}/></div>
                    </div>
                    <div className="order-2 text-center md:w-[60%] mx-10 flex flex-col items-center gap-5 py-10">
                        <h2 className="text-4xl font-extrabold mx-auto mt-15 text-[#CCb3E6]">Our Mission</h2>
                        <p className="text-xl leading-relaxed text-bold text-wrap text-[#CCb3E6]">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima quaerat nobis assumenda tempora voluptas ut iusto quidem qui animi? Illum, odit. Iusto quidem sunt quod dolor distinctio consequatur perspiciatis consectetur.
                        </p>
                    </div>
                </section>
                <section className="flex flex-col md:flex-row w-full my-5 gap-8 p-15 bg-primary shadow-lg" id='vision' >
                    <div className="order-1 md:order-2 flex flex-col gap-3 md:w-[40%] items-center justify-center py-10">
                        <div className="mx-auto my-2 p-6 bg-primary rounded-full shadow-2xl text-primary-dark border-8 border-primary-dark"><Eye size={120}/></div>
                    </div>
                    <div className="order-2 md:order-1 text-center md:w-[60%] mx-10 flex flex-col items-center gap-5 py-10">
                        <h2 className="text-4xl font-extrabold mx-auto mt-15 text-[#CCb3E6]">Our Vision</h2>
                        <p className="text-xl leading-relaxed text-bold text-wrap text-[#CCb3E6]">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque harum assumenda, doloribus ab nobis nesciunt id animi necessitatibus labore omnis sit adipisci, delectus et aliquid laudantium est porro pariatur. Temporibus!
                        </p>
                    </div>
                </section>
                <section className="flex flex-col md:flex-row w-full my-5 gap-8 p-15 bg-primary shadow-lg" id='ministry' >
                    <div className="order-1 flex flex-col gap-3 md:w-[40%] items-center justify-center py-10">
                        <div className="mx-auto my-2 p-6 bg-primary rounded-full shadow-2xl text-primary-dark border-8 border-primary-dark"><Church size={120}/></div>
                    </div>
                    <div className="order-2 text-center md:w-[60%] mx-10 flex flex-col items-center gap-5 py-10">
                        <h2 className="text-4xl font-extrabold mx-auto mt-15 text-[#CCb3E6]">Our Ministry</h2>
                        <p className="text-xl leading-relaxed text-bold text-wrap text-[#CCb3E6]">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque harum assumenda, doloribus ab nobis nesciunt id animi necessitatibus labore omnis sit adipisci, delectus et aliquid laudantium est porro pariatur. Temporibus!
                        </p>
                    </div>
                </section>

                <section className=" flex flex-col gap-8 p-15 bg-primary w-full my-5 align-center">
                    <h1 className="text-4xl font-extrabold mx-auto mt-15 text-[#CCb3E6] text-center">Our Core Values</h1>
                    
                    <div className="flex flex-col md:flex-row gap-20 p-10 w-full justify-center items-center">
                         {values.map(({name, icon: Icon}, key ) => (
                            <div key={key} className="flex flex-col items-center justify-center gap-5">
                            <div className="mx-auto my-2 p-6 bg-primary rounded-full shadow-2xl text-primary-dark border-8 border-primary-dark">
                                <Icon size={120}/>
                            </div>
                            <h3 className="text-2xl font-bold text-[#CCb3E6]">{name}</h3>   
                            </div>                 
                    ))}
                                             
                    </div>
                </section>
                <section className=" flex flex-col gap-8 p-15 bg-primary w-full my-5 align-center" id='leadership'>
                    <h1 className="text-4xl font-extrabold mx-auto mt-15 text-[#CCb3E6] text-center">Our Leadership</h1>
                    <div className="flex flex-col md:flex-row gap-20 p-10 w-full justify-center items-center">
                        {leadership.map(({name, role, image, bio}, key) => (
                            <div key={key} className="flex flex-col items-center justify-center gap-5">
                                <div className="mx-auto my-2 p-6 bg-primary rounded-full shadow-2xl text-primary-dark border-8 border-primary-dark">
                                    <img src={image} alt={name} className="w-32 h-32 rounded-full"/>
                                </div>
                                <h3 className="text-2xl font-bold text-[#CCb3E6]">{name}</h3>
                                <p className="text-lg text-[#CCb3E6]">{role}</p>
                                <p className="text-md text-center text-[#CCb3E6]">{bio}</p>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
            
        </div>
    )
}