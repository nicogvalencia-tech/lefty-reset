import Image from "next/image";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const steps = [
  {
    number: "01",
    title: "Sign Up Free",
    body: "Enter your name, email, and starting weight. No credit card needed. Latecomers can join anytime in the first 30 days.",
  },
  {
    number: "02",
    title: "Submit Your Starting Check-In",
    body: "Log your Day 1 stats and an optional starting photo. This is your baseline — everything is measured from here.",
  },
  {
    number: "03",
    title: "Check In Every Week",
    body: "Each week, submit your updated weight. Consistency is everything — the more check-ins you complete, the better your eligibility.",
  },
  {
    number: "04",
    title: "Post Your Journey",
    body: "Share wins, meals, workouts, and moments on Instagram or TikTok using #LeftyTransformation. Get featured, get cheered on, get inspired.",
  },
  {
    number: "05",
    title: "Submit Your Final Check-In",
    body: "Lock in your official result on Day 60. This is your finish line.",
  },
  {
    number: "06",
    title: "Community Votes",
    body: "Finalist transformation stories are shared (no sensitive data). The community votes for their favorite.",
  },
];

const prizes = [
  {
    place: "Grand Prize",
    prize: "$1,000 Cash",
    sub: "",
    highlight: true,
  },
  { place: "2nd Place", prize: "Premium Pickleball Paddle Package", sub: "", highlight: false },
  { place: "3rd Place", prize: "Apparel + Gear Bundle", sub: "", highlight: false },
  { place: "Fan Vote Winner", prize: "Community-Voted Transformation Award", sub: "", highlight: false },
];

const freeFeatures = [
  "Full 60-day challenge access",
  "Weekly check-in tracking",
  "Community feed & #LeftyTransformation",
  "Prize eligibility",
];

const premiumFeatures = [
  "Full 60-day challenge access",
  "Weekly check-in tracking",
  "Community feed & #LeftyTransformation",
  "Prize eligibility",
  "8-week coaching video library",
  "Meal & nutrition guides",
  "Weekly workout plans",
  "Private premium members channel",
  "Direct Q&A access with Nico",
];

const faqs = [
  {
    q: "Is this really free?",
    a: "Yes. The full 60-day challenge, community access, and prize eligibility are 100% free. The $49 Premium upgrade is optional and one-time — no subscription, no hidden fees.",
  },
  {
    q: "Who can join?",
    a: "Anyone 18 and up! Designed for pickleball players and fitness-minded people ready to make a real change. You can join anytime during the first 30 days of the challenge.",
  },
  {
    q: "How are winners determined?",
    a: "Track 1 (Greatest % Body Weight Lost) is calculated by formula from your submitted weekly check-ins. Track 2 (Community Transformation Award) is voted on by the community at the end.",
  },
  {
    q: "Do I have to share my actual weight publicly?",
    a: "Never. The leaderboard only displays your name or social handle. Your weight data is private and used only for prize tracking with your consent.",
  },
  {
    q: "What's the $49 Premium upgrade?",
    a: "A one-time payment that unlocks 8 weeks of coaching videos, meal guides, workout plans, a private members channel, and direct Q&A access with Nico on Skool.",
  },
  {
    q: "What if I miss a weekly check-in?",
    a: "You can still participate, but consistent check-ins are required for prize eligibility. We'll send you reminders every week.",
  },
];

