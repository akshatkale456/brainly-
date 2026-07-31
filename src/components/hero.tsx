import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowRight, Hexagon, Layers, Target } from "lucide-react";

export function Hero() {
    return (
        <section className="w-full bg-background  text-white border-b border-zinc-900 relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[calc(100vh-73px)]">
                {/* Left Column: Massive Headline, Description & Buttons */}
                <div className="lg:col-span-9 flex flex-col justify-between p-6 sm:p-12 md:p-16 lg:p-24 relative z-10">
                    <div className="max-w-4xl pt-6 md:pt-12">
                        {/* Huge Impact Typography */}
                        <motion.h1 
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                            className="text-6xl sm:text-7xl md:text-8xl lg:text-[7rem] font-extrabold tracking-tight leading-[0.93] font-sans"
                        >
                            <div className="text-white">One brain.</div>
                            <div className="text-white mt-1 sm:mt-2">Every thought.</div>
                            <div className="text-zinc-600 mt-1 sm:mt-2">All your team.</div>
                        </motion.h1>

                        {/* Subtitle Description */}
                        <motion.p 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                            className="mt-8 sm:mt-10 text-base sm:text-lg md:text-xl text-zinc-400 max-w-xl font-normal leading-relaxed"
                        >
                            Save YouTube videos, Twitter posts, pins, todos — and discuss everything in shared rooms. Your second brain, built for teams.
                        </motion.p>

                        {/* Two Action Buttons */}
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                            className="mt-10 sm:mt-12 flex flex-col sm:flex-row items-stretch
                             sm:items-center gap-4"
                        >
                            <Link to="/signup" className="w-full sm:w-auto">
                                <motion.button 
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="w-full sm:w-auto px-7 py-4 rounded-xl bg-white text-zinc-950 font-bold text-sm 
                                    md:text-base hover:bg-zinc-200 transition-all shadow-[0_0_30px_rgba(255,255,255,0.15)]
                                     flex items-center justify-center gap-3 cursor-pointer group"
                                >
                                    <span>Create your brain — it's free</span>
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </motion.button>
                            </Link>

                            <Link to="/signup" className="w-full sm:w-auto">
                                <motion.button 
                                    whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.08)" }}
                                    whileTap={{ scale: 0.98 }}
                                    className="w-full sm:w-auto px-7 py-4 rounded-xl bg-white/5 border
                                     border-white/10 text-zinc-300 hover:text-white font-semibold text-sm md:text-base transition-all flex items-center justify-center cursor-pointer"
                                >
                                    See what you can save
                                </motion.button>
                            </Link>
                        </motion.div>

                        {/* Caption Below Buttons */}
                        <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                            className="mt-6 text-11px font-mono tracking-0.25em text-zinc-600 uppercase font-semibold"
                        >
                            NO CREDIT CARD · FREE FOREVER FOR SMALL TEAMS
                        </motion.div>
                    </div>

                    {/* Bottom Left Circle Badge */}
                    
                </div>

                {/* Right Column: Sidebar Stats (12k+, 340k, 4.8) */}
                <div className="lg:col-span-3 border-t lg:border-t-0 lg:border-l border-zinc-900 flex flex-col justify-between bg-zinc-950/60 divide-y divide-zinc-900">
                    {/* Stat 1 */}
                    <div className="flex-1 p-8 sm:p-10 flex flex-col justify-center group hover:bg-zinc-900/30 transition-colors">
                        <Hexagon className="w-5 h-5 text-zinc-600 mb-6 group-hover:text-zinc-400 transition-colors" />
                        <div className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">12k+</div>
                        <div className="text-[11px] font-mono tracking-[0.2em] text-zinc-500 mt-2 uppercase font-semibold">BRAINS CREATED</div>
                    </div>

                    {/* Stat 2 */}
                    <div className="flex-1 p-8 sm:p-10 flex flex-col justify-center group hover:bg-zinc-900/30 transition-colors">
                        <Layers className="w-5 h-5 text-zinc-600 mb-6 group-hover:text-zinc-400 transition-colors" />
                        <div className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">340k</div>
                        <div className="text-[11px] font-mono tracking-[0.2em] text-zinc-500 mt-2 uppercase font-semibold">ITEMS SAVED</div>
                    </div>

                    {/* Stat 3 */}
                    <div className="flex-1 p-8 sm:p-10 flex flex-col justify-center group hover:bg-zinc-900/30 transition-colors">
                        <Target className="w-5 h-5 text-zinc-600 mb-6 group-hover:text-zinc-400 transition-colors" />
                        <div className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">4.8</div>
                        <div className="text-[11px] font-mono tracking-[0.2em] text-zinc-500 mt-2 uppercase font-semibold">AVG TEAM RATING</div>
                    </div>
                </div>
            </div>
        </section>
    );
}
