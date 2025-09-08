"use client";

import React from "react";
import Image from "next/image";

export default function About3D(): React.ReactElement {
    const imgPath = "/about/mic.png"; // expected in public/about/mic.png

    return (
        <div
            className="w-full h-48 sm:h-64 md:h-80 lg:h-96 flex items-center justify-center shadow-none"
            style={{ background: "inherit" }}
        >
            <Image
                src={imgPath}
                alt="Microphone"
                width={200}
                height={280}
                sizes="(max-width: 640px) 150px, (max-width: 768px) 200px, 300px"
                className="max-h-full w-auto h-auto object-contain shadow-none"
                style={{ boxShadow: "none", filter: "none", background: "inherit", mixBlendMode: "multiply" }}
            />
        </div>
    );
}