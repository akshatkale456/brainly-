import type { ReactElement } from "react"
import type { Card } from "../types/type"


export function Card(card: Card) {
  return <div className="flex items-center justify-center p-4 md:p-10 w-full sm:w-auto">
    <div className="
        min-h-96 w-full sm:w-72 rounded-xl
        font-roboto
   
  bg-white/10
 flex
flex-col
items-center
justify-center
gap-5  p-4
   
      
        shadow-2xl 
        shadow-black/50
       backdrop-blur-xs
  
        text-white
      " >
      <div>
        {card.img}
      </div>
      <div>



      </div>
      {card.stock}
    </div>
  </div>
}