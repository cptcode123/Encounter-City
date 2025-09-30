'use client'
import { motion } from "framer-motion";
import HeroStatic from "@/components/ui/HeroStatic";


export default function AboutPage() {
    return (
        <div>
            <div className="w-full h-[6000px]">
                <HeroStatic title="About Us" subtitle="Learn more about The Encounter City Christian Centre" img="/landscape-2.jpg"/>
            </div>
        </div>
    )
}