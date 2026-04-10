import { SidebarItem } from "./sidebaritems";
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import { motion, AnimatePresence } from "motion/react";

import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import PushPinIcon from '@mui/icons-material/PushPin';
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
                        <Link to={"/youtube"} onClick={close}> <SidebarItem title="YouTube" icon={<YouTubeIcon sx={{ color: '#FF0000' }} />} /></Link>
                        <Link to={"/twitter"} onClick={close}><SidebarItem title="Twitter" icon={<TwitterIcon sx={{ color: '#1DA1F2' }} />} /></Link>
                        <Link to={"/chat"} onClick={close}><SidebarItem title="live pin" icon={<PushPinIcon sx={{ color: '#4CAF50' }} />} /></Link>
                        <Link to={"/todo"} onClick={close}><SidebarItem title="Todo" icon={<CheckCircleOutlineIcon sx={{ color: '#FF9800' }} />} /></Link>
                        <Link to={"/pdf"} onClick={close}><SidebarItem title="PDF" icon={<PictureAsPdfIcon sx={{ color: '#E53935' }} />} /></Link>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};
