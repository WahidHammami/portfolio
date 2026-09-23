"use client";
import { motion } from "framer-motion";

const jobs = [
  {
    company: "Ministry of Energy",
    tenure: "7 Years (2019 – Present)",
    color: "#c9a050",
    badge: "Government",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
    roles: [
      {
        title: "IT Advisor & CIO",
        period: "October 2022 – Present",
        duration: "4 Years",
        location: "Riyadh, Saudi Arabia",
        desc: "High-level technology advisory for executive ministry leadership, steering digital modernization, cloud infrastructure strategy, and enterprise architecture.",
      },
      {
        title: "IT Security / Infrastructure Manager & CIO",
        period: "December 2019 – November 2022",
        duration: "3 Years",
        location: "Riyadh, Saudi Arabia",
        desc: "Oversaw cybersecurity defense, regulatory compliance with national cybersecurity standards, and critical infrastructure resilience across ministry data assets.",
      },
      {
        title: "Network / Infrastructure Manager & CIO",
        period: "October 2019 – November 2022",
        duration: "3 Years 2 Months",
        location: "Riyadh, Saudi Arabia",
        desc: "Directed enterprise network modernization, data center clustering, high-throughput routing, and secure hybrid infrastructure.",
      },
    ],
  },
  {
    company: "Saudi Aramco",
    tenure: "33 Years (1986 – 2019)",
    color: "#3b82f6",
    badge: "Energy & Petroleum",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
    roles: [
      {
        title: "MOPM IT Manager / CIO",
        period: "July 2004 – December 2019",
        duration: "15 Years 6 Months",
        location: "Riyadh, Saudi Arabia",
        desc: "Served as CIO for the Ministry of Petroleum and Mineral Resources in Riyadh. Managed full-spectrum enterprise operations, Documentum ECM, mission-critical systems, and inter-agency IT infrastructure.",
      },
      {
        title: "MOPM IT Manager",
        period: "1986 – 2011",
        duration: "25 Years",
        location: "Riyadh, Saudi Arabia",
        desc: "Led foundational systems architecture, data storage, enterprise clustering, and operational stability across 25 years of rapid technology evolution.",
      },
    ],
  },
  {
    company: "Microsoft Corporation",
    tenure: "2003 – 2004 (1 Year)",
    color: "#a855f7",
    badge: "Technology Architecture",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7" />
        <rect x="14" y="3" width="7" height="7" />
        <rect x="14" y="14" width="7" height="7" />
        <rect x="3" y="14" width="7" height="7" />
      </svg>
    ),
    roles: [
      {
        title: "Enterprise Architecture Contributor",
        period: "2003 – 2004",
        duration: "1 Year",
        location: "Global / Riyadh",
        desc: "Contributed enterprise deployment methodology and technical architecture to Microsoft Corporation's official Branch Office Deployment Guide.",
      },
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-[#0a0f1a] border-y border-[#1c2b45]/50">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-6 h-px bg-[#c9a050]" />
              <span className="text-xs font-semibold tracking-wider text-[#c9a050] uppercase">Career Milestones</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Work Experience
            </h2>
          </div>
          <p className="text-sm text-[#8494ab] max-w-md">
            Four decades of executive stewardship across the Kingdom&apos;s primary energy and governance institutions.
          </p>
        </div>

        {/* Timeline Cards */}
        <div className="space-y-8">
          {jobs.map((job, idx) => (
            <motion.div
              key={job.company}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="rounded-2xl border border-[#1c2b45] bg-[#0d1322] p-6 sm:p-8 hover:border-[#2b4168] transition-all duration-300"
            >
              {/* Organization Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-6 border-b border-[#1c2b45] gap-4">
                <div className="flex items-center gap-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: `${job.color}15`, color: job.color, border: `1px solid ${job.color}30` }}
                  >
                    {job.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{job.company}</h3>
                    <div className="flex items-center gap-2 text-xs text-[#8494ab] mt-0.5">
                      <span className="font-medium text-[#cbd5e1]">{job.tenure}</span>
                      <span>·</span>
                      <span className="px-2 py-0.5 rounded bg-[#162238] text-[#94a3b8]">{job.badge}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Roles List */}
              <div className="relative pl-6 space-y-8 before:absolute before:left-2 before:top-2 before:bottom-2 before:w-0.5 before:bg-gradient-to-b before:from-[#c9a050] before:via-[#3b82f6] before:to-transparent">
                {job.roles.map((role) => (
                  <div key={role.title} className="relative">
                    {/* Bullet */}
                    <div
                      className="absolute -left-[1.8rem] top-1.5 w-3 h-3 rounded-full border-2 border-[#0d1322]"
                      style={{ backgroundColor: job.color }}
                    />
                    
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1.5">
                      <h4 className="text-base font-semibold text-white tracking-tight">{role.title}</h4>
                      <span className="text-xs font-medium text-[#c9a050] bg-[#c9a050]/10 px-2.5 py-0.5 rounded-full border border-[#c9a050]/20 self-start sm:self-auto">
                        {role.period}
                      </span>
                    </div>

                    <div className="text-xs text-[#8494ab] flex items-center gap-2 mb-2">
                      <span>{role.location}</span>
                      {role.duration && (
                        <>
                          <span>·</span>
                          <span className="text-[#94a3b8]">{role.duration}</span>
                        </>
                      )}
                    </div>

                    <p className="text-sm text-[#94a3b8] leading-relaxed">
                      {role.desc}
                    </p>
                  </div>
                ))}
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
