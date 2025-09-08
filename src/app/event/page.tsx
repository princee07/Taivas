
"use client";
import React, { useState } from "react";

import Calendar from "@/components/event/Calendar";
import Image from "next/image";
import { Sidebar, SidebarBody, SidebarLink } from "@/components/ui/sidebar-demo";
import EventListSection from "@/components/event/EventListSection";
import { IconHome, IconMessageCircle, IconUsers, IconCalendarEvent, IconAlarm, IconLogout } from "@tabler/icons-react";

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

const eventList: EventType[] = [
    {
        day: 8,
        title: "How To Become A Tech Speaker",
        company: "LoremCompany - Manila",
        time: "Wed, Jul 18 • 6:00AM GMT+8",
        price: "$647.00",
        attendees: 5,
        image: "/ourevents/1.png",
        description: "Learn how to become a tech speaker from industry experts.",
        instructor: "Jane Doe",
        location: "Manila Conference Center",
    },
    {
        day: 17,
        title: "Free Webinar - The Art Of Technology",
        company: "LoremCompany - Manila",
        time: "Wed, Jul 18 • 6:00AM GMT+8",
        price: "Free",
        attendees: 5,
        image: "/ourevents/2.png",
        description: "A free webinar on the art of technology.",
        instructor: "John Smith",
        location: "Online",
    },
];

const events: { [key: number]: EventType } = {};
eventList.forEach((e) => (events[e.day] = e));

export default function EventPage() {
    const [selectedDay, setSelectedDay] = useState<number | null>(null);
    const selectedEvent = selectedDay ? events[selectedDay] : null;

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col md:flex-row">
            <Sidebar>
                <SidebarBody>
                    <div className="flex flex-col gap-2 mt-8 md:mt-32">
                        <SidebarLink link={{
                            label: "Dashboard", href: "#", icon: (
                                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-blue-400 text-white">
                                    <IconHome size={22} stroke={1.7} />
                                </span>
                            )
                        }} />
                        <SidebarLink link={{
                            label: "Messages", href: "#", icon: (
                                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-pink-500 to-purple-400 text-white">
                                    <IconMessageCircle size={22} stroke={1.7} />
                                </span>
                            )
                        }} />
                        <SidebarLink link={{
                            label: "Groups", href: "#", icon: (
                                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-green-500 to-teal-400 text-white">
                                    <IconUsers size={22} stroke={1.7} />
                                </span>
                            )
                        }} />
                        <SidebarLink link={{
                            label: "Events", href: "#", icon: (
                                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-yellow-500 to-orange-400 text-white">
                                    <IconCalendarEvent size={22} stroke={1.7} />
                                </span>
                            )
                        }} />
                        <SidebarLink link={{
                            label: "Reminders", href: "#", icon: (
                                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 text-white">
                                    <IconAlarm size={22} stroke={1.7} />
                                </span>
                            )
                        }} />
                        <SidebarLink link={{
                            label: "Logout", href: "#", icon: (
                                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-gray-500 to-gray-400 text-white">
                                    <IconLogout size={22} stroke={1.7} />
                                </span>
                            )
                        }} />
                    </div>
                </SidebarBody>
            </Sidebar>
            {/* Main Content */}
            <main className="flex-1 flex flex-col gap-6 p-2 sm:p-4 md:p-10">
                {/* Header */}
                <div className="w-full flex flex-col md:flex-row md:items-center gap-4 mt-8 md:mt-20">
                    <div className="flex-1">
                        <div className="rounded-2xl bg-gradient-to-r from-purple-600 to-blue-500 px-4 py-8 md:px-6 md:py-12 flex flex-col md:flex-row items-center gap-4 md:gap-6 shadow-lg max-w-screen-xl mx-auto w-full">
                            <div className="flex-1 text-center md:text-left">
                                <h2 className="text-white text-2xl md:text-3xl font-bold mb-1">Welcome back, Charriss Graziel</h2>
                                <p className="text-purple-100 text-sm md:text-base">Lorem ipsum dolor sit amet consectetur. Morbi turpis facilisi eget nec amet. Arcu id enim tortor aliquam ullamcorper. Scelerisque et gravida pulvinar massa suspendisse eget urna.</p>
                            </div>
                            <div className="hidden md:block flex-shrink-0">
                                <Image src="/ourevents/1.png" alt="Banner" width={120} height={80} className="rounded-xl object-cover" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                    {/* Calendar Section */}
                    <div>
                        <div className="bg-white rounded-2xl p-4 md:p-6 w-full">
                            <h3 className="text-lg font-bold mb-4">My Schedule</h3>
                            <Calendar onDayClick={setSelectedDay} events={events} />
                        </div>
                    </div>
                    {/* Event List Section */}
                    <div className="flex flex-col gap-4 md:gap-6 mt-4 md:mt-0">
                        {/* Selected Event Banner */}
                        {selectedEvent && (
                            <div className="bg-white rounded-2xl shadow-lg flex flex-col md:flex-row gap-4 md:gap-6 p-4 md:p-6 mb-2 animate-fade-in">
                                <Image src={selectedEvent.image} alt="Event" width={120} height={120} className="rounded-xl object-cover w-24 h-24 md:w-32 md:h-32 mx-auto md:mx-0" />
                                <div className="flex-1 flex flex-col justify-between text-center md:text-left">
                                    <div>
                                        <h4 className="text-lg md:text-xl font-bold text-gray-900 mb-1">{selectedEvent.title}</h4>
                                        <div className="text-gray-500 text-xs md:text-sm mb-1">{selectedEvent.time}</div>
                                        <div className="text-gray-700 text-sm md:text-base mb-2">{selectedEvent.description}</div>
                                    </div>
                                    <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 mt-2">
                                        <span className="text-purple-600 font-semibold">{selectedEvent.price}</span>
                                        <span className="text-gray-400 text-xs md:text-sm">{selectedEvent.attendees} attendees</span>
                                        <button className="w-full md:w-auto ml-0 md:ml-auto px-4 md:px-5 py-2 rounded-full bg-gradient-to-r from-purple-600 to-blue-500 text-white font-bold shadow hover:scale-105 transition">Book Now</button>
                                    </div>
                                </div>
                            </div>
                        )}
                        {/* Event List */}
                        <EventListSection eventList={eventList} />
                    </div>
                </div>
            </main>
        </div>
    );
}