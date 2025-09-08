"use client";
import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import ColourfulText from "@/components/ui/colourful-text";

export default function SpecialMoment() {
    const videoRef = useRef<HTMLVideoElement | null>(null);
    const [playing, setPlaying] = useState(false);
    const parallaxRef = useRef<HTMLDivElement | null>(null);

    function togglePlay() {
        const v = videoRef.current;
        if (!v) return;
        if (v.paused) {
            v.play();
            setPlaying(true);
        } else {
            v.pause();
            setPlaying(false);
        }
    }

    const thumbs = [
        "/special/1.png",
        "/special/2.png",
        "/special/3.png",
        "/special/4.png",
        "/special/5.png",
    ];

    const parallaxWords = [
        { text: "PARALLAX", speed: 0.08, size: "text-5xl sm:text-6xl md:text-8xl lg:text-[10rem] xl:text-[12rem]" },
        { text: "SCROLLING", speed: 0.18, size: "text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-[10rem]" },
        { text: "TEXT", speed: 0.12, size: "text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-[11rem]" },
        { text: "ANIMATION", speed: 0.05, size: "text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-[9rem]" },
    ];

    useEffect(() => {
        let rafId = 0;
        const root = parallaxRef.current;
        if (!root) return;

        const nodes = Array.from(root.querySelectorAll<HTMLElement>('[data-speed]'));

        function onScroll() {
            const scrollY = window.scrollY || window.pageYOffset;
            nodes.forEach(node => {
                const speed = Number(node.dataset.speed) || 0;
                const translate = scrollY * speed;
                node.style.transform = `translate3d(-50%, ${translate}px, 0)`;
            });
        }

        function loop() {
            onScroll();
            rafId = requestAnimationFrame(loop);
        }

        rafId = requestAnimationFrame(loop);

        return () => cancelAnimationFrame(rafId);
    }, []);

    return (
        <section
            id="special-moment"
            className="min-h-screen w-full flex flex-col items-center justify-start pt-12 sm:pt-16 md:pt-20 relative overflow-hidden bg-transparent"
        >
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-center text-white relative z-20 font-sans mb-4 sm:mb-6">
                <ColourfulText text="Our Special Moments" />
            </h2>

            <p className="max-w-[90%] sm:max-w-2xl md:max-w-3xl text-center text-neutral-300 text-sm sm:text-base md:text-lg leading-relaxed mb-4 sm:mb-6 px-4 sm:px-6">
                Welcome to our events — a playful, social space where students come together to debate, perform, and create unforgettable memories. Watch highlights below and explore moments from our community.
            </p>

            <h3 className="text-xs sm:text-sm md:text-base text-neutral-400 mb-4 sm:mb-6">Parallax Scrolling Text Animation</h3>

            {/* Parallax layer */}
            <div ref={parallaxRef} className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
                {parallaxWords.map((w, i) => (
                    <span
                        key={w.text + i}
                        className={`absolute left-1/2 -translate-x-1/2 text-white/6 font-extrabold uppercase tracking-tight select-none ${w.size} ${i % 2 ? 'top-4 sm:top-8 md:top-16' : 'top-12 sm:top-20 md:top-28'}`}
                        data-speed={String(w.speed)}
                        aria-hidden
                    >
                        {w.text}
                    </span>
                ))}
            </div>

            {/* Central video card */}
            <div className="relative z-10 w-full max-w-[95%] sm:max-w-3xl md:max-w-4xl lg:max-w-5xl px-4 sm:px-6">
                <div className="relative rounded-2xl overflow-hidden bg-neutral-900/40 border border-white/10 shadow-2xl">
                    <video
                        ref={videoRef}
                        src="/special/highlight.mp4"
                        poster="/special/thumbnail.png"
                        className="w-full h-48 sm:h-64 md:h-80 lg:h-96 object-cover"
                        preload="metadata"
                        playsInline
                    />

                    {/* Play overlay */}
                    <button
                        aria-label={playing ? "Pause video" : "Play video"}
                        onClick={togglePlay}
                        className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/25 transition"
                        type="button"
                    >
                        <div className="flex items-center gap-2 sm:gap-3">
                            <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 bg-white/90 rounded-full flex items-center justify-center shadow-lg">
                                {!playing ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#2b2b2b" className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8">
                                        <path d="M5 3v18l15-9L5 3z" />
                                    </svg>
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#2b2b2b" className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8">
                                        <path d="M6 6h4v12H6zM14 6h4v12h-4z" />
                                    </svg>
                                )}
                            </div>
                        </div>
                    </button>

                    {/* Progress bar */}
                    <div className="pointer-events-none absolute -bottom-3 sm:-bottom-4 left-1/2 -translate-x-1/2 w-3/4 sm:w-11/12 md:w-3/4 lg:w-2/3 h-2 sm:h-3 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 rounded-full opacity-40 blur-sm" />
                </div>
            </div>

            {/* Floating thumbnails */}
            <div className="pointer-events-none absolute inset-0 -z-0 hidden sm:block">
                {/* Left cluster */}
                <div className="absolute left-4 sm:left-8 md:left-12 lg:left-16 top-12 sm:top-16 md:top-20 flex flex-col gap-4 sm:gap-6">
                    <div className="relative w-16 sm:w-20 md:w-24 h-16 sm:h-20 md:h-24 rounded-xl overflow-hidden shadow-lg border-2 border-white/10">
                        <Image src={thumbs[0]} alt="moment" layout="fill" objectFit="cover" />
                    </div>
                    <div className="relative w-12 sm:w-16 md:w-20 h-12 sm:h-16 md:h-20 rounded-lg overflow-hidden shadow-md border border-white/10">
                        <Image src={thumbs[1]} alt="moment" layout="fill" objectFit="cover" />
                    </div>
                </div>

                {/* Right cluster */}
                <div className="absolute right-4 sm:right-8 md:right-12 lg:right-16 top-16 sm:top-20 md:top-28 flex flex-col gap-4 sm:gap-6 items-end">
                    <div className="relative w-20 sm:w-24 md:w-28 h-20 sm:h-24 md:h-28 rounded-2xl overflow-hidden shadow-2xl border-2 border-white/10">
                        <Image src={thumbs[2]} alt="moment" layout="fill" objectFit="cover" />
                    </div>
                    <div className="relative w-10 sm:w-14 md:w-18 h-10 sm:h-14 md:h-18 rounded-lg overflow-hidden shadow-md border border-white/10">
                        <Image src={thumbs[3]} alt="moment" layout="fill" objectFit="cover" />
                    </div>
                </div>

                {/* Bottom-left accent */}
                <div className="absolute left-4 sm:left-8 md:left-12 bottom-6 sm:bottom-8 md:bottom-10 w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12 bg-pink-500 rounded-md shadow-xl transform rotate-6" />

                {/* Top-right soft blob */}
                <div className="absolute right-6 sm:right-12 md:right-20 top-4 sm:top-6 md:top-8 w-16 sm:w-20 md:w-24 h-16 sm:h-20 md:h-24 bg-gradient-to-tr from-purple-500 to-blue-400 rounded-full opacity-30 blur-2xl" />
            </div>

            {/* Spacing at the bottom */}
            <div className="h-12 sm:h-16 md:h-20 lg:h-24" />
        </section>
    );
}