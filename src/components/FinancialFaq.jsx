"use client";

import { useState } from "react";

export default function AccountantsFaq() {
  const faqs = [
    {
      question: "What is SEO for financial services?",
      answer:
        "It is search work for advisers, brokers, and fintechs. It ranks product and advice pages so clients find you, while keeping every page within FCA financial promotion rules. The aim is qualified enquiries from a field where trust and accuracy decide who wins.",
    },
    {
      question: "Does financial services SEO follow FCA rules?",
      answer:
        "Yes. Any page promoting a regulated product must be fair, clear, and not misleading under FCA rules. Good financial SEO writes within those rules and your compliance sign off, and still ranks by being clear, accurate, and genuinely useful.",
    },
    {
      question: "Why is trust so important for finance sites?",
      answer:
        'Google treats money pages as high stakes, since poor financial information can cause real harm. Pages with clear author credentials, accurate claims, and honest depth earn both better rankings and client confidence. Trust is the deciding factor in this field.',
    },
    {
      question: "Can fintechs get cited by AI assistants?",
      answer:
        "Yes, with the right structure. Clear entity signals, self contained facts, and answer first content help AI assistants name your firm when users ask for options. This is new ground, so firms that act early gain an edge.",
    },
    {
      question: "How much does financial services SEO cost?",
      answer:
        "A paid audit first, then a scoped monthly retainer based on your products, pages, and compliance needs. You see the scope before you commit, and the plan is built to bring qualified enquiries that cover the cost.",
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