import { Button } from "../components/button";
import AddIcon from "@mui/icons-material/Add";

export const Pdf = () => {
    return (
        <div className="p-6">
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-bold">PDF</h1>
                <Button variant="small" text="Add PDF" icon={<AddIcon />} />
            </div>
            <p className="mt-4 text-gray-600">PDF document section goes here.</p>
        </div>
    );
};