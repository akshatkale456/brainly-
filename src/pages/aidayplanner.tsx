import { Button } from "../components/ui/button";
import { Textarea } from "../components/ui/textarea";
import { Sparkles, BrainCircuit, Clock, ArrowRight, CheckCircle2 } from "lucide-react";
import { Badge } from "../components/ui/badge";

export const Aidayplanner = () => {
    return (
        <div className="min-h-screen bg-surface-0 p-6 md:p-10 max-w-5xl mx-auto space-y-8">
            <div className="border-b border-ui-border pb-6 flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
                <div>
                    <div className="flex items-center gap-3 mb-2">
                        <Badge variant="outline" className="px-3 py-1 bg-surface-1 text-on-surface border-purple-500/30 text-purple-400">
                            <BrainCircuit className="w-3 h-3 mr-1.5" />
                            AI Assistant
                        </Badge>
                    </div>
                    <h1 className="headline-xl md:text-5xl text-on-surface bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                        Day Planner
                    </h1>
                    <p className="body-md text-zinc-400 mt-2">
                        Let AI optimize your schedule for maximum productivity and focus.
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Input Section */}
                <div className="tech-card bg-surface-1 border border-ui-border p-6 md:p-8 rounded-2xl space-y-6 shadow-xl">
                    <div className="space-y-4">
                        <h2 className="text-xl font-semibold text-on-surface flex items-center gap-2">
                            <Sparkles className="w-5 h-5 text-purple-400" />
                            What's on your plate today?
                        </h2>
                        <p className="text-sm text-zinc-400">
                            Describe your goals, must-do tasks, and any fixed meetings. AI will create an optimized timeline.
                        </p>
                    </div>

                    <form className="space-y-6">
                        <Textarea
                            placeholder="e.g. Need to finish the authentication module, have a sync at 2 PM, and want to learn about Redis..."
                            className="bg-surface-2 border-ui-border min-h-[160px] resize-none focus:ring-purple-500/50 focus:border-purple-500"
                        />
                        <Button
                            type="button"
                            className="w-full btn-primary bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white h-12 shadow-lg shadow-purple-500/20 transition-all duration-300 cursor-pointer"
                        >
                            <span className="flex items-center gap-2">
                                Generate Plan <ArrowRight className="w-4 h-4" />
                            </span>
                        </Button>
                    </form>
                </div>

                {/* Output Section */}
                <div className="tech-card bg-surface-1 border border-ui-border p-6 md:p-8 rounded-2xl shadow-xl min-h-[400px]">
                    <div className="mb-6">
                        <h2 className="text-xl font-semibold text-on-surface flex items-center gap-2">
                            <Clock className="w-5 h-5 text-blue-400" />
                            Suggested Timeline
                        </h2>
                    </div>

                    <div className="space-y-4 relative">
                        <div className="absolute left-5 top-2 bottom-2 w-px bg-ui-border -z-10"></div>
                        
                        {/* Static Timeline Items */}
                        <div className="flex items-start gap-4">
                            <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-surface-1 bg-surface-2 text-zinc-400 shrink-0 shadow mt-1">
                                <CheckCircle2 className="w-4 h-4" />
                            </div>
                            <div className="flex-1 p-4 rounded-xl border border-ui-border bg-surface-2/50 hover:bg-surface-2 transition-colors">
                                <div className="flex items-center justify-between mb-1">
                                    <span className="text-xs font-bold text-purple-400">09:00 AM</span>
                                    <Badge variant="outline" className="text-[10px] px-1.5 py-0 border-ui-border bg-surface-0 capitalize">
                                        Focus
                                    </Badge>
                                </div>
                                <h3 className="text-sm font-medium text-on-surface">Deep Work: Core Implementation</h3>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-surface-1 bg-surface-2 text-zinc-400 shrink-0 shadow mt-1">
                                <CheckCircle2 className="w-4 h-4" />
                            </div>
                            <div className="flex-1 p-4 rounded-xl border border-ui-border bg-surface-2/50 hover:bg-surface-2 transition-colors">
                                <div className="flex items-center justify-between mb-1">
                                    <span className="text-xs font-bold text-purple-400">11:30 AM</span>
                                    <Badge variant="outline" className="text-[10px] px-1.5 py-0 border-ui-border bg-surface-0 capitalize">
                                        Review
                                    </Badge>
                                </div>
                                <h3 className="text-sm font-medium text-on-surface">Review Pull Requests</h3>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-surface-1 bg-surface-2 text-zinc-400 shrink-0 shadow mt-1">
                                <CheckCircle2 className="w-4 h-4" />
                            </div>
                            <div className="flex-1 p-4 rounded-xl border border-ui-border bg-surface-2/50 hover:bg-surface-2 transition-colors">
                                <div className="flex items-center justify-between mb-1">
                                    <span className="text-xs font-bold text-purple-400">12:30 PM</span>
                                    <Badge variant="outline" className="text-[10px] px-1.5 py-0 border-ui-border bg-surface-0 capitalize">
                                        Break
                                    </Badge>
                                </div>
                                <h3 className="text-sm font-medium text-on-surface">Lunch & Walk</h3>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Aidayplanner;
