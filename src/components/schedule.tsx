import React from 'react';
import { format } from 'date-fns';
import useCardset from '../store.ts/store';
import useTodoStore from '../store.ts/todostore';
import useEventStore from '../store.ts/eventstore';

interface ScheduleProps {
    selectedDate: Date;
}

export const Schedule = ({ selectedDate }: ScheduleProps) => {
    const { card } = useCardset();
    const { todos } = useTodoStore();
    const { events } = useEventStore();

    const dateString = format(selectedDate, 'yyyy-MM-dd');

    // Filter events by selected date
    const todaysEvents = events.filter(e => e.date === dateString);

    // Todos and cards don't have explicit dates in schema, so we'll show them all
    // or filter if a date property happens to exist.
    const todaysTodos = todos.filter(t => (t as any).date === dateString || !(t as any).date);
    const todaysCards = card.filter(c => (c as any).date === dateString || !(c as any).date);

    return (
        <div className="flex flex-col gap-6">
            <h2 className="text-2xl font-semibold text-white">
                Schedule for {format(selectedDate, 'MMMM d, yyyy')}
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Events Column */}
                <div className="bg-zinc-950/40 border border-white/10 rounded-2xl p-6 flex flex-col gap-4">
                    <h3 className="text-lg font-medium text-zinc-300">Events</h3>
                    {todaysEvents.length === 0 ? (
                        <p className="text-zinc-500 text-sm">No events scheduled.</p>
                    ) : (
                        <div className="flex flex-col gap-3 max-h-[400px] overflow-y-auto no-scrollbar">
                            {todaysEvents.map(e => (
                                <div key={e.id} className="bg-surface-2 p-3 rounded-xl border border-ui-border">
                                    <p className="text-white font-medium">{e.title}</p>
                                    {e.time && <p className="text-xs text-indigo-400 mt-1">{e.time}</p>}
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Todos Column */}
                <div className="bg-zinc-950/40 border border-white/10 rounded-2xl p-6 flex flex-col gap-4">
                    <h3 className="text-lg font-medium text-zinc-300">Todos</h3>
                    {todaysTodos.length === 0 ? (
                        <p className="text-zinc-500 text-sm">No tasks.</p>
                    ) : (
                        <div className="flex flex-col gap-3 max-h-[400px] overflow-y-auto no-scrollbar">
                            {todaysTodos.map(t => (
                                <div key={t.id} className="bg-surface-2 p-3 rounded-xl border border-ui-border flex items-center gap-3">
                                    <div className={`w-3 h-3 rounded-full shrink-0 ${t.complete ? 'bg-green-500' : 'bg-red-500'}`} />
                                    <p className="text-white font-medium truncate">{t.title}</p>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Cards Column */}
                <div className="bg-zinc-950/40 border border-white/10 rounded-2xl p-6 flex flex-col gap-4">
                    <h3 className="text-lg font-medium text-zinc-300">Saved Links</h3>
                    {todaysCards.length === 0 ? (
                        <p className="text-zinc-500 text-sm">No saved links.</p>
                    ) : (
                        <div className="flex flex-col gap-3 max-h-[400px] overflow-y-auto no-scrollbar">
                            {todaysCards.map(c => (
                                <div key={c.id} className="bg-surface-2 p-3 rounded-xl border border-ui-border">
                                    <div className="flex items-center justify-between mb-1">
                                        <p className="text-white font-medium truncate">{c.title || 'Untitled'}</p>
                                        <span className="text-[10px] uppercase text-zinc-500 ml-2">{c.type}</span>
                                    </div>
                                    <a href={c.link} target="_blank" rel="noreferrer" className="text-xs text-indigo-400 hover:underline truncate block">
                                        {c.link}
                                    </a>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Schedule;
