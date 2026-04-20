import React from 'react';

interface HorizontalCardProps {
  image ?: string;
  text: string;
}

export const HorizontalCard: React.FC<HorizontalCardProps> = ({ image, text }) => {
  return (
    <div className="flex flex-row items-center bg-zinc-800/80 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-white/10 w-120 max-w-md transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:bg-zinc-800">
      <div className="flex-shrink-0">
        <img 
          src={image} 
          alt="Card illustration" 
          className="w-24 h-24 object-cover rounded-xl border border-white/5 shadow-inner" 
        />
      </div>
      <div className="ml-5 flex-1">
        <p className="text-zinc-200 font-medium text-lg leading-snug">
          {text}
        </p>
      </div>
    </div>
  );
};
