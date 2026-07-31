import React from "react";
import { 
    TrendingUp, 
    CheckCircle2, 
    Square, 
    MessageSquare, 
    Plus
} from "lucide-react";

export const Dashboard = () => {
    return (
        <div className="min-h-screen bg-surface-0 p-6 md:p-10 max-w-7xl mx-auto flex flex-col font-sans text-on-surface">
            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end pb-8">
                <div>
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-2">
                        Welcome back, Team.
                    </h1>
                    <p className="text-zinc-400 text-sm max-w-md leading-relaxed">
                        Everything your team thinks about — captured. Your workspace is synced and ready for today's tasks.
                    </p>
                </div>
                <div className="flex items-center gap-4 mt-6 md:mt-0">
                    <button className="btn-secondary rounded-full px-6 py-2 text-sm border-zinc-700 hover:bg-surface-1">
                        View Analytics
                    </button>
                    <button className="btn-primary rounded-full px-6 py-2 text-sm text-black bg-white hover:bg-zinc-200">
                        Quick Add Item
                    </button>
                </div>
            </div>

            {/* Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {/* Total Saved Items */}
                <div className="md:col-span-2 bg-surface-1 border-0 shadow-sm shadow-zinc-900/50 rounded-[20px] p-8 flex flex-col justify-between min-h-[320px]">
                    <div className="flex justify-between items-start mb-8">
                        <div className="bg-[#2A2440]/50 text-[#A688FF] text-[10px] font-bold px-3 py-1.5 rounded uppercase tracking-wider">
                            STATISTICS
                        </div>
                        <TrendingUp className="text-zinc-500 w-5 h-5" />
                    </div>
                    <div className="mt-auto">
                        <h2 className="text-3xl font-semibold text-white mb-2">Total Saved Items</h2>
                        <div className="flex items-baseline gap-3 mb-8">
                            <span className="text-6xl font-bold text-white tracking-tighter">1,284</span>
                            <span className="text-[#A688FF] font-medium text-sm">+12% this week</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="flex -space-x-2">
                                <div className="w-8 h-8 rounded-full bg-blue-500 border-2 border-surface-1">
                                    <img src="https://i.pravatar.cc/100?img=33" alt="avatar" className="w-full h-full rounded-full object-cover"/>
                                </div>
                                <div className="w-8 h-8 rounded-full bg-orange-500 border-2 border-surface-1">
                                    <img src="https://i.pravatar.cc/100?img=47" alt="avatar" className="w-full h-full rounded-full object-cover"/>
                                </div>
                            </div>
                            <span className="text-zinc-400 text-sm font-medium">+8</span>
                            <span className="text-zinc-500 text-sm">Members active in Library</span>
                        </div>
                    </div>
                </div>

                {/* Tasks */}
                <div className="bg-surface-1 border-0 shadow-sm shadow-zinc-900/50 rounded-[20px] p-8 flex flex-col justify-between">
                    <div>
                        <div className="flex items-center gap-3 mb-8">
                            <div className="bg-[#2A2440]/50 p-2 rounded-xl">
                                <CheckCircle2 className="w-6 h-6 text-white" />
                            </div>
                            <h2 className="text-2xl font-bold text-white tracking-tight">Tasks</h2>
                        </div>
                        
                        <div className="space-y-4">
                            <div className="bg-surface-0 rounded-2xl p-5 flex justify-between items-center border border-ui-border/50">
                                <span className="text-white font-medium text-sm">Q3 Strategy</span>
                                <span className="text-[10px] font-bold text-yellow-500/90 uppercase tracking-widest bg-yellow-500/10 px-2 py-1 rounded">Pending</span>
                            </div>
                            <div className="bg-surface-0 rounded-2xl p-5 flex justify-between items-center border border-ui-border/50">
                                <span className="text-white font-medium text-sm">Access</span>
                                <span className="text-[10px] font-bold text-green-500/90 uppercase tracking-widest bg-green-500/10 px-2 py-1 rounded">Done</span>
                            </div>
                        </div>
                    </div>
                    
                    <button className="text-zinc-500 text-[10px] font-bold tracking-widest uppercase mt-8 hover:text-white transition-colors text-center w-full">
                        SEE ALL
                    </button>
                </div>

                {/* Plan My Day */}
                <div className="bg-surface-1 border-0 shadow-sm shadow-zinc-900/50 rounded-[20px] p-8 flex flex-col min-h-[360px]">
                    <div className="flex items-center gap-3 mb-8">
                        <div className="bg-[#2A2440]/50 p-2 rounded-xl">
                            <CheckCircle2 className="w-6 h-6 text-white" />
                        </div>
                        <h2 className="text-2xl font-bold text-white tracking-tight">Plan My Day</h2>
                    </div>
                    
                    <div className="space-y-5 flex-1">
                        <div className="flex items-center gap-4">
                            <Square className="w-5 h-5 text-zinc-700" />
                            <span className="text-zinc-300 text-sm font-medium">Review Q4 Roadmap</span>
                        </div>
                        <div className="flex items-center gap-4">
                            <Square className="w-5 h-5 text-zinc-700" />
                            <span className="text-zinc-300 text-sm font-medium">Team Sync: Design System</span>
                        </div>
                        <div className="flex items-center gap-4">
                            <Square className="w-5 h-5 text-zinc-700" />
                            <span className="text-zinc-300 text-sm font-medium">Update Documentation</span>
                        </div>
                    </div>
                    
                    <div className="mt-8 relative">
                        <input 
                            type="text" 
                            placeholder="Add focus item..." 
                            className="w-full bg-surface-0 border border-ui-border/50 rounded-xl py-3.5 px-4 text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-zinc-500"
                        />
                        <button className="absolute right-3 top-1/2 -translate-y-1/2 bg-[#2A2440]/50 text-white rounded p-1.5">
                            <Plus className="w-4 h-4" />
                        </button>
                    </div>
                </div>

                {/* Activity Feed */}
                <div className="md:col-span-2 bg-surface-1 border-0 shadow-sm shadow-zinc-900/50 rounded-[20px] p-8 min-h-[360px]">
                    <div className="text-[10px] font-bold tracking-widest text-zinc-500 uppercase mb-8">
                        ACTIVITY FEED
                    </div>
                    
                    <div className="flex flex-col md:flex-row gap-8">
                        {/* Feed Items */}
                        <div className="flex-1 space-y-8 mt-2">
                            <div className="relative pl-8">
                                <div className="absolute left-0 top-1.5 w-2 h-2 rounded-full bg-[#A688FF] shadow-[0_0_8px_rgba(166,136,255,0.6)]"></div>
                                <p className="text-white font-medium text-sm mb-1.5">Sarah uploaded "Brainly v2 Design Guidelines"</p>
                                <p className="text-zinc-500 text-[11px]">2 minutes ago • Content Library</p>
                            </div>
                            
                            <div className="relative pl-8">
                                <div className="absolute left-0 top-1.5 w-2 h-2 rounded-full bg-zinc-700"></div>
                                <p className="text-zinc-300 font-medium text-sm mb-1.5">Mike pinned a new YouTube video</p>
                                <p className="text-zinc-500 text-[11px]">15 minutes ago • Video Feed</p>
                            </div>
                            
                            <div className="relative pl-8">
                                <div className="absolute left-0 top-1.5 w-2 h-2 rounded-full bg-zinc-700"></div>
                                <p className="text-zinc-300 font-medium text-sm mb-1.5">New Room "Project Genesis" was created</p>
                                <p className="text-zinc-500 text-[11px]">1 hour ago • Workspace</p>
                            </div>
                        </div>
                        
                        {/* Featured Image */}
                        <div className="w-full md:w-2/5 bg-surface-0 rounded-2xl overflow-hidden relative border border-ui-border/30 min-h-[220px]">
                            <img src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=600" alt="Project Genesis" className="absolute inset-0 w-full h-full object-cover opacity-60" />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-[#0D0D0D]/40 to-transparent"></div>
                            <div className="absolute bottom-5 left-5 z-10">
                                <div className="text-[10px] font-bold text-white/80 tracking-widest mb-1.5">NEW ROOM</div>
                                <div className="text-white font-bold text-lg">Project Genesis</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Upcoming Rooms */}
                <div className="bg-surface-1 border-0 shadow-sm shadow-zinc-900/50 rounded-[20px] p-8 flex flex-col md:col-start-1 md:row-start-3">
                    <div className="flex items-center gap-3 mb-8">
                        <div className="bg-zinc-800/50 p-2 rounded-xl">
                            <MessageSquare className="w-6 h-6 text-zinc-300" />
                        </div>
                        <h2 className="text-2xl font-bold text-white tracking-tight">Upcoming Rooms</h2>
                    </div>
                    
                    <div className="space-y-6 flex-1">
                        <div className="flex gap-5">
                            <div className="bg-surface-0 border border-ui-border/50 rounded-2xl p-3 flex flex-col items-center justify-center min-w-[70px]">
                                <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-1">Oct</span>
                                <span className="text-2xl font-bold text-white leading-none">24</span>
                            </div>
                            <div className="flex flex-col justify-center">
                                <span className="text-white font-medium text-sm mb-1.5">Design Sprint Prep</span>
                                <span className="text-zinc-500 text-[11px] font-medium">14:00 - 15:30</span>
                            </div>
                        </div>
                        
                        <div className="flex gap-5">
                            <div className="bg-surface-0 border border-ui-border/50 rounded-2xl p-3 flex flex-col items-center justify-center min-w-[70px]">
                                <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-1">Oct</span>
                                <span className="text-2xl font-bold text-white leading-none">25</span>
                            </div>
                            <div className="flex flex-col justify-center">
                                <span className="text-white font-medium text-sm mb-1.5">Weekly Workspace Sync</span>
                                <span className="text-zinc-500 text-[11px] font-medium">10:00 - 11:30</span>
                            </div>
                        </div>
                    </div>
                    
                    <button className="w-full mt-8 bg-transparent border border-ui-border/50 text-white rounded-xl py-3.5 text-xs font-bold hover:bg-surface-0 transition-colors">
                        Schedule Room
                    </button>
                </div>
            </div>

            {/* Footer */}
            <div className="mt-8 pt-8 border-t border-ui-border/50 flex flex-col md:flex-row justify-between items-center text-[10px] font-bold tracking-[0.2em] text-zinc-600 uppercase pb-4">
                <div>WORKSPACE_ID: BRAINLY_MAIN_01</div>
                <div className="mt-4 md:mt-0">LAST SYNCED: 0.2S AGO</div>
            </div>
        </div>
    );
};

export default Dashboard;
