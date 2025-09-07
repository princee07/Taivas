"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
    {
        name: "Aisha Khan",
        role: "Debate Captain",
        quote: "The debates here sharpen my thinking and build confidence — every event feels like a masterclass.",
        avatar: "/avatars/aisha.jpg",
    },
    {
        name: "Ravi Patel",
        role: "Member",
        quote: "I made lasting friends and improved my public speaking more in one term than I did in a year elsewhere.",
        avatar: "/avatars/ravi.jpg",
    },
    {
        name: "Sara Gomez",
        role: "Alumni",
        quote: "Taivas gave me the stage and the skills to pursue a career in law. The mentors are incredible.",
        avatar: "/avatars/sara.jpg",
    },
];

export default function Testimonials() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const t = setInterval(() => setIndex(i => (i + 1) % testimonials.length), 5000);
        return () => clearInterval(t);
    }, []);

    return (
        <section id="testimonials" className="w-full py-16 bg-gradient-to-b from-neutral-900 to-neutral-800 text-white">
            <div className="max-w-6xl mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-extrabold mb-6">What students say</h2>
                <p className="text-neutral-300 max-w-2xl mb-8">Real voices from our community — short highlights from members, captains and alumni about their experience.</p>

                {/* Desktop grid */}
                <div className="hidden md:grid md:grid-cols-3 gap-6">
                    {testimonials.map((t, i) => (
                        <motion.blockquote
                            key={t.name}
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.08 }}
                            className="bg-neutral-900/40 p-6 rounded-2xl shadow-lg"
                        >
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-14 h-14 rounded-full overflow-hidden relative">
                                    <Image src={t.avatar} alt={t.name} fill className="object-cover" />
                                </div>
                                <div>
                                    <div className="font-semibold">{t.name}</div>
                                    <div className="text-sm text-neutral-400">{t.role}</div>
                                </div>
                            </div>
                            <p className="text-neutral-200 leading-relaxed">“{t.quote}”</p>
                        </motion.blockquote>
                    ))}
                </div>

                {/* Mobile carousel */}
                <div className="md:hidden relative">
                    <div className="overflow-hidden">
                        <AnimatePresence initial={false} mode="wait">
                            <motion.div
                                key={testimonials[index].name}
                                initial={{ opacity: 0, x: 40 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -40 }}
                                transition={{ duration: 0.45 }}
                                className="bg-neutral-900/40 p-6 rounded-2xl shadow-lg"
                            >
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-12 h-12 rounded-full overflow-hidden relative">
                                        <Image src={testimonials[index].avatar} alt={testimonials[index].name} fill className="object-cover" />
                                    </div>
                                    <div>
                                        <div className="font-semibold">{testimonials[index].name}</div>
                                        <div className="text-sm text-neutral-400">{testimonials[index].role}</div>
                                    </div>
                                </div>
                                <p className="text-neutral-200 leading-relaxed">“{testimonials[index].quote}”</p>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    <div className="flex items-center justify-center gap-3 mt-4">
                        {testimonials.map((_, i) => (
                            <button
                                key={i}
                                aria-label={`Show testimonial ${i + 1}`}
                                onClick={() => setIndex(i)}
                                className={`w-2 h-2 rounded-full ${i === index ? 'bg-white' : 'bg-white/30'}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
