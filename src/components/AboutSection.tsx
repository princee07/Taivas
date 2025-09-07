"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import About3D from "./About3D";
import Wave3D from "./Wave3D";

// Images used: place files under /public/assets/about/
// thumbnail1.png was added — use that for the small thumb
const imgs = [
    "/about/thumbnail1.png",
    "/about/thumbnail2.png",
    "/about/thumbnail3.png",
];

export default function AboutSection() {
    // order[0] -> top small, order[1] -> middle medium, order[2] -> large
    const [order, setOrder] = useState([0, 1, 2]);

    useEffect(() => {
        const id = setInterval(() => {
            setOrder((prev) => [prev[2], prev[0], prev[1]]);
        }, 2200);
        return () => clearInterval(id);
    }, []);

    const variants = {
        enter: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6 } },
        exit: { opacity: 0, y: 20, scale: 0.98, transition: { duration: 0.4 } },
    };

    return (
        <section className="w-full py-16 bg-white relative overflow-hidden">
            {/* Three.js wave behind content */}
            <Wave3D />
            <div className="max-w-6xl mx-auto px-6 md:flex md:items-center md:gap-12">
                {/* Left: stacked images with clipping and animation */}
                <div className="relative md:w-1/2 w-full flex items-center justify-center">
                    <div className="w-full overflow-hidden shadow-xl rounded-none md:rounded-tr-[48px] md:rounded-br-[88px]" style={{ transform: 'translateX(-6%)' }}>
                        <Image src="/about/main.png" alt="main" width={1400} height={1050} className="w-full h-[480px] object-cover md:h-[640px] lg:h-[720px] object-left" />
                    </div>

                    {/* Stacked circular images on the right edge of the left block */}
                    <div className="absolute right-6 top-6 flex flex-col items-end gap-6">
                        {/* small thumb (top) - pink ring */}
                        <motion.div
                            key={order[0]}
                            initial="exit"
                            animate="enter"
                            variants={variants}
                            className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden ring-4 ring-pink-400 shadow-md"
                        >
                            <Image src={imgs[order[0]]} alt="img1" width={120} height={120} className="w-full h-full object-cover" />
                        </motion.div>

                        {/* medium thumb (middle) - indigo ring */}
                        <motion.div
                            key={order[1]}
                            initial="exit"
                            animate="enter"
                            variants={variants}
                            className="w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden ring-4 ring-indigo-500 shadow-md"
                        >
                            <Image src={imgs[order[1]]} alt="img2" width={160} height={160} className="w-full h-full object-cover" />
                        </motion.div>

                        {/* large thumb (bottom) - pink ring */}
                        <motion.div
                            key={order[2] + "-thumb"}
                            initial="exit"
                            animate="enter"
                            variants={variants}
                            className="w-36 h-36 md:w-40 md:h-40 rounded-full overflow-hidden ring-6 ring-pink-500 shadow-lg"
                        >
                            <Image src={imgs[order[2]]} alt="img3" width={200} height={200} className="w-full h-full object-cover" />
                        </motion.div>
                    </div>
                </div>

                {/* Right: animated text + 3D canvas */}
                <motion.div className="md:w-1/2 w-full mt-8 md:mt-0 flex flex-col gap-6"
                    initial="hidden"
                    animate="show"
                    variants={{
                        hidden: {},
                        show: { transition: { staggerChildren: 0.12 } }
                    }}
                >
                    <motion.p className="text-sm text-pink-600 font-semibold uppercase"
                        variants={{ hidden: { opacity: 0, y: 8 }, show: { opacity: 1, y: 0, transition: { duration: 0.45 } } }}
                    >
                        Taivas Debate • Highlight
                    </motion.p>

                    <motion.h2 className="text-2xl md:text-4xl font-extrabold text-gray-900 leading-tight"
                        variants={{ hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
                    >
                        Where ideas collide — Debate with style
                    </motion.h2>

                    <motion.p className="text-gray-600"
                        variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
                    >
                        Join students across campuses for eloquent arguments, creative formats and high-energy rounds. Learn to think quickly, speak clearly and enjoy collaboration.
                    </motion.p>

                    <motion.div className="w-full flex items-center gap-4 mt-2"
                        variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { duration: 0.5 } } }}
                    >
                        <a className="inline-block px-6 py-3 bg-indigo-600 text-white rounded-lg  hover:scale-105 transition">Join Now</a>
                        <a className="text-sm text-gray-500 underline">Learn more</a>
                    </motion.div>

                    {/* 3D animation container */}
                    <motion.div className="mt-4 w-full rounded-xl overflow-hidden bg-gradient-to-br from-white/30 to-transparent p-2 "
                        variants={{ hidden: { opacity: 0, scale: 0.98 }, show: { opacity: 1, scale: 1, transition: { duration: 0.6 } } }}
                        whileHover={{ scale: 1.02 }}
                    >
                        <motion.div className="bg-transparent rounded-lg p-1"
                            animate={{ y: [0, -6, 0], rotate: [0, 2, 0] }}
                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                        >
                            <About3D />
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
