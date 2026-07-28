import { useEffect, useState, useMemo } from "react";
import useCardset from "../store.ts/store";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Select } from "../components/ui/select";
import { Tabs, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Search, Plus, Pin as PinIcon, Sparkles, ExternalLink, Trash2 as DeleteIcon, Edit as EditIcon, Check as CheckIcon, X as CloseIcon, Link as LinkIcon, FileText } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export const Pin = () => {
    const { card, fetchcarddata, addcard, deletcard, editcard } = useCardset();
    const [searchQuery, setSearchQuery] = useState("");
    const [activeTab, setActiveTab] = useState("all");
    
    // Quick add form state
    const [newTitle, setNewTitle] = useState("");
    const [newLink, setNewLink] = useState("");
    const [newPriority, setNewPriority] = useState<"high" | "medium" | "low">("low");
    const [newType, setNewType] = useState<string>("pin");
    const [statusMsg, setStatusMsg] = useState("");

    // Editing state for cards
    const [editingId, setEditingId] = useState<string | null>(null);
    const [editTitleVal, setEditTitleVal] = useState("");

    useEffect(() => {
        fetchcarddata();
    }, [fetchcarddata]);

    const pinCards = useMemo(() => {
        return card.filter(c => {
            const t = String(c.type || "");
            return t !== "youtube" && t !== "twitter";
        });
    }, [card]);

    const filteredCards = useMemo(() => {
        return pinCards.filter(c => {
            const matchesSearch = (c.title || "").toLowerCase().includes(searchQuery.toLowerCase()) || 
                                  (c.link || "").toLowerCase().includes(searchQuery.toLowerCase());
            if (!matchesSearch) return false;
            if (activeTab === "all") return true;
            return (c.priority || "low") === activeTab;
        });
    }, [pinCards, searchQuery, activeTab]);

    const stats = useMemo(() => {
        const highCount = pinCards.filter(c => c.priority === "high").length;
        const pdfCount = pinCards.filter(c => c.type === "pdf" || (c.link && c.link.endsWith(".pdf"))).length;
        return { total: pinCards.length, highCount, pdfCount };
    }, [pinCards]);

    const handleQuickPin = () => {
        if (!newLink.trim()) {
            setStatusMsg("Please enter a valid URL to pin.");
            setTimeout(() => setStatusMsg(""), 3000);
            return;
        }

        const finalTitle = newTitle.trim() || newLink || "Untitled Pin";
        addcard({
            type: newType,
            title: finalTitle,
            link: newLink.trim(),
            read: false,
            priority: newPriority
        });

        setNewTitle("");
        setNewLink("");
        setStatusMsg("Successfully pinned to library!");
        setTimeout(() => setStatusMsg(""), 3000);
    };

    const startEditing = (id: string, currentTitle: string) => {
        setEditingId(id);
        setEditTitleVal(currentTitle);
    };

    const saveEditing = (id: string, link: string, priority?: "high" | "medium" | "low") => {
        if (editTitleVal.trim()) {
            editcard(id, { title: editTitleVal, link, priority });
        }
        setEditingId(null);
    };

    const getDomain = (url?: string) => {
        if (!url) return "external link";
        try {
            return new URL(url).hostname.replace("www.", "");
        } catch {
            return url.slice(0, 30) + "...";
        }
    };

    const getBorderColor = (priority?: string) => {
        if (priority === 'high') return 'rgba(239, 68, 68, 0.4)';
        if (priority === 'medium') return 'rgba(245, 158, 11, 0.4)';
        if (priority === 'low') return 'rgba(59, 130, 246, 0.4)';
        return 'var(--color-ui-border)';
    };

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
                            <Sparkles className="w-3 h-3 mr-1.5 text-secondary" />
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
            <div className="tech-card shadow-xl space-y-5">
                <div className="flex items-center justify-between">
                    <h3 className="headline-lg-mobile text-lg text-on-surface flex items-center gap-2">
                        <Plus className="w-4 h-4 text-secondary" />
                        <span>Quick Pin URL</span>
                    </h3>
                    {statusMsg && (
                        <span className={`body-sm font-semibold px-3 py-1 rounded-full ${statusMsg.includes('Please') ? 'bg-red-500/10 text-red-400' : 'bg-green-500/10 text-green-400'}`}>
                            {statusMsg}
                        </span>
                    )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-end">
                    <div className="md:col-span-5 space-y-1.5">
                        <label className="label-caps text-zinc-400">URL Link</label>
                        <Input 
                            value={newLink}
                            onChange={(e) => setNewLink(e.target.value)}
                            placeholder="https://example.com/article..."
                            className="bg-surface-2 border-ui-border"
                        />
                    </div>
                    <div className="md:col-span-3 space-y-1.5">
                        <label className="label-caps text-zinc-400">Title (Optional)</label>
                        <Input 
                            value={newTitle}
                            onChange={(e) => setNewTitle(e.target.value)}
                            placeholder="e.g. Design Architecture Doc"
                            className="bg-surface-2 border-ui-border"
                        />
                    </div>
                    <div className="md:col-span-2 space-y-1.5">
                        <label className="label-caps text-zinc-400">Priority</label>
                        <Select 
                            value={newPriority}
                            onChange={(e) => setNewPriority(e.target.value as any)}
                            className="bg-surface-2 border-ui-border"
                        >
                            <option value="high">High</option>
                            <option value="medium">Medium</option>
                            <option value="low">Low</option>
                        </Select>
                    </div>
                    <div className="md:col-span-2">
                        <Button 
                            onClick={handleQuickPin}
                            className="btn-primary w-full h-11 shadow-md cursor-pointer"
                        >
                            <PinIcon className="w-4 h-4 mr-1.5" />
                            <span>Pin URL</span>
                        </Button>
                    </div>
                </div>
            </div>

            {/* Statistics & Filtering Bar */}
            <div className="tech-card shadow-xl space-y-6">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                    <div className="flex items-center gap-2 flex-wrap">
                        <span className="label-caps text-zinc-500 mr-1">PIN STATS:</span>
                        <Badge variant="secondary" className="px-2.5 py-1">
                            Total Pins: {stats.total}
                        </Badge>
                        {stats.highCount > 0 && (
                            <Badge variant="high" className="px-2.5 py-1">
                                High Priority: {stats.highCount}
                            </Badge>
                        )}
                        {stats.pdfCount > 0 && (
                            <Badge variant="outline" className="px-2.5 py-1 text-red-400 border-red-500/20 bg-red-500/5">
                                PDFs: {stats.pdfCount}
                            </Badge>
                        )}
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

                {/* Priority Filter Tabs */}
                <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                    <TabsList className="bg-surface-0 border-ui-border h-auto p-1 flex-wrap justify-start gap-1">
                        <TabsTrigger value="all" className="px-4 py-2">
                            All Pins ({pinCards.length})
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

            {/* Pinned Cards Grid */}
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
                                <PinIcon className="w-8 h-8 stroke-1" />
                            </div>
                            <div className="space-y-1">
                                <h3 className="headline-lg-mobile text-on-surface">No pinned links found</h3>
                                <p className="body-sm text-zinc-500 max-w-sm">
                                    {searchQuery || activeTab !== "all" 
                                        ? "No pins match your current search query or priority filter." 
                                        : "Your Live Pin library is empty. Use the quick pin bar above to save any web URL or research article."}
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
                                className="group tech-card rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 flex flex-col justify-between"
                                style={{ borderColor: getBorderColor(c.priority), padding: 0 }}
                            >
                                {/* Card Header */}
                                <div className="p-4 border-b border-ui-border bg-surface-0/90 flex items-center justify-between gap-2">
                                    {editingId === String(c.id) ? (
                                        <div className="flex flex-1 items-center gap-2 mr-1">
                                            <Input 
                                                value={editTitleVal}
                                                onChange={(e) => setEditTitleVal(e.target.value)}
                                                onKeyDown={(e) => e.key === 'Enter' && saveEditing(String(c.id), c.link || "", c.priority)}
                                                className="h-8 text-xs py-1 px-2.5 bg-surface-2 border-ui-border"
                                                autoFocus
                                            />
                                            <Button 
                                                size="icon-sm" 
                                                onClick={() => saveEditing(String(c.id), c.link || "", c.priority)} 
                                                className="h-8 w-8 bg-blue-600 hover:bg-blue-500 text-white shrink-0 cursor-pointer"
                                            >
                                                <CheckIcon className="w-3.5 h-3.5" />
                                            </Button>
                                            <Button 
                                                variant="ghost" 
                                                size="icon-sm" 
                                                onClick={() => setEditingId(null)} 
                                                className="h-8 w-8 text-zinc-400 hover:text-white shrink-0 cursor-pointer"
                                            >
                                                <CloseIcon className="w-3.5 h-3.5" />
                                            </Button>
                                        </div>
                                    ) : (
                                        <div className="flex flex-col truncate pr-2 flex-1">
                                            <h3 className="headline-lg-mobile text-base text-on-surface truncate group-hover:text-zinc-200 transition-colors" title={c.title}>
                                                {c.title || "Untitled Pin"}
                                            </h3>
                                            <div className="flex items-center gap-2 mt-1">
                                                {c.priority && (
                                                    <Badge variant={c.priority === 'high' ? 'high' : c.priority === 'medium' ? 'medium' : 'low'} className="text-[10px]">
                                                        {c.priority} Priority
                                                    </Badge>
                                                )}
                                                <span className="body-sm text-xs text-zinc-500 font-mono flex items-center gap-1 truncate">
                                                    <LinkIcon className="w-3 h-3 shrink-0 text-zinc-600" />
                                                    {getDomain(c.link)}
                                                </span>
                                            </div>
                                        </div>
                                    )}

                                    {!editingId && (
                                        <div className="flex items-center gap-1 shrink-0 opacity-80 group-hover:opacity-100 transition-opacity">
                                            <Button 
                                                variant="ghost" 
                                                size="icon-sm" 
                                                onClick={() => startEditing(String(c.id), c.title || "")} 
                                                className="h-8 w-8 text-zinc-400 hover:text-white hover:bg-zinc-800/60 transition-colors cursor-pointer" 
                                                title="Edit Title"
                                            >
                                                <EditIcon className="w-3.5 h-3.5" />
                                            </Button>
                                            <Button 
                                                variant="ghost" 
                                                size="icon-sm" 
                                                onClick={() => deletcard(String(c.id))} 
                                                className="h-8 w-8 text-zinc-400 hover:text-red-400 hover:bg-red-500/10 transition-colors cursor-pointer" 
                                                title="Delete Pin"
                                            >
                                                <DeleteIcon className="w-3.5 h-3.5" />
                                            </Button>
                                        </div>
                                    )}
                                </div>

                                {/* Card Body / Preview Box */}
                                <div className="p-6 bg-black/40 flex-1 flex flex-col items-center justify-center text-center gap-4 border-b border-ui-border/50">
                                    <div className="w-14 h-14 rounded-2xl bg-surface-2/80 border border-ui-border flex items-center justify-center text-secondary shadow-inner">
                                        {c.type === "pdf" || (c.link && c.link.endsWith(".pdf")) ? (
                                            <FileText className="w-7 h-7 text-red-400" />
                                        ) : (
                                            <PinIcon className="w-7 h-7 text-secondary" />
                                        )}
                                    </div>
                                    <div className="space-y-1 px-4 w-full">
                                        <p className="body-sm text-xs font-mono text-zinc-400 truncate max-w-full" title={c.link}>
                                            {c.link || "No URL provided"}
                                        </p>
                                        <p className="body-sm text-xs text-zinc-500">
                                            {c.type === "pdf" || (c.link && c.link.endsWith(".pdf")) ? "PDF Research Document" : "Live Pinned Web Resource"}
                                        </p>
                                    </div>
                                </div>

                                {/* Card Footer Actions */}
                                <div className="p-3 bg-surface-1 flex items-center justify-between">
                                    <span className="label-caps text-[10px] text-zinc-500">
                                        TYPE: {c.type || "PIN"}
                                    </span>
                                    {c.link && (
                                        <a 
                                            href={c.link} 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-surface-2 hover:bg-zinc-700 text-zinc-200 hover:text-white text-xs font-semibold transition-colors shadow-sm"
                                        >
                                            <span>Visit URL</span>
                                            <ExternalLink className="w-3.5 h-3.5" />
                                        </a>
                                    )}
                                </div>
                            </motion.div>
                        ))
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};
