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