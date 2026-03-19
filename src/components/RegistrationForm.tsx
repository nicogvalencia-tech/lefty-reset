"use client";

import { useState, useEffect } from "react";

export default function RegistrationForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [plan, setPlan] = useState("free");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const p = params.get("plan");
    if (p === "premium") setPlan("premium");
  }, []);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    const form = e.currentTarget;
    const data = new FormData(form);

    const res = await fetch("https://formspree.io/f/mqeyerjv", {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" },
    });

    setLoading(false);
    if (res.ok) setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="text-center py-16 px-6">
        <div className="w-16 h-1 bg-[#0EB1D2] rounded-full mx-auto mb-8" />
        <h2 className="text-3xl font-black text-[#2B4141] mb-4">You&apos;re In!</h2>
        <p className="text-[#2B4141]/60 text-lg mb-12">
          Welcome to the Lefty Reset. Here&apos;s what to do next.
        </p>

        {/* Step 1 — Join Skool */}
        <div className="bg-[#0EB1D2] rounded-3xl p-10 max-w-lg mx-auto text-left mb-6">
          <p className="text-white font-black text-2xl uppercase tracking-wide mb-1">Step 1 — Do This Now</p>
          <p className="text-white/70 text-sm font-black uppercase tracking-[0.2em] mb-5">Join the Community</p>
          <h3 className="text-white text-4xl font-black mb-4">Register on Skool</h3>
          <p className="text-white/80 leading-relaxed mb-6">
            Your next step is to join the Lefty Reset community on Skool. This is where everything happens — check-ins, leaderboard, live sessions, and more. Don&apos;t skip this.
          </p>
          <a
            href="https://www.skool.com/theleftyreset/about"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-center bg-[#2B4141] hover:bg-[#2B4141]/80 text-white font-black px-8 py-5 rounded-full uppercase tracking-wide transition-colors shadow-lg shadow-black/30 text-lg"
          >
            Join the Community on Skool →
          </a>
        </div>

        {/* Step 2 — Upgrade to Premium */}
        <div className="bg-[#2B4141] rounded-3xl p-10 max-w-lg mx-auto text-left">
          <p className="text-[#34E4EA] font-black text-2xl uppercase tracking-wide mb-1">Step 2 — Go All In</p>
          <p className="text-[#34E4EA]/60 text-sm font-black uppercase tracking-[0.2em] mb-5">After Joining Skool</p>
          <h3 className="text-white text-4xl font-black mb-1">Upgrade to Premium</h3>
          <div className="flex items-center gap-2 mb-4">
            <span className="text-white/40 text-xl font-black line-through">$99</span>
            <span className="text-[#34E4EA] text-2xl font-black">$49</span>
            <span className="text-[#34E4EA]/60 text-xs font-black uppercase tracking-wide">Limited launch pricing</span>
          </div>
          <p className="text-white/70 leading-relaxed mb-6">
            Once you&apos;ve registered on Skool, upgrade to Premium for exclusive coaching access. Here&apos;s what&apos;s included:
          </p>
          <ul className="flex flex-col gap-3 mb-8">
            {[
              "Live Zoom sessions with Nico and expert guests",
              "Private Premium members channel",
              "Direct Q&A access with Nico",
            ].map((f) => (
              <li key={f} className="flex items-start gap-3 text-white/80 text-sm">
                <span className="text-[#34E4EA] font-black mt-0.5">✓</span>
                {f}
              </li>
            ))}
          </ul>
          <p className="text-white/40 text-xs mb-6">All prize eligibility is included with your free registration. You must register on Skool first before upgrading to Premium.</p>
          <a
            href="https://www.skool.com/theleftyreset/plans"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-center bg-[#0EB1D2] hover:bg-[#34E4EA] text-white font-black px-8 py-4 rounded-full uppercase tracking-wide transition-colors shadow-lg shadow-[#0EB1D2]/40"
          >
            Upgrade to Premium on Skool →
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto px-6 py-16">
      <div className="text-center mb-10">
        <p className="text-[#0EB1D2] text-sm font-black uppercase tracking-[0.3em] mb-3">Sign Up Free</p>
        <h2 className="text-4xl font-black text-[#2B4141] mb-4">Join the Lefty Reset</h2>
        <p className="text-[#2B4141]/60 leading-relaxed">
          Your info is used only for challenge tracking, leaderboard eligibility, and to highlight transformations (with your consent). We will never share your data or post your weight publicly.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        <input type="hidden" name="plan" value={plan} />
        {/* Name */}
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="flex flex-col gap-2">
            <label className="text-sm font-black text-[#2B4141] uppercase tracking-wide">First Name *</label>
            <input
              type="text"
              name="firstName"
              required
              placeholder="Alex"
              className="border-2 border-[#C8C2AE] rounded-xl px-4 py-3 text-[#2B4141] focus:outline-none focus:border-[#0EB1D2] transition-colors"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm font-black text-[#2B4141] uppercase tracking-wide">Last Name *</label>
            <input
              type="text"
              name="lastName"
              required
              placeholder="Johnson"
              className="border-2 border-[#C8C2AE] rounded-xl px-4 py-3 text-[#2B4141] focus:outline-none focus:border-[#0EB1D2] transition-colors"
            />
          </div>
        </div>

        {/* Email */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-black text-[#2B4141] uppercase tracking-wide">Email *</label>
          <input
            type="email"
            name="email"
            required
            placeholder="you@email.com"
            className="border-2 border-[#C8C2AE] rounded-xl px-4 py-3 text-[#2B4141] focus:outline-none focus:border-[#0EB1D2] transition-colors"
          />
        </div>


        {/* Social Handles */}
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="flex flex-col gap-2">
            <label className="text-sm font-black text-[#2B4141] uppercase tracking-wide">Instagram Handle <span className="text-[#2B4141]/40 normal-case font-normal">(optional)</span></label>
            <input
              type="text"
              name="instagramHandle"
              placeholder="@yourhandle"
              className="border-2 border-[#C8C2AE] rounded-xl px-4 py-3 text-[#2B4141] focus:outline-none focus:border-[#0EB1D2] transition-colors"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm font-black text-[#2B4141] uppercase tracking-wide">TikTok Handle <span className="text-[#2B4141]/40 normal-case font-normal">(optional)</span></label>
            <input
              type="text"
              name="tiktokHandle"
              placeholder="@yourhandle"
              className="border-2 border-[#C8C2AE] rounded-xl px-4 py-3 text-[#2B4141] focus:outline-none focus:border-[#0EB1D2] transition-colors"
            />
          </div>
        </div>

        {/* Day 1 Photo Explainer */}
        <div className="bg-[#34E4EA]/20 border-2 border-[#34E4EA] rounded-xl px-5 py-4">
          <p className="text-sm font-black text-[#2B4141] uppercase tracking-wide mb-1">📸 Starting Photo — Day 1 Only</p>
          <p className="text-sm text-[#2B4141]/70 leading-relaxed">
            You don&apos;t need a photo to register. On Day 1 of the challenge, Nico will announce a <strong>daily codeword</strong>. You&apos;ll need to submit a full-body photo holding a sign with that codeword to verify your entry and unlock prize eligibility.
          </p>
        </div>

        {/* Location (optional) */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-black text-[#2B4141] uppercase tracking-wide">Location <span className="text-[#2B4141]/40 normal-case font-normal">(optional)</span></label>
          <input
            type="text"
            name="location"
            placeholder="Austin, TX"
            className="border-2 border-[#C8C2AE] rounded-xl px-4 py-3 text-[#2B4141] focus:outline-none focus:border-[#0EB1D2] transition-colors"
          />
        </div>

        {/* Primary Fitness Goals — Multi-select */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-black text-[#2B4141] uppercase tracking-wide">Primary Fitness Goals <span className="text-[#2B4141]/40 normal-case font-normal">(optional — select all that apply)</span></label>
          <div className="grid grid-cols-2 gap-2">
            {[
              "Lose weight",
              "Build muscle",
              "Improve overall fitness",
              "Play better pickleball",
              "Build healthy habits",
              "Improve mobility & flexibility",
              "Increase energy & stamina",
              "Reduce stress",
              "Sleep better",
              "Eat healthier",
              "Stay accountable",
              "Win a prize",
            ].map((option) => (
              <label key={option} className="flex items-center gap-2 bg-white border-2 border-[#C8C2AE] rounded-xl px-4 py-3 cursor-pointer hover:border-[#0EB1D2] transition-colors">
                <input
                  type="checkbox"
                  name="fitnessGoals"
                  value={option}
                  className="w-4 h-4 accent-[#0EB1D2] shrink-0"
                />
                <span className="text-sm text-[#2B4141]">{option}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Challenge Goal — Free form */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-black text-[#2B4141] uppercase tracking-wide">What would you like to achieve in this challenge? <span className="text-[#2B4141]/40 normal-case font-normal">(optional)</span></label>
          <textarea
            name="challengeGoal"
            rows={3}
            placeholder="Share your personal goal, motivation, or what success looks like for you after 60 days..."
            className="border-2 border-[#C8C2AE] rounded-xl px-4 py-3 text-[#2B4141] focus:outline-none focus:border-[#0EB1D2] transition-colors resize-none"
          />
        </div>

        {/* Consent */}
        <div className="flex items-start gap-3 bg-[#C8C2AE]/30 rounded-xl p-4">
          <input
            type="checkbox"
            name="consent"
            id="consent"
            required
            className="mt-1 w-5 h-5 accent-[#0EB1D2] shrink-0"
          />
          <label htmlFor="consent" className="text-sm text-[#2B4141]/80 leading-relaxed">
            I agree that my submitted photos and transformation story may be used by Nico the Lefty for promotional content, social media highlights, and prize awarding purposes. My actual weight will never be shared publicly. *
          </label>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="bg-[#0EB1D2] hover:bg-[#34E4EA] text-white font-black text-lg px-10 py-5 rounded-full uppercase tracking-wide transition-colors shadow-lg shadow-[#0EB1D2]/40 disabled:opacity-50"
        >
          {loading ? "Submitting..." : "Join the Lefty Reset — Free →"}
        </button>

        <p className="text-center text-xs text-[#2B4141]/40">
          No credit card required. You can upgrade to Premium ($49, originally $99) after registering.
        </p>
      </form>
    </div>
  );
}
