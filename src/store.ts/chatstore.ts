import { create } from "zustand";
import { API_URL } from "../config";
import { useRoomStore } from "./roomstore";

export interface ChatMessage {
    id: string;
    text: string;
    senderId: string;
    senderName?: string;
    timestamp?: Date;
}

interface ChatState {
    messages: ChatMessage[];
    fetchMessages: () => Promise<void>;
    addMessage: (message: string) => Promise<void>;
    deleteMessage: (id: string) => Promise<void>;
    editMessage: (id: string, text: string) => Promise<void>;
    clearMessages: () => void;
    receiveMessageAdded: (message: ChatMessage) => void;
    receiveMessageDeleted: (messageId: string) => void;
    receiveMessageUpdated: (id: string, text: string) => void;
}

export const useChatStore = create<ChatState>((set) => ({
    messages: [],
    fetchMessages: async () => {
        const roomId = useRoomStore.getState().roomId;
        const token = localStorage.getItem("Authorization") || "";
        try {
            const response = await fetch(`${API_URL}/chat/${roomId}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "authorization": token,
                },
            });
            const data = await response.json();
            
            const mappedMessages = (data.messages || []).map((m: any) => ({
                id: m._id,
                text: m.message,
                senderId: m.sender?._id || m.sender,
                senderName: m.sender?.username,
                timestamp: m.createdAt
            }));
            
            set({ messages: mappedMessages });
        } catch (error) {
            console.error("Error fetching messages:", error);
        }
    },
    addMessage: async (text: string) => {
        const roomId = useRoomStore.getState().roomId;
        const token = localStorage.getItem("Authorization") || "";
        // Optimistic UI update could go here if we know the senderId
        try {
            const response = await fetch(`${API_URL}/chat`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "authorization": token
                },
                body: JSON.stringify({ roomId, message: text, type: "client" })
            });

            if (!response.ok) {
                throw new Error("Failed to send message");
            }
            
            const data = await response.json();
            const newMsg = data.chat;
            
            const mappedMsg: ChatMessage = {
                id: newMsg._id,
                text: newMsg.message,
                senderId: newMsg.sender?._id || newMsg.sender,
                senderName: newMsg.sender?.username,
                timestamp: newMsg.createdAt
            };

            set((state) => ({ messages: [...state.messages, mappedMsg] }));
            
            const { useSocketStore } = await import("./socketstore");
            useSocketStore.getState().sendMessage({
                type: "chat_message",
                roomName: roomId,
                message: newMsg
            });
            
        } catch (error) {
            console.error("Error sending message:", error);
        }
    },
    deleteMessage: async (id: string) => {
        set((state) => ({
            messages: state.messages.filter((m) => String(m.id) !== String(id))
        }));

        const token = localStorage.getItem("Authorization");
        try {
            const response = await fetch(`${API_URL}/chat/${id}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    "authorization": token || ""
                }
            });

            if (!response.ok) {
                throw new Error("Failed to delete message");
            }
        } catch (error) {
            console.error("Error deleting message:", error);
        }
    },
    editMessage: async (id: string, text: string) => {
        set((state) => ({
            messages: state.messages.map((m) => {
                if (String(m.id) === String(id)) {
                    return { ...m, text };
                }
                return m;
            })
        }));

        const token = localStorage.getItem("Authorization");
        try {
            const response = await fetch(`${API_URL}/chat/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    "authorization": token || ""
                },
                body: JSON.stringify({ message: text })
            });

            if (!response.ok) {
                throw new Error("Failed to update message");
            }
        } catch (error) {
            console.error("Error updating message:", error);
        }
    },
    clearMessages: () => set({ messages: [] }),
    receiveMessageAdded: (message) => {
        set((state) => {
            // Check if message already exists (from optimistic UI update)
            if (state.messages.some(m => m.id === message.id)) return state;
            return { messages: [...state.messages, message] };
        });
    },
    receiveMessageDeleted: (messageId) => {
        set((state) => ({
            messages: state.messages.filter((m) => String(m.id) !== String(messageId))
        }));
    },
    receiveMessageUpdated: (id, text) => {
        set((state) => ({
            messages: state.messages.map((m) => {
                if (String(m.id) === String(id)) {
                    return { ...m, text };
                }
                return m;
            })
        }));
    }
}));

export default useChatStore;
