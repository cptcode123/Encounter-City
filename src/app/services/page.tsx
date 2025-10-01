'use client'
import HeroStatic from "@/components/ui/HeroStatic"
import { div, sub } from "framer-motion/client"
import React from "react"
import { motion } from "framer-motion"
import { ServiceCard } from "@/components/ui/Card"



export default function MinistryPage() {

    const services = [
        {
            title: "Encounter God Service",
            subtitle: "Weekly Sunday Worship and Teaching",
            description: "Join us every Sunday at 9 AM for a powerful time of worship, teaching, and encountering the presence of God. Our services are designed to inspire and equip you for your spiritual journey.",
            img: "/logo-purple.jpg",
            href: "/services/encounter-service",
        },
        {
            title: "School of the Spirit",
            subtitle: "Deepen Your Spiritual Walk on Tuesdays",
            description: "Join us every Tuesday at 6 PM for an immersive experience in the Word and Spirit. This service is designed to help you grow in your faith and understanding of God's voice.",
            img: "/school-of-spirit.jpg",
            href: "/services/school-of-the-spirit",
        },
        {
            title: "Encounter Room & A Time to Contend",
            subtitle: "Prayer and the word on Tuesdays and Fridays",
            description: "Join us every Tuesday and Friday at 6am for a dedicated time of intercessory prayer. This service is focused on seeking God's intervention and breakthrough in our lives and communities.",
            img: "/encounter-room.jpg",
            href: "/services/a-time-to-contend",
        }
    ];


    return (
        <div>
            {/* Hero */}
            <HeroStatic title="Our Services" subtitle='Discover what the Lord has enabled us to offer' image='/landscape-1.jpg'/>

            {/* Section Grid */}
            <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div>
                    <motion.h2
                        className="text-3xl font-extrabold text-gray-900 mb-4 text-center"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        Our Services
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Service Cards */}
                    {services.map((service, index) => (
                        <ServiceCard
                            key={index}
                            title={service.title}
                            image={service.img}
                            href={service.href}
                        />
                    ))}
                </div>
            </section>
        </div>
    )
}