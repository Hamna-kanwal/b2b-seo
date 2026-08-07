import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function CTASection() {
  return (
    <section className="w-full bg-white py-12 md:py-16 px-6">
      <div className="max-w-[1200px] mx-auto">
        
        {/* Main Dark Card */}
        <div className="relative overflow-hidden bg-[#0F0F0F] rounded-[32px] px-8 py-16 md:py-24 text-center shadow-2xl border border-white/5">
          
          {/* THE PATTERNED BACKGROUND IMAGE */}
          <div className="absolute inset-0 z-0 select-none pointer-events-none">
            <Image 
              src="/images/cta.jpeg" 
              alt="CTA Background Pattern"
              fill
              className="object-cover object-center opacity-40" 
              priority 
            />
          </div>

          {/* Content Wrapper */}
          <div className="relative z-10 max-w-[850px] mx-auto flex flex-col items-center">
            
            <h2 className="text-white text-[32px] md:text-[48px] font-[800] mb-6 leading-[1.1] tracking-tight">
              Stop Relying on Referrals. Start Generating Predictable Enquiries.
            </h2>
            
            <p className="text-gray-400 text-[16px] md:text-[20px] font-[500] leading-relaxed mb-12 max-w-[750px]">
              Book your free strategy call and see exactly how we&apos;d approach your market.
            </p>

            {/* Calendly Link Button */}
            <Link 
              href="https://calendly.com/teqnoor/understanding-call"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-[#8A2BE2] hover:bg-gray-100 hover:scale-105 transition-all duration-300 px-10 py-5 md:px-12 md:py-6 rounded-2xl font-[900] text-[15px] md:text-[17px] tracking-wider uppercase shadow-[0_20px_50px_rgba(255,255,255,0.1)]"
            >
              Book Your Free Strategy Call
            </Link>
            
          </div>
        </div>
      </div>
    </section>
  );
}