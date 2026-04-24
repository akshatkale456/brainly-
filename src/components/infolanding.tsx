import { useState } from "react"
import { motion } from "framer-motion"
type state = null|number

export  const Gridspancomponenet = ()=>{
    const [hoverd,sethovered]= useState<state>(null)
    const gridcolumns = 
        hoverd === 1 || hoverd === 3 ? "2fr 1fr" :
        hoverd === 2 || hoverd === 4 ? "1fr 2fr" :
        "1fr 1fr";

    const gridrows = 
        hoverd === 1 || hoverd === 2 ? "2fr 1fr" :
        hoverd === 3 || hoverd === 4 ? "1fr 2fr" :
        "1fr 1fr";

    return (
        <motion.div 
            className="grid w-full min-h-[80vh] h-full bg-zinc-800 gap-6 p-10 md:p-20"
            animate={{ gridTemplateColumns: gridcolumns, gridTemplateRows: gridrows }}
            transition={{ type: "spring", stiffness: 250, damping: 25 }}
        >
            <motion.div 
                onHoverStart={() => sethovered(1)}
                onHoverEnd={() => sethovered(null)}
                className="relative overflow-hidden bg-gradient-to-br from-black via-zinc-900 to-zinc-950 border border-zinc-800/80 hover:border-zinc-700/80 shadow-xl rounded-[12px] flex items-center justify-center text-zinc-400 hover:text-zinc-200 text-2xl font-medium cursor-pointer transition-all duration-500"
            >
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
                <span className="relative z-10">hello</span>
            </motion.div>
            <motion.div 
                onHoverStart={() => sethovered(2)}
                onHoverEnd={() => sethovered(null)}
                className="relative overflow-hidden bg-gradient-to-br from-black via-zinc-900 to-zinc-950 border border-zinc-800/80 hover:border-zinc-700/80 shadow-xl rounded-[12px] flex items-center justify-center text-zinc-400 hover:text-zinc-200 text-2xl font-medium cursor-pointer transition-all duration-500"
            >
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
                <span className="relative z-10">hii</span>
            </motion.div>
            <motion.div 
                onHoverStart={() => sethovered(3)}
                onHoverEnd={() => sethovered(null)}
                className="relative overflow-hidden bg-gradient-to-br from-black via-zinc-900 to-zinc-950 border border-zinc-800/80 hover:border-zinc-700/80 shadow-xl rounded-[12px] flex items-center justify-center text-zinc-400 hover:text-zinc-200 text-2xl font-medium cursor-pointer transition-all duration-500"
            >
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
                <span className="relative z-10">hey</span>
            </motion.div>
            <motion.div 
                onHoverStart={() => sethovered(4)}
                onHoverEnd={() => sethovered(null)}
                className="relative overflow-hidden bg-gradient-to-br from-black via-zinc-900 to-zinc-950 border border-zinc-800/80 hover:border-zinc-700/80 shadow-xl rounded-[12px] flex items-center justify-center text-zinc-400 hover:text-zinc-200 text-2xl font-medium cursor-pointer transition-all duration-500"
            >
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
                <span className="relative z-10">there</span>
            </motion.div>
        </motion.div>
    );
}