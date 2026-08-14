// "use client";
// import { useState } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import B2bDifference from "@/components/B2bDifference";
// import WhatInclude from "@/components/WhatInclude";
// import WorkB2b from "@/components/WorkB2b";
// import HowB2b from "@/components/HowB2b";
// import ServicesNow from "@/components/ServicesNow";
// import B2bFaq from "@/components/B2bFaq";
// import B2bCta from "@/components/B2bCta";
// import AuditForm from "@/components/AuditForm";

// export default function B2bSeo() {
//   const [isAuditModalOpen, setIsAuditModalOpen] = useState(false);

//   const openAudit = () => setIsAuditModalOpen(true);
//   const closeAudit = () => setIsAuditModalOpen(false);

//   return (
//    <main className="min-h-screen bg-gradient-to-b from-[#8A2BE2] to-[#4C187C] flex flex-col items-center text-white font-sans overflow-hidden pt-24 md:pt-28">

//       {/* HERO SECTION */}
//       <section className="relative w-full flex flex-col items-center px-4 pt-12 md:pt-20 pb-16 md:pb-24 z-10">

      
//         {/* Content Container */}
//         <div className="max-w-[1100px] w-full text-center space-y-10">

//           <h1 className="text-[32px] md:text-[54px] font-[800] leading-[1.15] tracking-tight max-w-[1200px] mx-auto text-center px-4">
//             B2B SEO Services That Fill Your Pipeline,
//             <br className="hidden md:block" /> Not Just Your Analytics
//           </h1>

//           {/* SUBTEXT SECTION */}
//           <div className="max-w-5xl mx-auto space-y-10">
//             <p className="text-[16px] md:text-[18px] font-[500] leading-relaxed opacity-90 px-4 max-w-[1000px] mx-auto">
//               Rankings mean nothing if the right buyers never see them. Our B2B
//               SEO services are built for companies with long sales cycles, niche
//               keywords and high-value deals where one qualified enquiry is
//               worth more than ten thousand random visits. Senior-led, fully
//               managed, and measured on leads.
//             </p>
//             {/* CTA BUTTONS SECTION */}
//             <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
//               <button
//                 onClick={openAudit}
//                 className="w-full sm:w-auto bg-white text-[#8A2BE2] font-[700] text-[16px] px-7 py-3.5 rounded-[12px] hover:bg-opacity-95 transition-all text-center shadow-md"
//               >
//                 Get a Free SEO Review 
//               </button>

//               <Link
//                   href="https://wa.me/447918092156?text=Hi!%20I'm%20interested%20in%20your%20services.%20Could%20you%20please%20provide%20more%20details%3F"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 className="w-full sm:w-auto bg-transparent text-white font-[600] text-[16px] px-7 py-3.5 border border-white rounded-[12px] hover:bg-white hover:text-[#8A2BE2] transition-colors text-center"
//               >
//                 Speak to a B2B SEO Specialist 
//               </Link>
//             </div>
//           </div>
//         </div>
//       </section>
 

//  <B2bDifference/>
//  <WhatInclude/>
//  <WorkB2b/>
//  <HowB2b/>
//  <ServicesNow/>
// <B2bFaq/>
// <B2bCta onOpenAudit={openAudit} />
// <AuditForm isOpen={isAuditModalOpen} onClose={closeAudit} />



//     </main>
//   );
// }
"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import B2bDifference from "@/components/B2bDifference";
import WhatInclude from "@/components/WhatInclude";
import WorkB2b from "@/components/WorkB2b";
import HowB2b from "@/components/HowB2b";
import ServicesNow from "@/components/ServicesNow";
import B2bFaq from "@/components/B2bFaq";
import B2bCta from "@/components/B2bCta";
import AuditForm from "@/components/AuditForm";

export default function B2bSeo() {
  const [isAuditModalOpen, setIsAuditModalOpen] = useState(false);

  const openAudit = () => setIsAuditModalOpen(true);
  const closeAudit = () => setIsAuditModalOpen(false);

  return (
   <main className="min-h-screen bg-white flex flex-col items-center text-[#111111] font-sans overflow-hidden pt-24 md:pt-28">

      {/* HERO SECTION */}
      <section className="relative w-full flex flex-col items-center px-4 pt-12 md:pt-20 pb-16 md:pb-24 z-10 overflow-hidden">
      
        {/* Content Container - Two Column Layout on Desktop */}
        <div className="max-w-[1280px] w-full flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">

          {/* Left Column: Main Headline, Subtext, Badges & CTA */}
          <div className="flex-1 text-center lg:text-left space-y-8 max-w-[700px]">

            {/* Small Top Badge */}
            <div className="inline-flex items-center px-3.5 py-1.5 rounded-full border border-[#8A2BE2]/20 bg-[#8A2BE2]/5 text-[#8A2BE2] text-[13px] font-[500] tracking-wide">
              B2B SEO AGENCY · UK
            </div>

            {/* Main Heading */}
            <h1 className="text-[32px] md:text-[52px] lg:text-[56px] font-[700] leading-[1.12] tracking-tight text-[#111111]">
              B2B SEO Services That Fill Your <span className="text-[#8A2BE2]">Pipeline</span>, <br className="hidden md:block" />
              Not Just Your Analytics
            </h1>

            {/* Subtext */}
            <p className="text-[16px] md:text-[18px] font-[400] leading-relaxed text-[#444444]">
              Rankings mean nothing if the right buyers never see them. Our B2B
              SEO services are built for companies with long sales cycles, niche
              keywords and high-value deals where one qualified enquiry is
              worth more than ten thousand random visits. Senior-led, fully
              managed, and measured on leads.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={openAudit}
                className="w-full sm:w-auto bg-[#8A2BE2] text-white font-[600] text-[16px] px-7 py-3.5 rounded-[16px] hover:bg-opacity-90 transition-all text-center shadow-md cursor-pointer"
              >
                Get a Free SEO Review
              </button>

              <Link
                href="https://wa.me/447918092156?text=Hi!%20I'm%20interested%20in%20your%20services.%20Could%20you%20please%20provide%20more%20details%3F"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-transparent text-[#111111] font-[500] text-[16px] px-7 py-3.5 border border-[#111111]/20 rounded-[16px] hover:bg-black/5 transition-colors text-center"
              >
                Speak to a B2B SEO Specialist
              </Link>
            </div>

          </div>

          {/* Right Column: Raw Image Without Background Container */}
          <div className="w-full lg:w-[540px] flex justify-center items-center shrink-0">
            <div className="relative w-full h-[380px] md:h-[440px]">
              <Image
                src="/images/b2b-seo.png"
                alt="B2B SEO Platform Dashboard"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

        </div>
      </section>
 
<B2bDifference/>
<WhatInclude/>
<WorkB2b/>
<HowB2b/>
<ServicesNow/>
<B2bFaq/>
<B2bCta onOpenAudit={openAudit} />
<AuditForm isOpen={isAuditModalOpen} onClose={closeAudit} />

    </main>
  );
}