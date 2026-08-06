import { motion } from 'motion/react';
import { useState, useRef } from 'react';
import type { Modl } from '../types/type';
import useCardset from "../store.ts/store";
import { Input } from "./ui/input";
import { Select } from "./ui/select";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { X as CloseIcon } from "lucide-react";

export const Modal = ({ onClose }: Modl) => {
    const { addcard } = useCardset();
    const titleRef = useRef<HTMLInputElement>(null);
    const linkRef = useRef<HTMLInputElement>(null);
    const typeRef = useRef<HTMLSelectElement>(null);
    const priorityRef = useRef<HTMLSelectElement>(null);

    const handleSave = () => {
        const link = linkRef.current?.value;
        const title = titleRef.current?.value || "New Content";
        let type = typeRef.current?.value || "";
        const priority = (priorityRef.current?.value as "high" | "medium" | "low") || "low";
        
        if (!link) return;

        if (!type) {
            if (link.includes("youtube.com") || link.includes("youtu.be")) {
                type = "youtube";
            } else if (link.includes("twitter.com") || link.includes("x.com")) {
                type = "twitter";
            } else if (link.endsWith(".pdf")) {
                type = "pdf";
            } else if (link.startsWith("http")) {
                type = "pin";
            } else {
                type = "pin";
            }
        }
        
        addcard({
            type: type || "pin",
            title,
            link,
            read: false,
            priority
        });

        onClose(false);
    };

    return (
        <div className="fixed inset-0 z-50 flex justify-center items-center bg-black/70 backdrop-blur-md p-4">
            <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                className="relative tech-card shadow-2xl rounded-2xl w-full max-w-md overflow-hidden p-0"
            >
                <div className="flex justify-between items-center p-6 border-b border-ui-border bg-surface-0/80">
                    <h2 className="headline-lg-mobile text-xl text-on-surface">Add New Content</h2>
                    <Button
                        variant="ghost"
                        size="icon-sm"
                        onClick={() => onClose(false)}
                        className="text-zinc-400 hover:text-white transition-colors h-8 w-8 rounded-full cursor-pointer"
                    >
                        <CloseIcon className="w-5 h-5" />
                    </Button>
                </div>

                <div className="p-6 space-y-5">
                    <div className="space-y-2">
                        <Label htmlFor="title-input" className="label-caps text-zinc-400">Title</Label>
                        <Input
                            id="title-input"
                            ref={titleRef}
                            placeholder="Enter title (e.g. System Design Tutorial)"
                            type="text"
                            className="bg-surface-2 border-ui-border"
                        />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="link-input" className="label-caps text-zinc-400">Link URL</Label>
                        <Input
                            id="link-input"
                            ref={linkRef}
                            placeholder="https://..."
                            type="url"
                            className="bg-surface-2 border-ui-border"
                        />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="type-select" className="label-caps text-zinc-400">Content Type</Label>
                        <Select 
                            id="type-select"
                            ref={typeRef}
                            defaultValue=""
                            className="bg-surface-2 border-ui-border"
                        >
                            <option value="" disabled>Select a type...</option>
                            <option value="youtube">YouTube Video</option>
                            <option value="twitter">Twitter Tweet</option>
                            <option value="pin">Live Pin / Article</option>
                            <option value="pdf">PDF Document</option>
                            <option value="todo">To-Do Task</option>
                        </Select>
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="priority-select" className="label-caps text-zinc-400">Priority Ranking</Label>
                        <Select 
                            id="priority-select"
                            ref={priorityRef}
                            defaultValue="low"
                            className="bg-surface-2 border-ui-border"
                        >
                            <option value="high">High</option>
                            <option value="medium">Medium</option>
                            <option value="low">Low</option>
                        </Select>
                    </div>
                </div>

                <div className="p-6 bg-surface-0/90 border-t border-ui-border flex justify-end gap-3">
                    <Button
                        variant="outline"
                        onClick={() => onClose(false)}
                        className="btn-secondary cursor-pointer"
                    >
                        Cancel
                    </Button>
                    <Button
                        onClick={handleSave}
                        className="btn-primary shadow-md cursor-pointer"
                    >
                        Save Content
                    </Button>
                </div>
            </motion.div>
        </div>
    );
};
