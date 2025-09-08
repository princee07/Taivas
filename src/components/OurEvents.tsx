"use client";

import React from "react";
import { HeroParallax } from "@/components/ui/hero-parallax";

type Props = {
    AceternityWidget?: React.ComponentType;
};

type Product = {
    title: string;
    link: string;
    thumbnail: string;
};

const products: Product[] = [
    {
        title: "Moonbeam",
        link: "https://gomoonbeam.com",
        thumbnail: "/ourevents/1.png",
    },
    {
        title: "Cursor",
        link: "https://cursor.so",
        thumbnail: "/ourevents/2.png",
    },
    {
        title: "Rogue",
        link: "https://userogue.com",
        thumbnail: "/ourevents/3.png",
    },
    {
        title: "Editorially",
        link: "https://editorially.org",
        thumbnail: "/ourevents/4.png",
    },
    {
        title: "Editrix AI",
        link: "https://editrix.ai",
        thumbnail: "/ourevents/5.png",
    },
    {
        title: "Pixel Perfect",
        link: "https://app.pixelperfect.quest",
        thumbnail: "/ourevents/6.png",
    },
    {
        title: "Algochurn",
        link: "https://algochurn.com",
        thumbnail: "/ourevents/4.png",
    },
    {
        title: "Aceternity UI",
        link: "https://ui.aceternity.com",
        thumbnail: "/ourevents/2.png",
    },
    {
        title: "Campus Warmup",
        link: "https://campuswarmup.com",
        thumbnail: "/ourevents/1.png",
    },
    {
        title: "Editrix AI",
        link: "https://editrix.ai",
        thumbnail: "/ourevents/5.png",
    },
    {
        title: "Pixel Perfect",
        link: "https://app.pixelperfect.quest",
        thumbnail: "/ourevents/6.png",
    },
    {
        title: "Moonbeam",
        link: "https://gomoonbeam.com",
        thumbnail: "/ourevents/1.png",
    },
    {
        title: "Grand Finale",
        link: "https://grandfinale.com",
        thumbnail: "/ourevents/4.png",
    }
];

export default function OurEvents({ AceternityWidget }: Props): React.ReactElement {
    return (
        <section className="w-full py-8 sm:py-12 lg:py-16 bg-white relative">
            <div className="max-w-full sm:max-w-4xl md:max-w-6xl lg:max-w-7xl xl:max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Heading */}
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 sm:mb-10 lg:mb-12 text-gray-900">
                    Our <span className="text-indigo-600">Events</span>
                </h2>

                {/* HeroParallax */}
                <div className="w-full mb-8 sm:mb-10 lg:mb-12">
                    {AceternityWidget ? <AceternityWidget /> : <HeroParallax products={products} />}
                </div>
            </div>
        </section>
    );
}