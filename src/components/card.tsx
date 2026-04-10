import type { ReactElement } from "react"
import type { Card } from "../types/type"
//

export function Card(card: Card) {
  return <div className="flex items-center justify-center p-4 md:p-10 w-full sm:w-auto">
    <div className="
        min-h-96 w-full sm:w-72 rounded-xl
        
     bg-gradient-to-br from-neutral-800 via-neutral-800 to-primary/50

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
