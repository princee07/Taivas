import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface Event {
    title: string;
    instructor: string;
    time: string;
    location: string;
    description: string;
    image?: string;
}

interface CalendarProps {
    onDayClick: (day: number) => void;
    events: { [key: number]: Event };
}

const Calendar: React.FC<CalendarProps> = ({ onDayClick, events }) => {
    const [currentDate, setCurrentDate] = useState(new Date(2025, 8, 9)); // September 9, 2025, 02:22 AM IST

    const prevMonth = () => setCurrentDate(new Date(currentDate.setMonth(currentDate.getMonth() - 1)));
    const nextMonth = () => setCurrentDate(new Date(currentDate.setMonth(currentDate.getMonth() + 1)));

    const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
    const firstDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();

    const renderDays = () => {
        const days = [];
        for (let i = 0; i < (firstDay || 7) - 1; i++) days.push(
            <div key={`empty-${i}`} className="p-2"></div>
        );
        for (let day = 1; day <= daysInMonth; day++) {
            const hasEvent = events[day];
            days.push(
                <motion.div
                    key={day}
                    className={`aspect-square w-full flex flex-col items-center justify-center cursor-pointer text-center border transition-all duration-200
            ${hasEvent ? "bg-gradient-to-br from-pink-100 to-purple-100 border-pink-400 text-pink-700 font-bold shadow-md hover:scale-105" : "bg-gray-50 border-gray-200 text-gray-700 hover:bg-blue-50"}
          `}
                    whileHover={hasEvent ? { scale: 1.08, boxShadow: "0 4px 24px 0 rgba(236, 72, 153, 0.15)" } : { scale: 1.03 }}
                    onClick={() => hasEvent && onDayClick(day)}
                >
                    <span className="text-base md:text-lg">{day}</span>
                    {hasEvent && <span className="mt-1 w-2 h-2 rounded-full bg-pink-500 animate-pulse"></span>}
                </motion.div>
            );
        }
        return days;
    };

    useEffect(() => {
        // Set to current date and time (02:22 AM IST, September 9, 2025)
        setCurrentDate(new Date("2025-09-09T02:22:00+05:30"));
    }, []);

    return (
        <div className="bg-white rounded-3xl w-full p-0 m-0 mt-16 md:mt-24">
            <div className="flex justify-between items-center px-6 pt-6 pb-2">
                <button onClick={prevMonth} className="w-8 h-8 flex items-center justify-center bg-purple-50 text-purple-500 rounded-lg font-bold text-xl hover:bg-purple-100 transition">←</button>
                <h2 className="text-2xl font-extrabold text-gray-800 tracking-tight">
                    {currentDate.toLocaleString("en-US", { month: "long", year: "numeric" })}
                </h2>
                <button onClick={nextMonth} className="w-8 h-8 flex items-center justify-center bg-purple-50 text-purple-500 rounded-lg font-bold text-xl hover:bg-purple-100 transition">→</button>
            </div>
            <div className="grid grid-cols-7 gap-1 text-center text-gray-500 font-bold px-6 pb-2">
                {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
                    <div key={day} className="py-2 text-base">{day}</div>
                ))}
            </div>
            <div className="grid grid-cols-7 gap-1 px-6 pb-6">
                {(() => {
                    const days = [];
                    for (let i = 0; i < (firstDay || 7) - 1; i++) days.push(
                        <div key={`empty-${i}`} className="py-2"></div>
                    );
                    for (let day = 1; day <= daysInMonth; day++) {
                        const hasEvent = events[day];
                        days.push(
                            <motion.div
                                key={day}
                                className={`aspect-square w-full flex flex-col items-center justify-center cursor-pointer text-center rounded-lg border-2 transition-all duration-200
                                    ${hasEvent ? "bg-pink-50 border-pink-400 text-pink-600 font-bold shadow-sm" : "bg-white border-gray-200 text-gray-700 hover:bg-purple-50"}
                                `}
                                whileHover={hasEvent ? { scale: 1.08, boxShadow: "0 4px 24px 0 rgba(236, 72, 153, 0.15)" } : { scale: 1.03 }}
                                onClick={() => hasEvent && onDayClick(day)}
                            >
                                <span className="text-base md:text-lg">{day}</span>
                                {hasEvent && <span className="mt-1 w-2 h-2 rounded-full bg-pink-500"></span>}
                            </motion.div>
                        );
                    }
                    return days;
                })()}
            </div>
        </div>
    );
};

export default Calendar;