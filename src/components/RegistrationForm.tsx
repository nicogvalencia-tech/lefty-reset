"use client";

import { useState } from "react";

export default function RegistrationForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [goal, setGoal] = useState("");

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
        <div className="text-5xl mb-6">🎉</div>
        <h2 className="text-3xl font-black text-[#2B4141] mb-4">You&apos;re In!</h2>
        <p className="text-[#2B4141]/70 text-lg mb-10">
          Watch your email — next steps are coming soon. Welcome to the Lefty Reset.
        </p>
        {/* Step 2 — Upgrade upsell */}
        <div className="bg-[#2B4141] rounded-3xl p-10 max-w-lg mx-auto text-left">
          <p className="text-[#34E4EA] text-xs font-black uppercase tracking-[0.3em] mb-3">Want to win?</p>
          <h3 className="text-white text-2xl font-black mb-3">Upgrade to Premium — $99</h3>
          <p className="text-white/70 leading-relaxed mb-6">
            Unlock full prize eligibility, live Zoom sessions, and direct access to Nico. Upgrade for $99.
          </p>
          <ul className="flex flex-col gap-2 mb-8">
            {[
              "Full prize eligibility — Grand Prize, Fan Vote & weekly giveaways",
              "Live Zoom sessions with Nico and expert guests",
              "Private premium members channel",
              "Direct Q&A access with Nico",
            ].map((f) => (
              <li key={f} className="flex items-center gap-3 text-white/80 text-sm">
                <span className="text-[#34E4EA] font-black">✓</span>
                {f}
              </li>
            ))}
          </ul>
          <a
            href="https://skool.com"
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
        {/* Name */}
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="flex flex-col gap-2">
            <label className="text-sm font-black text-[#2B4141] uppercase tracking-wide">First Name *</label>
            <input
              type="text"
              name="firstName"
              required
              placeholder="Nico"
              className="border-2 border-[#C8C2AE] rounded-xl px-4 py-3 text-[#2B4141] focus:outline-none focus:border-[#0EB1D2] transition-colors"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm font-black text-[#2B4141] uppercase tracking-wide">Last Name *</label>
            <input
              type="text"
              name="lastName"
              required
              placeholder="Valencia"
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
              placeholder="@nicothelefty"
              className="border-2 border-[#C8C2AE] rounded-xl px-4 py-3 text-[#2B4141] focus:outline-none focus:border-[#0EB1D2] transition-colors"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm font-black text-[#2B4141] uppercase tracking-wide">TikTok Handle <span className="text-[#2B4141]/40 normal-case font-normal">(optional)</span></label>
            <input
              type="text"
              name="tiktokHandle"
              placeholder="@nicothelefty"
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
            placeholder="Miami, FL"
            className="border-2 border-[#C8C2AE] rounded-xl px-4 py-3 text-[#2B4141] focus:outline-none focus:border-[#0EB1D2] transition-colors"
          />
        </div>

        {/* Primary Goal (optional) */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-black text-[#2B4141] uppercase tracking-wide">Primary Fitness Goal <span className="text-[#2B4141]/40 normal-case font-normal">(optional)</span></label>
          <select
            name="primaryGoal"
            value={goal}
            onChange={(e) => setGoal(e.target.value)}
            className="border-2 border-[#C8C2AE] rounded-xl px-4 py-3 text-[#2B4141] focus:outline-none focus:border-[#0EB1D2] transition-colors bg-white"
          >
            <option value="">Select a goal...</option>
            <option value="Lose weight">Lose weight</option>
            <option value="Build muscle">Build muscle</option>
            <option value="Improve fitness">Improve overall fitness</option>
            <option value="Play better pickleball">Play better pickleball</option>
            <option value="Build healthy habits">Build healthy habits</option>
            <option value="Other">Other</option>
          </select>
          {goal === "Other" && (
            <input
              type="text"
              name="primaryGoalCustom"
              placeholder="Tell us your goal..."
              className="border-2 border-[#0EB1D2] rounded-xl px-4 py-3 text-[#2B4141] focus:outline-none focus:border-[#34E4EA] transition-colors mt-2"
              autoFocus
            />
          )}
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
          No credit card required. You can upgrade to Premium ($99 one-time) after registering.
        </p>
      </form>
    </div>
  );
}
