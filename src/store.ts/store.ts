import {create} from "zustand"
import type {cardGlobalState} from "../types/type"
import type { card } from "../types/type"
const  useCardset = create<cardGlobalState>((set)=>({
 card: card[],
 addcard:(newCard:card)=>({

})) 
