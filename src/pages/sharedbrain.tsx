import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Socialcard } from "../components/socialcard";
import { TodoCard } from "../components/todocard";
import { BrainCircuit, User2 } from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../components/ui/tabs";
import { API_URL } from "../config";

interface SharedData {
    user: {
        firstName: string;
        lastName: string;
    };
    youtube: any[];
    twitter: any[];
    todo: any[];
}

export const SharedBrain = () => {
    const { hash } = useParams();
    const [data, setData] = useState<SharedData | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchBrain = async () => {
            try {
                const response = await fetch(`${API_URL}/brain/${hash}`);
                if (!response.ok) throw new Error("Brain not found or invalid link");
                const result = await response.json();
                setData(result);
            } catch (err: any) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        fetchBrain();
    }, [hash]);

    if (loading) {
        return <div className="min-h-screen flex items-center justify-center bg-surface-0 text-white">Loading...</div>;
    }

    if (error || !data) {
        return <div className="min-h-screen flex items-center justify-center bg-surface-0 text-red-500">{error || "Brain not found"}</div>;
    }

    return (
        <div className="min-h-screen bg-surface-0 p-8 md:p-12 lg:p-24 font-sans text-on-surface">
            <div className="max-w-6xl mx-auto flex flex-col gap-12">
                {/* Header Profile Section */}
                <div className="flex items-center gap-6 pb-8 border-b border-white/10 mt-8">
                    <div className="w-20 h-20 rounded-full bg-surface-2 border-4 border-surface-1 flex items-center justify-center shadow-xl">
                        <User2 className="w-10 h-10 text-zinc-400" />
                    </div>
                    <div className="flex flex-col">
                        <h1 className="text-4xl font-bold tracking-tight text-white flex items-center gap-3">
                            {data.user.firstName} {data.user.lastName}'s Brain
                            <BrainCircuit className="w-8 h-8 text-indigo-400" />
                        </h1>
                        <p className="text-zinc-500 mt-2 text-lg">Exploring a shared workspace.</p>
                    </div>
                </div>

                {/* Tabs for Content */}
                <Tabs defaultValue="youtube" className="w-full flex flex-col gap-8">
                    <TabsList className="bg-surface-1 border border-ui-border rounded-xl p-1 inline-flex self-start">
                        <TabsTrigger value="youtube" className="px-6 py-2 rounded-lg data-[state=active]:bg-white data-[state=active]:text-black transition-all">YouTube ({data.youtube.length})</TabsTrigger>
                        <TabsTrigger value="twitter" className="px-6 py-2 rounded-lg data-[state=active]:bg-white data-[state=active]:text-black transition-all">Twitter ({data.twitter.length})</TabsTrigger>
                        <TabsTrigger value="todo" className="px-6 py-2 rounded-lg data-[state=active]:bg-white data-[state=active]:text-black transition-all">Todos ({data.todo.length})</TabsTrigger>
                    </TabsList>

                    <TabsContent value="youtube" className="mt-0">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {data.youtube.length === 0 ? (
                                <p className="text-zinc-500">No YouTube links saved.</p>
                            ) : data.youtube.map(card => (
                                <Socialcard key={card._id} id={card._id} title={card.title} link={card.link} type="youtube" priority={card.priority} 
                                read={card.read} />
                            ))}
                        </div>
                    </TabsContent>
                    
                    <TabsContent value="twitter" className="mt-0">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {data.twitter.length === 0 ? (
                                <p className="text-zinc-500">No Twitter posts saved.</p>
                            ) : data.twitter.map(card => (
                                <Socialcard key={card._id} id={card._id} title={card.title} link={card.link} type="twitter" priority={card.priority} read={card.read}
                                 />
                            ))}
                        </div>
                    </TabsContent>

                    <TabsContent value="todo" className="mt-0">
                        <div className="flex flex-col gap-4 max-w-3xl">
                            {data.todo.length === 0 ? (
                                <p className="text-zinc-500">No tasks saved.</p>
                            ) : data.todo.map(t => (
                                <TodoCard key={t._id} title={t.title} priority={t.priority} complete={t.complete} />
                            ))}
                        </div>
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    );
}
