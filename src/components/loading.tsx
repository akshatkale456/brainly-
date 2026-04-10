import { motion } from "framer-motion"

export const Loading = () => {
  const parent = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5
      }
    }
  }

  const child = {
    hidden: { y: 0 },
    visible: {
      y: [-15, 15, -15], // Moves up 15px, down 15px, then back
      transition: {
        duration: 0.8, // How fast one full bounce takes
        repeat: Infinity, // Keep l
        ease: "easeInOut" as const,
      },
    },
  };

  return (<div >
    <div className="fixed inset-0 bg-neutral-main flex justify-center items-center z-100">
      <motion.div variants={parent} initial="hidden" animate="visible" className="flex gap-1 sm:gap-1.5 md:gap-2">
        <motion.div variants={child} className="h-12 w-1 sm:w-1.5 md:w-2 sm:h-16 md:h-20 bg-white rounded-xl mt-3 sm:mt-4 md:mt-6 shadow-2xl shadow-white"></motion.div>
        <motion.div variants={child} className="h-12 w-1 sm:w-1.5 md:w-2 sm:h-16 md:h-20 bg-white rounded-xl shadow-2xl shadow-white"></motion.div>
        <motion.div variants={child} className="h-12 w-1 sm:w-1.5 md:w-2 sm:h-16 md:h-20 bg-white rounded-xl mt-3 sm:mt-4 md:mt-6 shadow-2xl shadow-white"></motion.div>
        <motion.div variants={child} className="h-12 w-1 sm:w-1.5 md:w-2 sm:h-16 md:h-20 bg-white rounded-xl shadow-2xl shadow-white"></motion.div>
        <motion.div variants={child} className="h-12 w-1 sm:w-1.5 md:w-2 sm:h-16 md:h-20 bg-white rounded-xl mt-2 sm:mt-3 md:mt-4 shadow-2xl shadow-white"></motion.div>
        <motion.div variants={child} className="h-12 w-1 sm:w-1.5 md:w-2 sm:h-16 md:h-20 bg-white rounded-xl shadow-2xl shadow-white"></motion.div>
      </motion.div>
      
    </div>
    <div className="z-150 absolute text-gray-300 text-xl sm:text-2xl md:text-3xl top-1/2 left-1/2 -translate-x-1/2 mt-16 sm:mt-20 md:mt-28" >
      Loading...
    </div>
    </div>
  )
}
