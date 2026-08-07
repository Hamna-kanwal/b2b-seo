"use client";

import { useState } from "react";

export default function B2bFAQ() {
  const faqs = [
    {
      question: "What are B2B SEO services?",
      answer:
        "B2B SEO services are search engine optimisation programmes designed specifically for companies that sell to other businesses. They combine technical SEO, keyword research, content creation, link building and conversion optimisation — but focus on the high-intent, often low-volume search terms that decision-makers use, rather than chasing raw traffic. The goal is qualified enquiries and pipeline, not pageviews.",
    },
    {
      question: "How is B2B SEO different from regular SEO?",
      answer:
        "The mechanics overlap, but the strategy is fundamentally different. B2B keywords typically have lower search volume but far higher deal value, buying decisions involve multiple stakeholders, and sales cycles can run for months. That means content must serve researchers, evaluators and budget-holders at different stages — and success must be measured in leads and revenue, not traffic.",
    },
    {
      question: "How much do B2B SEO services cost?",
      answer:
        "Managed B2B SEO programmes are scoped to your market, competition and goals, so pricing varies. After a discovery call and initial review, we provide a fixed, transparent monthly quote with everything included — no hidden fees, no surprise extras, and no long lock-in contracts.",
    },
    {
      question: "How long does B2B SEO take to show results?",
      answer:
        "Technical improvements can lift performance within weeks, but meaningful movement on competitive commercial terms typically takes three to six months, with results compounding from there. We set honest expectations upfront based on your starting point and competition — and we report on progress every month so you're never guessing.",
    },
    {
      question: "Do you measure leads or just rankings?",
      answer:
        "Leads. Rankings and traffic are how we get there, but every report ties organic performance back to enquiries, demo requests and pipeline. We set up GA4 and conversion tracking properly at the start of every engagement so attribution is never a mystery.",
    },
    {
      question: "Can you work alongside our in-house marketing team?",
      answer:
        "Yes. Many of our clients have internal marketers who handle parts of the work. We flex the scope accordingly — leading strategy and the specialist work while your team covers what they do best. If you'd rather have senior guidance than full delivery, our B2B SEO consultancy (link to homepage) may be the better fit.",
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