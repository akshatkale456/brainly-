import { create } from "zustand";
import type { EventGlobalState } from "../types/type";
import { API_URL } from "../config";

export const useEventStore = create<EventGlobalState>((set, get) => ({
    events: [],
    fetchEvents: async () => {
        try {
            const response = await fetch(`${API_URL}/event/get`, {
                method: "get",
                headers: {"Content-Type": "application/json"},
                credentials: "include",
            });
            const data = await response.json();
            
            const eventsList = Array.isArray(data.data) ? data.data : (Array.isArray(data) ? data : []);
            const mappedEvents = eventsList.map((e: any) => ({
                ...e,
                id: e._id || e.id
            }));

            set(() => ({
                events: mappedEvents
            }));
        } catch (e) {
            console.error("Error fetching events:", e);
        }
    },
    
    addEvent: async (newEvent) => {
        const tempid = Date.now();
        const temporaryEvent = {
            ...newEvent,
            id: tempid
        };
        
        set((state) => ({
            events: [...state.events, temporaryEvent]
        }));

        try {
            const response = await fetch(`${API_URL}/event`, {
                method: "post",
                headers: {"Content-Type": "application/json"},
                credentials: "include",
                body: JSON.stringify(newEvent)
            });
            
            if (!response.ok) { 
                throw new Error("Failed to save event");
            }

            const data = await response.json();
            const realId = data.data?._id || data._id;
            
            set((state) => ({
                events: state.events.map((e) => {
                    if (e.id === tempid) {
                        return { ...e, id: realId || e.id };
                    }
                    return e;
                })
            }));
        } catch (error) {
            console.error("Error adding event on backend:", error);
            // Optionally, we could remove the optimistic event on failure here
        }
    },
    
    deleteEvent: async (id) => {
        try {
            const response = await fetch(`${API_URL}/event/${id}`, {
                method: "DELETE",
                headers: {"Content-Type": "application/json"},
                credentials: "include"
            });
            if (!response.ok) {
                throw new Error("Failed to delete event");
            }
        } catch (e) {
            console.error("Error deleting event on backend:", e);
        } finally {
            set((state) => ({
                events: state.events.filter((e) => String(e.id) !== String(id))
            }));
        }
    },
    
    editEvent: async (id, updatedData) => {
        set((state) => ({
            events: state.events.map((e) => {
                if (String(e.id) === String(id)) {
                    return { ...e, ...updatedData };
                }
                return e;
            })
        }));

        try {
            await fetch(`${API_URL}/event/${id}`, {
                method: "PUT",
                headers: {"Content-Type": "application/json"},
                credentials: "include",
                body: JSON.stringify(updatedData)
            });
        } catch (e) {
            console.error("Error updating event on backend:", e);
        }
    }
}));

export default useEventStore;
