import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function SeoCallout() {
  return (
    <section className="w-full py-20 px-6 bg-[#130628]">
      <div className="max-w-7xl mx-auto">
        {/* Card container with a slightly lighter/deep purple shade */}
        <div className="relative bg-[#1c0a38] border border-purple-800/40 rounded-[40px] p-10 md:p-16 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Content */}
            <div className="lg:col-span-7 flex flex-col items-start text-left">
              {/* Small top label */}
              <h4 className="text-[#8A2BE2] font-bold text-[11px] md:text-[12px] uppercase tracking-[0.25em] mb-4">
                AI SEO CALLOUT
              </h4>

              {/* Headline */}
              <h3 className="text-white text-[26px] sm:text-[36px] md:text-[44px] font-bold leading-[1.15] mb-6 tracking-tight">
                Your buyers are already<br/> asking AI
              </h3>

              {/* Body Text */}
              <p className="text-purple-200/80 text-[15px] md:text-[17px] font-normal leading-relaxed max-w-[650px] mb-8">
                A growing share of B2B research now starts with a prompt, not a
                search box. When ChatGPT or Google's AI Overviews name three
                vendors, being one of them matters more than ranking tenth. We
                make sure AI knows who you are and recommends you.
              </p>

              {/* Link Button */}
              <div className="flex flex-col sm:flex-row items-start justify-start gap-4">
                <Link
                  href="/ai-seo"
                  className="w-full sm:w-auto bg-[#8A2BE2] text-white font-[700] text-[15px] px-6 py-3 rounded-[12px] hover:bg-[#7928CA] transition-all text-center shadow-md inline-flex items-center justify-center gap-2"
                >
                  See our AI SEO services
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>

            {/* Right Column: Image */}
            <div className="lg:col-span-5 w-full flex justify-center items-center">
              <div className="relative w-full h-[385px] sm:h-[420px] rounded-[24px] overflow-hidden">
                <Image
                  src="/images/callout.png"
                  alt="AI SEO Callout illustration"
                  fill
                  className="object-cover rounded-[24px]"
                />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}