"use client";
import { useState } from "react";
import ClientCaseStudy from "@/components/ClientCaseStudy";
import CTASection2 from "@/components/CTASection2";
import HowItWorks2 from "@/components/HowItWorks2";
import IsThisYou from "@/components/IsThisYou";
import ProblemSection from "@/components/ProblemSection";
import ServicesSection from "@/components/ServicesSection";
import WhyWorkWithUs2 from "@/components/WhyWorkWithUs2";
import AuditForm from "@/components/AuditForm"; 
import Link from "next/link";

export default function Home() {

  const [isAuditModalOpen, setIsAuditModalOpen] = useState(false);

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#8A2BE2] to-[#4C187C] flex flex-col items-center text-white font-sans overflow-hidden pt-24 md:pt-28">

      {/* HERO SECTION */}
      <section className="relative w-full flex flex-col items-center px-4 pt-12 md:pt-20 pb-16 md:pb-24 z-10">

      
        {/* Content Container */}
        <div className="max-w-[1100px] w-full text-center space-y-10">

          <h1 className="text-[32px] md:text-[54px] font-[800] leading-[1.15] tracking-tight max-w-[1200px] mx-auto text-center px-4">
            We Help UK Asian Food Wholesalers Generate Consistent
            B2B Leads Without Relying on Referrals
            or Trade Shows
          </h1>

          {/* SUBTEXT SECTION */}
          <div className="max-w-5xl mx-auto space-y-6">
            <p className="text-[16px] md:text-[19px] font-[500] leading-relaxed opacity-90">
              The UK Asian food market is worth £7.5 billion and growing at 4.5% annually.
              Yet most wholesalers still rely on word of mouth. We change that.
              We help high-ticket Asian food wholesalers across the UK generate consistent B2B leads through performance-driven digital marketing, CRO, SEO.
            </p>
          </div>

          {/* CALENDLY CTA BUTTON */}
          <Link
            href="https://calendly.com/teqnoor/understanding-call"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-[#5D16B3] px-12 py-5 rounded-xl font-[800] text-lg md:text-xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] hover:scale-105 active:scale-95 transition-all duration-200 uppercase tracking-widest"
          >
            Book a Free Strategy Call
          </Link>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="w-full bg-[#fcfcfc] py-16 md:py-20 px-4 flex justify-center">
        <div className="max-w-[1100px] w-full bg-white rounded-[32px] drop-shadow-[0_20px_50px_rgba(0,0,0,0.15)] p-10 md:p-14 flex flex-col md:flex-row items-stretch justify-between gap-10">

          <div className="flex-1 flex flex-col items-center text-center px-4">
            <div className="bg-gray-50 px-4 py-2 rounded-lg mb-6">
              <span className="text-[10px] md:text-[12px] font-bold text-gray-900 uppercase tracking-wider">
                UK Asian Food Market Value
              </span>
            </div>
            <span className="text-[40px] md:text-[56px] font-[800] text-gray-900 leading-none">
              £7.5B
            </span>
          </div>

          <div className="hidden md:block w-[1px] bg-gray-100"></div>

          <div className="flex-1 flex flex-col items-center text-center px-4">
            <div className="bg-gray-50 px-4 py-2 rounded-lg mb-6">
              <span className="text-[10px] md:text-[12px] font-bold text-gray-900 uppercase tracking-wider">
                Annual Market Growth
              </span>
            </div>
            <span className="text-[40px] md:text-[56px] font-[800] text-gray-900 leading-none">
              4.53%
            </span>
          </div>

          <div className="hidden md:block w-[1px] bg-gray-100"></div>

          <div className="flex-1 flex flex-col items-center text-center px-4">
            <div className="bg-gray-50 px-4 py-2 rounded-lg mb-6">
              <span className="text-[10px] md:text-[12px] font-bold text-gray-900 uppercase tracking-wider">
                Projected Value (2032)
              </span>
            </div>
            <span className="text-[40px] md:text-[56px] font-[800] text-gray-900 leading-none">
              £10.6B
            </span>
          </div>
        </div>
      </section>

      <ProblemSection />

      {/* Pass the function to ServicesSection */}
      <ServicesSection onOpenAudit={() => setIsAuditModalOpen(true)} />

      <ClientCaseStudy onOpenAudit={() => setIsAuditModalOpen(true)} />
      <HowItWorks2 onOpenAudit={() => setIsAuditModalOpen(true)} />
      <WhyWorkWithUs2 />
      <IsThisYou />
      <CTASection2 />


      <AuditForm
        isOpen={isAuditModalOpen}
        onClose={() => setIsAuditModalOpen(false)}
      />
    </main>
  );
}