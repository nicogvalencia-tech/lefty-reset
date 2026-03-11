export default function Footer() {
  return (
    <footer className="bg-[#2B4141] text-white/60 py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
        <p className="font-bold text-white text-base">
          Lefty<span className="text-[#34E4EA]"> Reset</span> — 60-Day Transformation Challenge
        </p>
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
            href="https://www.tiktok.com/@nicothelefty"
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
