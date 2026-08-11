"use client";
import Image from "next/image";
import Link from "next/link";
import AuditVs from "@/components/AuditVs";
import WhatInclu from "@/components/WhatInclu";
import WhoFor from "@/components/WhoFor";
import HowIt from "@/components/HowIt";
import WhenYou from "@/components/WhenYou";     
import AuditFaq from "@/components/AuditFaq";
import AuditCta from "@/components/AuditCta";

export default function Audit() {
  return (
   <main className="min-h-screen bg-gradient-to-b from-[#8A2BE2] to-[#4C187C] flex flex-col items-center text-white font-sans overflow-hidden pt-24 md:pt-28">

      {/* HERO SECTION */}
      <section className="relative w-full flex flex-col items-center px-4 pt-12 md:pt-20 pb-16 md:pb-24 z-10">

      
        {/* Content Container */}
        <div className="max-w-[1100px] w-full text-center space-y-10">

          <h1 className="text-[32px] md:text-[54px] font-[800] leading-[1.15] tracking-tight max-w-[1200px] mx-auto text-center px-4">
            A B2B SEO Audit That Tells You Exactly
            <br className="hidden md:block" /> What's Broken  and What to Fix
            First
          </h1>

          {/* SUBTEXT SECTION */}
          <div className="max-w-5xl mx-auto space-y-10">
            <p className="text-[16px] md:text-[18px] font-[500] leading-relaxed opacity-90 px-4 max-w-[1000px] mx-auto">
              Traffic flat? Rankings stuck? Leads not coming through? A generic
              audit will hand you a 90 page PDF of automated warnings. Our B2B
              SEO audit is different: a senior specialist manually reviews your
              site through the lens of your buyers and your pipeline, then gives
              you a prioritised action plan in plain English.
            </p>
            {/* CTA BUTTONS SECTION */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <Link
                href="#"
                className="w-full sm:w-auto bg-white text-[#8A2BE2] font-[700] text-[16px] px-7 py-3.5 rounded-[12px] hover:bg-opacity-95 transition-all text-center shadow-md"
              >
                Book Your B2B SEO Audit 
              </Link>

              <Link
                href="#"
                className="w-full sm:w-auto bg-transparent text-white font-[600] text-[16px] px-7 py-3.5 border border-white rounded-[12px] hover:bg-white hover:text-[#8A2BE2] transition-colors text-center"
              >
                Get a Free Mini Review First 
              </Link>
            </div>
          </div>
        </div>
      </section>
      <AuditVs/>
      <WhatInclu/>
      <WhoFor/>
      <HowIt/>
      <WhenYou/>
      <AuditFaq/>
        <AuditCta/>
    </main>
  );
}
