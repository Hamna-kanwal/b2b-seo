"use client";
import Image from "next/image";

export default function WhatInclude() {
  const services = [
    {
      number: "01",
      title: "Technical SEO ",
      desc: "Crawlability, indexation, site peed and Core Web Vitals  the foundations that let everything else rank",
    },
    {
      number: "02",
      title: "Keyword & Intent Research ",
      desc: "High-intent terms mapped to every stage of your buyer's journey, from problem-aware to ready-to-buy",
    },
    {
      number: "03",
      title: "On-Page Optimisation ",
      desc: "Titles, headings, copy and structure aligned with what buyers search and search engines reward",
    },
    {
      number: "04",
      title: "B2B Content Creation ",
      desc: "Bottom of funnel pages, comparison content and thought leadership written for decision-makers",
    },
    {
      number: "05",
      title: "Digital PR & Link Building ",
      desc: " Authority building links from relevant, credible publications  no directories, no link farms",
    },
    {
      number: "06",
      title: "Conversion Optimisation ",
      desc: "Landing pages and journeys engineered to turn visits into demo requests and enquiries",
    },
    {
      number: "07",
      title: "Local & International SEO ",
      desc: "Visibility in the regions and markets where your buyers are  from UK-wide to multi country",
    },
    {
      number: "08",
      title: "Reporting & Attribution ",
      desc: "GA4 and CRM connected reporting that ties organic search directly to pipeline and revenue",
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
          What our B2B SEO services cover
        </h2>
        <p className="text-white/90 text-base md:text-lg max-w-2xl mx-auto pt-2 leading-relaxed font-normal">
          A complete, fully managed programme every element handled by senior
          specialists and prioritised around commercial impact.
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
              } ${
                index % 2 !== 0 ? "sm:border-l sm:border-[#1F232E]" : ""
              } ${
                index >= 2 ? "sm:border-t sm:border-[#1F232E]" : ""
              } ${
                index >= 4 ? "lg:border-t lg:border-[#1F232E]" : ""
              } ${
                index % 4 !== 0 ? "lg:border-l lg:border-[#1F232E]" : "lg:border-l-0"
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
