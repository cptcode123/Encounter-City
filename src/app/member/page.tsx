'use client'

import React from 'react'
import Accordion from '@/components/ui/Accordion'
import HeroStatic from '@/components/ui/HeroStatic'
import { motion } from 'framer-motion'


export default function MemberPage() {

    const classes = [
        {title:'Class 1', description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam totam accusantium veritatis corrupti, quidem natus ipsam architecto minima reiciendis, facere, quam esse sequi fugiat ullam odit ipsum dolor aspernatur necessitatibus.'},

        {title:'Class 2', description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam totam accusantium veritatis corrupti, quidem natus ipsam architecto minima reiciendis, facere, quam esse sequi fugiat ullam odit ipsum dolor aspernatur necessitatibus.'},

        {title:'Class 3', description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam totam accusantium veritatis corrupti, quidem natus ipsam architecto minima reiciendis, facere, quam esse sequi fugiat ullam odit ipsum dolor aspernatur necessitatibus.'},

        {title:'Class 4', description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam totam accusantium veritatis corrupti, quidem natus ipsam architecto minima reiciendis, facere, quam esse sequi fugiat ullam odit ipsum dolor aspernatur necessitatibus.'},

        {title:'Class 5', description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam totam accusantium veritatis corrupti, quidem natus ipsam architecto minima reiciendis, facere, quam esse sequi fugiat ullam odit ipsum dolor aspernatur necessitatibus.'},
    ];

    return (
        <div className='min-h-screen flex flex-col gap-8 bg-bg'> 

        {/* Hero Section */}
        <HeroStatic title=" Thinking about becoming a member?" subtitle="Here's the roadmap" image='/rect-img-5.jpg'/>

        {/* Title Section */}

        <div className='bg-surface mx-auto w-[80%] py-10 rounded-3xl'>
            <motion.h1 
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className='text-3xl font-extrabold text-center my-10 text-primary'>
                Here is what you need to know
            </motion.h1>

            <motion.p
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className='text-center text-xl w-[80%] mx-auto mb-10'>
                Membership at Encounter City is more than just a title; it is a commitment to grow, serve, and belong. As a member, you will have the opportunity to deepen your faith, connect with a supportive community, and actively participate in the life and mission of our church.<br/><br/> Here are the steps you need to take to become one of us.

            </motion.p>
        

        {/* Accordion Section */}

            <motion.div 
            initial={{opacity: 0, y:-20}}
            whileInView={{opacity:1, y:0}}
            transition={{duration: 0.8, delay:0.5}}
            className='w-[80%] mx-auto flex flex-col justify-center gap-4 bg-surface'>
                {classes.map(({ title, description }, idx) => (
                    
                    <Accordion key={idx} title={title}>
                        <h2 className='text-xl font-bold mb-5'>This is {title}</h2>
                        <p className='text-lg leading-8'>{description}</p>
                    </Accordion>
                ))}
            </motion.div>
        </div>
        

        {/* Sign Up */}
        <div className="w-full mx-auto text-text flex flex-col items-center justify-center py-13 bg-[#CCB3E6]">
  <motion.h1
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 0.8 }}
    className="text-4xl font-bold mb-5 text-primary text-center"
  >
    But first, we want to know who you are
  </motion.h1>

  <motion.form
    className="w-[90%] max-w-4xl rounded-3xl flex flex-col items-center bg-[#E6D9F3] shadow-lg py-10 px-6 backdrop-blur-md"
    action=""
  >
    <div className="w-full flex flex-wrap justify-center gap-5 text-primary-dark">
      <input
        type="text"
        placeholder="Name"
        className="p-4 text-center rounded-full shadow-inner bg-[#F3E9FB] focus:outline-none focus:ring-2 focus:ring-primary w-full sm:w-[250px]"
      />
      <input
        type="text"
        placeholder="Phone"
        className="p-4 text-center rounded-full shadow-inner bg-[#F3E9FB] focus:outline-none focus:ring-2 focus:ring-primary w-full sm:w-[250px]"
      />
      <input
        type="text"
        placeholder="Email"
        className="p-4 text-center rounded-full shadow-inner bg-[#F3E9FB] focus:outline-none focus:ring-2 focus:ring-primary w-full sm:w-[250px]"
      />
    </div>

    <button
      type="submit"
      className="mt-6 bg-primary text-bg px-6 py-2 rounded-full hover:bg-opacity-80 transition"
    >
      Submit
    </button>
  </motion.form>
</div>
        </div>  
    )

}