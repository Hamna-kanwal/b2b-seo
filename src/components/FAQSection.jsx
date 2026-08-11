"use client";

import { useState } from "react";

export default function FAQSection() {
  const faqs = [
    {
      question: "What does a B2B SEO consultant do?",
      answer:
        "A B2B SEO consultant provides the strategy, prioritisation and expert oversight that gets a business-to-business website ranking for the terms its buyers search. Rather than handing over fixed monthly deliverables, a consultant diagnoses what’s holding the site back, builds a roadmap, and supports your team or agency in executing it  focused on qualified leads, not vanity traffic.",
    },
    {
      question: "How is a B2B SEO consultant different from an agency?",
      answer:
        "An agency typically delivers a set package each month. A consultant is senior led and flexible: you get direct access to the expertise, a plan you can act on immediately, and support that fits around your existing team or agency. It suits companies that need direction and prioritisation more than outsourced execution.",
    },
    {
      question: "How much does B2B SEO consulting cost?",
      answer:
        "Consulting is scoped to where you are. Some clients start with a one off audit and roadmap; others want an ongoing advisory retainer. We’ll recommend the lightest engagement that gets you results and confirm pricing during your free review  no obligation.",
    },
    {
      question: "Can you work with our internal team or existing agency?",
      answer:
        "Yes that’s a common setup. We provide the B2B SEO strategy and senior oversight while your in-house team or current agency handles delivery, with clear ownership of each area so there’s no overlap or wasted effort.",
    },
    {
      question: "Do you provide strategy only, or implementation too?",
      answer:
        "Both. Some companies want strategy and prioritisation and will execute themselves; others want hands-on implementation support. We’re happy to advise, do, or do alongside.",
    },
    {
      question: "How long before we see ranking improvements?",
      answer:
        "Most B2B sites see early movement on niche terms within three to six months, with competitive commercial terms taking six to twelve. Sites that already get impressions but no clicks often move fastest, because the work is closing the ranking and authority gap rather than starting from zero.",
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