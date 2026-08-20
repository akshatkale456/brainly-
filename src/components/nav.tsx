
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Logo } from "./logo.";
import { Link } from "react-router-dom";
import { Menu as MenuIcon, X as CloseIcon } from "lucide-react";

export function Nav() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleSidebar = () => setIsOpen(!isOpen);

    return (
        <header className="sticky top-0 z-50 w-full bg-background px-6 py-4 transition-colors">
            <div className="max-w-full mx-auto flex items-center justify-between">
                {/* Left: Badge & Brand */}
                <div className="flex items-center gap-4">
                    <div className="hidden lg:flex items-center gap-2 text-[11px] font-mono tracking-[0.15em] text-zinc-500 uppercase">
                      
                    
                    </div>
                    <Link to="/" className="flex items-center gap-2.5 group">
                        <motion.div 
                            whileHover={{ scale: 1.1, rotate: 10 }}
                            transition={{ type: "spring", stiffness: 300, damping: 15 }}
                            className="flex items-center justify-center cursor-pointer origin-center"
                        >
                            <Logo />
                        </motion.div>
                        <span className="text-white font-bold text-xl tracking-tight group-hover:text-zinc-200 transition-colors">Brainly</span>
                    </Link>
                </div>

                {/* Center: Nav links */}
                <nav className="hidden md:flex items-center gap-8 text-xs font-mono tracking-[0.15em] uppercase bg-zinc-100 text-zinc-950 px-8 py-3 rounded-full font-bold shadow-md shadow-white/10">
                    <a href="#features" className="hover:text-zinc-600 transition-colors cursor-pointer">FEATURES</a>
                    <a href="#how-it-works" className="hover:text-zinc-600 transition-colors cursor-pointer">HOW IT WORKS</a>
                    <a href="#rooms" className="hover:text-zinc-600 transition-colors cursor-pointer">ROOMS</a>
                </nav>

                {/* Right: Sign in & Get Started button */}
                <div className="hidden sm:flex items-center gap-6">
                    <Link to="/signin" className="text-xs font-mono tracking-[0.15em] text-zinc-400 hover:text-white uppercase transition-colors">
                        SIGN IN
                    </Link>
                    <Link to="/signup">
                        <motion.button 
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.98 }}
                            className="bg-white text-zinc-950 font-bold text-xs px-5 py-2.5 rounded-xl hover:bg-zinc-200 transition-all shadow-md cursor-pointer"
                        >
                            Get started free
                        </motion.button>
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button 
                    onClick={toggleSidebar} 
                    className="sm:hidden text-zinc-400 hover:text-white focus:outline-none p-2 rounded-lg bg-zinc-900 border border-zinc-800 cursor-pointer"
                    aria-label="Toggle Menu"
                >
                    {isOpen ? <CloseIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="sm:hidden bg-zinc-950 border-t border-zinc-900 mt-4 pt-4 pb-6 flex flex-col gap-4 text-xs font-mono tracking-[0.15em] text-zinc-400 uppercase"
                    >
                        <a href="#features" onClick={() => setIsOpen(false)} className="hover:text-white py-1">FEATURES</a>
                        <a href="#how-it-works" onClick={() => setIsOpen(false)} className="hover:text-white py-1">HOW IT WORKS</a>
                        <a href="#rooms" onClick={() => setIsOpen(false)} className="hover:text-white py-1">ROOMS</a>
                        <div className="h-px bg-zinc-900 my-2" />
                        <Link to="/signin" onClick={() => setIsOpen(false)} className="hover:text-white py-1">SIGN IN</Link>
                        <Link to="/signup" onClick={() => setIsOpen(false)}>
                            <button className="w-full mt-2 py-3 rounded-xl bg-white text-zinc-950 font-bold tracking-normal text-sm shadow-lg">
                                Get started free
                            </button>
                        </Link>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
