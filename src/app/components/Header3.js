'use client';

import React, { useRef, useEffect, useState } from 'react';
import {
  IconSearch,
  IconFileText,
  IconChartBar,
  IconEye,
} from '@tabler/icons-react';

const steps = [
  {
    title: 'Identify Your Problems in Lead Generation and Sales System',
    desc: 'Our dedicated account executive will analyse the current issues in your system.',
    align: 'left',
    icon: <IconSearch size={32} stroke={2} className="text-purple-500" />,
    step: 'Step 1',
  },
  {
    title: 'ICP and Offer Creation',
    desc: 'We create your ICP list with a compelling offer that your prospects can’t say “NO TO”.',
    align: 'right',
    icon: <IconFileText size={32} stroke={2} className="text-pink-500" />,
    step: 'Step 2',
  },
  {
    title: 'Pipeline and Sales Tool Implementation',
    desc: 'We implement and optimize the CRM and sales tools necessary for your outreach.',
    align: 'left',
    icon: <IconChartBar size={32} stroke={2} className="text-yellow-400" />,
    step: 'Step 3',
  },
  {
    title: 'Creation of Sales Assets and Content',
    desc: 'We build content, graphics, scripts, etc. used in outbound and inbound funnels.',
    align: 'right',
    icon: <IconEye size={32} stroke={2} className="text-cyan-400" />,
    step: 'Step 4',
  },
];

export default function HeroSteps() {
  const containerRef = useRef(null);
  const lineRef = useRef(null);
  const [lineHeight, setLineHeight] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current || !lineRef.current) return;

      const container = containerRef.current;
      const rect = container.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const startY = rect.top;
      const endY = rect.bottom - windowHeight / 2;

      if (startY < windowHeight && rect.bottom > 0) {
        const scrollProgress = Math.min(
          Math.max((windowHeight - startY) / (endY - startY), 0),
          1
        );

        const containerHeight = container.offsetHeight;
        const targetHeight = containerHeight * scrollProgress;

        setLineHeight(targetHeight);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div ref={containerRef} className="bg-black text-white py-20 relative overflow-hidden">
      <h2 className="text-center text-4xl font-bold mb-24">How We Help You ?</h2>

      {/* Center timeline line */}
      <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 z-0">
        <div
          ref={lineRef}
          style={{ height: `${lineHeight}px` }}
          className="w-full bg-gradient-to-b from-purple-500 via-fuchsia-600 to-purple-800 shadow-[0_0_20px_5px_rgba(168,85,247,0.6)] transition-all duration-100"
        />
      </div>

      {/* Steps */}
      <div className="relative z-10 flex flex-col gap-32 max-w-5xl mx-auto px-4">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`relative flex flex-col md:flex-row ${
              step.align === 'right' ? 'md:justify-end' : 'md:justify-start'
            }`}
          >
            {/* Step Card */}
            <div className="md:w-1/2 bg-[#111111] border border-white/10 p-6 rounded-2xl shadow-2xl backdrop-blur-sm relative z-10">
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-br from-purple-600 to-fuchsia-600 rounded-full blur-xl opacity-30"></div>
              <div className="mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold mb-2 leading-snug">
                {step.title}
              </h3>
              <p className="text-white/70 text-sm">{step.desc}</p>
            </div>

            {/* Dot + Step label in center */}
            <div className="hidden md:flex flex-col items-center absolute left-1/2 transform -translate-x-1/2 top-1">
              <div className="w-6 h-6 bg-purple-500 rounded-full border-4 border-black shadow-md z-10"></div>
              <div className="bg-[#111] text-white text-xs font-medium px-3 py-1 mt-2 rounded-full shadow border border-purple-700">
                {step.step}
              </div>
            </div>

            {/* For mobile view - stacked center */}
            <div className="md:hidden flex flex-col items-center mt-4">
              <div className="w-6 h-6 bg-purple-500 rounded-full border-4 border-black shadow-md"></div>
              <div className="bg-[#111] text-white text-xs font-medium px-3 py-1 mt-2 rounded-full shadow border border-purple-700">
                {step.step}
              </div>
            </div>
          </div>
        ))}

        {/* Final Launch Section */}
        <div className="text-center mt-16 md:mt-32 px-4">
          <div className="bg-[#111111] border border-white/10 rounded-2xl p-10 shadow-2xl max-w-3xl mx-auto">
            <img
              src="/path-to-mockup-image.png"
              alt="Launch Campaign"
              className="mx-auto mb-6 rounded-lg shadow-lg border border-white/10"
            />
            <h3 className="text-2xl font-semibold mb-3">Launch The Campaign</h3>
            <p className="text-white/70 mb-5 text-sm">
              Once we have all the assets ready, we will launch the campaign.
            </p>
            <button className="bg-purple-600 hover:bg-purple-700 transition-all px-6 py-2 rounded-full font-medium text-white">
              Apply these assets to outreach
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
