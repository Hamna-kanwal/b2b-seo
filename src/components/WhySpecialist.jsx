"use client";

export default function WhySpecialist() {
  const benefits = [
    {
      title: "Your SEO has stalled",
      desc: "Impressions but no clicks, or rankings stuck on pages five and beyond. The relevance is there; the strategy and authority aren’t.",
    },
    {
      title: "Your team needs direction",
      desc: "Talented people, but no clear SEO roadmap or sense of what to prioritise next.",
    },
    {
      title: "Your agency is underperforming",
      desc: "Spend going out each month, pipeline not coming back, and no clear reason why.",
    },
    {
      title: "You’re about to invest",
      desc: "You want an expert, independent plan before you commit real budget to SEO.",
    },
  ];
  return (
    <section className="w-full bg-white py-20 px-6 md:px-12">
      <div className="max-w-[1240px] mx-auto flex flex-col items-start text-left">
        {/* HEADER */}
        <div className="mb-14 space-y-3">
          <span className="block text-[13px] font-bold uppercase tracking-[0.25em] text-[#8A2BE2]">
            WHEN TO HIRE
          </span>
          <h2 className="text-[32px] md:text-[44px] font-bold text-[#0A0C10] tracking-tight">
            When to bring in a B2B SEO consultant
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
