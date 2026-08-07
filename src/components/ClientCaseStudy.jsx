"use client";
import React, { useState } from "react"; 
import Image from "next/image";

// Fixed the syntax here: added the closing parenthesis after { onOpenAudit }
export default function ClientCaseStudy({ onOpenAudit }) {
  // State to manage which image is being viewed in full screen
  const [activeImage, setActiveImage] = useState(null);

  const tableData = [
    { label: "CLIENT", value: "JK Foods UK" },
    { label: "Total Clicks", value: "15.2K" },
    { label: "Impressions", value: "1.61M" },
    { label: "CTR", value: "0.9%" },
    { label: "Avg Position", value: "23.9" },
  ];
  const tableData2 = [
    { label: "Total campaigns", value: "11" },
    { label: "Total leads", value: "1,096" },
    { label: "Total reach", value: "203,604" },
    { label: "Avg cost per lead", value: "£6.43" },
    { label: "Avg frequency", value: "2.75" },
  ];

  const steps = [
    {
      title: "The Challenge",
      description:
        "Despite being a market leader with decades of experience, JK Foods needed their digital copy to match the authority and authenticity of their brand. Website content was generic, not keyword-optimised, and failed to communicate their value proposition to prospective wholesale clients visiting the site.",
      bgColor: "bg-[#FFEFF1]",
      image: "/images/1.jpg",
    },
    {
      title: "Our Approach",
      description: [
        "Teqnoor combined SEO and Meta Ads to strengthen JK Foods’ digital growth, targeting high-intent B2B buyers through commercial search terms and precision ad campaigns.",
        "Optimised content, local SEO, and conversion-focused Meta lead ads generated 400+ premium leads, increased organic visibility, and delivered strong ROI within 90 days."
      ],
      bgColor: "bg-[#D8FFFF]",
      image: "/images/2.jpg",
    },
    {
      title: "SEO Outcome",
      description: [
        "Improved Google rankings across relevant UK Asian food wholesale searches, with JK Foods appearing more prominently for multiple high-intent keywords.",
        "Stronger SEO visibility helped increase search presence and brand discoverability.",
      ],
      bgColor: "bg-[#FFFCD8]",
      image: "/images/outcome-new.png",
    },
    {
      title: "Meta Ads Leads Outcome",
      description: [
        "Generated consistent B2B lead volumes through targeted Meta campaigns, with several campaigns achieving low cost per lead while maintaining strong reach and conversion performance.",
        "Results showed effective audience targeting and scalable lead generation across multiple campaigns.",
      ],
      bgColor: "bg-[#F3E8FF]",
      image: "/images/meta.jpeg",
    },
  ];

  return (
    <>
      {/* 1. Lightbox Overlay */}
      {activeImage && (
        <div 
          className="fixed inset-0 z-[999] bg-black/90 flex items-center justify-center p-4 md:p-12 cursor-zoom-out"
          onClick={() => setActiveImage(null)}
        >
          <div className="relative w-full h-full max-w-6xl flex items-center justify-center">
            <button 
              className="absolute top-0 right-0 text-white text-4xl p-4 z-50 hover:text-gray-300"
              onClick={() => setActiveImage(null)}
            >
              &times;
            </button>
            <div className="relative w-full h-full">
              <Image
                src={activeImage}
                alt="Enlarged view"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      )}

      {/* 2. Purple Header Section */}
      <section className="w-full bg-[#8A2BE2] py-20 md:py-28 px-6 flex flex-col items-center text-white overflow-hidden">
        <div className="max-w-[1100px] w-full text-center relative z-10">
          <span className="font-extrabold text-[13px] md:text-[15px] uppercase tracking-[0.25em] mb-8 block opacity-90">
            Client Case Study
          </span>

          <h2 className="text-[32px] md:text-[54px] font-[800] leading-[1.1] mb-10 tracking-tight">
            How We Elevated JK Foods UK&apos;s Digital Presence
          </h2>

          <div className="max-w-[880px] mx-auto mb-10">
            <p className="text-[16px] md:text-[18px] font-[500] leading-[1.7] opacity-95">
              JK Foods UK is one of Britain's foremost importers and
              distributors of authentic East Asian foods, supplying Chinese
              restaurants, takeaways, retailers, and wholesalers nationwide.
              Founded in Nottingham as part of the Hyperama Group, they have
              been operating since 1976 and have expanded internationally.
            </p>
          </div>

          <button 
            onClick={onOpenAudit} // Added the trigger here
            className="bg-white text-[#5D16B3] px-12 py-5 rounded-xl font-[800] text-lg md:text-xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] hover:scale-105 active:scale-95 transition-all duration-200 uppercase tracking-widest"
          >
            Get Your Wholesale Lead Gap Report
          </button>
        </div>
      </section>

      {/* SEO Performance Table */}
      <section className="w-full bg-white pt-16 md:pt-24 pb-8 md:pb-12 px-4 flex flex-col items-center">
        <div className="max-w-[1100px] w-full mb-8 text-center">
          <h2 className="text-[#8A2BE2] text-[24px] md:text-[32px] font-[900] tracking-tight uppercase">
            Proven SEO Stats
          </h2>
        </div>
        <div className="max-w-[1100px] w-full rounded-[30px] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.08)] border border-gray-100">
          <div className="grid grid-cols-1 md:grid-cols-5 items-stretch">
            {tableData.map((item, index) => (
              <div
                key={index}
                className={`flex flex-col border-b border-gray-100 md:border-b-0 ${index !== tableData.length - 1 ? "md:border-r" : ""}`}
              >
                <div className="bg-[#8A2BE2] min-h-[60px] md:min-h-[70px] flex items-center justify-center px-4 text-center">
                  <span className="text-white font-[800] text-[11px] lg:text-[12px] uppercase tracking-[0.15em] leading-tight">
                    {item.label}
                  </span>
                </div>
                <div className="flex-1 flex items-center justify-center p-6 text-center bg-white min-h-[100px] md:min-h-[120px]">
                  <p className="text-black font-[800] text-[18px] md:text-[22px] tracking-tight">
                    {item.value}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meta Leads Table */}
      <section className="w-full bg-white pt-4 pb-16 md:pb-24 px-4 flex flex-col items-center">
        <div className="max-w-[1100px] w-full mb-8 text-center">
          <h2 className="text-black text-[24px] md:text-[32px] font-[900] tracking-tight uppercase">
            Meta leads generation{" "}
            <span className="font-normal uppercase text-gray-500"> (premium b2b leads)</span>
          </h2>
        </div>
        <div className="max-w-[1100px] w-full rounded-[30px] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.08)] border border-gray-100">
          <div className="grid grid-cols-1 md:grid-cols-5 items-stretch">
            {tableData2.map((item, index) => (
              <div
                key={index}
                className={`flex flex-col border-b border-gray-100 md:border-b-0 ${index !== tableData2.length - 1 ? "md:border-r" : ""}`}
              >
                <div className="bg-[#8A2BE2] min-h-[60px] md:min-h-[70px] flex items-center justify-center px-4 text-center">
                  <span className="text-white font-[800] text-[11px] lg:text-[12px] uppercase tracking-[0.15em] leading-tight">
                    {item.label}
                  </span>
                </div>
                <div className="flex-1 flex items-center justify-center p-6 text-center bg-white min-h-[100px] md:min-h-[120px]">
                  <p className="text-black font-[800] text-[18px] md:text-[22px] tracking-tight">
                    {item.value}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Steps/Cards Section */}
      <section className="w-full bg-white pb-24 px-4 flex flex-col items-center gap-12 md:gap-16">
        {steps.map((step, index) => (
          <div
            key={index}
            className="max-w-[1100px] w-full flex flex-col md:flex-row items-stretch rounded-[32px] overflow-hidden border border-gray-100 shadow-sm transition-transform hover:scale-[1.01] duration-300"
          >
            {/* Clickable Image Container */}
            <div 
              className="w-full md:w-1/2 relative h-[300px] md:h-auto md:min-h-[450px] bg-white p-6 cursor-zoom-in group"
              onClick={() => setActiveImage(step.image)}
            >
              <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-inner bg-gray-50 transition-colors group-hover:bg-gray-100">
                <Image
                  src={step.image}
                  alt={step.title}
                  fill
                  className="object-contain transition-transform duration-500 group-hover:scale-[1.03]"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority={index === 0}
                />
                {/* Visual Hint */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 flex items-center justify-center transition-all opacity-0 group-hover:opacity-100">
                  <span className="bg-white/90 text-black text-xs font-bold px-3 py-2 rounded-full shadow-lg">Click to View</span>
                </div>
              </div>
            </div>
            <div
              className={`md:w-1/2 ${step.bgColor} p-8 md:p-12 lg:p-16 flex flex-col justify-center`}
            >
              <h3 className="text-black text-2xl md:text-3xl font-[900] mb-6 tracking-tight">
                {step.title}
              </h3>
              <div className="max-w-[440px]">
                {Array.isArray(step.description) ? (
                  <ul className="space-y-3">
                    {step.description.map((point, i) => (
                      <li
                        key={i}
                        className="text-gray-900 text-[15px] font-[600] leading-snug flex items-start"
                      >
                        <span className="mr-3 mt-2 w-1.5 h-1.5 bg-black rounded-full shrink-0"></span>
                        {point}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-900 text-[15px] font-[600] leading-relaxed">
                    {step.description}
                  </p>
                )}
              </div>
            </div>
          </div>
        ))}
      </section>
    </>
  );
}