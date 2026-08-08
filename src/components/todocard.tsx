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

    return (
        <div 
            className={`transition-all duration-200 flex items-center justify-between gap-4 p-5 rounded-xl border border-ui-border ${complete ? 'opacity-50 bg-surface-0/60 line-through' : 'bg-surface-1 hover:shadow-lg hover:-translate-y-0.5'}`}
        >
            <div className="flex items-center gap-3.5 flex-1 min-w-0">
                <button 
                    onClick={onToggle}
                    className="text-zinc-400 hover:text-green-400 transition-colors shrink-0 cursor-pointer"
                    title={complete ? "Mark as incomplete" : "Mark as completed"}
                >
                    {complete ? (
                        <CheckCircle2 className="w-6 h-6 text-zinc-400" />
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
                    <Badge variant={getPriorityVariant(priority) as any} className="text-xs uppercase tracking-wider">
                        {priority}
                    </Badge>
                )}
                
                <Button
                    variant="ghost"
                    size="icon-sm"
                    onClick={onDelete}
                    className="text-zinc-500 hover:text-zinc-300 hover:bg-zinc-700/50 transition-colors h-8 w-8 rounded-full cursor-pointer"
                    title="Delete Task"
                >
                    <DeleteIcon className="w-4 h-4" />
                </Button>
            </div>
        </div>
    );
};
