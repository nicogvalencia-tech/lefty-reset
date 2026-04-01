"use client";

import Image from "next/image";

export default function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#2B4141]/95 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <a href="/" className="text-white font-black text-lg tracking-wide uppercase hover:opacity-80 transition-opacity duration-200">
            Lefty<span className="text-[#34E4EA]"> Reset</span>
          </a>
          <div className="hidden sm:flex items-center gap-2 border-l border-white/20 pl-3">
            <span className="text-white/60 text-sm font-semibold uppercase tracking-widest">Powered by</span>
            <a href="https://sqairz.com/collections/all-pickleball-footwear" target="_blank" rel="noopener noreferrer">
              <Image
                src="/images/sqairz_logo_mark_white.png"
                alt="Sqairz"
                width={144}
                height={144}
                className="opacity-90 hover:opacity-100 transition-opacity duration-200"
              />
            </a>
          </div>
        </div>
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
