import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { TodoGlobalState, TodoItem } from "../types/type";

export const useTodoStore =  create<TodoGlobalState>((set) => ({
    todos :[],
    
    addTodo :async (newtodo:TodoItem)=>{
    const  tempid = Date.now()
    
         const temproartodo = {
             title: newtodo.title,
    id: tempid,
    complete: newtodo.complete||false,
    priority: newtodo.priority
        }
        set((state)=>({
            todos:[...state.todos,temproartodo]
        }))
        const response = await fetch
    set((state)=>({
        todos:state.todos.map((c)=>{
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
    deleteTodo :(id) =>{
        set((state)=>({
            todos:state.todos.filter((c)=>{
               return ( c.id !== id)
            })
        }))

    },
    toggleTodoComplete:(id)=>{

    },
    editTodo:(id,updatedData)=> {
        set((state)=>({
            todos:state.todos.map((c)=>{
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