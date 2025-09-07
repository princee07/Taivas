"use client";
import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform, Variants } from "framer-motion";
import Image from "next/image";

export default function SpecialHighlights() {
    const sectionRef = useRef<HTMLDivElement | null>(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    });

    function useParallax(speed: number) {
        return useTransform(scrollYProgress, [0, 1], [0, speed * 400]);
    }

    const parallax_0_1 = useParallax(0.1);
    const parallax_0_14 = useParallax(0.14);
    const parallax_0_18 = useParallax(0.18);
    const parallax_0_22 = useParallax(0.22);
    const parallax_0_25 = useParallax(0.25);
    const parallax_0_27 = useParallax(0.27);
    const parallax_0_3 = useParallax(0.3);
    const parallax_0_33 = useParallax(0.33);

    const rotatePos15 = useTransform(scrollYProgress, [0, 1], [0, 15]);
    const rotateNeg15 = useTransform(scrollYProgress, [0, 1], [0, -15]);

    const slideLeft = {
        hidden: { opacity: 0, x: -150 },
        visible: { opacity: 1, x: 0, transition: { duration: 1.2 } },
    };
    const slideRight = {
        hidden: { opacity: 0, x: 150 },
        visible: { opacity: 1, x: 0, transition: { duration: 1.2 } },
    };

    const Row = ({
        children,
        variant,
    }: {
        children: React.ReactNode;
        variant: Variants;
    }) => {
        const [inView, setInView] = useState(false);
        return (
            <motion.div
                className="flex flex-col md:flex-row items-center justify-center gap-12 w-full px-6 relative"
                variants={variant}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                transition={{ duration: 1.0 }}
                onViewportEnter={() => setInView(true)}
                onViewportLeave={() => setInView(false)}
            >
                {children}
            </motion.div>
        );
    };

    return (
        <section ref={sectionRef} className="relative min-h-[100vh] w-full bg-black overflow-hidden flex items-center justify-center py-20">
            <div className="w-full">
                {/* Row 1: Event - Image - Strategy - Innovation */}
                <Row variant={slideLeft}>
                    <motion.h1
                        style={{ y: parallax_0_3 }}
                        className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 uppercase font-extrabold text-[4rem] md:text-[6rem] lg:text-[8rem]"
                    >
                        Event
                    </motion.h1>
                    <motion.div
                        style={{ y: parallax_0_1, rotate: rotatePos15 }}
                        className="relative w-48 h-32 overflow-hidden shadow-2xl"
                    >
                        <Image src="/images/row1.png" alt="moment" fill className="object-cover" />
                    </motion.div>
                    <motion.h1
                        style={{ y: parallax_0_25 }}
                        className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 uppercase font-extrabold text-[4rem] md:text-[6rem] lg:text-[8rem]"
                    >
                        Strategy
                    </motion.h1>
                    <motion.h1
                        style={{ y: parallax_0_3 }}
                        className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 uppercase font-extrabold text-[4rem] md:text-[6rem] lg:text-[8rem]"
                    >
                        Innovation
                    </motion.h1>
                </Row>
                {/* Row 2: Marketing - Image - Trends */}
                <Row variant={slideRight}>
                    <motion.h1
                        style={{ y: parallax_0_33 }}
                        className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 uppercase font-extrabold text-[4rem] md:text-[6rem] lg:text-[8rem]"
                    >
                        Marketing
                    </motion.h1>
                    <motion.div
                        style={{ y: parallax_0_18, rotate: rotateNeg15 }}
                        className="relative w-48 h-32 overflow-hidden shadow-2xl"
                    >
                        <Image src="/images/row1.png" alt="moment" fill className="object-cover" />
                    </motion.div>
                    <motion.h1
                        style={{ y: parallax_0_33 }}
                        className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 uppercase font-extrabold text-[4rem] md:text-[6rem] lg:text-[8rem]"
                    >
                        Trends
                    </motion.h1>
                </Row>
                {/* Row 3: Culture - Image - Heritage */}
                <Row variant={slideLeft}>
                    <motion.h1
                        style={{ y: parallax_0_22 }}
                        className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 uppercase font-extrabold text-[4rem] md:text-[6rem] lg:text-[8rem]"
                    >
                        Culture
                    </motion.h1>
                    <motion.div
                        style={{ y: parallax_0_27, rotate: rotatePos15 }}
                        className="relative w-48 h-32 overflow-hidden shadow-2xl"
                    >
                        <Image src="/images/row2.png" alt="moment" fill className="object-cover" />
                    </motion.div>
                    <motion.h1
                        style={{ y: parallax_0_27 }}
                        className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 uppercase font-extrabold text-[4rem] md:text-[6rem] lg:text-[8rem]"
                    >
                        Heritage
                    </motion.h1>
                </Row>
                {/* Row 4: Engagement - Image - Connection */}
                <Row variant={slideRight}>
                    <motion.h1
                        style={{ y: parallax_0_25 }}
                        className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 uppercase font-extrabold text-[4rem] md:text-[6rem] lg:text-[8rem]"
                    >
                        Engagement
                    </motion.h1>
                    <motion.div
                        style={{ y: parallax_0_14, rotate: rotateNeg15 }}
                        className="relative w-48 h-32 overflow-hidden shadow-2xl"
                    >
                        <Image src="/special/6.png" alt="moment" fill className="object-cover" />
                    </motion.div>
                    <motion.h1
                        style={{ y: parallax_0_3 }}
                        className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 uppercase font-extrabold text-[4rem] md:text-[6rem] lg:text-[8rem]"
                    >
                        Connection
                    </motion.h1>
                </Row>
            </div>
        </section>
    );
}