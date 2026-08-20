import React, { useState, useEffect, useRef } from "react";
import { CustomCard } from "@/components/CustomCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Calendar, Loader2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { BACKEND_URL } from "../config";
import useTodoStore from "../store.ts/todostore";
import useCardset from "../store.ts/store";
import { useRoomStore } from "../store.ts/roomstore";
import useEventStore from "../store.ts/eventstore";
import { useSocketStore } from "../store.ts/socketstore";


export const Dashboard = () => {
    const navigate = useNavigate();
    const roomPinRef = useRef<HTMLInputElement>(null);
    const setRoomId = useRoomStore((state) => state.setRoomId);
    const [isSyncingCalendar, setIsSyncingCalendar] = useState(false);


    const { todos, fetchtodo } = useTodoStore();
    const { card, fetchcarddata } = useCardset();
    const { events, fetchEvents } = useEventStore();

    useEffect(() => {
        fetchtodo();
        fetchcarddata();
        fetchEvents();
    }, [fetchtodo, fetchcarddata, fetchEvents]);

    const todayString = new Date().toISOString().split('T')[0];
    const todayEvents = events.filter(e => e.date === todayString);

    const importantTodos = todos.filter(t => t.priority === "high").slice(0, 2);
    const importantYoutube = card.filter(c => c.priority === "high" && c.type === "youtube").slice(0, 2);
    const importantTwitter = card.filter(c => c.priority === "high" && c.type === "twitter").slice(0, 2);


    const handleSyncCalendar = () => {
        setIsSyncingCalendar(true);
        setTimeout(() => setIsSyncingCalendar(false), 2000);
    };



    function sendrequestocreate() {
        const roomPin = roomPinRef.current?.value;
        if (!roomPin) return alert("Please enter a Room PIN");
        
        setRoomId(roomPin);
        // Connect via shared store
        useSocketStore.getState().connect("create");
        
        // Wait briefly for connection before navigating, or just navigate
        setTimeout(() => {
            navigate('/chat');
        }, 100);
    }
    
    function sendjoinrequest (){
        const roomPin = roomPinRef.current?.value;
        if (!roomPin) return alert("Please enter a Room PIN");
        
        setRoomId(roomPin);
        // Connect via shared store
        useSocketStore.getState().connect("join");
        
        // Wait briefly for connection before navigating
        setTimeout(() => {
            navigate('/chat');
        }, 100);
    }
    return (
        <div className="min-h-screen bg-surface-0 p-6 md:p-10 font-sans text-on-surface">
            <div className="mb-10 w-full max-w-3xl">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-3">
                    Welcome back
                </h1>
                <p className="text-zinc-400 text-lg">
                    Save YouTube videos, manage rooms, and seamlessly sync your events—all in one place.
                </p>
            </div>
            
            <div className="grid grid-cols-12 gap-4">
                 <div className="bg-surface-container col-span-12 md:col-span-8 rounded-3xl p-6 transition-all duration-300 hover:scale-[1.02] hover:-translate-y-2 hover:shadow-2xl hover:shadow-indigo-500/20 border border-transparent hover:border-indigo-500/30">
                    <h2 className="text-xl font-semibold text-white mb-4">Important Items</h2>
                    <div className="flex flex-col gap-3">
                        {importantTodos.map(todo => (
                            <div key={todo.id} onClick={() => navigate('/todo')} className="p-4 bg-surface-0 rounded-xl cursor-pointer hover:bg-zinc-800 transition-colors border border-zinc-800 flex flex-col gap-1">
                                <div className="text-white font-medium">{todo.title}</div>
                                <div className="text-xs text-indigo-400">Go to Todo</div>
                            </div>
                        ))}
                        {importantYoutube.map(c => (
                            <div key={c.id} onClick={() => navigate('/youtube')} className="p-4 bg-surface-0 rounded-xl cursor-pointer hover:bg-zinc-800 transition-colors border border-zinc-800 flex flex-col gap-1">
                                <div className="text-white font-medium line-clamp-1">{c.title}</div>
                                <div className="text-xs text-zinc-400 flex gap-2">
                                    <span>YouTube</span>
                                    <span>•</span>
                                    <a href={c.link} target="_blank" rel="noreferrer" onClick={(e) => e.stopPropagation()} className="text-indigo-400 hover:underline truncate">
                                        {c.link}
                                    </a>
                                </div>
                            </div>
                        ))}
                        {importantTwitter.map(c => (
                            <div key={c.id} onClick={() => navigate('/twitter')} className="p-4 bg-surface-0 rounded-xl cursor-pointer hover:bg-zinc-800 transition-colors border border-zinc-800 flex flex-col gap-1">
                                <div className="text-white font-medium line-clamp-1">{c.title}</div>
                                <div className="text-xs text-zinc-400 flex gap-2">
                                    <span>Twitter</span>
                                    <span>•</span>
                                    <a href={c.link} target="_blank" rel="noreferrer" onClick={(e) => e.stopPropagation()} className="text-indigo-400 hover:underline truncate">
                                        {c.link}
                                    </a>
                                </div>
                            </div>
                        ))}
                        {importantTodos.length === 0 && importantYoutube.length === 0 && importantTwitter.length === 0 && (
                            <div className="text-zinc-500 text-sm">No important items found.</div>
                        )}
                    </div>
                 </div>
                 <div className="bg-surface-container col-span-12 md:col-span-4 rounded-3xl p-6 flex flex-col gap-4 transition-all duration-300 hover:scale-[1.02] hover:-translate-y-2 hover:shadow-2xl hover:shadow-indigo-500/20 border border-transparent hover:border-indigo-500/30">
                    <h2 className="text-xl font-semibold text-white mb-2">Add Event</h2>
                    <div className="flex flex-col gap-2">
                        <label className="text-sm text-zinc-400 font-medium">Event Title</label>
                        <Input type="text" placeholder="Enter event title" className="bg-surface-0 border-none text-white placeholder:text-zinc-500 focus-visible:ring-1 focus-visible:ring-indigo-500" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="text-sm text-zinc-400 font-medium">Event Date</label>
                        <Input type="date" className="bg-surface-0 border-none text-white focus-visible:ring-1 focus-visible:ring-indigo-500 [color-scheme:dark]" />
                    </div>
                    <Button onClick={() => navigate('/event')} className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium mt-2">
                        Add Event
                    </Button>
                    <Button 
                        variant="outline" 
                        onClick={handleSyncCalendar}
                        disabled={isSyncingCalendar}
                        className="w-full border-zinc-700 text-zinc-300 hover:bg-zinc-800 hover:text-white flex items-center justify-center gap-2"
                    >
                        {isSyncingCalendar ? (
                            <><Loader2 className="w-5 h-5 animate-spin" /> Syncing...</>
                        ) : (
                            <><Calendar className="w-5 h-5" /> Sync with Google Calendar</>
                        )}
                    </Button>
                 </div>
                    
                 

                 </div>
            <div className="grid grid-cols-12 gap-4 mt-4">
            <div className="bg-surface-container col-span-12 md:col-span-4 rounded-3xl p-6 flex flex-col gap-4 transition-all duration-300 hover:scale-[1.02] hover:-translate-y-2 hover:shadow-2xl hover:shadow-indigo-500/20 border border-transparent hover:border-indigo-500/30">
                <div className="flex flex-col gap-1">
                    <h2 className="text-xl font-semibold text-white">Today's Events</h2>
                </div>
                <div className="flex flex-col gap-2 mt-1 flex-1 overflow-y-auto max-h-40 no-scrollbar">
                    {todayEvents.length > 0 ? (
                        todayEvents.map(e => (
                            <div key={e.id} className="p-3 bg-surface-0 rounded-xl border border-white/5 flex flex-col gap-1">
                                <div className="text-white font-medium text-sm">{e.title}</div>
                                {e.time && <div className="text-xs text-indigo-400">{e.time}</div>}
                            </div>
                        ))
                    ) : (
                        <div className="text-zinc-500 text-sm py-2">No events scheduled for today.</div>
                    )}
                </div>
                <div className="mt-auto flex flex-col gap-2 pt-2">
                    <Button onClick={() => navigate('/event')} className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium flex items-center justify-center gap-2">
                        <Calendar className="w-4 h-4" />
                        View All Events
                    </Button>
                </div>
            </div>
            <div className="bg-surface-container col-span-12 md:col-span-4 rounded-3xl p-6 flex flex-col gap-4 transition-all duration-300 hover:scale-[1.02] hover:-translate-y-2 hover:shadow-2xl hover:shadow-indigo-500/20 border border-transparent hover:border-indigo-500/30">
                <div className="flex flex-col gap-1">
                    <h2 className="text-xl font-semibold text-white">Day Planner</h2>
                    <p className="text-zinc-400 text-sm leading-relaxed">
                        Describe your goals and let the planner arrange your day around your energy, priorities, and commitments.
                    </p>
                </div>
                <div className="mt-auto flex flex-col gap-2 pt-2">
                    <Button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium flex items-center justify-center gap-2">
                        Open Planner
                    </Button>
                </div>
            </div>
            <div className="bg-surface-container col-span-12 md:col-span-4 rounded-3xl p-6 flex flex-col gap-4 transition-all duration-300 hover:scale-[1.02] hover:-translate-y-2 hover:shadow-2xl hover:shadow-indigo-500/20 border border-transparent hover:border-indigo-500/30">
                <div className="flex flex-col gap-1">
                    <h2 className="text-xl font-semibold text-white">Rooms</h2>
                    <p className="text-zinc-400 text-sm leading-relaxed">
                        Create and join rooms to collaborate, share resources, and connect with your team.
                    </p>
                </div>
                <div className="mt-auto flex flex-col gap-2 pt-2">
                    <Input 
                        type="text" 
                        ref={roomPinRef}
                        placeholder="Enter Room PIN" 
                        className="bg-surface-0 border-none text-white placeholder:text-zinc-500 focus-visible:ring-1 focus-visible:ring-indigo-500 mb-2" 
                    />
                    <Button onClick={() => {
                        if (roomPinRef.current?.value) {
                            setRoomId(roomPinRef.current.value);
                            sendjoinrequest();
                        } else {
                            alert("Please enter a Room PIN");
                        }
                    }} className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium flex items-center justify-center gap-2">
                        Join
                    </Button>
                    <Button onClick={sendrequestocreate} variant="outline" className="w-full border-zinc-700 text-zinc-300 hover:bg-zinc-800 hover:text-white flex items-center justify-center gap-2">
                        Create
                    </Button>
                </div>
            </div>


            </div>
        </div>
    
    );
};

export default Dashboard;
