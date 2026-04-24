import { motion } from "framer-motion"
import type { Variants } from "framer-motion";
export const Loading = () => {
  const parent = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const child:Variants = {
    hidden: { scaleY: 0.3, opacity: 0.3 },
    visible: {
      scaleY: [0.3, 1, 0.3], 
      opacity: [0.3, 1, 0.3],
      transition: {
        duration: 1, 
        repeat: Infinity, 
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="fixed inset-0 bg-neutral-main/80 backdrop-blur-xl flex flex-col justify-center items-center z-[100]">
      <motion.div 
        variants={parent} 
        initial="hidden" 
        animate="visible" 
        className="flex items-center gap-2 md:gap-3"
      >
        {[...Array(5)].map((_, i) => (
          <motion.div 
            key={i} 
            variants={child} 
            className="w-1.5 sm:w-2 md:w-2.5 h-12 sm:h-16 md:h-20 bg-gradient-to-t from-zinc-400 to-white rounded-full shadow-[0_0_15px_rgba(255,255,255,0.4)] origin-center"
          ></motion.div>
        ))}
      </motion.div>
      
      <motion.div 
        animate={{ opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        className="mt-10 text-zinc-300 text-sm md:text-base font-bold tracking-[0.2em] uppercase"
      >
        Loading...
      </motion.div>
    </div>
  )
}
