import { motion } from "framer-motion"

export const Loading = () => {
  const parent = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.7
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

  return (
    <div className="h-screen bg-black w-screen flex justify-center items-center">
      <motion.div variants={parent} initial="hidden" animate="visible" className="flex gap-2">
        <motion.div variants={child} className="h-20 w-2 bg-white rounded-xl mt-6 shadow-2xl shadow-white"></motion.div>
        <motion.div variants={child} className="h-20 w-2 bg-white rounded-xl shadow-2xl shadow-white"></motion.div>
        <motion.div variants={child} className="h-20 w-2 bg-white rounded-xl mt-6 shadow-2xl shadow-white"></motion.div>
        <motion.div variants={child} className="h-20 w-2 bg-white rounded-xl shadow-2xl shadow-white"></motion.div>
        <motion.div variants={child} className="h-20 w-2 bg-white rounded-xl mt-4 shadow-2xl shadow-white"></motion.div>
        <motion.div variants={child} className="h-20 w-2 bg-white rounded-xl shadow-2xl shadow-white"></motion.div>
      </motion.div>
    </div>
  )
}
