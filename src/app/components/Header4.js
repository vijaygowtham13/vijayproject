'use client';

import React, { useEffect } from 'react';
import {
  IconUserSearch,
  IconMoneybag,
  IconSettings,
} from '@tabler/icons-react';

export default function WhyAcquisitionX() {
  // Inject custom @keyframes once
  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
      @keyframes float {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-6px); }
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  // Inline animation style
  const floatAnimation = {
    animation: 'float 3s ease-in-out infinite',
    display: 'inline-block',
  };

  const features = [
    {
      title: 'Simplify Your Hiring',
      desc: 'We manage all marketing tasks, saving you money without multiple hires.',
      icon: (
        <div style={floatAnimation}>
          <IconUserSearch size={48} stroke={2} className="text-red-500 mx-auto mb-4" />
        </div>
      ),
    },
    {
      title: 'Guaranteed Quality Leads',
      desc: 'Start campaigns immediately with our experts using the latest strategies and tools.',
      icon: (
        <div style={floatAnimation}>
          <IconMoneybag size={48} stroke={2} className="text-red-500 mx-auto mb-4" />
        </div>
      ),
    },
    {
      title: 'Ready-to-Go Experts',
      desc: 'Get reliable, meeting-ready leads or pay nothing if you’re unsatisfied.',
      icon: (
        <div style={floatAnimation}>
          <IconSettings size={48} stroke={2} className="text-red-500 mx-auto mb-4" />
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
