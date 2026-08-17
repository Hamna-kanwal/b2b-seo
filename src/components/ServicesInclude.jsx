"use client";
import Image from "next/image";

export default function ServicesInclude() {
  const services = [
    {
      number: "01",
      title: "SEO Audit",
      desc: "Technical, content & conversion review",
    },
    {
      number: "02",
      title: "Technical Prioritisation",
      desc: "What to fix first, and why",
    },
    {
      number: "03",
      title: "Keyword & Intent Strategy",
      desc: "Keyword & intent strategy",
    },
    {
      number: "04",
      title: "Competitor Research",
      desc: "Where you can realistically win",
    },
    {
      number: "05",
      title: "CRO Recommendations",
      desc: "Turn rankings into enquiries",
    },
    {
      number: "06",
      title: "Internal Linking",
      desc: "Architecture & equity flow",
    },
    {
      title: "Content Plan",
      desc: "Topical authority & funnel mapping",
    },
    {
      title: "Reporting Setup",
      desc: "GA4 & pipeline attribution",
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
          What B2B SEO consulting includes
        </h2>
        <p className="text-white/90 text-base md:text-lg max-w-2xl mx-auto pt-2 leading-relaxed font-normal">
          Every consulting engagement is led by a senior B2B SEO expert and
          scoped to where you are now.
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
