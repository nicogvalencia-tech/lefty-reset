import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const benefits = [
  {
    q: "What prizes am I eligible for?",
    a: "All members — free and Premium — are eligible for every prize: the $1,000 Grand Prize (greatest % body weight lost), the Fan Vote winner package (4-month 1-on-1 coaching from That Pickleball Trainer, valued at $2,400), and weekly giveaways for every active check-in throughout the challenge.",
  },
  {
    q: "What are the weekly giveaways?",
    a: "Every week of the challenge, any member who submits their weekly check-in is automatically entered into that week's giveaway. The more weeks you check in, the more chances you have to win. Prizes are announced weekly on Skool and social.",
  },
  {
    q: "What is the Fan Vote?",
    a: "At the end of the 60-day challenge, finalist transformation stories are shared with the community (no sensitive data — just your story and photos if you choose to share). The community votes for the most inspiring transformation. The winner receives a 4-month 1-on-1 coaching package from That Pickleball Trainer, valued at $2,400. All members are eligible.",
  },
  {
    q: "What live sessions are included?",
    a: "Premium members get access to weekly live Zoom sessions with Nico and expert guests covering fitness, nutrition, pickleball performance, and mindset. Sessions are recorded so you can watch on your own schedule if you can't make it live.",
  },
  {
    q: "What is the private members channel?",
    a: "Premium members get access to a private channel inside the Skool community. This is where Nico is most active — answering questions, sharing extra tips, and giving direct feedback. It's a smaller, more focused group than the main community feed.",
  },
  {
    q: "How do I get direct Q&A access with Nico?",
    a: "Inside the private Premium channel on Skool, you can post questions directly to Nico at any time. Nico checks in regularly and responds personally. This is the fastest way to get feedback on your training, nutrition, or game.",
  },
  {
    q: "Is Premium worth it if I'm just doing this for fitness, not pickleball?",
    a: "Absolutely. The live sessions, private coaching access, and prize eligibility are valuable regardless of your pickleball level. The Fan Vote winner is chosen based on transformation story and community inspiration — not athletic performance.",
  },
  {
    q: "When does my Premium access start?",
    a: "Immediately after payment. You'll get access to the private channel, live session schedule, and weekly giveaway eligibility right away. The challenge itself starts April 1.",
  },
  {
    q: "What happens to my Premium access after the 60 days?",
    a: "Your Premium membership continues on its current billing cycle. The community stays active after the challenge ends — Nico plans to keep the group going with ongoing content, events, and future challenges.",
  },
];

export default function PremiumPage() {
  return (
    <div className="min-h-screen bg-[#F5F2EC]">
      <Nav />
      <div className="max-w-3xl mx-auto px-6 py-24">

        <div className="text-center mb-16">
          <p className="text-[#0EB1D2] text-xs font-black uppercase tracking-[0.4em] mb-3">Premium Membership</p>
          <h1 className="text-5xl font-black text-[#2B4141] mb-6">Everything You Get with Premium</h1>
          <p className="text-[#2B4141]/60 text-lg leading-relaxed max-w-xl mx-auto">
            Live sessions, private coaching access, and weekly giveaways. Here&apos;s exactly what&apos;s included.
          </p>
          <div className="flex items-center justify-center gap-3 mt-6 mb-2">
            <span className="text-2xl font-black text-[#2B4141] line-through opacity-40">$99</span>
            <span className="text-3xl font-black text-[#0EB1D2]">$49</span>
            <span className="bg-[#34E4EA]/20 text-[#0EB1D2] text-xs font-black uppercase tracking-wide px-3 py-1 rounded-full">Limited launch pricing</span>
          </div>
          <a
            href="/register?plan=premium"
            className="inline-block mt-4 bg-[#0EB1D2] hover:bg-[#34E4EA] text-white font-black text-lg px-10 py-5 rounded-full uppercase tracking-wide transition-all duration-300 hover:scale-[1.02]"
          >
            Upgrade to Premium — $49 →
          </a>
        </div>

        <div className="grid grid-cols-3 gap-6 mb-16">
          {[
            { value: "$1,000", label: "Grand Prize" },
            { value: "$2,400", label: "Fan Vote Prize" },
            { value: "$5,000+", label: "Total Prizes" },
          ].map((stat) => (
            <div key={stat.label} className="text-center bg-white rounded-2xl py-8 px-4 shadow-sm">
              <p className="text-3xl font-black text-[#0EB1D2]">{stat.value}</p>
              <p className="text-sm font-black text-[#2B4141]/60 uppercase tracking-wide mt-1">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-4">
          {benefits.map((item, i) => (
            <div key={i} className="bg-white rounded-2xl px-8 py-7 shadow-sm">
              <h3 className="text-lg font-black text-[#2B4141] mb-3">{item.q}</h3>
              <p className="text-[#2B4141]/60 leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-[#2B4141]/40 text-sm mb-6">Ready to go all in?</p>
          <a
            href="/register?plan=premium"
            className="inline-block bg-[#0EB1D2] hover:bg-[#34E4EA] text-white font-black text-lg px-10 py-5 rounded-full uppercase tracking-wide transition-all duration-300 hover:scale-[1.02]"
          >
            Upgrade to Premium — $49 →
          </a>
        </div>

      </div>
      <Footer />
    </div>
  );
}
