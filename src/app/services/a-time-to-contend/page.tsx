import React from "react"
import HeroStatic from "@/components/ui/HeroStatic"
import MediaCard from "@/components/ui/MediaCard"
import { fetchRecordingsByKeyword } from "../../../../lib/mixlr"
import { getPageData } from "../../../../lib/data"


export default async function EncounterServicePage() {
    const pageData = await getPageData('a-time-to-contend');
    const feedUrl = "https://apicdn.mixlr.com/rss-feeds/3017"

    const recordings = fetchRecordingsByKeyword(feedUrl,"contend")
   
    return (
        <div>
            {/* Hero */}
            <HeroStatic title={pageData.hero.title} subtitle={pageData.hero.subtitle} image={pageData.hero.image} />

            {/* Content */}
            <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col justify-center">
                <h1 className="text-bold text-4xl text-primary mx-auto my-4">{pageData.content.title}</h1>
                <p className="text-lg text-text text-center mb-3">{pageData.content.description}</p>

                <div id='gallery' className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
                    {(await recordings).map((recording, index) => (
                        <MediaCard key={index} title={`${recording.title} - ${recording.pubDate}`} link={recording.link} />
                    ))}

                </div>
            </section>
        </div>
    )
}