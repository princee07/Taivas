"use client";

import { motion } from "framer-motion";
import { FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

const InfoBar = () => (
    <section className="w-full flex flex-col md:flex-row items-stretch justify-center gap-0 mt-[-6rem] mb-8">
        {/* Date Section */}
        <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="flex-1 min-h-[200px] md:min-h-[260px] bg-black/40 p-8 flex items-center gap-6 shadow-lg backdrop-blur-md"
        >
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-white/10 border border-white/20">
                <FaCalendarAlt className="text-3xl text-white/90" />
            </div>
            <div>
                <span className="uppercase text-sm text-gray-300 tracking-widest">When</span>
                <h3 className="text-xl md:text-2xl font-bold text-white mt-1">11-14 Dec 2015</h3>
                <p className="text-sm text-gray-400 mt-2">Starting 9:00 am</p>
            </div>
        </motion.div>
        {/* Location Section */}
        <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex-1 min-h-[200px] md:min-h-[260px] bg-red-600/70 p-8 flex items-center gap-6 shadow-lg backdrop-blur-md"
        >
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-white/10 border border-white/20">
                <FaMapMarkerAlt className="text-3xl text-white/90" />
            </div>
            <div>
                <span className="uppercase text-sm text-gray-200 tracking-widest">Where</span>
                <h3 className="text-xl md:text-2xl font-bold text-white mt-1">London, UK</h3>
                <p className="text-sm text-white/90 mt-2">Meeting Events, Park Royal</p>
            </div>
        </motion.div>
    </section>
);

export default InfoBar;