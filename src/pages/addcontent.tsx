import { useRef, useState } from "react";
import useCardset from "../store.ts/store";
import { useNavigate } from "react-router-dom";
import { Plus as AddIcon } from "lucide-react";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { Label } from "../components/ui/label";
import { Select } from "../components/ui/select";

export const Addcontent = () => {
    const { addcard } = useCardset();
    const navigate = useNavigate();
    const linkRef = useRef<HTMLInputElement>(null);
    const titleRef = useRef<HTMLInputElement>(null);
    const priorityRef = useRef<HTMLSelectElement>(null);
    const [status, setStatus] = useState("");

    const handleAdd = () => {
        const link = linkRef.current?.value;
        const title = titleRef.current?.value || "New Content";
        if (!link) {
            setStatus("Please provide a valid link.");
            return;
        }
        const priority = (priorityRef.current?.value as "high" | "medium" | "low") || "low";

        let type = "unknown";
        if (link.includes("youtube.com") || link.includes("youtu.be")) {
            type = "youtube";
        } else if (link.includes("twitter.com") || link.includes("x.com")) {
            type = "twitter";
        } else if (link.endsWith(".pdf")) {
            type = "pdf";
        } else if (link.startsWith("http")) {
            type = "pin";
        } else {
            type = "other";
        }

        addcard({
            type,
            title,
            link,
            read: false,
            priority
        });

        setStatus(`Successfully added a ${type} item!`);
        if (linkRef.current) linkRef.current.value = "";
        if (titleRef.current) titleRef.current.value = "";
        
        setTimeout(() => {
            if (type === "youtube" || type === "twitter") {
                navigate(`/${type}`);
            } else if (type === "pin" || type === "pdf") {
                navigate("/chat");
            } else {
                navigate("/dashboard");
            }
        }, 1000);
    };

    return (
        <div className="p-6 md:p-10 max-w-3xl mx-auto min-h-[80vh] flex flex-col justify-center bg-surface-0">
            <div className="flex flex-col mb-8">
                <h1 className="headline-xl md:text-5xl text-on-surface mb-2">Add New Content</h1>
                <p className="body-md text-zinc-400">Save a YouTube video, Twitter bookmark, or Live Pin URL. We automatically categorize it for your technical knowledge base.</p>
            </div>

            <div className="tech-card shadow-xl space-y-6">
                <div className="space-y-2">
                    <Label htmlFor="add-link" className="label-caps text-zinc-400">Content Link URL</Label>
                    <Input
                        id="add-link"
                        ref={linkRef}
                        placeholder="https://youtube.com/... or https://x.com/..."
                        type="url"
                        className="bg-surface-2 border-ui-border h-12"
                    />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="add-title" className="label-caps text-zinc-400">Title (Optional)</Label>
                    <Input
                        id="add-title"
                        ref={titleRef}
                        placeholder="Enter a short title or description"
                        type="text"
                        className="bg-surface-2 border-ui-border h-12"
                    />
                </div>

                <div className="space-y-2">
                    <Label htmlFor="add-priority" className="label-caps text-zinc-400">Priority Ranking</Label>
                    <Select 
                        id="add-priority"
                        ref={priorityRef}
                        defaultValue="low"
                        className="bg-surface-2 border-ui-border h-12"
                    >
                        <option value="high">High Priority</option>
                        <option value="medium">Medium Priority</option>
                        <option value="low">Low Priority</option>
                    </Select>
                </div>
                
                {status && (
                    <div className={`body-sm font-semibold px-4 py-3 rounded-xl ${status.includes('Please') ? 'bg-red-500/10 text-red-400 border border-red-500/20' : 'bg-green-500/10 text-green-400 border border-green-500/20'}`}>
                        {status}
                    </div>
                )}

                <Button
                    onClick={handleAdd}
                    className="btn-primary w-full h-12 shadow-lg cursor-pointer flex items-center justify-center gap-2 text-base"
                >
                    <AddIcon className="w-5 h-5" />
                    <span>Save Content</span>
                </Button>
            </div>
        </div>
    );
};
