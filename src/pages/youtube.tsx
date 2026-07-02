import { useEffect } from "react";
import { Socialcard } from "../components/socialcard";
import useCardset from "../store.ts/store";

export const Youtube = () => {
    const { card,fetchcarddata } = useCardset();
    useEffect(()=>{
        fetchcarddata()
    },[])
    
    const youtubeCards = card.filter(c => c.type === "youtube");

    return (
        <div className="p-6 md:p-10 max-w-7xl mx-auto">
            <div className="flex justify-between items-center mb-10">
                <div>
                    <h1 className="text-4xl font-bold text-white mb-2">YouTube Library</h1>
                    <p className="text-zinc-400">Your saved YouTube videos and tutorials.</p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {youtubeCards.length === 0 ? (
                    <div className="col-span-full text-center py-12 bg-zinc-900/50 rounded-2xl border border-zinc-800/50 border-dashed">
                        <p className="text-zinc-500 text-lg">No videos saved yet.</p>
                    </div>
                ) : (
                    youtubeCards.map(c => (
                        <div key={c.id} className="relative w-full aspect-video rounded-xl overflow-hidden bg-zinc-800/50 flex items-center justify-center">
                            <Socialcard id={String(c.id)} priority={c.priority} type="youtube"    title={c.title || ""} read={c.read || false} link={c.link || ""} />
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};
