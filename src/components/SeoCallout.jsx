import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function SeoCallout() {
  return (
    <section className="w-full py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Background set to #8A2BE2 */}
        <div className="relative bg-[#8A2BE2] rounded-[40px] p-10 md:p-20 flex flex-col items-center overflow-hidden">
          <div className="relative z-10 max-w-[800px] w-full text-center">
            {/* "What we do" heading is now white */}
            <h4 className="text-white font-bold text-[12px] md:text-[14px] uppercase tracking-[0.25em] mb-6">
              AI SEO CALLOUT
            </h4>

            {/* Headline */}
            <h3 className="text-white text-[32px] md:text-[52px] font-extrabold leading-[1.1] mb-8 tracking-tight">
              Your buyers are already<br /> asking AI
            </h3>

            {/* Body Text is white */}
            <p className="text-white text-[17px] md:text-[20px] font-medium leading-relaxed max-w-[680px] mx-auto mb-10">
              A growing share of B2B research now starts with a prompt, not a
              search box. When ChatGPT or Google's AI Overviews name three
              vendors, being one of them matters more than ranking tenth. We
              make sure AI knows who you are and recommends you.
            </p>

            {/* Link Button with requested style */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <Link
                href="/services"
                className="w-full sm:w-auto bg-white text-[#8A2BE2] font-[700] text-[16px] px-7 py-3.5 rounded-[12px] hover:bg-opacity-95 transition-all text-center shadow-md inline-flex items-center justify-center gap-2"
              >
                See our AI SEO services
                <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}