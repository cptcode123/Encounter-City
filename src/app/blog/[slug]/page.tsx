import  { client } from '../../../sanity/lib/client';
import  {groq} from 'next-sanity';
import Image from 'next/image';
import { PortableText, type PortableTextBlock } from '@portabletext/react';
import { urlFor } from '../../../sanity/lib/image';
import { portableTextComponents } from '../../../../lib/portableText';

const query = groq`
*[_type == "post" && slug.current == $slug][0] {
_id,
title,
mainImage,
body,
publishedAt,
"author": author->name,
}
`;

// Type definition for blog post detail
type BlogPostDetail = {
    _id: string;
    title: string;
    mainImage?: {
        asset: {
            _id: string;
            url: string;
        };
        alt?: string;
    };
    body: PortableTextBlock[]; // PortableText content
    publishedAt: string;
    author?: string;
};

export default async function BlogPost({params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = await client.fetch<BlogPostDetail>(query, {slug});

    if (!post) {
        return <div className="text-center py-20">Post not found</div>
    }

     return (
    <article className="max-w-3xl mx-auto py-10 px-4">
      {post.mainImage && (
        <div className="relative w-full h-[400px] mb-6">
          <Image
            src={urlFor(post.mainImage).width(1200).height(800).url()}
            alt={post.title}
            fill
            className="object-cover rounded-xl"
          />
        </div>
      )}

      <h1 className="text-4xl font-bold mb-2">{post.title}</h1>
      <p className="text-gray-500 mb-8">
        {post.author && `By ${post.author}`} • {new Date(post.publishedAt).toLocaleDateString()}
      </p>

      <div className="prose prose-lg max-w-none">
        <PortableText value={post.body} components={portableTextComponents} />

      </div>
    </article>
     );

}