

import React from "react"
import HeroStatic from "@/components/ui/HeroStatic"
import { motion } from "framer-motion"
import MediaCard from "@/components/ui/MediaCard"


export default function SchoolOfTheSpiritPage() {
   
    return (
        <div>
            {/* Hero */}
            <HeroStatic title="Encounter God Service" subtitle="" image="/logo-purple.jpg" />

            {/* Content */}
            <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <audio controls>
                    <source src="https://mixlr.com/recording_rss_redirect/65428766-4deb-4431-844a-e2c49fd079c2.mp3" type="audio/mpeg"/>
                    Your browser does not support the audio element
                </audio>
            </section>
        </div>
    )
}