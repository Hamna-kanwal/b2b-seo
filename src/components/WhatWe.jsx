import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function WhatWe() {
  return (
    <section className="w-full py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Background set to #8A2BE2 */}
        <div className="relative bg-[#8A2BE2] rounded-[40px] p-10 md:p-16 flex flex-col items-start overflow-hidden">
          
          <div className="relative z-10 max-w-[850px] w-full text-left">
            
            {/* Small top label */}
            <h4 className="text-white font-bold text-[11px] md:text-[12px] uppercase tracking-[0.25em] mb-4">
              What we do
            </h4>

            {/* Headline */}
            <h3 className="text-white text-[26px] sm:text-[36px] md:text-[44px] font-extrabold leading-[1.15] mb-6 tracking-tight">
              SEO built for how B2B buyers actually buy
            </h3>

            {/* Body Text */}
            <p className="text-white text-[15px] md:text-[17px] font-medium leading-relaxed max-w-[680px]">
              B2B SEO is search work for businesses with long sales cycles and high-value deals, 
              where buyers research for weeks before they enquire. We build the pages, 
              authority, and AI visibility that put you in front of those buyers, from 
              the first search to the final shortlist.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}