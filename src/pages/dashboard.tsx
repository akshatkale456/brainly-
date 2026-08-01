import React from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Calendar, Mail, Filter } from "lucide-react";

export const Dashboard = () => {
    return (
        <div className="min-h-screen bg-surface-0 p-6 md:p-10 font-sans text-on-surface">
            <div className="mb-10 w-full max-w-3xl">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-3">
                    Welcome back
                </h1>
                <p className="text-zinc-400 text-lg">
                    Save YouTube videos, manage rooms, and seamlessly sync your events and mail—all in one place.
                </p>
            </div>
            
            <div className="grid grid-cols-12 gap-4">
                 <div className="bg-surface-container md:col-span-8 rounded-3xl">
hello
                 </div>
                 <div className="bg-surface-container md:col-span-4 rounded-3xl p-6 flex flex-col gap-4">
                    <h2 className="text-xl font-semibold text-white mb-2">Add Event</h2>
                    <div className="flex flex-col gap-2">
                        <label className="text-sm text-zinc-400 font-medium">Event Title</label>
                        <Input type="text" placeholder="Enter event title" className="bg-surface-0 border-none text-white placeholder:text-zinc-500 focus-visible:ring-1 focus-visible:ring-indigo-500" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="text-sm text-zinc-400 font-medium">Event Date</label>
                        <Input type="date" className="bg-surface-0 border-none text-white focus-visible:ring-1 focus-visible:ring-indigo-500 [color-scheme:dark]" />
                    </div>
                    <Button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium mt-2">
                        Add Event
                    </Button>
                    <Button variant="outline" className="w-full border-zinc-700 text-zinc-300 hover:bg-zinc-800 hover:text-white flex items-center justify-center gap-2">
                        <Calendar className="w-5 h-5" />
                        Sync with Google Calendar
                    </Button>
                 </div>
                    
                 

                 </div>
            <div className="grid grid-cols-12 gap-4 mt-4">
            <div className="bg-surface-container col-span-12 md:col-span-4 rounded-3xl p-6 flex flex-col gap-4">
                <div className="flex flex-col gap-1">
                    <h2 className="text-xl font-semibold text-white">Smart Mail Filter</h2>
                    <p className="text-zinc-400 text-sm leading-relaxed">
                        Keep your inbox clean. Automatically sort and filter important updates from clutter by securely syncing with your email provider.
                    </p>
                </div>
                <div className="mt-auto flex flex-col gap-2 pt-2">
                    <Button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium flex items-center justify-center gap-2">
                        <Filter className="w-4 h-4" />
                        View Filtered Emails
                    </Button>
                    <Button variant="outline" className="w-full border-zinc-700 text-zinc-300 hover:bg-zinc-800 hover:text-white flex items-center justify-center gap-2">
                        <Mail className="w-4 h-4" />
                        Sync with Email
                    </Button>
                </div>
            </div>
            <div className="bg-surface-container col-span-12 md:col-span-4 rounded-3xl">
hii
            </div>
            <div className="bg-surface-container col-span-12 md:col-span-4 rounded-3xl">
hii
            </div>


            </div>
        </div>
    
    );
};

export default Dashboard;
