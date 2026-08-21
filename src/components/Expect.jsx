import Link from "next/link";
import Image from "next/image";

export default function Expect() {
  return (
    <section className="w-full py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Content */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Small top label */}
            <h4 className="text-[#8A2BE2] font-bold text-[11px] md:text-[12px] uppercase tracking-[0.25em] mb-4">
              WHAT TO EXPECT
            </h4>

            {/* Headline */}
            <h3 className="text-[#0A0C10] text-[26px] sm:text-[36px] md:text-[44px] font-bold leading-[1.15] mb-6 tracking-tight">
              SEO is a build, not a switch
            </h3>

            {/* Body Text */}
            <p className="text-gray-600 text-[15px] md:text-[17px] font-normal leading-relaxed max-w-[680px]">
              For a newer site, expect early ranking movement in three to six
              months and steady leads from search in six to twelve, faster on
              low competition industry terms. We start with the work that
              compounds: quality, authority, and pages built to last. No
              inflated promises, and no vanity metrics.
            </p>
          </div>

          {/* Right Column: Image */}
          <div className="lg:col-span-5 w-full flex justify-center items-center">
            <div className="relative w-full h-[385px] sm:h-[420px] rounded-[24px] overflow-hidden">
              <Image
                src="/images/expect.png"
                alt="What to expect from SEO illustration"
                fill
                className="object-cover rounded-[24px]"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}