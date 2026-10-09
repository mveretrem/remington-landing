"use client";

import { useState } from "react";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    const payload = {
      access_key: "d97d4957-5bc4-4818-ab21-d86da58fcf0e",
      ...formData,
    };

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (data.success) {
        setStatus("success");
        setFormData({ name: "", company: "", email: "", phone: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-10 border border-white/10 bg-ink-2/60 p-6 backdrop-blur sm:p-10">
      {/* Name and Company Row */}
      <div className="grid gap-10 md:grid-cols-2">
        <div>
          <label htmlFor="name" className="label-mono block text-white/50">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Full Name"
            required
            className="w-full border-0 border-b border-white/20 bg-transparent px-0 py-3 text-lg text-white placeholder-white/30 transition-colors focus:border-remington-orange focus:outline-none focus:ring-0"
          />
        </div>

        <div>
          <label htmlFor="company" className="label-mono block text-white/50">
            Company
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            placeholder="Company Name"
            className="w-full border-0 border-b border-white/20 bg-transparent px-0 py-3 text-lg text-white placeholder-white/30 transition-colors focus:border-remington-orange focus:outline-none focus:ring-0"
          />
        </div>
      </div>

      {/* Email and Phone Row */}
      <div className="grid gap-10 md:grid-cols-2">
        <div>
          <label htmlFor="email" className="label-mono block text-white/50">
            E-Mail
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="E-Mail Address"
            required
            className="w-full border-0 border-b border-white/20 bg-transparent px-0 py-3 text-lg text-white placeholder-white/30 transition-colors focus:border-remington-orange focus:outline-none focus:ring-0"
          />
        </div>

        <div>
          <label htmlFor="phone" className="label-mono block text-white/50">
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone Number"
            className="w-full border-0 border-b border-white/20 bg-transparent px-0 py-3 text-lg text-white placeholder-white/30 transition-colors focus:border-remington-orange focus:outline-none focus:ring-0"
          />
        </div>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="label-mono block text-white/50">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Building type, unit count, scope, schedule…"
          rows={4}
          required
          className="w-full resize-none border-0 border-b border-white/20 bg-transparent px-0 py-3 text-lg text-white placeholder-white/30 transition-colors focus:border-remington-orange focus:outline-none focus:ring-0"
        />
      </div>

      {/* Submit Button */}
      <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
        {status === "success" && (
          <p className="text-sm font-medium text-emerald-400" role="status">Message sent. We&apos;ll be in touch soon.</p>
        )}
        {status === "error" && (
          <p className="text-sm font-medium text-red-400" role="alert">Something went wrong. Please try again.</p>
        )}
        <button
          type="submit"
          disabled={status === "loading"}
          className="ml-auto bg-remington-orange px-8 py-4 font-semibold text-white transition-all hover:bg-[#cf4209] active:translate-y-px disabled:opacity-60"
        >
          {status === "loading" ? "Sending…" : "Send Message"}
        </button>
      </div>
    </form>
  );
}
