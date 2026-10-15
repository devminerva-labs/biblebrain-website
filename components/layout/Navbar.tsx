"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const navLinks: Array<
  | { label: string; href: string; children?: undefined }
  | { label: string; href?: undefined; children: Array<{ label: string; href: string }> }
> = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Ecosystem", href: "/#ecosystem" },
  {
    label: "Ongoing Programs",
    children: [
      { label: "NNTVBC", href: "/nntvbc" },
      { label: "YCM Quiz 2026", href: "/ycmquiz2026" },
    ],
  },
  { label: "Programmes", href: "/#programmes" },
  { label: "Media", href: "/#media" },
  { label: "Partner", href: "/partner" },
  { label: "Contact", href: "/#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [desktopDropdownOpen, setDesktopDropdownOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on route change / resize
  useEffect(() => {
    if (menuOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled || menuOpen
            ? "bg-[#0A1F44] shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <Image
              src="/logo.jpeg"
              alt="Bible Brain® Logo"
              width={44}
              height={44}
              className="rounded-lg object-cover"
            />
            <div className="leading-tight">
              <div className="font-display text-lg font-bold text-white">Bible Brain<span className="text-[#D4AF37]">®</span></div>
              <div className="text-[10px] font-medium uppercase tracking-widest text-white/60">A Scripture Brain Company</div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-6 md:flex">
            {navLinks.map((link) =>
              link.children ? (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => setDesktopDropdownOpen(true)}
                  onMouseLeave={() => setDesktopDropdownOpen(false)}
                  onFocus={() => setDesktopDropdownOpen(true)}
                  onBlur={() => setDesktopDropdownOpen(false)}
                >
                  <button
                    type="button"
                    aria-expanded={desktopDropdownOpen}
                    className="flex items-center gap-1 text-sm font-medium text-white/80 transition hover:text-[#D4AF37]"
                  >
                    {link.label}
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      className={`h-3.5 w-3.5 transition-transform ${desktopDropdownOpen ? "rotate-180" : ""}`}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {desktopDropdownOpen && (
                    <div className="absolute left-0 top-full mt-2 w-52 rounded-lg border border-white/10 bg-[#0A1F44] py-2 shadow-xl">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={() => setDesktopDropdownOpen(false)}
                          className="block px-4 py-2.5 text-sm text-white/80 transition hover:bg-white/5 hover:text-[#D4AF37]"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-white/80 transition hover:text-white hover:text-[#D4AF37]"
                >
                  {link.label}
                </Link>
              )
            )}
            <a
              href="/partner"
              className="ml-2 inline-flex items-center rounded-lg bg-[#D4AF37] px-5 py-2.5 text-sm font-bold text-[#0A1F44] transition hover:bg-[#b8960c]"
            >
              Partner With Us
            </a>
          </nav>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            className="flex h-10 w-10 items-center justify-center rounded-lg text-white md:hidden"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-6 w-6">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-30 flex flex-col bg-[#0A1F44] pt-20">
          <nav className="flex flex-col gap-2 px-6 py-8">
            {navLinks.map((link) =>
              link.children ? (
                <div key={link.label} className="border-b border-white/10">
                  <button
                    type="button"
                    onClick={() => setMobileDropdownOpen((open) => !open)}
                    aria-expanded={mobileDropdownOpen}
                    className="flex w-full items-center justify-between py-4 text-xl font-medium text-white/80 transition hover:text-[#D4AF37]"
                  >
                    {link.label}
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      className={`h-5 w-5 transition-transform ${mobileDropdownOpen ? "rotate-180" : ""}`}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {mobileDropdownOpen && (
                    <div className="flex flex-col gap-1 pb-4 pl-4">
                      {link.children.map((child) => (
                        <a
                          key={child.href}
                          href={child.href}
                          onClick={() => setMenuOpen(false)}
                          className="py-2 text-lg text-white/70 transition hover:text-[#D4AF37]"
                        >
                          {child.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="border-b border-white/10 py-4 text-xl font-medium text-white/80 transition hover:text-[#D4AF37]"
                >
                  {link.label}
                </a>
              )
            )}
            <a
              href="/partner"
              onClick={() => setMenuOpen(false)}
              className="mt-6 inline-flex w-full items-center justify-center rounded-lg bg-[#D4AF37] px-6 py-4 text-lg font-bold text-[#0A1F44]"
            >
              Partner With Us
            </a>
          </nav>
        </div>
      )}
    </>
  );
}
