'use client'

import React from "react"
import HeroStatic from "@/components/ui/HeroStatic"
import { motion } from "framer-motion"
import { fetchRecordingsByKeyword, MixlrRecording } from "../../../../lib/mixlr"
import RecordingGallery from "@/components/ui/RecordingGallery"



export default async function SchoolOfTheSpiritPage() {
    const feedUrl = 'https://apicdn.mixlr.com/rss-feeds/3017'

    const tuesdayRecordings = await fetchRecordingsByKeyword(feedUrl, 'School of the Spirit', "School-of-the-Spirit")

    return (
        <div>
            {/* Hero */}
            <HeroStatic title="School of the Spirit" subtitle="Deepen Your Spiritual Walk on Tuesdays" img="/school-of-spirit.jpg" />

            {/* Content */}
            <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <motion.h2
                    className="text-3xl font-extrabold text-gray-900 mb-4 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    School of the Spirit
                </motion.h2>

                <RecordingGallery recordings={tuesdayRecordings} imageUrl="/school-of-spirit.jpg" />
            </section>
        </div>
    )
}