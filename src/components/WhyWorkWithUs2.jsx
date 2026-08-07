import Image from "next/image";

export default function WhyWorkWithUs() {
  const cards = [
    {
      title: "Industry-Specific Expertise",
      description: "We work exclusively with food, FMCG and wholesale businesses, we understand buyer personas, procurement cycles and the language of B2B food trade.",
      isDark: true,
    },
    {
      title: "Full-Funnel, Not Fragmented",
      description: "We don't just run ads or just do SEO. We align every channel so that traffic, trust and conversion work together as a single revenue-generating machine.",
      isDark: false,
    },
    {
      title: "UK-Based, Fast-Moving",
      description: "We operate in the UK market, understand regional nuances, and move fast. Most clients see measurable improvements within the first 30 days.",
      isDark: true,
    },
    {
      title: "Proven With Asian Food Brands",
      description: "JK Foods UK is one of our clients. We know what converts in this niche, from the way category buyers search to how they evaluate suppliers.",
      isDark: false,
    },
    {
      title: "Transparent Reporting",
      description: "No vanity metrics. Every report ties back to enquiries generated, cost per lead and estimated revenue influence, data you can take to the boardroom.",
      isDark: true, 
    },
  ];

  return (
    <section className="w-full bg-white py-20 px-6 md:px-16 lg:px-24">
      {/* Header Section */}
      <div className="max-w-[1200px] mx-auto text-center mb-16">
        <span className="text-black font-extrabold text-[13px] md:text-[15px] uppercase tracking-[0.25em] mb-8 block opacity-90">
          Why Work With Us
        </span>
        <h2 className="text-[#8A2BE2] text-[32px] md:text-[42px] font-[800] leading-tight tracking-tight">
          Specialists in the Niche, Not Generalists Guessing
        </h2>
      </div>

      {/* Cards Grid - Adjusted to grid-cols-5 for desktop or auto-fit */}
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`p-8 rounded-[20px] min-h-[340px] flex flex-col justify-start transition-all duration-300 hover:scale-[1.03] hover:shadow-xl ${
              card.isDark 
                ? "bg-black text-white" 
                : "bg-[#E3D9FF] text-black" 
            }`}
          >
            {/* Added the Checkmark Icon from the 2nd image style */}
            <div className={`mb-6 flex items-center justify-center w-8 h-8 rounded-full ${card.isDark ? "bg-white/10" : "bg-black/5"}`}>
               <svg 
                className={`w-5 h-5 ${card.isDark ? "text-white" : "text-[#8A2BE2]"}`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
              </svg>
            </div>

            <h4 className="text-[19px] font-[800] mb-5 leading-tight tracking-tight">
              {card.title}
            </h4>
            <p className={`text-[14px] font-[500] leading-[1.6] ${
              card.isDark ? "text-gray-300" : "text-gray-700"
            }`}>
              {card.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}