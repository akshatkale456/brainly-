import{motion} from 'motion/react'
import type { Button } from '../types/type'

const variant = {
big: " pl-2 pr-2  pt-2 pb-2 ",
small : " pl-2 pr-2  pt-1 pb-1 "
}


export function Button(prop:Button){
    
     return<div>
        <motion.button  initial={{ backgroundColor:"var(--color-primary)",
            boxShadow: "0px 4px 6px rgba(168, 85, 247, 0.2)"
        }} whileHover={{backgroundColor:"var(--color-secondary)",
            boxShadow: "0px 10px 20px rgba(168, 85, 247, 0.4)", scale:1.02,y:-2
        }} transition={{ type:"spring",duration:0.5,ease:"easeIn",stiffness:300,damping:15}} className= {`flex shadow-primary cursor-pointer ${variant[prop.variant]} text-white font-bold text-md pl-2 pr-2 pt-2 pb-2 rounded-4xl`}  >
            <div>
                {prop.icon}

            </div>
            <div className='pl-1 '>
                {prop.text}
                 
            </div>

        </motion.button>
        
     </div>
}
