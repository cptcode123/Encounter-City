'use client'
import HeroStatic from "@/components/ui/HeroStatic"
import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { ServiceCard } from "@/components/ui/Card"
import { ServicesPageData, ServiceItem } from "../../../lib/types"



export default function MinistryPage() {
    const [pageData, setPageData] = useState<ServicesPageData | null>(null);

    useEffect(() => {
        fetch('/api/content?page=services')
            .then(res => res.json())
            .then(setPageData)
            .catch(err => console.error('Failed to fetch page data:', err));
    }, []);

    if (!pageData) return null;

    const services = pageData.services;

    return (
        <div>
            {/* Hero */}
            <HeroStatic title={pageData.hero.title} subtitle={pageData.hero.subtitle} image={pageData.hero.image}/>

            {/* Section Grid */}
            <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div>
                    <motion.h2
                        className="text-3xl font-extrabold text-gray-900 mb-4 text-center"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        {pageData.sectionTitle}
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Service Cards */}
                    {services.map((service: ServiceItem, index: number) => (
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