"use client";

import { motion } from "framer-motion";

export default function About() {
  const terminalData = {
    name: "Meeraj Mathin",
    role: "Full Stack Developer",
    specialty: "MERN Stack / Next.js",
    status: "Active & Open to Opportunities",
    codeCleanliness: "99.9%",
    philosophy: "Clean code, scalable architecture"
  };

  return (
    <section id="about" className="relative bg-[#070b18] py-28 overflow-hidden text-white border-t border-white/5">
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff04_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none opacity-50" />
      
      {/* Glowing Orbs */}
      <div className="absolute -bottom-20 -left-20 -z-10 h-[400px] w-[400px] rounded-full bg-[#fca311]/5 blur-[120px]" />
      <div className="absolute -top-20 -right-20 -z-10 h-[400px] w-[400px] rounded-full bg-blue-500/5 blur-[120px]" />
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">

          {/* Left Content Column: Interactive Developer Terminal */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="space-y-6"
          >
            <div className="space-y-2">
              <span className="inline-block text-xs font-bold uppercase tracking-[0.25em] text-[#fca311]" style={{ fontFamily: "var(--font-display)" }}>
                About Me
              </span>

              <h2 className="text-4xl font-black leading-tight text-white md:text-5xl tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
                Building modern web applications with{" "}
                <span className="bg-gradient-to-r from-[#fca311] via-amber-400 to-amber-200 bg-clip-text text-transparent">
                  clean and scalable
                </span>{" "}
                solutions.
              </h2>
            </div>
            
            {/* Terminal Window Mockup */}
            <motion.div 
              whileHover={{ y: -4, boxShadow: "0px 20px 40px rgba(0,0,0,0.4)" }}
              className="relative rounded-2xl border border-white/10 bg-black/45 backdrop-blur-md overflow-hidden shadow-2xl p-6 font-mono text-xs text-gray-400"
            >
              {/* Header bar */}
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/5">
                <div className="flex space-x-2">
                  <span className="h-3 w-3 rounded-full bg-red-500/80" />
                  <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
                  <span className="h-3 w-3 rounded-full bg-green-500/80" />
                </div>
                <span className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">developer.json</span>
              </div>
              
              {/* Terminal Code Lines */}
              <div className="space-y-2">
                <p className="text-blue-400"><span className="text-purple-400">const</span> developer <span className="text-white">=</span> &#123;</p>
                <div className="pl-6 space-y-1.5">
                  <p><span className="text-amber-400">"name"</span>: <span className="text-emerald-400">"{terminalData.name}"</span>,</p>
                  <p><span className="text-amber-400">"role"</span>: <span className="text-emerald-400">"{terminalData.role}"</span>,</p>
                  <p><span className="text-amber-400">"specialty"</span>: <span className="text-emerald-400">"{terminalData.specialty}"</span>,</p>
                  <p><span className="text-amber-400">"status"</span>: <span className="text-emerald-400">"{terminalData.status}"</span>,</p>
                  <p><span className="text-amber-400">"codeCleanliness"</span>: <span className="text-cyan-400">{terminalData.codeCleanliness}</span>,</p>
                  <p><span className="text-amber-400">"philosophy"</span>: <span className="text-emerald-400">"{terminalData.philosophy}"</span></p>
                </div>
                <p className="text-blue-400">&#125;;</p>
              </div>

              {/* Blinking Cursor */}
              <div className="mt-4 flex items-center space-x-1">
                <span className="text-emerald-500">&gt;</span>
                <span className="text-gray-300">npm run build --success</span>
                <span className="h-3.5 w-1.5 bg-[#fca311] animate-pulse" />
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content Column: Biography and Button */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
            className="flex flex-col items-start space-y-6"
          >
            <p className="text-base leading-relaxed text-gray-300 sm:text-lg sm:leading-8 font-normal" style={{ fontFamily: "var(--font-sans)" }}>
              I&apos;m{" "}
              <span className="font-bold text-white border-b-2 border-[#fca311]/50 pb-0.5">
                Meeraj Mathin
              </span>
              , a passionate Full Stack Developer who enjoys creating modern, responsive, and user-friendly web applications. I specialize in building intuitive interfaces and developing efficient backend systems using the MERN stack.
            </p>

            <p className="text-base leading-relaxed text-gray-300 sm:text-lg sm:leading-8 font-normal" style={{ fontFamily: "var(--font-sans)" }}>
              My focus is on writing clean, maintainable code while continuously learning new technologies and best practices. I aim to build digital products that are fast, scalable, and deliver great user experiences.
            </p>

            <motion.button 
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("projects")?.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
              className="group inline-flex items-center gap-2 rounded-xl bg-[#fca311] px-6 py-3.5 text-xs font-extrabold text-[#030712] shadow-lg shadow-[#fca311]/10 transition-all duration-300 hover:bg-[#fdbb53] cursor-pointer uppercase tracking-wider"
            >
              Explore My Work
              <svg 
                className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1.5 text-[#030712]" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor" 
                strokeWidth={3}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </motion.button>
          </motion.div>

        </div>
      </div>
    </section>
  );
}