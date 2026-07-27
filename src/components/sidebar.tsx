import { SidebarItem } from "./sidebaritems";
import { Video as YouTubeIcon, MessageSquare as TwitterIcon, CheckCircle as CheckCircleOutlineIcon, FileText as PictureAsPdfIcon, Pin as PushPinIcon } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Link } from "react-router-dom";

interface SidebarProps {
    isOpen?: boolean;
    close?: () => void;
}

export const Sidebar = ({ isOpen, close }: SidebarProps) => {
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
                        className="bg-neutral-800 border-r border-zinc-800 fixed z-50 top-0 left-0 h-screen shadow-2xl w-64 overflow-hidden flex flex-col pt-6"
                    >
                        <Link to={"/youtube"} onClick={close}> <SidebarItem title="YouTube" icon={<YouTubeIcon className="w-6 h-6 text-[#FF0000]" />} /></Link>
                        <Link to={"/twitter"} onClick={close}><SidebarItem title="Twitter" icon={<TwitterIcon className="w-6 h-6 text-[#1DA1F2]" />} /></Link>
                        <Link to={"/chat"} onClick={close}><SidebarItem title="live pin" icon={<PushPinIcon className="w-6 h-6 text-[#4CAF50]" />} /></Link>
                        <Link to={"/todo"} onClick={close}><SidebarItem title="Todo" icon={<CheckCircleOutlineIcon className="w-6 h-6 text-[#FF9800]" />} /></Link>
                        <Link to={"/pdf"} onClick={close}><SidebarItem title="PDF" icon={<PictureAsPdfIcon className="w-6 h-6 text-[#E53935]" />} /></Link>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};
