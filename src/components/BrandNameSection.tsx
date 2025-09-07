"use client";
import React from "react";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";

export default function BrandNameSection() {
    return (
        <section className="w-full bg-neutral-950 py-12">
            <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12">
                <h3 className="text-center text-xs sm:text-sm md:text-base text-neutral-400 mb-4 sm:mb-6">Brand showcase</h3>
                <div className="h-[20rem] flex items-center justify-center overflow-visible">
                    <TextHoverEffect text="Taivas Debate club" className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl whitespace-normal break-words text-center" />
                </div>
            </div>
        </section>
    );
}