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
        // TODO: Implement backend API call for adding a card
        // const response = await axios.post('/api/content', temproarycard);
        // If we get an ID from backend, update it here.
    },
    deletcard :(id) =>{
        set((state)=>({
            card:state.card.filter((c)=>{
               return ( c.id !== id)
            })
        }))

    },
    editcard:(id,updatedData)=> {
        set((state)=>({
            card:state.card.map((c)=>{
                if(c.id == id){
                    return {
                        ...c ,
                        ...updatedData
                    }}
                else{
                        return c
                    }
                }
        )}))
        
    },

}))

export default useCardset;