import React from 'react'
import Button from './Button'


interface HeroStaticProps {
    img:string;
    title:string;
    subtitle?:string;
    side?:boolean;
}

const HeroStatic = ({ img, title, subtitle, side }: HeroStaticProps) => {
  return (
            <section className="relative w-full z-0">
                {/* Background Image */}
                <div className="absolute inset-0 -z-10">
                    <img src={img} alt="Contact Hero Background" className="w-full h-full object-cover"   />
                    {/* Overlay */}
                <div className="absolute inset-0 bg-primary/80" />
                </div>
                

                {/* Content */}
                <div className={`relative px-10 py-16  items-center w-full h-[700px] text-white z-10 ${ side ? 'grid md:grid-cols-2 gap-10' : 'flex items-center justify-center'}`}>
                    {/* Text */}
                    <div className="order-2 md:order-1">
                        <h1 className="text-5xl font-extrabold leading-tight mb-4 text-secondart">{title}</h1>
                    {subtitle && <p className="text-lg-muted mb-15 text-wrap">
                        {subtitle}
                    </p>}
                    </div>

                    {/* Image */}
                    {side && <div className="flex justify-center order-1 md:order-2">
                    <img src={img} alt="Contact Hero" className="rounded-2xl shadow-lg object-cover w-full h-[350px]" />
                    </div>}
                </div>
            </section>
  )
}

export default HeroStatic