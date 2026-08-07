"use client";

import { useState } from "react";

export default function MainFaq() {
  const faqs = [
    {
      question: "What is B2B SEO?",
      answer:
        "B2B SEO is search work for businesses selling to other businesses, where deals are high value and buyers research for weeks. It ranks the pages your buyers find during that research, and increasingly gets you named in AI answers, so search brings you qualified enquiries, not just traffic.",
    },
    {
      question: "Are you an agency or a consultant?",
      answer:
        "Both in practice. You get the focus and direct access of a consultant, so the person doing the work is the person you speak to, with the full service of an agency across technical, content, and authority. There are no junior handovers.",
    },
    {
      question: "How long does B2B SEO take?",
      answer:
        "For a newer or low authority site, expect early ranking movement in three to six months and steady leads in six to twelve. Low competition industry terms move faster, and head terms take longer, so we focus on the winnable pages first.",
    },
    {
      question: "How much does B2B SEO cost?",
      answer:
        "Work starts with a paid audit, then a scoped monthly retainer based on the pages and links your plan needs. You see the scope before you commit, with no long tie in.",
    },
    {
      question: "Do you work with my industry?",
      answer:
        "We focus on B2B and high value fields, with dedicated pages for SaaS, accountancy, law, healthcare, and financial services. If your buyers research before they buy, the approach fits, whether or not your sector is listed.",
    },
    {
      question: "What is AI SEO, and do I need it?",
      answer:
        "AI SEO gets your brand named and cited by ChatGPT, Gemini, Perplexity, and Google's AI Overviews. As more buyers research with AI, being in those answers matters. It shares the same foundations as classic SEO, so we build both together.",
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