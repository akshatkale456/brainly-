import { Search, Plus, Pin as PinIcon, Sparkles } from "lucide-react";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Select } from "../components/ui/select";
import { useState, useEffect, useRef } from "react";
import useCardset from "../store.ts/store";
import { Socialcard } from "../components/socialcard";

export const Pin = () => {
    const { card, fetchcarddata, addcard } = useCardset();
    const [searchQuery, setSearchQuery] = useState("");
    
    const titleRef = useRef<HTMLInputElement>(null);
    const linkRef = useRef<HTMLInputElement>(null);
    const priorityRef = useRef<HTMLSelectElement>(null);

    useEffect(() => {
        fetchcarddata();
    }, [fetchcarddata]);

    const handleAddPin = () => {
        const link = linkRef.current?.value;
        const title = titleRef.current?.value || "Pinned URL";
        const priority = (priorityRef.current?.value as "high" | "medium" | "low") || "low";
        
        if (!link) return;
        
        addcard({
            type: "pin",
            title,
            link,
            read: false,
            priority
        });

        if (linkRef.current) linkRef.current.value = "";
        if (titleRef.current) titleRef.current.value = "";
        if (priorityRef.current) priorityRef.current.value = "low";
    };

    const pinnedCards = card.filter(c => c.type !== "youtube" && c.type !== "twitter");
    const filteredCards = pinnedCards.filter(c => 
        c.title?.toLowerCase().includes(searchQuery.toLowerCase()) || 
        c.link?.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="min-h-screen bg-surface-0 p-6 md:p-10 max-w-7xl mx-auto space-y-8">
            {/* Header Section */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-ui-border pb-8">
                <div className="space-y-3">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shadow-sm">
                            <PinIcon className="w-5 h-5" />
                        </div>
                        <Badge variant="outline" className="px-3 py-1 bg-surface-1 text-on-surface border-ui-border">
                            <Sparkles className="w-3 h-3 mr-1.5 text-white" />
                            Technical Precision
                        </Badge>
                    </div>
                    <h1 className="headline-xl md:text-5xl text-on-surface">
                        Live Pins & Research
                    </h1>
                    <p className="body-md text-zinc-400 max-w-xl">
                        Pin any website URL, PDF research document, or article. Preserve context and access your knowledge library instantly.
                    </p>
                </div>
            </div>

            {/* Quick Pin Creation Card */}
            <div className="tech-card shadow-xl space-y-5 p-6 border border-ui-border rounded-xl">
                <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-on-surface flex items-center gap-2">
                        <Plus className="w-4 h-4 text-white" />
                        <span>Quick Pin URL</span>
                    </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-end">
                    <div className="md:col-span-5 space-y-1.5">
                        <label className="text-xs font-semibold tracking-wider text-zinc-400 uppercase">Link URL</label>
                        <Input 
                            ref={linkRef}
                            placeholder="https://..."
                            className="bg-surface-2 border-ui-border"
                        />
                    </div>
                    <div className="md:col-span-3 space-y-1.5">
                        <label className="text-xs font-semibold tracking-wider text-zinc-400 uppercase">Title (Optional)</label>
                        <Input 
                            ref={titleRef}
                            placeholder="e.g. Design Architecture Doc"
                            className="bg-surface-2 border-ui-border"
                        />
                    </div>
                    <div className="md:col-span-2 space-y-1.5">
                        <label className="text-xs font-semibold tracking-wider text-zinc-400 uppercase">Priority</label>
                        <Select ref={priorityRef} defaultValue="low" className="bg-surface-2 border-ui-border">
                            <option value="high">High</option>
                            <option value="medium">Medium</option>
                            <option value="low">Low</option>
                        </Select>
                    </div>
                    <div className="md:col-span-2">
                        <Button onClick={handleAddPin} className="w-full h-11 bg-blue-600 hover:bg-blue-500 text-white shadow-md cursor-pointer">
                            <PinIcon className="w-4 h-4 mr-1.5" />
                            <span>Pin URL</span>
                        </Button>
                    </div>
                </div>
            </div>

            {/* Statistics & Filtering Bar */}
            <div className="tech-card shadow-xl space-y-6 p-6 border border-ui-border rounded-xl">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                    <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-xs font-semibold tracking-wider text-zinc-500 mr-1">PIN STATS:</span>
                        <Badge variant="secondary" className="px-2.5 py-1">
                            Total Pins: {pinnedCards.length}
                        </Badge>
                    </div>

                    {/* Search Bar */}
                    <div className="relative w-full sm:w-72">
                        <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-500 w-4 h-4" />
                        <Input 
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="Search pinned links & titles..." 
                            className="pl-10 h-10 bg-surface-2 border-ui-border focus-visible:ring-secondary"
                        />
                    </div>
                </div>
            </div>

            {/* Pinned Cards Grid */}
            <div className={filteredCards.length > 0 ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" : "grid grid-cols-1 gap-6"}>
                {filteredCards.length === 0 ? (
                    <div className="text-center py-16 tech-card bg-surface-1/50 border-dashed border border-ui-border rounded-xl flex flex-col items-center justify-center p-8 space-y-4">
                        <div className="w-16 h-16 rounded-2xl bg-surface-2 flex items-center justify-center text-zinc-600">
                            <PinIcon className="w-8 h-8 stroke-1" />
                        </div>
                        <div className="space-y-1">
                            <h3 className="text-lg font-semibold text-on-surface">No pinned links found</h3>
                            <p className="text-sm text-zinc-500 max-w-sm">
                                Your Live Pin library is empty. Use the quick pin bar above to save any web URL or research article.
                            </p>
                        </div>
                    </div>
                ) : (
                    filteredCards.map((c) => (
                        <Socialcard
                            key={c.id}
                            id={c.id}
                            title={c.title || ""}
                            link={c.link || ""}
                            type={c.type || ""}
                            priority={c.priority}
                            read={c.read || false}
                        />
                    ))
                )}
            </div>
        </div>
    );
};
