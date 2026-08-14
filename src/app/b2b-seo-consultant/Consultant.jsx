"use client";
import { useState } from "react";
import DifferenceSection from "@/components/DifferenceSection";
import ServicesInclude from "@/components/ServicesInclude";
import WhoWeWorkWith from "@/components/WhoWeWorkWith";
import HowItWorks from "@/components/HowItWorks";
import WhySpecialist from "@/components/WhySpecialist";
import Link from "next/link";
import AuditForm from "@/components/AuditForm";
import FAQSection from "@/components/FAQSection";
import CtaB2b from "@/components/CtaB2b";

export default function Consultant() {
  const [isAuditModalOpen, setIsAuditModalOpen] = useState(false);

  const openAudit = () => setIsAuditModalOpen(true);
  const closeAudit = () => setIsAuditModalOpen(false);

  return (
    <>
   <main className="min-h-screen bg-gradient-to-b from-[#8A2BE2] to-[#4C187C] flex flex-col items-center text-white font-sans overflow-hidden pt-24 md:pt-28">

      {/* HERO SECTION */}
      <section className="relative w-full flex flex-col items-center px-4 pt-12 md:pt-20 pb-16 md:pb-24 z-10">

      
        {/* Content Container */}
        <div className="max-w-[1100px] w-full text-center space-y-10">

          <h1 className="text-[32px] md:text-[54px] font-[800] leading-[1.15] tracking-tight max-w-[1200px] mx-auto text-center px-4">
              B2B SEO Consultant for
              <br className="hidden md:block" /> Growth Focused Companies
            </h1>

            {/* SUBTEXT SECTION */}
            <div className="max-w-5xl mx-auto space-y-10">
              <p className="text-[16px] md:text-[18px] font-[500] leading-relaxed opacity-90 px-4 max-w-[1000px] mx-auto">
                Strategic, senior led SEO consultancy for B2B companies that need direction, not just delivery. We help SaaS, professional services and B2B tech turn organic search into qualified pipeline working alongside your team or your existing agency.
              </p>

              {/* CTA BUTTONS SECTION */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
                <Link
                   href="https://wa.me/447918092156?text=Hi!%20I'm%20interested%20in%20your%20services.%20Could%20you%20please%20provide%20more%20details%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto bg-white text-[#8A2BE2] font-[700] text-[16px] px-7 py-3.5 rounded-[12px] hover:bg-opacity-95 transition-all text-center shadow-md"
                >
                  Speak to a B2B SEO Consultant
                </Link>

                <button
                  onClick={openAudit}
                  className="w-full sm:w-auto bg-transparent text-white font-[600] text-[16px] px-7 py-3.5 border border-white rounded-[12px] hover:bg-white hover:text-[#8A2BE2] transition-colors text-center"
                >
                  Request a Free SEO Review
                </button>
              </div>
            </div>

          </div>
        </section>

      </main>
      <DifferenceSection />
      <ServicesInclude />
      <WhoWeWorkWith />
      <HowItWorks />
      <WhySpecialist />
      <FAQSection />
      <CtaB2b />
      <AuditForm isOpen={isAuditModalOpen} onClose={closeAudit} />
    </>
  );
}