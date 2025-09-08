"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
    IconBrandGithub,
    IconBrandX,
    IconBrandInstagram,
    IconBrandFacebook,
    IconBrandLinkedin,
} from "@tabler/icons-react";

const socialLinks = [
    {
        title: "Twitter",
        icon: <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
        href: "https://twitter.com",
    },
    {
        title: "Instagram",
        icon: <IconBrandInstagram className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
        href: "https://instagram.com",
    },
    {
        title: "Facebook",
        icon: <IconBrandFacebook className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
        href: "https://facebook.com",
    },
    {
        title: "GitHub",
        icon: <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
        href: "https://github.com",
    },
    {
        title: "LinkedIn",
        icon: <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
        href: "https://linkedin.com",
    },
];

export default function Footer() {
    return (
        <footer className="relative bg-black text-white overflow-hidden w-screen">
            {/* subtle decorative blob left */}
            <motion.div
                aria-hidden
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2 }}
                className="pointer-events-none absolute -top-20 -left-16 w-[300px] h-[300px] rounded-full md:-top-28 md:-left-24 md:w-[420px] md:h-[420px]"
                style={{
                    background: "linear-gradient(135deg, rgba(255,230,130,0.06), rgba(99,102,241,0.06))",
                    filter: "blur(56px)",
                }}
            />

            <div className="relative z-10 w-full px-4 sm:px-6 md:px-12 py-4 sm:py-6 md:py-8">
                {/* top header: logo+name left, contact right */}
                <div className="flex flex-col sm:flex-row items-start justify-between gap-4 sm:gap-6 py-4 sm:py-6">
                    <motion.div initial={{ x: -12, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.6 }} className="flex items-center gap-2 sm:gap-4">
                        <div className="w-10 h-10 sm:w-14 sm:h-14 relative flex-shrink-0">
                            <Image src="/logo.png" alt="Taivas logo" fill className="object-contain" />
                        </div>
                        <div className="leading-tight">
                            <div className="text-base sm:text-xl font-semibold">Taivas Edutech Services and</div>
                            <div className="text-base sm:text-xl font-semibold">Consultants Pvt. Ltd.</div>
                        </div>
                    </motion.div>

                    <motion.div initial={{ y: -6, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6 }} className="text-xs sm:text-sm text-neutral-300">
                        Contact No.: <span className="font-medium">(+91) 95999 26175</span>
                    </motion.div>
                </div>

                {/* thin yellow divider */}
                <div className="h-[1px] sm:h-[2px] bg-yellow-400/90 w-full" />

                {/* main links area */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 py-6 sm:py-10">
                    <motion.div initial={{ y: 8, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.05 }}>
                        <h4 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3">Programs</h4>
                        <ul className="space-y-1 sm:space-y-2 text-neutral-300">
                            <li><Link href="#student-programme" className="hover:text-white transition-colors text-sm sm:text-base">Students Programmes</Link></li>
                            <li><Link href="#school-programme" className="hover:text-white transition-colors text-sm sm:text-base">Schools Programmes</Link></li>
                        </ul>
                    </motion.div>

                    <motion.div className="text-center" initial={{ y: 8, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.12 }}>
                        <h3 className="text-xl sm:text-2xl font-bold mb-1 sm:mb-2">Taivas</h3>
                        <Link href="#what-is-taivas" className="text-neutral-300 hover:text-white transition-colors text-sm sm:text-base">What is TAIVAS?</Link>
                    </motion.div>

                    <motion.div className="text-right sm:text-left" initial={{ y: 8, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.18 }}>
                        <h4 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3">Other Links</h4>
                        <ul className="space-y-1 sm:space-y-2 text-neutral-300">
                            <li><Link href="#blogs" className="hover:text-white transition-colors text-sm sm:text-base">Blogs</Link></li>
                            <li><Link href="#events" className="hover:text-white transition-colors text-sm sm:text-base">Events</Link></li>
                        </ul>
                    </motion.div>
                </div>

                {/* small bottom separator */}
                <div className="h-[0.5px] sm:h-[1px] bg-white/6 w-full mt-2 sm:mt-4" />

                {/* bottom row: copyright left, social icons right */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-4 sm:py-6">
                    <div className="text-xs sm:text-sm text-neutral-400 text-center sm:text-left">© {new Date().getFullYear()} Taivas Debate Club — Built with curiosity.</div>

                    <div className="flex items-center gap-2 sm:gap-3 w-full sm:w-auto justify-center">
                        <FloatingDock
                            items={socialLinks}
                            desktopClassName="ml-auto"
                            mobileClassName="translate-y-16 sm:translate-y-20"
                        />
                    </div>
                </div>
            </div>
        </footer>
    );
}