"use client";

import { useState } from "react";

export default function AccountantsFaq() {
  const faqs = [
    {
      question: "Why do accountants need SEO?",
      answer:
        "Most people find an accountant through search, often looking for a service and a town together. SEO puts a practice in front of those searchers, wins map pack visibility, and brings enquiries without paying per click. It is a steady source of local clients.",
    },
    {
      question: "When should an accountant start SEO?",
      answer:
        "Start at least three to four months before your busy season. Self assessment demand builds through autumn to the 31 January deadline, and tax year end demand rises before April. Rankings take time, so early work means you are visible when searches peak.",
    },
    {
      question: "How do accountants rank in the local map pack?",
      answer:
        'A complete, accurate Google Business Profile, consistent name, address, and phone across the web, local reviews, and a service page for each town you cover. Google rewards practices with clear local signals and genuine, useful content.',
    },
    {
      question: "Is SEO better than paid ads for accountants?",
      answer:
        "They do different jobs. Ads bring enquiries fast but stop when you stop paying. SEO builds slower and keeps working, and clicks are free once you rank. Most practices use ads for busy seasons and SEO for steady, long term enquiries.",
    },
    {
      question: "How much does SEO for accountants cost?",
      answer:
        "Work starts with a paid audit, then a scoped monthly retainer based on the services and towns you want to rank for. You see the scope before you commit, and the plan fits a practice budget.",
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