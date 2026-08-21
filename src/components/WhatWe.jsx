import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function WhatWe() {
  return (
    <section className="w-full py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Content */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Small top label */}
            <h4 className="text-[#8A2BE2] font-bold text-[11px] md:text-[12px] uppercase tracking-[0.25em] mb-4">
              What we do
            </h4>

            {/* Headline */}
            <h3 className="text-[#0A0C10] text-[32px] md:text-[44px] font-bold tracking-tight leading-[1.1] mb-6">
              SEO built for how <span className="text-[#8A2BE2]">B2B Buyers</span> actually buy
            </h3>

            {/* Body Text */}
            <p className="text-gray-600 text-[16px] md:text-[18px] font-normal leading-relaxed max-w-[680px]">
              B2B SEO is search work for businesses with long sales cycles and high-value deals, 
              where buyers research for weeks before they enquire. We build the pages, 
              authority, and AI visibility that put you in front of those buyers, from 
              the first search to the final shortlist.
            </p>
          </div>

          {/* Right Column: Image */}
          <div className="lg:col-span-5 w-full flex justify-center items-center">
            <div className="relative w-full h-[385px] sm:h-[420px] rounded-[24px] overflow-hidden">
              <Image
                src="/images/what.png"
                alt="B2B SEO Illustration"
                fill
                className="object-contain rounded-[24px]"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}