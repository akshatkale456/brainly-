import React, { useState } from 'react';
import { startOfWeek, addDays, format, isSameDay } from 'date-fns';

export const Weeks = () => {
    const [Currentdate ,setdate] = useState(new Date())
    const startdate  = startOfWeek( Currentdate, {weekStartsOn :1})
    const days:any[]  = Array.from({length:7}).map((_,index)=>addDays(startdate,index))

    return (
        <div className="flex flex-row justify-between w-full bg-zinc-950/40 border border-white/10 rounded-2xl p-4 gap-2">
            {days.map((day, index)=>{
                const isSelected = isSameDay(day, Currentdate);
                return (
                    <div 
                        key={index}
                        onClick={()=>{
                            setdate(day)
                        }}
                        className={`flex flex-col items-center justify-center flex-1 py-4 rounded-xl cursor-pointer transition-all duration-300 border ${
                            isSelected 
                                ? 'bg-white text-zinc-900 border-white shadow-[0_0_20px_rgba(255,255,255,0.15)] scale-105' 
                                : 'bg-zinc-900/40 text-zinc-400 border-white/5 hover:bg-zinc-800/60 hover:border-white/10 hover:text-white'
                        }`}
                    >
                        <span className={`text-[11px] uppercase tracking-[0.15em] font-mono mb-2 ${isSelected ? 'text-zinc-600' : 'text-zinc-500'}`}>
                            {format(day, 'EEE')}
                        </span>
                        <span className={`text-2xl font-bold font-sans ${isSelected ? 'text-zinc-900' : 'text-white'}`}>
                            {format(day, 'd')}
                        </span>
                    </div>
                )
            })}
        </div>
    );
};

export default Weeks;
