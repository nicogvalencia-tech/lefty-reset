"use client";

export default function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#2B4141]/95 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <span className="text-white font-black text-lg tracking-wide uppercase">
          Lefty<span className="text-[#34E4EA]"> Reset</span>
        </span>
        <div className="flex items-center gap-4">
          <a
            href="/#how-it-works"
            className="text-white/70 hover:text-white text-sm font-semibold tracking-wide uppercase transition-colors hidden sm:block"
          >
            How It Works
          </a>
          <a
            href="/#prizes"
            className="text-white/70 hover:text-white text-sm font-semibold tracking-wide uppercase transition-colors hidden sm:block"
          >
            Prizes
          </a>
          <a
            href="/leaderboard"
            className="text-white/70 hover:text-white text-sm font-semibold tracking-wide uppercase transition-colors hidden sm:block"
          >
            Leaderboard
          </a>
          <a
            href="/register"
            className="bg-[#0EB1D2] hover:bg-[#34E4EA] text-white font-black text-sm px-5 py-2 rounded-full uppercase tracking-wide transition-colors shadow-md shadow-[#0EB1D2]/40"
          >
            Join Free
          </a>
        </div>
      </div>
    </nav>
  );
}
