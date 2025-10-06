import { log } from 'console';
import { filter } from 'framer-motion/client';
import { title } from 'process';
import Parser from 'rss-parser';

const parser = new Parser();

export type MixlrRecording = {
    title: string;
    description?: string;
    link: string;
    pubDate: string;
    serviceType?: "Encounter-God-Service" | "School-of-the-Spirit" | "A-time-to-contend"

};

// Fetch and parse the RSS feed

export async function fetchMixlrRecordings(feedUrl: string): Promise<MixlrRecording[]> {
    // TODO: Implement fetching and parsing logic here
    
    try {
        const feed = await parser.parseURL(feedUrl);

        const recordings: MixlrRecording[] = feed.items.map((item: any)  => ({
            title: item.title || "Untitled",
            description: item.contentSnippet || "",
            link: item.link || "",
            pubDate: item.pubDate || "",
        }));

        console.log("Successfully collected ", recordings.length, " recordings")
        return recordings;   
    } catch (error) {
        console.error("Error fetching or parsing the RSS feed:", error);
        return [];
    }
}

// Filter recordings by keywords:

export async function fetchRecordingsByKeyword(
    feedUrl: string,
    keyword: string,
    serviceType: "Encounter-God-Service" | "School-of-the-Spirit" | "A-time-to-contend"
): Promise<MixlrRecording[]> {
    const allRecordings = await fetchMixlrRecordings(feedUrl);


    const filteredRecordings = allRecordings.filter((item) => item.title?.toLowerCase().includes(keyword.toLowerCase()))
    .map((item) => ({
      title: item.title || "Untitled",
      pubDate: item.pubDate || "",
      link: item.link || "",
    }));

    console.log("Successfully fetched recordings: ", filteredRecordings)
    return filteredRecordings
}