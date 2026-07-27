import { motion } from "framer-motion";
import { Spinner } from "./ui/spinner";

export const Loading = () => {
  return (
    <div className="fixed inset-0 bg-zinc-950/90 backdrop-blur-2xl flex flex-col justify-center items-center z-[100]">
      {/* Centered minimalist loading box */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="bg-zinc-900/80 border border-white/10 px-8 py-7 rounded-2xl shadow-2xl flex flex-col items-center gap-4"
      >
        <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white shadow-inner">
          <Spinner className="w-6 h-6 text-white" />
        </div>
        
        <motion.div 
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="text-zinc-300 text-sm md:text-base font-mono tracking-[0.2em] lowercase font-semibold"
        >
          ...loading
        </motion.div>
      </motion.div>
    </div>
  );
};
