import { title } from 'process';
import Parser from 'rss-parser';

const parser = new Parser();

export type MixlrRecording = {
    title: string;
    description?: string;
    link: string;
    pubDate: string;
    audioUrl: string;
    imageUrl?: string;
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
            audioUrl: item.enclosure?.url || "",
            imageUrl: item.image?.url || "" 
        }));

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

    return allRecordings.filter((item) => item.title?.toLowerCase().includes(keyword.toLowerCase()))
    .map((item) => ({
      title: item.title || "Untitled",
      pubDate: item.pubDate || "",
      audioUrl: item.audioUrl || "",
      imageUrl:
        (item as any).itunesImage?.["@_href"] ||
        item.imageUrl ||
        "/default-cover.jpg",
      link: item.link || "",
    }));
}