"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-[92dvh] flex items-center overflow-hidden pt-20 pb-16">
      {/* Background subtle radial ambient gradients */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          background: `
            radial-gradient(circle at 15% 25%, rgba(59, 130, 246, 0.08) 0%, transparent 45%),
            radial-gradient(circle at 85% 35%, rgba(201, 160, 80, 0.07) 0%, transparent 50%),
            radial-gradient(circle at 50% 90%, rgba(17, 26, 46, 0.8) 0%, transparent 70%)
          `,
        }}
      />

      {/* Subtle architectural grid */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#3b82f6 1px, transparent 1px), linear-gradient(90deg, #3b82f6 1px, transparent 1px)`,
          backgroundSize: "64px 64px",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Main Info (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start">
            
            {/* Executive Badge */}
            <motion.div
              custom={0}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-[#1c2b45] bg-[#0d1322]/80 backdrop-blur-md mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 ring-4 ring-emerald-500/20" />
              <span className="text-xs font-medium tracking-wider text-[#cbd5e1] uppercase">
                Executive IT Advisory &amp; CTO
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              custom={1}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1] mb-6"
            >
              Wahid <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c9a050] to-[#e8c67a]">Hammami</span>
            </motion.h1>

            <motion.p
              custom={2}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="text-lg sm:text-xl text-[#94a3b8] font-light leading-relaxed max-w-xl mb-4"
            >
              IT Advisor &amp; CTO at the <strong className="text-white font-medium">Ministry of Energy</strong>, Saudi Arabia. Former MOPM IT Manager &amp; CIO at <strong className="text-white font-medium">Saudi Aramco</strong>.
            </motion.p>

            <motion.div
              custom={3}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="flex items-center gap-2 text-sm text-[#8494ab] mb-8"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#c9a050" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <span>Riyadh Digital City, Saudi Arabia</span>
            </motion.div>

            {/* Key Stats Bar */}
            <motion.div
              custom={4}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="grid grid-cols-3 gap-6 sm:gap-8 py-5 px-6 rounded-2xl border border-[#1c2b45] bg-[#0d1322]/60 backdrop-blur-md mb-8 w-full max-w-lg"
            >
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-white tracking-tight">40+</div>
                <div className="text-xs text-[#8494ab] mt-1 font-medium">Years in IT</div>
              </div>
              <div className="border-l border-[#1c2b45] pl-6">
                <div className="text-2xl sm:text-3xl font-bold text-[#c9a050] tracking-tight">33 yrs</div>
                <div className="text-xs text-[#8494ab] mt-1 font-medium">Saudi Aramco</div>
              </div>
              <div className="border-l border-[#1c2b45] pl-6">
                <div className="text-2xl sm:text-3xl font-bold text-white tracking-tight">7 yrs</div>
                <div className="text-xs text-[#8494ab] mt-1 font-medium">Ministry of Energy</div>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              custom={5}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="flex flex-wrap gap-3.5"
            >
              <a
                href="#contact"
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-gradient-to-r from-[#c9a050] to-[#dfb96c] text-[#080c14] text-sm font-semibold shadow-lg shadow-[#c9a050]/20 hover:brightness-110 active:scale-[0.98] transition-all duration-200"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                Contact &amp; Advisory
              </a>
              <a
                href="https://www.linkedin.com/in/wahid-hammami/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl border border-[#1c2b45] bg-[#0d1322] text-[#cbd5e1] text-sm font-semibold hover:border-[#c9a050] hover:text-white active:scale-[0.98] transition-all duration-200"
              >
                <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
                LinkedIn Profile
              </a>
            </motion.div>

          </div>

          {/* Portrait Photo (5 cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Soft ambient back glow */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-[#c9a050]/20 to-[#3b82f6]/20 rounded-3xl blur-2xl opacity-50" />
              
              {/* Portrait Container */}
              <div className="relative rounded-2xl p-2 border border-[#1c2b45] bg-[#0d1322]/80 backdrop-blur-xl shadow-2xl">
                <div className="relative w-64 h-80 sm:w-72 sm:h-[360px] md:w-80 md:h-[400px] aspect-[4/5] rounded-xl overflow-hidden border border-[#243755]">
                  <Image
                    src="/profile.jpg"
                    alt="Wahid Hammami - IT Advisor & CTO"
                    fill
                    sizes="(max-width: 640px) 256px, (max-width: 1024px) 288px, 320px"
                    className="object-cover object-top filter contrast-[1.02]"
                    priority
                  />
                  {/* Subtle dark gradient overlay at bottom of photo for text contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080c14] via-transparent to-transparent opacity-60" />
                  
                  {/* Overlay Name Tag */}
                  <div className="absolute bottom-3 left-3 right-3 p-3 rounded-lg bg-[#080c14]/80 backdrop-blur-md border border-[#1c2b45]/80">
                    <div className="text-sm font-semibold text-white">Wahid Hammami</div>
                    <div className="text-xs text-[#c9a050]">CTO &amp; IT Advisor · KFUPM &apos;85</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
