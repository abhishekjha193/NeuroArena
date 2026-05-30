type JudgeCardProps = {
  solution1Score: number;
  solution2Score: number;
  solution1Reasoning: string;
  solution2Reasoning: string;
};

function JudgeCard({
  solution1Score,
  solution2Score,
  solution1Reasoning,
  solution2Reasoning,
}: JudgeCardProps) {
  const winner =
    solution1Score > solution2Score
      ? "Mistral AI"
      : solution2Score > solution1Score
      ? "Cohere AI"
      : "Tie";

  const maxScore = Math.max(solution1Score, solution2Score);

  return (
    <div className="w-full rounded-2xl border border-white/10 bg-black/80 backdrop-blur-2xl shadow-xl overflow-hidden">

      <div className="border-b border-white/10 px-4 sm:px-6 md:px-8 py-5 sm:py-6">
        <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.35em] text-zinc-500">
          Judge
        </p>

        <h2 className="mt-2 text-xl sm:text-2xl font-semibold text-white">
          AI Evaluation
        </h2>

        <p className="mt-1 text-xs sm:text-sm text-zinc-500">
          Comparative analysis of model responses
        </p>
      </div>

      <div className="space-y-5 sm:space-y-6 p-4 sm:p-6 md:p-8">

        <div className="rounded-xl border border-white/10 bg-black/50 p-4 sm:p-5">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm sm:text-base font-medium text-emerald-300">
              Mistral AI
            </h3>

            <span className="text-xl sm:text-2xl font-semibold text-white">
              {solution1Score}
            </span>
          </div>

          <div className="h-2 rounded-full bg-white/10 overflow-hidden">
            <div
              className="h-full rounded-full bg-emerald-400"
              style={{ width: `${(solution1Score / maxScore) * 100}%` }}
            />
          </div>

          <p className="mt-4 text-xs sm:text-sm leading-6 sm:leading-7 text-zinc-400">
            {solution1Reasoning}
          </p>
        </div>

        <div className="rounded-xl border border-white/10 bg-black/50 p-4 sm:p-5">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm sm:text-base font-medium text-cyan-300">
              Cohere AI
            </h3>

            <span className="text-xl sm:text-2xl font-semibold text-white">
              {solution2Score}
            </span>
          </div>

          <div className="h-2 rounded-full bg-white/10 overflow-hidden">
            <div
              className="h-full rounded-full bg-cyan-400"
              style={{ width: `${(solution2Score / maxScore) * 100}%` }}
            />
          </div>

          <p className="mt-4 text-xs sm:text-sm leading-6 sm:leading-7 text-zinc-400">
            {solution2Reasoning}
          </p>
        </div>

        <div className="rounded-xl border border-white/10 bg-black/50 p-5 sm:p-6">
          <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.35em] text-zinc-500">
            Verdict
          </p>

          <h3 className="mt-2 text-lg sm:text-xl font-semibold text-white">
            {winner === "Tie" ? "Draw" : `${winner} Wins`}
          </h3>

          <p className="mt-2 text-xs sm:text-sm text-zinc-500">
            {winner === "Tie"
              ? "Both models performed equally."
              : "Based on evaluation score comparison."}
          </p>
        </div>

      </div>
    </div>
  );
}

export default JudgeCard;