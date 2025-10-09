'use client'    
import HeroStatic from "@/components/ui/HeroStatic";
import React from "react"


export default function GivePage() {
    return (
        <div>
            <div className="w-full">
                <HeroStatic title="Give" subtitle='Support the mission and vision of The Encounter City Christian Centre' image='/rect-img-6.jpg'/>
            </div>

                <div className="flex flex-col justify-center mx-auto w-full my-4">
                    <h1 className="text-primary text-bold text-5xl text-center">
                        It takes a lot to do this work
                    </h1>

                    <p className="text-primary-dark text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus deserunt reiciendis excepturi totam! Id ab, nisi maiores ea, inventore asperiores sint eaque dolore qui officiis velit debitis nobis beatae perferendis?</p>

                    <div className="rounded-2xl shadow-lg text-white bg-primary flex flex-col gap-1 p-4 w-[40%] mx-auto my-10">
                        <h1>Account Number</h1>
                        <h2>123456789</h2>

                        <h1>Bank Name</h1>
                        <h2>Access Bank</h2>
                    </div>
                </div>
            </div>
    )
}