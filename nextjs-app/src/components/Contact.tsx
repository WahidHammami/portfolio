"use client";
import { motion } from "framer-motion";

const contacts = [
  {
    label: "Official Email",
    value: "wahid.hammami@moenergy.gov.sa",
    href: "mailto:wahid.hammami@moenergy.gov.sa",
    note: "Ministry of Energy inquiries",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
  },
  {
    label: "Direct Phone",
    value: "+966 11 837 0050",
    href: "tel:+966118370050",
    note: "Office line (Riyadh)",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
  },
  {
    label: "Office Address",
    value: "Riyadh Digital City, Tower MU01, 12382 Al Nakheel, Riyadh",
    href: null,
    note: "Kingdom of Saudi Arabia",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
  {
    label: "LinkedIn Network",
    value: "linkedin.com/in/wahid-hammami",
    href: "https://www.linkedin.com/in/wahid-hammami/",
    note: "Verified Executive Profile",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
      </svg>
    ),
  },
  {
    label: "GitHub Profile",
    value: "github.com/WahidHammami",
    href: "https://github.com/WahidHammami",
    note: "Open Source & Repositories",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
      </svg>
    ),
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 max-w-6xl mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        
        {/* Left Side (5 cols) */}
        <div className="lg:col-span-5">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-6 h-px bg-[#c9a050]" />
            <span className="text-xs font-semibold tracking-wider text-[#c9a050] uppercase">Connect</span>
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4"
          >
            Direct Contact &amp; Executive Advisory
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="text-[#94a3b8] leading-relaxed mb-8 text-base"
          >
            Open to ministerial advisory dialogues, strategic IT board consultations, and leadership opportunities across the energy, cloud infrastructure, and enterprise technology sectors.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.14, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row gap-3"
          >
            <a
              href="mailto:wahid.hammami@moenergy.gov.sa"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#c9a050] to-[#dfb96c] text-[#080c14] text-sm font-semibold shadow-lg shadow-[#c9a050]/20 hover:brightness-110 active:scale-[0.98] transition-all duration-200"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              Send an Email
            </a>
            <a
              href="https://www.linkedin.com/in/wahid-hammami/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-[#1c2b45] bg-[#0d1322] text-[#cbd5e1] text-sm font-semibold hover:border-[#c9a050] hover:text-white active:scale-[0.98] transition-all duration-200"
            >
              Message on LinkedIn
            </a>
          </motion.div>
        </div>

        {/* Right Side: Contact Details (7 cols) */}
        <div className="lg:col-span-7">
          <ul className="flex flex-col gap-3.5">
            {contacts.map((item, i) => (
              <motion.li
                key={item.label}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="group flex items-start gap-4 p-4 sm:p-5 rounded-2xl border border-[#1c2b45] bg-[#0d1322] hover:border-[#c9a050]/50 hover:bg-[#111a2e] transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-xl bg-[#162238] border border-[#243755] group-hover:border-[#c9a050]/40 group-hover:bg-[#c9a050]/10 flex items-center justify-center text-[#c9a050] flex-shrink-0 transition-all duration-300">
                  {item.icon}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between gap-2 mb-0.5">
                    <span className="text-xs font-semibold text-[#8494ab] uppercase tracking-wider">
                      {item.label}
                    </span>
                    <span className="text-[11px] text-[#64748b]">
                      {item.note}
                    </span>
                  </div>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="text-sm sm:text-base font-medium text-white hover:text-[#c9a050] transition-colors duration-200 break-all"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <span className="text-sm sm:text-base font-medium text-[#cbd5e1] leading-relaxed block">
                      {item.value}
                    </span>
                  )}
                </div>
              </motion.li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
}
