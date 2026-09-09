"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Service Record", href: "#service" },
  { name: "Constituency", href: "#constituency" },
  { name: "Gallery", href: "#gallery" },
  { name: "Updates", href: "#updates" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 z-50 w-full">
      <nav className="container flex h-24 items-center justify-between">
        {/* Logo / Brand */}
        <a href="/" className="group">
          <div className="flex flex-col">
            <span className="text-lg font-bold tracking-wide text-white">
              BISI OYEDELE
            </span>

            <span className="text-xs font-medium uppercase tracking-[0.3em] text-[#C9A227]">
              Citiside
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-white/80 transition hover:text-[#C9A227]"
            >
              {link.name}
            </a>
          ))}

          <a
            href="#contact"
            className="rounded-full border border-[#C9A227] px-5 py-2.5 text-sm font-semibold text-[#C9A227] transition hover:bg-[#C9A227] hover:text-[#171717]"
          >
            Contact
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-lg p-2 text-white md:hidden"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="border-t border-white/10 bg-[#0B3D2E] md:hidden">
          <div className="container flex flex-col py-5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="border-b border-white/10 py-4 text-sm font-medium text-white/90 transition hover:text-[#C9A227]"
              >
                {link.name}
              </a>
            ))}

            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="mt-5 rounded-full bg-[#C9A227] px-5 py-3 text-center text-sm font-semibold text-[#171717]"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </header>
  );
}