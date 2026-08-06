import { motion } from "framer-motion";
import {  Bot, Calendar, Mail } from "lucide-react";

export function ConnectionTree() {
  return (
    <div className="relative w-full h-48 md:h-64 my-16">
      {/* SVG Lines */}
      <svg 
        className="absolute inset-0 w-full h-full pointer-events-none" 
        viewBox="0 0 100 100" 
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="lineGradient" x1="0" y1="0" x2="0" y2="100">
            <stop offset="0%" stopColor="rgba(255,255,255,0.8)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0)" />
          </linearGradient>
        </defs>
        
        <path d="M 50 0 Q 50 30 15 70" stroke="url(#lineGradient)" strokeWidth="2" vectorEffect="non-scaling-stroke" fill="none" />
        <path d="M 50 0 Q 50 40 32.5 85" stroke="url(#lineGradient)" strokeWidth="2" vectorEffect="non-scaling-stroke" fill="none" />
        <path d="M 50 0 L 50 90" stroke="url(#lineGradient)" strokeWidth="2" vectorEffect="non-scaling-stroke" fill="none" />
        <path d="M 50 0 Q 50 40 67.5 85" stroke="url(#lineGradient)" strokeWidth="2" vectorEffect="non-scaling-stroke" fill="none" />
        <path d="M 50 0 Q 50 30 85 70" stroke="url(#lineGradient)" strokeWidth="2" vectorEffect="non-scaling-stroke" fill="none" />
      </svg>
      
      {/* Starting point dot */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full shadow-[0_0_20px_rgba(255,255,255,1)]" />

      {/* 3D Icons */}
      {/* <Icon3D icon={<Youtube className="w-8 h-8 text-red-500" />} left="15%" top="70%" delay={0} />
      <Icon3D icon={<Twitter className="w-8 h-8 text-blue-400" />} left="32.5%" top="85%" delay={0.2} /> */}
      <Icon3D icon={<Bot className="w-8 h-8 text-purple-400" />} left="50%" top="90%" delay={0.4} />
      <Icon3D icon={<Calendar className="w-8 h-8 text-green-400" />} left="67.5%" top="85%" delay={0.6} />
      <Icon3D icon={<Mail className="w-8 h-8 text-red-400" />} left="85%" top="70%" delay={0.8} />
    </div>
  );
}

function Icon3D({ icon, left, top, delay }: { icon: React.ReactNode, left: string, top: string, delay: number }) {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: "-50%", opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay, type: "spring", stiffness: 200, damping: 20 }}
      whileHover={{ scale: 1.15, rotateX: 15, rotateY: 15 }}
      className="absolute flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-zinc-900 border border-white/20 shadow-[0_15px_30px_rgba(0,0,0,0.8),inset_0_2px_10px_rgba(255,255,255,0.2)] backdrop-blur-md cursor-pointer"
      style={{ 
        left, 
        top, 
        translateX: "-50%", 
        translateY: "-50%", 
        perspective: "500px", 
        transformStyle: "preserve-3d" 
      }}
    >
      <div style={{ transform: "translateZ(20px)" }}>
        {icon}
      </div>
    </motion.div>
  );
}
