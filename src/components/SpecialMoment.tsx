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
        { text: "PARALLAX", speed: 0.08, size: "text-[8rem] md:text-[10rem] lg:text-[12rem]" },
        { text: "SCROLLING", speed: 0.18, size: "text-[6rem] md:text-[8rem] lg:text-[10rem]" },
        { text: "TEXT", speed: 0.12, size: "text-[7rem] md:text-[9rem] lg:text-[11rem]" },
        { text: "ANIMATION", speed: 0.05, size: "text-[5.5rem] md:text-[7rem] lg:text-[9rem]" },
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
                // Move element on Y by scroll * speed
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
            className="min-h-[80vh] w-full flex flex-col items-center justify-start pt-24 relative overflow-hidden bg-transparent"
        >
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-center text-white relative z-20 font-sans mb-4">
                <ColourfulText text="Our Special Moments" />
            </h2>

            <p className="max-w-3xl text-center text-neutral-300 leading-relaxed mb-4 px-6 md:px-0">
                Welcome to our events — a playful, social space where students come together to debate, perform, and create unforgettable memories. Watch highlights below and explore moments from our community.
            </p>

            <h3 className="text-sm md:text-base text-neutral-400 mb-6">Parallax Scrolling Text Animation</h3>

            {/* Parallax layer (background large words) */}
            <div ref={parallaxRef} className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
                {parallaxWords.map((w, i) => (
                    <span
                        key={w.text + i}
                        className={`absolute left-1/2 -translate-x-1/2 text-white/6 font-extrabold uppercase tracking-tight select-none ${w.size} ${i % 2 ? 'top-8 md:top-16' : 'top-28 md:top-36'}`}
                        data-speed={String(w.speed)}
                        aria-hidden
                    >
                        {w.text}
                    </span>
                ))}
            </div>

            {/* central video card */}
            <div className="relative z-10 w-full max-w-4xl px-6 md:px-0">
                <div className="relative rounded-2xl overflow-hidden bg-neutral-900/40 border border-white/10 shadow-2xl">
                    <video
                        ref={videoRef}
                        src="/special/highlight.mp4"
                        poster="/special/thumbnail.png"
                        className="w-full h-64 md:h-80 lg:h-96 object-cover"
                        preload="metadata"
                        playsInline
                    />

                    {/* play overlay */}
                    <button
                        aria-label={playing ? "Pause video" : "Play video"}
                        onClick={togglePlay}
                        className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/25 transition"
                        type="button"
                    >
                        <div className="flex items-center gap-3">
                            <div className="w-16 h-16 md:w-20 md:h-20 bg-white/90 rounded-full flex items-center justify-center shadow-lg">
                                {!playing ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#2b2b2b" className="w-8 h-8">
                                        <path d="M5 3v18l15-9L5 3z" />
                                    </svg>
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#2b2b2b" className="w-8 h-8">
                                        <path d="M6 6h4v12H6zM14 6h4v12h-4z" />
                                    </svg>
                                )}
                            </div>
                        </div>
                    </button>

                    {/* subtle progress bar / decorative rounded outline */}
                    <div className="pointer-events-none absolute -bottom-4 left-1/2 -translate-x-1/2 w-11/12 md:w-3/4 lg:w-2/3 h-3 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 rounded-full opacity-40 blur-sm" />
                </div>
            </div>

            {/* floating thumbnails around the video */}
            <div className="pointer-events-none absolute inset-0 -z-0">
                {/* left cluster */}
                <div className="absolute left-12 md:left-20 top-20 flex flex-col gap-6">
                    <div className="relative w-20 h-20 rounded-xl overflow-hidden shadow-lg border-2 border-white/10">
                        <Image src={thumbs[0]} alt="moment" layout="fill" objectFit="cover" />
                    </div>
                    <div className="relative w-16 h-16 rounded-lg overflow-hidden shadow-md border border-white/10">
                        <Image src={thumbs[1]} alt="moment" layout="fill" objectFit="cover" />
                    </div>
                </div>

                {/* right cluster */}
                <div className="absolute right-12 md:right-20 top-28 flex flex-col gap-6 items-end">
                    <div className="relative w-24 h-24 rounded-2xl overflow-hidden shadow-2xl border-2 border-white/10">
                        <Image src={thumbs[2]} alt="moment" layout="fill" objectFit="cover" />
                    </div>
                    <div className="relative w-14 h-14 rounded-lg overflow-hidden shadow-md border border-white/10">
                        <Image src={thumbs[3]} alt="moment" layout="fill" objectFit="cover" />
                    </div>
                </div>

                {/* bottom-left accent */}
                <div className="absolute left-12 bottom-10 w-12 h-12 bg-pink-500 rounded-md shadow-xl transform rotate-6" />

                {/* top-right soft blob */}
                <div className="absolute right-24 top-8 w-28 h-28 bg-gradient-to-tr from-purple-500 to-blue-400 rounded-full opacity-30 blur-2xl" />
            </div>

            {/* spacing at the bottom */}
            <div className="h-24" />
        </section>
    );
}
