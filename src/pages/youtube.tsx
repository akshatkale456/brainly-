import { Socialcard } from "../components/socialcard";

export const Youtube = () => {
    return (
        <div className="p-6 md:p-10 max-w-7xl mx-auto">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-bold text-white">YouTube</h1>
                {/* <Button variant="small" text="Add Video" icon={<AddIcon />} /> */}
            </div>
            <p className="mt-4 text-zinc-400">YouTube integration goes here.</p>
            <div className="mt-6">
                 <Socialcard type="" title="read for the elon musk" read={false} link="" />
            </div>
        </div>
    );
};
