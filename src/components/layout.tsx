import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Dashnav } from "./dashnav";
import { Protected } from "./protect";
import { Sidebar } from "./sidebar";
import { AnimatePresence, motion } from "motion/react";

export const Layout = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="min-h-screen bg-neutral-main text-white flex flex-col relative">
            <AnimatePresence>
                {sidebarOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSidebarOpen(false)}
                        className="fixed inset-0 z-40 bg-black/60 backdrop-blur-md"
                    />
                )}
            </AnimatePresence>

            <Sidebar isOpen={sidebarOpen} close={() => setSidebarOpen(false)} />

            <div className="flex-1 flex flex-col">
                <Dashnav toggleSidebar={() => setSidebarOpen(true)} />
                <main className="flex-1 overflow-y-auto">
                    <Protected> 
                        <Outlet />
                    </Protected>
                </main>
            </div>
        </div>
    );
};
