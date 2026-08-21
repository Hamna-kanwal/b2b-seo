"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import AuditVs from "@/components/AuditVs";
import WhatInclu from "@/components/WhatInclu";
import WhoFor from "@/components/WhoFor";
import HowIt from "@/components/HowIt";
import WhenYou from "@/components/WhenYou";
import AuditFaq from "@/components/AuditFaq";
import AuditCta from "@/components/AuditCta";
import AuditForm from "@/components/AuditForm";

export default function Audit() {
  const [isAuditModalOpen, setIsAuditModalOpen] = useState(false);

  const openAudit = () => setIsAuditModalOpen(true);
  const closeAudit = () => setIsAuditModalOpen(false);

  return (
    <div className="min-h-screen bg-[#180727] text-white font-sans overflow-hidden">
      <main className="w-full flex flex-col items-center pt-24 md:pt-28">
        {/* HERO SECTION */}
        <section className="relative w-full flex flex-col items-center px-4 pt-12 md:pt-20 pb-16 md:pb-24 z-10 overflow-hidden">
          {/* Content Container - Two Column Layout on Desktop */}
          <div className="max-w-[1280px] w-full flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">
            {/* Left Column: Main Headline, Subtext, Badges & CTA */}
            <div className="flex-1 text-center lg:text-left space-y-8 max-w-[700px]">
              {/* Small Top Badge */}
              <div className="inline-flex items-center px-3.5 py-1.5 rounded-full border border-white/20 bg-white/5 text-white text-[13px] font-[500] tracking-wide">
                B2B SEO AUDIT · UK
              </div>

              {/* Main Heading */}
              <h1 className="text-[32px] md:text-[52px] lg:text-[56px] font-[800] leading-[1.12] tracking-tight text-white">
                A B2B SEO Audit That Tells You Exactly{" "}
                <br className="hidden md:block" />
                What's Broken and What to Fix First
              </h1>

              {/* Subtext */}
              <p className="text-[16px] md:text-[18px] font-[500] leading-relaxed text-white/90">
                Traffic flat? Rankings stuck? Leads not coming through? A
                generic audit will hand you a 90 page PDF of automated warnings.
                Our B2B SEO audit is different: a senior specialist manually
                reviews your site through the lens of your buyers and your
                pipeline, then gives you a prioritised action plan in plain
                English.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <button
                  onClick={openAudit}
                  className="w-full sm:w-auto bg-white text-[#8A2BE2] font-[700] text-[16px] px-7 py-3.5 rounded-[16px] hover:bg-opacity-95 transition-all text-center shadow-md cursor-pointer"
                >
                  Get a Free SEO Review
                </button>

                <Link
                  href="https://wa.me/447918092156?text=Hi!%20I'm%20interested%20in%20your%20services.%20Could%20you%20please%20provide%20more%20details%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto bg-transparent text-white font-[600] text-[16px] px-7 py-3.5 border border-white rounded-[16px] hover:bg-white hover:text-[#8A2BE2] transition-colors text-center"
                >
                  Speak to B2B SEO Specialist
                </Link>
              </div>
            </div>

            {/* Right Column: Raw Image Without Background Container */}
            <div className="w-full lg:w-[540px] flex justify-center items-center shrink-0">
              <div className="relative w-full h-[380px] md:h-[440px]">
                <Image
                  src="/images/audit.png"
                  alt="B2B SEO Audit Dashboard"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <AuditVs />
      <WhatInclu />
      <WhoFor />
      <HowIt />
      <WhenYou />
      <AuditFaq />
      <AuditCta onOpenAudit={openAudit} />
      <AuditForm isOpen={isAuditModalOpen} onClose={closeAudit} />
    </div>
  );
}
