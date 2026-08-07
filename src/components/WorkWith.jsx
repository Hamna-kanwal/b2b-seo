"use client";

export default function WhoWeWorkWith() {
  const industries = [
    "SaaS companies",
    "Professional services firms",
    "Agencies & consultancies",
    "Lead-generation businesses",
    "B2B tech & software",
    "Finance & fintech"
  ];

  return (
    <section className="w-full bg-[#F9F3FF] py-20 px-6 md:px-12">
      {/* Changed items-center to items-start and text-center to text-left */}
      <div className="max-w-[1240px] mx-auto flex flex-col items-start text-left">
        
        {/* HEADER */}
        <div className="mb-10 space-y-3">
          <span className="block text-[13px] font-bold uppercase tracking-[0.25em] text-[#8A2BE2]">
            WHO WE WORK WITH
          </span>
          <h2 className="text-[32px] md:text-[44px] font-bold text-[#0A0C10] tracking-tight">
            AI SEO for B2B brands with considered buyers
          </h2>
          <p className="text-base md:text-lg text-[#0A0C10]/70 max-w-2xl leading-relaxed">
            AI-assisted research is growing fastest in exactly the markets we specialise in — high-value, high-consideration B2B:
          </p>
        </div>

        {/* PILLS CONTAINER - Changed justify-center to justify-start */}
        <div className="flex flex-wrap justify-start gap-3 md:gap-4">
          {industries.map((industry, index) => (
            <div 
              key={index}
              className="px-6 py-3 rounded-full border border-[#8A2BE2]/30 text-[#8A2BE2] bg-white/50 font-medium text-[15px] hover:bg-white hover:shadow-sm transition-all duration-200 cursor-default"
            >
              {industry}
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}