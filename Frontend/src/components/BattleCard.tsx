type BattleCardProps = {
  modelName: string;
  response: string;
  score?: number;
  isWinner?: boolean;
};

function BattleCard({ modelName, response, isWinner }: BattleCardProps) {
  return (
    <div
      className={`w-full rounded-2xl border bg-black/80 backdrop-blur-2xl shadow-xl transition-all duration-300 ${
        isWinner ? "border-yellow-400/40 shadow-yellow-500/10" : "border-white/10"
      }`}
    >
      <div className="p-5 sm:p-6 md:p-8">

        <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-5">

          <div
            className={`flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full text-xs sm:text-sm font-semibold shadow-inner ${
              isWinner
                ? "bg-yellow-400 text-black"
                : "bg-blue-500/20 text-blue-300"
            }`}
          >
            AI
          </div>

          <div className="min-w-0 flex-1">
            <h3 className="text-white font-semibold text-base sm:text-lg md:text-xl truncate">
              {modelName}
            </h3>
            <p className="text-zinc-500 text-[11px] sm:text-xs md:text-sm">
              Assistant Model
            </p>
          </div>

          {isWinner && (
            <div className="shrink-0 rounded-full border border-yellow-400/30 bg-yellow-400/10 px-3 py-1 text-[10px] sm:text-xs text-yellow-300">
              Winner
            </div>
          )}
        </div>

        <div className="rounded-xl sm:rounded-2xl border border-white/10 bg-black/50 p-4 sm:p-5 md:p-6 text-zinc-300 text-xs sm:text-sm md:text-[15px] leading-6 sm:leading-7 whitespace-pre-wrap max-h-72 sm:max-h-80 overflow-y-auto">
          {response}
        </div>

      </div>
    </div>
  );
}

export default BattleCard;