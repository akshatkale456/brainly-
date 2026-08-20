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
    currentUserId: string | null;
    currentUserName: string | null;
    fetchCurrentUser: () => Promise<void>;
}

function extractUserFromToken(): { id: string | null, name: string | null } {
    const token = localStorage.getItem("Authorization");
    if (!token) return { id: null, name: null };
    try {
        const parts = token.split('.');
        if (parts.length !== 3) return { id: null, name: null };
        const base64Url = parts[1];
        const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        const jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));
        const payload = JSON.parse(jsonPayload);
        const id = payload.id || payload.userId || payload._id || payload.sub || null;
        const name = payload.username || payload.name || payload.email || null;
        return { id, name };
    } catch (e) {
        return { id: null, name: null };
    }
}

const initialUser = extractUserFromToken();

export const useChatStore = create<ChatState>((set) => ({
    messages: [],
    currentUserId: initialUser.id,
    currentUserName: initialUser.name,
    fetchCurrentUser: async () => {
        const token = localStorage.getItem("Authorization");
        if (!token) return;
        try {
            const response = await fetch(`${API_URL}/me`, {
                headers: { "authorization": token }
            });
            if (response.ok) {
                const data = await response.json();
                const user = data.User || data.user || data;
                set({ 
                    currentUserId: user._id || user.id,
                    currentUserName: user.username || user.name || user.email 
                });
            }
        } catch (error) {
            console.error("Error fetching current user:", error);
        }
    },
    fetchMessages: async () => {
        const state = useChatStore.getState();
        if (!state.currentUserId || !state.currentUserName) {
            await state.fetchCurrentUser();
        }
        
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
            
            const mappedMessages = (data.messages || []).map((m: any) => {
                const senderObj = m.sender || {};
                const name = senderObj.username || senderObj.name || senderObj.firstName || senderObj.email || m.senderName;
                return {
                    id: m._id,
                    text: m.message,
                    senderId: senderObj._id || m.sender,
                    senderName: name,
                    timestamp: m.createdAt
                };
            });
            
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
                body: JSON.stringify({ roomId, message: text, type: "client", senderName: useChatStore.getState().currentUserName })
            });

            if (!response.ok) {
                throw new Error("Failed to send message");
            }
            
            const data = await response.json();
            const newMsg = data.chat;
            
            const senderObj = newMsg.sender || {};
            const name = senderObj.username || senderObj.name || senderObj.firstName || senderObj.email || newMsg.senderName;
            const mappedMsg: ChatMessage = {
                id: newMsg._id,
                text: newMsg.message,
                senderId: senderObj._id || newMsg.sender,
                senderName: name,
                timestamp: newMsg.createdAt
            };

            set((state) => ({ 
                messages: [...state.messages, mappedMsg],
                currentUserId: state.currentUserId || mappedMsg.senderId 
            }));
            
            const { useSocketStore } = await import("./socketstore");
            newMsg.senderName = useChatStore.getState().currentUserName;
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
