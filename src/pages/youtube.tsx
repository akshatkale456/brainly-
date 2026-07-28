import { useEffect, useState, useMemo } from "react";
import { Socialcard } from "../components/socialcard";
import useCardset from "../store.ts/store";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Tabs, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Search, Plus, Video, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";

export const Youtube = () => {
    const { card, fetchcarddata } = useCardset();
    const [searchQuery, setSearchQuery] = useState("");
    const [activeTab, setActiveTab] = useState("all");
    const navigate = useNavigate();

    useEffect(() => {
        fetchcarddata();
    }, [fetchcarddata]);
    
    const youtubeCards = useMemo(() => {
        return card.filter(c => c.type === "youtube");
    }, [card]);

    const filteredCards = useMemo(() => {
        return youtubeCards.filter(c => {
            const matchesSearch = (c.title || "").toLowerCase().includes(searchQuery.toLowerCase()) || 
                                  (c.link || "").toLowerCase().includes(searchQuery.toLowerCase());
            if (!matchesSearch) return false;
            if (activeTab === "all") return true;
            return (c.priority || "low") === activeTab;
        });
    }, [youtubeCards, searchQuery, activeTab]);

    const stats = useMemo(() => {
        const highCount = youtubeCards.filter(c => c.priority === "high").length;
        const medCount = youtubeCards.filter(c => c.priority === "medium").length;
        return { total: youtubeCards.length, highCount, medCount };
    }, [youtubeCards]);

    return (
        <div className="min-h-screen bg-surface-0 p-6 md:p-10 max-w-7xl mx-auto space-y-8">
            {/* Header Section */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-ui-border pb-8">
                <div className="space-y-3">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-500 shadow-sm">
                            <Video className="w-5 h-5 fill-red-500/20" />
                        </div>
                        <Badge variant="outline" className="px-3 py-1 bg-surface-1 text-on-surface border-ui-border">
                            <Sparkles className="w-3 h-3 mr-1.5 text-secondary" />
                            Technical Precision
                        </Badge>
                    </div>
                    <h1 className="headline-xl md:text-5xl text-on-surface">
                        YouTube Library
                    </h1>
                    <p className="body-md text-zinc-400 max-w-xl">
                        Your curated collection of YouTube videos, tutorials, and research talks. Search, filter, and organize with priority rankings.
                    </p>
                </div>

                <div className="flex items-center gap-3">
                    <Button 
                        onClick={() => navigate('/dashboard')} 
                        className="btn-primary shadow-lg px-6 py-3 h-12 flex items-center gap-2 cursor-pointer"
                    >
                        <Plus className="w-4 h-4" />
                        <span>Add Video</span>
                    </Button>
                </div>
            </div>

            {/* Statistics & Filtering Bar */}
            <div className="tech-card shadow-xl space-y-6">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                    <div className="flex items-center gap-2 flex-wrap">
                        <span className="label-caps text-zinc-500 mr-1">LIBRARY STATS:</span>
                        <Badge variant="secondary" className="px-2.5 py-1">
                            Total: {stats.total}
                        </Badge>
                        {stats.highCount > 0 && (
                            <Badge variant="high" className="px-2.5 py-1">
                                High Priority: {stats.highCount}
                            </Badge>
                        )}
                    </div>

                    {/* Search Bar */}
                    <div className="relative w-full sm:w-72">
                        <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-500 w-4 h-4" />
                        <Input 
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="Search videos by title..." 
                            className="pl-10 h-10 bg-surface-2 border-ui-border focus-visible:ring-secondary"
                        />
                    </div>
                </div>

                {/* Priority Filter Tabs */}
                <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                    <TabsList className="bg-surface-0 border-ui-border h-auto p-1 flex-wrap justify-start gap-1">
                        <TabsTrigger value="all" className="px-4 py-2">
                            All Videos ({youtubeCards.length})
                        </TabsTrigger>
                        <TabsTrigger value="high" className="px-4 py-2 text-red-400">
                            High Priority
                        </TabsTrigger>
                        <TabsTrigger value="medium" className="px-4 py-2 text-yellow-400">
                            Medium Priority
                        </TabsTrigger>
                        <TabsTrigger value="low" className="px-4 py-2 text-blue-400">
                            Low Priority
                        </TabsTrigger>
                    </TabsList>
                </Tabs>
            </div>

            {/* Video Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <AnimatePresence mode="popLayout">
                    {filteredCards.length === 0 ? (
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0 }}
                            className="col-span-full text-center py-16 tech-card bg-surface-1/50 border-dashed flex flex-col items-center justify-center p-8 space-y-4"
                        >
                            <div className="w-16 h-16 rounded-2xl bg-surface-2 flex items-center justify-center text-zinc-600">
                                <Video className="w-8 h-8 stroke-1" />
                            </div>
                            <div className="space-y-1">
                                <h3 className="headline-lg-mobile text-on-surface">No videos found</h3>
                                <p className="body-sm text-zinc-500 max-w-sm">
                                    {searchQuery || activeTab !== "all" 
                                        ? "No videos match your current search query or priority filter." 
                                        : "Your YouTube library is empty. Add a video link to get started."}
                                </p>
                            </div>
                            {(searchQuery || activeTab !== "all") && (
                                <Button 
                                    variant="outline" 
                                    onClick={() => { setSearchQuery(""); setActiveTab("all"); }}
                                    className="btn-secondary text-xs mt-2"
                                >
                                    Clear Filters
                                </Button>
                            )}
                        </motion.div>
                    ) : (
                        filteredCards.map((c, index) => (
                            <motion.div 
                                key={c.id} 
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.3, delay: index * 0.05 }}
                                className="w-full flex items-stretch"
                            >
                                <Socialcard 
                                    id={String(c.id)} 
                                    priority={c.priority} 
                                    type="youtube" 
                                    title={c.title || ""} 
                                    read={c.read || false} 
                                    link={c.link || ""} 
                                />
                            </motion.div>
                        ))
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};
