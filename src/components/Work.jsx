"use client";
import { Check } from "lucide-react";

export default function Works() {
  const cards = [
    {
      title: "Audit",
      description:
        "We audit your site, rankings, and the terms your buyers search.",
      isDark: true,
    },
    {
      title: "Fix and build",
      description:
        "We fix the quality and technical basics, then build the pages that bring leads.Find what’s blocking rankings and, more importantly, leads.",
      isDark: false,
    },
    {
      title: "Earn authority",
      description:
        "We earn the links and mentions that give your pages the trust to rank.",
      isDark: true,
    },
    {
      title: "Optimise for AI",
      description:
        "We structure content so AI answers name you, not just rank you.",
      isDark: false,
    },
    {
      title: "Track and refine",
      description:
        "We report each month on rankings, leads, and AI citations, and refine what works.",
      isDark: true,
    },
  ];

  return (
    <section className="w-full bg-white py-20 px-6 md:px-12">
      <div className="max-w-[1240px] mx-auto flex flex-col items-center">
        
        {/* HEADER SECTION */}
        <div className="mb-12 space-y-3 text-center">
          <span className="block text-[13px] font-bold uppercase tracking-[0.25em] text-[#8A2BE2]">
            HOW WE WORK
          </span>
          <h2 className="text-[32px] md:text-[44px] font-bold text-[#0A0C10] tracking-tight leading-tight">
           How we work
          </h2>
        </div>

        {/* CARDS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 w-full items-stretch">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`flex flex-col p-8 rounded-[24px] transition-all duration-300 ${
                card.isDark
                  ? "bg-[#0A0C10] text-white"
                  : "bg-[#e3d9ff] text-[#0A0C10]"
              } ${
                index === 4 ? "sm:col-span-2 lg:col-span-1 max-w-sm mx-auto sm:max-w-none w-full" : ""
              }`}
            >
              {/* Custom Icon Circle */}
              <div
                className={`w-7 h-7 rounded-full flex items-center justify-center mb-8 shrink-0 ${
                  card.isDark ? "bg-white/10" : "bg-[#8A2BE2]/10"
                }`}
              >
                <Check
                  className={`w-4 h-4 ${
                    card.isDark ? "text-white" : "text-[#8A2BE2]"
                  }`}
                  strokeWidth={3}
                />
              </div>

              {/* Card Content */}
              <h3 className="text-[20px] font-bold tracking-tight leading-snug mb-4">
                {card.title}
              </h3>
              <p
                className={`text-[14px] leading-relaxed font-normal ${
                  card.isDark ? "text-gray-400" : "text-gray-700"
                }`}
              >
                {card.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}