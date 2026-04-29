import { useRef, useState } from "react";
import useCardset from "../store.ts/store";
import { useNavigate } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";

export const Addcontent = () => {
    const { addcard } = useCardset();
    const navigate = useNavigate();
    const linkRef = useRef<HTMLInputElement>(null);
    const titleRef = useRef<HTMLInputElement>(null);
    const [status, setStatus] = useState("");

    const handleAdd = () => {
        const link = linkRef.current?.value;
        const title = titleRef.current?.value || "New Content";
        if (!link) {
            setStatus("Please provide a valid link.");
            return;
        }

        let type = "unknown";
        if (link.includes("youtube.com") || link.includes("youtu.be")) {
            type = "youtube";
        } else if (link.includes("twitter.com") || link.includes("x.com")) {
            type = "twitter";
        } else {
            type = "other";
        }

        addcard({
            type,
            title,
            link,
            read: false,
        });

        setStatus(`Successfully added a ${type} card!`);
        linkRef.current.value = "";
        if (titleRef.current) titleRef.current.value = "";
        
        // Navigate them back to the specific platform page automatically after 1s
        setTimeout(() => {
            if (type === "youtube" || type === "twitter") {
                navigate(`/${type}`);
            } else {
                navigate('/dashboard');
            }
        }, 1000);
    };

    return (
        <div className="p-6 md:p-10 max-w-3xl mx-auto">
            <div className="flex flex-col mb-10">
                <h1 className="text-4xl font-bold text-white mb-2">Add New Content</h1>
                <p className="text-zinc-400">Save a YouTube video or Twitter bookmark. We will automatically detect the platform based on your link.</p>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl shadow-xl w-full p-8 space-y-6">
                <div className="space-y-2">
                    <label className="text-sm font-semibold text-zinc-300">Content Link</label>
                    <input
                        ref={linkRef}
                        placeholder="https://youtube.com/... or https://x.com/..."
                        type="text"
                        className="w-full px-4 py-3 rounded-xl border border-zinc-700 bg-zinc-800 text-white focus:bg-zinc-700 focus:border-secondary focus:outline-none focus:ring-1 focus:ring-secondary transition-all outline-none placeholder-zinc-500"
                    />
                </div>
                <div className="space-y-2">
                    <label className="text-sm font-semibold text-zinc-300">Title (Optional)</label>
                    <input
                        ref={titleRef}
                        placeholder="Enter a short title or description"
                        type="text"
                        className="w-full px-4 py-3 rounded-xl border border-zinc-700 bg-zinc-800 text-white focus:bg-zinc-700 focus:border-secondary focus:outline-none focus:ring-1 focus:ring-secondary transition-all outline-none placeholder-zinc-500"
                    />
                </div>
                
                {status && (
                    <div className={`text-sm font-medium ${status.includes('Please') ? 'text-red-400' : 'text-green-400'}`}>
                        {status}
                    </div>
                )}

                <button
                    onClick={handleAdd}
                    className="w-full px-6 py-4 rounded-xl flex items-center justify-center gap-2 text-sm font-bold text-white bg-blue-600 hover:bg-blue-500 hover:shadow-lg transition-all duration-200"
                >
                    <AddIcon fontSize="small" />
                    <span>Save Content</span>
                </button>
            </div>
        </div>
    );
};
