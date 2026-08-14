"use client";

export default function Why() {
  const benefits = [
    {
      title: "Your buyers are already asking AI ",
      desc: "A growing share of B2B research now starts with a prompt, not a search box. Vendor shortlists are being formed in conversations you can't see.",
    },
    {
      title: "AI answers compress the market",
      desc: "When an assistant recommends three vendors instead of showing thirty results, being one of the three is everything. There's no page two.",
    },
    {
      title: "Early movers get compounding advantage ",
      desc: "AI systems learn from what's already visible and cited. Brands that build authority now become the default answers later and defaults are hard to displace.",
    },
    {
      title: "It strengthens your traditional SEO too ",
      desc: "Almost everything that improves AI visibility — clear structure, strong entities, authoritative content also improves your Google rankings. It's one investment, two channels.",
    },
  ];

  return (
    <section className="w-full bg-white py-20 px-6 md:px-12">
      <div className="max-w-[1240px] mx-auto flex flex-col items-start text-left">
        
        {/* HEADER */}
        <div className="mb-14 space-y-3">
          <span className="block text-[13px] font-bold uppercase tracking-[0.25em] text-[#8A2BE2]">
            WHY NOW
          </span>
          <h2 className="text-[32px] md:text-[44px] font-bold text-[#0A0C10] tracking-tight">
            Why AI SEO can't wait
          </h2>
        </div>

        {/* CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          {benefits.map((item, index) => (
            <div
              key={index}
              className="bg-white border-2 border-[#8A2BE2] rounded-[20px] p-8 md:p-10 shadow-[0_2px_12px_rgba(0,0,0,0.03)] flex flex-col justify-between"
            >
              <div>
                <h3 className="text-[20px] font-bold tracking-tight text-[#0A0C10] mb-3">
                  {item.title}
                </h3>
                <p className="text-[16px] leading-[1.6] text-gray-600">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}