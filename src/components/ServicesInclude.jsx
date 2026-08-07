"use client";
import Image from "next/image";

export default function ServicesInclude() {
  const services = [
    {
      title: "SEO Audit",
      desc: "Technical, content & conversion review",
      icon: "/images/1.png",
    },
    {
      title: "Technical Prioritisation",
      desc: "What to fix first, and why",
      icon: "/images/2.png",
    },
    {
      title: "Keyword & Intent Strategy",
      desc: "Keyword & intent strategy",
      icon: "/images/3.png",
    },
    {
      title: "Competitor Research",
      desc: "Where you can realistically win",
      icon: "/images/4.png",
    },
    {
      title: "CRO Recommendations",
      desc: "Turn rankings into enquiries",
      icon: "/images/5.png",
    },
    {
      title: "Internal Linking",
      desc: "Architecture & equity flow",
      icon: "/images/6.png",
    },
    {
      title: "Content Plan",
      desc: "Topical authority & funnel mapping",
      icon: "/images/7.png",
    },
    {
      title: "Reporting Setup",
      desc: "GA4 & pipeline attribution",
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
          What B2B SEO consulting includes
        </h2>
        <p className="text-white/90 text-base md:text-lg max-w-2xl mx-auto pt-2 leading-relaxed font-normal">
          Every consulting engagement is led by a senior B2B SEO expert and
          scoped to where you are now.
        </p>
      </div>

      {/* GRID */}
      <div className="max-w-[1240px] w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 z-10">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-[#111319] border border-[#1F232E]/60 rounded-[12px] p-7 flex flex-col items-start justify-start text-left space-y-4 hover:border-[#2C3242]/80 transition-colors duration-200"
          >
            <div className="w-[44px] h-[44px] rounded-[8px] bg-[#1A1131] flex items-center justify-center shrink-0">
              <Image
                src={service.icon}
                alt={service.title}
                width={24}
                height={24}
              />
            </div>
            <div className="space-y-1.5 w-full">
              <h3 className="text-[16.5px] font-semibold text-white tracking-tight">
                {service.title}
              </h3>
              <p className="text-[14px] font-normal text-[#8A92A6]">
                {service.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
