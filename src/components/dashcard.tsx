import type { mediumcard } from "../types/type"
import { Alerttdot } from "./alertdot"

const variants={
   large :"w-[100vw] h-[60vh]",
   small:"w-[20vw] h-[35vh]",
   medium:"w-[35vw] h-[35vh]",
   notification: "w-full min-h-[100px]"
}

export const Mediumcard = (props: mediumcard)=>{
     return (
        <div className={`bg-gradient-to-br from-neutral-800 via-neutral-800 to-primary/50 text-white border border-neutral-700 rounded-xl shadow-lg flex flex-col p-6 gap-4 relative overflow-hidden ${props.variant ? variants[props.variant] : variants.medium}`}>
         {props.isNew && <Alerttdot variants="primary" pulse={true} className="absolute top-4 right-4 flex" />}
         <div className="text-2xl font-bold tracking-tight pr-4">
            {props.heading}
         </div>
         
         <div className="flex items-center gap-3 ">
            {props.icon} 
            {props.content && <span className="text-zinc-300 font-medium">{props.content}</span>}
         </div>

         {props.time && (
             <div className="mt-auto text-xs text-zinc-400 pt-2 border-t border-neutral-700 border-opacity-50">
                 {props.time}
             </div>
         )}
        </div>
     );
}
