function LoadingArena() {
  return (
    <div className="flex min-h-[500px] items-center justify-center bg-black px-4 sm:px-6">
      <div className="w-full max-w-5xl overflow-hidden rounded-2xl border border-white/10 bg-black/80 backdrop-blur-2xl shadow-2xl">

        <div className="border-b border-white/10 px-5 sm:px-7 md:px-8 py-6 sm:py-8 text-center">
          <div className="mx-auto mb-4 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-blue-500/10">
            <div className="h-2.5 w-2.5 sm:h-3 sm:w-3 animate-pulse rounded-full bg-blue-400" />
          </div>

          <p className="text-[10px] sm:text-[11px] tracking-[0.35em] uppercase text-blue-400">
            Live Processing
          </p>

          <h2 className="mt-3 text-xl sm:text-3xl md:text-4xl font-semibold text-white">
            AI Battle Running
          </h2>

          <p className="mx-auto mt-3 max-w-md sm:max-w-xl text-xs sm:text-sm text-zinc-500 leading-6 sm:leading-7">
            Models are generating responses and judge is preparing evaluation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-5 p-4 sm:p-6 md:p-8">

          <div className="rounded-xl border border-white/10 bg-black/40 p-4 sm:p-5 md:p-6">
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="h-2 w-2 animate-pulse rounded-full bg-blue-400" />
              <span className="text-sm font-medium text-white">
                Mistral AI
              </span>
            </div>

            <p className="mt-2 text-xs sm:text-sm text-zinc-500">
              Generating response
            </p>

            <div className="mt-4 sm:mt-6 space-y-2 sm:space-y-3">
              <div className="h-2 rounded-full bg-white/10 animate-pulse" />
              <div className="h-2 rounded-full bg-white/10 animate-pulse" />
              <div className="h-2 w-2/3 rounded-full bg-white/10 animate-pulse" />
            </div>
          </div>

          <div className="rounded-xl border border-white/10 bg-black/40 p-4 sm:p-5 md:p-6">
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="h-2 w-2 animate-pulse rounded-full bg-cyan-400" />
              <span className="text-sm font-medium text-white">
                Cohere AI
              </span>
            </div>

            <p className="mt-2 text-xs sm:text-sm text-zinc-500">
              Generating response
            </p>

            <div className="mt-4 sm:mt-6 space-y-2 sm:space-y-3">
              <div className="h-2 rounded-full bg-white/10 animate-pulse" />
              <div className="h-2 rounded-full bg-white/10 animate-pulse" />
              <div className="h-2 w-2/3 rounded-full bg-white/10 animate-pulse" />
            </div>
          </div>

          <div className="rounded-xl border border-white/10 bg-black/40 p-4 sm:p-5 md:p-6">
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="h-2 w-2 animate-pulse rounded-full bg-yellow-400" />
              <span className="text-sm font-medium text-white">
                Judge
              </span>
            </div>

            <p className="mt-2 text-xs sm:text-sm text-zinc-500">
              Waiting
            </p>

            <div className="mt-4 sm:mt-6 space-y-2 sm:space-y-3">
              <div className="h-2 rounded-full bg-white/10 animate-pulse" />
              <div className="h-2 rounded-full bg-white/10 animate-pulse" />
              <div className="h-2 w-2/3 rounded-full bg-white/10 animate-pulse" />
            </div>
          </div>

        </div>

        <div className="border-t border-white/10 px-5 sm:px-7 md:px-8 py-5 sm:py-7">
          <div className="flex items-center justify-between text-xs sm:text-sm text-zinc-500">
            <span>Processing</span>
            <span className="text-blue-400">Live</span>
          </div>

          <div className="mt-3 h-1.5 rounded-full bg-white/10 overflow-hidden">
            <div className="h-full w-full animate-pulse bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-400" />
          </div>

          <p className="mt-4 text-center text-xs sm:text-sm text-zinc-500">
            Evaluating responses...
          </p>
        </div>

      </div>
    </div>
  );
}

export default LoadingArena;