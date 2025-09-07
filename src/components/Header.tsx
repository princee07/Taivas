import React from "react";

const Header = () => (
    <header className="w-full py-6 flex justify-between items-center bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg">
        <h1 className="text-3xl font-bold text-white drop-shadow-lg">Student Debate</h1>
        <nav>
            <ul className="flex gap-6 text-white font-semibold">
                <li><a href="#about" className="hover:underline">About</a></li>
                <li><a href="#debates" className="hover:underline">Debates</a></li>
                <li><a href="#contact" className="hover:underline">Contact</a></li>
            </ul>
        </nav>
    </header>
);

export default Header;
