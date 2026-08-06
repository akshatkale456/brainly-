import { Share2 as ShareIcon, Trash2 as DeleteIcon, Video as YoutubeIcon, MessageSquare as TwitterIcon, CheckCircle, Circle, Pin as PinIcon, Sparkles, Edit2 as EditIcon, Save as SaveIcon, X as CancelIcon } from "lucide-react";
import type { CardProps } from "../types/type";
import useCardset from "../store.ts/store";
import { useState, useRef } from "react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Input } from "./ui/input";

export const Socialcard = ({ title, link, type, id, priority, read }: CardProps) => {
    const { deletcard, editcard } = useCardset();
    const [isRead, setIsRead] = useState(read || false);
    const [isEditing, setIsEditing] = useState(false);

    const titleRef = useRef<HTMLInputElement>(null);
    const linkRef = useRef<HTMLInputElement>(null);

    const handleToggleRead = () => {
        const nextState = !isRead;
        setIsRead(nextState);
        if (id) {
            editcard(String(id), { read: nextState });
        }
    };

    const handleSaveEdit = () => {
        const newTitle = titleRef.current?.value || title;
        const newLink = linkRef.current?.value || link;
        
        if (id) {
            editcard(String(id), { 
                title: newTitle, 
                link: newLink 
            });
        }
        setIsEditing(false);
    };

    const handleShare = () => {
        if (navigator.share) {
            navigator.share({
                title: title || "Check out this content",
                url: link,
            }).catch(console.error);
        } else {
            navigator.clipboard.writeText(link);
            alert("Link copied to clipboard!");
        }
    };

    const getPriorityVariant = (p?: string) => {
        if (p === 'high') return 'high';
        if (p === 'medium') return 'medium';
        if (p === 'low') return 'low';
        return 'outline';
    };

    const getBorderColor = (p?: string) => {
        if (p === 'high') return 'rgba(239, 68, 68, 0.4)';
        if (p === 'medium') return 'rgba(245, 158, 11, 0.4)';
        if (p === 'low') return 'rgba(59, 130, 246, 0.4)';
        return 'var(--color-ui-border)';
    };

    return (
        <div 
            className={`tech-card transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 flex flex-col justify-between overflow-hidden relative ${isRead ? 'opacity-60 bg-surface-0/60' : ''}`}
            style={{ borderColor: getBorderColor(priority), padding: 0 }}
        >
            {/* Card Header */}
            <div className="flex items-center justify-between p-4 border-b border-ui-border bg-surface-0/80">
                <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-xl bg-surface-2 flex items-center justify-center text-zinc-300 shadow-sm border border-ui-border">
                        {type === "twitter" && <TwitterIcon className="w-4 h-4 text-white" />}
                        {type === "youtube" && <YoutubeIcon className="w-4 h-4 text-white" />}
                        {type !== "twitter" && type !== "youtube" && <PinIcon className="w-4 h-4 text-white" />}
                    </div>
                    <span className="label-caps text-xs text-on-surface">
                        {type || "Pin"}
                    </span>
                    {priority && (
                        <Badge variant={getPriorityVariant(priority)} className="text-[10px]">
                            {priority}
                        </Badge>
                    )}
                </div>

                <div className="flex items-center gap-1">
                    {isEditing ? (
                        <>
                            <Button
                                variant="ghost"
                                size="icon-sm"
                                onClick={handleSaveEdit}
                                className="text-green-400 hover:bg-green-500/10 transition-colors h-8 w-8 rounded-full cursor-pointer"
                                title="Save changes"
                            >
                                <SaveIcon className="w-4 h-4" />
                            </Button>
                            <Button
                                variant="ghost"
                                size="icon-sm"
                                onClick={() => setIsEditing(false)}
                                className="text-zinc-400 hover:text-white transition-colors h-8 w-8 rounded-full cursor-pointer"
                                title="Cancel edit"
                            >
                                <CancelIcon className="w-4 h-4" />
                            </Button>
                        </>
                    ) : (
                        <>
                            <Button
                                variant="ghost"
                                size="icon-sm"
                                onClick={() => setIsEditing(true)}
                                className="text-zinc-400 hover:text-white transition-colors h-8 w-8 rounded-full cursor-pointer"
                                title="Edit card"
                            >
                                <EditIcon className="w-4 h-4" />
                            </Button>
                            <Button
                                variant="ghost"
                                size="icon-sm"
                                onClick={handleToggleRead}
                                className="text-zinc-400 hover:text-white transition-colors h-8 w-8 rounded-full cursor-pointer"
                                title={isRead ? "Mark as unread" : "Mark as read"}
                            >
                                {isRead ? <CheckCircle className="w-4 h-4 text-white" /> : <Circle className="w-4 h-4" />}
                            </Button>
                            <Button 
                                variant="ghost"
                                size="icon-sm"
                                onClick={handleShare} 
                                className="text-zinc-400 hover:text-white transition-colors h-8 w-8 rounded-full cursor-pointer" 
                                title="Share link"
                            >
                                <ShareIcon className="w-4 h-4" />
                            </Button>
                            <Button 
                                variant="ghost"
                                size="icon-sm"
                                onClick={() => id && deletcard(String(id))} 
                                className="text-zinc-400 hover:text-red-400 hover:bg-red-500/10 transition-colors h-8 w-8 rounded-full cursor-pointer" 
                                title="Delete card"
                            >
                                <DeleteIcon className="w-4 h-4" />
                            </Button>
                        </>
                    )}
                </div>
            </div>

            {/* Title Section */}
            <div className="px-5 pt-4 pb-2">
                {isEditing ? (
                    <Input 
                        ref={titleRef} 
                        defaultValue={title} 
                        placeholder="Card title..."
                        className="h-8 text-sm bg-surface-2 border-ui-border mb-2" 
                    />
                ) : (
                    <h3 className={`headline-lg-mobile text-base text-on-surface line-clamp-2 ${isRead ? 'line-through text-zinc-500' : ''}`}>
                        {title || "Untitled Content"}
                    </h3>
                )}
            </div>

            {/* Media / Embedded Content */}
            <div className="p-4 flex-1 flex flex-col justify-center">
                {isEditing ? (
                    <div className="w-full">
                        <Input 
                            ref={linkRef} 
                            defaultValue={link} 
                            placeholder="https://..."
                            className="h-8 text-sm bg-surface-2 border-ui-border" 
                        />
                    </div>
                ) : (
                    <>
                        {type === "youtube" && link && (
                            <div className="w-full aspect-video rounded-xl overflow-hidden border border-ui-border bg-black shadow-inner">
                                <iframe
                                    className="w-full h-full"
                                    src={link.replace("watch?v=", "embed/").replace("youtu.be/", "youtube.com/embed/")}
                                    title={title}
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        )}

                        {type === "twitter" && link && (
                            <div className="w-full rounded-xl overflow-hidden border border-ui-border bg-black/40 p-3 max-h-72 overflow-y-auto">
                                <blockquote className="twitter-tweet dark" data-theme="dark">
                                    <a href={link.replace("x.com", "twitter.com")}></a>
                                </blockquote>
                            </div>
                        )}

                        {type !== "youtube" && type !== "twitter" && (
                            <div className="w-full py-8 px-4 rounded-xl bg-surface-2/40 border border-ui-border/60 text-center flex flex-col items-center justify-center gap-2">
                                <Sparkles className="w-6 h-6 text-white animate-pulse" />
                                <a 
                                    href={link} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="body-sm text-xs font-mono text-zinc-300 hover:text-white hover:underline truncate max-w-full px-2 py-1 bg-surface-2 rounded border border-ui-border"
                                >
                                    {link || "No link provided"}
                                </a>
                            </div>
                        )}
                    </>
                )}
            </div>

            {/* Footer */}
            <div className="px-5 py-3 bg-surface-0/60 border-t border-ui-border/60 flex items-center justify-between text-xs text-zinc-500">
                <span className="label-caps text-[10px]">
                    {isRead ? "STATUS: READ" : "STATUS: UNREAD"}
                </span>
                <a 
                    href={link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="label-caps text-[10px] text-zinc-400 hover:text-white transition-colors hover:underline"
                >
                    Visit Original →
                </a>
            </div>
        </div>
    );
};
