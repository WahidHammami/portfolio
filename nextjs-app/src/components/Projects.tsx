"use client";
import { motion } from "framer-motion";

const initiatives = [
  {
    title: "National Energy IT Transformation & Cybersecurity",
    organization: "Ministry of Energy, Saudi Arabia",
    period: "2019 – Present",
    category: "Strategic Governance",
    description:
      "Spearheading comprehensive modernization of ministry IT infrastructure, implementing robust defense-in-depth cybersecurity controls, high-speed backbone networking, and executive advisory for ministerial digital services.",
    tags: ["IT Advisory", "Cybersecurity", "Network Architecture", "National Compliance"],
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    title: "MOPM Enterprise Systems & CIO Stewardship",
    organization: "Saudi Aramco / Ministry of Petroleum",
    period: "2004 – 2019",
    category: "Enterprise Operations",
    description:
      "Delivered 15+ years of continuous CIO leadership for the Ministry of Petroleum and Mineral Resources. Maintained 99.9%+ operational availability for core oil & gas regulatory databases, administrative applications, and inter-entity communications.",
    tags: ["CIO Operations", "Enterprise IT", "High Availability", "Petroleum Sector"],
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  },
  {
    title: "Enterprise Content Management (Documentum ECM)",
    organization: "Energy & Petroleum Administration",
    period: "Multi-Year Initiative",
    category: "Architecture & Systems",
    description:
      "Architected and deployed high-concurrency Documentum ECM solutions and clustered database storage environments, standardizing digital document workflows, archival security, and regulatory audit readiness across thousands of enterprise users.",
    tags: ["Documentum ECM", "Clustering", "Storage Architecture", "Information Governance"],
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
    ),
  },
  {
    title: "Branch Office Architecture & Enterprise Guide",
    organization: "Microsoft Corporation",
    period: "2003 – 2004",
    category: "Technical Architecture",
    description:
      "Contributed enterprise architecture methodology and field deployment standards to Microsoft Corporation's official Branch Office Deployment Guide, setting guidelines for distributed networks and directory services.",
    tags: ["Microsoft Architecture", "Branch Office Systems", "Enterprise Standards", "Global IT"],
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
        <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
        <line x1="6" y1="6" x2="6.01" y2="6" />
        <line x1="6" y1="18" x2="6.01" y2="18" />
      </svg>
    ),
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 max-w-6xl mx-auto px-6">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="w-6 h-px bg-[#c9a050]" />
            <span className="text-xs font-semibold tracking-wider text-[#c9a050] uppercase">Strategic Initiatives</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Featured Work &amp; Key Programs
          </h2>
        </div>
        <p className="text-sm text-[#8494ab] max-w-md">
          Key strategic programs and infrastructure architectures delivered across four decades of service.
        </p>
      </div>

      {/* Grid of Projects */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {initiatives.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="group p-6 sm:p-7 rounded-2xl border border-[#1c2b45] bg-[#0d1322] hover:border-[#c9a050]/50 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              {/* Top Meta */}
              <div className="flex items-center justify-between gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#c9a050]/10 border border-[#c9a050]/20 flex items-center justify-center text-[#c9a050] group-hover:scale-105 transition-transform duration-200">
                  {item.icon}
                </div>
                <span className="text-xs font-medium text-[#cbd5e1] px-2.5 py-1 rounded-full bg-[#162238] border border-[#243755]">
                  {item.period}
                </span>
              </div>

              {/* Title & Organization */}
              <h3 className="text-lg font-bold text-white group-hover:text-[#c9a050] transition-colors duration-200 mb-1">
                {item.title}
              </h3>
              <div className="text-xs font-medium text-[#c9a050] mb-3">
                {item.organization} · <span className="text-[#8494ab]">{item.category}</span>
              </div>

              {/* Description */}
              <p className="text-sm text-[#94a3b8] leading-relaxed mb-6">
                {item.description}
              </p>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 pt-4 border-t border-[#1c2b45]/60">
              {item.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[11px] font-medium text-[#8494ab] bg-[#111a2e] px-2.5 py-0.5 rounded-md border border-[#1c2b45]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

    </section>
  );
}
