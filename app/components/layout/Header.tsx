"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { ArrowUpRight, Phone, X } from "lucide-react";
import { Navigation } from "./Navigation";
import { Container } from "../ui/container";
import { BRAND, NAV_ITEMS, PHONE } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Solid background once the hero is scrolled past the top
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
    <header
      className={cn(
        "fixed left-0 right-0 top-0 z-50 transition-all duration-300",
        isScrolled
          ? "border-b border-white/10 bg-ink/85 py-3 backdrop-blur-md"
          : "border-b border-transparent py-6"
      )}
    >
      <Container className="max-w-[90rem]">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="relative z-50 flex items-center transition-opacity hover:opacity-80">
            <Image
              src={BRAND.logo.src}
              alt={BRAND.logo.alt}
              width={744}
              height={240}
              priority
              className={cn("w-auto transition-all duration-300", isScrolled ? "h-9" : "h-11")}
            />
          </Link>

          {/* Desktop Navigation & CTA */}
          <div className="hidden items-center gap-10 lg:flex">
            <Navigation />
            <div className="flex items-center gap-5">
              <a
                href={PHONE.href}
                className="tabular flex items-center gap-2 text-sm font-medium text-white/80 transition-colors hover:text-white"
              >
                <Phone className="h-4 w-4 text-remington-orange" strokeWidth={2} />
                {PHONE.display}
              </a>
              <Link
                href="#contact"
                className="group flex items-center gap-1.5 bg-remington-orange px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-[#cf4209] active:translate-y-px"
              >
                Request a bid
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="relative z-50 text-white lg:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
          >
            <div className="flex h-6 w-6 flex-col items-center justify-center">
              <span
                className={`block h-0.5 w-6 bg-current transition-all duration-300 ease-out ${
                  isMobileMenuOpen ? "translate-y-0.5 rotate-45" : "-translate-y-1.5"
                }`}
              />
              <span
                className={`block h-0.5 w-6 bg-current transition-all duration-300 ease-out ${
                  isMobileMenuOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`block h-0.5 w-6 bg-current transition-all duration-300 ease-out ${
                  isMobileMenuOpen ? "-translate-y-0.5 -rotate-45" : "translate-y-1.5"
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
            className="fixed inset-0 z-40 bg-black/60 lg:hidden"
            onClick={closeMobileMenu}
            aria-hidden="true"
          />

          {/* Mobile Menu Panel */}
          <div
            className="animate-slide-in-right fixed bottom-0 right-0 top-0 z-50 w-[300px] max-w-[85vw] bg-ink shadow-2xl lg:hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation menu"
          >
            <div className="flex h-full flex-col">
              {/* Close Button */}
              <div className="flex justify-end p-6">
                <button
                  onClick={closeMobileMenu}
                  className="text-white transition-opacity hover:opacity-80"
                  aria-label="Close menu"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="flex flex-1 flex-col px-6">
                {NAV_ITEMS.map((item, i) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={closeMobileMenu}
                    className="flex items-baseline gap-4 border-b border-white/10 py-4 font-display text-3xl font-semibold uppercase text-white transition-colors hover:text-remington-orange"
                  >
                    <span className="label-mono text-white/40">0{i + 1}</span>
                    {item.label}
                  </Link>
                ))}
              </nav>

              {/* Contact CTA */}
              <div className="space-y-3 p-6">
                <a href={PHONE.href} className="tabular block text-center text-sm text-white/70">
                  {PHONE.display}
                </a>
                <Link
                  href="#contact"
                  onClick={closeMobileMenu}
                  className="block w-full bg-remington-orange px-6 py-3.5 text-center text-sm font-semibold text-white transition-colors hover:bg-[#cf4209]"
                >
                  Request a bid
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </header>
  );
}
