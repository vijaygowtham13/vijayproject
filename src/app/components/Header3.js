"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

const steps = [
  {
    id: 1,
    title: "Identify Your Problems in Lead Generation and Sales System",
    description: `Our dedicated account executive will analyse the current issues in your system.`,
    icon: "/icons/search.svg",
    position: "left",
  },
  {
    id: 2,
    title: "ICP and Offer Creation",
    description:
      "We create your ICP list with a compelling offer that your prospects can’t say \"NO TO\". If needed, we will revamp your current ICP and offer to ensure we have accurate data.",
    icon: "/icons/file.svg",
    position: "right",
  },
  {
    id: 3,
    title: "Pipeline and Sales Tool Implementation",
    description: (
      <>
        <strong>Pipeline Setup:</strong> We set up your pipeline account and create a custom lead nurturing scheme.<br />
        <strong>Sales Tools Stack:</strong> Utilizing our in-house sales tools stack, we set-up the process for the campaign.
      </>
    ),
    icon: "/icons/layers.svg",
    position: "left",
  },
  {
    id: 4,
    title: "Creation of Sales Assets and Content",
    description: (
      <>
        <strong>Sales Assets:</strong> We create essential sales assets such as lead magnets, case studies, content, graphics, and outbound scripts.<br />
        <strong>Inbound System:</strong> We develop engaging content that will be used across social media campaigns as part of our inbound system.<br />
        <strong>Outbound System:</strong> We set up cold email infrastructure, warm domains, and A/B test campaigns.
      </>
    ),
    icon: "/icons/eye.svg",
    position: "right",
  },
];

export default function StepTimeline() {
  const containerRef = useRef(null);
  const lineRef = useRef(null);
  const [lineHeight, setLineHeight] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current;
      const line = lineRef.current;
      if (!container || !line) return;

      const rect = container.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const start = rect.top;
      const totalHeight = rect.height - 350;

      const fasterProgress = Math.min(Math.max((windowHeight - start) / windowHeight, 0), 1);
      setLineHeight(fasterProgress * totalHeight);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      className="relative w-full bg-black text-white py-20 px-4 md:px-20 overflow-hidden"
      ref={containerRef}
    >
      <h2 className="text-center text-3xl md:text-4xl font-semibold mb-16 text-white/90">
        How We Help You ?
      </h2>

      <div className="relative flex justify-center">
        {/* Scroll-animated Line - hidden on mobile */}
        <div
          ref={lineRef}
          className="hidden md:block absolute top-0 left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-purple-600 via-purple-700 to-purple-900 z-0"
          style={{ height: `${lineHeight}px` }}
        ></div>

        <div className="relative z-10 w-full max-w-5xl">
          {steps.map((step, index) => (
            <div
              key={step.id}
              className={`mb-24 relative flex flex-col md:flex-row items-center md:justify-between`}
            >
              {/* Step Dot - hidden on mobile */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 z-20">
                <div className="w-6 h-6 rounded-full bg-black border-2 border-purple-600 flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                </div>
              </div>

              {/* Step Label */}
              <div
                className={`hidden md:block absolute top-0 ${
                  step.position === "left"
                    ? "left-[calc(50%+2.5rem)]"
                    : "right-[calc(50%+2.5rem)]"
                } bg-[#111] text-white text-sm px-4 py-1 rounded-full border border-white/10`}
              >
                Step {index + 1}
              </div>

              {/* Step Content */}
              <div
                className={`md:w-[48%] p-6 rounded-2xl bg-[#111] border border-white/10 shadow-md ${
                  step.position === "left" ? "md:mr-auto" : "md:ml-auto"
                }`}
              >
                <div className="flex items-center gap-3 mb-4 md:hidden">
                  <Image
                    src={step.icon}
                    alt="step icon"
                    width={24}
                    height={24}
                    className="invert"
                  />
                  <span className="text-sm bg-[#222] px-3 py-1 rounded-full">
                    Step {index + 1}
                  </span>
                </div>
                <h3 className="text-lg md:text-xl font-semibold mb-2">
                  {step.title}
                </h3>
                <p className="text-sm md:text-base text-gray-300 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}

          {/* Final Dot for Step 5 - hidden on mobile */}
          <div className="hidden md:flex justify-center items-center mb-2">
            <div className="w-6 h-6 rounded-full bg-black border-2 border-purple-600 flex items-center justify-center z-20">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
            </div>
          </div>

          {/* Step 5 Label */}
          <div className="flex justify-center mb-6">
            <span className="inline-block bg-[#111] text-white text-sm px-4 py-1 rounded-full border border-white/10">
              Step 5
            </span>
          </div>

          {/* Step 5 Content Box */}
          <div className="flex justify-center">
            <div className="bg-gradient-to-br from-[#1a011f] via-black to-black border border-white/10 p-10 rounded-2xl text-center max-w-2xl">
              <img
                src="/dash.avif"
                alt="Dashboard preview"
                className="rounded-xl mb-6 mx-auto"
                style={{ maxHeight: 300, objectFit: "contain" }}
              />
              <h3 className="text-2xl font-bold text-purple-400 mb-3">
                Launch The Campaign
              </h3>
              <p className="text-gray-400 mb-6 max-w-xl mx-auto">
                Once we have all the collaterals ready, we will launch the campaign.
              </p>
              <button className="bg-white text-black text-sm font-semibold px-6 py-3 rounded-xl shadow-md">
                Apply here to work with us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
