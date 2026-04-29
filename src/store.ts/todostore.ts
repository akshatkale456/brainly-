import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { TodoGlobalState, TodoItem } from "../types/type";

export const useTodoStore = create<TodoGlobalState>()(
    persist(
        (set) => ({
            todos: [],
            addTodo: (newTodo) => set((state) => {
                const todo: TodoItem = {
                    ...newTodo,
                    id: Date.now(),
                    complete: false
                };
                return { todos: [...state.todos, todo] };
            }),
            deleteTodo: (id) => set((state) => ({
                todos: state.todos.filter((t) => t.id !== id)
            })),
            toggleTodoComplete: (id) => set((state) => ({
                todos: state.todos.map((t) =>
                    t.id === id ? { ...t, complete: !t.complete } : t
                )
            }))
        }),
        {
            name: "todo-storage", // stores tasks in localStorage
        }
    )
);
