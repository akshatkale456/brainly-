import { Socialcard } from "../components/socialcard";
import useCardset from "../store.ts/store";

export const Twitter = () => {
    const { card } = useCardset();
    const twitterCards = card.filter(c => c.type === "twitter");

    return (
        <div className="p-6 md:p-10 max-w-7xl mx-auto">
            <div className="flex justify-between items-center mb-10">
                <div>
                    <h1 className="text-4xl font-bold text-white mb-2">Twitter Bookmarks</h1>
                    <p className="text-zinc-400">Your saved Twitter threads and posts.</p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {twitterCards.length === 0 ? (
                    <div className="col-span-full text-center py-12 bg-zinc-900/50 rounded-2xl border border-zinc-800/50 border-dashed">
                        <p className="text-zinc-500 text-lg">No tweets saved yet.</p>
                    </div>
                ) : (
                    twitterCards.map(c => (
                        <div key={c.id} className="w-full bg-zinc-800/50 rounded-xl p-4 flex items-center justify-center overflow-hidden">
                            <Socialcard id={String(c.id)} priority={c.priority} type="twitter" title={c.title || ""} read={c.read || false} link={c.link || ""} />
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};
