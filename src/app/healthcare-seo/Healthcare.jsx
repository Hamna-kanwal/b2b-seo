"use client";
import Image from "next/image";
import Link from "next/link";
import { Check } from "lucide-react";
import HealthcareFaq from "@/components/HealthcareFaq";

const benefits = [
  {
    title: "Patients search local first",
    desc: "Most treatment searches include a location. Clinics with a page per treatment and area win those searches.",
  },
  {
    title: "Health has the highest trust bar",
    desc: "Google judges health pages hard. Building credibility now lifts every treatment page.",
  },
  {
    title: "Reviews compound",
    desc: "Patient reviews build slowly and matter for both ranking and trust. Starting now means a stronger profile later.",
  },
  {
    title: "AI is entering health search",
    desc: "Patients now ask AI where to go. Clinics with clear, credible signals get named first.",
  },
];
const cards = [
  {
    title: "Audit",
    description:
      "We audit your site, rankings, and the treatments worth ranking for.",
    isDark: true,
  },
  {
    title: "Build the pages",
    description:
      "We build treatment and location pages to the medical quality bar.",
    isDark: false,
  },
  {
    title: "Credibility & trust",
    description: "We show clinician credentials and keep claims honest.",
    isDark: true,
  },
  {
    title: "Authority building",
    description:
      "We earn local links and reviews so pages have the trust to rank.",
    isDark: false,
  },
  {
    title: "Track & refine",
    description: "We report on rankings and bookings each month.",
    isDark: true,
  },
];
const services = [
  {
    title: "Treatment pages",
    desc: "A page for each treatment, matched to how patients search.",
    icon: "/images/1.png",
  },
  {
    title: "Local pages",
    desc: "A page for each clinic location.",
    icon: "/images/2.png",
  },
  {
    title: "Credible content",
    desc: "Clinician credentials shown, ideally clinician reviewed.",
    icon: "/images/3.png",
  },
  {
    title: "Booking focused pages",
    desc: "A clear next step to book on every page.",
    icon: "/images/4.png",
  },
  {
    title: "Local & reviews",
    desc: "Google Business Profile and patient reviews for the map pack.",
    icon: "/images/5.png",
  },
  {
    title: "Careful, honest claims",
    desc: "Copy that stays within ASA and sector rules.",
    icon: "/images/6.png",
  },
];
const industries = [
  "Dental practices     ",
  "Physiotherapy clinics",
  "Private GPs     ",
  "Cosmetic clinics     ",
  "Opticians ",
  "Specialist clinics",
];
export default function Saas() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#8A2BE2] to-[#4C187C] flex flex-col items-center text-white font-sans overflow-hidden pt-24 md:pt-28">

      {/* HERO SECTION */}
      <section className="relative w-full flex flex-col items-center px-4 pt-12 md:pt-20 pb-16 md:pb-24 z-10">

      
        {/* Content Container */}
        <div className="max-w-[1100px] w-full text-center space-y-10">

          <h1 className="text-[32px] md:text-[54px] font-[800] leading-[1.15] tracking-tight max-w-[1200px] mx-auto text-center px-4">
            Healthcare SEO that wins bookings,
            <br /> not just rankings
          </h1>

          {/* SUBTEXT SECTION */}
          <div className="max-w-5xl mx-auto space-y-10">
            <p className="text-[16px] md:text-[18px] font-[500] leading-relaxed opacity-90 px-4 max-w-[1000px] mx-auto">
              Patients search for a treatment and a location together, like
              "private physio" plus a town. We build treatment pages, local
              signals, and medically credible content to the standard Google
              holds health pages to, so those searches become bookings
            </p>
            {/* CTA BUTTONS SECTION */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <Link
                href="#"
                className="w-full sm:w-auto bg-white text-[#8A2BE2] font-[700] text-[16px] px-7 py-3.5 rounded-[12px] hover:bg-opacity-95 transition-all text-center shadow-md"
              >
                Get a free SEO review
              </Link>

              <Link
                href="#"
                className="w-full sm:w-auto bg-transparent text-white font-[600] text-[16px] px-7 py-3.5 border border-white rounded-[12px] hover:bg-white hover:text-[#8A2BE2] transition-colors text-center"
              >
                Speak to a B2B SEO specialist
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2section */}

      <section className="w-full bg-white text-black py-16 md:py-24 px-6 md:px-12 flex justify-center">
        <div className="max-w-[1360px] w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* LEFT COLUMN: Text Content Block */}
          <div className="lg:col-span-5 space-y-4 text-left lg:pt-4">
            {/* Changed from font-extrabold to font-bold */}
            <span className="block text-[14px] font-bold uppercase tracking-wider text-black">
              THE CONTRAST
            </span>

            {/* Toned down from font-[800] to font-[700] / bold */}
            <h2 className="text-[34px] md:text-[44px] font-bold text-[#8A2BE2] leading-[1.15] tracking-tight">
              A generalist ranks pages. A specialist wins patients.
            </h2>

            {/* Lightened body description to normal weight with clean leading */}
            <p className="text-[16px] md:text-[17px] font-normal text-black leading-[1.5] max-w-[450px]">
              Health sits under Google's strictest quality bar, and clinics face
              rules on what they can claim. A generic approach ignores both. The
              work has to be medically credible, treatment led, local, and
              careful with every claim.
            </p>
          </div>

          {/* RIGHT COLUMN: Two Wide Comparison Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full lg:pt-2">
            {/* Card 1: Vanity Traffic */}
            <div className="bg-black text-white p-8 md:p-9 rounded-[16px] min-h-[240px] flex flex-col justify-start space-y-4 shadow-sm">
              {/* Reduced heading from font-[700] to font-[600] semi-bold */}
              <h3 className="text-[20px] font-semibold tracking-tight">
                A generic SEO agency
              </h3>
              {/* Set text weight to absolute light/normal weight tracking */}
              <ul className="space-y-2.5 text-[14px] md:text-[14.5px] font-normal opacity-90">
                <li className="flex items-start">
                  <span className="mr-2 select-none">•</span>
                  One services page for every treatment
                </li>
                <li className="flex items-start">
                  <span className="mr-2 select-none">•</span>
                  No grasp of medical content standards
                </li>
                <li className="flex items-start">
                  <span className="mr-2 select-none">•</span>
                  Overpromises on results, risking a complaint
                </li>
                <li className="flex items-start">
                  <span className="mr-2 select-none">•</span>
                  Ignores the local map pack
                </li>
              </ul>
            </div>

            {/* Card 2: Qualified B2B Demand */}
            <div className="bg-[#8A2BE2] text-white p-8 md:p-9 rounded-[16px] min-h-[240px] flex flex-col justify-start space-y-4 shadow-sm">
              {/* Reduced heading from font-[700] to font-[600] semi-bold */}
              <h3 className="text-[20px] font-semibold tracking-tight">
                A specialist for clinics (Teqnoor)
              </h3>
              {/* Set text weight to absolute light/normal weight tracking */}
              <ul className="space-y-2.5 text-[14px] md:text-[14.5px] font-normal opacity-90">
                <li className="flex items-start">
                  <span className="mr-2 select-none">•</span>
                  A page for each treatment and location
                </li>
                <li className="flex items-start">
                  <span className="mr-2 select-none">•</span>
                  Content built to Google's health quality bar
                </li>
                <li className="flex items-start">
                  <span className="mr-2 select-none">•</span>
                  Content built to Google's health quality bar
                </li>
                <li className="flex items-start">
                  <span className="mr-2 select-none">•</span>
                  Local signals built for the map pack
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 3section */}
      <section className="relative w-full bg-[#0A0C10] text-white py-20 px-6 md:px-12 flex flex-col items-center overflow-hidden">
        {/* BACKGROUND DECORATIONS - Using fixed dimensions to prevent layout errors */}
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

        {/* HEADER */}
        <div className="max-w-[800px] w-full text-center space-y-3 mb-16 z-10">
          <span className="block text-[13px] font-bold uppercase tracking-[0.25em] text-[#8A2BE2]">
            WHAT'S INCLUDED
          </span>
          <h2 className="text-[32px] md:text-[44px] font-bold text-white tracking-tight leading-tight">
            What this SEO covers
          </h2>
          <p className="text-white/90 text-base md:text-lg max-w-2xl mx-auto pt-2 leading-relaxed font-normal">
            Built around how patients search for care, and the standard health pages are held to.
          </p>
        </div>

        {/* GRID */}
        <div className="max-w-[1240px] w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 z-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-[#111319] border border-[#1F232E]/60 rounded-[12px] p-7 flex flex-col items-start justify-start text-left space-y-4 hover:border-[#2C3242]/80 transition-colors duration-200"
            >
              <div className="w-[44px] h-[44px] rounded-[8px] bg-[#1A1131] flex items-center justify-center shrink-0">
                <Image
                  src={service.icon}
                  alt={service.title}
                  width={24}
                  height={24}
                />
              </div>
              <div className="space-y-1.5 w-full">
                <h3 className="text-[16.5px] font-semibold text-white tracking-tight">
                  {service.title}
                </h3>
                <p className="text-[14px] font-normal text-[#8A92A6]">
                  {service.desc}
                </p>
              </div>
            </div>
          ))}
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
              Healthcare SEO for private practices{" "}
            </h2>
            <p className="text-base md:text-lg text-[#0A0C10]/70 max-w-2xl leading-relaxed">
              We work with UK private clinics and practices that want more bookings from search.
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
      <section className="w-full overflow-hidden bg-[#F6F1FA]">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[500px]">
          {/* LEFT SIDE */}
          <div
            className="relative text-white px-10 py-16 md:px-20 md:py-24 flex flex-col justify-center overflow-hidden"
            style={{
              background: "linear-gradient(180deg, #8A2BE2 0%, #4C187C 100%)",
            }}
          >
            {/* Ellipse */}
            <img
              src="/images/Ellipse.png"
              alt="ellipse"
              className="absolute -left-[120px] bottom-0 w-[320px] opacity-40 pointer-events-none"
            />

            <div className="relative z-10 max-w-[520px]">
              <span className="block text-[14px] font-semibold uppercase tracking-[0.12em] mb-7">
                WHY NOW
              </span>

              <h2 className="text-[38px] md:text-[52px] font-bold leading-[1.15] tracking-[-0.03em] mb-6">
                Why healthcare SEO can't wait
              </h2>

              {/* <p className="text-[19px] leading-[1.75] text-white/90 max-w-[500px]">
              You don't always need to hand SEO over wholesale — sometimes you
              just need expert direction. If any of these sound familiar, a B2B
              SEO consultant can get you unstuck faster than a full agency
              engagement.
            </p> */}
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="bg-[#F6F1FA] flex items-center justify-center px-8 py-14 md:px-16 md:py-20">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-[640px]">
              {benefits.map((item, index) => (
                <div
                  key={index}
                  className="bg-white border border-[#B168FF] rounded-[18px] p-8 min-h-[170px]"
                >
                  {/* Check Icon */}
                  <div className="w-10 h-10 rounded-full bg-[#F1DFFF] flex items-center justify-center mb-6">
                    <svg
                      className="w-5 h-5 text-[#8A2BE2]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>

                  <h3 className="text-[18px] font-bold leading-[1.4] text-[#111111] mb-3">
                    {item.title}
                  </h3>

                  <p className="text-[16px] leading-[1.6] text-[#737373]">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <HealthcareFaq />
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
                See which patient searches your clinic is missing{" "}
              </h2>

              <p className="text-[#B7B7C2] text-[15px] md:text-[18px] leading-relaxed mb-10">
                Get a free SEO review. We will show you the treatment and local
                searches you could rank for, and where competing clinics are
                winning the bookings{" "}
              </p>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-5">
                {/* Purple Button */}
                <button className="bg-gradient-to-r from-[#8A2BE2] to-[#A855F7] hover:scale-105 transition-all duration-300 text-white font-semibold text-[16px] px-8 py-4 rounded-2xl shadow-lg">
                  Get a free SEO review
                </button>

                {/* White Button */}
                <button className="bg-white hover:bg-[#F5F5F5] hover:scale-105 transition-all duration-300 text-[#8A2BE2] font-semibold text-[16px] px-8 py-4 rounded-2xl shadow-lg">
                  Speak to a B2B SEO specialist
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
