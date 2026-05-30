import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo2.png";

function Navbar() {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 border-white/5 bg-black/90 backdrop-blur-xl">
      <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-6">

        <Link to="/" className="flex items-center">
          <img
            src={logo}
            alt="logo"
            className="h-45 w-45 object-contain transition-transform duration-300 hover:scale-105"
          />
        </Link>

        <nav className="hidden md:flex items-center gap-1 rounded-full border border-white/10 bg-white/5 p-1">
          <Link
            to="/"
            className={`px-6 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
              isActive("/")
                ? "bg-white text-black"
                : "text-zinc-400 hover:text-white hover:bg-white/10"
            }`}
          >
            Home
          </Link>

          <Link
            to="/arena"
            className={`px-6 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
              isActive("/arena")
                ? "bg-white text-black"
                : "text-zinc-400 hover:text-white hover:bg-white/10"
            }`}
          >
            Arena
          </Link>
        </nav>

        <div className="flex items-center gap-3 sm:gap-4">

          <div className="hidden md:flex items-center gap-2 rounded-full border border-emerald-500/10 bg-emerald-500/5 px-4 py-2">
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
            <span className="text-xs text-emerald-300">
              System Active
            </span>
          </div>

          <Link
            to={location.pathname === "/arena" ? "/" : "/arena"}
            className="rounded-full bg-white px-5 sm:px-6 py-2 text-sm font-semibold text-black transition hover:scale-105 hover:bg-zinc-200"
          >
            {location.pathname === "/arena" ? "Go Home" : "Launch Arena →"}
          </Link>

        </div>

      </div>
    </header>
  );
}

export default Navbar;