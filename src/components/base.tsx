import { motion } from "framer-motion";
import { 
  Play, 
  MessageSquare, 
  Pin as PushPinIcon, 
  CheckCircle, 
  Clock,
  Check,
  Circle,
  Send
} from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    }
  }
};

const cardVariants: any = {
  hidden: { opacity: 0, y: 25 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  },
};

export function Base() {
  return (
    <section id="features" className="w-full bg-zinc-950 text-white py-24 md:py-32 px-6 md:px-16 lg:px-24 border-b border-zinc-900 relative">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Headline */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16 md:mb-20 max-w-4xl"
        >
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-[1.05]">
            <span className="text-white block">Everything your team</span>
            <span className="text-zinc-500 font-light block mt-1">thinks about — captured.</span>
          </h2>
        </motion.div>

        {/* Features Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
        >
          {/* Card 1: YouTube Videos */}
          <motion.div 
            variants={cardVariants}
            className="group relative flex flex-col justify-between rounded-2xl bg-zinc-900/50 border border-white/10 p-7
             md:p-8 hover:bg-zinc-900 hover:border-white/20 transition-all duration-300"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-11 h-11 rounded-xl bg-white/5 border
                 border-white/10 flex items-center justify-center text-white group-hover:bg-white/10 transition-colors">
                  <Play className="w-5 h-5 fill-white text-white" />
                </div>
                <span className="text-[11px] font-mono tracking-[0.2em] text-zinc-500 uppercase font-semibold">
                  VIDEO
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">
                YouTube Videos
              </h3>
              <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-light">
                Paste a link. Brainly saves the thumbnail, title, and timestamp. Watch later, together.
              </p>
            </div>

            {/* Mock UI Component at bottom */}
            <div className="mt-8 pt-4 border-t border-white/5">
              <div className="bg-zinc-950 border border-white/10 rounded-xl p-3.5 flex items-center gap-3.5">
                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                  <Play className="w-3.5 h-3.5 fill-white text-white ml-0.5" />
                </div>
                <div className="flex-1">
                  <div className="w-full h-1.5 bg-zinc-800 rounded-full overflow-hidden">
                    <div className="w-2/5 h-full bg-white rounded-full" />
                  </div>
                </div>
                <div className="flex items-center gap-1.5 font-mono text-xs text-zinc-400">
                  <Clock className="w-3 h-3 text-zinc-500" />
                  <span>2:14</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Twitter Posts */}
          <motion.div 
            variants={cardVariants}
            className="group relative flex flex-col justify-between rounded-2xl bg-zinc-900/50 border border-white/10 p-7 md:p-8 hover:bg-zinc-900 hover:border-white/20 transition-all duration-300"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white group-hover:bg-white/10 transition-colors">
                  <svg className="w-5 h-5 fill-current text-white" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                </div>
                <span className="text-[11px] font-mono tracking-[0.2em] text-zinc-500 uppercase font-semibold">
                  POST
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">
                Twitter Posts
              </h3>
              <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-light">
                Save threads and tweets before they vanish. Full text preserved, always searchable.
              </p>
            </div>

            {/* Mock UI Component at bottom */}
            <div className="mt-8 pt-4 border-t border-white/5">
              <div className="bg-zinc-950 border border-white/10 rounded-xl p-3.5 flex flex-col gap-2.5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center text-[10px] font-bold text-white font-mono">
                      X
                    </div>
                    <span className="text-xs font-medium text-zinc-300 font-mono">@alex_dev</span>
                  </div>
                  <span className="text-[10px] font-mono text-zinc-600">Saved</span>
                </div>
                <p className="text-xs text-zinc-400 line-clamp-2 leading-snug">
                  Here&apos;s why second brains for teams are revolutionizing product research 🧵...
                </p>
              </div>
            </div>
          </motion.div>

          {/* Card 3: Live Pins */}
          <motion.div 
            variants={cardVariants}
            className="group relative flex flex-col justify-between rounded-2xl bg-zinc-900/50 border border-white/10 p-7 md:p-8 hover:bg-zinc-900 hover:border-white/20 transition-all duration-300"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white group-hover:bg-white/10 transition-colors">
                  <PushPinIcon className="w-5 h-5 text-white" />
                </div>
                <span className="text-[11px] font-mono tracking-[0.2em] text-zinc-500 uppercase font-semibold">
                  LINK
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">
                Live Pins
              </h3>
              <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-light">
                Pin any URL. Brainly fetches a live preview so your team sees context, not just a link.
              </p>
            </div>

            {/* Mock UI Component at bottom: 3 empty boxes exactly as in Image 1 */}
            <div className="mt-8 pt-4 border-t border-white/5">
              <div className="grid grid-cols-3 gap-2.5">
                <div className="bg-zinc-950 border border-white/10 rounded-xl h-14" />
                <div className="bg-zinc-950 border border-white/10 rounded-xl h-14" />
                <div className="bg-zinc-950 border border-white/10 rounded-xl h-14" />
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Row of 2 Long Cards */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mt-6 lg:mt-8"
        >
          {/* Long Card 4: Shared Todos */}
          <motion.div 
            variants={cardVariants}
            className="group relative flex flex-col justify-between rounded-2xl bg-zinc-900/50 border border-white/10 p-7 md:p-8 hover:bg-zinc-900 hover:border-white/20 transition-all duration-300"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white group-hover:bg-white/10 transition-colors">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <span className="text-[11px] font-mono tracking-[0.2em] text-zinc-500 uppercase font-semibold">
                  TASK
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">
                Shared Todos
              </h3>
              <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-light mb-6">
                Action items that live next to your content — not buried in a separate app. Assign actionable tasks directly from pinned research, videos, or design threads, keeping execution seamlessly tied to context.
              </p>
            </div>

            {/* Mock UI Component at bottom: Monochrome Todo checklist */}
            <div className="mt-auto pt-5 border-t border-white/5 flex flex-col gap-3">
              <div className="bg-zinc-950 border border-white/10 rounded-xl p-3.5 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-md bg-white/10 border border-white/20 flex items-center justify-center text-white shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-xs text-zinc-500 line-through font-medium">Finalize Q3 design system specs</span>
                </div>
                <span className="text-[9px] font-mono uppercase px-2 py-0.5 rounded bg-zinc-800 text-zinc-400 border border-zinc-700 font-bold shrink-0">
                  HIGH
                </span>
              </div>

              <div className="bg-zinc-950 border border-white/10 rounded-xl p-3.5 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-md bg-white/5 border border-white/20 flex items-center justify-center text-zinc-400 shrink-0">
                    <Circle className="w-3 h-3 text-transparent" />
                  </div>
                  <span className="text-xs text-zinc-200 font-medium">Integrate live pin preview API</span>
                </div>
                <span className="text-[9px] font-mono uppercase px-2 py-0.5 rounded bg-zinc-800 text-zinc-400 border border-zinc-700 font-bold shrink-0">
                  MEDIUM
                </span>
              </div>
            </div>
          </motion.div>

          {/* Long Card 5: Room-Based Chat */}
          <motion.div 
            variants={cardVariants}
            className="group relative flex flex-col justify-between rounded-2xl bg-zinc-900/50 border border-white/10 p-7 md:p-8 hover:bg-zinc-900 hover:border-white/20 transition-all duration-300"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white group-hover:bg-white/10 transition-colors">
                  <MessageSquare className="w-5 h-5 text-white" />
                </div>
                <span className="text-[11px] font-mono tracking-[0.2em] text-zinc-500 uppercase font-semibold">
                  ROOM
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">
                Room-Based Chat
              </h3>
              <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-light mb-6">
                Discuss saved content with your team in focused rooms. Context stays attached to the content — not lost in Slack. Organize strategic discussions by project, client, or department without tab switching.
              </p>
            </div>

            {/* Mock UI Component at bottom: Monochrome Chat Input & avatars */}
            <div className="mt-auto pt-5 border-t border-white/5 flex flex-col gap-3">
              <div className="flex items-center justify-between px-1">
                <div className="flex -space-x-2 overflow-hidden">
                  <div className="inline-block h-6 w-6 rounded-full ring-2 ring-zinc-900 bg-zinc-800 border border-zinc-700 text-[9px] font-mono font-bold flex items-center justify-center text-white">MR</div>
                  <div className="inline-block h-6 w-6 rounded-full ring-2 ring-zinc-900 bg-zinc-800 border border-zinc-700 text-[9px] font-mono font-bold flex items-center justify-center text-white">SP</div>
                  <div className="inline-block h-6 w-6 rounded-full ring-2 ring-zinc-900 bg-zinc-800 border border-zinc-700 text-[9px] font-mono font-bold flex items-center justify-center text-white">DK</div>
                </div>
                <span className="text-xs font-mono text-zinc-500"># design-room</span>
              </div>

              <div className="bg-zinc-950 border border-white/10 rounded-xl p-2 pl-4 flex items-center justify-between">
                <span className="text-xs text-zinc-500 font-light truncate">Discussing saved content...</span>
                <button className="w-8 h-8 rounded-lg bg-white text-zinc-950 flex items-center justify-center hover:bg-zinc-200 transition-colors shrink-0">
                  <Send className="w-3.5 h-3.5 text-zinc-950 ml-0.5" />
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
