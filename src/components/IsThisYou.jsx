import Image from "next/image";

export default function IsThisYou() {
  const targetPoints = [
    "Asian food wholesalers and distributors with annual turnover of £500K+",
    "Oriental / ethnic ingredient importers seeking to grow their B2B client base",
    "Wholesale food businesses launching new product ranges or entering new regions",
    "Established brands with offline reputation looking to build an online pipeline",
    "Companies that have tried generic digital agencies and been disappointed by results",
  ];

  return (
    <section className="w-full bg-white py-16 md:py-24 px-6 md:px-16 lg:px-24">
      <div className="max-w-[1300px] mx-auto">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <span className="text-black font-extrabold text-[13px] md:text-[15px] uppercase tracking-[0.25em] mb-8 block opacity-90">
            Is This You?
          </span>
          <h2 className="text-[#8A2BE2] text-[32px] md:text-[45px] font-[800] leading-tight tracking-tight">
            We Work Best With Businesses Like These
          </h2>
        </div>

        {/* Content Container */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left Side: Larger Mockup (60% width on desktop) */}
          <div className="w-full lg:w-[60%] flex justify-center relative">
            {/* Background Glow Effect - Scaled up for the larger image */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] bg-purple-50 rounded-full blur-[100px] opacity-40 -z-10" />

            {/* Increased max-width to 700px and removed strict aspect ratio for better scaling */}
            <div className="relative w-full max-w-[700px] h-[350px] md:h-[500px]">
              <Image
                src="/images/is-this-you.png"
                alt="Businesses we work with"
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-contain"
                priority
              />
            </div>
          </div>

          {/* Right Side: Bullet Points (40% width on desktop) */}
          <div className="w-full lg:w-[40%]">
            <ul className="flex flex-col gap-6">
              {targetPoints.map((point, index) => (
                <li key={index} className="flex items-start gap-4 text-[#333]">
                  {/* Styled bullet to match the purple brand color */}
                  <span className="w-2 h-2 rounded-full bg-[#8A2BE2] mt-2.5 flex-shrink-0" />
                  <p className="text-[16px] md:text-[18px] font-[500] leading-[1.5]">
                    {point}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
