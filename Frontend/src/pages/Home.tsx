import { useRef } from "react";
import Navbar from "../components/Navbar";
import Orb from "../components/Orb";
import workflowVideo from "../assets/workflow.mp4";

function Home() {
  const workRef = useRef<HTMLDivElement>(null);
  const scrollToWork = () =>
    workRef.current?.scrollIntoView({ behavior: "smooth" });

  return (
    <div className="min-h-screen bg-black text-white flex flex-col overflow-hidden">
      <Navbar />

      <section className="relative h-[92vh] flex items-center justify-center px-6">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-full max-w-5xl h-full">
            <Orb
              hoverIntensity={1.4}
              rotateOnHover
              hue={210}
              forceHoverState={false}
              backgroundColor="#000000"
            />
          </div>
        </div>

        <div className="relative z-10 text-center max-w-3xl">
          <h1 className="text-3xl md:text-6xl font-semibold leading-tight">
            AI Models
            <span className="block bg-gradient-to-r from-yellow-400 to-cyan-400 bg-clip-text text-transparent">
              Battle Arena
            </span>
          </h1>

          <p className="mt-4 text-sm md:text-base text-zinc-400">
            Compare AI models in real time
          </p>

          <div className="mt-7 flex flex-col items-center gap-3">
            <button className="group relative overflow-hidden rounded-full bg-white px-7 py-3 font-bold text-black transition hover:scale-105 hover:shadow-[0_0_25px_rgba(255,255,255,0.2)]">
              <span className="relative z-10">AI Arena</span>
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-black/10 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            </button>

            <button
              onClick={scrollToWork}
              className="mt-10 w-11 h-11 flex items-center justify-center rounded-full border border-white/20 bg-white/5 backdrop-blur-xl text-white text-xl hover:bg-white/10 transition animate-bounce"
            >
              ↓
            </button>
          </div>
        </div>
      </section>

      <section
        ref={workRef}
        className="px-4 md:px-6 pb-16 -mt-6"
      >
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-4xl font-semibold">
              How It Works
            </h2>
            <p className="mt-2 text-zinc-500 text-sm">
              One Prompt → Multiple Models → Best Answer
            </p>
          </div>

          <div className="rounded-[28px] border border-white/10 bg-white/[0.02] backdrop-blur-xl p-4 md:p-6">
            <div className="grid lg:grid-cols-[1.4fr_420px] gap-6 items-center">
              <div className="relative">
                <div className="absolute -inset-3 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-yellow-500/10 blur-2xl rounded-[30px]" />

                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="relative w-full rounded-2xl border border-white/10"
                >
                  <source src={workflowVideo} type="video/mp4" />
                </video>
              </div>

              <div className="space-y-2">
                <div className="rounded-xl border border-cyan-500/10 bg-white/[0.03] p-3">
                  <div className="text-cyan-400 text-xs">STEP 01</div>
                  <h3 className="text-base font-semibold">Submit Prompt</h3>
                  <p className="text-xs text-zinc-500">
                    Enter coding or reasoning task.
                  </p>
                </div>

                <div className="rounded-xl border border-yellow-500/10 bg-white/[0.03] p-3">
                  <div className="text-yellow-400 text-xs">STEP 02</div>
                  <h3 className="text-base font-semibold">Models Compete</h3>
                  <p className="text-xs text-zinc-500">
                    Multiple AI models respond.
                  </p>
                </div>

                <div className="rounded-xl border border-purple-500/10 bg-white/[0.03] p-3">
                  <div className="text-purple-400 text-xs">STEP 03</div>
                  <h3 className="text-base font-semibold">AI Judge</h3>
                  <p className="text-xs text-zinc-500">
                    Evaluates best response.
                  </p>
                </div>

                <div className="rounded-xl border border-green-500/10 bg-white/[0.03] p-3">
                  <div className="text-green-400 text-xs">STEP 04</div>
                  <h3 className="text-base font-semibold">Final Result</h3>
                  <p className="text-xs text-zinc-500">
                    Best answer is ranked.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-5 flex flex-wrap items-center justify-center gap-2 text-xs md:text-sm text-zinc-400">
              <span className="px-3 py-1 rounded-full border border-white/10">
                Prompt
              </span>
              <span>→</span>
              <span className="px-3 py-1 rounded-full border border-white/10">
                Models
              </span>
              <span>→</span>
              <span className="px-3 py-1 rounded-full border border-white/10">
                Judge
              </span>
              <span>→</span>
              <span className="px-3 py-1 rounded-full border border-cyan-500/20 bg-cyan-500/5 text-cyan-300">
                Result
              </span>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-black/60 backdrop-blur-xl px-6 py-5 border-white/5">
        <div className="mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-3 text-center md:text-left">
          <p className="text-xs text-zinc-500">
            © 2026 Abhishek Jha
          </p>

          <div className="flex gap-4 text-xs text-zinc-500">
            <a className="hover:text-cyan-400 transition" href="#">LinkedIn</a>
            <a className="hover:text-cyan-400 transition" href="#">Instagram</a>
            <a className="hover:text-cyan-400 transition" href="#">Twitter</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;