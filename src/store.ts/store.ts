import { create } from "zustand"
import type { cardGlobalState } from "../types/type"
import type { card } from "../types/type"
const useCardset = create<cardGlobalState>((set, get) => ({
    card :[],
    fetchcarddata: async () => {
        const token = localStorage.getItem("Authorization") || "";
        try {
            const responseyoutube = await fetch("http://localhost:3000/api/youtube/get", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "authorization": token,
                },
            });
            const datayoutube = await responseyoutube.json();
            
            const responsetweet = await fetch("http://localhost:3000/api/twitter/get", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "authorization": token,
                },
            });
            const datatweet = await responsetweet.json();
            
            const combinedCards = [
                ...(datayoutube.data || []).map((c: any) => ({ ...c, type: 'youtube', id: c._id })),
                ...(datatweet.data || []).map((c: any) => ({ ...c, type: 'twitter', id: c._id }))
            ];
            
            set({ card: combinedCards });
        } catch (error) {
            console.error("Error fetching cards:", error);
        }
    },
    
    addcard: async (newCard:card)=>{
        const tempid = Date.now()
       
        const temproarycard = {
            title: newCard.title,
            type: newCard.type,
            link: newCard.link,
            id: tempid,
            priority: newCard.priority
        }
        
        set((state)=>({
            card:[...state.card, temproarycard]
        }))
        
        const endpoint = newCard.type === "youtube" ? "youtube" : "twitter";
        const backendPayload = {
            title: newCard.title,
            link: newCard.link,
            priority: newCard.priority || "low"
        };
        const token = localStorage.getItem("Authorization");

        try {
            const response = await fetch(`http://localhost:3000/api/${endpoint}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "authorization": token || ""
                },
                body: JSON.stringify(backendPayload)
            });

            if (!response.ok) {
                const error = await response.json();
                console.error("Failed to save card:", error);
                throw new Error("Failed to save card");
            }

            const data = await response.json();
            const realId = endpoint === "youtube" ? data.youtube?._id : data.twitter?._id;

            set((state) => ({
                card: state.card.map((c) => {
                    if (c.id === tempid) {
                        return { ...c, id: realId || c.id };
                    }
                    return c;
                })
            }));
        } catch (error) {
            console.error("Error saving card on backend:", error);
        }
    },
    
    deletcard: async (id) => {
        const cardToDelete = get().card.find((c) => (c.id) === (id));
        
        if (!cardToDelete) {
            // If somehow not found, fallback to local state update just in case
            set((state)=>({
                card: state.card.filter((c)=>( c.id !== id))
            }))
            return;
        }

        const endpoint = cardToDelete.type === "youtube" ? "youtube" : "twitter";
        const token = localStorage.getItem("Authorization");

        try {
            const response = await fetch(`http://localhost:3000/api/${endpoint}/${id}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    "authorization": token || ""
                }
            });

            if (!response.ok) {
                console.error("Failed to delete card on server");
                throw new Error(`Failed to delete ${endpoint}`);
            }
        } catch (e) {
            console.error("Error deleting card on backend:", e);
        } finally {
            set((state) => ({
                card: state.card.filter((c) => c.id !== id)
            }));
        }
    },
    
    editcard: async (id, updatedData) => {
        const cardToEdit = get().card.find((c) => c.id === id);
        if (!cardToEdit) return;

        // Optimistic update in UI
        set((state)=>({
            card: state.card.map((c)=>{
                if(String(c.id) === String(id)){
                    return {
                        ...c ,
                        ...updatedData
                    }
                } else {
                    return c
                }
            })
        }));

        const endpoint = cardToEdit.type === "youtube" ? "youtube" : "twitter";
        const token = localStorage.getItem("Authorization");
        const backendPayload = {
            title: updatedData.title,
            link: updatedData.link,
            priority: updatedData.priority
        };

        try {
            const response = await fetch(`http://localhost:3000/api/${endpoint}/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    "authorization": token || ""
                },
                body: JSON.stringify(backendPayload)
            });

            if (!response.ok) {
                throw new Error(`Failed to update ${endpoint}`);
            }
        } catch (e) {
            console.error("Error updating card on backend:", e);
        }
    },

}))

export default  useCardset;