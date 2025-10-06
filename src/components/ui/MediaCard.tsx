"use client"
import { useState } from "react"


type MediaCardProps = {
    title: string;
    link: string;
};

export default function MediaCard ({ title, link }: MediaCardProps)  {

    return (
        <>
            <a href={link} target="_blank"
            className="cursor-pointer bg-primary p-6 rounded-lg shadow hover:bg-primary-dark"
            >
                <h3 className="text-lg font-semibold">{title}</h3>
            </a>
        </>
    )

}