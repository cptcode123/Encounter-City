import { div } from "framer-motion/client";
import React, { ReactNode } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Button from "./Button";


interface CardProps {
    title: string;
    subtitle?: string;
    description?: string;
    img?: string;
    href?: string;
    ctaText?: string;
    children?: ReactNode
    variant?: "default" | "outlined" | "shadow"
}

export default function Card(
    {
        title,
        subtitle,
        description,
        img,
        href,
        ctaText,
        children,
        variant = 'default'
    }: CardProps
) {

    return (
        <motion.div
        whileHover={{scale:1.025}}
        className= {`
        overflow-hidden transition-all duration-300
        ${variant === 'default' ? "bg-surface shadow " : ""}
        ${variant === 'shadow' ? "shadow-lg hover:shadow-xl" : ""}
        ${variant === 'outlined' ? "border border-border" : ""}
        `}>
            {img && (
                <Image src={img} alt={title || "card image"}  className="w-full h-48 object-cover"/> 
            )}

        <div className="p-4 flex flex-col gap-2">
            {title && <div className="text-primary">{title}</div>}
            {subtitle && <div className="text-lg font-semibold text-secondary">{subtitle}</div>}
            {description && <div className="text-sm text-secondary">{description}</div>}

            {children}

            {href && <Button href={href} text={ctaText || "Learn More"}/>}

        </div>

        </motion.div>
    )

}