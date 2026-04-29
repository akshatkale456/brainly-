import { extract, extractTweetId } from "../url/extract"
import type { socialcard } from "../types/type"
import { Tweet } from 'react-tweet';
import useCardset from "../store.ts/store";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useState } from "react";

export const Socialcard = ({ id, type, title, read, link, priority }: socialcard) => {
    const { deletcard, editcard } = useCardset();
    const [isEditing, setIsEditing] = useState(false);
    const [editTitle, setEditTitle] = useState(title);
    
    let youtube: string | null = null;
    let twitter: string | undefined = undefined;

    if (type === "youtube") {
        youtube = extract(link);
    } else if (type === "twitter") {
        twitter = extractTweetId(link);
    } else {
        console.log("invalid link");
    }

    const handleSave = () => {
        editcard(id, { title: editTitle });
        setIsEditing(false);
    };

    const getBorderColor = () => {
        if (priority === 'high') return 'rgba(239, 68, 68, 0.5)';
        if (priority === 'medium') return 'rgba(245, 158, 11, 0.5)';
        if (priority === 'low') return 'rgba(59, 130, 246, 0.5)';
        return 'rgba(63, 63, 70, 0.5)';
    };

    return (
        <div className="w-full h-full flex flex-col bg-zinc-900 rounded-xl overflow-hidden shadow-lg border"
             style={{ borderColor: getBorderColor(), boxShadow: `0 4px 20px -2px ${getBorderColor()}` }}>
            {/* Header: Title and Actions */}
            <div className="flex items-center justify-between p-3 border-b border-zinc-800 bg-zinc-950/80">
                {isEditing ? (
                    <div className="flex flex-1 gap-2 mr-2">
                        <input 
                            value={editTitle}
                            onChange={(e) => setEditTitle(e.target.value)}
                            className="w-full bg-zinc-800 border border-zinc-700 rounded px-2 py-1 text-sm text-white focus:outline-none focus:border-secondary"
                        />
                        <button onClick={handleSave} className="text-xs font-bold text-white bg-blue-600 px-2 py-1 rounded hover:bg-blue-500 cursor-pointer">Save</button>
                    </div>
                ) : (
                    <div className="flex flex-col truncate pr-2">
                        <h3 className="text-sm font-semibold text-white truncate" title={title}>{title || "Untitled"}</h3>
                        {priority && (
                            <span className={`text-[10px] font-bold uppercase tracking-wider ${priority === 'high' ? 'text-red-400' : priority === 'medium' ? 'text-yellow-400' : 'text-blue-400'}`}>
                                {priority} Priority
                            </span>
                        )}
                    </div>
                )}
                
                <div className="flex gap-2 shrink-0">
                    <button onClick={() => setIsEditing(!isEditing)} className="text-zinc-400 hover:text-white transition-colors cursor-pointer" title="Edit Title">
                        <EditIcon fontSize="small" />
                    </button>
                    <button onClick={() => deletcard(id)} className="text-zinc-400 hover:text-red-500 transition-colors cursor-pointer" title="Delete Content">
                        <DeleteIcon fontSize="small" />
                    </button>
                </div>
            </div>

            {/* Content Body */}
            <div className="flex-1 relative w-full h-full min-h-[200px] bg-black">
                {type === "youtube" && youtube && (
                    <iframe
                        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                        src={`https://www.youtube.com/embed/${youtube}`}
                        title={title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
                )}
                {type === "twitter" && twitter !== undefined && (
                    <div className="flex justify-center w-full h-full overflow-y-auto">
                        <Tweet id={twitter} />
                    </div>
                )}
            </div>
        </div>
    );
}