export default function Home() {
  return (
    <>
      <Nav />
      <main className="font-body">

        {/* HERO */}
        <section className="relative bg-[#2B4141] text-white min-h-screen flex items-center pt-20">
          <Image
            src="/images/gabin-vallet-J154nEkpzlQ-unsplash.jpg"
            alt="Community running together"
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="relative max-w-6xl mx-auto px-6 py-24 text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="relative w-10 h-10 rounded-full overflow-hidden shrink-0">
                <Image
                  src="/images/IMG_0897.jpeg"
                  alt="Nico the Lefty"
                  fill
                  className="object-cover"
                  style={{ objectPosition: "center 50%" }}
                />
              </div>
              <p className="text-[#34E4EA] text-sm font-black uppercase tracking-[0.3em]">
                Nico the Lefty presents
              </p>
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight mb-3">
              The Lefty Reset
            </h1>
            <p className="text-[#0EB1D2] text-2xl sm:text-3xl font-black uppercase tracking-wide mb-6">
              60-Day Transformation Challenge
            </p>
            <p className="text-white/70 text-xl sm:text-2xl max-w-3xl mx-auto leading-relaxed mb-4">
              A free, community-driven weight loss and fitness challenge built for pickleball players and fitness-minded people who are ready to finally do it.
            </p>
            <p className="text-[#8AB9B5] text-sm font-semibold mb-12">
              Latecomers welcome — registration open for the first 30 days of the challenge.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center" id="register">
              <a
                href="/register"
                className="bg-[#0EB1D2] hover:bg-[#34E4EA] text-white font-black text-lg px-10 py-5 rounded-full uppercase tracking-wide transition-colors shadow-lg shadow-[#0EB1D2]/40"
              >
                Join Free →
              </a>
              <a
                href="#premium"
                className="border-2 border-[#0EB1D2] text-[#0EB1D2] hover:bg-[#0EB1D2] hover:text-white font-black text-lg px-10 py-5 rounded-full uppercase tracking-wide transition-colors shadow-lg shadow-[#0EB1D2]/30"
              >
                Upgrade to Premium — $49
              </a>
            </div>
          </div>
        </section>

        {/* PHOTO GRID */}
        <section className="grid grid-cols-2 sm:grid-cols-4 h-64 sm:h-80">
          <div className="relative overflow-hidden">
            <Image
              src="/images/jon-matthews-mXlWibOKSdA-unsplash.jpg"
              alt="Pickleball player hitting"
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="relative overflow-hidden">
            <Image
              src="/images/unsplash-community-KWpxV0cqAT4-unsplash (1).jpg"
              alt="Pickleball paddles tapping"
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="relative overflow-hidden">
            <Image
              src="/images/vitalii-pavlyshynets-kcRFW-Hje8Y-unsplash.jpg"
              alt="Healthy nutrition"
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="relative overflow-hidden">
            <Image
              src="/images/andrej-lisakov-BVITDGSdpE4-unsplash.jpg"
              alt="Group workout"
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        </section>

        {/* WHAT IS THIS */}
        <section className="bg-[#C8C2AE] py-24 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-[#2B4141]/60 text-sm font-black uppercase tracking-[0.3em] mb-4">What Is This?</p>
            <h2 className="text-4xl sm:text-5xl font-black text-[#2B4141] leading-tight mb-8">
              The Lefty Reset
            </h2>
            <p className="text-[#2B4141]/80 text-xl leading-relaxed mb-6">
              This is 60 days of showing up — tracking your weight, sharing your journey, and competing for over <strong>$1,000 in prizes</strong> alongside a community of people just like you.
            </p>
            <p className="text-[#2B4141]/80 text-xl leading-relaxed">
              No elite athlete status required. No expensive equipment. No complicated program. Just you, your goals, and a community of pickleball players who actually get it.
            </p>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="bg-white py-24 px-6" id="how-it-works">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-[#0EB1D2] text-sm font-black uppercase tracking-[0.3em] mb-4">Step by Step</p>
              <h2 className="text-4xl sm:text-5xl font-black text-[#2B4141]">How It Works</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {steps.map((step) => (
                <div key={step.number} className="flex gap-5">
                  <span className="text-4xl font-black text-[#34E4EA] leading-none shrink-0">{step.number}</span>
                  <div>
                    <h3 className="text-lg font-black text-[#2B4141] mb-2">{step.title}</h3>
                    <p className="text-[#2B4141]/70 leading-relaxed">{step.body}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-[#2B4141] rounded-3xl px-10 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
              <div>
                <p className="text-[#34E4EA] text-xs font-black uppercase tracking-[0.3em] mb-1">Then...</p>
                <h3 className="text-white text-2xl font-black">Winners Announced Live</h3>
                <p className="text-white/60 mt-1">Prizes awarded. Legends made. Your transformation celebrated.</p>
              </div>
              <a
                href="/register"
                className="shrink-0 bg-[#0EB1D2] hover:bg-[#34E4EA] text-white font-black px-8 py-4 rounded-full uppercase tracking-wide transition-colors shadow-lg shadow-[#0EB1D2]/40"
              >
                Join Free →
              </a>
            </div>
          </div>
        </section>

        {/* TWO WAYS TO WIN */}
        <section className="bg-[#2B4141] py-24 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-[#34E4EA] text-sm font-black uppercase tracking-[0.3em] mb-4">Competition</p>
              <h2 className="text-4xl sm:text-5xl font-black text-white">Two Ways to Win</h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-8">
              <div className="bg-[#0EB1D2] rounded-3xl p-10">
                <p className="text-[#2B4141] text-xs font-black uppercase tracking-[0.3em] mb-4">Track 1 — Objective</p>
                <h3 className="text-3xl font-black text-[#2B4141] mb-4">Greatest % Body Weight Lost</h3>
                <p className="text-[#2B4141]/80 leading-relaxed mb-6">
                  The participant who loses the highest percentage of their starting body weight by Day 60 wins. Calculated by formula, verified by weekly check-ins.
                </p>
                <p className="text-[#2B4141] text-sm font-bold bg-white/30 rounded-xl px-4 py-3">
                  We use percentage — not total pounds — so everyone competes on a level playing field regardless of starting size.
                </p>
              </div>
              <div className="bg-[#8AB9B5] rounded-3xl p-10">
                <p className="text-[#2B4141] text-xs font-black uppercase tracking-[0.3em] mb-4">Track 2 — Community Voted</p>
                <h3 className="text-3xl font-black text-[#2B4141] mb-4">Community Transformation Award</h3>
                <p className="text-[#2B4141]/80 leading-relaxed mb-6">
                  Community-voted. At the end of the challenge, finalists share their stories and the community votes for the most inspiring journey.
                </p>
                <p className="text-[#2B4141] text-sm font-bold bg-white/30 rounded-xl px-4 py-3">
                  You don&apos;t have to lose the most weight to win this one. You just have to show up.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* PRIZES */}
        <section className="bg-[#C8C2AE] py-24 px-6" id="prizes">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-[#2B4141]/60 text-sm font-black uppercase tracking-[0.3em] mb-4">What You&apos;re Playing For</p>
              <h2 className="text-4xl sm:text-5xl font-black text-[#2B4141]">The Prizes</h2>
            </div>
            <div className="flex flex-col gap-4">
              {prizes.map((item) => (
                <div
                  key={item.place}
                  className={`flex flex-col sm:flex-row sm:items-center justify-between gap-2 rounded-2xl px-8 py-6 ${
                    item.highlight
                      ? "bg-[#2B4141] text-white"
                      : "bg-white text-[#2B4141]"
                  }`}
                >
                  <span className={`text-sm font-black uppercase tracking-widest ${item.highlight ? "text-[#34E4EA]" : "text-[#0EB1D2]"}`}>
                    {item.place}
                  </span>
                  <div className="sm:text-right">
                    <p className={`font-black text-lg ${item.highlight ? "text-white" : "text-[#2B4141]"}`}>{item.prize}</p>
                    {item.sub && <p className={`text-sm ${item.highlight ? "text-white/60" : "text-[#2B4141]/50"}`}>{item.sub}</p>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FREE VS PREMIUM */}
        <section className="bg-white py-24 px-6" id="premium">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-[#0EB1D2] text-sm font-black uppercase tracking-[0.3em] mb-4">Choose Your Experience</p>
              <h2 className="text-4xl sm:text-5xl font-black text-[#2B4141]">Free vs. Premium</h2>
              <p className="text-[#2B4141]/60 mt-4 text-lg">The free tier gets you fully in the challenge. The $49 upgrade gives you the tools to actually win it.</p>
            </div>
            <div className="grid sm:grid-cols-2 gap-8">
              {/* Free */}
              <div className="border-2 border-[#C8C2AE] rounded-3xl p-10">
                <p className="text-[#2B4141]/50 text-sm font-black uppercase tracking-[0.2em] mb-2">Free</p>
                <p className="text-4xl font-black text-[#2B4141] mb-8">$0</p>
                <ul className="flex flex-col gap-3">
                  {freeFeatures.map((f) => (
                    <li key={f} className="flex items-center gap-3 text-[#2B4141]/80">
                      <span className="text-[#0EB1D2] font-black text-lg">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="/register"
                  className="mt-10 block text-center border-2 border-[#2B4141] text-[#2B4141] hover:bg-[#2B4141] hover:text-white font-black px-8 py-4 rounded-full uppercase tracking-wide transition-colors shadow-md shadow-black/20"
                >
                  Join Free
                </a>
              </div>
              {/* Premium */}
              <div className="bg-[#2B4141] rounded-3xl p-10">
                <p className="text-[#34E4EA] text-sm font-black uppercase tracking-[0.2em] mb-2">Premium</p>
                <div className="flex items-end gap-2 mb-1">
                  <p className="text-4xl font-black text-white">$49</p>
                  <p className="text-white/50 mb-1">one-time</p>
                </div>
                <p className="text-white/40 text-sm mb-8">No subscription. No renewals.</p>
                <ul className="flex flex-col gap-3">
                  {premiumFeatures.map((f) => (
                    <li key={f} className="flex items-center gap-3 text-white/80">
                      <span className="text-[#34E4EA] font-black text-lg">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="/register"
                  className="mt-10 block text-center bg-[#0EB1D2] hover:bg-[#34E4EA] text-white font-black px-8 py-4 rounded-full uppercase tracking-wide transition-colors shadow-lg shadow-[#0EB1D2]/40"
                >
                  Upgrade to Premium — $49
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* WHO THIS IS FOR */}
        <section className="bg-[#34E4EA] py-24 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-[#2B4141]/60 text-sm font-black uppercase tracking-[0.3em] mb-4">Is This For You?</p>
              <h2 className="text-4xl sm:text-5xl font-black text-[#2B4141]">Who This Is For</h2>
            </div>
            <ul className="flex flex-col gap-5">
              {[
                "Pickleball players who want to feel lighter and stronger on and off the court",
                "Anyone 18+ who's done with going it alone and wants real accountability",
                "People who've tried diets before and need a community, not a punishment",
                "Players who are ready to make the transformation they keep talking about",
              ].map((item) => (
                <li key={item} className="flex items-start gap-4 bg-white/40 rounded-2xl px-8 py-5">
                  <span className="text-[#2B4141] font-black text-2xl leading-none mt-0.5">→</span>
                  <p className="text-[#2B4141] font-bold text-lg leading-snug">{item}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* FROM NICO */}
        <section className="bg-[#2B4141] py-24 px-6">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-[#34E4EA] text-sm font-black uppercase tracking-[0.3em] mb-10">From the Creator</p>
            <blockquote className="text-white text-2xl sm:text-3xl font-light leading-relaxed italic mb-10">
              &ldquo;I&apos;m a lefty. I&apos;ve always done things a little differently — and this challenge is no different. It&apos;s not about perfection. It&apos;s about showing up for 60 days and letting a community of pickleball players push you further than you&apos;d go alone. I&apos;ve seen what happens when this community locks in on a goal together. The energy is unreal. Let&apos;s do this.&rdquo;
            </blockquote>
            <div className="flex items-center justify-center gap-4">
              <div className="relative w-14 h-14 rounded-full overflow-hidden shrink-0">
                <Image
                  src="/images/IMG_0897.jpeg"
                  alt="Nico the Lefty"
                  fill
                  className="object-cover"
                  style={{ objectPosition: "center 50%" }}
                />
              </div>
              <div className="text-left">
                <p className="text-white font-black">Nico the Lefty</p>
                <p className="text-white/50 text-sm">DUPR Master Instructor · Co-Host of PicklePod</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-white py-24 px-6">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-[#0EB1D2] text-sm font-black uppercase tracking-[0.3em] mb-4">Got Questions?</p>
              <h2 className="text-4xl sm:text-5xl font-black text-[#2B4141]">FAQ</h2>
            </div>
            <div className="flex flex-col gap-6">
              {faqs.map((item) => (
                <div key={item.q} className="border-b border-[#C8C2AE] pb-6">
                  <h3 className="text-[#2B4141] font-black text-lg mb-2">{item.q}</h3>
                  <p className="text-[#2B4141]/70 leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="bg-[#0EB1D2] py-24 px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl sm:text-5xl font-black text-[#2B4141] leading-tight mb-6">
              Your transformation starts with one decision.
            </h2>
            <p className="text-[#2B4141]/80 text-xl leading-relaxed mb-12">
              Join pickleball players and fitness enthusiasts who are ready to make the next 60 days count. It&apos;s free. The community is waiting. And the prizes are real.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/register"
                className="bg-[#2B4141] hover:bg-[#2B4141]/80 text-white font-black text-lg px-10 py-5 rounded-full uppercase tracking-wide transition-colors shadow-lg shadow-black/30"
              >
                Join Free →
              </a>
              <a
                href="#premium"
                className="border-2 border-[#2B4141] text-[#2B4141] hover:bg-[#2B4141] hover:text-white font-black text-lg px-10 py-5 rounded-full uppercase tracking-wide transition-colors shadow-md shadow-black/20"
              >
                Upgrade to Premium — $49
              </a>
            </div>
            <p className="text-[#2B4141]/60 text-sm mt-8">No credit card required to join free. Premium is a one-time $49 payment — no subscription.</p>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
