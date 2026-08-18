"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Check } from "lucide-react";
import AccountantsFaq from "@/components/AccountantsFaq";
import AuditForm from "@/components/AuditForm";

const benefits = [
  {
    title: "Your busy season is set by the calendar",
    desc: "Self assessment peaks by 31 January and tax year end by April. Rankings take months, so the work has to start well before.",
  },
  {
    title: "Clients search local first",
    desc: "Most accountant searches include a town. Practices with a page for each area win those searches, and the slots fill up.",
  },
  {
    title: "Trust decides finance rankings",
    desc: "Google holds money pages to a high bar. Building credibility now pays off across every service page.",
  },
  {
    title: "AI is entering local search",
    desc: "Buyers now ask AI for a local accountant. Practices with clear signals get named first.",
  },
];
const cards = [
  {
    title: "Audit",
    description:
      "We audit your site, local rankings, and the services worth ranking for.",
    isDark: true,
  },
  {
    title: "Build the pages",
    description:
      "We build a page for each service and town, with honest local detail.",
    isDark: false,
  },
  {
    title: "Local & trust",
    description:
      "We set up the Google Business Profile and add the credentials Google expects.",
    isDark: true,
  },
  {
    title: "Authority building",
    description: "We earn local links so the pages have the trust to rank.",
    isDark: false,
  },
  {
    title: "Track & refine",
    description:
      "We report on rankings and enquiries each month, timed around your seasons.",
    isDark: true,
  },
];
const services = [
  {
    title: "Service pages",
    desc: "Self assessment, bookkeeping, VAT, payroll, and limited company accounts, each on its own page.",
    icon: "/images/1.png",
  },
  {
    title: "Local pages",
    desc: "A page for each town you serve, with real local detail.",
    icon: "/images/2.png",
  },
  {
    title: "Google Business Profile",
    desc: "Setup and optimisation for the local map pack.",
    icon: "/images/3.png",
  },
  {
    title: "Trust content",
    desc: "Qualifications and credentials shown, so readers and Google trust the advice.",
    icon: "/images/4.png",
  },
  {
    title: "Seasonal planning",
    desc: "Key pages ranking before the 31 January and April peaks.",
    icon: "/images/5.png",
  },
  {
    title: "Local link building",
    desc: "Links from local and trade sources to earn ranking trust.",
    icon: "/images/6.png",
  },
];
const industries = [
  "Sole practitioners ",
  "Small firms",
  "Book keeping services",
  "Tax advisers",
  "Payroll bureaus",
  "Multi-office practices",
];
export default function Accountants() {
  const [isAuditModalOpen, setIsAuditModalOpen] = useState(false);

  const openAudit = () => setIsAuditModalOpen(true);
  const closeAudit = () => setIsAuditModalOpen(false);
  return (
    <main className="min-h-screen bg-white flex flex-col items-center text-[#0A0C10] font-sans overflow-hidden pt-24 md:pt-28">
      {/* HERO SECTION */}
      <section className="relative w-full flex flex-col items-center px-4 pt-12 md:pt-20 pb-16 md:pb-24 z-10 overflow-hidden">
        {/* Content Container - Two Column Layout on Desktop */}
        <div className="max-w-[1280px] w-full flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">
          {/* Left Column: Main Headline, Subtext, Badges & CTA */}
          <div className="flex-1 text-center lg:text-left space-y-8 max-w-[700px]">
            {/* Small Top Badge */}
            <div className="inline-flex items-center px-3.5 py-1.5 rounded-full border border-[#8A2BE2]/20 bg-[#F9F3FF] text-[#8A2BE2] text-[13px] font-[500] tracking-wide">
              SEO FOR ACCOUNTANTS · UK
            </div>

            {/* Main Heading */}
            <h1 className="text-[32px] md:text-[52px] lg:text-[56px] font-[800] leading-[1.12] tracking-tight text-[#0A0C10]">
              SEO for accountants that brings{" "}
              <span className="text-[#8A2BE2]">enquiries</span>,{" "}
              <br className="hidden md:block" />
              not just rankings
            </h1>
            {/* Subtext */}
            <p className="text-[16px] md:text-[18px] font-[500] leading-relaxed text-[#0A0C10]/70">
              Most people find an accountant by searching a service and a town
              together. We build the pages, local signals, and trust content a
              practice needs to show up for those searches and win the
              enquiry.{" "}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={openAudit}
                className="w-full sm:w-auto bg-[#8A2BE2] text-white font-[700] text-[16px] px-7 py-3.5 rounded-[16px] hover:bg-[#7822c9] transition-all text-center shadow-md shadow-purple-700/10"
              >
                Get a free SEO review
              </button>

              <Link
                href="https://wa.me/447918092156?text=Hi!%20I'm%20interested%20in%20your%20services.%20Could%20you%20please%20provide%20more%20details%3F"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-transparent text-[#8A2BE2] font-[600] text-[16px] px-7 py-3.5 border border-[#8A2BE2] rounded-[16px] hover:bg-[#F9F3FF] transition-colors text-center cursor-pointer"
              >
                Speak to a B2B SEO specialist
              </Link>
            </div>
          </div>

          {/* Right Column: Larger Graphic Container */}
          <div className="w-full lg:w-[600px] flex justify-center items-center shrink-0">
            <div className="relative w-full h-[440px] md:h-[520px]">
              <Image
                src="/images/accounts.jpeg"
                alt="Accountants"
                fill
                className="object-contain scale-105 md:scale-110"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2section */}

      <section className="w-full bg-[#F9F3FF] text-[#0A0C10] py-16 px-6 md:px-12 flex justify-center">
        <div className="max-w-[1050px] w-full flex flex-col items-start">
          <div className="max-w-[750px] mb-10 space-y-2.5 text-left">
            <span className="block text-[12px] font-bold uppercase tracking-[0.25em] text-[#8A2BE2]">
              THE CONTRAST
            </span>

            <h2 className="text-[28px] md:text-[40px] font-bold text-[#0A0C10] tracking-tight">
              A generalist ranks pages.
              <br /> A specialist wins clients.
            </h2>

            <p className="text-[15px] md:text-[16px] text-[#0A0C10]/70 leading-relaxed">
              Accountancy search is local, seasonal, and held to a high trust
              bar. A generic approach misses all three. The work has to match
              how clients search, when they search, and the credibility Google
              expects from a finance site.
            </p>
          </div>

          {/* RIGHT COLUMN: Two Wide Comparison Cards */}
          <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
            {/* Card 1: Generic SEO Agency */}
            <div className="bg-white border border-[#8A2BE2]/20 text-[#0A0C10] p-6 rounded-[14px] flex flex-col justify-start space-y-4 shadow-sm">
              <h3 className="text-[18px] font-bold tracking-tight text-[#0A0C10]">
                A generic SEO agency
              </h3>
              <ul className="space-y-3 text-[13.5px] md:text-[14.5px] font-normal text-[#0A0C10]/80">
                <li className="flex items-start">
                  <span className="mr-2.5 select-none text-[#8A2BE2] font-bold">
                    •
                  </span>
                  <span>
                    One services page, competing for everything at once
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2.5 select-none text-[#8A2BE2] font-bold">
                    •
                  </span>
                  <span> No plan for the January and April peaks</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2.5 select-none text-[#8A2BE2] font-bold">
                    •
                  </span>
                  <span>Ignores the local map pack</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2.5 select-none text-[#8A2BE2] font-bold">
                    •
                  </span>
                  <span>Treats finance content like any other topic</span>
                </li>
              </ul>
            </div>

            {/* Card 2:  (Teqnoor) */}
            <div className="bg-[#120524] text-white p-6 rounded-[14px] flex flex-col justify-start space-y-4 shadow-xl">
              <h3 className="text-[18px] font-bold tracking-tight text-white">
                A specialist for accountants (Teqnoor)
              </h3>
              {/* Set text weight to absolute light/normal weight tracking */}
              <ul className="space-y-3 text-[13.5px] md:text-[14.5px] font-normal text-white/90">
                <li className="flex items-start">
                  <span className="mr-2.5 select-none text-[#8A2BE2] font-bold">
                    •
                  </span>
                  <span>A page for each service and each town you serve</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2.5 select-none text-[#8A2BE2] font-bold">
                    •
                  </span>
                  <span>Key pages ranking before the busy seasons</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2.5 select-none text-[#8A2BE2] font-bold">
                    •
                  </span>
                  <span>Google Business Profile built for the map pack</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2.5 select-none text-[#8A2BE2] font-bold">
                    •
                  </span>
                  <span>
                    Content written to the trust standard finance demands
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 3section */}
      <section className="relative w-full bg-[#0A0C10] text-white py-20 px-6 md:px-12 flex justify-center overflow-hidden">
        {/* BACKGROUND DECORATIONS */}
        <div className="absolute left-4 top-[4%] w-[260px] h-[260px] opacity-10 pointer-events-none z-0">
          <Image
            src="/images/white.png"
            alt="decoration"
            width={260}
            height={260}
          />
        </div>

        <div className="absolute right-[-5%] top-[10%] w-[400px] h-[400px] opacity-10 pointer-events-none z-0">
          <Image
            src="/images/Ellipse.png"
            alt="decoration"
            width={400}
            height={400}
          />
        </div>

        <div className="absolute right-[5%] top-[50%] w-[250px] h-[250px] opacity-[0.05] pointer-events-none z-0">
          <Image
            src="/images/Ellipse1.png"
            alt="decoration"
            width={250}
            height={250}
          />
        </div>

        {/* CONTAINER: Two-column desktop layout */}
        <div className="max-w-[1360px] w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start z-10">
          {/* LEFT COLUMN: Header Content */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 space-y-4 text-left">
            <span className="block text-[13px] font-bold uppercase tracking-[0.25em] text-[#8A2BE2]">
              WHAT'S INCLUDED
            </span>
            <h2 className="text-[32px] md:text-[44px] font-bold text-white tracking-tight leading-tight">
              What this SEO covers
            </h2>
            <p className="text-white/90 text-base md:text-lg max-w-md leading-relaxed font-normal pt-1">
              Built around how clients search for an accountant, and the
              standard Google holds finance pages to.
            </p>
          </div>

        {/* RIGHT COLUMN: 3x2 Grid where 2nd row has left card purple and right card black */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5 w-full">
          {services.map((service, index) => {
            let isHighlighted = false;
            if (index === 1 || index === 2 || index === 5) {
              isHighlighted = true;
            }

            return (
              <div
                key={index}
                className={`rounded-[16px] p-7 flex flex-col items-start justify-start text-left space-y-3 transition-all duration-200 ${
                  isHighlighted
                    ? "bg-[#8A2BE2] text-white shadow-lg shadow-purple-900/30 border border-purple-400/30"
                    : "bg-[#12151D] border border-[#1F232E]/80 text-white hover:border-[#2C3242]"
                }`}
              >
                <h3
                  className={`text-[17px] md:text-[18px] font-bold tracking-tight ${isHighlighted ? "text-white" : "text-white"}`}
                >
                  {service.title}
                </h3>
                <p
                  className={`text-[14px] leading-relaxed font-normal ${isHighlighted ? "text-white/90" : "text-[#8A92A6]"}`}
                >
                  {service.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
      {/* 4section */}
      <section className="w-full bg-[#F9F3FF] py-20 px-6 md:px-12">
        {/* Changed items-center to items-start and text-center to text-left */}
        <div className="max-w-[1240px] mx-auto flex flex-col items-start text-left">
          {/* HEADER */}
          <div className="mb-10 space-y-3">
            <span className="block text-[13px] font-bold uppercase tracking-[0.25em] text-[#8A2BE2]">
              WHO WE WORK WITH
            </span>
            <h2 className="text-[32px] md:text-[44px] font-bold text-[#0A0C10] tracking-tight">
              SEO for practices of every size{" "}
            </h2>
            <p className="text-base md:text-lg text-[#0A0C10]/70 max-w-2xl leading-relaxed">
              We work with UK accountancy practices that want a steady flow of
              local business clients.
            </p>
          </div>

          {/* PILLS CONTAINER - Changed justify-center to justify-start */}
          <div className="flex flex-wrap justify-start gap-3 md:gap-4">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="px-6 py-3 rounded-full border border-[#8A2BE2]/30 text-[#8A2BE2] bg-white/50 font-medium text-[15px] hover:bg-white hover:shadow-sm transition-all duration-200 cursor-default"
              >
                {industry}
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* 5section */}
      <section className="w-full bg-white py-20 px-6 md:px-12">
        <div className="max-w-[1240px] mx-auto flex flex-col items-center">
          {/* HEADER SECTION */}
          <div className="mb-12 space-y-3 text-center">
            <span className="block text-[13px] font-bold uppercase tracking-[0.25em] text-[#8A2BE2]">
              HOW IT WORKS
            </span>
            <h2 className="text-[32px] md:text-[44px] font-bold text-[#0A0C10] tracking-tight leading-tight">
              How our process works
            </h2>
          </div>

          {/* CARDS GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 w-full items-stretch">
            {cards.map((card, index) => (
              <div
                key={index}
                className={`flex flex-col p-8 rounded-[24px] transition-all duration-300 ${
                  card.isDark
                    ? "bg-[#0A0C10] text-white"
                    : "bg-[#e3d9ff] text-[#0A0C10]"
                } ${
                  index === 4
                    ? "sm:col-span-2 lg:col-span-1 max-w-sm mx-auto sm:max-w-none w-full"
                    : ""
                }`}
              >
                {/* Custom Icon Circle */}
                <div
                  className={`w-7 h-7 rounded-full flex items-center justify-center mb-8 shrink-0 ${
                    card.isDark ? "bg-white/10" : "bg-[#8A2BE2]/10"
                  }`}
                >
                  <Check
                    className={`w-4 h-4 ${
                      card.isDark ? "text-white" : "text-[#8A2BE2]"
                    }`}
                    strokeWidth={3}
                  />
                </div>

                {/* Card Content */}
                <h3 className="text-[20px] font-bold tracking-tight leading-snug mb-4">
                  {card.title}
                </h3>
                <p
                  className={`text-[14px] leading-relaxed font-normal ${
                    card.isDark ? "text-gray-400" : "text-gray-700"
                  }`}
                >
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* 6section */}
      <section className="w-full bg-[#F9F3FF] py-20 px-6 md:px-12">
        {" "}
        <div className="max-w-[1240px] mx-auto flex flex-col items-start text-left">
          {/* HEADER */}
          <div className="mb-14 space-y-3">
            <span className="block text-[13px] font-bold uppercase tracking-[0.25em] text-[#8A2BE2]">
              WHY NOW
            </span>
            <h2 className="text-[32px] md:text-[44px] font-bold text-[#0A0C10] tracking-tight">
              Why accountancy SEO can't wait
            </h2>
          </div>

          {/* CARDS GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
            {benefits.map((item, index) => (
              <div
                key={index}
                className="bg-white border-2 border-[#8A2BE2] rounded-[20px] p-8 md:p-10 shadow-[0_2px_12px_rgba(0,0,0,0.03)] flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-[20px] font-bold tracking-tight text-[#0A0C10] mb-3">
                    {item.title}
                  </h3>
                  <p className="text-[16px] leading-[1.6] text-gray-600">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <AccountantsFaq />
      {/* section 8 */}
      <section className="w-full bg-white py-12 md:py-16 px-6">
        <div className="max-w-[1200px] mx-auto">
          {/* CTA Card */}
          <div className="relative overflow-hidden rounded-[36px] bg-[#06060B] px-8 py-16 md:px-16 md:py-20 text-center">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
              <Image
                src="/images/cta.jpeg"
                alt="CTA Background"
                fill
                priority
                className="object-cover"
              />
            </div>

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/40 z-0" />

            {/* Content */}
            <div className="relative z-10 max-w-[850px] mx-auto flex flex-col items-center">
              <h2 className="text-white text-[26px] md:text-[42px] font-bold leading-[1.2] tracking-[-0.03em] mb-5">
                See which local searches your practice is missing{" "}
              </h2>

              <p className="text-[#B7B7C2] text-[15px] md:text-[18px] leading-relaxed mb-10">
                Get a free SEO review. We will show you the services and towns
                you could rank for, and where competing practices are winning
                the enquiries.{" "}
              </p>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-5">
                {/* Purple Button */}
                <button
                  type="button"
                  onClick={openAudit}
                  className="bg-gradient-to-r from-[#8A2BE2] to-[#A855F7] hover:scale-105 transition-all duration-300 text-white font-semibold text-[16px] px-8 py-4 rounded-2xl shadow-lg"
                >
                  Get a free SEO review
                </button>

                {/* White Button */}
                <Link
                  href="https://wa.me/447918092156?text=Hi%21%20I%27m%20interested%20in%20your%20services.%20Could%20you%20please%20provide%20more%20details%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white hover:bg-[#F5F5F5] hover:scale-105 transition-all duration-300 text-[#8A2BE2] font-semibold text-[16px] px-8 py-4 rounded-2xl shadow-lg"
                >
                  Speak to a B2B SEO specialist
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <AuditForm isOpen={isAuditModalOpen} onClose={closeAudit} />
    </main>
  );
}
