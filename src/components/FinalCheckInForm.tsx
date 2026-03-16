"use client";

import { useState } from "react";

// Create a new Formspree form at formspree.io and replace this ID
const FORMSPREE_ID = "xreyyovv";

export default function FinalCheckInForm() {
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
        <h2 className="text-3xl font-black text-[#2B4141] mb-4">You finished.</h2>
        <p className="text-[#2B4141]/60 text-lg">
          Your final check-in is locked in. Winners will be announced soon — congratulations on completing the Lefty Reset.
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto px-6 py-16">
      <div className="text-center mb-10">
        <p className="text-[#0EB1D2] text-xs font-black uppercase tracking-[0.4em] mb-3">Day 60</p>
        <h2 className="text-4xl font-black text-[#2B4141] mb-4">Final Check-In</h2>
        <p className="text-[#2B4141]/60 leading-relaxed">
          This is your finish line. Lock in your official result and submit your transformation photo.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-6">

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
          <label className="text-sm font-black text-[#2B4141] uppercase tracking-wide">Final Weight (lbs) *</label>
          <input
            type="number"
            name="finalWeight"
            required
            placeholder="175"
            min={50}
            max={600}
            className="border-2 border-[#C8C2AE] rounded-xl px-4 py-3 text-[#2B4141] focus:outline-none focus:border-[#0EB1D2] transition-colors"
          />
          <p className="text-xs text-[#2B4141]/40">Private — never shown publicly. Used only for prize calculation.</p>
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
          <p className="text-xs text-[#2B4141]/40">Posted by Nico on Skool and email on Day 60. Must match exactly.</p>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-sm font-black text-[#2B4141] uppercase tracking-wide">Final Photo *</label>
          <input
            type="file"
            name="finalPhoto"
            required
            accept="image/*"
            className="border-2 border-[#C8C2AE] rounded-xl px-4 py-3 text-[#2B4141]/70 focus:outline-none focus:border-[#0EB1D2] transition-colors file:mr-4 file:py-1 file:px-4 file:rounded-full file:border-0 file:bg-[#0EB1D2] file:text-white file:font-bold file:text-sm cursor-pointer"
          />
          <p className="text-xs text-[#2B4141]/40">Full body photo holding a sign with today&apos;s codeword written on it.</p>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-sm font-black text-[#2B4141] uppercase tracking-wide">
            Reflect on your 60 days <span className="text-[#2B4141]/40 normal-case font-normal">(optional)</span>
          </label>
          <textarea
            name="reflection"
            rows={4}
            placeholder="What changed? What surprised you? What are you proud of?"
            className="border-2 border-[#C8C2AE] rounded-xl px-4 py-3 text-[#2B4141] focus:outline-none focus:border-[#0EB1D2] transition-colors resize-none"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="bg-[#0EB1D2] hover:bg-[#34E4EA] text-white font-black text-lg px-10 py-5 rounded-full uppercase tracking-wide transition-all duration-300 hover:scale-[1.02] disabled:opacity-50"
        >
          {loading ? "Submitting..." : "Submit Final Check-In →"}
        </button>
      </form>
    </div>
  );
}
