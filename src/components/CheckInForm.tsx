"use client";

import { useState } from "react";

// Replace CHECKIN_FORM_ID with your Formspree check-in form ID
const FORMSPREE_ID = "mqeyplve";

export default function CheckInForm() {
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
        <div className="text-5xl mb-6">💪</div>
        <h2 className="text-3xl font-black text-[#2B4141] mb-4">Check-In Received!</h2>
        <p className="text-[#2B4141]/70 text-lg">
          You&apos;re on the board. Keep showing up — see you next week!
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto px-6 py-16">
      <div className="text-center mb-10">
        <p className="text-[#0EB1D2] text-sm font-black uppercase tracking-[0.3em] mb-3">Weekly Check-In</p>
        <h2 className="text-4xl font-black text-[#2B4141] mb-4">Submit Your Check-In</h2>
        <p className="text-[#2B4141]/60 leading-relaxed">
          Enter today&apos;s codeword and upload your photo to verify your check-in. Your weight is never shown publicly.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-6">

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

        {/* Week */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-black text-[#2B4141] uppercase tracking-wide">Check-In Week *</label>
          <select
            name="week"
            required
            className="border-2 border-[#C8C2AE] rounded-xl px-4 py-3 text-[#2B4141] focus:outline-none focus:border-[#0EB1D2] transition-colors bg-white"
          >
            <option value="">Select week...</option>
            <option value="Day 1 (Starting)">Day 1 — Starting Check-In</option>
            <option value="Week 1">Week 1</option>
            <option value="Week 2">Week 2</option>
            <option value="Week 3">Week 3</option>
            <option value="Week 4">Week 4</option>
            <option value="Week 5">Week 5</option>
            <option value="Week 6">Week 6</option>
            <option value="Week 7">Week 7</option>
            <option value="Week 8 (Final)">Week 8 — Final Check-In</option>
          </select>
        </div>

        {/* Current Weight */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-black text-[#2B4141] uppercase tracking-wide">Current Weight (lbs) *</label>
          <input
            type="number"
            name="currentWeight"
            required
            placeholder="185"
            min={50}
            max={600}
            className="border-2 border-[#C8C2AE] rounded-xl px-4 py-3 text-[#2B4141] focus:outline-none focus:border-[#0EB1D2] transition-colors"
          />
          <p className="text-xs text-[#2B4141]/40">For Day 1, this is your official starting weight. It is private and never shown publicly.</p>
        </div>

        {/* Codeword */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-black text-[#2B4141] uppercase tracking-wide">Today&apos;s Codeword *</label>
          <input
            type="text"
            name="codeword"
            required
            placeholder="Enter today's codeword"
            className="border-2 border-[#C8C2AE] rounded-xl px-4 py-3 text-[#2B4141] focus:outline-none focus:border-[#0EB1D2] transition-colors"
          />
          <p className="text-xs text-[#2B4141]/40">Posted by Nico each check-in day on Skool and email. Must match exactly to be verified.</p>
        </div>

        {/* Photo */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-black text-[#2B4141] uppercase tracking-wide">Check-In Photo *</label>
          <input
            type="file"
            name="checkInPhoto"
            required
            accept="image/*"
            className="border-2 border-[#C8C2AE] rounded-xl px-4 py-3 text-[#2B4141]/70 focus:outline-none focus:border-[#0EB1D2] transition-colors file:mr-4 file:py-1 file:px-4 file:rounded-full file:border-0 file:bg-[#0EB1D2] file:text-white file:font-bold file:text-sm cursor-pointer"
          />
          <p className="text-xs text-[#2B4141]/40">Full body photo holding a sign with today&apos;s codeword written on it.</p>
        </div>

        {/* Optional note */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-black text-[#2B4141] uppercase tracking-wide">How&apos;s it going? <span className="text-[#2B4141]/40 normal-case font-normal">(optional)</span></label>
          <textarea
            name="note"
            rows={3}
            placeholder="Share a win, a struggle, or a shoutout..."
            className="border-2 border-[#C8C2AE] rounded-xl px-4 py-3 text-[#2B4141] focus:outline-none focus:border-[#0EB1D2] transition-colors resize-none"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="bg-[#0EB1D2] hover:bg-[#34E4EA] text-white font-black text-lg px-10 py-5 rounded-full uppercase tracking-wide transition-colors shadow-lg shadow-[#0EB1D2]/40 disabled:opacity-50"
        >
          {loading ? "Submitting..." : "Submit Check-In →"}
        </button>
      </form>
    </div>
  );
}
