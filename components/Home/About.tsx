"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="relative bg-[#14213d] py-24 overflow-hidden">
      <div className="absolute -bottom-20 -left-20 -z-10 h-96 w-96 rounded-full bg-[#fca311]/10 blur-3xl" />
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-start">

          {/* Left Content Column */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="space-y-4"
          >
            <span className="inline-block text-sm font-semibold uppercase tracking-[0.25em] text-[#fca311]" style={{ fontFamily: "var(--font-display)" }}>
              About Me
            </span>

            <h2 className="text-4xl font-bold leading-tight text-[#ffffff] md:text-5xl transition-all duration-700 ease-out hover:text-[#fafafa]" style={{ fontFamily: "var(--font-display)" }}>
              Building modern web applications with{" "}
              <span className="bg-linear-to-r from-[#fca311] to-[#ffedd0] bg-clip-text text-transparent">
                clean and scalable
              </span>{" "}
              solutions.
            </h2>
            
            {/* Morphing decorative bar */}
            <motion.div 
              initial={{ width: 40 }}
              whileInView={{ width: 80 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.8 }}
              whileHover={{ width: 128 }}
              className="h-1 rounded-full bg-linear-to-r from-[#fca311] to-[#fdb541]" 
            />
          </motion.div>

          {/* Right Content Column */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="flex flex-col items-start"
          >
            <p className="text-lg leading-8 text-[#cccccc] transition-colors duration-300 hover:text-[#ffffff]" style={{ fontFamily: "var(--font-sans)" }}>
              I&apos;m{" "}
              <span className="font-semibold text-[#ffffff] border-b border-[#fca311]/40 pb-0.5">
                Meeraj Mathin
              </span>
              , a passionate Full Stack Developer who enjoys creating modern, responsive, and user-friendly web applications. I specialize in building intuitive interfaces and developing efficient backend systems using the MERN stack.
            </p>

            <p className="mt-6 text-lg leading-8 text-[#cccccc] transition-colors duration-300 hover:text-[#ffffff]" style={{ fontFamily: "var(--font-sans)" }}>
              My focus is on writing clean, maintainable code while continuously learning new technologies and best practices. I aim to build digital products that are fast, scalable, and deliver great user experiences.
            </p>

            <motion.button 
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("projects")?.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
              className="group mt-8 inline-flex items-center gap-2 rounded-xl bg-[#fca311] px-6 py-3.5 text-base font-semibold text-[#14213d] shadow-lg shadow-black/30 transition-all duration-300 hover:bg-[#fdb541]"
            >
              Explore My Work
              <svg 
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor" 
                strokeWidth={2.5}
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