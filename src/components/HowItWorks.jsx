"use client";
import { Check } from "lucide-react";

export default function HowItWorks() {
  const cards = [
    {
      number: "01",
      title: "Discovery",
      description:
        "Understand your market, ideal customer profile and commercial goals.",
    },
    {
      number: "02",
      title: "Audit",
      description:
        "Find what’s blocking rankings and, more importantly, leads.",
    },
    {
      number: "03",
      title: "Strategy roadmap",
      description: "A prioritised plan you own, in plain language.",
    },
    {
      number: "04",
      title: "Implementation support",
      description: "We guide your team or agency through delivery.",
    },
    {
      number: "05",
      title: "Review & optimisation",
      description: "Measure enquiries, refine, repeat.",
    },
  ];

  return (
    <section className="w-full bg-[#f8f7fc] py-20 px-6 md:px-12">
      <div className="max-w-[1240px] mx-auto flex flex-col items-center">
        {/* HEADER SECTION */}
        <div className="mb-16 space-y-3 text-left w-full">
          <span className="block text-[13px] font-bold uppercase tracking-[0.25em] text-[#8A2BE2]">
            WHY CHOOSE US
          </span>
          <h2 className="text-[32px] md:text-[44px] font-bold text-[#0A0C10] tracking-tight leading-tight">
            How B2B SEO consulting works
          </h2>
        </div>
        {/* TIMELINE CONTAINER */}
        <div className="relative w-full">
          {/* Continuous background line spanning precisely across the first 4 columns */}
          <div className="hidden lg:block absolute top-[22px] left-0 right-[calc(20%_-_22px)] h-[2px] bg-[#E2E8F0] z-0" />

          {/* STEPS GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-x-8 lg:gap-x-8 gap-y-10 w-full relative z-10">
            {cards.map((card, index) => {
              const isFirst = index === 0;

              return (
                <div
                  key={index}
                  className="flex flex-col items-start text-left space-y-4"
                >
                  {/* Number Indicator Circle with exact background ring clipping to join the line seamlessly */}
                  <div
                    className={`w-11 h-11 rounded-full flex items-center justify-center font-bold text-sm shadow-sm relative z-10 shrink-0 ${
                      isFirst
                        ? "bg-[#8A2BE2] text-white"
                        : "bg-[#0A0C10] text-white"
                    }`}
                    style={{
                      boxShadow: "0 0 0 4px #f8f7fc",
                    }}
                  >
                    {card.number}
                  </div>

                  {/* Card Content with balanced vertical spacing and uniform layout */}
                  <div className="space-y-3 pt-2 w-full">
                    <h3 className="text-[18px] font-bold text-[#0A0C10] tracking-tight leading-snug min-h-[50px] flex items-center">
                      {card.title}
                    </h3>
                    <p className="text-[14px] text-gray-600 leading-relaxed font-normal">
                      {card.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
