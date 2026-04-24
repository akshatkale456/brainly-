import { create } from "zustand"
import type { cardGlobalState } from "../types/type"
import type { card } from "../types/type"
const useCardset = create<cardGlobalState>((set) => ({
    card: [],
    addcard: (newCard: card) => {
        set((state) => ({
            card: [
                ...state.card,
                {
                    type: newCard.type,
                    title: newCard.title,
                    read: newCard.read,
                    link: newCard.link,
                    id: new Date().getTime() // Note: id is not defined in your `card` interface in type.ts
                } as card // Cast to `card` to allow `id` if not yet in type.ts
            ]
        }))
    },
    deletcard: (id: number) => set((state) => ({
        card: state.card.filter((card) => card.id !== id)
    }))
}));

export default useCardset;