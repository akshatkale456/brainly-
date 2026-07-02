import { create } from "zustand";

import type { TodoGlobalState} from "../types/type";

export const useTodoStore =  create<TodoGlobalState>((set,get) => ({
    todos :[],
    fetchtodo:async()=> {
        const token = localStorage.getItem("Authorization") || "";
        const response = await fetch("http://localhost:3000/api/todo/get",{
            "method": "get",
            headers: {
          "Content-Type": "application/json",
          "authorization" : token,
        },
        
            
        })
        const data = await response.json()
        
        console.log(data.data)
        const todosList = Array.isArray(data.data) ? data.data : (Array.isArray(data) ? data : []);
        const mappedTodos = todosList.map((t: any) => ({
            ...t,
            id: t._id
        }));

        set(()=>({
             todos: mappedTodos
        }))
        
    },
    
    addTodo :async (newtodo)=>{
    const  tempid = Date.now()
    
         const temproartodo = {
             title: newtodo.title,
             id:tempid,
             complete:false,
 
    priority: newtodo.priority||"low"
        }
        set((state)=>({
            todos:[...state.todos,temproartodo]
        }))
        const backendPayload = {
  title: newtodo.title,
  priority: newtodo.priority || "low",
  compelete:false
};

        const token = localStorage.getItem("Authorization");
        const response = await fetch("http://localhost:3000/api/todo",{
            "method": "post",
            headers: {
          "Content-Type": "application/json",
          "authorization" : token || ""
        },
            body:JSON.stringify(backendPayload)
            
        })
        console.log( response)
        if (!response.ok){ 
            const error = await response.json()
            console.log(error)
            throw new Error("Failed to save todo");
            
        }


      // 3. Parse the actual JSON data from the server
      const data = await response.json()
        console.log(response)
        const realId =  data.data?._id 
    set((state)=>({
        todos:state.todos.map((c)=>{
            if(c.id == tempid){
                return{
                    ...c,
                    id: realId 
                }
            }
    else{
                return c
            }

        })
    }))

        
    } ,
    deleteTodo: async (id) => {
         const token = localStorage.getItem("Authorization");
         try {
             const response = await fetch(`http://localhost:3000/api/todo/${id}`, {
                 method: "DELETE",
                 headers: {
                     "Content-Type": "application/json",
                     "authorization": token || ""
                 }
             });
             if (!response.ok) {
                 const error = await response.json();
                 console.error("Failed to delete todo on server:", error);
                 throw new Error("Failed to delete todo");
             }
         } catch (e) {
             console.error("Error deleting todo on backend:", e);
         } finally {
             set((state) => ({
                 todos: state.todos.filter((c) => String(c.id) !== String(id))
             }));
         }
    },
    toggleTodoComplete: async(id)=>{
         console.log("toggleTodoComplete triggered for id:", id);
         console.log("Current todos in store:", get().todos);
         
         const todo = get().todos.find((todo)=>( String(todo.id) === String(id) ) )
         if(!todo) {
             console.warn("Todo not found in store for id:", id);
             return;
         }
         
         const update = !todo.complete;
         const load =  {
            complete:update
         }
         
         const token = localStorage.getItem("Authorization");
         console.log("Token retrieved for update:", token);
         
         try{
             const response = await fetch(`http://localhost:3000/api/todo/${id}`,{
            "method": "put",
            headers: {
          "Content-Type": "application/json",
          "authorization" : token || ""
        },
            body:JSON.stringify(load)
            
        })
        console.log("Response from server:", response)
        if (!response.ok){ 
            const error = await response.json()
            console.error("Server returned error:", error)
            throw new Error("Failed to save todo");
        }
         }catch(e){
             console.error("Error toggling todo on backend:", e)
         }finally{
             console.log("Toggling complete status in state for id:", id);
             set((state)=>({
                 todos:state.todos.map((c)=>{
                     if( String(c.id) === String(id) ){
                          return {
                              ...c,
                              complete:!c.complete
                          }
                     }
                     else{
                         return c
                     }
                 })
             }))
         }
    },
    editTodo:(id,updatedData)=> {
        set((state)=>({
            todos:state.todos.map((c)=>{
                if(String(c.id) === String(id)){
                    return {
                        ...c ,
                        ...updatedData
                    }
                }
                else{
                    return c
                }
            })
        }))
    },
}))

export default useTodoStore