"use client";

import React, { useEffect } from 'react';
import {
  IconUserSearch,
  IconMoneybag,
  IconSettings,
} from '@tabler/icons-react';

export default function WhyAcquisitionX() {
  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
      @keyframes float {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-6px); }
      }
      @keyframes draw {
        to { stroke-dashoffset: 0; }
      }
      .outline-path {
        stroke-dasharray: 1000;
        stroke-dashoffset: 1000;
        animation: draw 2.5s ease-in-out infinite alternate;
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  const floatAnimation = {
    animation: 'float 3s ease-in-out infinite',
    display: 'inline-block',
  };

  const features = [
    {
      title: 'Simplify Your Hiring',
      desc: 'We manage all marketing tasks, saving you money without multiple hires.',
      icon: (
        <div style={floatAnimation} className="mx-auto mb-4 relative w-12 h-12">
          <IconUserSearch size={48} stroke={2} className="text-red-500 absolute top-0 left-0" />
          <svg className="absolute inset-0 w-full h-full">
            <path
              d="M-17.6297,-16.5596 C-17.6297,-16.5596 -19.0656,3.9784 -19.0656,3.9784 C-20.3363,19.5417 -8.2313,32.3377 9.1787,33.7628 C9.1787,33.7628 11.6608,33.9652 11.6608,33.9652 C29.0709,35.3903 44.2227,23.9231 45.4934,8.3598 C45.4934,8.3598 47.3598,1.3479 47.3598,1.3479"
              stroke="#fff"
              strokeWidth="1.5"
              fill="none"
              className="outline-path"
            />
          </svg>
        </div>
      ),
    },
    {
      title: 'Guaranteed Quality Leads',
      desc: 'Start campaigns immediately with our experts using the latest strategies and tools.',
      icon: (
        <div style={floatAnimation} className="mx-auto mb-4 relative w-12 h-12">
          <IconMoneybag size={48} stroke={2} className="text-red-500 absolute top-0 left-0" />
          <svg className="absolute inset-0 w-full h-full">
            <path
              d="M61.54,-126 C61.54,-126 101.88,-76.17 126.07,-17.61 C150.27,40.94 141.22,132.37 0.46,132.37 C-142.85,132.37 -149.94,42.48 -126.23,-17.61 C-102.52,-77.71 -61.54,-125.48 -61.54,-125.48"
              stroke="#fff"
              strokeWidth="1.5"
              fill="none"
              className="outline-path"
            />
          </svg>
        </div>
      ),
    },
    {
      title: 'Ready-to-Go Experts',
      desc: 'Get reliable, meeting-ready leads or pay nothing if you’re unsatisfied.',
      icon: (
        <div style={floatAnimation} className="mx-auto mb-4 relative w-12 h-12">
          <IconSettings size={48} stroke={2} className="text-red-500 absolute top-0 left-0" />
          <svg className="absolute inset-0 w-full h-full">
            <path
              d="M137.71,160.11 C137.71,160.11 -137.71,160.11 -137.71,160.11 C-150.08,160.11 -160.11,150.08 -160.11,137.71 C-160.11,137.71 -160.11,-137.71 -160.11,-137.71 C-160.11,-150.08 -150.08,-160.11 -137.71,-160.11 C-137.71,-160.11 137.71,-160.11 137.71,-160.11 C150.08,-160.11 160.11,-150.08 160.11,-137.71 C160.11,-137.71 160.11,137.71 160.11,137.71 C160.11,150.08 150.08,160.11 137.71,160.11z"
              stroke="#fff"
              strokeWidth="1.5"
              fill="none"
              className="outline-path"
            />
          </svg>
        </div>
      ),
    },
  ];

  return (
    <section className="bg-black text-white py-24">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-16">Why AcquisitionX?</h2>

        <div className="grid md:grid-cols-3 gap-12 text-center">
          {features.map((item, idx) => (
            <div key={idx} className="px-4">
              {item.icon}
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-white/70 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
