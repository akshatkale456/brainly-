import React, { useEffect, useState } from "react";
import { Weeks } from "../components/weeks";
import { Schedule } from "../components/schedule";
import useCardset from "../store.ts/store";
import useTodoStore from "../store.ts/todostore";
import useEventStore from "../store.ts/eventstore";

export const Aidayplanner = () => {
    const fetchcarddata = useCardset(state => state.fetchcarddata);
    const fetchtodo = useTodoStore(state => state.fetchtodo);
    const fetchEvents = useEventStore(state => state.fetchEvents);
    const [selectedDate, setSelectedDate] = useState(new Date());

    useEffect(() => {
        const fetchAllData = async () => {
            try {
                await Promise.all([
                    fetchcarddata(),
                    fetchtodo(),
                    fetchEvents()
                ]);
            } catch (error) {
                console.error("Failed to fetch day planner data:", error);
            }
        };
        fetchAllData();
    }, [fetchcarddata, fetchtodo, fetchEvents]);

    return (
        <div className="min-h-screen bg-surface-0 p-6 md:p-12 lg:p-24 font-sans text-on-surface flex flex-col items-center">
            <div className="w-full max-w-6xl flex flex-col gap-12 mt-12">
                
                {/* Header */}
                <div className="flex flex-col">
                    <h1 className="text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1]">
                        <span className="text-white">Your day,</span><br/>
                        <span className="text-zinc-500">structured.</span>
                    </h1>
                </div>

                {/* Date Component and Schedule */}
                <div className="w-full flex flex-col gap-8">
                    <Weeks selectedDate={selectedDate} onSelectDate={setSelectedDate} />
                    <Schedule selectedDate={selectedDate} />
                </div>

            </div>
        </div>
    );
};

export default Aidayplanner;
