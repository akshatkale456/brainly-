import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

interface TodoCardProps {
    id: number;
    title: string;
    priority: "high" | "medium" | "low";
    onDelete: (id: number) => void;
}

export const TodoCard = ({ id, title, priority, onDelete }: TodoCardProps) => {
    return (
        <div className={`bg-gradient-to-br from-neutral-800 via-neutral-800 to-primary/50 backdrop-blur-md border rounded-2xl p-5 flex justify-between items-center transition-all duration-300 hover:-translate-y-1`}
             style={{ 
                borderColor: priority === 'high' ? 'rgba(239, 68, 68, 0.3)' : priority === 'medium' ? 'rgba(245, 158, 11, 0.3)' : 'var(--color-secondary)'
             }}>
            <div className="flex flex-col gap-1">
                <h3 className="text-zinc-200 font-semibold text-lg">{title}</h3>
                <span className={`text-xs font-bold uppercase tracking-wider ${priority === 'high' ? 'text-red-400' : priority === 'medium' ? 'text-yellow-400' : 'text-primary'}`}>
                    {priority} Priority
                </span>
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
