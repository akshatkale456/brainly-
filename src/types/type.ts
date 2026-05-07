import React, { type ReactNode } from "react";
export interface Card {
  string: string,
  title?: string,
  stock: number,
  img: ReactNode
}
export interface Button {
  text?: string,
  onClick?: () => void
  icon?: ReactNode,
  variant: "big" | "small"
}

export interface SidebarItemProps {
  title: string;
  icon?: ReactNode;
}
export interface socialcard {
  id: number
  title: string
  type: "youtube" | "twitter"
  read: boolean
  link: string
  priority?: "high" | "medium" | "low"
}
export interface Modl {
  setclose: React.Dispatch<React.SetStateAction<boolean>>


}
export interface card {
  type?: string,
  title?: string,
  read?: boolean,
  link?: string
  id?: number
  priority?: "high" | "medium" | "low"
}
export interface cardGlobalState {
  card: card[]
  addcard: (newCard: card) => void
  deletcard: (id: number) => void
  editcard: (id: number, updatedData: card) => void
}

export interface TodoItem {
    title?: string;
    id: number;
    complete ?: boolean;
    priority ?: "high" | "low" | "medium";
}

export interface TodoGlobalState {
    todos: TodoItem[];
    addTodo: (newTodo: TodoItem) => void;
    deleteTodo: (id: number) => void;
    toggleTodoComplete: (id: number) => void;
    editTodo :(id:number,updatedData:TodoItem)=>void
}
export interface mediumcard {
  heading: string
  content?: string
  icon: ReactNode
  variant: "large" | "medium" | "small" | "notification"
  time?: string
  isNew?: boolean
}
