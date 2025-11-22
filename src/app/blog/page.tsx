import { client } from "../../sanity/lib/client";
import { allPostsQuery } from "@/../lib/queries";
import React from "react"
import HeroStatic from "@/components/ui/HeroStatic";
import Link from "next/link";
import Image from "next/image";
import { urlFor } from "../../sanity/lib/image";
import { getPageData } from "../../../lib/data";
import { BlogPageData } from "../../../lib/types";
export const revalidate = 60; // Revalidate this page every 60 seconds

// Type definition for blog post based on the query structure
type BlogPost = {
    _id: string;
    title: string;
    slug: {
        current: string;
    };
    publishedAt: string;
    mainImage?: {
        asset: {
            _id: string;
            url: string;
        };
        alt?: string;
    };
    excerpt?: string;
    authorName?: string;
    categories?: string[];
};

export default  async function Blog() {
    const pageData = await getPageData<BlogPageData>('blog');
    const posts = await client.fetch<BlogPost[]>(allPostsQuery);

    return (
        <div>
            <div className="w-full min-h-screen">
                <HeroStatic title={pageData.hero.title} subtitle={pageData.hero.subtitle} image={pageData.hero.image}/>
            </div>

                <main className="min-h-screen bg-gray-50 py-10">
                    <div className="max-w-5xl mx-auto px-4">
                        <h1 className="text-4xl font0bolf mb-10 text-center">
                            {pageData.content.title}
                        </h1>
                        <div className="grid md:grid-cols gap-8">
                            {posts.map((post) => (
                                <Link href={`/blog/${post.slug.current}`} key={post._id} className="rounded-xl overflow-hidden bg-white shadow hover:shadow-lg transition-all duration-300">
                                    {post.mainImage && (
                                        <div className=" relative w-full h-56">
                                            <Image
                                            src={urlFor(post.mainImage).width(800).height(600).url()}
                                            alt={post.mainImage.alt || post.title}
                                            fill
                                            className="object-cover"
                                            />
                                        </div>
                                    )}
                                    <div className="p-4">
                                        <h2 className="font-semibold text-lg mb-2 text-primary">{post.title}</h2>
                                        <p className="text-gray-600 text-s line-clamp-2 mb-3">
                                            {post.excerpt}
                                        </p>
                                        <p className="text-xs text-gray-400">
                                            {new Date(post.publishedAt).toLocaleDateString()}{post.authorName && ` • ${post.authorName}`}
                                        </p>
                                    </div>
                                    
                                </Link>
                            ))}
                        </div>
                    </div>

                </main>
         </div>
    )
}   