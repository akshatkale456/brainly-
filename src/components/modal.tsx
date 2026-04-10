import { motion } from 'motion/react';
import { useState } from 'react'
import type { Modl } from '../types/type';

export const Modal = ({ setclose }: Modl) => {

    return (
        <div className="fixed inset-0 z-50 flex justify-center items-center bg-neutral-main/60 backdrop-blur-sm p-4">
            <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
            
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                className="relative bg-neutral-main border border-zinc-700 shadow-2xl rounded-2xl w-full max-w-md overflow-hidden"
            >

                <div className="flex justify-between items-center p-6 border-b border-zinc-800">
                    <h2 className="text-xl font-bold text-white tracking-tight">Add New Content</h2>
                    <button
                        onClick={() => { setclose((dash) => { return (!dash) }) }}
                        className="text-zinc-400 hover:text-white transition-colors p-1 rounded-full hover:bg-zinc-800 cursor-pointer"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
                    </button>
                </div>


                <div className="p-6 space-y-5">
                    <div className="space-y-2">
                        <label className="text-sm font-semibold text-zinc-300">Title</label>
                        <input
                            placeholder="Enter title (e.g. My Awesome Video)"
                            type="text"
                            className="w-full px-4 py-3 rounded-xl border border-zinc-700 bg-zinc-800 text-white focus:bg-zinc-700 focus:border-secondary focus:outline-none focus:ring-1 focus:ring-secondary transition-all outline-none placeholder-zinc-500"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-semibold text-zinc-300">Link URL</label>
                        <input
                            placeholder="https://..."
                            type="url"
                            className="w-full px-4 py-3 rounded-xl border border-zinc-700 bg-zinc-800 text-white focus:bg-zinc-700 focus:border-secondary focus:outline-none focus:ring-1 focus:ring-secondary transition-all outline-none placeholder-zinc-500"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-semibold text-zinc-300">Content Type</label>
                        <div className="relative">
                            <select defaultValue="" className="w-full px-4 py-3 rounded-xl border border-zinc-700 bg-zinc-800 text-white focus:bg-zinc-700 focus:border-secondary focus:outline-none focus:ring-1 focus:ring-secondary transition-all outline-none appearance-none cursor-pointer">
                                <option value="" disabled>Select a type...</option>
                                <option value="youtube">YouTube Video</option>
                                <option value="twitter">Twitter Tweet</option>
                                <option value="pdf">PDF Document</option>
                                <option value="todo">To-Do Task</option>
                            </select>
                            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-zinc-400">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="p-6 bg-zinc-950/50 border-t border-zinc-800 flex justify-end gap-3">
                    <button
                        onClick={() => { setclose((dash) => { return (!dash) }) }}
                        className="px-5 py-2.5 rounded-xl text-sm font-bold text-zinc-300 hover:bg-zinc-800 hover:text-white transition-colors cursor-pointer"
                    >
                        Cancel
                    </button>
                    <button
                        className="px-5 py-2.5 rounded-xl text-sm font-bold text-white bg-primary hover:bg-secondary hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
                    >
                        Save Content
                    </button>
                </div>
            </motion.div>
        </div>
    );
}
