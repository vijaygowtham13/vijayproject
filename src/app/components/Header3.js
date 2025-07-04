"use client";

import React, { useEffect, useRef, useState } from "react";

const steps = [
  {
    id: 1,
    title: "Identify Your Problems in Lead Generation and Sales System",
    description:
      "Our dedicated account executive will analyse the current issues in your system.",
    svg: "/first.svg",
    position: "left",
  },
  {
    id: 2,
    title: "ICP and Offer Creation",
    description:
      "We create your ICP list with a compelling offer that your prospects can’t say \"NO TO\". If needed, we will revamp your current ICP and offer to ensure we have accurate data.",
    svg: "/second.svg",
    position: "right",
  },
  {
    id: 3,
    title: "Pipeline and Sales Tool Implementation",
    description: (
      <>
        <strong>Pipeline Setup:</strong> We set up your pipeline account and create a custom lead nurturing scheme.
        <br />
        <strong>Sales Tools Stack:</strong> Utilizing our in-house sales tools stack, we set up the process for the campaign.
      </>
    ),
    svg: "/third.svg",
    position: "left",
  },
  {
    id: 4,
    title: "Creation of Sales Assets and Content",
    description: (
      <>
        <strong>Sales Assets:</strong> We create essential sales assets such as lead magnets, case studies, content, graphics, and outbound scripts.
        <br />
        <strong>Inbound System:</strong> We develop engaging content that will be used across social media campaigns as part of our inbound system.
        <br />
        <strong>Outbound System:</strong> We set up cold email infrastructure, warm domains, and A/B test campaigns.
      </>
    ),
    svg: "/fourth.svg",
    position: "right",
  },
];

export default function StepTimeline() {
  const containerRef = useRef(null);
  const lineRef = useRef(null);
  const [lineHeight, setLineHeight] = useState(0);
  const [activeDots, setActiveDots] = useState([]);

  useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current;
      const line = lineRef.current;
      if (!container || !line) return;

      const windowHeight = window.innerHeight;
      const scrollTop = window.scrollY;
      const elementTop = container.offsetTop;
      const elementHeight = container.offsetHeight;
      const totalHeight = elementHeight - 350;

      const rawProgress = (scrollTop + windowHeight - elementTop) / elementHeight;
      const slowedProgress = rawProgress * 0.8;
      const progress = Math.min(Math.max(slowedProgress, 0), 1);
      const height = progress * totalHeight;

      setLineHeight(height);

      const dotElements = document.querySelectorAll(".timeline-dot");
      const active = [];
      dotElements.forEach((dot, idx) => {
        const dotPos = dot.getBoundingClientRect().top + window.scrollY - elementTop;
        // Glow when the line height has passed the center of the dot
        if (height >= dotPos - 8) {
          active.push(idx);
        }
      });
      setActiveDots(active);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const elements = document.querySelectorAll(".mobile-reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, idx) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("visible");
            }, idx * 150);
          }
        });
      },
      { threshold: 0.2 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => elements.forEach((el) => observer.unobserve(el));
  }, []);

  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      @media (max-width: 767px) {
        .mobile-reveal {
          opacity: 0;
          transform: translateY(60px);
          transition: opacity 0.8s ease, transform 0.8s ease;
        }
        .mobile-reveal.visible {
          opacity: 1;
          transform: translateY(0);
        }
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  return (
    <section
      className="relative w-full bg-black text-white py-20 px-4 md:px-20 overflow-hidden font-sans"
      ref={containerRef}
    >
      <h2 className="text-center text-3xl md:text-4xl font-light mb-16 text-white/90">
        How We Help You ?
      </h2>

      <div className="relative flex justify-center">
        {/* Scroll Line */}
        <div
          ref={lineRef}
          className="hidden md:block absolute top-0 left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-purple-600 via-purple-700 to-purple-900 z-0"
          style={{ height: `${lineHeight}px` }}
        ></div>

        <div className="relative z-10 w-full max-w-5xl">
          {steps.map((step, index) => (
            <div
              key={step.id}
              className="mb-24 relative flex flex-col md:flex-row items-center md:justify-between"
            >
              {/* Dot */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 z-20 timeline-dot">
                <div
                  className={`w-4 h-4 rounded-full transition-all duration-300 ${
                    activeDots.includes(index) ? "bg-red-500 shadow-lg" : "bg-gray-600"
                  }`}
                ></div>
              </div>

              {/* Step Label */}
              <div
                className={`hidden md:block absolute top-0 ${
                  step.position === "left"
                    ? "left-[calc(50%+2.5rem)]"
                    : "right-[calc(50%+2.5rem)]"
                } bg-[#111] text-white text-sm px-4 py-1 rounded-full border border-white/10 font-medium`}
              >
                Step {index + 1}
              </div>

              {/* Content */}
              <div
                className={`mobile-reveal md:w-[48%] p-6 rounded-2xl bg-[#111] border border-white/10 shadow-md ${
                  step.position === "left" ? "md:mr-auto" : "md:ml-auto"
                }`}
              >
                {step.svg && (
                  <img
                    src={step.svg}
                    alt={`Step ${index + 1}`}
                    className="w-12 md:w-15 h-auto rounded-lg mb-2 ml-0"
                    style={{ marginLeft: "-0.75rem" }}
                  />
                )}

                <h3 className="text-lg md:text-xl font-semibold mb-2 tracking-tight">
                  {step.title}
                </h3>
                <p className="text-sm md:text-base text-gray-300 leading-relaxed font-light">
                  {step.description}
                </p>
              </div>
            </div>
          ))}

          {/* Final Dot */}
          <div className="hidden md:flex justify-center items-center mb-2 timeline-dot">
            <div
              className={`w-4 h-4 rounded-full transition-all duration-300 ${
                activeDots.includes(steps.length) ? "bg-red-500 shadow-lg" : "bg-gray-600"
              }`}
            ></div>
          </div>

          {/* Final Label */}
          <div className="flex justify-center mb-6">
            <span className="inline-block bg-[#111] text-white text-sm px-4 py-1 rounded-full border border-white/10 font-medium">
              Step 5
            </span>
          </div>

          {/* Launch Campaign */}
          <div className="flex justify-center">
            <div className="mobile-reveal bg-gradient-to-br from-[#1a011f] via-black to-black border border-white/10 p-10 rounded-2xl text-center max-w-2xl">
              <img
                src="/dash.avif"
                alt="Dashboard preview"
                className="rounded-xl mb-6 mx-auto"
                style={{ maxHeight: 300, objectFit: "contain" }}
              />
              <h3 className="text-2xl font-bold text-purple-400 mb-3 tracking-tight">
                Launch The Campaign
              </h3>
              <p className="text-gray-400 mb-6 max-w-xl mx-auto font-light">
                Once we have all the collaterals ready, we will launch the campaign.
              </p>
              <button className="bg-white text-black text-sm font-medium px-6 py-3 rounded-xl shadow-md">
                Apply here to work with us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
