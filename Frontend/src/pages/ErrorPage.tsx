import { Link } from "react-router-dom";
import errorImage from "../assets/error.png";

function ErrorPage() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-6">
      <div className="relative flex flex-col items-center text-center">
        <div className="absolute w-80 h-80 bg-cyan-500/10 blur-[120px] rounded-full" />

<img
  src={errorImage}
  alt="404"
  className="w-full max-w-[420px] sm:max-w-[600px] md:max-w-[700px] lg:max-w-[750px] xl:max-w-[800px] relative z-10 drop-shadow-2xl"
/>
        <h1 className="mt-6 text-6xl font-bold text-white tracking-widest">
          404
        </h1>

        <p className="mt-3 text-white/40 text-sm">Error</p>

        <Link
          to="/"
          className="mt-6 px-6 py-3 rounded-full bg-white/10 border border-white/20 text-white backdrop-blur-md hover:bg-white/20 transition"
        >
          Back Home
        </Link>
      </div>
    </div>
  );
}

export default ErrorPage;
