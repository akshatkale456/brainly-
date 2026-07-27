import { Mediumcard } from "../components/dashcard";
import { Bell as NotificationsNoneIcon, X as CloseIcon, CheckCircle as CheckCircleOutlineIcon, AlertTriangle as WarningAmberIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const NotificationPage = () => {
    const navigate = useNavigate();

    return (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-md flex justify-end p-0 sm:p-4 transition-all duration-300">
            <div className="w-full sm:max-w-md bg-neutral-900 border-l sm:border sm:rounded-2xl border-neutral-700 h-full p-6 overflow-y-auto flex flex-col gap-6 shadow-2xl relative animate-in slide-in-from-right">
                
                <div className="flex justify-between items-center pb-4 border-b border-neutral-800">
                    <div>
                        <h2 className="text-2xl font-bold text-white tracking-wider">Notifications</h2>
                        <p className="text-sm text-zinc-400 mt-1">You have 2 unread messages</p>
                    </div>
                    <button 
                        onClick={() => navigate(-1)} 
                        className="text-zinc-400 hover:text-white p-2 bg-neutral-800 rounded-full hover:bg-neutral-700 transition"
                    >
                        <CloseIcon className="w-5 h-5" />
                    </button>
                </div>
                
                <div className="flex flex-col gap-4">
                    <Mediumcard 
                        heading="Security Alert" 
                        content="Your account was just signed in from a new device in London, UK." 
                        icon={<WarningAmberIcon className="w-6 h-6 text-red-400" />} 
                        variant="notification"
                        time="Just now"
                        isNew={true}
                    />
                    
                    <Mediumcard 
                        heading="Update Completed" 
                        content="Your dashboard configuration has been successfully updated to v2.4." 
                        icon={<CheckCircleOutlineIcon className="w-6 h-6 text-green-400" />} 
                        variant="notification"
                        time="2 hours ago"
                        isNew={true}
                    />

                    <Mediumcard 
                        heading="Welcome Aboard" 
                        content="Thanks for joining! Explore your new dashboard and get started." 
                        icon={<NotificationsNoneIcon className="w-6 h-6 text-primary" />} 
                        variant="notification"
                        time="1 day ago"
                        isNew={false}
                    />
                </div>
                
            </div>
        </div>
    );
};
