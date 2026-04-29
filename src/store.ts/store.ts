import { create } from "zustand"
import type { cardGlobalState } from "../types/type"
import type { card } from "../types/type"
const useCardset = create<cardGlobalState>((set) => ({
    card: [],
    addcard: async (newCard: card) => {
        const temporaryCard =   {
            type: newCard.type,
            title: newCard.title,
            read: newCard.read,
            link: newCard.link,
            priority: newCard.priority || "low",
            id: new Date().getTime()
        };
        
        set((state) => ({
            card: [...state.card, temporaryCard]
        }));
    },
    deletcard: async (id: number) => {set((state) => ({
        card: state.card.filter((card) => card.id !== id)
    }))
    await fetch("#",{

    })
},

    editcard:(id:number,updatedData)=>set((state)=>{
        card:state.card.map((c)=>{
            if ( c.id === id ){
                return {
                    ...c,
                    ...updatedData
                }
            }
        }
        )
    })
}));

export default useCardset;