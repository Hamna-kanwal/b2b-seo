"use client";
import Image from "next/image";

export default function Included() {
  const services = [
    {
      number: "01",
      title: "AI Visibility Audit",
      desc: "How ChatGPT, Gemini, Perplexity and AI Overviews currently see, describe and recommend your brand",
    },
    {
      number: "02",
      title: "Generative Engine Optimisation (GEO)",
      desc: "Content structured the way LLMs read clear entities, direct answers, quotable claims",
    },
    {
      number: "03",
      title: "Entity & Brand Optimisation",
      desc: "Consistent, authoritative brand signals across the web so AI models know exactly who you are and what you do",
    },
    {
      number: "04",
      title: "Schema & Structured Data",
      desc: "Technical markup that helps both search engines and AI systems understand and trust your content",
    },
    {
      number: "05",
      title: "Citation-Worthy Content",
      desc: "Original data, expert commentary and definitive resources that AI answers reference by name",
    },
    {
      number: "06",
      title: "AI Overviews Optimisation",
      desc: "Targeting the queries where Google shows AI-generated answers and earning a place in them",
    },
    {
      number: "07",
      title: "Digital PR for AI",
      desc: "Mentions on the sites and sources LLMs are trained on and retrieve from the inputs behind the answers",
    },
    {
      number: "08",
      title: "AI Share-of-Voice Tracking",
      desc: "Monthly monitoring of how often, and how favourably, each AI platform mentions you versus competitors",
    },
  ];

  return (
    <section className="relative w-full bg-[#0A0C10] text-white py-20 px-6 md:px-12 flex flex-col items-center overflow-hidden">
      {/* BACKGROUND DECORATIONS */}
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
      <div className="max-w-[1240px] w-full text-left space-y-3 mb-12 z-10">
        <span className="block text-[13px] font-bold uppercase tracking-[0.25em] text-[#8A2BE2]">
          WHAT'S INCLUDED
        </span>
        <h2 className="text-[32px] md:text-[44px] font-bold text-white tracking-tight leading-tight">
          What our AI SEO services cover
        </h2>
        <p className="text-white/80 text-base md:text-lg max-w-2xl pt-1 leading-relaxed font-normal">
          A complete programme to make your brand visible, credible and citable
          across AI search built on strong traditional SEO foundations.
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