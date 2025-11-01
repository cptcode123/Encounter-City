import { client } from "@/sanity/lib/client";
import { allPostsQuery } from "@/../lib/queries";
import React from "react"
import HeroStatic from "@/components/ui/HeroStatic";
import Link from "next/link";
import Image from "next/image";
import { urlFor } from "../../../lib/sanity.image";
export const revalidate = 60; // Revalidate this page every 60 seconds



export default  async function Blog() {
    const posts = await client.fetch(allPostsQuery);

    return (
        <div>
            <div className="w-full min-h-screen">
                <HeroStatic title="Words from our Pastor" subtitle="Encouragement and Inspiration straight from God to You via His Word" image="/landscape-2.jpg"/>
            </div>

                <main className="min-h-screen bg-gray-50 py-10">
                    <div className="max-w-5xl mx-auto px-4">
                        <h1 className="text-4xl font0bolf mb-10 text-center">
                            Our Blog
                        </h1>
                        <div className="grid md:grid-cols gap-8">
                            {posts.map((post:any) => (
                                <Link href={`/blog/${post.slug.current}`} key={post._id} className="rounded-xl overflow-hidden bg-white shadow hover:shadow-lg transition-all duration-300">
                                    {post.mainImage && (
                                        <div className=" relative w-full h-56">
                                            <Image
                                            src={urlFor(post.mainImage).width(800).height(600).url()}
                                            alt={post.mainImage.alt}
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
                                            {new Date(post.publishedAt).toLocaleDateString()} • {post.author}
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