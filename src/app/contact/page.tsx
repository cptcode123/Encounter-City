'use client'
import Button from "@/components/ui/Button";
import { motion } from "framer-motion";
import { House, Phone, Mail } from "lucide-react";
import HeroStatic from "@/components/ui/HeroStatic";



export default function ContactPage() {

    return (
        <div className="min-h-screen bg-bg text-text ">
            {/* Hero Section */}
            <HeroStatic image="/rect-img-1.jpg" title="Get in Touch with Us" subtitle="Whether you have a question, prayer request, or want to visit, we're here for you"/>
            {/* Contact Info + Form */}
            <section className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto px-6 py-12">

                {/* Contact Info */}
                <div className="space-y-4 order-2 flex flex-col ml-10 gap-15" >

                    <motion.div 
                    initial={{opacity:0, y:-20}}
                    whileInView={{opacity:1, y:0}}
                    transition={{duration:0.8}}
                    >
                    <h1 className="text-3xl font-bold mb-6">Contact Information</h1>
                    </motion.div>
                    <motion.div
                    initial={{opacity:0, y:-20}}
                    whileInView={{opacity:1, y:0}}
                    transition={{duration:0.8}}
                    className="flex items-center gap-8 text-3xl text-nowrap">
                        <House className="w-15 h-15 text-primary shrink-0" />
                        <span>123 Encounter Street, Lagos, Nigeria</span>
                    </motion.div>

                <motion.div
                    initial={{opacity:0, y:-20}}
                    whileInView={{opacity:1, y:0}}
                    transition={{duration:0.8}}
                    className="flex items-center gap-8 text-3xl text-nowrap">
                    <Mail className="w-15 h-15 text-primary shrink-0" />
                    <a href="mailto:info@encountercity.org" className="hover:text-primary-dark">
                    info@encountercity.org
                    </a>
                </motion.div>

                <motion.div
                    initial={{opacity:0, y:-20}}
                    whileInView={{opacity:1, y:0}}
                    transition={{duration:0.8}}
                    className="flex items-center gap-8 text-3xl text-nowrap">
                    <Phone className="w-15 h-15 text-primary shrink-0" />
                    <a href="tel:+2348000000000" className="hover:text-primary-dark">
                    +234 800 000 0000
                    </a>
                </motion.div>

                </div>

                {/* Contact Form */}
                <div> 
                    <h1 className="text-3xl font-bold pl-6">Get in Touch</h1>
                <motion.form className="space-y-6 order-1 bg-bg p-6 rounded-xl shadow-md" id="send"
                initial={{opacity:0, y:-20}}
                whileInView={{opacity:1, y:0}}
                transition={{duration:0.8}}>
                    <div className="grid md:grid-cols-2 gap-4">
                    <input 
                    type="text"
                    placeholder="Your Name" 
                    required
                    className="w-full p-3 rounded-md text-text inset-shadow-sm dark:inset-shadow-primary-dark"/>
                     <input
                    type="email"
                    placeholder="Your Email"
                    required
                    className="w-full p-3 rounded-md text-text inset-shadow-sm dark:inset-shadow-primary-dark"
                />
                </div>
                <input
                    type="text"
                    placeholder="Subject"
                    className="w-full p-3 rounded-md inset-shadow-sm dark:inset-shadow-primary-dark"
                />
                <textarea
                    placeholder="Message"
                    rows={5}
                    required
                    className="w-full p-3 rounded-md inset-shadow-sm dark:inset-shadow-primary-dark"
                />
                <button type='submit'></button>



                </motion.form>
                </div>
            </section>


            {/* Google Map */}
            <div className="mapouter relative text-center w-full h-[400px] flex justify-center">
                <div className="gmap_canvas overflow-hidden bg-none w-full h-[400px]">
                    <iframe className="gmap_iframe w-full h-[400px]" frameBorder={0} marginHeight={0} marginWidth={0} src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=Hotel Ibis Royal Ajao Estate&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
                </div>
            </div>
        </div>
    );
}