"use client";

import React from "react";
import Image from "next/image";

export default function About3D(): React.ReactElement {
    // Simple image-based replacement for the 3D mic. Keeps the component import
    // in place but removes the heavy Three.js scene.
    const imgPath = "/about/mic.png"; // expected in public/about/mic.png

    return (
        // ensure container inherits the parent's background so the image blends
        <div
            className="w-full h-64 md:h-80 lg:h-96 flex items-center justify-center shadow-none"
            style={{ background: "inherit" }}
        >
            {/* Use next/image to keep layout stable. If the image is missing, nothing breaks. */}
            <Image
                src={imgPath}
                alt="Microphone"
                width={300}
                height={420}
                className="max-h-full object-contain shadow-none"
                // blend the image white background into the parent background
                style={{ boxShadow: "none", filter: "none", background: "inherit", mixBlendMode: "multiply" }}
            />
        </div>
    );
}

