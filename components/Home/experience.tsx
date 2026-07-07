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
    <section id="experience" className="py-24 bg-[#e5e5e5] relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 h-125 w-125 rounded-full bg-[#14213d]/5 blur-3xl opacity-60" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20 max-w-3xl mx-auto"
        >
          <span className="text-[#14213d] font-semibold uppercase tracking-[0.25em] text-sm" style={{ fontFamily: "var(--font-display)" }}>
            Experience
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold tracking-tight text-[#14213d]" style={{ fontFamily: "var(--font-display)" }}>
            My Professional Journey
          </h2>
          <p className="mt-5 max-w-2xl mx-auto text-[#5c5c5c] text-lg leading-relaxed" style={{ fontFamily: "var(--font-sans)" }}>
            My experience in frontend and full-stack development has helped me build modern, responsive, and scalable web applications while continuously improving my technical skills.
          </p>
        </motion.div>

        <div className="relative border-l border-[#14213d]/20 ml-4 md:ml-32 space-y-12 w-auto">
          {experiences.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative pl-8 group"
            >
              {/* Animated Icon Ring */}
              <motion.div 
                whileHover={{ scale: 1.2 }}
                className="absolute -left-4 top-1.5 h-8 w-8 rounded-full border-4 border-[#e5e5e5] bg-[#b8b8b8] flex items-center justify-center transition-all duration-300 group-hover:border-[#fca311] group-hover:bg-[#fca311]"
              >
                <Briefcase className="h-3 w-3 text-[#ffffff] group-hover:text-[#14213d] transition-colors duration-300" />
              </motion.div>

              <div className="hidden md:block absolute -left-36 top-2 text-right w-28">
                <span className="text-xs font-semibold tracking-wider uppercase text-[#5c5c5c] group-hover:text-[#fca311] transition-colors duration-300">
                  {item.duration.split(" – ")[0]}
                </span>
                <span className="block text-[10px] text-[#8a8a8a] mt-0.5">
                  {item.duration.split(" – ")[1]}
                </span>
              </div>

              {/* Card Container Element */}
              <motion.div 
                whileHover={{ y: -5, scale: 1.01, border: "1px solid #fca311", boxShadow: "0_20px_40px_-15px_rgba(20,33,61,0.15)" }}
                className="rounded-2xl border border-[#b8b8b8]/50 bg-[#ffffff] p-6 md:p-8 shadow-xs transition-all duration-300"
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                  <div>
                    <div className="inline-flex items-center gap-1 group/title">
                      <h3 className="text-xl md:text-2xl font-bold tracking-tight text-[#14213d] group-hover:text-[#fca311] transition-colors duration-300" style={{ fontFamily: "var(--font-display)" }}>
                        {item.title}
                      </h3>
                      <ArrowUpRight className="h-4 w-4 text-[#8a8a8a] transition-transform duration-300 group-hover/title:translate-x-1 group-hover/title:-translate-y-1 group-hover:text-[#fca311]" />
                    </div>
                    <p className="text-[#fca311] font-medium text-base mt-1">{item.company}</p>
                  </div>

                  <div className="flex items-center gap-2 text-xs font-medium text-[#5c5c5c] md:hidden bg-[#ebebeb] px-3 py-1.5 rounded-full w-fit">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{item.duration}</span>
                  </div>
                </div>

                <p className="mt-4 text-[#333333] leading-relaxed text-sm md:text-base">
                  {item.description}
                </p>

                {item.skills && (
                  <div className="mt-6 flex flex-wrap gap-2">
                    {item.skills.map((skill, sIdx) => (
                      <motion.span 
                        key={sIdx} 
                        whileHover={{ scale: 1.05, backgroundColor: "#14213d", color: "#ffffff" }}
                        className="text-[11px] font-medium bg-[#ebebeb] text-[#333333] px-2.5 py-1 rounded-md cursor-default"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                )}
              </motion.div>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}