"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  const techBadges = ["MongoDB", "Next.js", "Node.js", "React.js"];

  // Framer Motion layout orchestration variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.1 }
    }
  } as const;

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { type: "spring", stiffness: 90, damping: 15 } 
    }
  } as const;

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-[#030712] text-white"
    >
      {/* --- PROFESSIONAL GLOWING GRID BACKGROUND --- */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        {/* Dotted pattern overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none opacity-60" />
        
        {/* Glow Effects */}
        <div className="absolute top-[-10%] right-[-10%] h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-[120px]" />
        <div className="absolute bottom-[10%] left-[-10%] h-[500px] w-[500px] rounded-full bg-[#fca311]/5 blur-[120px]" />
        <div className="absolute top-[35%] left-[45%] h-[300px] w-[300px] rounded-full bg-[#fca311]/5 blur-[80px]" />

        {/* Ambient Glassmorphic Shapes */}
        {[
          { size: "w-80 h-80", initialX: "15%", initialY: "15%", duration: 16, delay: 0 },
          { size: "w-[450px] h-[450px]", initialX: "65%", initialY: "40%", duration: 22, delay: 2 },
        ].map((orb, index) => (
          <motion.div
            key={index}
            animate={{
              y: ["0%", "8%", "-8%", "0%"],
              x: ["0%", "-4%", "4%", "0%"],
            }}
            transition={{
              duration: orb.duration,
              delay: orb.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{ left: orb.initialX, top: orb.initialY }}
            className={`absolute ${orb.size} rounded-full bg-white/[0.02] backdrop-blur-3xl border border-white/5 shadow-[0_8px_32px_0_rgba(255,255,255,0.01)]`}
          />
        ))}
      </div>

      {/* --- MAIN HERO CONTENT --- */}
      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col-reverse items-center justify-between gap-12 px-6 py-20 lg:flex-row lg:gap-16 lg:px-8 lg:py-32">
        
        {/* Left Column: Typography & Tech Stack */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex max-w-2xl flex-col items-center text-center lg:items-start lg:text-left space-y-6"
        >
          {/* Tagline / Greeting */}
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-md shadow-sm">
            <span className="flex h-2 w-2 rounded-full bg-[#fca311] animate-pulse" />
            <p className="text-xs font-bold uppercase tracking-widest text-[#fca311]" style={{ fontFamily: "var(--font-display)" }}>
              Hi, I&apos;m 👋
            </p>
          </motion.div>

          {/* Title */}
          <div className="space-y-3">
            <motion.h1 
              variants={itemVariants}
              className="text-5xl font-black tracking-tight text-white sm:text-7xl xl:text-8xl leading-none"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Meeraj Mathin
            </motion.h1>
            <motion.h2 
              variants={itemVariants} 
              className="text-2xl font-bold tracking-tight bg-gradient-to-r from-gray-200 via-gray-400 to-[#fca311] bg-clip-text text-transparent sm:text-3xl md:text-4xl" 
              style={{ fontFamily: "var(--font-display)" }}
            >
              Full Stack Developer
            </motion.h2>
          </div>

          {/* Intro Paragraph */}
          <motion.p 
            variants={itemVariants} 
            className="text-base leading-relaxed text-gray-400 sm:text-lg sm:leading-8 max-w-lg" 
            style={{ fontFamily: "var(--font-sans)" }}
          >
            I build modern, responsive, and scalable web applications using React, Next.js, Node.js, Express.js, MongoDB, and Tailwind CSS. Passionate about creating clean user experiences and writing maintainable code.
          </motion.p>

          {/* Tech Badges Row */}
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-2.5 lg:justify-start pt-2">
            {techBadges.map((tech) => (
              <motion.span
                key={tech}
                whileHover={{ scale: 1.08, borderColor: "#fca311", color: "#fca311" }}
                whileTap={{ scale: 0.95 }}
                className="rounded-full border border-white/10 bg-white/5 px-4.5 py-2 text-xs font-semibold tracking-wide text-gray-300 shadow-sm transition-all duration-300 cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>
          
          {/* Action CTAs */}
          <motion.div variants={itemVariants} className="flex w-full flex-col gap-4 sm:w-auto sm:flex-row sm:justify-center lg:justify-start pt-4">
            <motion.button 
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("projects")?.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
              }}
              className="w-full text-center rounded-xl bg-[#fca311] px-8 py-3.5 text-sm font-extrabold text-[#030712] shadow-lg shadow-[#fca311]/10 hover:shadow-[#fca311]/25 hover:bg-[#fdbb53] transition-all duration-300 sm:w-auto cursor-pointer uppercase tracking-wider"
            >
              View My Work
            </motion.button>

            <motion.button 
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("contact")?.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
              }} 
              className="w-full rounded-xl border border-white/15 bg-white/5 px-8 py-3.5 text-sm font-extrabold text-white backdrop-blur-md shadow-sm hover:border-[#fca311] hover:text-[#fca311] transition-all duration-300 sm:w-auto cursor-pointer uppercase tracking-wider"
            >
              Get In Touch
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Right Column: Profile Image Presentation */}
        <div className="relative group z-10">
          {/* High-fidelity outer spinning gradient ring */}
          <div className="absolute inset-[-6px] rounded-[36px] bg-gradient-to-tr from-[#fca311] via-blue-500 to-indigo-600 opacity-30 blur-sm group-hover:opacity-60 transition-opacity duration-500 animate-spin [animation-duration:15s]" />

          {/* Glowing back-orb */}
          <div className="absolute inset-0 rounded-[30px] bg-[#fca311] blur-2xl opacity-15 group-hover:opacity-25 transition-opacity duration-500" />

          {/* Main profile container with floating motion */}
          <motion.div 
            initial={{ y: 0 }}
            animate={{ y: [-8, 8, -8] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="relative h-72 w-72 overflow-hidden rounded-[30px] border-2 border-white/20 bg-white/5 shadow-2xl backdrop-blur-md sm:h-80 sm:w-80 md:h-[450px] md:w-[360px]"
          >
            <Image
              src="/Meeraj.jpg"
              alt="Meeraj Mathin Profile Presentation"
              fill
              priority
              sizes="(max-width: 640px) 288px, (max-width: 768px) 320px, 400px"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Absolute overlay vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#030712]/50 via-transparent to-transparent pointer-events-none" />
          </motion.div>
        </div>

      </div>
    </section>
  );
}