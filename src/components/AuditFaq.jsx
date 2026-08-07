"use client";

import { useState } from "react";

export default function AuditFaq() {
  const faqs = [
    {
      question: "What is a B2B SEO audit?",
      answer:
        "A B2B SEO audit is a comprehensive review of your website's ability to attract and convert business buyers through organic search. It examines technical health, keyword targeting, content, backlinks, competitors and conversion paths — but unlike a generic audit, everything is assessed against B2B realities: niche keywords, long sales cycles, multiple decision-makers and lead quality over traffic volume.",
    },
    {
      question: "How is this different from a free automated audit?",
      answer:
        "Free audits are software exports — a crawler flags every technical warning it finds, with no context, no prioritisation and no connection to your business. Our audit is conducted manually by a senior B2B specialist who understands your market, benchmarks you against real competitors, and ranks every finding by commercial impact. One is a lead magnet; the other is a working document your team can execute against.",
    },
    {
      question: "What do I actually receive?",
      answer:
        "A prioritised, plain-English report covering all eight audit areas, a ranked action plan separating quick wins from longer-term projects, and a live walkthrough session where we explain the findings and answer questions. Everything is written to be actioned — by your team, your agency, or us.",
    },
    {
      question: "How much does a B2B SEO audit cost?",
      answer:
        "Pricing depends on the size and complexity of your site — a 50-page consultancy site and a 5,000-page SaaS platform are very different jobs. After a short call we'll quote a fixed, one-off price. There's no obligation to work with us afterwards, and the audit fee is credited if you move into an ongoing engagement.",
    },
    {
      question: "How long does the audit take?",
      answer:
        "Typically one to two weeks from kick-off call to walkthrough, depending on site size. If something urgent surfaces mid-audit — like an indexation issue actively costing you traffic — we'll flag it immediately rather than waiting for the final report.",
    },
    {
      question: "What happens after the audit?",
      answer:
        "That's entirely up to you. Many clients implement the roadmap with their own team or existing agency. Others bring us in for ongoing support — either as a B2B SEO consultant guiding delivery (link to homepage), or through our fully managed B2B SEO services (link to /b2b-seo-services/). The audit is designed to stand on its own either way.",
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