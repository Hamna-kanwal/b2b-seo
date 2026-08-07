"use client";

import { useState } from "react";

export default function AccountantsFaq() {
  const faqs = [
    {
      question: "Why do law firms need SEO?",
      answer:
        "Most clients find a solicitor through search, usually looking for a practice area and a location. SEO puts a firm in front of those searches and wins high value case enquiries. Because legal cases are worth a lot, a single ranking can return the cost many times over.",
    },
    {
      question: "What are practice area pages?",
      answer:
        "These are pages built for one legal service each, such as conveyancing, family law, or personal injury. Each matches how clients search for that specific need. They rank better than one general services page because they answer a single, clear intent.",
    },
    {
      question: "Does SEO for solicitors follow SRA rules?",
      answer:
        'It should. The SRA requires firm advertising to be accurate and not misleading. Good legal SEO keeps every claim truthful and evidenced, avoids guarantees about outcomes, and still ranks by being genuinely useful and clearly written.',
    },
    {
      question: "How long until a law firm sees results?",
      answer:
        "For a newer site, expect early ranking movement in three to six months and steady case enquiries from search in six to twelve. Local and practice area pages with strong trust signals tend to move first.",
    },
    {
      question: "How much does SEO for law firms cost?",
      answer:
        "A paid audit first, then a scoped monthly retainer based on your practice areas and locations. Because legal cases are high value, even a few extra enquiries a month usually cover the work many times over. You see the scope before you commit.",
    },
    
  ];

  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-[#F7F7F7] py-20 px-6 md:px-12 lg:px-16">
      <div className="max-w-[1240px] mx-auto">

        {/* Heading */}
        <div className="mb-12">
          <h2 className="text-[34px] md:text-[44px] font-semibold text-[#8A2BE2] leading-[1.1] mb-3">
            Frequently Asked Questions
          </h2>

          <p className="text-[18px] text-[#555555]">
            These are some common FAQs our clients often ask.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-2">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="border border-[#D7DCE2] rounded-[6px] overflow-hidden bg-white"
              >
                {/* Question */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className={`w-full flex items-center justify-between text-left px-5 md:px-6 py-5 transition-all duration-200 ${
                    isOpen
                      ? "bg-[#EFE3FF]"
                      : "bg-white hover:bg-[#F8F4FF]"
                  }`}
                >
                  <span className="text-[18px] md:text-[19px] font-semibold text-[#1D1D1D]">
                    {faq.question}
                  </span>

                  <span className="text-[24px] text-[#5A189A] leading-none">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {/* Answer */}
                {isOpen && (
                  <div className="px-5 md:px-6 py-5 border-t border-[#D7DCE2] bg-[#FFFFFF]">
                    <p className="text-[17px] leading-[1.7] text-[#444444] max-w-[1100px]">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}