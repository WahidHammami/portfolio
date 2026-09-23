"use client";
import { motion } from "framer-motion";

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] },
  },
});

export default function About() {
  return (
    <section id="about" className="py-24 max-w-6xl mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        
        {/* Left Column: Narrative (7 cols) */}
        <div className="lg:col-span-7">
          <motion.div
            variants={fadeUp(0)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="flex items-center gap-2 mb-3"
          >
            <span className="w-6 h-px bg-[#c9a050]" />
            <span className="text-xs font-semibold tracking-wider text-[#c9a050] uppercase">Executive Profile</span>
          </motion.div>

          <motion.h2
            variants={fadeUp(0.05)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-6"
          >
            Over Four Decades of Strategic Technology Leadership
          </motion.h2>

          <div className="space-y-4 text-base text-[#94a3b8] leading-relaxed">
            <motion.p
              variants={fadeUp(0.1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
            >
              Wahid Hammami is an accomplished Chief Technology Officer and Senior IT Advisor with more than 40 years of continuous leadership across the energy, petroleum, and government sectors in the Kingdom of Saudi Arabia.
            </motion.p>

            <motion.p
              variants={fadeUp(0.15)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
            >
              Throughout a distinguished 33-year career at <strong className="text-white font-medium">Saudi Aramco</strong>, he served as IT Manager and CIO for the <strong className="text-white font-medium">Ministry of Petroleum &amp; Mineral Resources (MOPM)</strong>, architecting enterprise systems, mission-critical infrastructure, and high-availability operations supporting national energy administration.
            </motion.p>

            <motion.p
              variants={fadeUp(0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
            >
              At the <strong className="text-white font-medium">Ministry of Energy</strong>, Wahid has directed IT Security, Network Infrastructure, and strategic technology advisory as CIO and CTO, spearheading enterprise modernizations, Documentum ECM deployments, and cybersecurity frameworks aligned with national standards.
            </motion.p>

            <motion.p
              variants={fadeUp(0.25)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
            >
              He holds a Bachelor of Science in <strong className="text-white font-medium">Computer Engineering</strong> from King Fahd University of Petroleum &amp; Minerals (KFUPM) and has contributed technical architecture expertise to Microsoft Corporation&apos;s enterprise branch office deployment guidelines.
            </motion.p>
          </div>
        </div>

        {/* Right Column: Key Pillars (5 cols) */}
        <div className="lg:col-span-5 flex flex-col gap-4">
          
          {/* Card 1 */}
          <motion.div
            variants={fadeUp(0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="p-5 rounded-2xl border border-[#1c2b45] bg-[#0d1322] hover:border-[#c9a050]/50 transition-all duration-300"
          >
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#c9a050]/10 border border-[#c9a050]/20 flex items-center justify-center flex-shrink-0 text-[#c9a050]">
                {/* Government building icon */}
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 21h18M3 10h18M5 10v11M9 10v11M15 10v11M19 10v11M12 2L2 7h20L12 2z"/>
                </svg>
              </div>
              <div>
                <h3 className="text-base font-semibold text-white mb-1">Ministry of Energy Leadership</h3>
                <p className="text-sm text-[#8494ab] leading-relaxed">
                  IT Advisor, CTO, and former IT Security &amp; Network Infrastructure Manager guiding national energy IT strategy.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            variants={fadeUp(0.18)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="p-5 rounded-2xl border border-[#1c2b45] bg-[#0d1322] hover:border-[#3b82f6]/50 transition-all duration-300"
          >
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#3b82f6]/10 border border-[#3b82f6]/20 flex items-center justify-center flex-shrink-0 text-[#3b82f6]">
                {/* Shield / Enterprise icon */}
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
                  <line x1="8" y1="21" x2="16" y2="21"/>
                  <line x1="12" y1="17" x2="12" y2="21"/>
                </svg>
              </div>
              <div>
                <h3 className="text-base font-semibold text-white mb-1">Saudi Aramco (33 Years)</h3>
                <p className="text-sm text-[#8494ab] leading-relaxed">
                  Managed IT operations and served as CIO for the Ministry of Petroleum in Riyadh, delivering resilient infrastructure.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            variants={fadeUp(0.26)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="p-5 rounded-2xl border border-[#1c2b45] bg-[#0d1322] hover:border-[#c9a050]/50 transition-all duration-300"
          >
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#c9a050]/10 border border-[#c9a050]/20 flex items-center justify-center flex-shrink-0 text-[#c9a050]">
                {/* Academic cap icon */}
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
                  <path d="M6 12v5c3 3 9 3 12 0v-5"/>
                </svg>
              </div>
              <div>
                <h3 className="text-base font-semibold text-white mb-1">KFUPM Computer Engineering</h3>
                <p className="text-sm text-[#8494ab] leading-relaxed">
                  BSE in Computer Engineering from King Fahd University of Petroleum &amp; Minerals (1980–1985).
                </p>
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
