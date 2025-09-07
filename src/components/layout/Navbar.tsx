

import Image from "next/image";
import { FaSearch, FaShoppingCart } from "react-icons/fa";

const Navbar = () => (
    <nav className="w-full flex items-center justify-center py-6 fixed top-0 left-0 z-30 bg-transparent">
        <div className="flex items-center justify-between w-[90vw] max-w-6xl px-6 py-2 bg-white bg-opacity-95 shadow-lg rounded-full border border-gray-200">
            {/* Logo */}
            <div className="flex items-center gap-3 pl-2">
                <Image src="/logo.png" alt="Logo" width={40} height={40} className="rounded-full shadow-none" />
                <div className="flex flex-col">
                    <span className="text-lg md:text-xl font-semibold text-cyan-900 leading-tight">Taivas</span>
                    <span className="text-lg md:text-xl font-semibold text-cyan-900 leading-tight">Debate Club</span>
                </div>
            </div>
            {/* Nav Links */}
            <ul className="flex gap-7 text-base font-semibold ml-8">
                <li><a href="#home" className="text-pink-500">Home</a></li>
                <li><a href="#pages" className="text-gray-800 hover:text-pink-500 transition">Pages</a></li>
                <li><a href="#events" className="text-gray-800 hover:text-pink-500 transition">Events</a></li>
                <li><a href="#services" className="text-gray-800 hover:text-pink-500 transition">Services</a></li>
                <li><a href="#blog" className="text-gray-800 hover:text-pink-500 transition">Blog</a></li>
                <li><a href="#contact" className="text-gray-800 hover:text-pink-500 transition">Contact</a></li>
            </ul>
            {/* Right Side Icons & Button */}
            <div className="flex items-center gap-4 ml-8 pr-2">
                <button className="text-gray-700 hover:text-pink-500 text-lg"><FaSearch /></button>
                <button className="text-gray-700 hover:text-pink-500 text-lg"><FaShoppingCart /></button>
                <button className="ml-2 px-6 py-2 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold shadow-md hover:scale-105 transition text-base">Register</button>
            </div>
        </div>
    </nav>
);

export default Navbar;
