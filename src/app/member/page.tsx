'use client'

import React, { useEffect, useState } from 'react'
import Accordion from '@/components/ui/Accordion'
import HeroStatic from '@/components/ui/HeroStatic'
import { motion } from 'framer-motion'
import SimpleForm from '@/components/ui/SimpleForm'
import { MemberPageData } from '../../../lib/types'


export default function MemberPage() {
    const [pageData, setPageData] = useState<MemberPageData | null>(null);

    useEffect(() => {
        fetch('/api/content?page=member')
            .then(res => res.json())
            .then(setPageData)
            .catch(err => console.error('Failed to fetch page data:', err));
    }, []);

    if (!pageData) return null;

    const classes = pageData.classes;

    return (
        <div className='min-h-screen flex flex-col gap-8 bg-bg'> 

        {/* Hero Section */}
        <HeroStatic title={pageData.hero.title} subtitle={pageData.hero.subtitle} image={pageData.hero.image}/>

        {/* Title Section */}

        <div className='bg-surface mx-auto w-[80%] py-10 rounded-3xl'>
            <motion.h1 
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className='text-3xl font-extrabold text-center my-10 text-primary'>
                {pageData.content.title}
            </motion.h1>

            <motion.p
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className='text-center text-xl w-[80%] mx-auto mb-10'
            dangerouslySetInnerHTML={{ __html: pageData.content.description.replace(/\n\n/g, '<br/><br/>') }}
            />
        

        {/* Accordion Section */}

            <motion.div 
            initial={{opacity: 0, y:-20}}
            whileInView={{opacity:1, y:0}}
            transition={{duration: 0.8, delay:0.5}}
            className='w-[80%] mx-auto flex flex-col justify-center gap-4 bg-surface'>
                {classes.map(({ title, description }, idx: number) => (
                    
                    <Accordion key={idx} title={title}>
                        <h2 className='text-xl font-bold mb-5'>This is {title}</h2>
                        <p className='text-lg leading-8'>{description}</p>
                    </Accordion>
                ))}
            </motion.div>
        </div>
        

        {/* Sign Up */}
                <SimpleForm />
        
        </div>
    )

}