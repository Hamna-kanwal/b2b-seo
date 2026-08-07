"use client";

export default function DifferenceSection() {
  return (
    <section className="w-full bg-white text-black py-16 md:py-24 px-6 md:px-12 flex justify-center">
      <div className="max-w-[1360px] w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
        {/* LEFT COLUMN: Text Content Block */}
        <div className="lg:col-span-5 space-y-4 text-left lg:pt-4">
          {/* Changed from font-extrabold to font-bold */}
          <span className="block text-[14px] font-bold uppercase tracking-wider text-black">
            CONSULTANT VS AGENCY
          </span>

          {/* Toned down from font-[800] to font-[700] / bold */}
          <h2 className="text-[34px] md:text-[44px] font-bold text-[#8A2BE2] leading-[1.15] tracking-tight">
            Direction you can act on — not just monthly deliverables
          </h2>

          {/* Lightened body description to normal weight with clean leading */}
          <p className="text-[16px] md:text-[17px] font-normal text-black leading-[1.5] max-w-[450px]">
            A full-service agency isn’t always the right call. If you already
            have people who can execute — or an agency that needs steering — a
            B2B SEO consultant gives you senior strategy and clear priorities
            without the overhead of a full retainer.
          </p>
        </div>

        {/* RIGHT COLUMN: Two Wide Comparison Cards */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full lg:pt-2">
          {/* Card 1: Vanity Traffic */}
          <div className="bg-black text-white p-8 md:p-9 rounded-[16px] min-h-[240px] flex flex-col justify-start space-y-4 shadow-sm">
            {/* Reduced heading from font-[700] to font-[600] semi-bold */}
            <h3 className="text-[20px] font-semibold tracking-tight">
              Full-service agency
            </h3>
            {/* Set text weight to absolute light/normal weight tracking */}
            <ul className="space-y-2.5 text-[14px] md:text-[14.5px] font-normal opacity-90">
              <li className="flex items-start">
                <span className="mr-2 select-none">•</span>
                Fixed monthly deliverables
              </li>
              <li className="flex items-start">
                <span className="mr-2 select-none">•</span>
                Senior sales, junior execution
              </li>
              <li className="flex items-start">
                <span className="mr-2 select-none">•</span>
                You adapt to their process
              </li>
              <li className="flex items-start">
                <span className="mr-2 select-none">•</span>
                Slower to course-correct
              </li>
            </ul>
          </div>

          {/* Card 2: Qualified B2B Demand */}
          <div className="bg-[#8A2BE2] text-white p-8 md:p-9 rounded-[16px] min-h-[240px] flex flex-col justify-start space-y-4 shadow-sm">
            {/* Reduced heading from font-[700] to font-[600] semi-bold */}
            <h3 className="text-[20px] font-semibold tracking-tight">
              B2B SEO consultant
            </h3>
            {/* Set text weight to absolute light/normal weight tracking */}
            <ul className="space-y-2.5 text-[14px] md:text-[14.5px] font-normal opacity-90">
              <li className="flex items-start">
                <span className="mr-2 select-none">•</span>
                Senior strategy, flexible scope
              </li>
              <li className="flex items-start">
                <span className="mr-2 select-none">•</span>
                Senior sales, junior execution	Direct access to the expert doing the work
              </li>
              <li className="flex items-start">
                <span className="mr-2 select-none">•</span>
                Works with your team or existing agency
              </li>
              <li className="flex items-start">
                <span className="mr-2 select-none">•</span>
                Prioritisation you can act on this week
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
