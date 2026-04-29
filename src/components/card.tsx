import type { Card as CardType } from "../types/type"

export function Card(card: CardType) {
  return (
    <div className="group relative flex items-center justify-center p-4 w-full h-full">
      {/* Glow shadow behind the card */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />

      {/* Card container */}
      <div className="
        relative w-full h-full min-h-80 sm:w-72 rounded-2xl
        bg-white/[0.03] border border-white/10
        backdrop-blur-xl overflow-hidden
        flex flex-col items-center justify-start text-center
        p-8 gap-6
        transition-all duration-500 ease-out
        group-hover:-translate-y-2 group-hover:bg-white/10 group-hover:border-white/20
        shadow-2xl shadow-black/80
        text-white
      " >
        {/* Top internal gradient highlight */}
        <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Icon container */}
        <div className="
          flex flex-shrink-0 items-center justify-center w-16 h-16 rounded-full
          bg-white/5 border border-white/10
          shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)]
          group-hover:scale-110 group-hover:bg-white/10 transition-all duration-500 ease-out
          text-zinc-300 group-hover:text-white
        ">
          {card.img}
        </div>

        {/* Content */}
        <div className="flex flex-col gap-3 items-center w-full">
          {card.title && (
            <h3 className="text-xl font-semibold tracking-tight text-white/90 group-hover:text-white transition-colors duration-300">
              {card.title}
            </h3>
          )}
          <p className="text-sm leading-relaxed text-zinc-400 group-hover:text-zinc-300 transition-colors duration-300">
            {card.string}
          </p>
        </div>

        {card.stock !== undefined && card.stock > 0 && (
          <div className="mt-auto">
            <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 font-medium text-xs text-zinc-300 border border-white/10 shadow-sm">
              {card.stock} left
            </span>
          </div>
        )}
      </div>
    </div>
  )
}
