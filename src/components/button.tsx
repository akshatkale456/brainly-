import{motion} from 'motion/react'
import type { ReactElement } from 'react'
interface button{
     text?: string,
     onClick?:()=>void
     icon?:ReactElement,
     variant :"big"|"small"}
const variant = {
big: " pl-2 pr-2  pt-2 pb-2 ",
small : " pl-2 pr-2  pt-1 pb-1 "
}

export function Button(prop:button){
     return<div>
        <motion.button  initial={{ backgroundColor:"rgba(255, 255, 255, 0.6)",
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)"
        }} whileHover={{backgroundColor:"white",
            boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)", scale:1.02,y:-2
        }} transition={{ type:"spring",duration:0.5,ease:"easeIn",stiffness:300,damping:15}} className= {`flex shadow-white cursor-cell${variant[prop.variant]}  text-black font-sans-serif font-bold text-md  pl-2 pr-2  pt-2 pb-2 rounded-4xl `}  >
            <div>
                {prop.icon}

            </div>
            <div className='pl-1 '>
                {prop.text}
                 
            </div>

        </motion.button>
        
     </div>
}