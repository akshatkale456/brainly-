import { Plus as AddIcon, CheckCircle2 as CheckCircleOutline, Sparkles } from "lucide-react";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { Select } from "../components/ui/select";
import { Label } from "../components/ui/label";
import { Tabs, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Badge } from "../components/ui/badge";
import { useState, useEffect, useRef } from "react";
import useTodoStore from "../store.ts/todostore";
import { TodoCard } from "../components/todocard";

export const Todo = () => {
    const { todos, fetchtodo, addTodo, deleteTodo, toggleTodoComplete } = useTodoStore();
    const titleRef = useRef<HTMLInputElement>(null);
    const priorityRef = useRef<HTMLSelectElement>(null);
    const [filter, setFilter] = useState("all");

    useEffect(() => {
        fetchtodo();
    }, [fetchtodo]);

    const handleAddTodo = () => {
        const title = titleRef.current?.value || "";
        const priority = (priorityRef.current?.value as "low" | "medium" | "high") || "low";
        
        if (!title.trim()) return;
        addTodo({ title, priority, complete: false });
        
        if (titleRef.current) titleRef.current.value = "";
        if (priorityRef.current) priorityRef.current.value = "low";
    };

    const filteredTodos = todos.filter(todo => {
        if (filter === "active") return !todo.complete;
        if (filter === "completed") return todo.complete;
        if (filter === "high") return todo.priority === "high";
        return true;
    });

    const activeCount = todos.filter(t => !t.complete).length;
    const completedCount = todos.filter(t => t.complete).length;

    return (
        <div className="min-h-screen bg-surface-0 p-6 md:p-10 max-w-5xl mx-auto space-y-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8">
                <div className="space-y-3">
                    <h1 className="headline-xl md:text-5xl text-on-surface">
                        Task Manager
                    </h1>
                </div>
            </div>

            {/* Combined Add and Status Card */}
            <div className="tech-card shadow-xl p-6 border border-ui-border rounded-xl flex flex-col gap-6 font-sans">
                {/* Input Form Section */}
                <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-end">
                    <div className="sm:col-span-7 space-y-2">
                        <Label htmlFor="todo-desc" className="text-xs font-semibold tracking-wider text-zinc-400 uppercase">Task Description</Label>
                        <Input
                            id="todo-desc"
                            ref={titleRef}
                            placeholder="What needs to be done?"
                            type="text"
                            className="bg-surface-2 border-ui-border h-11 rounded-full"
                        />
                    </div>
                    <div className="sm:col-span-3 space-y-2">
                        <Label htmlFor="todo-priority" className="text-xs font-semibold tracking-wider text-zinc-400 uppercase">Priority</Label>
                        <Select
                            id="todo-priority"
                            ref={priorityRef}
                            defaultValue="low"
                            className="bg-surface-2 border-ui-border h-11 rounded-full"
                        >
                            <option value="high">High</option>
                            <option value="medium">Medium</option>
                            <option value="low">Low</option>
                        </Select>
                    </div>
                    <div className="sm:col-span-2">
                        <Button
                            onClick={handleAddTodo}
                            className="w-full h-11 bg-blue-600 hover:bg-blue-500 text-white shadow-lg cursor-pointer font-medium rounded-full"
                        >
                            <AddIcon className="w-4 h-4 mr-1" />
                            <span>Add Task</span>
                        </Button>
                    </div>
                </div>

                <hr className="border-ui-border" />

                {/* Statistics and Filtering Tabs */}
                <div className="flex items-center justify-between flex-wrap gap-4">
                    <div className="flex items-center gap-2 flex-wrap font-medium">
                        <span className="text-xs font-semibold tracking-wider text-zinc-500 mr-1">STATUS:</span>
                        <Badge variant="outline" className="px-2.5 py-1 text-xs text-zinc-300">
                            Active: {activeCount}
                        </Badge>
                        <Badge variant="outline" className="px-2.5 py-1 text-xs text-zinc-400">
                            Completed: {completedCount}
                        </Badge>
                    </div>

                    <Tabs value={filter} onValueChange={setFilter}>
                        <TabsList className="bg-surface-0 border-ui-border h-auto p-1">
                            <TabsTrigger value="all" className="px-3 py-1.5 font-medium">All ({todos.length})</TabsTrigger>
                            <TabsTrigger value="active" className="px-3 py-1.5 font-medium">Active</TabsTrigger>
                            <TabsTrigger value="completed" className="px-3 py-1.5 font-medium">Completed</TabsTrigger>
                            <TabsTrigger value="high" className="px-3 py-1.5 font-medium">High Priority</TabsTrigger>
                        </TabsList>
                    </Tabs>
                </div>
            </div>

            {/* Todo Cards List */}
            <div className="space-y-4">
                {filteredTodos.length === 0 ? (
                    <div className="text-center py-16 tech-card bg-surface-1/50 border-dashed border border-ui-border rounded-xl flex flex-col items-center justify-center p-8 space-y-3">
                        <p className="text-lg font-semibold text-on-surface">No tasks found</p>
                        <p className="text-sm text-zinc-500 max-w-sm">
                            No tasks yet. Add one above to get started!
                        </p>
                    </div>
                ) : (
                    <div className="flex flex-col gap-3">
                        {filteredTodos.map((todo) => (
                            <TodoCard
                                key={todo.id}
                                title={todo.title || ""}
                                priority={todo.priority}
                                complete={todo.complete || false}
                                onDelete={() => deleteTodo(String(todo.id))}
                                onToggle={() => toggleTodoComplete(String(todo.id))}
                            />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};
