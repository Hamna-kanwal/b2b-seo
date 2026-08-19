"use client";
import Image from "next/image";
import Link from "next/link";
import { Check } from "lucide-react";
import { useState } from "react";
import AuditForm from "@/components/AuditForm";

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
  const [isAuditModalOpen, setIsAuditModalOpen] = useState(false);

  const openAudit = () => setIsAuditModalOpen(true);
  const closeAudit = () => setIsAuditModalOpen(false);
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#8A2BE2] to-[#4C187C] flex flex-col items-center text-white font-sans overflow-hidden pt-24 md:pt-28">
      {/* HERO SECTION */}
      <section className="relative w-full flex flex-col items-center px-4 pt-12 md:pt-20 pb-16 md:pb-24 z-10">
       
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
  <div className="max-w-[1240px] mx-auto flex flex-col items-start">
    <div className="mb-16 text-left">
      <span className="block text-[13px] font-bold uppercase tracking-[0.25em] text-[#8A2BE2] mb-3">
        OUR APPROACH
      </span>
      <h2 className="text-[32px] md:text-[44px] font-bold text-[#0A0C10] tracking-tight mb-4">
        What we build Teqnoor around
      </h2>
      <p className="text-[16px] md:text-[18px] text-gray-600 font-normal leading-relaxed max-w-xl">
        A few plain beliefs about what actually moves the needle in B2B
        search.
      </p>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
      {cards.map((card, index) => {
        const formattedNumber = String(index + 1).padStart(2, '0');
        return (
          <div
            key={index}
            className="flex flex-col p-8 rounded-[24px] bg-[#f8f7fc] border border-purple-100/60 shadow-sm"
          >
            <span className="text-[14px] font-bold text-[#8A2BE2] mb-6 tracking-wider">
              {formattedNumber}
            </span>
            <h3 className="text-[18px] font-bold text-[#0A0C10] mb-3">{card.title}</h3>
            <p className="text-[14px] leading-relaxed text-gray-600">
              {card.description}
            </p>
          </div>
        );
      })}
    </div>
  </div>
</section>
      {/* WHO WE HELP SECTION */}
      <section className="w-full bg-[#f3f0fb] py-20 px-6 md:px-12">
  <div className="max-w-[1240px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
    
    {/* Left Column: Heading */}
    <div className="text-left">
      <h4 className="text-[13px] font-bold uppercase tracking-[0.25em] text-[#8A2BE2] mb-3">
        Who we help
      </h4>
      <h3 className="text-[32px] md:text-[44px] font-bold text-[#0A0C10] tracking-tight">
        Who we work with
      </h3>
    </div>

    {/* Right Column: Text & Industry Pills */}
    <div className="flex flex-col space-y-6 text-left">
      <p className="text-[16px] md:text-[18px] text-gray-700 leading-relaxed font-normal">
        We work with B2B and high-value businesses whose buyers research
        before they commit. If your sales cycle is long and your deals
        matter, the approach fits.
      </p>

      {/* Pills Container */}
      <div className="flex flex-wrap gap-3 pt-2">
        {["SAAS", "Professional Services", "Law", "Accountancy", "Healthcare", "Finance"].map((tag, index) => (
          <span
            key={index}
            className="px-5 py-2.5 rounded-full border border-purple-200/80 bg-white text-gray-800 text-[14px] font-medium shadow-sm hover:border-[#8A2BE2] transition-all"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>

  </div>
</section>
{/* founder-led section */}
     <section className="w-full bg-white py-20 px-6 md:px-12">
  <div className="max-w-[1240px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
    
    {/* Left Column: Image Card */}
    <div className="lg:col-span-5 flex flex-col items-start">
      <div className="w-full bg-[#0A0C10] rounded-[24px] overflow-hidden shadow-xl border border-gray-100 p-2">
        <img
          src="/path-to-your-founder-image.jpg"
          alt="Aamir Ehsan - Founder, Teqnoor"
          className="w-full h-[380px] sm:h-[420px] object-cover rounded-[20px]"
        />
      </div>
      <div className="mt-4 px-1">
        <h3 className="text-base font-bold text-gray-900">Aamir Ehsan</h3>
        <p className="text-sm text-gray-500 font-medium">Founder, Teqnoor</p>
      </div>
    </div>

    {/* Right Column: Content */}
    <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
      <span className="text-[13px] font-bold uppercase tracking-[0.25em] text-[#8A2BE2]">
        Founder led
      </span>

      <h2 className="text-[32px] md:text-[44px] font-bold text-[#0A0C10] tracking-tight leading-[1.1]">
        Work with the specialist, not a handler
      </h2>

      <p className="text-base md:text-lg text-gray-600 leading-relaxed font-normal">
        Teqnoor is led by its founder,{" "}
        <span className="font-semibold text-gray-900">Aamir Ehsan</span>.
        When you partner with us, you collaborate directly with the
        specialist. No junior teams learning on your account, and no
        account managers playing telephone. Just sharper strategy,
        faster decisions, and complete accountability for your results.
      </p>
    </div>

  </div>
</section>

      <section className="w-full bg-[#0A0C10] py-20 px-6 md:px-12 text-white">
  <div className="max-w-[1240px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
    
    {/* Left Column: Heading and Description */}
    <div className="lg:col-span-6 text-left space-y-4">
      <div className="flex items-center space-x-2">
        <span className="text-[#8A2BE2] font-bold">—</span>
        <span className="text-[13px] font-bold uppercase tracking-[0.25em] text-[#8A2BE2]">
          BUILT FOR AI
        </span>
      </div>

      <h2 className="text-[32px] md:text-[44px] font-bold text-white tracking-tight leading-[1.15]">
        Built for how search is changing
      </h2>

      <p className="text-base md:text-lg text-gray-300 leading-relaxed">
        Buyers now ask AI assistants which vendors to shortlist, and most
        SEO providers have not caught up. We build AI visibility into
        everything we do, so your brand is found in the answer, not just
        the list of results.
      </p>
    </div>

    {/* Right Column: Optimized Status Box Card */}
    <div className="lg:col-span-6">
      <div className="bg-[#12161f] border border-gray-800 rounded-[24px] p-6 md:p-8 shadow-2xl space-y-6">
        
        <div className="flex items-center justify-between pb-4 border-b border-gray-800/80">
          <span className="text-sm md:text-base font-medium text-gray-200">Google Search</span>
          <span className="text-sm md:text-base font-semibold text-emerald-400">Optimized</span>
        </div>

        <div className="flex items-center justify-between pb-4 border-b border-gray-800/80">
          <span className="text-sm md:text-base font-medium text-gray-200">AI Overviews</span>
          <span className="text-sm md:text-base font-semibold text-emerald-400">Optimized</span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-sm md:text-base font-medium text-gray-200">ChatGPT / Gemini answers</span>
          <span className="text-sm md:text-base font-semibold text-emerald-400">Optimized</span>
        </div>

      </div>
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
                <button
                  type="button"
                  onClick={openAudit}
                  className="bg-gradient-to-r from-[#8A2BE2] to-[#A855F7] hover:scale-105 transition-all duration-300 text-white font-semibold text-[16px] px-8 py-4 rounded-2xl shadow-lg"
                >
                  Get a free SEO review
                </button>

                {/* White Button */}
                <Link href="/contact">
                  <button className="bg-white hover:bg-[#F5F5F5] hover:scale-105 transition-all duration-300 text-[#8A2BE2] font-semibold text-[16px] px-8 py-4 rounded-2xl shadow-lg cursor-pointer">
                    Contact us
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <AuditForm isOpen={isAuditModalOpen} onClose={closeAudit} />
    </main>
  );
}
