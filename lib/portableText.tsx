import { PortableTextComponents } from '@portabletext/react'
import Image from 'next/image'
import { urlFor } from '@/sanity/lib/image'

export const portableTextComponents: PortableTextComponents = {
  types: {
    image: ({ value }) => {
      // TypeScript: value is any, but you can type it more strictly if you have your schema
      const imgUrl = urlFor(value.asset).width(800).url()
      return (
        <Image 
          src={imgUrl}
          alt={value.alt || ''}
          width={800}
          height={600}
          style={{
            display: 'block',
            aspectRatio:'4/3',
          }}
          loading="lazy"
        />
      )
    },
  },
}