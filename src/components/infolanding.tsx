import { useState } from "react"
import { motion } from "framer-motion"
type state = null|"right"|"left"

export  const Gridspancomponenet = ()=>{
    const [hoverd,sethovered]= useState<state>(null)
    const gridcolumns = 
    hoverd==="right"?"2fr 1fr":
    hoverd === "left"?"1fr 2fr":
    "1fr 1fr"

    return<motion.div className="grid w-full h-full bg-zinc-800 gap-[15] p-80 "
    animate ={{gridTemplateColumns:gridcolumns}}
    transition={{ type: "spring", stiffness: 250, damping: 25 }}>
        <motion.div 
        onHoverStart={() => sethovered("right")}
                onHoverEnd={() => sethovered(null)}
                className="bg-[#00EEFF] rounded-[12px] flex items-center justify-center text-black font-bold overflow-hidden cursor-pointer">
hello 
        </motion.div>
        <motion.div 
        onHoverStart={() => sethovered("left")}
                onHoverEnd={() => sethovered(null)}
                className="bg-[#00EEFF] rounded-[12px] flex items-center justify-center text-black font-bold overflow-hidden cursor-pointer">
hii 
        </motion.div>

    </motion.div>
} 