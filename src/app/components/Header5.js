'use client';

import React, { useState } from 'react';
import { IconPlus, IconMinus } from '@tabler/icons-react';

export default function Faqs() {
  const faqItems = [
    'How much does AcquisitionX charge for a multichannel campaign?',
    'What if I only want to focus on cold outreach?',
    'Are software costs included?',
    'How long does it take to launch a campaign?',
    'When can I expect to see results?',
    'How do I know if I’m getting qualified leads?',
    'How will I receive updates on my campaign?',
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleIndex = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className="bg-black text-white py-16 px-4">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-center text-2xl md:text-3xl font-semibold mb-10">
          FAQs
        </h2>

        <div className="space-y-3">
          {faqItems.map((question, index) => (
            <div
              key={index}
              className="border border-white/10 rounded-lg overflow-hidden bg-[#111111]"
            >
              <button
                className="w-full flex justify-between items-center text-left px-4 py-3"
                onClick={() => toggleIndex(index)}
              >
                <span className="text-sm font-medium text-white">
                  {question}
                </span>
                {activeIndex === index ? (
                  <IconMinus size={16} className="text-white" />
                ) : (
                  <IconPlus size={16} className="text-white" />
                )}
              </button>

              {activeIndex === index && (
                <div className="px-4 pb-4 text-sm text-white/60 leading-relaxed">
                  {/* Replace this with your actual answer content */}
                  This is the answer. You can replace this with your real FAQ response.
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
