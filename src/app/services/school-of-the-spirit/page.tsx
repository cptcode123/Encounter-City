
import React from "react"
import HeroStatic from "@/components/ui/HeroStatic"
import { motion } from "framer-motion"
import { fetchRecordingsByKeyword } from "../../../../lib/mixlr"
import MediaCard from "@/components/ui/MediaCard"



export default async function SchoolOfTheSpiritPage() {
    const feedUrl = 'https://apicdn.mixlr.com/rss-feeds/3017'

    const recordings = await fetchRecordingsByKeyword(feedUrl, 'school', "School-of-the-Spirit")

    return (
        <div>
            {/* Hero */}
            <HeroStatic title="School of the Spirit" subtitle="Deepen Your Spiritual Walk on Tuesdays" image="/school-of-spirit.jpg" />

            {/* Content */}
            <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col justify-center">
                <h1 className="text-bold text-4xl text-primary mx-auto my-4">School of the Spirit</h1>
                <p className="text-lg text-text text-center mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam atque, tempora temporibus vel optio omnis enim, cum inventore dignissimos iste deleniti incidunt quisquam a aperiam obcaecati, pariatur ex nostrum sint.</p>
                
                <div id='gallery' className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
                    {(await recordings).map((recording, index) => (
                        <MediaCard key={index} title={recording.title} link={recording.link} />
                    ))}

                </div>

            </section>
        </div>
    )
}