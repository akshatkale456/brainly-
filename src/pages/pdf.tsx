import { Button } from "../components/button";
import AddIcon from "@mui/icons-material/Add";

export const Pdf = () => {
    return (
        <div className="p-6 md:p-10 max-w-7xl mx-auto">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-bold text-white">PDF</h1>
                <Button variant="small" text="Add PDF" icon={<AddIcon />} />
            </div>
            <p className="mt-4 text-zinc-400">PDF document section goes here.</p>
        </div>
    );
};
