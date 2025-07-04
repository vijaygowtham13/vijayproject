"use client";

import React from "react";

export default function CallToActionWithFooter() {
  return (
    <div className="bg-black text-white flex flex-col min-h-screen justify-between font-inter">
      {/* Main CTA Block */}
      <main className="flex-grow px-4 py-1">
        <div className="max-w-4xl mx-auto text-center relative rounded-2xl p-10 md:p-16 bg-[#130017] overflow-hidden shadow-2xl border border-white/5">
          {/* Radial blurred background glow */}
          <div className="absolute inset-0 z-0">
            <div className="absolute w-[400px] h-[400px] bg-purple-500/20 blur-[120px] rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_#3b0764_0%,_transparent_70%)] opacity-20 pointer-events-none"></div>
            <div className="absolute inset-0 bg-grid-small opacity-[0.05] pointer-events-none"></div>
          </div>

          {/* Content */}
          <div className="relative z-10">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">
              Schedule Your Free Strategy Call!
            </h2>
            <p className="text-sm md:text-base text-white/70 mb-8 leading-relaxed max-w-xl mx-auto">
              Let’s chat about how to attract high-quality leads while enhancing your social media impact. <br />
              Take the next step—your success story starts here!
            </p>
            <button className="bg-white text-black font-semibold px-6 py-2 rounded-xl shadow-lg hover:bg-white/90 transition">
              Apply here to work with us
            </button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 text-center py-4 text-xs text-white/60">
        ©2025 AcquisitionX All right reserved.
      </footer>
    </div>
  );
}
