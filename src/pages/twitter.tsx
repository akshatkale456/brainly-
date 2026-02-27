import { Button } from "../components/button";
import AddIcon from "@mui/icons-material/Add";

export const Twitter = () => {
    return (
        <div className="p-6">
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-bold">Twitter</h1>
                <Button variant="small" text="Add Tweet" icon={<AddIcon />} />
            </div>
            <p className="mt-4 text-gray-600">Twitter integration goes here.</p>
        </div>
    );
};
