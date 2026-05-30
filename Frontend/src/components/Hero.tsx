import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#050816] text-white">
      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-40 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-[180px]" />
        <div className="absolute right-0 top-0 h-[350px] w-[350px] bg-blue-400/5 blur-[140px]" />
      </div>

      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 text-center">
        <div className="mb-10 rounded-[32px] border border-white/10 bg-black/60 px-10 py-8 backdrop-blur-2xl">
          <img
            src={logo}
            alt="logo"
            className="mx-auto w-[420px] max-w-full object-contain"
          />
        </div>

        <h1 className="text-5xl font-semibold leading-tight md:text-7xl">
          Compare
          <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            AI Against AI
          </span>
        </h1>

        <p className="mt-6 max-w-2xl text-zinc-400">
          Run prompts across AI models and compare results in real-time.
        </p>

        <div className="mt-10 flex gap-4">
          <Link
            to="/arena"
            className="rounded-full bg-blue-500 px-8 py-3 font-medium text-black hover:scale-105 transition"
          >
            Enter Arena
          </Link>

          <a
            href="#features"
            className="rounded-full border border-white/10 bg-white/5 px-8 py-3 text-white hover:bg-white/10 transition"
          >
            Features
          </a>
        </div>

        <div className="mt-16 grid w-full max-w-4xl grid-cols-1 gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-black/40 p-6">
            <h3 className="text-3xl font-semibold">3</h3>
            <p className="mt-2 text-sm text-zinc-400">AI Models</p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-black/40 p-6">
            <h3 className="text-3xl font-semibold">1</h3>
            <p className="mt-2 text-sm text-zinc-400">AI Judge</p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-black/40 p-6">
            <h3 className="text-3xl font-semibold">∞</h3>
            <p className="mt-2 text-sm text-zinc-400">Battles</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;