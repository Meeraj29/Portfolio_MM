"use client";

import { Briefcase, Calendar, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const experiences = [
  {
    title: "MERN Stack Developer",
    company: "Zikrabyte Solutions",
    duration: "April 2026 – Present",
    description: "Building scalable full-stack applications using MongoDB, Express.js, React.js, and Node.js. Developing REST APIs and integrating backend services with modern frontend technologies.",
    skills: ["MongoDB", "Express.js", "React", "Node.js", "REST APIs"],
  },
  {
    title: "Frontend Developer",
    company: "Zikrabyte Solutions",
    duration: "January 2026 – May 2026",
    description: "Developed responsive and user-friendly web applications using React.js, Next.js, and Tailwind CSS. Built reusable UI components and optimized website performance.",
    skills: ["React.js", "Next.js", "Tailwind CSS", "UI Optimization"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-28 bg-[#0a0f1d] text-white relative overflow-hidden border-t border-white/5">
      {/* Grid background overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff03_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none opacity-50" />
      
      {/* Glowing background highlights */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 h-[450px] w-[450px] rounded-full bg-blue-500/5 blur-[120px] opacity-70 pointer-events-none" />
      <div className="absolute right-[-10%] top-[-10%] h-[350px] w-[350px] rounded-full bg-[#fca311]/5 blur-[120px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24 max-w-3xl mx-auto space-y-3"
        >
          <span className="text-[#fca311] font-bold uppercase tracking-[0.25em] text-xs" style={{ fontFamily: "var(--font-display)" }}>
            Experience
          </span>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white leading-none" style={{ fontFamily: "var(--font-display)" }}>
            My Professional Journey
          </h2>
          <p className="max-w-2xl mx-auto text-gray-400 text-base leading-relaxed font-medium" style={{ fontFamily: "var(--font-sans)" }}>
            My experience in frontend and full-stack development has helped me build modern, responsive, and scalable web applications while continuously improving my technical skills.
          </p>
        </motion.div>

        {/* Timeline Path */}
        <div className="relative border-l border-white/10 ml-4 md:ml-36 space-y-14 w-auto">
          {experiences.map((item, index) => {
            const isPresent = item.duration.includes("Present");

            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative pl-8 group"
              >
                {/* Timeline Icon Node with dynamic pulse ring */}
                <div 
                  className={`absolute -left-4.5 top-1.5 h-9 w-9 rounded-full border-4 border-[#0a0f1d] flex items-center justify-center transition-all duration-300 ${
                    isPresent 
                      ? "bg-[#fca311] text-[#0a0f1d] shadow-[0_0_15px_rgba(252,163,17,0.5)]" 
                      : "bg-[#1f293d] text-gray-300 group-hover:bg-[#fca311] group-hover:text-[#0a0f1d] group-hover:shadow-[0_0_12px_rgba(252,163,17,0.3)]"
                  }`}
                >
                  <Briefcase className="h-3.5 w-3.5" />
                  {isPresent && (
                    <span className="absolute -inset-1 rounded-full border border-[#fca311]/40 animate-ping [animation-duration:1.8s]" />
                  )}
                </div>

                {/* Left Side: Desktop Date Marker */}
                <div className="hidden md:block absolute -left-[150px] top-2 text-right w-32 pr-2">
                  <span className="text-xs font-bold tracking-widest uppercase text-gray-400 group-hover:text-[#fca311] transition-colors duration-300">
                    {item.duration.split(" – ")[0]}
                  </span>
                  <span className="block text-[10px] text-gray-500 font-bold uppercase tracking-wider mt-0.5">
                    {item.duration.split(" – ")[1]}
                  </span>
                </div>

                {/* Glassmorphic Journey Card */}
                <motion.div 
                  whileHover={{ 
                    y: -5, 
                    borderColor: "#fca311", 
                    boxShadow: "0_20px_40px_-15px_rgba(0,0,0,0.3)",
                    background: "rgba(255,255,255,0.04)"
                  }}
                  className="rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-md p-6 md:p-8 transition-all duration-300 shadow-xl"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                    <div>
                      <div className="inline-flex items-center gap-1.5 group/title">
                        <h3 className="text-xl md:text-2xl font-black tracking-tight text-white group-hover:text-[#fca311] transition-colors duration-300" style={{ fontFamily: "var(--font-display)" }}>
                          {item.title}
                        </h3>
                        <ArrowUpRight className="h-4 w-4 text-gray-400 transition-transform duration-300 group-hover/title:translate-x-0.5 group-hover/title:-translate-y-0.5 group-hover:text-[#fca311]" />
                      </div>
                      <p className="text-[#fca311] font-bold text-sm mt-1 uppercase tracking-wider">{item.company}</p>
                    </div>

                    {/* Mobile Date Badge */}
                    <div className="flex items-center gap-2 text-[10px] font-bold tracking-wider uppercase text-gray-300 md:hidden bg-white/5 border border-white/10 px-3.5 py-1.5 rounded-full w-fit">
                      <Calendar className="w-3.5 h-3.5 text-[#fca311]" />
                      <span>{item.duration}</span>
                    </div>
                  </div>

                  <p className="mt-4 text-gray-400 leading-relaxed text-sm md:text-base font-normal">
                    {item.description}
                  </p>

                  {/* Tag Skill badging */}
                  {item.skills && (
                    <div className="mt-6 flex flex-wrap gap-2">
                      {item.skills.map((skill, sIdx) => (
                        <motion.span 
                          key={sIdx} 
                          whileHover={{ scale: 1.05, borderColor: "#fca311", color: "#fca311" }}
                          className="text-[10px] font-bold uppercase tracking-wider bg-white/5 border border-white/10 text-gray-300 px-3 py-1 rounded-lg cursor-default transition-all duration-300"
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  )}
                </motion.div>

              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}