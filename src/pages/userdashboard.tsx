import React from "react";

export const Dashboard = () => {
    return (
        <div className="min-h-screen bg-surface-0 p-6 md:p-10 max-w-7xl mx-auto space-y-8">
            <div className="pb-6">
                <h1 className="headline-xl md:text-5xl text-on-surface">
                    Dashboard
                </h1>
                <p className="body-md text-zinc-400 mt-2">
                    Welcome to your central workspace.
                </p>
            </div>

            <div className="tech-card bg-surface-1 border border-ui-border p-6 rounded-2xl">
                {/* Boilerplate content container */}
                <p className="body-sm text-zinc-400">
                    Dashboard content goes here...
                </p>
            </div>
        </div>
    );
};

export default Dashboard;