"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import AuditForm from "@/components/AuditForm";

export default function Contact() {
  const [isAuditModalOpen, setIsAuditModalOpen] = useState(false);

  const openAudit = () => setIsAuditModalOpen(true);
  const closeAudit = () => setIsAuditModalOpen(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
    website: "",
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("/api/queries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setStatus({
          type: "success",
          message: "Thank you! Your query has been submitted.",
        });
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          message: "",
          website: "",
        });
      } else {
        throw new Error(data.message || "Failed to submit.");
      }
    } catch (err) {
      setStatus({ type: "error", message: err.message });
    } finally {
      setLoading(false);
    }
  };

  return (
 <main className="min-h-screen bg-[#130628] flex flex-col items-start text-white font-sans overflow-hidden pt-24 md:pt-28">
      {/* HERO SECTION */}
      <section className="relative w-full flex flex-col items-start px-6 sm:px-12 md:px-20 pt-12 md:pt-20 pb-16 md:pb-24 z-10">
        <div className="max-w-[1100px] w-full text-left space-y-6">
          
          {/* Main Title */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.15] text-white">
            Contact us
          </h1>

          {/* Subtitle description */}
          <p className="max-w-2xl text-base sm:text-lg font-normal text-purple-200/80 leading-relaxed">
            Get in touch with Teqnoor for B2B SEO and AI SEO. Call, email, or
            send the form below. The quickest way to start is a free SEO review.
          </p>

        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 px-4 md:px-24 w-full bg-gray-50 text-gray-900">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 md:gap-24">
          {/* Left Side: Info */}
          <div className="space-y-12">
            <div className="mb-10">
              <h2 className="text-4xl font-bold text-[#8A2BE2] tracking-tight">
                How to reach us
              </h2>
            </div>

            <div className="space-y-10">
              {[
                { Icon: Mail, label: "Email", text: "info@teqnoor.com" },
                { Icon: Phone, label: "Mobile", text: "+44 7918 092156" },
                { Icon: Phone, label: "Office", text: "020 3576 4066" },
                {
                  Icon: MapPin,
                  label: "Office",
                  text: "27 Gloucester Street, London WC1N 3AX",
                },
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-6">
                  <div className="p-4 rounded-2xl border border-gray-100 shadow-sm bg-white text-[#8A2BE2]">
                    <item.Icon size={28} strokeWidth={2.5} />
                  </div>
                  <div>
                    <p className="text-[11px] font-bold text-gray-400 tracking-[0.2em] uppercase">
                      {item.label}
                    </p>
                    <p className="font-bold text-gray-800 text-lg leading-7">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: Form */}

          <form
            onSubmit={handleSubmit}
            className="bg-white p-10 rounded-[4rem] shadow-xl border border-gray-100 space-y-6"
          >
            {status.message && (
              <div
                className={`p-4 rounded-2xl text-sm font-semibold text-center ${status.type === "success" ? "bg-green-50 text-green-700" : "bg-red-50 text-red-700"}`}
              >
                {status.message}
              </div>
            )}
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                required
                className="w-full p-4 border border-gray-200 rounded-2xl outline-none focus:ring-2 focus:ring-[#8A2BE2] transition-all"
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                required
                className="w-full p-4 border border-gray-200 rounded-2xl outline-none focus:ring-2 focus:ring-[#8A2BE2] transition-all"
              />
            </div>
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-4 border border-gray-200 rounded-2xl outline-none focus:ring-2 focus:ring-[#8A2BE2] transition-all"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full p-4 border border-gray-200 rounded-2xl outline-none focus:ring-2 focus:ring-[#8A2BE2] transition-all"
            />
            <input
              type="url"
              name="website"
              placeholder="Website URL"
              value={formData.website}
              onChange={handleChange}
              required
              className="w-full p-4 border border-gray-200 rounded-2xl outline-none focus:ring-2 focus:ring-[#8A2BE2] transition-all"
            />
            <textarea
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full p-4 border border-gray-200 rounded-2xl h-32 outline-none focus:ring-2 focus:ring-[#8A2BE2] transition-all"
            ></textarea>
            <button
              type="submit"
              disabled={loading}
              className="w-full text-white font-bold py-4 rounded-2xl shadow-lg bg-[#8A2BE2] hover:bg-[#4C187C] transition-colors"
            >
              {loading ? "Submitting..." : "Get My Free Audit"}
            </button>
          </form>
        </div>
      </section>

      <section className="w-full bg-[#F9F3FF] py-20 px-6 md:px-12">
        <div className="max-w-[1240px] mx-auto flex flex-col items-center text-center">
          <div className="mb-10 space-y-3">
            <span className="block text-[13px] font-bold uppercase tracking-[0.25em] text-[#8A2BE2]">
              WHAT HAPPENS NEXT
            </span>
            <h2 className="text-[32px] md:text-[44px] font-bold text-[#0A0C10] tracking-tight">
              What happens after you get in touch
            </h2>
            <p className="text-base md:text-lg text-[#0A0C10]/70 max-w-2xl leading-relaxed mx-auto">
              We read every enquiry ourselves and reply, usually within one
              working day. If it looks like a fit, we will suggest a short call
              or start with a free SEO review. No hard sell, and no call centre.
            </p>
          </div>
        </div>
      </section>

      {/* cta */}
      <section className="w-full bg-white py-12 md:py-16 px-6">
        <div className="max-w-[1200px] mx-auto">
          <div className="relative overflow-hidden rounded-[36px] bg-[#06060B] px-8 py-16 md:px-16 md:py-20 text-center">
            <div className="absolute inset-0 z-0">
              <Image
                src="/images/cta.jpeg"
                alt="CTA Background"
                fill
                priority
                className="object-cover"
              />
            </div>

            <div className="absolute inset-0 bg-black/40 z-0" />

            <div className="relative z-10 max-w-[850px] mx-auto flex flex-col items-center">
              <h2 className="text-white text-[26px] md:text-[42px] font-bold leading-[1.2] tracking-[-0.03em] mb-5">
                Prefer to start with a review?{" "}
              </h2>

              <p className="text-[#B7B7C2] text-[15px] md:text-[18px] leading-relaxed mb-10">
                Request a free SEO review and we will show you where your
                rankings stand and what to fix first.{" "}
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

                <Link
                  href="https://calendly.com/teqnoor/understanding-call"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-white hover:bg-[#F5F5F5] hover:scale-105 transition-all duration-300 text-[#8A2BE2] font-semibold text-[16px] px-8 py-4 rounded-2xl shadow-lg"
                >
                  Book a strategy call
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
