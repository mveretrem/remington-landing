"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { Navigation } from "./Navigation";
import { Container } from "../ui/container";
import { BRAND, NAV_ITEMS } from "@/lib/constants";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  // Close menu on ESC key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isMobileMenuOpen]);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <header className="absolute left-0 right-0 top-0 z-50 py-6">
      <Container>
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 transition-opacity hover:opacity-80">
            <Image
              src={BRAND.logo.src}
              alt={BRAND.logo.alt}
              width={200}
              height={0}
              priority
              objectFit="contain"
            />
          </Link>

          {/* Desktop Navigation & CTA */}
          <div className="hidden md:flex items-center gap-8">
            <Navigation />
            <Link
              href="#contact"
              className="rounded-lg bg-remington-orange px-6 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white z-50 relative"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span
                className={`block h-0.5 w-6 bg-current transition-all duration-300 ease-out ${
                  isMobileMenuOpen ? "rotate-45 translate-y-0.5" : "-translate-y-1.5"
                }`}
              />
              <span
                className={`block h-0.5 w-6 bg-current transition-all duration-300 ease-out ${
                  isMobileMenuOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`block h-0.5 w-6 bg-current transition-all duration-300 ease-out ${
                  isMobileMenuOpen ? "-rotate-45 -translate-y-0.5" : "translate-y-1.5"
                }`}
              />
            </div>
          </button>
        </div>
      </Container>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/50 z-40 md:hidden"
            onClick={closeMobileMenu}
            aria-hidden="true"
          />

          {/* Mobile Menu Panel */}
          <div
            className="fixed top-0 right-0 bottom-0 w-[280px] bg-[#1A1A1A] z-50 md:hidden shadow-2xl animate-slide-in-right"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation menu"
          >
            <div className="flex flex-col h-full">
              {/* Close Button */}
              <div className="flex justify-end p-6">
                <button
                  onClick={closeMobileMenu}
                  className="text-white hover:opacity-80 transition-opacity"
                  aria-label="Close menu"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="flex flex-col gap-2 px-6 flex-1">
                {NAV_ITEMS.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={closeMobileMenu}
                    className="text-white text-lg font-medium py-3 px-4 rounded-lg hover:bg-white/10 transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>

              {/* Contact CTA */}
              <div className="p-6">
                <Link
                  href="#contact"
                  onClick={closeMobileMenu}
                  className="block w-full text-center rounded-lg bg-remington-orange px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </header>
  );
}
