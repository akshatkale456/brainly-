import { useState, useRef } from "react";
import AddIcon from "@mui/icons-material/Add";
import { TodoCard } from "../components/todocard";

interface Score {
    high: number;
    medium: number;
    low: number;
}

interface TodoItem {
    title: string;
    id?: number;
    complete?: boolean;
    priority?: "high" | "low" | "medium";
}

let initialTodos: TodoItem[] = [];

export const Todo = () => {
    const dashref = useRef<HTMLInputElement>(null);
    const proref = useRef<HTMLSelectElement>(null);
    const [todos, settodo] = useState<TodoItem[]>(initialTodos);

    function sort(todoList: TodoItem[]) {
        // Sort descending by priority (high -> medium -> low)
        const sorted = [...todoList].sort((a, b) => {
            const score: Score = { high: 3, medium: 2, low: 1 };
            const dashA = score[a.priority || "low"];
            const dashB = score[b.priority || "low"];
            return dashB - dashA;
        });
        return sorted;
    }

    function add() {
        if (!dashref.current || !dashref.current.value.trim()) {
            console.log("You must put a todo title");
            return;
        }
        if (!proref.current) {
            console.log("You must select a priority");
            return;
        }

        const newtodo: TodoItem = {
            title: dashref.current.value.trim(),
            id: Date.now(),
            priority: proref.current.value as "high" | "low" | "medium",
            complete: false
        };

        settodo((prevTodos) => {
            const updated = [...prevTodos, newtodo];
            return sort(updated);
        });

        // Clear input after adding
        dashref.current.value = '';
        proref.current.value = 'low';
    }

    function doe(id: number) {
        settodo((prevTodos) => prevTodos.filter((a) => a.id !== id));
    }

    return (
        <div className="p-6 md:p-10 max-w-4xl mx-auto">
            <div className="flex flex-col mb-10">
                <h1 className="text-4xl font-bold text-white mb-2">My Tasks</h1>
                <p className="text-zinc-400">Organize your workflow and prioritize effectively.</p>
            </div>

            {/* Input Form Section */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl shadow-xl w-full overflow-hidden p-6 mb-10">
                <div className="flex flex-col sm:flex-row gap-4 items-end">
                    <div className="flex-1 w-full space-y-2">
                        <label className="text-sm font-semibold text-zinc-300">Task Description</label>
                        <input
                            ref={dashref}
                            placeholder="What needs to be done?"
                            type="text"
                            className="w-full px-4 py-3 rounded-xl border border-zinc-700 bg-zinc-800 text-white focus:bg-zinc-700 focus:border-secondary focus:outline-none focus:ring-1 focus:ring-secondary transition-all outline-none placeholder-zinc-500"
                        />
                    </div>
                    <div className="sm:w-48 w-full space-y-2 relative">
                        <label className="text-sm font-semibold text-zinc-300">Priority</label>
                        <select
                            ref={proref}
                            defaultValue="low"
                            className="w-full px-4 py-3 rounded-xl border border-zinc-700 bg-zinc-800 text-white focus:bg-zinc-700 focus:border-secondary focus:outline-none focus:ring-1 focus:ring-secondary transition-all outline-none appearance-none cursor-pointer"
                        >
                            <option value="high">High</option>
                            <option value="medium">Medium</option>
                            <option value="low">Low</option>
                        </select>
                        <div className="absolute right-4 top-[38px] pointer-events-none text-zinc-400">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                        </div>
                    </div>
                    <button
                        onClick={add}
                        className="w-full sm:w-auto px-6 py-3 h-[49px] rounded-xl flex items-center justify-center gap-2 text-sm font-bold text-white bg-primary hover:bg-secondary hover:shadow-lg transition-all duration-200"
                    >
                        <AddIcon fontSize="small" />
                        <span>Add Task</span>
                    </button>
                </div>
            </div>

            {/* Todo List Section */}
            <div className="space-y-4">
                {todos.length === 0 ? (
                    <div className="text-center py-12 bg-zinc-900/50 rounded-2xl border border-zinc-800/50 border-dashed">
                        <p className="text-zinc-500 text-lg">No tasks yet. Add one above to get started!</p>
                    </div>
                ) : (
                    todos.map((item) => (
                        <TodoCard 
                            key={item.id} 
                            id={item.id!} 
                            title={item.title} 
                            priority={item.priority || "low"} 
                            onDelete={doe} 
                        />
                    ))
                )}
            </div>
        </div>
    );
};
