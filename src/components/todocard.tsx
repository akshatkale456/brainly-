import { Trash2 as DeleteIcon, CheckCircle2, Circle } from "lucide-react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

interface TodoCardProps {
    title: string;
    priority?: "high" | "medium" | "low" ;
    complete?: boolean;
    onDelete?: () => void;
    onToggle?: () => void;
}

export const TodoCard = ({ title, priority, complete, onDelete, onToggle }: TodoCardProps) => {
    const getPriorityVariant = (p?: string) => {
        if (p === 'high') return 'high';
        if (p === 'medium') return 'medium';
        if (p === 'low') return 'low';
        return 'outline';
    };

    const getBorderColor = (p?: string) => {
        if (p === 'high') return 'rgba(239, 68, 68, 0.4)';
        if (p === 'medium') return 'rgba(245, 158, 11, 0.4)';
        if (p === 'low') return 'rgba(59, 130, 246, 0.4)';
        return 'var(--color-ui-border)';
    };

    return (
        <div 
            className={`tech-card transition-all duration-200 flex items-center justify-between gap-4 p-5 rounded-xl ${complete ? 'opacity-50 bg-surface-0/60 line-through' : 'hover:shadow-lg hover:-translate-y-0.5'}`}
            style={{ borderColor: getBorderColor(priority) }}
        >
            <div className="flex items-center gap-3.5 flex-1 min-w-0">
                <button 
                    onClick={onToggle}
                    className="text-zinc-400 hover:text-green-400 transition-colors shrink-0 cursor-pointer"
                    title={complete ? "Mark as incomplete" : "Mark as completed"}
                >
                    {complete ? (
                        <CheckCircle2 className="w-6 h-6 text-green-400" />
                    ) : (
                        <Circle className="w-6 h-6" />
                    )}
                </button>
                <span className={`body-md text-base text-on-surface truncate ${complete ? 'text-zinc-500' : ''}`}>
                    {title}
                </span>
            </div>

            <div className="flex items-center gap-3 shrink-0">
                {priority && (
                    <Badge variant={getPriorityVariant(priority)} className="text-xs">
                        {priority}
                    </Badge>
                )}
                
                <Button
                    variant="ghost"
                    size="icon-sm"
                    onClick={onDelete}
                    className="text-zinc-500 hover:text-red-400 hover:bg-red-500/10 transition-colors h-8 w-8 rounded-full cursor-pointer"
                    title="Delete Task"
                >
                    <DeleteIcon className="w-4 h-4" />
                </Button>
            </div>
        </div>
    );
};
