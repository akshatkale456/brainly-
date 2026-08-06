import { Search, MessageSquare, Sparkles } from "lucide-react";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { useState, useEffect } from "react";
import useCardset from "../store.ts/store";
import { Socialcard } from "../components/socialcard";

export const Twitter = () => {
    const { card, fetchcarddata } = useCardset();
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        fetchcarddata();
    }, [fetchcarddata]);

    const twitterCards = card.filter(c => c.type === "twitter");
    const filteredCards = twitterCards.filter(c => 
        (c.title || "").toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="min-h-screen bg-surface-0 p-6 md:p-10 max-w-7xl mx-auto space-y-8">
            {/* Header Section */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-ui-border pb-8">
                <div className="space-y-3">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 shadow-sm">
                            <MessageSquare className="w-5 h-5" />
                        </div>
                        <Badge variant="outline" className="px-3 py-1 bg-surface-1 text-on-surface border-ui-border">
                            <Sparkles className="w-3 h-3 mr-1.5 text-white" />
                            Social Brain
                        </Badge>
                    </div>
                    <h1 className="headline-xl md:text-5xl text-on-surface">
                        Twitter Bookmarks
                    </h1>
                    <p className="body-md text-zinc-400 max-w-xl">
                        Your saved threads, tech insights, and important announcements from X/Twitter.
                    </p>
                </div>
            </div>

            {/* Statistics & Filtering Bar */}
            <div className="tech-card shadow-xl space-y-6 p-6 border border-ui-border rounded-xl">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                    <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-xs font-semibold tracking-wider text-zinc-500 mr-1">STATS:</span>
                        <Badge variant="secondary" className="px-2.5 py-1">
                            Total Bookmarks: {twitterCards.length}
                        </Badge>
                    </div>

                    {/* Search Bar */}
                    <div className="flex w-full sm:w-auto items-center gap-2">
                        <div className="relative w-full sm:w-72">
                            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-500 w-4 h-4" />
                            <Input 
                                placeholder="Search tweets..." 
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="pl-10 h-10 bg-surface-2 border-ui-border focus-visible:ring-secondary"
                            />
                        </div>
                        <Button className="h-10 bg-surface-2 hover:bg-surface-3 border border-ui-border text-on-surface cursor-pointer">
                            Search
                        </Button>
                    </div>
                </div>
            </div>

            {/* Twitter Cards Grid */}
            <div className={filteredCards.length > 0 ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" : "grid grid-cols-1 gap-6"}>
                {filteredCards.length === 0 ? (
                    <div className="text-center py-16 tech-card bg-surface-1/50 border-dashed border border-ui-border rounded-xl flex flex-col items-center justify-center p-8 space-y-4">
                        <div className="w-16 h-16 rounded-2xl bg-surface-2 flex items-center justify-center text-zinc-600">
                            <MessageSquare className="w-8 h-8 stroke-1" />
                        </div>
                        <div className="space-y-1">
                            <h3 className="text-lg font-semibold text-on-surface">No bookmarks found</h3>
                            <p className="text-sm text-zinc-500 max-w-sm">
                                {searchQuery ? "No bookmarks match your search." : "Your Twitter bookmark library is empty."}
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
