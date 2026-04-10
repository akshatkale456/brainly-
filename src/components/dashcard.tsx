import type { mediumcard } from "../types/type"

const variants={
   large :"w-[100vw] h-[60vh]",
   small:"w-[30vw] h-[30vh]",
   medium:"w-[75vw] h-[75vh]"
      
}

export const Mediumcard = (props: mediumcard)=>{
     return (
        <div className={`bg-gradient-to-br from-neutral-800 via-neutral-800 to-primary/50 text-white border border-neutral-700 rounded-xl shadow-lg flex flex-col p-6 gap-4 ${props.variant ? variants[props.variant] : variants.medium}`}>
         <div className="text-2xl font-bold tracking-tight">
            {props.heading}
         </div>
         
         <div className="flex items-center gap-3 ">
            {props.icon} 
            {props.content && <span className="text-zinc-300 font-medium">{props.content}</span>}
         </div>
        </div>
     );
}
