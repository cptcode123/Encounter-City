"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'

export default function ContactForm() { 

    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState({name: "", email: "", subject: "", message: ""});
    const [status, setStatus] = useState("");

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setLoading(true);

        const res = await fetch("/api/contact-form", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(form)
        });

        if (res.ok) {
            setStatus("Form submitted successfully!");
            setForm({name: "", email: "", subject: "", message: ""});
        } else {
            setStatus("Error submitting form. Please try again later.");
        }
    }

    return (
        <div className="flex flex-col order-2  bg-primary w-full  mx-auto rounded-2xl shadow-lg p-6"> 
                    <motion.h1
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                     className="text-3xl text-white font-bold pl-6 mb-10 text-center">Send us a Message</motion.h1>
                <motion.form 
                className="space-y-6 order-1 bg-bg p-6 rounded-xl " id="send"
                initial={{opacity:0, y:-20}}
                whileInView={{opacity:1, y:0}}
                transition={{duration:0.8}}
                onSubmit={handleSubmit}>
                    <div className="grid grid-col-1 md:grid-cols-2 gap-4">
                    <input 
                    type="text"
                    placeholder="Your Name" 
                    minLength={3}
                    value={form.name}
                    onChange={(e) => setForm({...form, name: e.target.value})}
                    required
                    className="w-full p-3 rounded-md text-text inset-shadow-sm dark:inset-shadow-primary-dark"/>
                     <input
                    type="email"
                    placeholder="Your Email"
                    value={form.email}
                    onChange={(e) => setForm({...form, email: e.target.value})}
                    required
                    className="w-full p-3 rounded-md text-text inset-shadow-sm dark:inset-shadow-primary-dark"
                />
                </div>
                <input
                    type="text"
                    placeholder="Subject"
                    value={form.subject}
                    onChange={(e) => setForm({...form, subject: e.target.value})}

                    className="w-full p-3 rounded-md inset-shadow-sm dark:inset-shadow-primary-dark"
                />
                <textarea
                    placeholder="Message"
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({...form, message: e.target.value})}

                    required
                    className="w-full p-3 rounded-md inset-shadow-sm dark:inset-shadow-primary-dark"
                />
                <button type='submit'
                className="mt-6 bg-primary text-bg px-6 py-2 rounded-full hover:bg-opacity-80 transition mx-auto block"
                 disabled={loading}>{loading ? "Submitting..." : "Submit"}</button>
                {status && <p>{status}</p>}
                </motion.form>
                </div>
    );
}