import React, { useState, useEffect } from "react";
import { CustomCard } from "@/components/CustomCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Calendar, Mail, Filter, Loader2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { BACKEND_URL } from "../config";
import useTodoStore from "../store.ts/todostore";
import useCardset from "../store.ts/store";


export const Dashboard = () => {
    const navigate = useNavigate();
    const [roomPin, setRoomPin] = useState("");
    const [isSyncingCalendar, setIsSyncingCalendar] = useState(false);
    const [isSyncingEmail, setIsSyncingEmail] = useState(false);

    const { todos, fetchtodo } = useTodoStore();
    const { card, fetchcarddata } = useCardset();

    useEffect(() => {
        fetchtodo();
        fetchcarddata();
    }, [fetchtodo, fetchcarddata]);

    const importantTodos = todos.filter(t => t.priority === "high").slice(0, 2);
    const importantYoutube = card.filter(c => c.priority === "high" && c.type === "youtube").slice(0, 2);
    const importantTwitter = card.filter(c => c.priority === "high" && c.type === "twitter").slice(0, 2);


    const handleSyncCalendar = () => {
        setIsSyncingCalendar(true);
        setTimeout(() => setIsSyncingCalendar(false), 2000);
    };

    const handleSyncEmail = () => {
        setIsSyncingEmail(true);
        setTimeout(() => setIsSyncingEmail(false), 2000);
    };

    function sendrequestocreate() {
        if (!roomPin) return alert("Please enter a Room PIN");
        
        const token = localStorage.getItem("Authorization");
        const wsUrl = `${BACKEND_URL.replace("http", "ws")}/ws?token=${token}`;
        const socket = new WebSocket(wsUrl);
        
        socket.addEventListener("open", () => {
            console.log("user connected");
            socket.send(JSON.stringify({
                type: "create",
                roomName: roomPin
            }));
        });
        
        socket.addEventListener("message", (event) => {
            console.log("Message received from server:", event.data);
            navigate('/chat');
        });
    }
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
                 <div className="bg-surface-container md:col-span-8 rounded-3xl p-6 transition-all duration-300 hover:scale-[1.02] hover:-translate-y-2 hover:shadow-2xl hover:shadow-indigo-500/20 border border-transparent hover:border-indigo-500/30">
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
                 <div className="bg-surface-container md:col-span-4 rounded-3xl p-6 flex flex-col gap-4 transition-all duration-300 hover:scale-[1.02] hover:-translate-y-2 hover:shadow-2xl hover:shadow-indigo-500/20 border border-transparent hover:border-indigo-500/30">
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
                    <h2 className="text-xl font-semibold text-white">Smart Mail Filter</h2>
                    <p className="text-zinc-400 text-sm leading-relaxed">
                        Keep your inbox clean. Automatically sort and filter important updates from clutter by securely syncing with your email provider.
                    </p>
                </div>
                <div className="mt-auto flex flex-col gap-2 pt-2">
                    <Button onClick={() => navigate('/mailfilter')} className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium flex items-center justify-center gap-2">
                        <Filter className="w-4 h-4" />
                        View Filtered Emails
                    </Button>
                    <Button 
                        variant="outline" 
                        onClick={handleSyncEmail}
                        disabled={isSyncingEmail}
                        className="w-full border-zinc-700 text-zinc-300 hover:bg-zinc-800 hover:text-white flex items-center justify-center gap-2"
                    >
                        {isSyncingEmail ? (
                            <><Loader2 className="w-4 h-4 animate-spin" /> Syncing...</>
                        ) : (
                            <><Mail className="w-4 h-4" /> Sync with Email</>
                        )}
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
                        value={roomPin}
                        onChange={(e) => setRoomPin(e.target.value)}
                        placeholder="Enter Room PIN" 
                        className="bg-surface-0 border-none text-white placeholder:text-zinc-500 focus-visible:ring-1 focus-visible:ring-indigo-500 mb-2" 
                    />
                    <Button onClick={() => navigate('/chat')} className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium flex items-center justify-center gap-2">
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
