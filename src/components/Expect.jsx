import Link from "next/link";

export default function Expect() {
  return (
    <section className="w-full py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Solid purple background container */}
        <div className="relative bg-[#8A2BE2] rounded-[40px] p-10 md:p-16 flex flex-col items-start overflow-hidden">
          <div className="relative z-10 max-w-[850px] w-full text-left">
            {/* Small top label */}
            <h4 className="text-white font-bold text-[11px] md:text-[12px] uppercase tracking-[0.25em] mb-4">
              WHAT TO EXPECT
            </h4>

            {/* Headline - kept in one line */}
            <h3 className="text-white text-[26px] sm:text-[36px] md:text-[44px] font-extrabold leading-[1.15] mb-6 tracking-tight whitespace-nowrap">
              SEO is a build, not a switch
            </h3>

            {/* Body Text */}
            <p className="text-white text-[15px] md:text-[17px] font-medium leading-relaxed max-w-[680px]">
              For a newer site, expect early ranking movement in three to six
              months and steady leads from search in six to twelve, faster on
              low competition industry terms. We start with the work that
              compounds: quality, authority, and pages built to last. No
              inflated promises, and no vanity metrics.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}