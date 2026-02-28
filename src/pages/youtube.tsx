import { Button } from "../components/button";
import AddIcon from "@mui/icons-material/Add";
import { Socialcard } from "../components/socialcard";

export const Youtube = () => {
    return (
        <div className="p-6">
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-bold">YouTube</h1>
                <Socialcard type = "youtube"title="read for the elon musk" read ={false}
                 link = "https://youtu.be/DK9rBlhJjTs?si=6P6KhLJqllSokn9Y" />
                <Button variant="small" text="Add Video" icon={<AddIcon />} />
            </div>
            <p className="mt-4 text-gray-600">YouTube integration goes here.</p>
        </div>
    );
};
