"use client";
import Image from "next/image";

// Accept the onOpenAudit function as a prop
export default function ServicesSection({ onOpenAudit }) {
  const services = [
    {
      icon: "/images/icon1.png",
      title: "Website Design",
      description:
        "Gain a competitive edge with our custom, high-converting B2B website designs.",
    },
    {
      icon: "/images/icon2.png",
      title: "Lead Generation",
      description:
        "Enhance your website's visibility and drive targeted wholesale traffic that converts.",
    },
    {
      icon: "/images/icon3.png",
      title: "Digital Marketing",
      description:
        "Comprehensive strategies tailored for the Asian food and wholesale industry.",
    },
    {
      icon: "/images/icon4.png",
      title: "Graphic Design",
      description:
        "Professional branding that reflects the true scale and quality of your business.",
    },
  ];

  return (
    <section className="w-full bg-white py-16 md:py-24 px-6 md:px-12 flex flex-col items-center overflow-hidden">
      <div className="max-w-[1100px] w-full mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16 md:mb-24">
          <span className="text-black font-extrabold text-[13px] md:text-[15px] uppercase tracking-[0.25em] mb-8 block opacity-90">
            Our Services
          </span>

          <h2 className="text-[#8A2BE2] text-[32px] md:text-[46px] font-[800] leading-[1.1] mb-8 tracking-tight max-w-[900px] mx-auto text-center">
            Everything You Need to Generate High-Value Wholesale Enquiries
            Consistently
          </h2>

          <p className="text-gray-700 text-[15px] md:text-[17px] font-[500] leading-[1.7] max-w-[800px] mx-auto">
            Most Asian food wholesalers in the UK have deep industry knowledge
            but their digital presence doesn't reflect their scale. Your
            competitors are winning contracts online while your website sits
            idle.
          </p>
        </div>

        {/* Content Section */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-16 mb-20">
          {/* Left: Service Grid */}
          <div className="w-full lg:w-[60%] grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-12 md:gap-y-16">
            {services.map((service, index) => (
              <div
                key={index}
                className="flex flex-col items-center md:items-start text-center md:text-left group"
              >
                <div className="relative w-16 h-16 flex items-center justify-center mb-6">
                  <div className="absolute inset-0 bg-[#8A2BE2] opacity-[0.08] blur-2xl rounded-full group-hover:scale-125 transition-transform duration-500"></div>
                  <Image
                    src={service.icon}
                    alt={service.title}
                    width={44}
                    height={44}
                    className="relative object-contain"
                  />
                </div>

                <div className="space-y-3">
                  <h4 className="text-black text-[20px] md:text-[22px] font-[800] tracking-tight">
                    {service.title}
                  </h4>
                  <p className="text-gray-500 text-[14px] md:text-[15.5px] font-[500] leading-relaxed max-w-[280px]">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right: Mockup */}
          <div className="w-full lg:w-[40%] flex justify-center lg:justify-end mt-8 lg:-mt-6">
            <div className="relative w-full max-w-[400px] aspect-[4/5]">
              <Image
                src="/images/services.webp"
                alt="Our Services Mockup"
                fill
                sizes="(max-width: 1024px) 100vw, 400px"
                className="object-contain drop-shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>

        {/* --- DARK CTA WITH MODAL TRIGGER --- */}
        <div className="w-full">
          <div className="relative bg-[#0F0F0F] rounded-[30px] p-10 md:p-16 border-2 border-[#8A2BE2]/30 flex flex-col items-center transition-all duration-300 hover:scale-[1.01] hover:shadow-[0_30px_60px_rgba(0,0,0,0.4)] overflow-hidden">
            {/* Subtle background glow */}
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#8A2BE2] opacity-10 blur-[120px] pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#8A2BE2] opacity-10 blur-[120px] pointer-events-none" />

            <div className="relative z-10 max-w-[800px] w-full text-center">
              <h3 className="text-white text-[28px] md:text-[42px] font-[800] leading-[1.1] mb-6 tracking-tight">
                See What Keywords Your Competitors Rank For
              </h3>

              <p className="text-gray-400 text-[16px] md:text-[18px] font-[500] mb-10 max-w-[650px] mx-auto leading-relaxed">
                Stop guessing. Get a detailed breakdown of the search terms
                driving wholesale traffic to your competitors and how you can
                claim them.
              </p>

              <button
                onClick={onOpenAudit}
                className="inline-block bg-[#8A2BE2] text-white px-12 py-5 rounded-2xl font-[800] text-[15px] md:text-[16px] uppercase tracking-[0.15em] shadow-[0_10px_30px_rgba(138,43,226,0.3)] active:scale-95 transition-all hover:bg-[#9D46FF]"
              >
                Get Your Free Audit Today
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}