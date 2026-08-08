import { motion } from "framer-motion";

export function Base() {
  return (
    <div id="features" className="w-full bg-zinc-950 text-white py-24 md:py-32 px-6 md:px-16 lg:px-24 border-b border-zinc-900 relative">
      <div className="w-full min-h-[400px] flex items-center justify-start overflow-hidden">
        <div 
          className="flex flex-col items-start gap-4 md:gap-8 font-black uppercase tracking-tighter" 
          style={{ fontSize: 'clamp(4rem, 12vw, 12rem)', lineHeight: 1 }}
        >
          <motion.span 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-zinc-200"
          >
            Create.
          </motion.span>
          <motion.span 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-zinc-500"
          >
            Build.
          </motion.span>
          <motion.span 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-zinc-700"
          >
            Share.
          </motion.span>
        </div>
      </div>
    </div>
  );
}
