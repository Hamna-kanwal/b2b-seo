"use client";
import Image from "next/image";

export default function Included() {
  const services = [
    {
      title: "AI Visibility Audit",
      desc: "How ChatGPT, Gemini, Perplexity and AI Overviews currently see, describe and recommend your brand",
      icon: "/images/1.png",
    },
    {
      title: "Generative Engine Optimisation (GEO) ",
      desc: "Content structured the way LLMs read clear entities, direct answers, quotable claims",
      icon: "/images/2.png",
    },
    {
      title: "Entity & Brand Optimisation",
      desc: "Consistent, authoritative brand signals across the web so AI models know exactly who you are and what you do",
      icon: "/images/3.png",
    },
    {
      title: "Schema & Structured Data",
      desc: "Technical markup that helps both search engines and AI systems understand and trust your content",
      icon: "/images/4.png",
    },
    {
      title: "Citation-Worthy Content ",
      desc: "Original data, expert commentary and definitive resources that AI answers reference by name",
      icon: "/images/5.png",
    },
    {
      title: "AI Overviews Optimisation ",
      desc: "Targeting the queries where Google shows AI-generated answers  and earning a place in them",
      icon: "/images/6.png",
    },
    {
      title: "Digital PR for AI ",
      desc: "Mentions on the sites and sources LLMs are trained on and retrieve from  the inputs behind the answers",
      icon: "/images/7.png",
    },
    {
      title: "AI Share-of-Voice Tracking ",
      desc: "Monthly monitoring of how often, and how favourably, each AI platform mentions you versus competitors",
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
          What our AI SEO services cover
        </h2>
        <p className="text-white/90 text-base md:text-lg max-w-2xl mx-auto pt-2 leading-relaxed font-normal">
          A complete programme to make your brand visible, credible and citable
          across AI search  built on strong traditional SEO foundations.
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
