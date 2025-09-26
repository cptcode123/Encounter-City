type NewsCard = {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  slug: string;
};

export const churchNews: NewsCard[] = [
    {
        id:1,
        title: "Community Outreach Program Launched",
        excerpt: "Guess what we're up to in the neighborhood?",
        image: "/rect-img-5.jpg",
        slug: "community-outreach-program-launched"
    },
    {
        id:2,
        title: "New Worship Series Starting This Sunday",
        excerpt: "Join us for a fresh journey in faith and worship.",
        image: "/rect-img-6.jpg",
        slug: "new-worship-series-starting-this-sunday"
    },
    {
        id:3,
        title: "Youth Group Summer Camp Registration Open",
        excerpt: "Exciting adventures and faith-building activities await!",
        image: "/rect-img-2.jpg",
        slug: "youth-group-summer-camp-registration-open"
    },
    {
        id:4,
        title: "Volunteer Opportunities Available",
        excerpt: "Make a difference in our church and community.",
        image: "/rect-img-3.jpg",
        slug: "volunteer-opportunities-available"
    },
    {
        id:5,
        title: "Easter Service Times Announced",
        excerpt: "Celebrate the resurrection with us this Easter!",
        image: "/rect-img-4.jpg",
        slug: "easter-service-times-announced"
    }
]