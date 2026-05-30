import { useState } from "react";

type PromptBoxProps = {
  onSubmit: (prompt: string) => Promise<void>;
  loading: boolean;
};

const examples = [
  "Build a scalable REST API using Express.js",
  "Explain React Server Components in detail",
  "Design a URL shortener system",
  "Compare PostgreSQL vs MongoDB",
];

function PromptBox({ onSubmit, loading }: PromptBoxProps) {
  const [prompt, setPrompt] = useState("");

  const handleSubmit = async () => {
    if (!prompt.trim()) return;
    await onSubmit(prompt);
    setPrompt("");
  };

  return (
    <div className="w-full overflow-hidden rounded-2xl border border-white/10 bg-black/80 backdrop-blur-2xl shadow-2xl">

      <div className="border-b border-white/10 px-5 sm:px-7 md:px-8 py-5 sm:py-7">
        <span className="inline-flex rounded-full border border-blue-400/30 bg-blue-500/10 px-3 py-1 text-[10px] sm:text-[11px] tracking-[0.3em] uppercase text-blue-300">
          Arena Input
        </span>

        <h2 className="mt-4 text-xl sm:text-2xl md:text-3xl font-semibold text-white">
          Start a Battle
        </h2>

        <p className="mt-2 text-xs sm:text-sm text-zinc-400">
          Compare multiple AI models and evaluate responses in real time.
        </p>
      </div>

      <div className="p-4 sm:p-6 md:p-8">

        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Ask anything..."
          className="h-36 sm:h-44 md:h-48 w-full resize-none rounded-xl sm:rounded-2xl border border-white/10 bg-black/60 p-4 sm:p-5 md:p-6 text-sm sm:text-[15px] text-white outline-none placeholder:text-zinc-600 focus:border-cyan-400/40 focus:ring-4 focus:ring-blue-500/10"
        />

        <div className="mt-4 flex flex-wrap gap-2">
          {examples.map((item, i) => (
            <button
              key={item}
              onClick={() => setPrompt(item)}
              className={`rounded-full border px-3 sm:px-4 py-1.5 text-[10px] sm:text-xs transition
                ${
                  i % 3 === 0
                    ? "border-blue-400/30 text-blue-300 hover:bg-blue-500/10"
                    : i % 3 === 1
                    ? "border-cyan-400/30 text-cyan-300 hover:bg-cyan-500/10"
                    : "border-yellow-400/30 text-yellow-300 hover:bg-yellow-500/10"
                }`}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="mt-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

          <div>
            <p className="text-xs sm:text-sm text-zinc-400">
              <span className="text-blue-400">Mistral</span> •{" "}
              <span className="text-cyan-400">Cohere</span> •{" "}
              <span className="text-yellow-400">Gemini Judge</span>
            </p>

            <p className="mt-1 text-[10px] sm:text-xs text-zinc-500">
              Real-time AI comparison system
            </p>
          </div>

          <button
            onClick={handleSubmit}
            disabled={loading || !prompt.trim()}
            className="w-full md:w-auto rounded-xl bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-500 px-6 sm:px-7 py-3 text-sm font-medium text-black transition hover:scale-[1.03] disabled:opacity-40 disabled:cursor-not-allowed"
          >
            {loading ? "Running..." : "Launch Battle"}
          </button>

        </div>

      </div>
    </div>
  );
}

export default PromptBox;