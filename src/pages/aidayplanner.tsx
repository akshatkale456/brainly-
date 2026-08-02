import React from "react";
import { Weeks } from "../components/weeks";
import { Schedule } from "../components/schedule";

export const Aidayplanner = () => {
    return (
        <div className="min-h-screen bg-surface-0 p-6 md:p-12 lg:p-24 font-sans text-on-surface flex items-center justify-center">
            <div className="flex flex-col lg:flex-row gap-16 lg:gap-32 w-full max-w-6xl items-start lg:items-center">
                
                {/* Left Panel */}
                <div className="flex flex-col max-w-xl">
                    <p className="text-zinc-500 uppercase tracking-[0.2em] text-xs font-mono font-medium mb-6">
                        AI Day Planner
                    </p>
                    <h1 className="text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-6">
                        <span className="text-white">Your day,</span><br/>
                        <span className="text-zinc-500">structured.</span>
                    </h1>
                    <p className="text-zinc-400 text-lg leading-relaxed max-w-md">
                        Describe your goals and let the planner arrange your day around your energy, priorities, and commitments.
                    </p>
                </div>

                {/* Right Panel */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {/* Card 1 */}
                    <div className="bg-zinc-950/40 border border-white/10 rounded-2xl p-6 flex flex-col justify-center min-w-[140px] h-[130px] hover:bg-zinc-900/40 transition-colors">
                        <span className="text-3xl font-semibold text-white mb-3">8</span>
                        <span className="text-zinc-500 uppercase tracking-[0.15em] text-[10px] font-mono">Tasks Planned</span>
                    </div>
                    {/* Card 2 */}
                    <div className="bg-zinc-950/40 border border-white/10 rounded-2xl p-6 flex flex-col justify-center min-w-[140px] h-[130px] hover:bg-zinc-900/40 transition-colors">
                        <span className="text-3xl font-semibold text-white mb-3">6.5h</span>
                        <span className="text-zinc-500 uppercase tracking-[0.15em] text-[10px] font-mono">Focus Hours</span>
                    </div>
                    {/* Card 3 */}
                    <div className="bg-zinc-950/40 border border-white/10 rounded-2xl p-6 flex flex-col justify-center min-w-[140px] h-[130px] hover:bg-zinc-900/40 transition-colors">
                        <span className="text-3xl font-semibold text-white mb-3">2</span>
                        <span className="text-zinc-500 uppercase tracking-[0.15em] text-[10px] font-mono">Meetings</span>
                    </div>
                    {/* Card 4 */}
                    <div className="bg-zinc-950/40 border border-white/10 rounded-2xl p-6 flex flex-col justify-center min-w-[140px] h-[130px] hover:bg-zinc-900/40 transition-colors">
                        <span className="text-3xl font-semibold text-white mb-3">3</span>
                        <span className="text-zinc-500 uppercase tracking-[0.15em] text-[10px] font-mono">Free Blocks</span>
                    </div>
                </div>

            </div>
            
            {/* Added Components */}
            <div className="w-full max-w-6xl mt-16 flex flex-col gap-8">
                <Weeks />
                <Schedule />
            </div>
        </div>
    );
};

export default Aidayplanner;
