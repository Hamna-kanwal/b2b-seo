"use client";

export default function Industries() {
  const industries = [
    "SaaS SEO",
    "SEO for accountants",
    "SEO for law firms",
    "Healthcare SEO",
    "SEO for financial services"
  ];

  return (
    <section className="w-full bg-[#F9F3FF] py-20 px-6 md:px-12">
      {/* Changed items-center to items-start and text-center to text-left */}
      <div className="max-w-[1240px] mx-auto flex flex-col items-start text-left">
        
        {/* HEADER */}
        <div className="mb-10 space-y-3">
          <span className="block text-[13px] font-bold uppercase tracking-[0.25em] text-[#8A2BE2]">
            INDUSTRIES
          </span>
          <h2 className="text-[32px] md:text-[44px] font-bold text-[#0A0C10] tracking-tight">
            Industry SEO, written by someone who knows the field
          </h2>
           <p className="text-base md:text-lg text-[#0A0C10]/70 max-w-2xl leading-relaxed">
            We build pages that match how buyers in your sector search, and the rules your sector follows{" "}
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