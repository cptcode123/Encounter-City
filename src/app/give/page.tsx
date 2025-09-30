'use client'    
import HeroStatic from "@/components/ui/HeroStatic";
import { div } from "framer-motion/client";
import React from "react"


export default function GivePage() {
    return (
        <div>
            <div className="w-full h-[6000px]">
                <HeroStatic title="Give" subtitle='Support the mission and vision of The Encounter City Christian Centre' img='/rect-img-6.jpg'/>
            </div>
        </div>
    )
}