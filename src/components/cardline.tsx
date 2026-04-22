export const Cardanimatelines = () => {
    return (
        <div className="relative h-[80vh] w-full flex flex-col justify-center gap-16 py-12  md:flex">
            {/* Main vertical line, vertically centered, full height */}
            <div className="absolute top-0 bottom-0 left-15px w-px bg-linear-to-b from-transparent via-zinc-600 to-transparent z-0"></div>
            
            {/* Wrapper for the dots to align perfectly with the h-32 cards */}
            <div className="h-32 flex items-center relative z-10">
                <div className="absolute left-12px w-2 h-2 rounded-full bg-zinc-300 ring-4 ring-zinc-950"></div>
                <div className="absolute left-16px h-px w-8 bg-zinc-600"></div>
            </div>
            
            <div className="h-32 flex items-center relative z-10">
                <div className="absolute left-12px w-2 h-2 rounded-full bg-zinc-300 ring-4 ring-zinc-950"></div>
                <div className="absolute left-16px h-px w-20 bg-zinc-600"></div>
            </div>

            <div className="h-32 flex items-center relative z-10">
                <div className="absolute left-12px w-2 h-2 rounded-full bg-zinc-300 ring-4 ring-zinc-950"></div>
                <div className="absolute left-16px h-px w-32 bg-zinc-600"></div>
            </div>
        </div>
    );
};