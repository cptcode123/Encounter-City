'use client'    
import CreditCard from "@/components/ui/CreditCard";
import HeroStatic from "@/components/ui/HeroStatic";
import React from "react"


export default function GivePage() {
    return (
        <div>
            <div className="w-full">
                <HeroStatic title="Give" subtitle='Support the mission and vision of The Encounter City Christian Centre' image='/rect-img-6.jpg'/>
            </div>

                <div className="flex flex-col justify-center mx-auto w-full my-4">
                    <h1 className="text-primary text-bold text-5xl text-center mb-10 my-5">
                        It takes a lot to do this work
                    </h1>

                    <p className="text-primary-dark text-center w-[75%] mx-auto">If you do feel like helping, you can transfer directly with the information below</p>

                    <CreditCard />

                </div>
            </div>
    )
}