import Link from "next/link";

export default function ProblemSection() {
  const problems = [
    "No consistent flow of inbound B2B enquiries",
    "Website designed for looks, not for conversions",
    "Invisible on Google for wholesale buyer searches",
    "No case studies or social proof to close high-value deals",
    "Relying entirely on referrals and trade shows",
    "No lead capture funnel or CRM integration",
  ];

  return (
    <section className="w-full bg-[#F9F3FF] py-20 md:py-28 px-4 flex flex-col items-center">
      <div className="max-w-[1000px] w-full text-center">
         <span className="text-black font-extrabold text-[13px] md:text-[15px] uppercase tracking-[0.25em] mb-8 block opacity-90">
          The Problem
        </span>
        {/* Purple Heading */}
        <h2 className="text-[#8A2BE2] text-[32px] md:text-[48px] font-[800] leading-[1.1] mb-8 tracking-tight">
          Why Most Asian Food Wholesalers Struggle to Generate Leads Online
        </h2>

        {/* Descriptive Text */}
        <p className="text-gray-800 text-[16px] md:text-[18px] font-[600] leading-[1.6] max-w-[850px] mx-auto mb-16 px-2">
          Most Asian food wholesalers in the UK have deep industry knowledge and strong supplier relationships 
          but their digital presence doesn't reflect their scale. Your competitors are winning contracts online while 
          your website sits idle.
        </p>

        {/* 2-Column Grid of Pill Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 max-w-[950px] mx-auto mb-16">
          {problems.map((text, index) => (
            <div 
              key={index} 
              className="bg-white rounded-[18px] py-6 px-10 flex items-center min-h-[100px] shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-white/50"
            >
              <div className="flex items-start space-x-4 text-left">
                <div className="w-[6px] h-[6px] bg-black rounded-full shrink-0 mt-[10px]" />
                <span className="text-black font-[700] text-[15px] md:text-[17px] tracking-tight leading-snug">
                  {text}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Transition Text */}
        <p className="text-gray-900 text-[17px] md:text-[20px] font-[700] leading-[1.5] max-w-[800px] mx-auto mb-12">
          Every month you’re invisible on Google, your competitors are capturing wholesale buyers actively searching for suppliers.
        </p>

    
     {/* --- DARK CTA WITH SCALE HOVER (FULL WIDTH) --- */}
        <div className="w-full">
          <div className="relative bg-[#0F0F0F] rounded-[30px] p-10 md:p-16 border-2 border-[#8A2BE2]/30 flex flex-col items-center transition-all duration-300 hover:scale-[1.01] hover:shadow-[0_30px_60px_rgba(0,0,0,0.4)] overflow-hidden">
            {/* Subtle background glow */}
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#8A2BE2] opacity-10 blur-[120px] pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#8A2BE2] opacity-10 blur-[120px] pointer-events-none" />

            <div className="relative z-10 max-w-[800px] w-full text-center">
              <h3 className="text-white text-[28px] md:text-[42px] font-[800] leading-[1.1] mb-6 tracking-tight">
               Unlock Your Complete B2B Lead Generation System
              </h3>

              <p className="text-gray-400 text-[16px] md:text-[18px] font-[500] mb-10 max-w-[650px] mx-auto leading-relaxed">
                Talk To Our Expert Today!
              </p>

              <Link
                href="https://calendly.com/teqnoor/understanding-call"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#8A2BE2] text-white px-12 py-5 rounded-2xl font-[800] text-[15px] md:text-[16px] uppercase tracking-[0.15em] shadow-[0_10px_30px_rgba(138,43,226,0.3)] active:scale-95 transition-all hover:bg-[#9D46FF]"
              >
                Book a Free Strategy Call
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}