import { create } from "zustand"
import type { cardGlobalState } from "../types/type"
import type { card } from "../types/type"
const useCardset = create<cardGlobalState>((set) => ({
    card :[],
    
    addcard:async (newCard:card)=>{
    const  tempid = Date.now()
    
         const temproarycard = {
            title:newCard.title,
            type:newCard.type,
            id: tempid,
            priority:newCard.priority

        }
        set((state)=>({
            card:[...state.card,temproarycard]
        }))
        const response = await fetch
    set((state)=>({
        card:state.card.map((c)=>{
            if(c.id == tempid){
                return{
                    ...c,
                    id:response.id
                }
            }
    else{
                return c
            }

        })
    }))

        
    },
    deletcard(id) {
        
    },
    editcard(id, updatedData) {
        
    },

}))

export default useCardset;