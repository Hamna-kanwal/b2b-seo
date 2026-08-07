"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2 } from "lucide-react";

export default function AuditForm({ isOpen, onClose }) {
  const [status, setStatus] = useState("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    website: "",
    stuff: "",
    honeyPot: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    // Honeypot check directly on front-end
    if (formData.honeyPot) {
      setStatus("success");
      return;
    }

  try {
      // 🚀 Points to port 3000 on local, and the correct live backend link on production
      const targetUrl = "https://b2b-seo-api-backend.vercel.app/api/audit";

      const response = await fetch(targetUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          website: formData.website,
          stuff: formData.stuff,
          honeyPot: formData.honeyPot,
        }),
      });

      if (response.ok) {
        setStatus("success");
        setTimeout(() => {
          setStatus("idle");
          setFormData({
            name: "",
            email: "",
            website: "",
            stuff: "",
            honeyPot: "",
          });
          onClose();
        }, 5000);
      } else {
        setStatus("idle");
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Network error:", error);
      setStatus("idle");
      alert("Network error. Please check your connection.");
    }
  };

  if (!isOpen) return null;

  // Safely extract first name without risking a split crash
  const firstName =
    formData.name && typeof formData.name === "string"
      ? formData.name.trim().split(" ")[0]
      : "there";

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 30 }}
          className="relative bg-white w-full max-w-[700px] rounded-[40px] shadow-2xl overflow-hidden"
        >
          <div className="h-2 w-full bg-gradient-to-r from-[#8A2BE2] to-[#4C187C]" />

          <button
            onClick={onClose}
            className="absolute top-8 right-8 text-gray-300 hover:text-black transition-colors"
          >
            <X size={24} />
          </button>

          <div className="p-8 md:p-14">
            {status !== "success" ? (
              <>
                <div className="mb-10 text-left">
                  <h3 className="text-3xl md:text-4xl font-[900] text-gray-900 uppercase tracking-tighter leading-none mb-4">
                    Request Your <span className="text-[#8A2BE2]">Audit</span>
                  </h3>
                  <p className="text-gray-500 font-semibold text-sm md:text-base opacity-80">
                    Get a professional lead gap analysis for your wholesale
                    business.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Invisible Honeypot Field */}
                  <input
                    type="text"
                    name="honeyPot"
                    className="hidden"
                    autoComplete="off"
                    tabIndex={-1}
                    value={formData.honeyPot}
                    onChange={(e) =>
                      setFormData({ ...formData, honeyPot: e.target.value })
                    }
                  />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[11px] font-black uppercase tracking-[0.25em] text-gray-400 ml-1">
                        Full Name
                      </label>
                      <input
                        required
                        type="text"
                        className="w-full px-6 py-4 bg-white border-2 border-[#8A2BE2] rounded-2xl outline-none font-bold text-gray-900 placeholder-gray-300 transition-all shadow-sm"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[11px] font-black uppercase tracking-[0.25em] text-gray-400 ml-1">
                        Email
                      </label>
                      <input
                        required
                        type="email"
                        className="w-full px-6 py-4 bg-white border-2 border-[#8A2BE2] rounded-2xl outline-none font-bold text-gray-900 placeholder-gray-300 transition-all shadow-sm"
                        placeholder="name@company.com"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[11px] font-black uppercase tracking-[0.25em] text-gray-400 ml-1">
                      Website Link
                    </label>
                    <input
                      required
                      type="text"
                      className="w-full px-6 py-4 bg-white border-2 border-[#8A2BE2] rounded-2xl outline-none font-bold text-gray-900 placeholder-gray-300 transition-all shadow-sm"
                      placeholder="https://www.yourcompany.com"
                      value={formData.website}
                      onChange={(e) =>
                        setFormData({ ...formData, website: e.target.value })
                      }
                    />
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between items-end ml-1">
                      <label className="text-[11px] font-black uppercase tracking-[0.25em] text-gray-400">
                        Message
                      </label>
                      <span className="text-[10px] font-bold text-gray-300 uppercase tracking-widest">
                        Optional • Max 50 Words
                      </span>
                    </div>
                    <textarea
                      rows={2}
                      className="w-full px-6 py-4 bg-white border-2 border-[#8A2BE2] rounded-2xl outline-none font-bold text-gray-900 placeholder-gray-300 transition-all shadow-sm"
                      placeholder="Tell us about your current operations..."
                      value={formData.stuff}
                      onChange={(e) =>
                        setFormData({ ...formData, stuff: e.target.value })
                      }
                    />
                  </div>

                  <button
                    disabled={status === "loading"}
                    type="submit"
                    className="w-full bg-[#8A2BE2] text-white py-6 rounded-2xl font-black text-sm uppercase tracking-[0.35em] hover:bg-[#7724C3] active:scale-[0.97] transition-all shadow-xl shadow-[#8A2BE2]/25 disabled:opacity-50"
                  >
                    {status === "loading" ? "Processing..." : "Submit"}
                  </button>
                </form>
              </>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-10"
              >
                <div className="relative inline-block mb-8">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", damping: 12 }}
                    className="bg-[#22C55E]/10 p-5 rounded-full"
                  >
                    <CheckCircle2
                      size={64}
                      className="text-[#22C55E]"
                      strokeWidth={2.5}
                    />
                  </motion.div>
                </div>

                <h3 className="text-3xl font-[900] text-gray-900 mb-4 uppercase tracking-tight">
                  Request Received
                </h3>
                <p className="text-gray-500 font-bold text-lg leading-relaxed max-w-[380px] mx-auto">
                  Thank you, {firstName}. Your custom audit will be delivered in{" "}
                  <span className="text-[#22C55E] font-black border-b-4 border-[#22C55E]/20">
                    24 hours
                  </span>
                  .
                </p>

                <p className="mt-8 text-[11px] font-black text-gray-300 uppercase tracking-widest">
                  Closing automatically...
                </p>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
