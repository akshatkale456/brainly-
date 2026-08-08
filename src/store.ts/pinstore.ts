import { create } from "zustand";
import type { card } from "../types/type";
import { BACKEND_URL } from "../config";

export interface PinGlobalState {
  pins: card[];
  fetchPins: () => Promise<void>;
  addPin: (newPin: card) => Promise<void>;
  deletePin: (id: string | number, currentUserId: string, roomAdminId: string) => Promise<void>;
  editPin: (id: string | number, updatedData: Partial<card>) => Promise<void>;
  receivePinAdded: (newPin: card) => void;
  receivePinDeleted: (pinId: string | number) => void;
  receivePinUpdated: (id: string | number, updatedData: Partial<card>) => void;
}

export const pincardset = create<PinGlobalState>((set) => ({
  pins: [],
  fetchPins: async () => {
    const token = localStorage.getItem("Authorization") || "";
    try {
      const response = await fetch(`${BACKEND_URL}/pin/get`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "authorization": token,
        },
      });
      const data = await response.json();
      const pinsList = Array.isArray(data.data) ? data.data : (Array.isArray(data) ? data : []);
      const mappedPins = pinsList.map((p: any) => ({
        ...p,
        id: p._id || p.id
      }));
      set({ pins: mappedPins });
    } catch (error) {
      console.error("Error fetching pins:", error);
    }
  },
  addPin: async (newPin: card) => {
    const tempid = Date.now();
    const tempPin = { ...newPin, id: tempid };
    set((state) => ({ pins: [...state.pins, tempPin] }));

    const token = localStorage.getItem("Authorization");
    try {
      const response = await fetch(`${BACKEND_URL}/pin`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "authorization": token || ""
        },
        body: JSON.stringify(newPin)
      });

      if (!response.ok) {
        throw new Error("Failed to save pin");
      }

      const data = await response.json();
      const realId = data.data?._id || data.pin?._id;

      set((state) => ({
        pins: state.pins.map((p) => {
          if (p.id === tempid) {
            return { ...p, id: realId || p.id };
          }
          return p;
        })
      }));
    } catch (error) {
      console.error("Error saving pin on backend:", error);
    }
  },
  deletePin: async (id, currentUserId, roomAdminId) => {
    set((state) => ({
      pins: state.pins.filter((p) => String(p.id) !== String(id))
    }));

    const token = localStorage.getItem("Authorization");
    try {
      const response = await fetch(`${BACKEND_URL}/pin/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "authorization": token || ""
        },
        body: JSON.stringify({ currentUserId, roomAdminId })
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

    const token = localStorage.getItem("Authorization");
    try {
      const response = await fetch(`${BACKEND_URL}/pin/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "authorization": token || ""
        },
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

  },
  receivePinDeleted: (pinId) => {

  },
  receivePinUpdated: (id, updatedData) => {

  }
}));
