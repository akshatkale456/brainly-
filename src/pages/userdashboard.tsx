import { useTodoStore } from "../store.ts/todostore";
import { motion } from "motion/react";
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

export const Dashboard = () => {
    const { todos } = useTodoStore();

    const totalTasks = todos.length;
    const completedTasks = todos.filter(t => t.complete).length;
    const incompleteTasks = totalTasks - completedTasks;
    const highPriorityIncomplete = todos.filter(t => !t.complete && t.priority === "high").length;

    // Calculate percentage (avoid division by zero)
    const percentage = totalTasks === 0 ? 0 : Math.round((completedTasks / totalTasks) * 100);
    const dashArray = 283; // Circumference of circle (2 * pi * r) where r=45
    const dashOffset = dashArray - (dashArray * percentage) / 100;

    return (
        <div className="p-6 md:p-10 max-w-7xl mx-auto">
            <div className="mb-10">
                <h1 className="text-4xl font-bold text-white mb-2">Welcome Back</h1>
                <p className="text-zinc-400">Here's your live productivity overview.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
                {/* Metric Cards */}
                <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 shadow-xl flex items-center justify-between transition-transform hover:-translate-y-1">
                    <div>
                        <p className="text-zinc-400 font-medium mb-1">Incomplete Tasks</p>
                        <h2 className="text-3xl font-bold text-white">{incompleteTasks}</h2>
                    </div>
                    <div className="h-12 w-12 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400">
                        <FormatListBulletedIcon />
                    </div>
                </div>

                <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 shadow-xl flex items-center justify-between transition-transform hover:-translate-y-1">
                    <div>
                        <p className="text-zinc-400 font-medium mb-1">High Priority (Pending)</p>
                        <h2 className="text-3xl font-bold text-white">{highPriorityIncomplete}</h2>
                    </div>
                    <div className="h-12 w-12 rounded-full bg-red-500/20 flex items-center justify-center text-red-400">
                        <PriorityHighIcon />
                    </div>
                </div>

                <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 shadow-xl flex items-center justify-between transition-transform hover:-translate-y-1">
                    <div>
                        <p className="text-zinc-400 font-medium mb-1">Completed Tasks</p>
                        <h2 className="text-3xl font-bold text-white">{completedTasks}</h2>
                    </div>
                    <div className="h-12 w-12 rounded-full bg-green-500/20 flex items-center justify-center text-green-400">
                        <CheckCircleIcon />
                    </div>
                </div>
            </div>

            {/* Productivity Chart Section */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 shadow-2xl flex flex-col items-center justify-center max-w-md mx-auto">
                <h3 className="text-xl font-bold text-white mb-8">Productivity Score</h3>

                <div className="relative flex items-center justify-center w-48 h-48">
                    {/* Background Circle */}
                    <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                        <circle
                            cx="50"
                            cy="50"
                            r="45"
                            className="stroke-zinc-800"
                            strokeWidth="8"
                            fill="none"
                        />
                        {/* Animated Progress Circle */}
                        <motion.circle
                            cx="50"
                            cy="50"
                            r="45"
                            className="stroke-secondary"
                            strokeWidth="8"
                            fill="none"
                            strokeLinecap="round"
                            initial={{ strokeDasharray: dashArray, strokeDashoffset: dashArray }}
                            animate={{ strokeDashoffset: dashOffset }}
                            transition={{ duration: 1.5, ease: "easeOut" }}
                        />
                    </svg>

                    {/* Percentage Text inside circle */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <span className="text-4xl font-bold text-white">{percentage}%</span>
                        <span className="text-xs text-zinc-400 font-medium uppercase tracking-wider mt-1">Completed</span>
                    </div>
                </div>

                <p className="mt-8 text-center text-zinc-400 text-sm">
                    {totalTasks === 0 ? "Add some tasks in the Todo page to get started!" :
                        percentage === 100 ? "Incredible! You've finished all tasks!" :
                            percentage >= 50 ? "Great job, you're more than halfway there!" :
                                "Keep pushing, you can get those tasks done!"}
                </p>
            </div>
        </div>
    );
};
