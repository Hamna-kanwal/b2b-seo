"use client";

import { useState } from "react";

export default function AccountantsFaq() {
  const faqs = [
    {
      question: "What is healthcare SEO?",
      answer:
        "Healthcare SEO is search work for clinics and practices. It ranks treatment and location pages so patients find you when they search for care. Because health affects wellbeing, Google holds these pages to a high standard for expertise, accuracy, and trust.",
    },
    {
      question: "Why is E-E-A-T important for health sites?",
      answer:
        "Google judges health pages on experience, expertise, authority, and trust, because poor medical information can cause harm. Pages written or reviewed by a qualified clinician, with clear credentials and accurate claims, rank better and serve patients more safely.",
    },
    {
      question: "Can clinics make claims about treatment results?",
      answer:
        'Only careful, honest ones. The ASA and sector rules limit claims about medical outcomes, so copy must avoid guarantees and misleading promises. Good healthcare SEO ranks by being clear, credible, and useful, not by overpromising.',
    },
    {
      question: "How do private clinics get more bookings from search?",
      answer:
        "Rank treatment and location pages, keep a complete Google Business Profile, gather patient reviews, and make booking easy on every page. Credible, well structured content wins both the ranking and the booking.",
    },
    {
      question: "How much does healthcare SEO cost?",
      answer:
        "A paid audit first, then a scoped monthly retainer based on your treatments and locations. You see the scope before you commit, and the plan is built to bring bookings that cover the cost.",
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