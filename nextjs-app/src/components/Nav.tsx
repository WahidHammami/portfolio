"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Key Initiatives" },
  { href: "#skills", label: "Skills & Education" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#080c14]/90 backdrop-blur-md border-b border-[#1c2b45] shadow-lg shadow-black/30"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Monogram Brand */}
        <a href="#hero" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-[#0d1322] border border-[#1c2b45] group-hover:border-[#c9a050] flex items-center justify-center transition-colors">
            <span className="text-[#c9a050] font-bold text-sm tracking-wider">WH</span>
          </div>
          <div className="hidden sm:block">
            <div className="text-sm font-bold text-white tracking-tight group-hover:text-[#c9a050] transition-colors">
              Wahid Hammami
            </div>
            <div className="text-[11px] text-[#8494ab]">
              IT Advisor &amp; CTO
            </div>
          </div>
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-[#94a3b8] hover:text-white text-sm font-medium transition-colors duration-200 relative group py-1"
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#c9a050] group-hover:w-full transition-all duration-300" />
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              className="text-xs font-semibold uppercase tracking-wider px-4 py-2 rounded-xl border border-[#c9a050]/50 text-[#c9a050] bg-[#c9a050]/10 hover:bg-[#c9a050] hover:text-[#080c14] transition-all duration-200"
            >
              Get in Touch
            </a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-[#94a3b8] hover:text-white p-2"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile Menu Modal */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#0d1322] border-b border-[#1c2b45] px-6 py-6 flex flex-col gap-4 overflow-hidden"
          >
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-[#cbd5e1] hover:text-[#c9a050] text-base font-medium py-1 transition-colors"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 text-center text-xs font-semibold uppercase tracking-wider py-3 rounded-xl bg-[#c9a050] text-[#080c14]"
            >
              Get in Touch
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
