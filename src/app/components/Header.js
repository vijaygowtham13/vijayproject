'use client';

import React, { useRef, useState } from 'react';
import { IconMenu2, IconX } from '@tabler/icons-react';

export default function HeroSection() {
  const [menuOpen, setMenuOpen] = useState(false);
  const scrollRef = useRef(null);

  const results = [
    { src: '/graph1.avif', width: 480, height: 200 },
    { src: '/g2.avif', width: 300, height: 200 },
    { src: '/g3.avif', width: 380, height: 200 },
    { src: '/g4.avif', width: 350, height: 200 }
  ];

  const logos = [
    'https://framerusercontent.com/images/3qQXa7B2YIx8XUMuC9l3hVB5FZ0.png',
    'https://framerusercontent.com/images/xkislM185Ad7ztE3LPc42il6w.png',
    'https://framerusercontent.com/images/jFxyUrjXrOWQF7xFzqGtCjTm4w.png',
    'https://framerusercontent.com/images/CUoZkwG6PGO4Si5dcwO2vjVU.png',
    'https://framerusercontent.com/images/aAZy7pWMbPNiWubvXUr6Il7gAQ4.png'
  ];

  return (
    <div className="min-h-screen w-full bg-black text-white relative overflow-hidden font-sans">
      {/* LEFT & RIGHT SHADOW OVERLAYS */}
     {/* LEFT SHADOW */}
<div className="absolute inset-y-0 left-0 w-42 bg-gradient-to-r from-black via-black/80 to-transparent z-10 pointer-events-none" />

{/* RIGHT SHADOW */}
<div className="absolute inset-y-0 right-0 w-42 bg-gradient-to-l from-black via-black/80 to-transparent z-10 pointer-events-none" />


      {/* Header */}
      <header className="fixed top-4 left-0 right-0 z-50 flex justify-between items-center px-4 md:px-5 py-4 border border-white/10 rounded-2xl mx-4 backdrop-blur-sm bg-white/5">
        <div className="h-7 w-auto">
          <img
            src="https://framerusercontent.com/images/lB9CUhTBFEirEF3dIoICRM9B598.svg"
            alt="Logo"
            className="h-full w-auto object-contain"
          />
        </div>

        <nav className="hidden md:flex gap-8 text-sm font-medium">
          <a href="#" className="hover:text-purple-300">Home</a>
          <a href="#" className="hover:text-purple-300">Case-Studies</a>
          <a href="#" className="hover:text-purple-300">Our Blog</a>
          <a href="#" className="hover:text-purple-300">Free Resources</a>
        </nav>

        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-white">
            {menuOpen ? <IconX size={24} /> : <IconMenu2 size={24} />}
          </button>
        </div>

        <button className="hidden md:inline-block bg-gradient-to-r from-purple-600 to-indigo-700 px-4 py-2 rounded-xl text-sm font-semibold shadow-md">
          Get In Touch
        </button>

        {menuOpen && (
          <div className="absolute top-full left-0 w-full bg-[#111111] border-t border-white/10 rounded-b-2xl px-6 py-4 flex flex-col gap-4 text-sm font-medium md:hidden">
            <a href="#" className="hover:text-purple-300">Home</a>
            <a href="#" className="hover:text-purple-300">Case-Studies</a>
            <a href="#" className="hover:text-purple-300">Our Blog</a>
            <a href="#" className="hover:text-purple-300">Free Resources</a>
            <button className="mt-2 bg-gradient-to-r from-purple-600 to-indigo-700 px-4 py-2 rounded-xl font-semibold shadow-md text-white">
              Get In Touch
            </button>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <div className="relative z-10 text-center pt-[180px] px-4 md:px-0 max-w-4xl mx-auto">
        <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-fuchsia-900/30 blur-3xl rounded-full opacity-90"></div>

        <h1 className="text-3xl md:text-5xl font-light leading-tight tracking-tight">
          We Build Multichannel Acquisition Systems<br />
          <span className="text-white/90 font-extralight">That Brings You Leads Everyday</span>
        </h1>

        <p className="mt-6 text-gray-300 max-w-2xl mx-auto text-base md:text-lg leading-relaxed font-light">
          AcquisitionX helps you fill your calendar with 360 degree lead gen systems while building your brand across all social media channels
        </p>

        <div className="mt-10">
          <button className="bg-gray-900 hover:bg-black text-white px-6 py-3 rounded-xl shadow-lg font-medium">
            Apply here to work with us
          </button>
        </div>
      </div>

      {/* Trusted By */}
      <div className="w-full bg-black py-12 px-4 md:px-16 flex flex-col items-center gap-6 overflow-hidden">
        <p className="text-sm text-white/70">Trusted By</p>

        <div className="relative w-full overflow-hidden">
          <div
            className="flex gap-16 animate-scrollLogos"
            style={{
              width: `${logos.length * 2 * 150}px`,
              whiteSpace: 'nowrap'
            }}
            ref={scrollRef}
          >
            {[...logos, ...logos].map((url, i) => (
              <img
                key={`logo-${i}`}
                src={url}
                alt={`logo-${i}`}
                className="h-10 w-[150px] object-contain flex-shrink-0 grayscale opacity-80 hover:opacity-100 transition duration-300"
              />
            ))}
          </div>
        </div>
      </div>

      {/* Our Results */}
      <div className="w-full bg-black py-10 px-4 md:px-16 flex flex-col items-center gap-6 overflow-hidden mt-10">
<h2 className="text-center text-3xl md:text-4xl font-light mb-16 text-white/90">
 Our Results
</h2>

        <div className="relative w-full overflow-hidden">
          <div
            className="flex gap-6 animate-scrollResults"
            style={{
              width: `${results.length * 2 * 420}px`,
              whiteSpace: 'nowrap'
            }}
          >
            {[...results, ...results].map((img, i) => (
              <div
                key={`result-${i}`}
                className="flex-shrink-0 overflow-hidden rounded-2xl"
                style={{ width: `${img.width}px`, height: `${img.height}px` }}
              >
                <img
                  src={img.src}
                  alt={`result-${i}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Keyframe Animations */}
      <style jsx>{`
        @keyframes scrollResults {
          0% { transform: translateX(0); }
          100% { transform: translateX(-${results.length * 380}px); }
        }
        @keyframes scrollLogos {
          0% { transform: translateX(0); }
          100% { transform: translateX(-${logos.length * 350}px); }
        }
      `}</style>
      <style jsx global>{`
        .animate-scrollResults {
          animation: scrollResults 30s linear infinite;
        }
        .animate-scrollLogos {
          animation: scrollLogos 30s linear infinite;
        }
      `}</style>
    </div>
  );
}
