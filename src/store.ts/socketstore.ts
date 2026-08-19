import { create } from "zustand";
import { BACKEND_URL } from "../config";
import { useRoomStore } from "./roomstore";
import { pincardset } from "./pinstore";
import { useChatStore } from "./chatstore";

interface SocketState {
    socket: WebSocket | null;
    connect: (actionType?: string) => void;
    disconnect: () => void;
    sendMessage: (msg: any) => void;
}

export const useSocketStore = create<SocketState>((set, get) => ({
    socket: null,
    connect: (actionType = "join") => {
        const { socket } = get();
        if (socket && (socket.readyState === WebSocket.OPEN || socket.readyState === WebSocket.CONNECTING)) return;

        const token = localStorage.getItem("Authorization");
        if (!token) return;

        const wsUrl = `${BACKEND_URL.replace("http", "ws")}/ws?token=${token}`;
        const newSocket = new WebSocket(wsUrl);

        newSocket.addEventListener("open", () => {
            const roomId = useRoomStore.getState().roomId;
            newSocket.send(JSON.stringify({
                type: actionType,
                roomName: roomId
            }));
            console.log(`WebSocket connected for room: ${roomId} with action: ${actionType}`);
        });

        newSocket.addEventListener("message", (event) => {
            try {
                const data = JSON.parse(event.data);
                console.log("WebSocket message received:", data);

                if (data.type === "broadcast_pin" || data.type === "add_pin") {
                    const pinData = data.pin || data.card;
                    if (pinData) {
                        pincardset.getState().receivePinAdded(pinData);
                    }
                }
                if (data.type === "chat_message" || data.type === "broadcast_message") {
                    const msg = data.message || data.chat;
                    if (msg) {
                        const mappedMsg = {
                            id: msg._id || msg.id,
                            text: msg.message || msg.text,
                            senderId: msg.sender?._id || msg.sender || msg.senderId,
                            senderName: msg.sender?.username || msg.senderName,
                            timestamp: msg.createdAt || msg.timestamp
                        };
                        useChatStore.getState().receiveMessageAdded(mappedMsg);
                    }
                }
            } catch (err) {
                console.error("Error parsing websocket message", err);
            }
        });

        newSocket.addEventListener("close", () => {
            console.log("WebSocket disconnected");
            set({ socket: null });
        });

        set({ socket: newSocket });
    },
    disconnect: () => {
        const { socket } = get();
        if (socket) {
            socket.close();
            set({ socket: null });
        }
    },
    sendMessage: (msg) => {
        const { socket } = get();
        if (socket && socket.readyState === WebSocket.OPEN) {
            socket.send(JSON.stringify(msg));
        } else {
            console.warn("WebSocket not open. Cannot send message.");
        }
    }
}));
