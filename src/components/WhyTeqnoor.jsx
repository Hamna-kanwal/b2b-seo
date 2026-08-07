"use client";

export default function WhyTeqnoor() {
  const benefits = [
    {
      title: "Why work with us",
      desc: "No junior team, no account layers. The person planning your SEO is the person doing it.",
    },
    {
      title: "B2B focus, not everything for everyone",
      desc: "We work only on B2B and high value search, so the strategy fits how you actually win clients.",
    },
    {
      title: "Built for search and AI together",
      desc: "Most providers still sell blue links. We build for Google rankings and AI answers in one plan.",
    },
    {
      title: "Plain reporting, real signals",
      desc: "We report on rankings, leads, and AI citations, not vanity traffic. You see what is working and what is not.",
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
              WHY TEQNOOR
            </span>

            <h2 className="text-[38px] md:text-[52px] font-bold leading-[1.15] tracking-[-0.03em] mb-6">
              Why work with us
            </h2>

            {/* <p className="text-[19px] leading-[1.75] text-white/90 max-w-[500px]">
              You don't need to hand SEO over wholesale. Sometimes you just need
              expert eyes and a clear plan. If any of these sound familiar, a
              consultant will get you unstuck faster — and cheaper — than a full
              agency engagement.
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
