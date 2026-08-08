import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  Sparkles, 
  Target, 
  Hexagon, 
  Share2, 
  Copy, 
  Check, 
  Send, 
  Lock, 
  Zap, 
  Link as LinkIcon,
  ArrowRight
} from "lucide-react";
import { Brainlogo } from "../assets/brain";
import { ConnectionTree } from "./ConnectionTree";

export const Gridspancomponenet = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("brainly.app/brain/team-q3-2026");
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="rooms" className="w-full bg-zinc-950 text-white py-24 md:py-32 px-6 md:px-16 lg:px-24 border-b border-zinc-900 relative">
      <div className="max-w-7xl mx-auto flex flex-col gap-32 relative z-10">
        
        {/* SECTION 1: COLLABORATION / ROOMS (Image 2) */}
        <div>


          {/* Headline & Description */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end mb-16">
            <div className="lg:col-span-7">
              <h2 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-[1.05]">
                <span className="text-white block">Rooms keep your team</span>
                <span className="text-zinc-500 font-light block mt-1">in the same context.</span>
              </h2>
            </div>
            <div className="lg:col-span-5">
              <p className="text-zinc-400 text-base sm:text-lg font-light leading-relaxed">
                Create a room for any project, topic, or team. Drop content in, discuss it right there. No more <span className="text-zinc-200 italic">&ldquo;where did we save that link?&rdquo;</span>
              </p>
            </div>
          </div>

          {/* Large Interactive Chat Mockup Card (Image 2) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="w-full bg-zinc-900/60 backdrop-blur-2xl border border-white/10 rounded-3xl p-6 sm:p-10 md:p-12 relative overflow-hidden group hover:border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.5)] hover:shadow-[0_0_40px_rgba(255,255,255,0.06)] transition-all duration-500"
          >
            {/* Top Bar of Chat Card */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-8 border-b border-white/10">
              <div className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-white" />
                <span className="text-lg md:text-xl font-bold text-white tracking-tight font-mono">
                  # product-research
                </span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="flex -space-x-2 overflow-hidden">
                  <div className=" h-7 w-7 rounded-full ring-2 ring-zinc-900 bg-zinc-800 border border-zinc-700 text-[10px] font-mono font-bold flex items-center justify-center text-white">MR</div>
                  <div className=" h-7 w-7 rounded-full ring-2 ring-zinc-900 bg-zinc-800 border border-zinc-700 text-[10px] font-mono font-bold flex items-center justify-center text-white">SP</div>
                  <div className=" h-7 w-7 rounded-full ring-2 ring-zinc-900 bg-zinc-800 border border-zinc-700 text-[10px] font-mono font-bold flex items-center justify-center text-white">DK</div>
                </div>
                <span className="ml-2 px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] font-mono font-medium text-zinc-400">
                  +2
                </span>
              </div>
            </div>

            {/* Chat Messages Area */}
            <div className="flex flex-col gap-6 mb-8 max-w-4xl mx-auto">
              {/* Message 1 (Left Aligned) */}
              <div className="flex flex-col gap-1.5 items-start">
                <div className="flex items-center gap-2.5 px-1">
                  <span className="w-6 h-6 rounded-full bg-zinc-800 border border-zinc-700 text-[10px] font-mono font-bold flex items-center justify-center text-white">MR</span>
                  <span className="text-xs font-semibold text-zinc-300">Marcus R.</span>
                  <span className="text-[10px] font-mono text-zinc-600">2M AGO</span>
                </div>
                <div className="bg-zinc-900 border border-white/10 text-zinc-200 px-5 py-3.5 rounded-2xl rounded-tl-sm text-sm sm:text-base">
                  Just pinned the Q3 research thread — check it out
                </div>
              </div>

              {/* Message 2 (Right Aligned - Sarah P.) */}
              <div className="flex flex-col gap-1.5 items-end self-end">
                <div className="flex items-center gap-2.5 px-1">
                  <span className="text-[10px] font-mono text-zinc-500">1M AGO</span>
                  <span className="text-xs font-semibold text-zinc-300">Sarah P.</span>
                  <span className="w-6 h-6 rounded-full bg-zinc-800 border border-zinc-700 text-[10px] font-mono font-bold flex items-center justify-center text-white">SP</span>
                </div>
                <div className="bg-white text-zinc-950 font-semibold px-6 py-3.5 rounded-2xl rounded-tr-sm text-sm sm:text-base">
                  Saved! Adding it to the design room too
                </div>
              </div>

              {/* Message 3 (Left Aligned - Diego K.) */}
              <div className="flex flex-col gap-1.5 items-start">
                <div className="flex items-center gap-2.5 px-1">
                  <span className="w-6 h-6 rounded-full bg-zinc-800 border border-zinc-700 text-[10px] font-mono font-bold flex items-center justify-center text-white">DK</span>
                  <span className="text-xs font-semibold text-zinc-300">Diego K.</span>
                  <span className="text-[10px] font-mono text-zinc-400 font-semibold">NOW</span>
                </div>
                <div className="bg-zinc-900 border border-white/10 text-zinc-200 px-5 py-3.5 rounded-2xl rounded-tl-sm text-sm sm:text-base">
                  Can we share this brain with the client?
                </div>
              </div>
            </div>

            {/* Bottom Input Box */}
            <div className="max-w-4xl mx-auto">
              <div className="bg-zinc-950 border border-white/10 rounded-2xl p-2.5 pl-6 flex items-center justify-between">
                <input 
                  type="text" 
                  readOnly 
                  value="Message # product-research..." 
                  className="bg-transparent text-sm text-zinc-400 focus:outline-none w-full cursor-default select-none"
                />
                <button className="w-10 h-10 rounded-xl bg-white/10 hover:bg-white text-white hover:text-zinc-950 flex items-center justify-center transition-all shrink-0 cursor-pointer">
                  <Send className="w-4 h-4 ml-0.5" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* SECTION 2: SHARE YOUR BRAIN WITH ANYONE (Image 3) */}
        <div className="pt-8 border-t border-zinc-900">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: Headline & Subtext */}
            <div className="lg:col-span-5">
              <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
                Share your brain with anyone.
              </h2>
              <p className="text-zinc-400 text-base sm:text-lg font-light leading-relaxed">
                One link. Your collaborators get read or edit access to your entire brain — or just a room.
              </p>
            </div>

            {/* Right Column: Overlapping Cards Visualization */}
            <div className="lg:col-span-7 relative h-[400px] flex items-center justify-center group perspective-1000">
              
              {/* Left Card (Behind) */}
              <motion.div 
                initial={{ x: 0, y: 0, rotate: 0, scale: 0.9 }}
                whileInView={{ x: "-40%", y: "10%", rotate: -12, scale: 0.9 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, type: "spring" }}
                className="absolute w-64 h-80 rounded-3xl bg-zinc-900/80 backdrop-blur-md border border-white/10 shadow-2xl p-6 flex flex-col z-10 group-hover:-translate-x-[60%] group-hover:rotate-[-20deg] group-hover:scale-95 transition-all duration-500 ease-out"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center">
                    <img src="/google-calendar.svg" className="w-6 h-6 object-contain" alt="Calendar" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-sm">Calendar Sync</h4>
                    <p className="text-xs text-zinc-500 font-mono">AUTOMATED</p>
                  </div>
                </div>
                <div className="w-full h-32 rounded-xl bg-zinc-800/50 mt-auto border border-white/5" />
              </motion.div>

              {/* Right Card (Behind) */}
              <motion.div 
                initial={{ x: 0, y: 0, rotate: 0, scale: 0.9 }}
                whileInView={{ x: "40%", y: "10%", rotate: 12, scale: 0.9 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, type: "spring" }}
                className="absolute w-64 h-80 rounded-3xl bg-zinc-900/80 backdrop-blur-md border
                 border-white/10 shadow-2xl p-6 flex flex-col z-10 group-hover:translate-x-[60%] 
                 group-hover:rotate-[20deg] group-hover:scale-95 transition-all duration-500 ease-out"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center">
                    <img src="/gmail.svg" className="w-6 h-6 object-contain" alt="Gmail" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-sm">Email Fetch</h4>
                    <p className="text-xs text-zinc-500 font-mono">112 THREADS</p>
                  </div>
                </div>
                <div className="w-full h-32 rounded-xl bg-zinc-800/50 mt-auto border border-white/5" />
              </motion.div>

              {/* Center Card (Front) */}
              <motion.div 
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="absolute w-72 h-96 rounded-3xl bg-zinc-800/90 backdrop-blur-2xl border border-white/20 shadow-[0_30px_60px_rgba(0,0,0,0.6)] p-6 flex flex-col z-20 group-hover:-translate-y-4 group-hover:shadow-[0_40px_80px_rgba(255,255,255,0.05)] transition-all duration-500 ease-out"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shadow-lg">
                      <Brainlogo className="w-6 h-6 text-zinc-950" />
                    </div>
                    <div>
                      <h4 className="text-white font-extrabold text-base">Your Brain</h4>
                      <p className="text-xs text-zinc-400 font-mono">ALL INTEGRATIONS</p>
                    </div>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                    <Share2 className="w-4 h-4 text-white" />
                  </div>
                </div>
                
                <div className="flex-1 flex flex-col gap-3">
                  <div className="w-full h-16 rounded-xl bg-zinc-900/80 border border-white/5 flex items-center px-4 gap-3">
                    <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center"><img src="/youtube.svg" className="w-5 h-5 object-contain" alt="YouTube" /></div>
                    <div className="h-2 w-24 bg-zinc-700 rounded-full" />
                  </div>
                  <div className="w-full h-16 rounded-xl bg-zinc-900/80 border border-white/5 flex items-center px-4 gap-3">
                    <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center"><img src="/x.svg" className="w-4 h-4 object-contain" alt="X" /></div>
                    <div className="h-2 w-32 bg-zinc-700 rounded-full" />
                  </div>
                  <div className="w-full h-16 rounded-xl bg-zinc-900/80 border border-white/5 flex items-center px-4 gap-3">
                    <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center"><img src="/gemini-logo.svg" className="w-5 h-5 object-contain" alt="Gemini" /></div>
                    <div className="h-2 w-20 bg-zinc-700 rounded-full" />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

