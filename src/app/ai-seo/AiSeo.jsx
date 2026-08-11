"use client";
import Image from "next/image";
import Link from "next/link";
import  TheShift from "@/components/TheShift";
import Included from "@/components/Included";
import WorkWith from "@/components/WorkWith";
import How from "@/components/How";
import WhentoHire from "@/components/WhentoHire"; 
import AiFaq from "@/components/AiFaq";
import AiCta from "@/components/AiCta";

export default function AiSeo() {
  return (
  <main className="min-h-screen bg-gradient-to-b from-[#8A2BE2] to-[#4C187C] flex flex-col items-center text-white font-sans overflow-hidden pt-24 md:pt-28">

      {/* HERO SECTION */}
      <section className="relative w-full flex flex-col items-center px-4 pt-12 md:pt-20 pb-16 md:pb-24 z-10">

      
        {/* Content Container */}
        <div className="max-w-[1100px] w-full text-center space-y-10">

          <h1 className="text-[32px] md:text-[54px] font-[800] leading-[1.15] tracking-tight max-w-[1200px] mx-auto text-center px-4">
            The AI SEO Agency That Gets Your Brand
            <br className="hidden md:block" /> Recommended Not Just Ranked
          </h1>

          {/* SUBTEXT SECTION */}
          <div className="max-w-5xl mx-auto space-y-10">
            <p className="text-[16px] md:text-[18px] font-[500] leading-relaxed opacity-90 px-4 max-w-[1000px] mx-auto">
              Your buyers aren't just Googling anymore. They're asking ChatGPT,
              Perplexity and Google's AI Overviews which vendor to shortlist 
              and getting a direct answer. As a specialist AI SEO agency, we
              make sure that answer includes you. Search is changing; your
              visibility strategy should too.
            </p>
            {/* CTA BUTTONS SECTION */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <Link
                href="#"
                className="w-full sm:w-auto bg-white text-[#8A2BE2] font-[700] text-[16px] px-7 py-3.5 rounded-[12px] hover:bg-opacity-95 transition-all text-center shadow-md"
              >
                Get a Free AI Visibility Check 
              </Link>

              <Link
                href="#"
                className="w-full sm:w-auto bg-transparent text-white font-[600] text-[16px] px-7 py-3.5 border border-white rounded-[12px] hover:bg-white hover:text-[#8A2BE2] transition-colors text-center"
              >
                Speak to an AI SEO Specialist 
              </Link>
            </div>
          </div>
        </div>
      </section>


      <TheShift/>
      <Included/>
      <WorkWith/>
      <How/>
      <WhentoHire/>
      <AiFaq/>
      <AiCta/>

    </main>
  );
}
