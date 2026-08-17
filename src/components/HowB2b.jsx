"use client";
import { Check } from "lucide-react";

export default function HowB2b() {
  const cards = [
    {
      number: "01",
      title: "Discovery",
      description:
        "We map your market, ideal customer profile and revenue goals so the strategy starts from your business  not a keyword tool.",
    },
    {
      number: "02",
      title: "Audit & Strategy ",
      description:
        "A full technical, content and competitor audit, distilled into a prioritised roadmap with clear expected impact.",
    },
    {
      number: "03",
      title: "Foundation Fixes",
      description:
        "We resolve the technical and on page issues holding your site back, starting with the highest-impact items.",
    },
    {
      number: "04",
      title: "Content & Authority",
      description:
        "Ongoing content production and digital PR that builds topical authority around the terms that drive revenue.",
    },
    {
      number: "05",
      title: "Measure & Scale ",
      description:
        "Monthly reporting on leads and pipeline then we double down on what's working and cut what isn't.",
    },
  ];

  return (
     <section className="w-full bg-[#f8f7fc] py-20 px-6 md:px-12">
      <div className="max-w-[1240px] mx-auto flex flex-col items-center">
        {/* HEADER SECTION */}
        <div className="mb-16 space-y-3 text-left w-full">
          <span className="block text-[13px] font-bold uppercase tracking-[0.25em] text-[#8A2BE2]">
            HOW IT WORKS
          </span>
           <h2 className="text-[32px] md:text-[44px] font-bold text-[#0A0C10] tracking-tight leading-tight">
            How our B2B SEO services work{" "}
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
