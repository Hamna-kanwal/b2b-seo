"use client";

export default function TheShift() {
  return (
    <section className="w-full bg-white text-black py-16 md:py-24 px-6 md:px-12 flex justify-center">
      <div className="max-w-[1360px] w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
        {/* LEFT COLUMN: Text Content Block */}
        <div className="lg:col-span-5 space-y-4 text-left lg:pt-4">
          {/* Changed from font-extrabold to font-bold */}
          <span className="block text-[14px] font-bold uppercase tracking-wider text-black">
            THE SHIFT
          </span>

          {/* Toned down from font-[800] to font-[700] / bold */}
          <h2 className="text-[34px] md:text-[44px] font-bold text-[#8A2BE2] leading-[1.15] tracking-tight">
            Traditional SEO gets you ranked. AI SEO gets you recommended.{" "}
          </h2>

          {/* Lightened body description to normal weight with clean leading */}
          <p className="text-[16px] md:text-[17px] font-normal text-black leading-[1.5] max-w-[450px]">
            AI assistants don't show ten blue links  they give one synthesised
            answer, citing a handful of sources. If your brand isn't in that
            answer, you're invisible to a growing share of your market. The old
            playbook alone can't fix that.
          </p>
        </div>

        {/* RIGHT COLUMN: Two Wide Comparison Cards */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full lg:pt-2">
          {/* Card 1: Vanity Traffic */}
          <div className="bg-black text-white p-8 md:p-9 rounded-[16px] min-h-[240px] flex flex-col justify-start space-y-4 shadow-sm">
            {/* Reduced heading from font-[700] to font-[600] semi-bold */}
            <h3 className="text-[20px] font-semibold tracking-tight">
              Traditional SEO alone
            </h3>
            {/* Set text weight to absolute light/normal weight tracking */}
            <ul className="space-y-2.5 text-[14px] md:text-[14.5px] font-normal opacity-90">
              <li className="flex items-start">
                <span className="mr-2 select-none">•</span>
                Optimises for ranking positions on a results page
              </li>
              <li className="flex items-start">
                <span className="mr-2 select-none">•</span>
                Success depends on users clicking through
              </li>
              <li className="flex items-start">
                <span className="mr-2 select-none">•</span>
                Ignores how LLMs read, chunk and cite content
              </li>
              <li className="flex items-start">
                <span className="mr-2 select-none">•</span>
              No visibility into what AI says about your brand
              </li>
            </ul>
          </div>

          {/* Card 2: Qualified B2B Demand */}
          <div className="bg-[#8A2BE2] text-white p-8 md:p-9 rounded-[16px] min-h-[240px] flex flex-col justify-start space-y-4 shadow-sm">
            {/* Reduced heading from font-[700] to font-[600] semi-bold */}
            <h3 className="text-[20px] font-semibold tracking-tight">
             Working with an AI SEO agency
            </h3>
            {/* Set text weight to absolute light/normal weight tracking */}
            <ul className="space-y-2.5 text-[14px] md:text-[14.5px] font-normal opacity-90">
              <li className="flex items-start">
                <span className="mr-2 select-none">•</span>
                Optimises for citations and mentions in AI answersf
              </li>
              <li className="flex items-start">
                <span className="mr-2 select-none">•</span>
                Puts your brand in the recommendation itself
              </li>
              <li className="flex items-start">
                <span className="mr-2 select-none">•</span>
                Structures content so LLMs can parse and quote it
              </li>
              <li className="flex items-start">
                <span className="mr-2 select-none">•</span>
                Tracks your share of voice across every major AI platform
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
