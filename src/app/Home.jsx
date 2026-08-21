"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import WhatWe from "@/components/WhatWe";
import Services from "@/components/Services";
import Industries from "@/components/Industries";
import Work from "@/components/Work";
import WhyTeqnoor from "@/components/WhyTeqnoor";
import SeoCallout from "@/components/SeoCallout";
import Expect from "@/components/Expect";
import MainFaq from "@/components/MainFaq";
import MainCta from "@/components/MainCta";
import AuditForm from "@/components/AuditForm";

export default function Home() {
  const [isAuditModalOpen, setIsAuditModalOpen] = useState(false);

  const openAudit = () => setIsAuditModalOpen(true);
  const closeAudit = () => setIsAuditModalOpen(false);

  return (
    <>
 <main className="min-h-[auto] bg-gradient-to-b from-[#8A2BE2] to-[#4C187C] flex flex-col items-center text-white font-sans overflow-hidden pt-20 md:pt-28 relative">

  {/* HERO SECTION */}
  <section className="relative w-full flex flex-col items-center px-4 pt-12 pb-14 md:py-24 z-10">

    {/* === ENHANCED ANIMATED DESIGN IMAGES === */}
    {/* Circle 1: Bottom Left - Smooth organic drift & subtle scaling */}
    <div className="absolute bottom-[5%] left-[-15%] sm:left-[-10%] w-[280px] h-[280px] md:w-[380px] md:h-[380px] pointer-events-none -z-10 animate-[smoothFloat_12s_ease-in-out_infinite]">
      <Image
        src="/images/Ellipse.png"
        alt="Background circle decorative"
        fill
        className="object-contain filter drop-shadow-[0_0_25px_rgba(255,255,255,0.08)]" />
    </div>

    {/* Circle 2: Bottom Right - Counter-balancing float animation */}
    <div className="absolute bottom-[12%] right-[5%] sm:right-[8%] w-[140px] h-[140px] md:w-[200px] md:h-[200px] pointer-events-none -z-10 animate-[smoothFloatReverse_15s_ease-in-out_infinite]">
      <Image
        src="/images/Ellipse2.png"
        alt="Background circle decorative"
        fill
        className="object-contain" />
    </div>

    {/* Circle 3: Middle Right Background - Deep atmospheric breathing glow */}
    <div className="absolute top-[-15%] right-[-20%] sm:right-[-12%] w-[320px] h-[320px] md:w-[480px] md:h-[480px] pointer-events-none -z-20 animate-[atmosphericPulse_10s_ease-in-out_infinite]">
      <Image
        src="/images/Ellipse1.png"
        alt="Background giant circle bleed"
        fill
        className="object-contain" />
    </div>
    {/* ============================== */}


    {/* Content Container */}
    <div className="max-w-[1100px] w-full text-center space-y-6 md:space-y-10">

      <h1 className="text-[32px] md:text-[54px] font-[800] leading-[1.15] tracking-tight max-w-[1200px] mx-auto text-center px-4">
        B2B SEO that brings qualified leads,
        <br className="hidden md:block" /> not just rankings
      </h1>

      {/* SUBTEXT SECTION */}
      <div className="max-w-5xl mx-auto space-y-6 md:space-y-10">
        <p className="text-[15px] md:text-[18px] font-[500] leading-relaxed opacity-90 px-4 max-w-[1000px] mx-auto">
          Teqnoor is a B2B SEO consultancy for businesses with considered buyers. We help you rank in Google and get named in AI answers, so search brings you real enquiries. You work directly with the specialist doing the work, not a junior account handler.     </p>

        {/* CTA BUTTONS SECTION */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-1">
          <button
            onClick={openAudit}
            className="w-full sm:w-auto bg-white text-[#8A2BE2] font-[700] text-[16px] px-7 py-3.5 rounded-[12px] hover:bg-opacity-95 transition-all text-center shadow-md cursor-pointer"
          >
            Get a free SEO review     
          </button>
          <Link
            href="https://wa.me/447918092156?text=Hi!%20I'm%20interested%20in%20your%20services.%20Could%20you%20please%20provide%20more%20details%3F"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-transparent text-white font-[600] text-[16px] px-7 py-3.5 border border-white rounded-[12px] hover:bg-white hover:text-[#8A2BE2] transition-colors text-center cursor-pointer"
          >
            Speak to a B2B SEO specialist
          </Link>
        </div>
      </div>

    </div>
  </section>

      </main>
      <WhatWe/>
      <Services/>
      <Industries/>
      <Work/>
      <WhyTeqnoor/>
      <SeoCallout/>
      <Expect/>
      <MainFaq/>
      <MainCta onOpenAudit={openAudit} />
      <AuditForm isOpen={isAuditModalOpen} onClose={closeAudit} />

      {/* Advanced CSS Keyframes Injection */}
      <style jsx global>{`
        @keyframes smoothFloat {
          0%, 100% {
            transform: translate(0px, 0px) scale(1) rotate(0deg);
          }
          33% {
            transform: translate(25px, -30px) scale(1.04) rotate(4deg);
          }
          66% {
            transform: translate(-15px, 20px) scale(0.97) rotate(-3deg);
          }
        }
        @keyframes smoothFloatReverse {
          0%, 100% {
            transform: translate(0px, 0px) scale(1) rotate(0deg);
          }
          33% {
            transform: translate(-20px, 25px) scale(1.05) rotate(-5deg);
          }
          66% {
            transform: translate(15px, -20px) scale(0.96) rotate(3deg);
          }
        }
        @keyframes atmosphericPulse {
          0%, 100% {
            transform: scale(1);
            opacity: 0.12;
          }
          50% {
            transform: scale(1.07);
            opacity: 0.22;
          }
        }
      `}</style>
    </>
  );
}