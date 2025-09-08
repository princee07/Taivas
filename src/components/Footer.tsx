import React from "react";


const Footer = () => (
    <footer className="w-full py-3 md:py-4 px-2 md:px-0 text-center bg-gray-900 text-white mt-12 shadow-inner">
        <p className="text-xs md:text-base leading-tight">&copy; {new Date().getFullYear()} Student Debate. All rights reserved.</p>
    </footer>
);

export default Footer;
