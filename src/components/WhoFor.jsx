"use client";

export default function WhoFor() {
  const industries = [
    "SaaS companies",
    "Professional services firms",
    "Agencies & consultancies",
    "Lead-generation businesses",
    "B2B tech & software",
    "Finance & fintech",
  ];

  return (
    <section className="w-full bg-[#F9F3FF] py-20 px-6 md:px-12">
      {/* Changed items-center to items-start and text-center to text-left */}
      <div className="max-w-[1240px] mx-auto flex flex-col items-start text-left">
        {/* HEADER */}
        <div className="mb-10 space-y-3">
          <span className="block text-[13px] font-bold uppercase tracking-[0.25em] text-[#8A2BE2]">
            WHO IT'S FOR
          </span>
          <h2 className="text-[32px] md:text-[44px] font-bold text-[#0A0C10] tracking-tight">
            Built for B2B websites and B2B buyers{" "}
          </h2>
          <p className="text-base md:text-lg text-[#0A0C10]/70 max-w-2xl leading-relaxed">
            We audit through the lens that matters in business-to-business: not
            “how much traffic could you get?” but “where are the qualified leads
            leaking?”
          </p>
        </div>

        {/* PILLS CONTAINER - Flex container with proper spacing that wraps cleanly without cropping */}
        <div className="flex flex-wrap items-center justify-start gap-3 md:gap-4 w-full">
          {industries.map((industry, index) => (
            <div 
              key={index}
              className="px-5 py-3 rounded-full border border-[#8A2BE2]/30 text-[#8A2BE2] bg-white/60 font-medium text-[14px] md:text-[15px] hover:bg-white hover:shadow-sm transition-all duration-200 cursor-default whitespace-nowrap"
            >
              {industry}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
