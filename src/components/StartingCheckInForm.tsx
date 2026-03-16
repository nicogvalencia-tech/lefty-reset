"use client";

import { useState } from "react";

// Create a new Formspree form at formspree.io and replace this ID
const FORMSPREE_ID = "xvzwwvnl";

export default function StartingCheckInForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    const form = e.currentTarget;
    const data = new FormData(form);

    const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" },
    });

    setLoading(false);
    if (res.ok) setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="text-center py-16 px-6 max-w-lg mx-auto">
        <div className="w-16 h-1 bg-[#0EB1D2] rounded-full mx-auto mb-8" />
        <h2 className="text-3xl font-black text-[#2B4141] mb-4">You&apos;re officially in.</h2>
        <p className="text-[#2B4141]/60 text-lg">
          Your starting check-in is locked in. The clock starts April 1 — see you on the leaderboard.
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto px-6 py-16">
      <div className="text-center mb-10">
        <p className="text-[#0EB1D2] text-xs font-black uppercase tracking-[0.4em] mb-3">Day 1</p>
        <h2 className="text-4xl font-black text-[#2B4141] mb-4">Starting Check-In</h2>
        <p className="text-[#2B4141]/60 leading-relaxed">
          This is your official baseline. Your starting weight is private and never shown publicly.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-6">

        <div className="flex flex-col gap-2">
          <label className="text-sm font-black text-[#2B4141] uppercase tracking-wide">Full Name *</label>
          <input
            type="text"
            name="name"
            required
            placeholder="Your name"
            className="border-2 border-[#C8C2AE] rounded-xl px-4 py-3 text-[#2B4141] focus:outline-none focus:border-[#0EB1D2] transition-colors"
          />
        </div>

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

        <div className="flex flex-col gap-2">
          <label className="text-sm font-black text-[#2B4141] uppercase tracking-wide">Starting Weight (lbs) *</label>
          <input
            type="number"
            name="startingWeight"
            required
            placeholder="185"
            min={50}
            max={600}
            className="border-2 border-[#C8C2AE] rounded-xl px-4 py-3 text-[#2B4141] focus:outline-none focus:border-[#0EB1D2] transition-colors"
          />
          <p className="text-xs text-[#2B4141]/40">Private — never shown publicly. Used only for prize tracking.</p>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-sm font-black text-[#2B4141] uppercase tracking-wide">Today&apos;s Codeword *</label>
          <input
            type="text"
            name="codeword"
            required
            placeholder="Enter today's codeword"
            className="border-2 border-[#C8C2AE] rounded-xl px-4 py-3 text-[#2B4141] focus:outline-none focus:border-[#0EB1D2] transition-colors"
          />
          <p className="text-xs text-[#2B4141]/40">Posted by Nico on Skool and email on check-in day. Must match exactly.</p>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-sm font-black text-[#2B4141] uppercase tracking-wide">Starting Photo *</label>
          <input
            type="file"
            name="startingPhoto"
            required
            accept="image/*"
            className="border-2 border-[#C8C2AE] rounded-xl px-4 py-3 text-[#2B4141]/70 focus:outline-none focus:border-[#0EB1D2] transition-colors file:mr-4 file:py-1 file:px-4 file:rounded-full file:border-0 file:bg-[#0EB1D2] file:text-white file:font-bold file:text-sm cursor-pointer"
          />
          <p className="text-xs text-[#2B4141]/40">Full body photo holding a sign with today&apos;s codeword written on it.</p>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-sm font-black text-[#2B4141] uppercase tracking-wide">
            Anything to share? <span className="text-[#2B4141]/40 normal-case font-normal">(optional)</span>
          </label>
          <textarea
            name="note"
            rows={3}
            placeholder="Your starting mindset, your goal, your why..."
            className="border-2 border-[#C8C2AE] rounded-xl px-4 py-3 text-[#2B4141] focus:outline-none focus:border-[#0EB1D2] transition-colors resize-none"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="bg-[#0EB1D2] hover:bg-[#34E4EA] text-white font-black text-lg px-10 py-5 rounded-full uppercase tracking-wide transition-all duration-300 hover:scale-[1.02] disabled:opacity-50"
        >
          {loading ? "Submitting..." : "Submit Starting Check-In →"}
        </button>
      </form>
    </div>
  );
}