/* SECTION 3: CTA START FOR FREE (Image 4) */
export const CtaSection = () => {
  return (
    <section className="w-full bg-zinc-950 text-white py-28 md:py-36 px-6 md:px-16 lg:px-24 border-t border-zinc-900 relative text-center">
      <div className="max-w-4xl mx-auto relative z-10 flex flex-col items-center">
        {/* Top Accent Title */}
        <div className="flex items-center justify-center gap-4 mb-10">
          <div className="h-px w-12 sm:w-20 bg-zinc-800" />
          <span className="text-xs font-mono tracking-[0.25em] text-zinc-500 uppercase font-semibold">
            START FOR FREE
          </span>
          <div className="h-px w-12 sm:w-20 bg-zinc-800" />
        </div>

        {/* Big Impact Headline */}
        <h2 className="text-5xl sm:text-7xl md:text-8xl font-extrabold tracking-tight leading-[0.95] mb-8">
          <span className="text-white block">Your team&apos;s second</span>
          <span className="text-white block mt-1">brain</span>
          <span className="text-zinc-500 font-light block mt-2">starts right now.</span>
        </h2>

        {/* Subtext */}
        <p className="text-base sm:text-lg md:text-xl text-zinc-400 max-w-2xl font-light leading-relaxed mb-12">
          Join 12,400+ teams who stopped losing ideas in Slack, tabs, and email threads. Brainly is free for teams up to 5.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 w-full sm:w-auto mb-16">
          <Link to="/signup" className="w-full sm:w-auto">
            <motion.button 
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white text-zinc-950 font-bold text-base hover:bg-zinc-200 transition-all flex items-center justify-center gap-3 cursor-pointer group"
            >
              <span>Create your free brain &rarr;</span>
            </motion.button>
          </Link>

          <Link to="/signup" className="w-full sm:w-auto">
            <motion.button 
              whileHover={{ scale: 1.03, backgroundColor: "rgba(255,255,255,0.08)" }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white/5 border border-white/10 text-zinc-300 hover:text-white font-semibold text-base transition-all flex items-center justify-center cursor-pointer"
            >
              See how it works
            </motion.button>
          </Link>
        </div>

        {/* Caption */}
        <div className="text-[11px] font-mono tracking-[0.25em] text-zinc-600 uppercase font-semibold mb-20">
          NO CREDIT CARD REQUIRED · FREE FOREVER FOR TEAMS UNDER 5 · UPGRADE ANYTIME
        </div>

        {/* Bottom Feature Badges Bar - Pure White Icons */}
        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 md:gap-16 pt-12 border-t border-white/5 w-full">
          <div className="flex items-center gap-2.5 text-xs font-mono tracking-[0.15em] text-zinc-400 font-semibold">
            <Lock className="w-4 h-4 text-white" />
            <span>END-TO-END ENCRYPTED</span>
          </div>
          <div className="flex items-center gap-2.5 text-xs font-mono tracking-[0.15em] text-zinc-400 font-semibold">
            <Zap className="w-4 h-4 text-white" />
            <span>SAVE ANYTHING IN &lt; 5 SECONDS</span>
          </div>
          <div className="flex items-center gap-2.5 text-xs font-mono tracking-[0.15em] text-zinc-400 font-semibold">
            <LinkIcon className="w-4 h-4 text-white" />
            <span>SHARE WITH ONE LINK</span>
          </div>
        </div>
      </div>
    </section>
  );
};
export const Cta2Section = () => {
  return (
    <section className="w-full bg-zinc-950 text-white py-28 md:py-36 px-6 md:px-16 lg:px-24 border-t border-zinc-900 relative text-center">
      <div className="max-w-4xl mx-auto relative z-10 flex flex-col items-center">
        {/* Top Accent Title */}
        <div className="flex items-center justify-center gap-4 mb-10">
          <div className="h-px w-12 sm:w-20 bg-zinc-800" />
          <span className="text-xs font-mono tracking-[0.25em] text-zinc-500 uppercase font-semibold">
            START FOR FREE
          </span>
          <div className="h-px w-12 sm:w-20 bg-zinc-800" />
        </div>

        {/* Big Impact Headline */}
        <h2 className="text-5xl sm:text-7xl md:text-8xl font-extrabold tracking-tight leading-[0.95] mb-8">
          <span className="text-white block">Your team&apos;s second</span>
          <span className="text-white block mt-1">brain</span>
          <span className="text-zinc-500 font-light block mt-2">starts right now.</span>
        </h2>

        {/* Subtext */}
        <p className="text-base sm:text-lg md:text-xl text-zinc-400 max-w-2xl font-light leading-relaxed mb-12">
          Join 12,400+ teams who stopped losing ideas in Slack, tabs, and email threads. Brainly is free for teams up to 5.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 w-full sm:w-auto mb-16">
          <Link to="/signup" className="w-full sm:w-auto">
            <motion.button 
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white text-zinc-950 font-bold text-base hover:bg-zinc-200 transition-all flex items-center justify-center gap-3 cursor-pointer group"
            >
              <span>Create your free brain &rarr;</span>
            </motion.button>
          </Link>

          <Link to="/signup" className="w-full sm:w-auto">
            <motion.button 
              whileHover={{ scale: 1.03, backgroundColor: "rgba(255,255,255,0.08)" }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white/5 border border-white/10 text-zinc-300 hover:text-white font-semibold text-base transition-all flex items-center justify-center cursor-pointer"
            >
              See how it works
            </motion.button>
          </Link>
        </div>

        {/* Caption */}
        <div className="text-[11px] font-mono tracking-[0.25em] text-zinc-600 uppercase font-semibold mb-20">
          NO CREDIT CARD REQUIRED · FREE FOREVER FOR TEAMS UNDER 5 · UPGRADE ANYTIME
        </div>

        {/* Bottom Feature Badges Bar - Pure White Icons */}
        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 md:gap-16 pt-12 border-t border-white/5 w-full">
          <div className="flex items-center gap-2.5 text-xs font-mono tracking-[0.15em] text-zinc-400 font-semibold">
            <Lock className="w-4 h-4 text-white" />
            <span>END-TO-END ENCRYPTED</span>
          </div>
          <div className="flex items-center gap-2.5 text-xs font-mono tracking-[0.15em] text-zinc-400 font-semibold">
            <Zap className="w-4 h-4 text-white" />
            <span>SAVE ANYTHING IN &lt; 5 SECONDS</span>
          </div>
          <div className="flex items-center gap-2.5 text-xs font-mono tracking-[0.15em] text-zinc-400 font-semibold">
            <LinkIcon className="w-4 h-4 text-white" />
            <span>SHARE WITH ONE LINK</span>
          </div>
        </div>
      </div>
    </section>
  );
};