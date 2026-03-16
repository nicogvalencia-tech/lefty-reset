import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Check-In — Lefty Reset",
  description: "Submit your check-in for the Lefty Reset 60-Day Transformation Challenge.",
};

export default function CheckInPage() {
  return (
    <>
      <Nav />
      <main className="pt-20 min-h-screen bg-white">
        <section className="bg-[#2B4141] py-20 px-6 text-center">
          <p className="text-[#34E4EA] text-xs font-black uppercase tracking-[0.4em] mb-4">Lefty Reset</p>
          <h1 className="text-5xl font-black text-white mb-4">Check-In</h1>
          <p className="text-white/50 text-lg">Select the check-in that applies to you.</p>
        </section>

        <section className="max-w-3xl mx-auto px-6 py-16 flex flex-col gap-6">

          <a href="/checkin/start" className="group bg-[#f7f7f5] hover:bg-[#2B4141] border border-[#e8e5e0] rounded-2xl px-10 py-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 transition-all duration-300">
            <div>
              <p className="text-[#0EB1D2] text-xs font-black uppercase tracking-[0.3em] mb-2">Day 1</p>
              <h2 className="text-2xl font-black text-[#2B4141] group-hover:text-white transition-colors duration-300">Starting Check-In</h2>
              <p className="text-[#2B4141]/50 group-hover:text-white/50 mt-1 transition-colors duration-300">Your official baseline. Includes codeword and photo verification.</p>
            </div>
            <span className="text-[#0EB1D2] font-black text-2xl shrink-0">→</span>
          </a>

          <a href="/checkin/weekly" className="group bg-[#f7f7f5] hover:bg-[#2B4141] border border-[#e8e5e0] rounded-2xl px-10 py-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 transition-all duration-300">
            <div>
              <p className="text-[#0EB1D2] text-xs font-black uppercase tracking-[0.3em] mb-2">Weeks 1–7</p>
              <h2 className="text-2xl font-black text-[#2B4141] group-hover:text-white transition-colors duration-300">Weekly Check-In</h2>
              <p className="text-[#2B4141]/50 group-hover:text-white/50 mt-1 transition-colors duration-300">Submit your weight each week to stay on the leaderboard.</p>
            </div>
            <span className="text-[#0EB1D2] font-black text-2xl shrink-0">→</span>
          </a>

          <a href="/checkin/final" className="group bg-[#f7f7f5] hover:bg-[#2B4141] border border-[#e8e5e0] rounded-2xl px-10 py-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 transition-all duration-300">
            <div>
              <p className="text-[#0EB1D2] text-xs font-black uppercase tracking-[0.3em] mb-2">Day 60</p>
              <h2 className="text-2xl font-black text-[#2B4141] group-hover:text-white transition-colors duration-300">Final Check-In</h2>
              <p className="text-[#2B4141]/50 group-hover:text-white/50 mt-1 transition-colors duration-300">Your finish line. Includes codeword and photo verification.</p>
            </div>
            <span className="text-[#0EB1D2] font-black text-2xl shrink-0">→</span>
          </a>

        </section>
      </main>
      <Footer />
    </>
  );
}
