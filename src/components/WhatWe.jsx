import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function WhatWe() {
  return (
    <section className="w-full py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Background set to #8A2BE2 */}
        <div className="relative bg-[#8A2BE2] rounded-[40px] p-10 md:p-20 flex flex-col items-center overflow-hidden">
          
          <div className="relative z-10 max-w-[800px] w-full text-center">
            
            {/* "What we do" heading is now white */}
            <h4 className="text-white font-bold text-[12px] md:text-[14px] uppercase tracking-[0.25em] mb-6">
              What we do
            </h4>

            {/* Headline */}
            <h3 className="text-white text-[32px] md:text-[52px] font-extrabold leading-[1.1] mb-8 tracking-tight">
              SEO built for how B2B buyers actually buy
            
            </h3>

            {/* Body Text is white */}
            <p className="text-white text-[17px] md:text-[20px] font-medium leading-relaxed max-w-[680px] mx-auto">
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