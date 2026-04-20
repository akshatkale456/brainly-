import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react"; 
import { HorizontalCard } from "./horizontalcard";

 export const PinSection = () => {
  const containerRef = useRef(null);
  
  // 1. Track scroll progress of the container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // 2. Map that progress to an animation (e.g., scale or opacity)
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.5]);

  return (
    // The container must be taller than the viewport to create scroll room
    <div ref={containerRef} className="h-[300vh] bg-zinc-900 rounded-t-xl ml-2 mr-2">
      <div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden">
        <div className="text-5xl  text-white pr-100">
        Architect Your Intellect.
        <div className="text-xl  pt-5  text-white">
Stop drowning in tabs and half-baked notes. 
Build a digital <br/> ecosystem that  organizes your chaos and scales with your ambition.
        </div>
        
        </div>
        
        <motion.div 
          style={{ scale }} 
          className="w-64 h-64 bg-blue-rounded-2xl"
        >
          <h2 className="text-white text-center mt-24"><HorizontalCard text="heloo bujoa hlkhlkf hlij ifjlkdjlij fo"/></h2>
        </motion.div>
      </div>
    </div>
  );
};