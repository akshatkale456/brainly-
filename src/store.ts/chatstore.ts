import { create } from "zustand";

interface ChatMessage {
    id: string;
    text: string;
    senderId: string;
    timestamp?: Date;
}

interface ChatState {
    messages: ChatMessage[];
    fetchMessages: () => Promise<void>;
    addMessage: (message: ChatMessage) => void;
    deleteMessage: (id: string, currentUserId: string, roomAdminId: string) => Promise<void>;
    editMessage: (id: string, updatedData: Partial<ChatMessage>) => Promise<void>;
    clearMessages: () => void;
    receiveMessageAdded: (message: ChatMessage) => void;
    receiveMessageDeleted: (messageId: string) => void;
    receiveMessageUpdated: (id: string, updatedData: Partial<ChatMessage>) => void;
}

export const useChatStore = create<ChatState>((set) => ({
    messages: [],
    fetchMessages: async () => {
        /* ... HTTP code ... */
    },
    addMessage: (message) => set((state) => ({ messages: [...state.messages, message] })),
    deleteMessage: async (id, currentUserId, roomAdminId) => {
        /* ... HTTP code ... */
    },
    editMessage: async (id, updatedData) => {
        /* ... HTTP code ... */
    },
    clearMessages: () => set({ messages: [] }),
    receiveMessageAdded: (message) => {

    },
    receiveMessageDeleted: (messageId) => {

    },
    receiveMessageUpdated: (id, updatedData) => {

    }
}));

export default useChatStore;
