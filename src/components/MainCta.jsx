import React from "react";
import Image from "next/image";

export default function Cta() {
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
              See where your B2B SEO stands today{" "}
            </h2>

            <p className="text-[#B7B7C2] text-[15px] md:text-[18px] leading-relaxed mb-10">
              Get a free SEO review. We will show you what is holding your
              rankings back, the terms you could win, and how AI describes your
              brand right now.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-5">
              {/* Purple Button */}
              <button className="bg-gradient-to-r from-[#8A2BE2] to-[#A855F7] hover:scale-105 transition-all duration-300 text-white font-semibold text-[16px] px-8 py-4 rounded-2xl shadow-lg">
                Get a free SEO review     
              </button>

              {/* White Button */}
              <button className="bg-white hover:bg-[#F5F5F5] hover:scale-105 transition-all duration-300 text-[#8A2BE2] font-semibold text-[16px] px-8 py-4 rounded-2xl shadow-lg">
                Speak to a B2B SEO specialist
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
