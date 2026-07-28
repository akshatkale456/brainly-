import { useEffect, useRef, useState, useMemo } from "react";
import { Plus as AddIcon, CheckCircle2 as CheckCircleOutline, Sparkles } from "lucide-react";
import { TodoCard } from "../components/todocard";
import { useTodoStore } from "../store.ts/todostore";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { Select } from "../components/ui/select";
import { Label } from "../components/ui/label";
import { Tabs, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Badge } from "../components/ui/badge";
import { motion, AnimatePresence } from "motion/react";

interface Score {
    high: number;
    medium: number;
    low: number;
}

export const Todo = () => {
    const dashref = useRef<HTMLInputElement>(null);
    const proref = useRef<HTMLSelectElement>(null);
    const { todos, addTodo, deleteTodo, toggleTodoComplete, fetchtodo } = useTodoStore();
    const [activeTab, setActiveTab] = useState("all");

    useEffect(() => {
        fetchtodo();
    }, [fetchtodo]);

    // Filter tasks based on activeTab
    const filteredTodos = useMemo(() => {
        return todos.filter(t => {
            if (activeTab === "active") return !t.complete;
            if (activeTab === "completed") return t.complete;
            if (activeTab === "high") return t.priority === "high";
            return true;
        });
    }, [todos, activeTab]);

    // Sort descending by priority (high -> medium -> low), and put completed at the bottom
    const sortedTodos = useMemo(() => {
        return [...filteredTodos].sort((a, b) => {
            if (a.complete !== b.complete) {
                return a.complete ? 1 : -1;
            }
            const score: Score = { high: 3, medium: 2, low: 1 };
            const dashA = score[a.priority || "low"];
            const dashB = score[b.priority || "low"];
            return dashB - dashA;
        });
    }, [filteredTodos]);

    const stats = useMemo(() => {
        const activeCount = todos.filter(t => !t.complete).length;
        const compCount = todos.filter(t => t.complete).length;
        return { total: todos.length, activeCount, compCount };
    }, [todos]);

    function add() {
        if (!dashref.current || !dashref.current.value.trim()) {
            return;
        }
        if (!proref.current) {
            return;
        }

        addTodo({
            title: dashref.current.value.trim(),
            priority: proref.current.value as "high" | "low" | "medium",
            complete: false
        });

        dashref.current.value = '';
        proref.current.value = 'low';
    }

    return (
        <div className="min-h-screen bg-surface-0 p-6 md:p-10 max-w-5xl mx-auto space-y-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-ui-border pb-8">
                <div className="space-y-3">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400 shadow-sm">
                            <CheckCircleOutline className="w-5 h-5" />
                        </div>
                        <Badge variant="outline" className="px-3 py-1 bg-surface-1 text-on-surface border-ui-border">
                            <Sparkles className="w-3 h-3 mr-1.5 text-secondary" />
                            Technical Precision
                        </Badge>
                    </div>
                    <h1 className="headline-xl md:text-5xl text-on-surface">
                        Task Manager
                    </h1>
                    <p className="body-md text-zinc-400 max-w-xl">
                        Organize your engineering workflow, track milestones, and prioritize action items effectively.
                    </p>
                </div>
            </div>

            {/* Input Form Section */}
            <div className="tech-card shadow-xl space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-end">
                    <div className="sm:col-span-7 space-y-2">
                        <Label htmlFor="todo-desc" className="label-caps text-zinc-400">Task Description</Label>
                        <Input
                            id="todo-desc"
                            ref={dashref}
                            onKeyDown={(e) => e.key === 'Enter' && add()}
                            placeholder="What needs to be done?"
                            type="text"
                            className="bg-surface-2 border-ui-border h-11"
                        />
                    </div>
                    <div className="sm:col-span-3 space-y-2">
                        <Label htmlFor="todo-priority" className="label-caps text-zinc-400">Priority</Label>
                        <Select
                            id="todo-priority"
                            ref={proref}
                            defaultValue="low"
                            className="bg-surface-2 border-ui-border h-11"
                        >
                            <option value="high">High</option>
                            <option value="medium">Medium</option>
                            <option value="low">Low</option>
                        </Select>
                    </div>
                    <div className="sm:col-span-2">
                        <Button
                            onClick={add}
                            className="btn-primary w-full h-11 shadow-lg cursor-pointer"
                        >
                            <AddIcon className="w-4 h-4 mr-1" />
                            <span>Add Task</span>
                        </Button>
                    </div>
                </div>
            </div>

            {/* Statistics and Filtering Tabs */}
            <div className="tech-card shadow-xl space-y-4">
                <div className="flex items-center justify-between flex-wrap gap-4">
                    <div className="flex items-center gap-2 flex-wrap">
                        <span className="label-caps text-zinc-500 mr-1">STATUS:</span>
                        <Badge variant="secondary" className="px-2.5 py-1 text-xs">
                            Active: {stats.activeCount}
                        </Badge>
                        <Badge variant="outline" className="px-2.5 py-1 text-xs text-zinc-400">
                            Completed: {stats.compCount}
                        </Badge>
                    </div>

                    <Tabs value={activeTab} onValueChange={setActiveTab}>
                        <TabsList className="bg-surface-0 border-ui-border h-auto p-1">
                            <TabsTrigger value="all" className="px-3 py-1.5">All ({todos.length})</TabsTrigger>
                            <TabsTrigger value="active" className="px-3 py-1.5">Active</TabsTrigger>
                            <TabsTrigger value="completed" className="px-3 py-1.5">Completed</TabsTrigger>
                            <TabsTrigger value="high" className="px-3 py-1.5 text-red-400">High Priority</TabsTrigger>
                        </TabsList>
                    </Tabs>
                </div>
            </div>

            {/* Todo Cards List */}
            <div className="space-y-4">
                <AnimatePresence mode="popLayout">
                    {sortedTodos.length === 0 ? (
                        <motion.div 
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0 }}
                            className="text-center py-16 tech-card bg-surface-1/50 border-dashed flex flex-col items-center justify-center p-8 space-y-3"
                        >
                            <p className="headline-lg-mobile text-on-surface">No tasks found</p>
                            <p className="body-sm text-zinc-500 max-w-sm">
                                {activeTab !== "all" ? "No tasks match your current tab filter." : "No tasks yet. Add one above to get started!"}
                            </p>
                            {activeTab !== "all" && (
                                <Button variant="outline" size="sm" onClick={() => setActiveTab("all")} className="btn-secondary text-xs mt-2">
                                    Show All Tasks
                                </Button>
                            )}
                        </motion.div>
                    ) : (
                        sortedTodos.map((item) => (
                            <motion.div
                                key={item.id}
                                layout
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.2 }}
                            >
                                <TodoCard 
                                    title={item.title} 
                                    priority={item.priority}
                                    complete={item.complete}
                                    onDelete={() => deleteTodo(String(item.id))} 
                                    onToggle={() => toggleTodoComplete(String(item.id))}
                                />
                            </motion.div>
                        ))
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};
