import React from "react";
import { motion } from "framer-motion";

const AnimatedHero = () => (
    <section className="w-full flex flex-col items-center justify-center py-20 bg-gradient-to-b from-blue-100 to-purple-100 min-h-[60vh]">
        <motion.h2
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-6 drop-shadow-lg"
        >
            Welcome to the Student Debate Platform
        </motion.h2>
        <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-xl text-gray-700 max-w-2xl text-center"
        >
            Engage in lively debates, showcase your skills, and experience interactive 3D animations and effects!
        </motion.p>
    </section>
);

export default AnimatedHero;
