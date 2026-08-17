"use client";

export default function Matters() {
  const benefits = [
    {
      title: "Your buyers research before they ever talk to sales ",
      desc: "Most of the B2B buying journey happens anonymously, in search. If you're not visible during research, you're not on the shortlist.",
    },
    {
      title: "Paid costs keep climbing ",
      desc: "CPCs in B2B niches are brutal and rising. Organic search compounds — every month of SEO makes the next month cheaper.",
    },
    {
      title: "Your competitors are already ranking ",
      desc: "Every high-intent term you don't own, a competitor does. Each month of delay widens the gap and raises the cost of catching up.",
    },
    {
      title: "AI search is changing discovery ",
      desc: "Buyers now ask ChatGPT and Google's AI results for vendor recommendations. Strong SEO foundations are what get you cited there.",
    },
  ];
  
return (
    <section className="w-full bg-white py-20 px-6 md:px-12">
      <div className="max-w-[1240px] mx-auto flex flex-col items-start text-left">
        
        {/* HEADER */}
        <div className="mb-14 space-y-3">
          <span className="block text-[13px] font-bold uppercase tracking-[0.25em] text-[#8A2BE2]">
            WHY IT MATTERS
          </span>
          <h2 className="text-[32px] md:text-[44px] font-bold text-[#0A0C10] tracking-tight">
            Why invest in B2B SEO services now
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
