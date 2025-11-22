import CreditCard from "@/components/ui/CreditCard";
import HeroStatic from "@/components/ui/HeroStatic";
import React from "react"
import { getPageData } from "../../../lib/data";
import { GivePageData } from "../../../lib/types";


export default async function GivePage() {
    const pageData = await getPageData<GivePageData>('give');
    
    return (
        <div>
            <div className="w-full">
                <HeroStatic title={pageData.hero.title} subtitle={pageData.hero.subtitle} image={pageData.hero.image}/>
            </div>

                <div className="flex flex-col justify-center mx-auto w-full my-4">
                    <h1 className="text-primary text-bold text-5xl text-center mb-10 my-5">
                        {pageData.content.heading}
                    </h1>

                    <p className="text-primary-dark text-center w-[75%] mx-auto">{pageData.content.description}</p>

                    <CreditCard bankDetails={pageData.bankDetails} />

                </div>
            </div>
    )
}