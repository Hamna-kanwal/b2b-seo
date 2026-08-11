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
    <section className="w-full overflow-hidden bg-[#F6F1FA]">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[500px]">
        {/* LEFT SIDE */}
        <div
          className="relative text-white px-10 py-16 md:px-20 md:py-24 flex flex-col justify-center overflow-hidden"
          style={{
            background: "linear-gradient(180deg, #8A2BE2 0%, #4C187C 100%)",
          }}
        >
          {/* Ellipse */}
          <img
            src="/images/Ellipse.png"
            alt="ellipse"
            className="absolute -left-[120px] bottom-0 w-[320px] opacity-40 pointer-events-none"
          />

          <div className="relative z-10 max-w-[520px]">
            <span className="block text-[14px] font-semibold uppercase tracking-[0.12em] mb-7">
              WHEN YOU NEED ONE
            </span>

            <h2 className="text-[38px] md:text-[52px] font-bold leading-[1.15] tracking-[-0.03em] mb-6">
              When to get a B2B SEO audit
            </h2>

            {/* <p className="text-[19px] leading-[1.75] text-white/90 max-w-[500px]">
              You don't always need to hand SEO over wholesale — sometimes you
              just need expert direction. If any of these sound familiar, a B2B
              SEO consultant can get you unstuck faster than a full agency
              engagement.
            </p> */}
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="bg-[#F6F1FA] flex items-center justify-center px-8 py-14 md:px-16 md:py-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-[640px]">
            {benefits.map((item, index) => (
              <div
                key={index}
                className="bg-white border border-[#B168FF] rounded-[18px] p-8 min-h-[170px]"
              >
                {/* Check Icon */}
                <div className="w-10 h-10 rounded-full bg-[#F1DFFF] flex items-center justify-center mb-6">
                  <svg
                    className="w-5 h-5 text-[#8A2BE2]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>

                <h3 className="text-[18px] font-bold leading-[1.4] text-[#111111] mb-3">
                  {item.title}
                </h3>

                <p className="text-[16px] leading-[1.6] text-[#737373]">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
