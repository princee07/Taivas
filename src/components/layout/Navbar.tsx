"use client"


import Image from "next/image";
import { FaSearch, FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <nav className="w-full flex items-center justify-center py-4 md:py-6 fixed top-0 left-0 z-30 bg-transparent">
            <div className="flex items-center justify-between w-[96vw] max-w-6xl px-3 md:px-6 py-2 bg-white bg-opacity-95 shadow-lg rounded-full border border-gray-200">
                {/* Logo */}
                <div className="flex items-center gap-3 pl-1 md:pl-2">
                    <Image src="/logo.png" alt="Logo" width={36} height={36} className="rounded-full shadow-none" />
                    <div className="flex flex-col">
                        <span className="text-base md:text-xl font-semibold text-cyan-900 leading-tight">Taivas</span>
                        <span className="text-base md:text-xl font-semibold text-cyan-900 leading-tight">Debate Club</span>
                    </div>
                </div>
                {/* Hamburger Icon (Mobile) */}
                <button
                    className="md:hidden flex items-center text-2xl text-gray-700 hover:text-pink-500 ml-auto mr-2 focus:outline-none"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
                    {menuOpen ? <FaTimes /> : <FaBars />}
                </button>
                {/* Nav Links (Desktop) */}
                <ul className="hidden md:flex gap-7 text-base font-semibold ml-8">
                    <li><a href="#home" className="text-pink-500">Home</a></li>
                    <li><a href="#pages" className="text-gray-800 hover:text-pink-500 transition">Pages</a></li>
                    <li><a href="/event" className="text-gray-800 hover:text-pink-500 transition">Events</a></li>
                    <li><a href="#services" className="text-gray-800 hover:text-pink-500 transition">Services</a></li>
                    <li><a href="#blog" className="text-gray-800 hover:text-pink-500 transition">Blog</a></li>
                    <li><a href="#contact" className="text-gray-800 hover:text-pink-500 transition">Contact</a></li>
                </ul>
                {/* Right Side Icons & Button (Desktop) */}
                <div className="hidden md:flex items-center gap-4 ml-8 pr-2">
                    <button className="text-gray-700 hover:text-pink-500 text-lg"><FaSearch /></button>
                    <button className="text-gray-700 hover:text-pink-500 text-lg"><FaShoppingCart /></button>
                    <button className="ml-2 px-6 py-2 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold shadow-md hover:scale-105 transition text-base">Register</button>
                </div>
            </div>
            {/* Mobile Dropdown Menu */}
            {menuOpen && (
                <div className="md:hidden fixed top-20 left-0 w-full bg-white bg-opacity-95 shadow-lg z-40 rounded-b-2xl animate-fade-in flex flex-col items-center py-6 gap-6 border-t border-gray-200">
                    <ul className="flex flex-col gap-5 text-lg font-semibold">
                        <li><a href="#home" className="text-pink-500" onClick={() => setMenuOpen(false)}>Home</a></li>
                        <li><a href="#pages" className="text-gray-800 hover:text-pink-500 transition" onClick={() => setMenuOpen(false)}>Pages</a></li>
                        <li><a href="#events" className="text-gray-800 hover:text-pink-500 transition" onClick={() => setMenuOpen(false)}>Events</a></li>
                        <li><a href="#services" className="text-gray-800 hover:text-pink-500 transition" onClick={() => setMenuOpen(false)}>Services</a></li>
                        <li><a href="#blog" className="text-gray-800 hover:text-pink-500 transition" onClick={() => setMenuOpen(false)}>Blog</a></li>
                        <li><a href="#contact" className="text-gray-800 hover:text-pink-500 transition" onClick={() => setMenuOpen(false)}>Contact</a></li>
                    </ul>
                    <div className="flex items-center gap-4 mt-4">
                        <button className="text-gray-700 hover:text-pink-500 text-xl"><FaSearch /></button>
                        <button className="text-gray-700 hover:text-pink-500 text-xl"><FaShoppingCart /></button>
                        <button className="ml-2 px-6 py-2 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold shadow-md hover:scale-105 transition text-base">Register</button>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
