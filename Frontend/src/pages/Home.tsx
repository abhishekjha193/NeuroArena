import Navbar from "../components/Navbar";
import Orb from "../components/Orb";

function Home() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden flex flex-col">
      <Navbar />

      <div className="relative flex-1 flex items-center justify-center px-6">
        <div className="absolute inset-0">
          <Orb
            hoverIntensity={1.6}
            rotateOnHover
            hue={210}
            forceHoverState={false}
            backgroundColor="#000000"
          />
        </div>

        <div className="relative z-10 text-center max-w-3xl">
          <h1 className="text-4xl md:text-7xl font-semibold leading-tight">
            AI Models
            <span className="block bg-gradient-to-r from-yellow-400 to-cyan-400 bg-clip-text text-transparent">
              Battle Arena
            </span>
          </h1>

          <p className="mt-6 text-sm md:text-lg text-zinc-400 leading-relaxed">
            Compare top AI models in real time.
          </p>

          <div className="mt-10 flex justify-center">
            <a
              href="/arena"
              className="rounded-full bg-white px-8 py-3 text-black font-bold hover:scale-105 transition"
            >
              Enter Arena
            </a>
          </div>
        </div>
      </div>

      <footer className=" bg-black/60 backdrop-blur-xl px-6 py-8">
        <div className="mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <p className="text-sm text-zinc-500">
            © 2026 Abhishek Jha. All rights reserved.
          </p>

          <div className="flex flex-wrap justify-center gap-6 text-sm text-zinc-500">
            <a className="hover:text-cyan-400 transition" href="https://www.linkedin.com/in/abhishek-jha-594b31268">
              LinkedIn
            </a>
            <a className="hover:text-cyan-400 transition" href="https://www.instagram.com/thecode_director/">
              Instagram
            </a>
            <a className="hover:text-cyan-400 transition" href="https://x.com/Abhishek_Jha_10">
              Twitter
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;