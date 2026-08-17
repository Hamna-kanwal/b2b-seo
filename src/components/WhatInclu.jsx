"use client";
import Image from "next/image";

export default function WhatInclu() {
  const services = [
    {
      number: "01",
      title: "Technical SEO Review ",
      desc: "Crawlability, indexation, site speed, Core Web Vitals and the errors silently capping your rankings",
    },
    {
      number: "02",
      title: "Keyword & Intent Gap Analysis ",
      desc: "The high-intent terms your buyers search that you're invisible for and which to target first",
      icon: "/images/2.png",
    },
    {
      number: "03",
      title: "Content Audit ",
      desc: "Which pages to improve, consolidate, or cut and the gaps letting competitors take your buyers",
      icon: "/images/3.png",
    },
    {
      number: "04",
      title: "Competitor Benchmarking",
      desc: "Why the sites outranking you are winning, and the realistic path to overtaking them",
      icon: "/images/4.png",
    },
    {
      number: "05",
      title: "Backlink & Authority Review ",
      desc: "The strength and quality of your link profile, toxic links to address, and the gap to close",
      icon: "/images/5.png",
    },
    {
      number: "06",
      title: "On-Page & Structure Review ",
      desc: "Titles, headings, internal linking and site architecture assessed against what your terms demand",
      icon: "/images/6.png",
    },
    {
      number: "07",
      title: "Conversion Review ",
      desc: "Why visitors aren't becoming enquiries  landing page, journey and CTA issues costing you leads",
      icon: "/images/7.png",
    },
    {
      number: "08",
      title: "AI Visibility Check ",
      desc: "How ChatGPT, Gemini and Google's AI Overviews currently see and describe your brand",
      icon: "/images/8.png",
    },
  ];

  return (
    <section className="relative w-full bg-[#0A0C10] text-white py-20 px-6 md:px-12 flex flex-col items-center overflow-hidden">
      {/* BACKGROUND DECORATIONS - Using fixed dimensions to prevent layout errors */}
      <div className="absolute left-4 top-[4%] w-[260px] h-[260px] opacity-10 pointer-events-none z-0">
        <Image
          src="/images/white.png"
          alt="decoration"
          width={260}
          height={260}
        />
      </div>

      <div className="absolute right-[-5%] top-[10%] w-[400px] h-[400px] opacity-10 pointer-events-none z-0">
        <Image
          src="/images/Ellipse.png"
          alt="decoration"
          width={400}
          height={400}
        />
      </div>

      <div className="absolute right-[5%] top-[50%] w-[250px] h-[250px] opacity-[0.05] pointer-events-none z-0">
        <Image
          src="/images/Ellipse1.png"
          alt="decoration"
          width={250}
          height={250}
        />
      </div>

      {/* HEADER */}
      <div className="max-w-[800px] w-full text-center space-y-3 mb-16 z-10">
        <span className="block text-[13px] font-bold uppercase tracking-[0.25em] text-[#8A2BE2]">
          WHAT'S INCLUDED
        </span>
        <h2 className="text-[32px] md:text-[44px] font-bold text-white tracking-tight leading-tight">
          What your B2B SEO audit covers
        </h2>
        <p className="text-white/90 text-base md:text-lg max-w-2xl mx-auto pt-2 leading-relaxed font-normal">
          Eight areas, one prioritised roadmap. Every finding comes with what it
          is, why it matters, and exactly how to fix it.
        </p>
      </div>

      {/* GRID CONTAINER WITH UNIVERSAL MOBILE & DESKTOP BORDERS */}
      <div className="max-w-[1240px] w-full bg-[#111319] border border-[#1F232E] rounded-[16px] overflow-hidden z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((service, index) => {
          return (
            <div
              key={index}
              className={`p-8 flex flex-col justify-between text-left space-y-6 transition-colors duration-200 hover:bg-[#161922] ${
                index > 0 ? "border-t sm:border-t-0 border-[#1F232E]" : ""
              } ${index % 2 !== 0 ? "sm:border-l sm:border-[#1F232E]" : ""} ${
                index >= 2 ? "sm:border-t sm:border-[#1F232E]" : ""
              } ${index >= 4 ? "lg:border-t lg:border-[#1F232E]" : ""} ${
                index % 4 !== 0
                  ? "lg:border-l lg:border-[#1F232E]"
                  : "lg:border-l-0"
              }`}
            >
              <span className="text-[14px] font-bold text-[#8A2BE2] tracking-wider">
                {service.number}
              </span>
              <div className="space-y-2">
                <h3 className="text-[17px] font-semibold text-white tracking-tight leading-snug">
                  {service.title}
                </h3>
                <p className="text-[14px] font-normal text-[#8A92A6] leading-relaxed">
                  {service.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
