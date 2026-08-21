import { create } from "zustand";
import type { card } from "../types/type";
import { API_URL, BACKEND_URL } from "../config";
import { string } from "zod";
import { useRoomStore } from "./roomstore";

export interface PinGlobalState {
  pins: card[];
  isAdmin: boolean;
  fetchPins: () => Promise<void>;
  addPin: (newPin: card) => Promise<void>;
  deletePin: (id: string | number) => Promise<void>;
  editPin: (id: string | number, updatedData: Partial<card>) => Promise<void>;
  receivePinAdded: (newPin: card) => void;
}

export const pincardset = create<PinGlobalState>((set) => ({
  pins: [],
  isAdmin: false,
  fetchPins: async () => {
    const roomId = useRoomStore.getState().roomId;
    try {
      const response = await fetch(`${API_URL}/livepin/cards/${roomId}`, {
        method: "GET",
        headers: {"Content-Type": "application/json"},
                credentials: "include",
      });
      const data = await response.json();
      const pinsList = Array.isArray(data.cards) ? data.cards : (Array.isArray(data) ? data : []);
      const mappedPins = pinsList.map((p: any) => ({
        ...p,
        id: p.cardId || p._id || p.id
      }));
      set({ pins: mappedPins, isAdmin: data.isAdmin || false });
    } catch (error) {
      console.error("Error fetching pins:", error);
    }
  },
  addPin: async (newPin: card) => {
    const roomId = useRoomStore.getState().roomId;
    const tempid = Date.now().toString();
    const tempPin = { ...newPin, id: tempid };
    set((state) => ({ pins: [...state.pins, tempPin] }));

    try {
      const response = await fetch(`${API_URL}/livepin/cards`, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
                credentials: "include",
        body: JSON.stringify({
          cardId: tempid,
          roomId: roomId,
          title: newPin.title,
          link: newPin.link,
          type: newPin.type || "pin",
          priority: newPin.priority
        })
      });

      if (!response.ok) {
        throw new Error("Failed to save pin");
      }

      const data = await response.json();
      const realId = data.card?.cardId || data.card?._id || data.pin?._id;

      set((state) => ({
        pins: state.pins.map((p) => {
          if (p.id === tempid) {
            return { ...p, id: realId || p.id };
          }
          return p;
        })
      }));

      const { useSocketStore } = await import("./socketstore");
      useSocketStore.getState().sendMessage({
          type: "broadcast_pin",
          roomName: roomId,
          pin: data.card || data.pin || tempPin
      });
      
    } catch (error) {
      console.error("Error saving pin on backend:", error);
    }
  },
  deletePin: async (id) => {
    set((state) => ({
      pins: state.pins.filter((p) => String(p.id) !== String(id))
    }));

    try {
      const response = await fetch(`${API_URL}/livepin/cards/${id}`, {
        method: "DELETE",
        headers: {"Content-Type": "application/json"},
                credentials: "include"
      });

      if (!response.ok) {
        throw new Error("Failed to delete pin");
      }
    } catch (error) {
      console.error("Error deleting pin on backend:", error);
    }
  },
  editPin: async (id, updatedData) => {
    set((state) => ({
      pins: state.pins.map((p) => {
        if (String(p.id) === String(id)) {
          return { ...p, ...updatedData };
        }
        return p;
      })
    }));

    try {
      const response = await fetch(`${API_URL}/livepin/cards/${id}`, {
        method: "PUT",
        headers: {"Content-Type": "application/json"},
                credentials: "include",
        body: JSON.stringify(updatedData)
      });

      if (!response.ok) {
        throw new Error("Failed to update pin");
      }
    } catch (error) {
      console.error("Error updating pin on backend:", error);
    }
  },
  receivePinAdded: (newPin) => {
    set((state) => {
      const pinAny = newPin as any;
      const newId = pinAny.cardId || pinAny._id || pinAny.id;
      if (state.pins.some(p => p.id === newId || p.id === newPin.id)) {
        return state;
      }
      return { pins: [...state.pins, { ...newPin, id: newId }] };
    });
  }
}));
