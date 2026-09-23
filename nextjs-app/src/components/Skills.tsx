"use client";
import { motion } from "framer-motion";

const skills = [
  {
    name: "Documentum & Enterprise ECM",
    category: "Information Systems",
    desc: "End-to-end Enterprise Content Management, records compliance, and digital document workflows.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
      </svg>
    ),
  },
  {
    name: "IT Security & Cyber Governance",
    category: "Risk & Compliance",
    desc: "Defense-in-depth security, national cybersecurity compliance, and critical energy asset protection.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
  {
    name: "High-Availability Clustering",
    category: "Resilience",
    desc: "Mission-critical clustered database systems, failover architectures, and 99.99% uptime engineering.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
        <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
        <line x1="6" y1="6" x2="6.01" y2="6" />
        <line x1="6" y1="18" x2="6.01" y2="18" />
      </svg>
    ),
  },
  {
    name: "Enterprise Network Infrastructure",
    category: "Core Infrastructure",
    desc: "Large-scale backbone networks, secure routing, and ministerial communications infrastructure.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="18" cy="5" r="3" />
        <circle cx="6" cy="12" r="3" />
        <circle cx="18" cy="19" r="3" />
        <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
        <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
      </svg>
    ),
  },
  {
    name: "Executive IT Advisory & CIO",
    category: "Executive Leadership",
    desc: "Strategic C-suite alignment, ministerial IT roadmap creation, vendor management, and governance.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
      </svg>
    ),
  },
  {
    name: "Data Center & Operations",
    category: "Enterprise Scale",
    desc: "Enterprise data center operations, hardware lifecycle management, and scalable storage tiering.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <rect x="9" y="9" width="6" height="6" />
        <line x1="9" y1="1" x2="9" y2="4" />
        <line x1="15" y1="1" x2="15" y2="4" />
        <line x1="9" y1="20" x2="9" y2="23" />
        <line x1="15" y1="20" x2="15" y2="23" />
        <line x1="20" y1="9" x2="23" y2="9" />
        <line x1="20" y1="14" x2="23" y2="14" />
        <line x1="1" y1="9" x2="4" y2="9" />
        <line x1="1" y1="14" x2="4" y2="14" />
      </svg>
    ),
  },
];

const education = [
  {
    school: "King Fahd University of Petroleum & Minerals (KFUPM)",
    degree: "Bachelor of Science in Computer Engineering (BSE)",
    years: "1980 – 1985",
    highlight: "Saudi Arabia's premier engineering institution",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
        <path d="M6 12v5c3 3 9 3 12 0v-5" />
      </svg>
    ),
  },
  {
    school: "Riyadh School",
    degree: "High School Certificate",
    years: "1976 – 1979",
    highlight: "Riyadh, Saudi Arabia",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
      </svg>
    ),
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-[#0a0f1a] border-y border-[#1c2b45]/50">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-6 h-px bg-[#c9a050]" />
              <span className="text-xs font-semibold tracking-wider text-[#c9a050] uppercase">Core Competencies</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Skills &amp; Technical Mastery
            </h2>
          </div>
          <p className="text-sm text-[#8494ab] max-w-md">
            Architectural competencies honed across four decades of enterprise IT and governmental operations.
          </p>
        </div>

        {/* Skills grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="group p-6 rounded-2xl border border-[#1c2b45] bg-[#0d1322] hover:border-[#c9a050]/50 hover:bg-[#111a2e] transition-all duration-300"
            >
              <div className="w-11 h-11 rounded-xl bg-[#162238] border border-[#243755] group-hover:border-[#c9a050]/40 group-hover:bg-[#c9a050]/10 flex items-center justify-center text-[#c9a050] mb-4 transition-all duration-300">
                {skill.icon}
              </div>
              <div className="text-xs font-medium text-[#c9a050] tracking-wide uppercase mb-1">
                {skill.category}
              </div>
              <h3 className="text-base font-bold text-white mb-2 group-hover:text-white transition-colors">
                {skill.name}
              </h3>
              <p className="text-sm text-[#8494ab] leading-relaxed">
                {skill.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Education Section */}
        <div className="border-t border-[#1c2b45] pt-12">
          <div className="flex items-center gap-2 mb-6">
            <span className="w-5 h-px bg-[#c9a050]" />
            <h3 className="text-lg font-bold text-white uppercase tracking-wider text-sm">
              Academic Background
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {education.map((edu, i) => (
              <motion.div
                key={edu.school}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="p-6 rounded-2xl border border-[#1c2b45] bg-[#0d1322] hover:border-[#c9a050]/40 transition-all duration-300 flex items-start gap-4"
              >
                <div className="w-12 h-12 rounded-xl bg-[#c9a050]/10 border border-[#c9a050]/20 flex items-center justify-center flex-shrink-0 text-[#c9a050]">
                  {edu.icon}
                </div>
                <div>
                  <div className="flex items-center justify-between gap-2 mb-1 flex-wrap">
                    <h4 className="text-base font-bold text-white">{edu.school}</h4>
                    <span className="text-xs font-medium text-[#c9a050] bg-[#c9a050]/10 px-2.5 py-0.5 rounded-full border border-[#c9a050]/20">
                      {edu.years}
                    </span>
                  </div>
                  <div className="text-sm font-medium text-[#cbd5e1] mb-1">
                    {edu.degree}
                  </div>
                  <div className="text-xs text-[#8494ab]">
                    {edu.highlight}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
