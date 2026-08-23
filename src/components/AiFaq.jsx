"use client";

import { useState } from "react";

export default function AiFaq() {
  const faqs = [
    {
      question: "What is an AI SEO agency?",
      answer:
        "An AI SEO agency helps brands become visible in AI-generated answers  the responses given by ChatGPT, Gemini, Perplexity, Claude and Google's AI Overviews. Where a traditional agency optimises for ranking positions, an AI SEO agency optimises for citations, mentions and recommendations inside the answers themselves, using techniques like generative engine optimisation (GEO), entity optimisation and structured data.",
    },
    {
      question: "What's the difference between AI SEO, GEO and AEO?",
      answer:
        "They overlap heavily. GEO (generative engine optimisation) focuses on getting cited by AI chat platforms like ChatGPT and Perplexity. AEO (answer engine optimisation) focuses on being the direct answer in features like AI Overviews and featured snippets. AI SEO is the umbrella covering both plus the traditional SEO foundations that make either possible. We handle all of it as one programme.",
    },
    {
      question: "Does traditional SEO still matter?",
      answer:
        "More than ever. AI systems lean heavily on pages that already rank well and sites with strong authority Google's AI Overviews draw largely from top organic results, and chat assistants retrieve from well optimised, crawlable pages. Strong traditional SEO is the foundation; AI SEO is the layer that turns rankings into recommendations.",
    },
    {
      question: "How do you measure AI SEO results?",
      answer:
        "We track your share of voice across the major AI platforms: how often you're mentioned or cited for your key commercial queries, how you're described, and how that compares to competitors alongside traditional metrics like rankings, AI referral traffic and, most importantly, enquiries. You get a clear monthly report showing movement on all of it.",
    },
    {
      question: "How long does it take to appear in AI answers?",
      answer:
        "It varies by platform. Changes can surface in retrieval-based systems like Perplexity and AI Overviews within weeks, since they pull from live search results. Visibility in model-level answers builds more gradually as authority and citations accumulate typically over three to six months. We prioritise the fastest-moving opportunities first.",
    },
    {
      question: "Can you run AI SEO alongside our existing SEO?",
      answer:
        'Yes. If you have an in-house team or agency handling traditional SEO, we can layer AI visibility work on top and coordinate with them. If you\'d prefer everything under one roof, our <a href="/b2b-seo-services" class="underline text-[#8A2BE2] hover:text-[#7928CA]">B2B SEO services</a> cover both channels as a single programme.',
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
                    isOpen ? "bg-[#EFE3FF]" : "bg-white hover:bg-[#F8F4FF]"
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
                    <div
                      className="text-[17px] leading-[1.7] text-[#444444] max-w-[1100px]"
                      dangerouslySetInnerHTML={{ __html: faq.answer }}
                    />
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
