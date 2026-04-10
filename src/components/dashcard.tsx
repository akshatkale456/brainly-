import type { mediumcard } from "../types/type"

const variants={
   large :"w-100 h-60",
   small:"w-50 h-50",
   medium:"w-75 h-75"
}

export const Mediumcard = (props: mediumcard)=>{
     return (
        <div className={`bg-gradient-to-br from-neutral-800 via-neutral-800 to-primary/50 text-white border border-neutral-700 rounded-xl flex items-center justify-center shadow-lg ${props.variant ? variants[props.variant] : variants.medium}`}>
         <div className="flex flex-col items-center justify-center gap-2">
            <div>
               {props.icon}
            </div>
            <p className="text-sm font-medium">{props.heading}</p>
         </div>
        </div>
     );
}
