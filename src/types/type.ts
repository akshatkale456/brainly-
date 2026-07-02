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
  id: string
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
  id?: string | number
  priority?: "high" | "medium" | "low"
}
export interface cardGlobalState {
  card: card[],
  fetchcarddata:()=> void
  addcard: (newCard: card) => Promise<void> | void
  deletcard: (id: string ) => Promise<void> | void
  editcard: (id: string , updatedData: card) => Promise<void> | void
}

export interface TodoItem {
    title: string;
    id?: string | number;
    complete : boolean;
    priority : "high" | "low" | "medium";
}

export interface TodoGlobalState {
    todos: TodoItem[];
    fetchtodo:()=>void;
    addTodo: (newTodo: Omit<TodoItem ,"id">) => Promise<void>;
    deleteTodo: (id: string) => void;
    toggleTodoComplete: (id:string) => void;
    editTodo :(id:string,updatedData:TodoItem)=>void
}
export interface mediumcard {
  heading: string
  content?: string
  icon: ReactNode
  variant: "large" | "medium" | "small" | "notification"
  time?: string
  isNew?: boolean
}
