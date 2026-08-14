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
      {/* ADDED pt-24 (and md:pt-28) to push everything cleanly below the fixed navbar */}
      <main className="min-h-screen bg-gradient-to-b from-[#8A2BE2] to-[#4C187C] flex flex-col items-center text-white font-sans overflow-hidden pt-24 md:pt-28">

        {/* HERO SECTION */}
        <section className="relative w-full flex flex-col items-center px-4 pt-12 md:pt-20 pb-16 md:pb-24 z-10">

          {/* === DESIGN IMAGES === */}
          {/* Circle 1: Bottom Left - Shifted a bit up */}
          <div className="absolute bottom-[5%] left-[-15%] sm:left-[-10%] w-[280px] h-[280px] md:w-[380px] md:h-[380px] pointer-events-none -z-10">
            <Image
              src="/images/Ellipse.png"
              alt="Background circle decorative"
              fill
              className="object-contain" />
          </div>

          {/* Circle 2: Bottom Right - Made smaller and shifted a bit up */}
          <div className="absolute bottom-[12%] right-[5%] sm:right-[8%] w-[140px] h-[140px] md:w-[200px] md:h-[200px] pointer-events-none -z-10">
            <Image
              src="/images/Ellipse2.png"
              alt="Background circle decorative"
              fill
              className="object-contain" />
          </div>

          {/* Circle 3: Middle Right Background - Made a bit smaller and shifted more up */}
          <div className="absolute top-[-15%] right-[-20%] sm:right-[-12%] w-[320px] h-[320px] md:w-[480px] md:h-[480px] opacity-[0.15] pointer-events-none -z-20">
            <Image
              src="/images/Ellipse1.png"
              alt="Background giant circle bleed"
              fill
              className="object-contain" />
          </div>
          {/* ============================== */}

          {/* 
            === HERO LOGO (Commented out to hand layout control to the global Navbar) ===
            <div className="relative w-32 h-12 md:w-44 md:h-16 mb-12">
              <Image
                src="/images/logo.png"
                alt="TeqNoor Logo"
                fill
                sizes="(min-width: 768px) 176px, 128px"
                className="object-contain"
                priority />
            </div>
          */}

          {/* Content Container */}
          <div className="max-w-[1100px] w-full text-center space-y-10">

            <h1 className="text-[32px] md:text-[54px] font-[800] leading-[1.15] tracking-tight max-w-[1200px] mx-auto text-center px-4">
              B2B SEO that brings qualified leads,
              <br className="hidden md:block" /> not just rankings
            </h1>

            {/* SUBTEXT SECTION */}
            <div className="max-w-5xl mx-auto space-y-10">
              <p className="text-[16px] md:text-[18px] font-[500] leading-relaxed opacity-90 px-4 max-w-[1000px] mx-auto">
                Teqnoor is a B2B SEO consultancy for businesses with considered buyers. We help you rank in Google and get named in AI answers, so search brings you real enquiries. You work directly with the specialist doing the work, not a junior account handler.              </p>

              {/* CTA BUTTONS SECTION */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
                <button
                  onClick={openAudit}
                  className="w-full sm:w-auto bg-white text-[#8A2BE2] font-[700] text-[16px] px-7 py-3.5 rounded-[12px] hover:bg-opacity-95 transition-all text-center shadow-md"
                >
                  Get a free SEO review     
                </button>
                <Link
                  href="https://wa.me/447918092156?text=Hi!%20I'm%20interested%20in%20your%20services.%20Could%20you%20please%20provide%20more%20details%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto bg-transparent text-white font-[600] text-[16px] px-7 py-3.5 border border-white rounded-[12px] hover:bg-white hover:text-[#8A2BE2] transition-colors text-center"
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
    </>
  );
}