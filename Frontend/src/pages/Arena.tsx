import { useState } from "react";
import Navbar from "../components/Navbar";
import PromptBox from "../components/PromptBox";
import BattleCard from "../components/BattleCard";
import JudgeCard from "../components/JudgeCard";
import LoadingArena from "../components/LoadingArena";
import { invokeArena } from "../services/api";

type ArenaResult = {
  problem: string;
  solution_1: string;
  solution_2: string;
  judge: {
    solution_1_score: number;
    solution_2_score: number;
    solution_1_reasoning: string;
    solution_2_reasoning: string;
  };
};

function Arena() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<ArenaResult | null>(null);

  const handleBattle = async (prompt: string) => {
    try {
      setLoading(true);
      const data = await invokeArena(prompt);
      setResult(data.result);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const winner =
    result &&
    result.judge.solution_1_score > result.judge.solution_2_score
      ? "Mistral AI"
      : result &&
        result.judge.solution_2_score > result.judge.solution_1_score
      ? "Cohere AI"
      : "Tie";

  return (
    <div className="min-h-screen bg-[#000103] text-white overflow-hidden">
      <Navbar />

      <div className="fixed inset-0 -z-10">
        <div className="absolute left-[20%] top-[20%] h-[400px] w-[400px] rounded-full bg-blue-500/10 blur-[180px]" />
        <div className="absolute right-[20%] bottom-[20%] h-[400px] w-[400px] rounded-full bg-cyan-500/10 blur-[180px]" />
      </div>

      <div className="mx-auto max-w-7xl px-6 py-10">

        <section className="mb-10">
          <PromptBox loading={loading} onSubmit={handleBattle} />
        </section>

        {loading && (
          <section className="mb-10">
            <LoadingArena />
          </section>
        )}

        {!loading && result && (
          <>
            <section className="mb-10">
              <div className="rounded-2xl border border-yellow-400/20 bg-yellow-400/5 p-6 text-center">
                <p className="text-xs tracking-[0.3em] text-yellow-300 uppercase">
                  Winner
                </p>
                <h2 className="mt-2 text-3xl font-semibold text-yellow-400">
                  {winner}
                </h2>
              </div>
            </section>

            <section className="mb-10 grid gap-6 lg:grid-cols-2">
              <BattleCard
                modelName="Mistral AI"
                response={result.solution_1}
                score={result.judge.solution_1_score}
                isWinner={
                  result.judge.solution_1_score >
                  result.judge.solution_2_score
                }
              />

              <BattleCard
                modelName="Cohere AI"
                response={result.solution_2}
                score={result.judge.solution_2_score}
                isWinner={
                  result.judge.solution_2_score >
                  result.judge.solution_1_score
                }
              />
            </section>

            <section>
              <div className="mb-4">
                <h2 className="text-2xl font-semibold">Judge Analysis</h2>
                <p className="text-sm text-zinc-500 mt-1">
                  AI evaluates both responses and assigns scores.
                </p>
              </div>

              <JudgeCard
                solution1Score={result.judge.solution_1_score}
                solution2Score={result.judge.solution_2_score}
                solution1Reasoning={result.judge.solution_1_reasoning}
                solution2Reasoning={result.judge.solution_2_reasoning}
              />
            </section>
          </>
        )}
      </div>
    </div>
  );
}

export default Arena;