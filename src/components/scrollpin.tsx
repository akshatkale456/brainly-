import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react"; 
import { HorizontalCard } from "./horizontalcard";
import { Cardanimatelines } from "./cardline";
import { Zap, Layers, Rocket } from "lucide-react";

export const PinSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
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
    <section id="how-it-works" ref={containerRef} className="h-[300vh] bg-zinc-950 rounded-t-[3rem] mt-16 border-t border-white/10 relative">
      <div className="sticky top-0 flex h-screen px-6 md:px-16 overflow-hidden items-center max-w-7xl mx-auto">
        
        {/* Left text portion */}
        <div className="flex-1 text-4xl sm:text-5xl md:text-6xl text-white font-extrabold tracking-tight z-10 w-[40%] mr-8">
          <span>Architect Your Intellect.</span>
          <div className="text-base sm:text-lg md:text-xl pt-6 text-zinc-400 font-light leading-relaxed max-w-lg">
            Stop drowning in tabs and half-baked notes. Build a digital ecosystem that organizes your chaos and scales with your team&apos;s ambition.
          </div>
        </div>
        
        {/* The Connector Timeline component */}
        <div className="hidden lg:flex w-16 md:w-32 justify-center h-[80vh]">
          <Cardanimatelines />
        </div>

        {/* Right cards portion mapped identically to Cardanimatelines layout */}
        <div className="flex flex-col gap-12 sm:gap-16 py-12 justify-center h-[80vh] w-full lg:w-[50%] z-20">
          <motion.div 
            style={{ x: card1X, y: card1Y, opacity: card1Opacity }} 
            className="flex min-h-32 items-center"
          >
            <HorizontalCard 
              icon={<Zap className="w-7 h-7 text-white" />}
              tag="AUTOMATION"
              title="Instant Workflow Capture"
              text="Save hours by cutting out redundant tasks and tab-switching. One-click bookmarking preserves full context, timestamps, and metadata." 
            />
          </motion.div>
          
          <motion.div 
            style={{ x: card2x, y: card2y, opacity: card2opacity }} 
            className="flex min-h-32 items-center lg:ml-8"
          >
            <HorizontalCard 
              icon={<Layers className="w-7 h-7 text-white" />}
              tag="ORGANIZATION"
              title="Structured Team Concepts"
              text="Organize your thoughts into meaningful, actionable rooms. Group research, videos, and tweets so your team stays on the same wavelength." 
            />
          </motion.div>
          
          <motion.div 
            style={{ x: card3x, y: card3y, opacity: card3opacity }} 
            className="flex min-h-32 items-center lg:ml-16"
          >
            <HorizontalCard 
              icon={<Rocket className="w-7 h-7 text-white" />}
              tag="EXECUTION"
              title="Scalable Shared Focus"
              text="Scale your project ambition without losing sight of execution. Transform captured knowledge directly into actionable shared todos." 
            />
          </motion.div>
        </div>

      </div>
    </section>
  );
};