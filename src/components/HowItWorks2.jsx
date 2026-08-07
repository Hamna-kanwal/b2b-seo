"use client";
import Image from "next/image";
import Link from "next/link";

export default function HowItWorks({ onOpenAudit }) {
 const leftSteps = [
    {
      title: "Free Strategy Audit",
      description:
        "We analyse your current digital footprint: website, SEO rankings, competitor landscape and conversion gaps and deliver a concise action plan at no cost.",
      icon: "/images/icon1.png",
    },
    {
      title: "Bespoke Growth Plan",
      description:
        "We build a tailored 90-day roadmap covering website improvements, SEO priorities, paid lead gen campaigns and CRO quick wins specific to your business.",
      icon: "/images/icon2.png",
    },
  ];
  const rightSteps = [
    {
      title: "Execution & Launch",
      description:
        "Our team implements the strategy: redesigning key pages, deploying campaigns, optimising for conversions and setting up lead tracking across all channels.",
      icon: "/images/icon3.png",
    },
    {
      title: "Reporting & Scaling",
      description:
        "Monthly performance reports with clear ROI metrics. Once we identify what works, we scale it, more budget behind winning campaigns.",
      icon: "/images/icon4.png",
    },
  ];

  return (
    <section className="w-full bg-white py-16 md:py-24 px-6 md:px-12 flex flex-col items-center">
      {/* 1. Header Section - Centered */}
      <div className="max-w-[1200px] w-full text-center mb-16 md:mb-24">
        <span className="text-black font-extrabold text-[13px] md:text-[15px] uppercase tracking-[0.25em] mb-8 block opacity-90">
          How It Works
        </span>
        <h2 className="text-[#8A2BE2] text-[32px] md:text-[46px] font-[800] leading-[1.1] tracking-tight">
          Your Path from Invisible to <br className="hidden md:block" />{" "}
          Industry-Leading
        </h2>
      </div>

      {/* 2. Process Grid - Centered items */}
      <div className="max-w-[1200px] w-full grid grid-cols-1 md:grid-cols-12 gap-y-12 md:gap-x-8 lg:gap-x-16 items-center mb-24 md:mb-32">
        {/* Left Column */}
        <div className="md:col-span-4 flex flex-col gap-12 md:gap-28 order-2 md:order-1">
          {leftSteps.map((step, i) => (
            <div
              key={i}
              className="flex flex-col items-center md:items-start text-center md:text-left group"
            >
              <div className="mb-6 w-14 h-14 flex items-center justify-center">
                <Image
                  src={step.icon}
                  alt={step.title}
                  width={44}
                  height={44}
                  className="object-contain"
                />
              </div>
              <div className="max-w-[320px]">
                <h4 className="text-black text-[20px] md:text-[23px] font-[800] mb-4 leading-tight">
                  {step.title}
                </h4>
                <p className="text-gray-600 text-[14px] md:text-[15.5px] font-[500] leading-[1.7]">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Center Column - Mockup */}
        <div className="md:col-span-4 flex justify-center order-1 md:order-2">
          <div className="relative w-[260px] h-[520px] md:w-[340px] md:h-[680px]">
            <Image
              src="/images/roadmap.jpeg"
              alt="Strategy Mockup"
              fill
              className="object-contain drop-shadow-[0_35px_60px_rgba(0,0,0,0.2)]"
              sizes="(max-width: 768px) 260px, 340px"
              priority
            />
          </div>
        </div>

        {/* Right Column */}
        <div className="md:col-span-4 flex flex-col gap-12 md:gap-28 order-3">
          {rightSteps.map((step, i) => (
            <div
              key={i}
              className="flex flex-col items-center md:items-start text-center md:text-left group"
            >
              <div className="mb-6 w-14 h-14 flex items-center justify-center">
                <Image
                  src={step.icon}
                  alt={step.title}
                  width={44}
                  height={44}
                  className="object-contain"
                />
              </div>
              <div className="max-w-[320px]">
                <h4 className="text-black text-[20px] md:text-[23px] font-[800] mb-4 leading-tight">
                  {step.title}
                </h4>
                <p className="text-gray-600 text-[14px] md:text-[15.5px] font-[500] leading-[1.7]">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 3. CTA Section - FULL WIDTH Design */}
      <div className="max-w-[1100px] w-full">
        <div className="relative bg-[#0F0F0F] rounded-[30px] p-10 md:p-16 border-2 border-[#8A2BE2]/30 flex flex-col items-center transition-all duration-300 hover:scale-[1.01] hover:shadow-[0_30px_60px_rgba(0,0,0,0.4)] overflow-hidden">
          
          {/* Subtle background glow */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#8A2BE2] opacity-10 blur-[120px] pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#8A2BE2] opacity-10 blur-[120px] pointer-events-none" />

          <div className="relative z-10 max-w-[850px] w-full text-center">
            <h3 className="text-white text-[28px] md:text-[42px] font-[800] leading-[1.1] mb-6 tracking-tight">
              Get Your Free Website Audit
            </h3>
            
            <p className="text-gray-400 text-[16px] md:text-[18px] font-[500] mb-10 max-w-[650px] mx-auto leading-relaxed">
              Ready to see exactly where you&apos;re losing leads? We&apos;ll manually audit your site and provide a custom growth roadmap. No strings attached.
            </p>

            {/* Changed from Link to button for the trigger action */}
            <button 
              onClick={onOpenAudit}
              className="inline-block bg-[#8A2BE2] text-white px-12 py-5 rounded-2xl font-[800] text-[15px] md:text-[16px] uppercase tracking-[0.15em] shadow-[0_10px_30px_rgba(138,43,226,0.3)] active:scale-95 transition-all hover:bg-[#9D46FF]"
            >
              Claim Your Free Audit
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}