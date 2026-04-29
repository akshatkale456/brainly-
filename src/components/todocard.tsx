import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';

interface TodoCardProps {
    id: number;
    title: string;
    priority: "high" | "medium" | "low";
    complete: boolean;
    onDelete: (id: number) => void;
    onToggle: (id: number) => void;
}

export const TodoCard = ({ id, title, priority, complete, onDelete, onToggle }: TodoCardProps) => {
    return (
        <div className={`bg-gradient-to-br from-neutral-800 via-neutral-800 to-primary/50 backdrop-blur-md border rounded-2xl p-5 flex justify-between items-center transition-all duration-300 hover:-translate-y-1 ${complete ? 'opacity-60' : ''}`}
             style={{ 
                borderColor: complete ? 'rgba(100, 100, 100, 0.3)' : priority === 'high' ? 'rgba(239, 68, 68, 0.3)' : priority === 'medium' ? 'rgba(245, 158, 11, 0.3)' : 'var(--color-secondary)'
             }}>
            <div className="flex items-center gap-4">
                <button 
                    onClick={() => onToggle(id)} 
                    className={`transition-colors p-1 rounded-full ${complete ? 'text-green-500 hover:text-green-400' : 'text-zinc-400 hover:text-white'}`}
                >
                    {complete ? <CheckCircleOutlineIcon /> : <RadioButtonUncheckedIcon />}
                </button>
                <div className="flex flex-col gap-1">
                    <h3 className={`text-zinc-200 font-semibold text-lg ${complete ? 'line-through text-zinc-500' : ''}`}>{title}</h3>
                    <span className={`text-xs font-bold uppercase tracking-wider ${complete ? 'text-zinc-600' : priority === 'high' ? 'text-red-400' : priority === 'medium' ? 'text-yellow-400' : 'text-primary'}`}>
                        {priority} Priority
                    </span>
                </div>
            </div>
            <button 
                onClick={() => onDelete(id)}
                className="text-zinc-400 hover:text-red-500 transition-colors p-2 rounded-full hover:bg-zinc-800"
            >
                <DeleteOutlineIcon />
            </button>
        </div>
    );
};
