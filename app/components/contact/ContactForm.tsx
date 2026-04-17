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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
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
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Name and Company Row */}
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block text-sm font-medium text-gray-700">
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
            className="w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-3 text-gray-900 placeholder-gray-400 focus:border-remington-orange focus:outline-none focus:ring-2 focus:ring-remington-orange/20"
          />
        </div>

        <div>
          <label htmlFor="company" className="mb-2 block text-sm font-medium text-gray-700">
            Company
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            placeholder="Company Name"
            className="w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-3 text-gray-900 placeholder-gray-400 focus:border-remington-orange focus:outline-none focus:ring-2 focus:ring-remington-orange/20"
          />
        </div>
      </div>

      {/* Email and Phone Row */}
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-700">
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
            className="w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-3 text-gray-900 placeholder-gray-400 focus:border-remington-orange focus:outline-none focus:ring-2 focus:ring-remington-orange/20"
          />
        </div>

        <div>
          <label htmlFor="phone" className="mb-2 block text-sm font-medium text-gray-700">
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone Number"
            className="w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-3 text-gray-900 placeholder-gray-400 focus:border-remington-orange focus:outline-none focus:ring-2 focus:ring-remington-orange/20"
          />
        </div>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-medium text-gray-700">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Write Message Here"
          rows={6}
          required
          className="w-full resize-none rounded-lg border border-gray-300 bg-gray-50 px-4 py-3 text-gray-900 placeholder-gray-400 focus:border-remington-orange focus:outline-none focus:ring-2 focus:ring-remington-orange/20"
        />
      </div>

      {/* Submit Button */}
      <div className="flex justify-end">
        <button
          type="submit"
          className="rounded-lg bg-remington-orange px-8 py-3 font-semibold text-white transition-opacity hover:opacity-90"
        >
          Send Message
        </button>
      </div>
    </form>
  );
}
