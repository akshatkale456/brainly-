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
  id?: string | number
  title: string
  type: string
  read: boolean
  link: string
  priority?: "high" | "medium" | "low"
}
export type CardProps = socialcard;

export interface Modl {
  isOpen?:boolean,
  onClose: React.Dispatch<React.SetStateAction<boolean>>,
  roomId?: string
}
export interface card {
  type?: string,
  title?: string,
  read?: boolean,
  link?: string
  id?: string | number
  priority?: "high" | "medium" | "low"
  content?: string
}
export interface cardGlobalState {
  card: card[],
  fetchcarddata: () => void
  addcard: (newCard: card) => Promise<void> | void
  deletcard: (id: string) => Promise<void> | void
  editcard: (id: string, updatedData: card) => Promise<void> | void
}

export interface TodoItem {
    title: string;
    id?: string | number;
    complete: boolean;
    priority: "high" | "low" | "medium";
}

export interface TodoGlobalState {
    todos: TodoItem[];
    fetchtodo: () => void;
    addTodo: (newTodo: Omit<TodoItem, "id">) => Promise<void>;
    deleteTodo: (id: string) => void;
    toggleTodoComplete: (id: string) => void;
    editTodo: (id: string, updatedData: TodoItem) => void;
}
export interface mediumcard {
  heading: string
  content?: string
  icon: ReactNode
  variant: "large" | "medium" | "small" | "notification"
  time?: string
  isNew?: boolean
}

export interface EventItem {
    id?: string | number;
    title: string;
    date: string;
    time?: string;
    description?: string;
}

export interface EventGlobalState {
    events: EventItem[];
    fetchEvents: () => void;
    addEvent: (newEvent: Omit<EventItem, "id">) => Promise<void>;
    deleteEvent: (id: string | number) => Promise<void>;
    editEvent: (id: string | number, updatedData: Partial<EventItem>) => Promise<void>;
}
