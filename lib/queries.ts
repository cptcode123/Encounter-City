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