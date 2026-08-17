"use client";

export default function WhenYou() {
  const benefits = [
    {
      title: "Before you invest in SEO ",
      desc: "About to commit serious budget? An independent audit shows where that money should go and where it would be wasted.",
    },
    {
      title: "When performance has stalled ",
      desc: "Rankings plateaued, traffic flat, leads drying up. An audit finds the specific blockers, not vague theories.When an assistant recommends three vendors instead of showing thirty results, being one of the three is everything. There's no page two.",
    },
    {
      title: "After a redesign or migration ",
      desc: "Site changes are the most common cause of sudden SEO drops. An audit catches the damage before it compounds.",
    },
    {
      title: "When you don't trust the reports you're getting ",
      desc: "If your agency's numbers look fine but the pipeline doesn't, an independent second opinion settles it.",
    },
  ];
return (
    <section className="w-full bg-white py-20 px-6 md:px-12">
      <div className="max-w-[1240px] mx-auto flex flex-col items-start text-left">
        {/* HEADER */}
        <div className="mb-14 space-y-3">
          <span className="block text-[13px] font-bold uppercase tracking-[0.25em] text-[#8A2BE2]">
            WHEN YOU NEED ONE
          </span>
          <h2 className="text-[32px] md:text-[44px] font-bold text-[#0A0C10] tracking-tight">
             When to get a B2B SEO audit
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