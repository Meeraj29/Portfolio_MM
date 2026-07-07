"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const skills = [
  { name: "HTML5", icon: "https://cdn.simpleicons.org/html5" },
  { name: "CSS3", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/css3.svg" },
  { name: "JavaScript", icon: "https://cdn.simpleicons.org/javascript" },
  { name: "TypeScript", icon: "https://cdn.simpleicons.org/typescript" },
  { name: "React", icon: "https://cdn.simpleicons.org/react" },
  { name: "Next.js", icon: "https://cdn.simpleicons.org/nextdotjs/000000/ffffff" }, 
  { name: "Tailwind CSS", icon: "https://cdn.simpleicons.org/tailwindcss" },
  { name: "Node.js", icon: "https://cdn.simpleicons.org/nodedotjs" },
  { name: "Express.js", icon: "https://cdn.simpleicons.org/express/000000/ffffff" },
  { name: "MongoDB", icon: "https://cdn.simpleicons.org/mongodb" },
  { name: "Git", icon: "https://cdn.simpleicons.org/git" },
  { name: "GitHub", icon: "https://cdn.simpleicons.org/github/181717/ffffff" },
  { name: "Postman", icon: "https://cdn.simpleicons.org/postman" },
  { name: "Figma", icon: "https://cdn.simpleicons.org/figma" },
  { name: "Vercel", icon: "https://cdn.simpleicons.org/vercel/000000/ffffff" },
  { name: "VScode", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/visualstudiocode.svg" },
];

export default function Skills() {
  const listVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.05 } }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.85, y: 15 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { type: "spring" as const, stiffness: 120, damping: 14 } }
  };

  return (
    <section id="skills" className="bg-[#fafafa] py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#14213d]">My Skills</p>
          <h2 className="mt-3 text-4xl font-bold text-[#14213d] md:text-5xl">Technologies I Work With</h2>
          <p className="mt-6 text-lg leading-8 text-[#5c5c5c]">
            I enjoy building modern, scalable, and responsive web applications using industry-standard technologies across frontend, backend, databases, and development tools.
          </p>
        </motion.div>

        <motion.div 
          variants={listVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 w-full"
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              variants={cardVariants}
              whileHover={{ y: -6, scale: 1.03, borderColor: "#fca311", boxShadow: "0_15px_30px_-10px_rgba(20,33,61,0.12)" }}
              className="group relative rounded-xl border border-[#b8b8b8]/40 bg-[#ffffff] p-5 shadow-xs transition-all duration-300 cursor-default"
            >
              <div className="flex flex-col items-center">
                <motion.div whileHover={{ scale: 1.12 }} className="relative h-12 w-12 flex items-center justify-center">
                  <Image
                    src={skill.icon}
                    alt={`${skill.name} brand asset`}
                    fill
                    unoptimized
                    className="object-contain"
                    style={{
                      filter: 
                        skill.name === "CSS3" ? "invert(33%) sepia(85%) saturate(1519%) hue-rotate(185deg) brightness(90%) contrast(92%)" : 
                        skill.name === "VScode" ? "invert(36%) sepia(76%) saturate(2333%) hue-rotate(187deg) brightness(91%) contrast(101%)" : 
                        "none"
                    }}
                  />
                </motion.div>
                <h3 className="mt-4 text-center text-sm font-semibold text-[#333333] transition-colors duration-300 group-hover:text-[#fca311]">
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