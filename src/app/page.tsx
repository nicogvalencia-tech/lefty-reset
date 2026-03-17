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
  { place: "Grand Prize", prize: "$1,000 Cash — Greatest % Body Weight Lost (Premium)", highlight: true },
  { place: "2nd Place", prize: "Premium Pickleball Paddle Package", highlight: false },
  { place: "3rd Place", prize: "Apparel + Gear Bundle", highlight: false },
  { place: "Fan Vote Winner", prize: "Community-Voted Transformation Award", highlight: false },
  { place: "Weekly Giveaways", prize: "Prizes every week for active participants", highlight: false },
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
  "Live Zoom sessions with Nico and expert guests",
];

const faqs = [
  {
    q: "Is this really free?",
    a: "Yes. The full 60-day challenge, community access, and prize eligibility are 100% free. The $99 Premium upgrade is optional and one-time — no subscription, no hidden fees.",
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
    q: "What's the $99 Premium upgrade?",
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
            className="object-cover opacity-50"
            priority
          />
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-[#2B4141]/60" />
          {/* Bottom fade */}
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#2B4141] to-transparent" />
          <div className="relative max-w-5xl mx-auto px-6 py-24 text-center">
            <div className="flex items-center justify-center gap-4 mb-0">
              <div className="relative w-[3.75rem] h-[3.75rem] rounded-full overflow-hidden shrink-0 ring-2 ring-white/20">
                <Image
                  src="/images/IMG_0897.jpeg"
                  alt="Nico the Lefty"
                  fill
                  className="object-cover"
                  style={{ objectPosition: "center 50%" }}
                />
              </div>
              <p className="text-[#34E4EA] text-[1.3rem] font-black uppercase tracking-[0.3em]">
                Nico the Lefty presents
              </p>
            </div>
            <div className="flex justify-center mb-8">
              <Image
                src="/images/The Lefty Reset Logo Light Final.svg"
                alt="The Lefty Reset — 60-Day Transformation Challenge"
                width={560}
                height={200}
                className="w-full max-w-xl"
                priority
              />
            </div>
            <p className="text-white/70 text-xl sm:text-2xl max-w-2xl mx-auto leading-relaxed mb-4">
              A free, community-driven weight loss and fitness challenge built for pickleball players ready to finally do it.
            </p>
            <p className="text-[#8AB9B5] text-sm font-semibold mb-12 tracking-wide">
              Registration open for the first 30 days — latecomers welcome.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/register"
                className="bg-[#0EB1D2] hover:bg-[#34E4EA] text-white font-black text-lg px-12 py-5 rounded-full uppercase tracking-wide transition-all duration-300 hover:scale-[1.03]"
              >
                Join Free →
              </a>
              <a
                href="#premium"
                className="border-2 border-white/30 text-white hover:border-white/70 font-black text-lg px-12 py-5 rounded-full uppercase tracking-wide transition-all duration-300 hover:scale-[1.03]"
              >
                Upgrade to Premium — $99
              </a>
            </div>
          </div>
        </section>

        {/* PHOTO GRID */}
        <section className="grid grid-cols-2 sm:grid-cols-4 h-64 sm:h-96 gap-0.5">
          {[
            { src: "/images/jon-matthews-mXlWibOKSdA-unsplash.jpg", alt: "Pickleball player hitting" },
            { src: "/images/unsplash-community-KWpxV0cqAT4-unsplash (1).jpg", alt: "Pickleball paddles tapping" },
            { src: "/images/vitalii-pavlyshynets-kcRFW-Hje8Y-unsplash.jpg", alt: "Healthy nutrition" },
            { src: "/images/andrej-lisakov-BVITDGSdpE4-unsplash.jpg", alt: "Group workout" },
          ].map((img) => (
            <div key={img.src} className="relative overflow-hidden group">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-[#2B4141]/0 group-hover:bg-[#2B4141]/20 transition-all duration-500" />
            </div>
          ))}
        </section>

        {/* WHAT IS THIS */}
        <section className="bg-white py-24 px-6">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-[#0EB1D2] text-xs font-black uppercase tracking-[0.4em] mb-6">What Is This?</p>
            <h2 className="text-5xl sm:text-6xl font-black text-[#2B4141] leading-tight mb-10">
              The Lefty Reset
            </h2>
            <p className="text-[#2B4141]/70 text-xl sm:text-2xl leading-relaxed mb-6">
              60 days of showing up — tracking your weight, sharing your journey, and competing for over{" "}
              <span className="text-[#2B4141] font-black">$5,000 in cash and prizes</span> alongside a community of people just like you.
            </p>
            <p className="text-[#2B4141]/60 text-lg leading-relaxed">
              No elite athlete status required. No expensive equipment. No complicated program. Just you, your goals, and a community of pickleball players who actually get it.
            </p>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="bg-[#f7f7f5] py-24 px-6" id="how-it-works">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <p className="text-[#0EB1D2] text-xs font-black uppercase tracking-[0.4em] mb-6">Step by Step</p>
              <h2 className="text-5xl sm:text-6xl font-black text-[#2B4141]">How It Works</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-16">
              {steps.map((step) => (
                <div key={step.number} className="group">
                  <span className="block text-7xl font-black text-[#2B4141]/8 leading-none mb-3 group-hover:text-[#0EB1D2]/20 transition-colors duration-300">
                    {step.number}
                  </span>
                  <h3 className="text-lg font-black text-[#2B4141] mb-3">{step.title}</h3>
                  <p className="text-[#2B4141]/60 leading-relaxed">{step.body}</p>
                </div>
              ))}
            </div>
            <div className="bg-[#2B4141] rounded-2xl px-10 py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div>
                <p className="text-[#34E4EA] text-xs font-black uppercase tracking-[0.4em] mb-2">Then...</p>
                <h3 className="text-white text-2xl font-black mb-1">Winners Announced Live</h3>
                <p className="text-white/50">Prizes awarded. Legends made. Your transformation celebrated.</p>
              </div>
              <a
                href="/register"
                className="shrink-0 bg-[#0EB1D2] hover:bg-[#34E4EA] text-white font-black px-8 py-4 rounded-full uppercase tracking-wide transition-all duration-300 hover:scale-[1.03]"
              >
                Join Free →
              </a>
            </div>
          </div>
        </section>

        {/* TWO WAYS TO WIN */}
        <section className="bg-[#2B4141] py-24 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <p className="text-[#34E4EA] text-xs font-black uppercase tracking-[0.4em] mb-6">Competition</p>
              <h2 className="text-5xl sm:text-6xl font-black text-white">Two Ways to Win</h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-[#0EB1D2] rounded-2xl p-10 flex flex-col hover:scale-[1.01] transition-transform duration-300">
                <p className="text-[#2B4141]/60 text-xs font-black uppercase tracking-[0.4em] mb-5">Track 1 — Objective</p>
                <h3 className="text-3xl font-black text-[#2B4141] leading-tight mb-5">Greatest % Body Weight Lost</h3>
                <p className="text-[#2B4141]/80 leading-relaxed mb-8">
                  The participant who loses the highest percentage of their starting body weight by Day 60 wins. Calculated by formula, verified by weekly check-ins.
                </p>
                <p className="mt-auto text-[#2B4141] text-sm font-semibold bg-white/30 rounded-xl px-5 py-4 leading-relaxed">
                  We use percentage — not total pounds — so everyone competes on a level playing field regardless of starting size.
                </p>
              </div>
              <div className="bg-[#8AB9B5] rounded-2xl p-10 flex flex-col hover:scale-[1.01] transition-transform duration-300">
                <p className="text-[#2B4141]/60 text-xs font-black uppercase tracking-[0.4em] mb-5">Track 2 — Community Voted</p>
                <h3 className="text-3xl font-black text-[#2B4141] leading-tight mb-5">Community Transformation Award</h3>
                <p className="text-[#2B4141]/80 leading-relaxed mb-8">
                  Community-voted. At the end of the challenge, finalists share their stories and the community votes for the most inspiring journey.
                </p>
                <p className="mt-auto text-[#2B4141] text-sm font-semibold bg-white/30 rounded-xl px-5 py-4 leading-relaxed">
                  You don&apos;t have to lose the most weight to win this one. You just have to show up.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* PRIZES */}
        <section className="bg-white py-24 px-6" id="prizes">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-20">
              <p className="text-[#0EB1D2] text-xs font-black uppercase tracking-[0.4em] mb-6">What You&apos;re Playing For</p>
              <h2 className="text-5xl sm:text-6xl font-black text-[#2B4141]">The Prizes</h2>
              <p className="text-[#2B4141]/50 mt-4 text-lg">Over $5,000 in cash and prizes — multiple ways to win.</p>
            </div>
            <div className="flex flex-col gap-3">
              {prizes.map((item) => (
                <div
                  key={item.place}
                  className={`flex flex-col sm:flex-row sm:items-center justify-between gap-2 rounded-2xl px-8 py-7 transition-all duration-300 ${
                    item.highlight
                      ? "bg-[#2B4141] text-white"
                      : "bg-[#f7f7f5] text-[#2B4141] hover:bg-[#f0f0ed]"
                  }`}
                >
                  <span className={`text-xs font-black uppercase tracking-[0.3em] ${item.highlight ? "text-[#34E4EA]" : "text-[#0EB1D2]"}`}>
                    {item.place}
                  </span>
                  <p className={`font-black text-xl sm:text-right ${item.highlight ? "text-white" : "text-[#2B4141]"}`}>
                    {item.prize}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FREE VS PREMIUM */}
        <section className="bg-[#f7f7f5] py-24 px-6" id="premium">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-20">
              <p className="text-[#0EB1D2] text-xs font-black uppercase tracking-[0.4em] mb-6">Choose Your Experience</p>
              <h2 className="text-5xl sm:text-6xl font-black text-[#2B4141]">Free vs. Premium</h2>
              <p className="text-[#2B4141]/50 mt-5 text-lg max-w-xl mx-auto leading-relaxed">
                The free tier gets you fully in the challenge. The $99 upgrade gives you the tools to actually win it.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              {/* Free */}
              <div className="bg-white border border-[#e8e5e0] rounded-2xl p-10">
                <p className="text-[#2B4141]/40 text-xs font-black uppercase tracking-[0.3em] mb-3">Free</p>
                <p className="text-5xl font-black text-[#2B4141] mb-10">$0</p>
                <ul className="flex flex-col gap-4 mb-10">
                  {freeFeatures.map((f) => (
                    <li key={f} className="flex items-center gap-3 text-[#2B4141]/70">
                      <span className="w-5 h-5 rounded-full bg-[#0EB1D2]/15 flex items-center justify-center shrink-0">
                        <span className="text-[#0EB1D2] text-xs font-black">✓</span>
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="/register"
                  className="block text-center border-2 border-[#2B4141] text-[#2B4141] hover:bg-[#2B4141] hover:text-white font-black px-8 py-4 rounded-full uppercase tracking-wide transition-all duration-300"
                >
                  Join Free
                </a>
              </div>
              {/* Premium */}
              <div className="bg-[#2B4141] rounded-2xl p-10">
                <p className="text-[#34E4EA] text-xs font-black uppercase tracking-[0.3em] mb-3">Premium</p>
                <div className="flex items-end gap-2 mb-1">
                  <p className="text-5xl font-black text-white">$99</p>
                  <p className="text-white/40 mb-2">one-time</p>
                </div>
                <p className="text-white/30 text-sm mb-10">No subscription. No renewals.</p>
                <ul className="flex flex-col gap-4 mb-10">
                  {premiumFeatures.map((f) => (
                    <li key={f} className="flex items-center gap-3 text-white/70">
                      <span className="w-5 h-5 rounded-full bg-[#34E4EA]/20 flex items-center justify-center shrink-0">
                        <span className="text-[#34E4EA] text-xs font-black">✓</span>
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="/register"
                  className="block text-center bg-[#0EB1D2] hover:bg-[#34E4EA] text-white font-black px-8 py-4 rounded-full uppercase tracking-wide transition-all duration-300 hover:scale-[1.02]"
                >
                  Upgrade to Premium — $99
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* WHO THIS IS FOR */}
        <section className="bg-[#2B4141] py-24 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-[#34E4EA] text-xs font-black uppercase tracking-[0.4em] mb-6">Is This For You?</p>
              <h2 className="text-5xl sm:text-6xl font-black text-white">Who This Is For</h2>
            </div>
            <ul className="flex flex-col gap-4">
              {[
                "Pickleball players who want to feel lighter and stronger on and off the court",
                "Anyone 18+ who's done with going it alone and wants real accountability",
                "People who've tried diets before and need a community, not a punishment",
                "Players who are ready to make the transformation they keep talking about",
              ].map((item) => (
                <li key={item} className="flex items-start gap-5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl px-8 py-6 transition-all duration-300">
                  <span className="text-[#0EB1D2] font-black text-xl leading-none mt-0.5 shrink-0">→</span>
                  <p className="text-white/90 font-semibold text-lg leading-snug">{item}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* FROM NICO */}
        <section className="bg-white py-24 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-[#0EB1D2] text-xs font-black uppercase tracking-[0.4em] mb-16">From the Creator</p>
            <span className="block text-[10rem] leading-none text-[#2B4141]/6 font-black -mb-12">&ldquo;</span>
            <blockquote className="text-[#2B4141] text-2xl sm:text-3xl lg:text-4xl font-light leading-relaxed mb-16">
              I&apos;m a lefty. I&apos;ve always done things a little differently — and this challenge is no different. It&apos;s not about perfection. It&apos;s about showing up for 60 days and letting a community of pickleball players push you further than you&apos;d go alone.
            </blockquote>
            <div className="flex items-center justify-center gap-4">
              <div className="relative w-16 h-16 rounded-full overflow-hidden shrink-0 ring-2 ring-[#2B4141]/10">
                <Image
                  src="/images/IMG_0897.jpeg"
                  alt="Nico the Lefty"
                  fill
                  className="object-cover"
                  style={{ objectPosition: "center 50%" }}
                />
              </div>
              <div className="text-left">
                <p className="text-[#2B4141] font-black text-lg">Nico the Lefty</p>
                <p className="text-[#2B4141]/40 text-sm">DUPR Master Instructor · Co-Host of PicklePod</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-[#f7f7f5] py-24 px-6">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-20">
              <p className="text-[#0EB1D2] text-xs font-black uppercase tracking-[0.4em] mb-6">Got Questions?</p>
              <h2 className="text-5xl sm:text-6xl font-black text-[#2B4141]">FAQ</h2>
            </div>
            <div className="flex flex-col divide-y divide-[#e8e5e0]">
              {faqs.map((item) => (
                <div key={item.q} className="py-8">
                  <h3 className="text-[#2B4141] font-black text-lg mb-3">{item.q}</h3>
                  <p className="text-[#2B4141]/60 leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="bg-[#2B4141] py-24 px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-5xl sm:text-6xl font-black text-white leading-tight mb-6">
              Your transformation starts<br className="hidden sm:block" /> with one decision.
            </h2>
            <p className="text-white/50 text-xl leading-relaxed mb-14 max-w-xl mx-auto">
              Join pickleball players and fitness enthusiasts ready to make the next 60 days count. It&apos;s free. The community is waiting.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/register"
                className="bg-[#0EB1D2] hover:bg-[#34E4EA] text-white font-black text-lg px-12 py-5 rounded-full uppercase tracking-wide transition-all duration-300 hover:scale-[1.03]"
              >
                Join Free →
              </a>
              <a
                href="#premium"
                className="border-2 border-white/20 text-white hover:border-white/50 font-black text-lg px-12 py-5 rounded-full uppercase tracking-wide transition-all duration-300"
              >
                Upgrade to Premium — $99
              </a>
            </div>
            <p className="text-white/30 text-sm mt-10">No credit card required. Premium is a one-time $99 payment — no subscription.</p>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
