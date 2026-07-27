import React from 'react';
import { Sparkles } from 'lucide-react';

interface HorizontalCardProps {
  image?: string;
  icon?: React.ReactNode;
  title?: string;
  text: string;
  tag?: string;
}

export const HorizontalCard: React.FC<HorizontalCardProps> = ({ 
  image, 
  icon, 
  title, 
  text,
  tag 
}) => {
  return (
    <div className="group flex flex-col md:flex-row items-start md:items-center bg-zinc-900/50 backdrop-blur-xl rounded-2xl p-6 shadow-xl border border-white/10 hover:border-white/20 hover:bg-zinc-900 w-full max-w-xl transition-all duration-300">
      {/* Icon or Image container */}
      <div className="flex-shrink-0 mb-4 md:mb-0">
        {icon ? (
          <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white group-hover:bg-white/10 transition-all duration-300">
            {icon}
          </div>
        ) : image ? (
          <img 
            src={image} 
            alt="Card illustration" 
            className="w-16 h-16 object-cover rounded-2xl border border-white/10" 
          />
        ) : (
          <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white group-hover:bg-white/10 transition-all duration-300">
            <Sparkles className="w-7 h-7 text-white" />
          </div>
        )}
      </div>

      {/* Text & Content */}
      <div className="md:ml-6 flex-1">
        {tag && (
          <div className="inline-block px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono tracking-wider text-zinc-400 uppercase font-semibold mb-2">
            {tag}
          </div>
        )}
        {title && (
          <h4 className="text-xl font-bold text-white mb-1.5 tracking-tight">
            {title}
          </h4>
        )}
        <p className="text-zinc-400 font-light text-sm md:text-base leading-relaxed group-hover:text-zinc-300 transition-colors">
          {text}
        </p>
      </div>
    </div>
  );
};
