import React, { ReactNode, useState } from 'react'
import { Plus, Minus } from 'lucide-react'

interface AccordionProps {
    title: string;
    children: ReactNode;
    defaultOpen?: boolean;
}


export default function Accordion({ title, children, defaultOpen }: AccordionProps) {
    const [isOpen, setIsOpen] = useState(defaultOpen || false);


  return (
    <div className='rounded-md overflow-hidden w-full'>
        {/* Header */}
        <div className='flex items-center justify-between p-4 cursor-pointer bg-primary text-white'
        onClick={() => setIsOpen(!isOpen)}>

            {/* Title */}
            <span className='font-large text-2xl'>{title}</span>

            {/* Toggle Button */}
            <button 
            className='p-1 rounded transition'
            onClick={(e) => {
                e.stopPropagation();
                setIsOpen(!isOpen);
            }}>
                {isOpen ? <Minus size={20} /> : <Plus size={20} />}

            </button>

        </div>

        {/* Content */}
        <div 
        className={`transition-all duration-300 ease-in-out overflow-hidden bg-bg ${isOpen ? 'max-h-96 p-4' : 'max-h-0 p-0'}`}>
            {children}

        </div>

    </div>
  )
}
