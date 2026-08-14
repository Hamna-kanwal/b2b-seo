import React from "react";
import Image from "next/image";
import Link from "next/link";


export default function B2bCta({ onOpenAudit = () => {} }) {
  return (
    <section className="w-full bg-white py-12 md:py-16 px-6">
      <div className="max-w-[1200px] mx-auto">
        {/* CTA Card */}
        <div className="relative overflow-hidden rounded-[36px] bg-[#06060B] px-8 py-16 md:px-16 md:py-20 text-center">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/cta.jpeg"
              alt="CTA Background"
              fill
              priority
              className="object-cover"
            />
          </div>

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/40 z-0" />

          {/* Content */}
          <div className="relative z-10 max-w-[850px] mx-auto flex flex-col items-center">
            <h2 className="text-white text-[26px] md:text-[42px] font-bold leading-[1.2] tracking-[-0.03em] mb-5">
              Ready for SEO that's measured in pipeline?{" "}
            </h2>

            <p className="text-[#B7B7C2] text-[15px] md:text-[18px] leading-relaxed mb-10">
              Get a free, senior-led review of your site and a clear view of
              your biggest organic opportunities — no pitch, no obligation.{" "}
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-5">
              {/* Purple Button */}
              <button
                onClick={onOpenAudit}
                className="bg-gradient-to-r from-[#8A2BE2] to-[#A855F7] hover:scale-105 transition-all duration-300 text-white font-semibold text-[16px] px-8 py-4 rounded-2xl shadow-lg"
              >
                Get a Free SEO Review 
              </button>

              {/* White Button */}
<Link
  href="https://calendly.com/teqnoor/understanding-call"
  target="_blank"
  rel="noopener noreferrer"
>
  <button className="bg-white hover:bg-[#F5F5F5] hover:scale-105 transition-all duration-300 text-[#8A2BE2] font-semibold text-[16px] px-8 py-4 rounded-2xl shadow-lg">
    Book a Strategy Call 
  </button>
</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
