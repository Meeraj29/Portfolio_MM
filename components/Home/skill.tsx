"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface SkillItem {
  name: string;
  icon: string;
  brandColor: string; // Dynamic hover brand color glow
}

const skills: SkillItem[] = [
  { name: "HTML5", icon: "https://cdn.simpleicons.org/html5", brandColor: "#e34f26" },
  { name: "CSS3", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/css3.svg", brandColor: "#1572b6" },
  { name: "JavaScript", icon: "https://cdn.simpleicons.org/javascript", brandColor: "#f7df1e" },
  { name: "TypeScript", icon: "https://cdn.simpleicons.org/typescript", brandColor: "#3178c6" },
  { name: "React", icon: "https://cdn.simpleicons.org/react", brandColor: "#61dafb" },
  { name: "Next.js", icon: "https://cdn.simpleicons.org/nextdotjs/000000/ffffff", brandColor: "#000000" },
  { name: "Tailwind CSS", icon: "https://cdn.simpleicons.org/tailwindcss", brandColor: "#06b6d4" },
  { name: "Node.js", icon: "https://cdn.simpleicons.org/nodedotjs", brandColor: "#339933" },
  { name: "Express.js", icon: "https://cdn.simpleicons.org/express/000000/ffffff", brandColor: "#4f4f4f" },
  { name: "MongoDB", icon: "https://cdn.simpleicons.org/mongodb", brandColor: "#47a248" },
  { name: "Git", icon: "https://cdn.simpleicons.org/git", brandColor: "#f05032" },
  { name: "GitHub", icon: "https://cdn.simpleicons.org/github/181717/ffffff", brandColor: "#24292e" },
  { name: "Postman", icon: "https://cdn.simpleicons.org/postman", brandColor: "#ff6c37" },
  { name: "Vercel", icon: "https://cdn.simpleicons.org/vercel/000000/ffffff", brandColor: "#0a0a0a" },
  { name: "VScode", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/visualstudiocode.svg", brandColor: "#007acc" },
];

export default function Skills() {
  const listVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.04 } }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 15 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { type: "spring" as const, stiffness: 130, damping: 15 } }
  };

  return (
    <section id="skills" className="bg-[#fafbfc] py-28 relative overflow-hidden">
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000002_1px,transparent_1px),linear-gradient(to_bottom,#00000002_1px,transparent_1px)] bg-[size:28px_28px] pointer-events-none" />

      {/* Glow Backdrops */}
      <div className="absolute left-[-15%] top-[-10%] w-[40%] h-[40%] rounded-full bg-blue-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute right-[-15%] bottom-[-10%] w-[40%] h-[40%] rounded-full bg-[#fca311]/5 blur-[120px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center space-y-3"
        >
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#14213d]" style={{ fontFamily: "var(--font-display)" }}>My Skills</p>
          <h2 className="text-4xl font-black text-[#14213d] md:text-5xl tracking-tight" style={{ fontFamily: "var(--font-display)" }}>Technologies I Work With</h2>
          <p className="text-base leading-relaxed text-gray-500 font-medium max-w-2xl mx-auto" style={{ fontFamily: "var(--font-sans)" }}>
            I enjoy building modern, scalable, and responsive web applications using industry-standard technologies across frontend, backend, databases, and development tools.
          </p>
        </motion.div>

        {/* Bento Grid Skills */}
        <motion.div
          variants={listVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 w-full"
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              variants={cardVariants}
              whileHover={{
                y: -6,
                scale: 1.03,
                borderColor: skill.brandColor,
                boxShadow: `0 12px 24px -10px ${skill.brandColor}33`,
                background: `${skill.brandColor}06`
              }}
              className="group relative rounded-2xl border border-gray-200/60 bg-[#ffffff] p-5 transition-all duration-300 cursor-default flex flex-col items-center justify-center min-h-[120px]"
            >
              {/* Dynamic bottom expanding line mapping layout hover scales */}
              <div
                className="absolute inset-x-0 bottom-0 h-1 scale-x-0 rounded-b-2xl transition-transform duration-300 group-hover:scale-x-100"
                style={{ backgroundColor: skill.brandColor }}
              />

              <div className="flex flex-col items-center justify-center space-y-3.5">
                <motion.div whileHover={{ scale: 1.1 }} className="relative h-11 w-11 flex items-center justify-center">
                  <Image
                    src={skill.icon}
                    alt={`${skill.name} brand asset`}
                    fill
                    unoptimized
                    className="object-contain"
                    style={{
                      filter:
                        skill.name === "CSS3" ? "invert(33%) sepia(85%) saturate(1519%) hover-rotate(185deg) brightness(90%) contrast(92%)" :
                          skill.name === "VScode" ? "invert(36%) sepia(76%) saturate(2333%) hue-rotate(187deg) brightness(91%) contrast(101%)" :
                            "none"
                    }}
                  />
                </motion.div>
                <h3 className="text-center text-xs font-bold text-gray-700 uppercase tracking-widest transition-colors duration-300 group-hover:text-gray-900">
                  {skill.name}
                </h3>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}