import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react"; 
import { HorizontalCard } from "./horizontalcard";
import { Cardanimatelines } from "./cardline";

export const PinSection = () => {
  const containerRef = useRef(null);
  
  // Track scroll progress of the container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Map progress to animation for each card
  const card1X = useTransform(scrollYProgress, [0, 0.3], [1000, 0]);
  const card1Y = useTransform(scrollYProgress, [0, 0.3], [100, 0]);
  const card1Opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);

  const card2x = useTransform(scrollYProgress, [0.33, 0.66], [1000, 0]);
  const card2y = useTransform(scrollYProgress, [0.33, 0.66], [100, 0]);
  const card2opacity = useTransform(scrollYProgress, [0.33, 0.45], [0, 1]);

  const card3x = useTransform(scrollYProgress, [0.66, 0.9], [1000, 0]);
  const card3y = useTransform(scrollYProgress, [0.66, 0.9], [100, 0]);
  const card3opacity = useTransform(scrollYProgress, [0.66, 0.9], [0, 1]);

  return (
    // Container taller than viewport for scroll room
    <div ref={containerRef} className="h-[300vh] bg-zinc-950 rounded-t-[2.5rem] mt-24">
      <div className="sticky top-0 flex h-screen px-6 md:px-16 overflow-hidden items-center max-w-7xl mx-auto">
        
        {/* Left text portion */}
        <div className="flex-1 text-5xl text-white font-medium z-10 w-[40%] mr-8">
          Architect Your Intellect.
          <div className="text-xl pt-6 text-zinc-400 font-light leading-relaxed">
            Stop drowning in tabs and half-baked notes. <br className="hidden md:block" />
            Build a digital ecosystem that organizes your chaos and scales with your ambition.
          </div>
        </div>
        
        {/* The Connector Timeline component */}
        <div className="w-16 md:w-32 flex justify-center h-[80vh]">
          <Cardanimatelines />
        </div>

        {/* Right cards portion mapped identically to Cardanimatelines layout */}
        <div className="flex flex-col gap-16 py-12 justify-center h-[80vh] w-[50%] z-20">
          <motion.div 
            style={{ x: card1X, y: card1Y, opacity: card1Opacity }} 
            className="flex h-32 items-center"
          >
            <HorizontalCard text="Save hours by cutting out redundant tasks and workflows." />
          </motion.div>
          
          <motion.div 
            style={{ x: card2x, y: card2y, opacity: card2opacity }} 
            className="flex h-32 items-center ml-12"
          >
            <HorizontalCard text="Organize your thoughts into meaningful, actionable concepts." />
          </motion.div>
          
          <motion.div 
            style={{ x: card3x, y: card3y, opacity: card3opacity }} 
            className="flex h-32 items-center ml-24"
          >
            <HorizontalCard text="Scale your ambition without losing focus on what matters." />
          </motion.div>
        </div>

      </div>
    </div>
  );
};