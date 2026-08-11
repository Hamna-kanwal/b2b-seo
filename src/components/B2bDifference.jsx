"use client";

export default function B2bDifference() {
  return (
    <section className="w-full bg-white text-black py-16 md:py-24 px-6 md:px-12 flex justify-center">
      <div className="max-w-[1360px] w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
        {/* LEFT COLUMN: Text Content Block */}
        <div className="lg:col-span-5 space-y-4 text-left lg:pt-4">
          {/* Changed from font-extrabold to font-bold */}
          <span className="block text-[14px] font-bold uppercase tracking-wider text-black">
            WHY B2B IS DIFFERENT
          </span>

          {/* Toned down from font-[800] to font-[700] / bold */}
          <h2 className="text-[34px] md:text-[44px] font-bold text-[#8A2BE2] leading-[1.15] tracking-tight">
            B2C tactics don't work in B2B  so we don't use them
          </h2>

          {/* Lightened body description to normal weight with clean leading */}
          <p className="text-[16px] md:text-[17px] font-normal text-black leading-[1.5] max-w-[450px]">
            Most agencies apply the same playbook to a software company that
            they'd use for an online shop: chase volume, publish content at
            scale, report on traffic. In B2B, that approach burns budget on
            visitors who will never buy.
          </p>
        </div>

        {/* RIGHT COLUMN: Two Wide Comparison Cards */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full lg:pt-2">
          {/* Card 1: Vanity Traffic */}
          <div className="bg-black text-white p-8 md:p-9 rounded-[16px] min-h-[240px] flex flex-col justify-start space-y-4 shadow-sm">
            {/* Reduced heading from font-[700] to font-[600] semi-bold */}
            <h3 className="text-[20px] font-semibold tracking-tight">
              Generic SEO services
            </h3>
            {/* Set text weight to absolute light/normal weight tracking */}
            <ul className="space-y-2.5 text-[14px] md:text-[14.5px] font-normal opacity-90">
              <li className="flex items-start">
                <span className="mr-2 select-none">•</span>
                Chase high volume keywords with no buying intent
              </li>
              <li className="flex items-start">
                <span className="mr-2 select-none">•</span>
                Content written for algorithms, not decision makers
              </li>
              <li className="flex items-start">
                <span className="mr-2 select-none">•</span>
                Success measured in sessions and impressions
              </li>
              <li className="flex items-start">
                <span className="mr-2 select-none">•</span>
                One playbook applied to every industry
              </li>
            </ul>
          </div>

          {/* Card 2: Qualified B2B Demand */}
          <div className="bg-[#8A2BE2] text-white p-8 md:p-9 rounded-[16px] min-h-[240px] flex flex-col justify-start space-y-4 shadow-sm">
            {/* Reduced heading from font-[700] to font-[600] semi-bold */}
            <h3 className="text-[20px] font-semibold tracking-tight">
              Our B2B SEO services
            </h3>
            {/* Set text weight to absolute light/normal weight tracking */}
            <ul className="space-y-2.5 text-[14px] md:text-[14.5px] font-normal opacity-90">
              <li className="flex items-start">
                <span className="mr-2 select-none">•</span>
                Target low volume, high intent terms your buyers actually search
              </li>
              <li className="flex items-start">
                <span className="mr-2 select-none">•</span>
                Content that speaks to every stakeholder in the deal
              </li>
              <li className="flex items-start">
                <span className="mr-2 select-none">•</span>
               Success measured in demos, enquiries and pipeline
              </li>
              <li className="flex items-start">
                <span className="mr-2 select-none">•</span>
                Strategy built around your sales cycle and ICP
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
