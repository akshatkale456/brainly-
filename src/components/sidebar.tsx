import { SidebarItem } from "./sidebaritems";
import { Video as YouTubeIcon, MessageSquare as TwitterIcon, CheckCircle as CheckCircleOutlineIcon, FileText as PictureAsPdfIcon, Pin as PushPinIcon, Calendar as CalendarIcon, Sparkles as SparklesIcon, Share2 as ShareIcon, LogOut } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Link, useNavigate } from "react-router-dom";
import { API_URL } from "../config";

interface SidebarProps {
    isOpen?: boolean;
    close?: () => void;
}

export const Sidebar = ({ isOpen, close }: SidebarProps) => {
    const navigate = useNavigate();
    
    const handleShareBrain = async () => {
        const token = localStorage.getItem("Authorization");
        if (!token) return alert("Please log in first");
        
        try {
            const response = await fetch(`${API_URL}/brain/share`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "authorization": token
                }
            });
            
            if (response.ok) {
                const data = await response.json();
                const shareLink = `${window.location.origin}/brain/${data.token}`;
                await navigator.clipboard.writeText(shareLink);
                alert("Share link copied to clipboard!");
            } else {
                alert("Failed to generate share link");
            }
        } catch (e) {
            console.error(e);
            alert("Error generating share link");
        }
        
        if (close) close();
    };

    const handleLogout = () => {
        localStorage.removeItem("Authorization");
        navigate("/signin");
        if (close) close();
    };

    return (
        <>
            {/* Universal overlay sidebar */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div 
                        initial={{x:-200}}
                        animate={{x:0}} 
                        exit={{x:-200}} 
                        transition={{duration:0.3}}
                        className="bg-neutral-800 border-r border-zinc-800 fixed z-50 top-0 left-0 h-screen shadow-2xl w-64 overflow-hidden flex flex-col pt-6 pb-6"
                    >
                        <div className="flex-1 flex flex-col overflow-y-auto">
                            <Link to={"/youtube"} onClick={close}> <SidebarItem title="YouTube" icon={<YouTubeIcon className="w-5 h-5 text-white" />} /></Link>
                            <Link to={"/twitter"} onClick={close}><SidebarItem title="Twitter" icon={<TwitterIcon className="w-5 h-5 text-white" />} /></Link>
                            <Link to={"/chat"} onClick={close}><SidebarItem title="Live Pins" icon={<PushPinIcon className="w-5 h-5 text-white" />} /></Link>
                            <Link to={"/todo"} onClick={close}><SidebarItem title="Todo" icon={<CheckCircleOutlineIcon className="w-5 h-5 text-white" />} /></Link>
                            <Link to={"/pdf"} onClick={close}><SidebarItem title="PDF" icon={<PictureAsPdfIcon className="w-5 h-5 text-white" />} /></Link>
                            <Link to={"/planner"} onClick={close}><SidebarItem title="AI Planner" icon={<SparklesIcon className="w-5 h-5 text-white" />} /></Link>
                            <div onClick={handleShareBrain} className="cursor-pointer">
                                <SidebarItem title="Share Brain" icon={<ShareIcon className="w-5 h-5 text-white" />} />
                            </div>
                        </div>

                        {/* Logout Section at the bottom */}
                        <div className="mt-auto pt-4 border-t border-zinc-800">
                            <div onClick={handleLogout} className="cursor-pointer hover:bg-red-500/10 transition-colors">
                                <SidebarItem title="Log Out" icon={<LogOut className="w-5 h-5 text-red-400" />} />
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};
