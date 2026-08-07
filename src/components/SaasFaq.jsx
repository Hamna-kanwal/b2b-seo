"use client";

import { useState } from "react";

export default function SaasFaq() {
  const faqs = [
    {
      question: "What is SaaS SEO?",
      answer:
        "SaaS SEO is search optimisation for software companies. It targets the terms buyers use while comparing tools, such as category, comparison, and alternative searches, and ties them to trials and demos. The aim is qualified pipeline, not traffic for its own sake.",
    },
    {
      question: "How long does SaaS SEO take to work?",
      answer:
        "For a new or low authority site, expect early ranking movement in three to six months and meaningful trials or demos from search in six to twelve. Bottom of funnel comparison pages often convert first, since those buyers are close to a decision.",
    },
    {
      question: "What are comparison and alternative pages?",
      answer:
        'These are pages built for buyers searching "your tool vs rival" or "rival alternative". They set out the differences plainly and honestly. They convert well because the reader is close to choosing, and they are among the highest value pages in SaaS SEO.',
    },
    {
      question: "Do you help with AI SEO for SaaS?",
      answer:
        "Yes. We structure your pages so AI assistants name your product when buyers ask for options. That means clear entity signals, self contained facts, and answer first content ChatGPT, Perplexity, and Google AI Overviews can quote.",
    },
    {
      question: "How do you measure SaaS SEO success?",
      answer:
        "We measure trials, demos, and pipeline from search, not raw traffic. Rankings and clicks matter only where they lead to a product action, so reporting focuses on the visits that turn into signups and sales conversations.",
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