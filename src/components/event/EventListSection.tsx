import Image from "next/image";
import React from "react";

type EventType = {
    day: number;
    title: string;
    company: string;
    time: string;
    price: string;
    attendees: number;
    image: string;
    description: string;
    instructor: string;
    location: string;
};

interface EventListSectionProps {
    eventList: EventType[];
}

const EventListSection: React.FC<EventListSectionProps> = ({ eventList }) => (
    <div className="bg-white rounded-2xl shadow-lg p-6 max-w-2xl mx-auto w-full">
        <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-bold">Your next events</h3>
            <a href="#" className="text-purple-600 text-sm font-semibold hover:underline">View all</a>
        </div>
        <div className="flex flex-col gap-4">
            {eventList.map((event, idx) => (
                <div key={idx} className="flex items-center gap-4 bg-gray-50 rounded-xl p-3 hover:shadow-md transition">
                    <Image src={event.image} alt="Event" width={60} height={60} className="rounded-lg object-cover w-16 h-16" />
                    <div className="flex-1">
                        <div className="text-gray-900 font-semibold text-base">{event.title}</div>
                        <div className="text-gray-500 text-xs">{event.time}</div>
                        <div className="text-gray-400 text-xs">{event.company}</div>
                    </div>
                    <div className="flex flex-col items-end gap-1">
                        <span className="text-purple-600 font-bold text-sm">{event.price}</span>
                        <span className="text-gray-400 text-xs">{event.attendees} attendees</span>
                    </div>
                </div>
            ))}
        </div>
    </div>
);

export default EventListSection;
