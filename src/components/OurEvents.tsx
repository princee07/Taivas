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
        <section className="w-full py-16 bg-white relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
                {/* Section Heading */}
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 text-gray-900">
                    Our <span className="text-indigo-600">Events</span>
                </h2>

                {/* HeroParallax only */}
                <div className="w-full mb-12">
                    {AceternityWidget ? <AceternityWidget /> : <HeroParallax products={products} />}
                </div>
            </div>
        </section>
    );
}
