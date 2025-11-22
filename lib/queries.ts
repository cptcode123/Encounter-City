import { groq } from "next-sanity";

export const allPostsQuery = groq`
    *[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    publishedAt,
    mainImage{
    asset->{
    _id,
    url
    }
    },
    excerpt,
    "authorName": author->name,
    "categories": categories[]->title,
    }
`;

export const newsPostsQuery = groq`
    *[_type == "post" && "news" in categories[]->title] | order(publishedAt desc) [0...3] {
    _id,
    title,
    slug,
    publishedAt,
    mainImage{
    asset->{
    _id,
    url
    }
    },
    excerpt,
    "authorName": author->name,
    "categories": categories[]->title,
    }
`;