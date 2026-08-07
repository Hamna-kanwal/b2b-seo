"use client";
import Image from "next/image";
import { Check } from "lucide-react";

const cards = [
  {
    title: "Quality before scale",
    description:
      "We fix what is broken and prove a small set of pages before scaling. Volume without quality no longer ranks.",
    isDark: true,
  },
  {
    title: "Authority is the lever",
    description:
      "Rankings and AI citations follow trust. We earn real links and mentions, not shortcuts that put you at risk.",
    isDark: false,
  },
  {
    title: "Search and AI as one job",
    description:
      "We build for Google and for ChatGPT, Gemini, and AI Overviews together, because they share the same foundations.",
    isDark: true,
  },
  {
    title: "Plain language, real data",
    description:
      "No jargon and no vanity metrics. Every recommendation is grounded in pulled data, and every report shows what is working.",
    isDark: false,
  },
];

export default function About() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#8A2BE2] to-[#4C187C] flex flex-col items-center text-white font-sans overflow-hidden pt-24 md:pt-28">
      {/* HERO SECTION */}
      <section className="relative w-full flex flex-col items-center px-4 pt-12 md:pt-20 pb-16 md:pb-24 z-10">
        {/* Logo */}
        {/* <div className="relative w-32 h-12 md:w-44 md:h-16 mb-10">
          <Image
            src="/images/logo.png"
            alt="TeqNoor Logo"
            fill
            sizes="(min-width: 768px) 176px, 128px"
            className="object-contain"
            priority
          />
        </div> */}
        {/* Content Container */}
        <div className="max-w-[1100px] w-full text-center space-y-10">
          <h1 className="text-[32px] md:text-[54px] font-[800] leading-[1.15] tracking-tight max-w-[1200px] mx-auto text-center px-4">
            About Teqnoor
          </h1>

          {/* SUBTEXT SECTION */}
          <div className="max-w-5xl mx-auto space-y-6">
            <p className="text-[16px] md:text-[19px] font-[500] leading-relaxed opacity-90">
              Teqnoor is a B2B SEO consultancy based in London. We help
              businesses with considered buyers rank in Google and get named in
              AI answers, working as a hands on specialist rather than a layered
              agency. The founder who plans your SEO is the person who does the
              work.
            </p>
          </div>
        </div>
      </section>

      {/* APPROACH SECTION */}
      <section className="w-full bg-white py-20 px-6 md:px-12">
        <div className="max-w-[1240px] mx-auto flex flex-col items-center">
          <div className="mb-16 text-center">
            <span className="block text-[13px] font-bold uppercase tracking-[0.25em] text-[#8A2BE2] mb-3">
              OUR APPROACH
            </span>
            <h2 className="text-[32px] md:text-[44px] font-bold text-[#0A0C10] tracking-tight mb-4">
              What we build Teqnoor around
            </h2>
            <p className="text-[16px] md:text-[18px] text-[#0A0C10] font-normal leading-relaxed max-w-xl mx-auto">
              A few plain beliefs about what actually moves the needle in B2B
              search.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
            {cards.map((card, index) => (
              <div
                key={index}
                className={`flex flex-col p-8 rounded-[24px] ${
                  card.isDark
                    ? "bg-[#0A0C10] text-white"
                    : "bg-[#e3d9ff] text-[#0A0C10]"
                }`}
              >
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center mb-6 ${
                    card.isDark ? "bg-white/10" : "bg-[#8A2BE2]/10"
                  }`}
                >
                  <Check
                    className={`w-4 h-4 ${card.isDark ? "text-white" : "text-[#8A2BE2]"}`}
                    strokeWidth={3}
                  />
                </div>
                <h3 className="text-[18px] font-bold mb-3">{card.title}</h3>
                <p
                  className={`text-[14px] leading-relaxed ${
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

      {/* WHO WE HELP SECTION */}
      <section className="w-full bg-[#0A0C10] py-20 px-6">
        <div className="max-w-[800px] mx-auto text-center space-y-4">
          {/* H4 Heading - Kept purple for branding, or change to text-white if preferred */}
          <h4 className="text-[13px] font-bold uppercase tracking-[0.25em] text-[#8A2BE2]">
            Who we help
          </h4>

          {/* H3 Heading - Now White */}
          <h3 className="text-[32px] md:text-[44px] font-bold text-white tracking-tight">
            Who we work with
          </h3>

          {/* Paragraph - Now White */}
          <p className="text-[16px] md:text-[18px] text-white leading-relaxed pt-4 opacity-90">
            We work with B2B and high-value businesses whose buyers research
            before they commit: SaaS, professional services, law, accountancy,
            healthcare, and finance. If your sales cycle is long and your deals
            matter, the approach fits.
          </p>
        </div>
      </section>

      <section className="w-full bg-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Purple Rectangle Block */}
          <div className="bg-[#8A2BE2] rounded-[40px] p-10 md:p-20 flex flex-col items-center overflow-hidden">
            {/* Container with space-y-6 for consistent vertical spacing */}
            <div className="max-w-[800px] w-full text-center space-y-6">
              {/* Label */}
              <span className="block text-[13px] font-bold uppercase tracking-[0.25em] text-white">
                Founder led
              </span>

              {/* Headline */}
              <h2 className="text-[32px] md:text-[44px] font-bold text-white tracking-tight leading-[1.1]">
                Work with the specialist, not a handler
              </h2>

              {/* Body Text */}
              <p className="text-base md:text-lg text-white max-w-2xl leading-relaxed mx-auto opacity-90">
                Teqnoor is led by its founder,{" "}
                <span className="font-semibold text-white">Aamir Ehsan</span>.
                When you partner with us, you collaborate directly with the
                specialist. No junior teams learning on your account, and no
                account managers playing telephone. Just sharper strategy,
                faster decisions, and complete accountability for your results.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-[#F9F3FF] py-20 px-6 md:px-12">
        {/* Updated items-start to items-center and text-left to text-center */}
        <div className="max-w-[1240px] mx-auto flex flex-col items-center text-center">
          {/* HEADER */}
          <div className="mb-10 space-y-3">
            <span className="block text-[13px] font-bold uppercase tracking-[0.25em] text-[#8A2BE2]">
              BUILT FOR AI
            </span>
            <h2 className="text-[32px] md:text-[44px] font-bold text-[#0A0C10] tracking-tight">
              Built for how search is changing
            </h2>
            <p className="text-base md:text-lg text-[#0A0C10]/70 max-w-2xl leading-relaxed mx-auto">
              Buyers now ask AI assistants which vendors to shortlist, and most
              SEO providers have not caught up. We build AI visibility into
              everything we do, so your brand is found in the answer, not just
              the list of results.
            </p>
          </div>
        </div>
      </section>

      {/* cta */}
      <section className="w-full bg-white py-12 md:py-16 px-6">
        <div className="max-w-[1200px] mx-auto">
          {/* CTA Card */}
          <div className="relative overflow-hidden rounded-[36px] bg-[#06060B] px-8 py-16 md:px-16 md:py-20 text-center">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
              <Image
                src="/images/cta.jpeg"
                alt="CTA Background"
                fill
                priority
                className="object-cover"
              />
            </div>

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/40 z-0" />

            {/* Content */}
            <div className="relative z-10 max-w-[850px] mx-auto flex flex-col items-center">
              <h2 className="text-white text-[26px] md:text-[42px] font-bold leading-[1.2] tracking-[-0.03em] mb-5">
                Work with a B2B SEO specialist{" "}
              </h2>

              <p className="text-[#B7B7C2] text-[15px] md:text-[18px] leading-relaxed mb-10">
                Start with a free SEO review. See where you stand and what a
                focused plan would change.{" "}
              </p>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-5">
                {/* Purple Button */}
                <button className="bg-gradient-to-r from-[#8A2BE2] to-[#A855F7] hover:scale-105 transition-all duration-300 text-white font-semibold text-[16px] px-8 py-4 rounded-2xl shadow-lg">
                  Get a free SEO review
                </button>

                {/* White Button */}
                <button className="bg-white hover:bg-[#F5F5F5] hover:scale-105 transition-all duration-300 text-[#8A2BE2] font-semibold text-[16px] px-8 py-4 rounded-2xl shadow-lg">
                  Contact us
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
