import {create} from "zustand"
import type { load } from "../types/type"
const UseLoading = create<load>((set)=>({
    load:true,
    setLoad:() => set((state)=>({load:!state.load}))
}))