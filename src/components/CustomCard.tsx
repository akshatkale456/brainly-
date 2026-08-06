import React from "react";
import { motion, Variants } from "framer-motion";

interface CustomCardProps {
  children: React.ReactNode;
  className?: string;
  variants?: Variants | any;
}

export const CustomCard = ({ children, className = "", variants }: CustomCardProps) => {
  return (
    <div style={{ perspective: "1000px" }} className="w-full h-full">
      <motion.div
        variants={variants}
        whileHover={{ scale: 1.02, rotateX: 4, rotateY: -4 }}
        transition={{ type: "spring", stiffness: 400, damping: 30 }}
        className={`group relative flex flex-col justify-between rounded-2xl bg-zinc-900/80 border border-white/10 shadow-[0_20px_40px_rgba(0,0,0,0.5)] hover:shadow-[10px_30px_60px_rgba(255,255,255,0.08)] hover:border-white/30 backdrop-blur-md transition-all duration-300 h-full ${className}`}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Shine/Glow Effect */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
        
        {/* Inner Content with 3D Pop */}
        <div
          style={{ transform: "translateZ(20px)" }}
          className="relative z-10 w-full h-full flex flex-col transition-transform duration-300"
        >
          {children}
        </div>
      </motion.div>
    </div>
  );
};
