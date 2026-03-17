import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import leaderboardData from "@/data/leaderboard.json";

export const metadata = {
  title: "Leaderboard — Lefty Reset",
  description: "Live leaderboard for the Lefty Reset 60-Day Transformation Challenge.",
};

const medals = ["🥇", "🥈", "🥉"];

export default function LeaderboardPage() {
  const { currentWeek, lastUpdated, challengeStarted, participants, sampleParticipants } = leaderboardData as {
    currentWeek: number;
    lastUpdated: string;
    challengeStarted: boolean;
    participants: { rank: number; handle: string; percentLost: number; streak: number; isFinalist?: boolean }[];
    sampleParticipants: { rank: number; handle: string; percentLost: number; streak: number; isFinalist?: boolean }[];
  };

  return (
    <>
      <Nav />
      <main className="pt-20 min-h-screen bg-white">

        {/* HEADER */}
        <section className="bg-[#2B4141] py-20 px-6 text-center">
          <p className="text-[#34E4EA] text-sm font-black uppercase tracking-[0.3em] mb-4">
            {challengeStarted ? `Week ${currentWeek} Standings` : "Challenge Not Started Yet"}
          </p>
          <h1 className="text-5xl font-black text-white mb-4">Leaderboard</h1>
          <p className="text-white/50 text-sm">
            Last updated: {lastUpdated} · Handles only — weights are always private
          </p>
        </section>

        {/* LEADERBOARD */}
        <section className="max-w-3xl mx-auto px-6 py-16">
          {!challengeStarted ? (
            <div className="py-6">
              {/* Pre-launch banner */}
              <div className="text-center mb-12">
                <div className="w-16 h-1 bg-[#0EB1D2] rounded-full mx-auto mb-8" />
                <h2 className="text-2xl font-black text-[#2B4141] mb-3">The challenge starts April 1.</h2>
                <p className="text-[#2B4141]/60 text-lg mb-8">
                  Register now to secure your spot. The leaderboard goes live on Day 1.
                </p>
                <a
                  href="/register?plan=free"
                  className="inline-block bg-[#0EB1D2] hover:bg-[#34E4EA] text-white font-black px-10 py-5 rounded-full uppercase tracking-wide transition-all duration-300 hover:scale-[1.03]"
                >
                  Join Free →
                </a>
              </div>

              {/* Sample preview */}
              <div className="mb-6 flex items-center gap-4">
                <div className="flex-1 h-px bg-[#e8e5e0]" />
                <span className="text-xs font-black uppercase tracking-[0.3em] text-[#2B4141]/30">Sample Preview</span>
                <div className="flex-1 h-px bg-[#e8e5e0]" />
              </div>
              <div className="flex flex-col gap-4 opacity-70">
                <div className="grid grid-cols-12 px-4 text-xs font-black text-[#2B4141]/40 uppercase tracking-widest">
                  <span className="col-span-1">Rank</span>
                  <span className="col-span-7">Participant</span>
                  <span className="col-span-2 text-center">% Lost</span>
                  <span className="col-span-2 text-center">Streak</span>
                </div>
                {sampleParticipants.map((p, i) => (
                  <div
                    key={p.rank}
                    className={`grid grid-cols-12 items-center rounded-2xl px-6 py-5 ${
                      i === 0
                        ? "bg-[#2B4141] text-white"
                        : i === 1
                        ? "bg-[#0EB1D2] text-white"
                        : i === 2
                        ? "bg-[#8AB9B5] text-[#2B4141]"
                        : "bg-[#C8C2AE]/30 text-[#2B4141]"
                    }`}
                  >
                    <span className="col-span-1 text-2xl">
                      {i < 3 ? medals[i] : <span className="text-base font-black opacity-50">#{p.rank}</span>}
                    </span>
                    <div className="col-span-7">
                      <p className="font-black text-lg">{p.handle}</p>
                    </div>
                    <div className="col-span-2 text-center">
                      <p className="font-black text-xl">{p.percentLost}%</p>
                      <p className="text-xs opacity-50">lost</p>
                    </div>
                    <div className="col-span-2 text-center">
                      <p className="font-black text-xl">{p.streak}/8</p>
                      <p className="text-xs opacity-50">check-ins</p>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-center text-xs text-[#2B4141]/30 mt-6 uppercase tracking-widest font-black">
                Sample data — not real participants
              </p>
            </div>
          ) : participants.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-[#2B4141]/40 text-lg">No check-ins submitted yet. Check back soon.</p>
            </div>
          ) : (
            <div className="flex flex-col gap-4">
              {/* Column headers */}
              <div className="grid grid-cols-12 px-4 text-xs font-black text-[#2B4141]/40 uppercase tracking-widest">
                <span className="col-span-1">Rank</span>
                <span className="col-span-7">Participant</span>
                <span className="col-span-2 text-center">% Lost</span>
                <span className="col-span-2 text-center">Streak</span>
              </div>

              {participants.map((p: { rank: number; handle: string; percentLost: number; streak: number; isFinalist?: boolean }, i) => (
                <div
                  key={p.rank}
                  className={`grid grid-cols-12 items-center rounded-2xl px-6 py-5 ${
                    i === 0
                      ? "bg-[#2B4141] text-white"
                      : i === 1
                      ? "bg-[#0EB1D2] text-white"
                      : i === 2
                      ? "bg-[#8AB9B5] text-[#2B4141]"
                      : "bg-[#C8C2AE]/30 text-[#2B4141]"
                  }`}
                >
                  <span className="col-span-1 text-2xl">
                    {i < 3 ? medals[i] : <span className="text-base font-black opacity-50">#{p.rank}</span>}
                  </span>
                  <div className="col-span-7">
                    <p className="font-black text-lg">{p.handle}</p>
                    {p.isFinalist && (
                      <span className="text-xs font-black uppercase tracking-wide opacity-70">⭐ Finalist</span>
                    )}
                  </div>
                  <div className="col-span-2 text-center">
                    <p className="font-black text-xl">{p.percentLost}%</p>
                    <p className="text-xs opacity-50">lost</p>
                  </div>
                  <div className="col-span-2 text-center">
                    <p className="font-black text-xl">{p.streak}/8</p>
                    <p className="text-xs opacity-50">check-ins</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* HOW RANKING WORKS */}
        <section className="bg-[#C8C2AE]/30 py-16 px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-black text-[#2B4141] mb-6">How Rankings Work</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl p-6">
                <p className="text-[#0EB1D2] font-black uppercase text-xs tracking-widest mb-2">Track 1</p>
                <h3 className="font-black text-[#2B4141] text-lg mb-2">% Body Weight Lost</h3>
                <p className="text-[#2B4141]/70 text-sm leading-relaxed">
                  Rankings are based on percentage of starting body weight lost — not total pounds. This keeps the competition fair for everyone regardless of starting size.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-6">
                <p className="text-[#0EB1D2] font-black uppercase text-xs tracking-widest mb-2">Track 2</p>
                <h3 className="font-black text-[#2B4141] text-lg mb-2">Fan Vote Winner</h3>
                <p className="text-[#2B4141]/70 text-sm leading-relaxed">
                  The community votes for the most inspiring transformation story. You don&apos;t have to be #1 on the leaderboard to win this one.
                </p>
              </div>
            </div>
            <p className="text-[#2B4141]/40 text-xs mt-6 text-center">
              Leaderboard updated every Friday. Handles only — actual weights are never shown publicly.
            </p>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
