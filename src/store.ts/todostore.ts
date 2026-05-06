import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { TodoGlobalState, TodoItem } from "../types/type";

export const useTodoStore = c