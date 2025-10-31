"use client"

import { useState } from "react"
import { motion } from "framer-motion"

const SimpleForm = () => {
    const [form, setForm] = useState({name: "", email: "", PhoneNumber: ""})
    const [status, setStatus] = useState("")

    // Handle form submission
    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        console.log("Submitting form:", form);
        setStatus("Submitting...");

        const res = await fetch("/api/simple-form", {
            method:"POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(form)
        });

        if (res.ok) {
            setStatus("Form submitted successfully!");
            setForm({name: "", email: "", PhoneNumber: ""});
        } else {
            setStatus("Error submitting form. Please try again later.");
        }
    }

    
  return (
    
    <div className="w-full mx-auto text-text flex flex-col items-center justify-center py-13 bg-[#CCB3E6]">
      <motion.h1
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold mb-5 text-primary text-center"
      >
        But first, we want to know who you are
      </motion.h1>

    <motion.form className="w-[90%] max-w-4xl rounded-3xl flex flex-col items-center bg-[#E6D9F3] shadow-lg py-10 px-6 backdrop-blur-md" 
    onSubmit={handleSubmit}>
            <div className="w-full flex flex-wrap justify-center gap-5 text-primary-dark">

                {/* Input Areas */}
                <input 
                type="text" 
                placeholder="Enter your name"
                value={form.name}
                onChange={(e) => setForm({...form, name: e.target.value})}
                minLength={1}
               className="p-4 text-center rounded-full shadow-inner bg-[#F3E9FB] focus:outline-none focus:ring-2 focus:ring-primary w-full sm:w-[250px]" required />


                <input 
                type="tel" 
                placeholder="Enter your Phone Number"
                value={form.PhoneNumber}
                onChange={(e) => setForm({...form, PhoneNumber: e.target.value})}
                minLength={10}
                className="p-4 text-center rounded-full shadow-inner bg-[#F3E9FB] focus:outline-none focus:ring-2 focus:ring-primary w-full sm:w-[250px]" required/>


                <input 
                type="email" 
                placeholder="Enter your Email address"
                value={form.email}
                onChange={(e) => setForm({...form, email: e.target.value})}
                className="p-4 text-center rounded-full shadow-inner bg-[#F3E9FB] focus:outline-none focus:ring-2 focus:ring-primary w-full sm:w-[250px]" required />
            </div>
            <button type='submit' className="mt-6 bg-primary text-bg px-6 py-2 rounded-full hover:bg-opacity-80 transition">Submit</button>
            <p>{status}</p>
        </motion.form>

    </div>
  )
}

export default SimpleForm