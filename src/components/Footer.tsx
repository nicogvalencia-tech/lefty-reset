import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#2B4141] text-white/60 py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
        <div className="flex flex-col items-center sm:items-start gap-2">
          <p className="font-bold text-white text-base">
            Lefty<span className="text-[#34E4EA]"> Reset</span> — 60-Day Transformation Challenge
          </p>
          <div className="flex items-center gap-3">
            <span className="text-white/60 text-lg font-semibold uppercase tracking-widest">Powered by</span>
            <a href="https://sqairz.com/collections/all-pickleball-footwear" target="_blank" rel="noopener noreferrer">
              <Image
                src="/images/sqairz_logo_mark_white.png"
                alt="Sqairz"
                width={162}
                height={162}
                className="opacity-90 hover:opacity-100 transition-opacity duration-200"
              />
            </a>
          </div>
        </div>
        <p>© {new Date().getFullYear()} Nico the Lefty. All rights reserved.</p>
        <div className="flex gap-6">
          <a
            href="https://www.instagram.com/nicothelefty"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            Instagram
          </a>
          <a
            href="https://www.tiktok.com/@nicothelefty_"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            TikTok
          </a>
        </div>
      </div>
    </footer>
  );
}
