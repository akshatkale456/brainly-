import React from "react";
import { Card } from "@/components/ui/card";

export const Dashboard = () => {
    return (
        <div className="min-h-screen bg-surface-0 p-6 md:p-10 font-sans text-on-surface">
            <div className="mb-10 w-full max-w-3xl">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-3">
                    Welcome back
                </h1>
                <p className="text-zinc-400 text-lg">
                    Save YouTube videos, manage rooms, and seamlessly sync your events and mail—all in one place.
                </p>
            </div>
            <div className="grid grd-row-3">
            <div className="grid grid-cols-12 gap-6">
                <div className="col-span-12 md:col-span-6">
                    <div className="p-6 bg-surface-container rounded-md">
                        hello 
                    </div>
                </div>
                <div className="col-span-12 md:col-span-4  bg-surface-container rounded-md">
                    <div className="p-6">
                        hiii 
                    </div>
                </div>
                
            </div>
            <div className="grid grid-cols-12 gap-6">
                <div className="col-span-12 md:col-span-6">
                    <div className="p-6 bg-surface-container rounded-md">
                        hello 
                    </div>
                </div>
                <div className="col-span-12 md:col-span-4  bg-surface-container rounded-md">
                    <div className="p-6">
                        hiii 
                    </div>
                </div>
                
            </div>
        </div>
        </div>
    );
};

export default Dashboard;
