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
          {/* Section Header Tag */}
          <div className="flex items-center gap-3 mb-8">
            <span className="text-[11px] font-mono tracking-[0.25em] text-zinc-500 uppercase font-semibold">
              02 / COLLABORATION
            </span>
            <div className="h-px w-12 bg-zinc-800" />
          </div>

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
            className="w-full bg-zinc-900/50 border border-white/10 rounded-3xl p-6 sm:p-10 md:p-12 relative overflow-hidden group hover:border-white/20 transition-all duration-300"
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

            {/* Right Column: 3 List Cards & Copy Link Box */}
            <div className="lg:col-span-7 flex flex-col gap-4">
              {/* Card 1: Product Research */}
              <motion.div 
                whileHover={{ scale: 1.01, x: 4 }}
                className="group flex items-center justify-between p-5 rounded-2xl bg-zinc-900/50 border border-white/10 hover:bg-zinc-900 hover:border-white/20 transition-all duration-300 cursor-pointer"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white group-hover:bg-white/10 transition-colors">
                    <Sparkles className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white transition-colors">Product Research</h4>
                    <span className="text-[11px] font-mono tracking-[0.15em] text-zinc-500 uppercase font-semibold">47 ITEMS · 4 MEMBERS</span>
                  </div>
                </div>
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-zinc-400 group-hover:text-white group-hover:bg-white/10 transition-colors">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </motion.div>

              {/* Card 2: Design Inspiration */}
              <motion.div 
                whileHover={{ scale: 1.01, x: 4 }}
                className="group flex items-center justify-between p-5 rounded-2xl bg-zinc-900/50 border border-white/10 hover:bg-zinc-900 hover:border-white/20 transition-all duration-300 cursor-pointer"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white group-hover:bg-white/10 transition-colors">
                    <Target className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white transition-colors">Design Inspiration</h4>
                    <span className="text-[11px] font-mono tracking-[0.15em] text-zinc-500 uppercase font-semibold">112 ITEMS · 6 MEMBERS</span>
                  </div>
                </div>
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-zinc-400 group-hover:text-white group-hover:bg-white/10 transition-colors">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </motion.div>

              {/* Card 3: Dev Resources */}
              <motion.div 
                whileHover={{ scale: 1.01, x: 4 }}
                className="group flex items-center justify-between p-5 rounded-2xl bg-zinc-900/50 border border-white/10 hover:bg-zinc-900 hover:border-white/20 transition-all duration-300 cursor-pointer"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white group-hover:bg-white/10 transition-colors">
                    <Hexagon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white transition-colors">Dev Resources</h4>
                    <span className="text-[11px] font-mono tracking-[0.15em] text-zinc-500 uppercase font-semibold">89 ITEMS · 3 MEMBERS</span>
                  </div>
                </div>
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-zinc-400 group-hover:text-white group-hover:bg-white/10 transition-colors">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </motion.div>

              {/* Share Brain Link Copy Box */}
              <div className="mt-4 p-6 rounded-2xl bg-zinc-900/50 border border-white/10 flex flex-col gap-3">
                <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 uppercase tracking-wider font-semibold">
                  <Share2 className="w-3.5 h-3.5 text-white" />
                  <span>Share brain</span>
                </div>
                <div className="bg-zinc-950 border border-white/10 rounded-xl p-3 pl-5 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                  <span className="font-mono text-sm text-zinc-300 truncate select-all">
                    brainly.app/brain/team-q3-2026
                  </span>
                  <motion.button 
                    whileTap={{ scale: 0.96 }}
                    onClick={handleCopy}
                    className="bg-zinc-800 hover:bg-zinc-700 text-white font-semibold px-5 py-2.5 rounded-lg border border-white/10 transition-all flex items-center justify-center gap-2 cursor-pointer text-sm shrink-0"
                  >
                    {copied ? (
                      <>
                        <Check className="w-4 h-4 text-white" />
                        <span className="text-white">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4 text-zinc-400" />
                        <span>Copy</span>
                      </>
                    )}
                  </motion.button>
                </div>
              </div>
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