'use client'
import { motion } from "framer-motion";
import { House, Phone, Mail, Contact } from "lucide-react";
import HeroStatic from "@/components/ui/HeroStatic";
import ContactForm from "@/components/ui/ContactForm";
import { getPageData } from "../../../lib/data";
import { useEffect, useState } from "react";

const iconMap: Record<string, any> = {
    House,
    Phone,
    Mail,
    Contact,
};

export default function ContactPage() {
    const [pageData, setPageData] = useState<any>(null);

    useEffect(() => {
        getPageData('contact').then(setPageData);
    }, []);

    if (!pageData) return null;

    const AddressIcon = iconMap[pageData.contactInfo.address.icon];
    const EmailIcon = iconMap[pageData.contactInfo.email.icon];
    const PhoneIcon = iconMap[pageData.contactInfo.phone.icon];

    return (
        <div className="min-h-screen bg-bg text-text w-full">
            {/* Hero Section */}
            <HeroStatic image={pageData.hero.image} title={pageData.hero.title} subtitle={pageData.hero.subtitle}/>
            {/* Contact Info + Form */}
            <section className="flex flex-col gap-12 max-w-6xl mx-auto px-6 py-12">

                {/* Contact Info */}
                <div className=" order-1 flex flex-col  gap-15" >

                    <motion.div 
                    initial={{opacity:0, y:-20}}
                    whileInView={{opacity:1, y:0}}
                    transition={{duration:0.8}}
                    >
                    <h1 className="text-3xl font-bold mb-6">{pageData.contactInfo.title}</h1>
                    </motion.div>
                    <motion.div
                    initial={{opacity:0, y:-20}}
                    whileInView={{opacity:1, y:0}}
                    transition={{duration:0.8}}
                    className="flex items-center gap-2 text-3xl text-wrap">
                        <AddressIcon className="w-15 h-15 text-primary shrink-0" />
                        <span>{pageData.contactInfo.address.text}</span>
                    </motion.div>

                <motion.div
                    initial={{opacity:0, y:-20}}
                    whileInView={{opacity:1, y:0}}
                    transition={{duration:0.8}}
                    className="flex items-center gap-2 text-3xl text-wrap">
                    <EmailIcon className="w-15 h-15 text-primary shrink-0" />
                    <a href={pageData.contactInfo.email.href} className="hover:text-primary-dark wrap-anywhere">
                    {pageData.contactInfo.email.text}
                    </a>
                </motion.div>

                <motion.div
                    initial={{opacity:0, y:-20}}
                    whileInView={{opacity:1, y:0}}
                    transition={{duration:0.8}}
                    className="flex items-center gap-2 text-3xl text-wrap">
                    <PhoneIcon className="w-15 h-15 text-primary shrink-0" />
                    <a href={pageData.contactInfo.phone.href} className="hover:text-primary-dark">
                    {pageData.contactInfo.phone.text}
                    </a>
                </motion.div>

                </div>

                {/* Contact Form */}
                <ContactForm />
            </section>


            {/* Google Map */}
            <div className="mapouter relative text-center w-full h-[400px] flex justify-center">
                <div className="gmap_canvas overflow-hidden bg-none w-full h-[400px]">
                    <iframe className="gmap_iframe w-full h-[400px]" frameBorder={0} marginHeight={0} marginWidth={0} src={pageData.map.src}></iframe>
                </div>
            </div>
        </div>
    );
}