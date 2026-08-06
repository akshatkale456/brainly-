import { Mail, Search, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

export const MailFilter = () => {
    return (
        <div className="min-h-screen p-6 md:p-10 font-sans text-on-surface">
            {/* Header Section */}
            <div className="mb-10 w-full max-w-5xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div>
                    <div className="flex items-center gap-3 mb-3">
                        <div className="p-3 bg-indigo-500/20 rounded-2xl">
                            <Filter className="w-8 h-8 text-white" />
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
                            Smart Mail
                        </h1>
                    </div>
                    <p className="text-zinc-400 text-lg max-w-xl">
                        Your filtered inbox. Only the updates and notifications that actually matter to your workflow.
                    </p>
                </div>
                <div className="flex items-center gap-2">
                    <Button className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium gap-2">
                        <Mail className="w-4 h-4" /> Sync Inbox
                    </Button>
                </div>
            </div>

            {/* Main Content */}
            <div className="w-full max-w-5xl mx-auto">
                <div className="bg-surface-container rounded-3xl p-6 shadow-xl space-y-6 border border-white/5">
                    
                    {/* Search and Filters */}
                    <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                        <div className="flex w-full md:max-w-md items-center gap-2">
                            <div className="relative w-full">
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
                                <Input 
                                    placeholder="Search filtered emails..." 
                                    className="pl-10 bg-surface-0 border-none text-white focus-visible:ring-1 focus-visible:ring-indigo-500 h-11"
                                />
                            </div>
                            <Button 
                                className="h-11 bg-surface-0 hover:bg-surface-1 border border-white/5 text-white"
                            >
                                Search
                            </Button>
                        </div>
                        <div className="flex gap-2 w-full md:w-auto overflow-x-auto pb-2 md:pb-0 hide-scrollbar">
                            <Badge variant="secondary" className="bg-indigo-500/20 text-indigo-300 hover:bg-indigo-500/30 px-3 py-1 cursor-pointer">All Filters</Badge>
                            <Badge variant="outline" className="border-zinc-700 text-zinc-400 hover:bg-zinc-800 hover:text-white px-3 py-1 cursor-pointer">DevOps</Badge>
                            <Badge variant="outline" className="border-zinc-700 text-zinc-400 hover:bg-zinc-800 hover:text-white px-3 py-1 cursor-pointer">Updates</Badge>
                            <Badge variant="outline" className="border-zinc-700 text-zinc-400 hover:bg-zinc-800 hover:text-white px-3 py-1 cursor-pointer">Meetings</Badge>
                        </div>
                    </div>

                    {/* Email List (Empty State) */}
                    <div className="space-y-2">
                        <div className="py-12 text-center text-zinc-500 flex flex-col items-center">
                            <Mail className="w-12 h-12 mb-3 opacity-20" />
                            <p>No emails found matching your criteria.</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default MailFilter;
