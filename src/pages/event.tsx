import { Calendar, Search, Plus, Clock, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { useState, useEffect } from "react";
import useEventStore from "../store.ts/eventstore";

export const EventPage = () => {
    const { events, fetchEvents, addEvent, deleteEvent } = useEventStore();
    const [searchQuery, setSearchQuery] = useState("");
    const [title, setTitle] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [isCreating, setIsCreating] = useState(false);

    useEffect(() => {
        fetchEvents();
    }, [fetchEvents]);

    const handleAddEvent = async () => {
        if (!title.trim() || !date) return;
        
        await addEvent({
            title,
            date,
            time
        });
        
        setTitle("");
        setDate("");
        setTime("");
        setIsCreating(false);
    };

    const filteredEvents = events.filter(e => 
        e.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="min-h-screen p-6 md:p-10 font-sans text-on-surface">
            {/* Header Section */}
            <div className="mb-10 w-full max-w-5xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div>
                    <div className="flex items-center gap-3 mb-3">
                        <div className="p-3 bg-indigo-500/20 rounded-2xl">
                            <Calendar className="w-8 h-8 text-white" />
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
                            Events
                        </h1>
                    </div>
                    <p className="text-zinc-400 text-lg max-w-xl">
                        Manage your upcoming meetings, tasks, and schedule seamlessly.
                    </p>
                </div>
                <div className="flex items-center gap-2">
                    <Button 
                        onClick={() => setIsCreating(!isCreating)}
                        className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium gap-2"
                    >
                        <Plus className="w-4 h-4" /> Add Event
                    </Button>
                </div>
            </div>

            {/* Main Content */}
            <div className="w-full max-w-5xl mx-auto space-y-6">
                
                {/* Create Event Card */}
                {isCreating && (
                    <div className="bg-surface-container rounded-3xl p-6 shadow-xl border border-indigo-500/30 animate-in fade-in slide-in-from-top-4">
                        <h2 className="text-xl font-semibold text-white mb-4">Create New Event</h2>
                        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-end">
                            <div className="md:col-span-5 space-y-2">
                                <label className="text-sm text-zinc-400 font-medium">Event Title</label>
                                <Input 
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                    placeholder="e.g., Team Sync" 
                                    className="bg-surface-0 border-none text-white focus-visible:ring-1 focus-visible:ring-indigo-500"
                                />
                            </div>
                            <div className="md:col-span-3 space-y-2">
                                <label className="text-sm text-zinc-400 font-medium">Date</label>
                                <Input 
                                    type="date"
                                    value={date}
                                    onChange={(e) => setDate(e.target.value)}
                                    className="bg-surface-0 border-none text-white focus-visible:ring-1 focus-visible:ring-indigo-500 [color-scheme:dark]"
                                />
                            </div>
                            <div className="md:col-span-2 space-y-2">
                                <label className="text-sm text-zinc-400 font-medium">Time</label>
                                <Input 
                                    type="time"
                                    value={time}
                                    onChange={(e) => setTime(e.target.value)}
                                    className="bg-surface-0 border-none text-white focus-visible:ring-1 focus-visible:ring-indigo-500 [color-scheme:dark]"
                                />
                            </div>
                            <div className="md:col-span-2">
                                <Button 
                                    onClick={handleAddEvent}
                                    className="w-full bg-indigo-600 hover:bg-indigo-700 text-white"
                                >
                                    Save
                                </Button>
                            </div>
                        </div>
                    </div>
                )}

                <div className="bg-surface-container rounded-3xl p-6 shadow-xl space-y-6 border border-white/5">
                    
                    {/* Search and Filters */}
                    <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                        <div className="flex w-full md:max-w-md items-center gap-2">
                            <div className="relative w-full">
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
                                <Input 
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    placeholder="Search events..." 
                                    className="pl-10 bg-surface-0 border-none text-white focus-visible:ring-1 focus-visible:ring-indigo-500 h-11"
                                />
                            </div>
                        </div>
                        <div className="flex gap-2 w-full md:w-auto overflow-x-auto pb-2 md:pb-0 hide-scrollbar">
                            <Badge variant="secondary" className="bg-indigo-500/20 text-indigo-300 hover:bg-indigo-500/30 px-3 py-1 cursor-pointer">All Events</Badge>
                            <Badge variant="outline" className="border-zinc-700 text-zinc-400 hover:bg-zinc-800 hover:text-white px-3 py-1 cursor-pointer">Today</Badge>
                            <Badge variant="outline" className="border-zinc-700 text-zinc-400 hover:bg-zinc-800 hover:text-white px-3 py-1 cursor-pointer">Upcoming</Badge>
                        </div>
                    </div>

                    {/* Events List */}
                    <div className="space-y-3">
                        {filteredEvents.length === 0 ? (
                            <div className="py-12 text-center text-zinc-500 flex flex-col items-center">
                                <Calendar className="w-12 h-12 mb-3 opacity-20" />
                                <p>No events found matching your criteria.</p>
                            </div>
                        ) : (
                            filteredEvents.map(event => (
                                <div key={event.id} className="flex items-center justify-between p-4 bg-surface-0 rounded-2xl border border-white/5 hover:border-indigo-500/30 transition-colors group">
                                    <div className="flex items-center gap-4">
                                        <div className="flex flex-col items-center justify-center w-12 h-12 bg-indigo-500/10 rounded-xl text-indigo-400">
                                            <span className="text-xs font-bold uppercase">{new Date(event.date).toLocaleDateString('en-US', { month: 'short' })}</span>
                                            <span className="text-lg font-bold leading-none">{new Date(event.date).getDate()}</span>
                                        </div>
                                        <div>
                                            <h3 className="text-white font-medium text-lg">{event.title}</h3>
                                            <div className="flex items-center gap-3 text-sm text-zinc-400 mt-1">
                                                {event.time && (
                                                    <span className="flex items-center gap-1">
                                                        <Clock className="w-3 h-3" /> {event.time}
                                                    </span>
                                                )}
                                                <span className="flex items-center gap-1">
                                                    <Calendar className="w-3 h-3" /> {new Date(event.date).toLocaleDateString()}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <Button 
                                            variant="ghost" 
                                            size="icon-sm"
                                            onClick={() => event.id && deleteEvent(event.id)}
                                            className="text-zinc-500 hover:text-red-400 hover:bg-red-500/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                                        >
                                            <Trash2 className="w-4 h-4" />
                                        </Button>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EventPage;
