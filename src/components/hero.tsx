import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowRight, Hexagon, Layers, Target } from "lucide-react";

export function Hero() {
    return (
        <section className="w-full bg-background  text-white border-b border-zinc-900 relative overflow-hidden">
            <div className="flex flex-col min-h-[calc(100vh-73px)] justify-center items-center text-center p-6 sm:p-12 md:p-16 lg:p-24 relative z-10">
                    <div className="max-w-4xl pt-6 md:pt-12 flex flex-col items-center">
                        {/* Huge Impact Typography */}
                        <motion.h1 
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                            className="text-6xl sm:text-7xl md:text-8xl lg:text-[7rem] font-extrabold tracking-tight leading-[0.93] font-sans mx-auto text-center"
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
                            className="mt-8 sm:mt-10 text-base sm:text-lg md:text-xl text-zinc-400 max-w-xl font-normal leading-relaxed mx-auto text-center"
                        >
                            Save YouTube videos, Twitter posts, pins, todos — and discuss everything in shared rooms. Your second brain, built for teams.
                        </motion.p>

                        {/* Two Action Buttons */}
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                            className="mt-16 sm:mt-20 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 w-full sm:w-auto"
                        >
                            <Link to="/signup" className="w-full sm:w-auto">
                                <motion.button 
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="w-full sm:w-auto px-7 py-4 rounded-xl bg-white text-zinc-950 font-bold text-sm md:text-base hover:bg-zinc-200 transition-all shadow-[0_0_30px_rgba(255,255,255,0.15)] flex items-center justify-center gap-3 cursor-pointer group"
                                >
                                    <span>Create your brain — it's free</span>
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </motion.button>
                            </Link>

                            <Link to="/signup" className="w-full sm:w-auto">
                                <motion.button 
                                    whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.08)" }}
                                    whileTap={{ scale: 0.98 }}
                                    className="w-full sm:w-auto px-7 py-4 rounded-xl bg-white/5 border border-white/10 text-zinc-300 hover:text-white font-semibold text-sm md:text-base transition-all flex items-center justify-center cursor-pointer"
                                >
                                    See what you can save
                                </motion.button>
                            </Link>
                        </motion.div>


                    </div>
                </div>
        </section>
    );
}
