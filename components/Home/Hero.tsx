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
      transition: { staggerChildren: 0.15, delayChildren: 0.1 }
    }
  } as const;

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { type: "spring" as const, stiffness: 100, damping: 15 } 
    }
  } as const;

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-[#e5e5e5]"
    >
      {/* --- PROFESSIONAL GLASSMORPHISM BACKGROUND LAYER --- */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        {/* Deep ambient background glows */}
        <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-[#14213d]/10 blur-3xl" />
        <div className="absolute bottom-10 left-10 h-96 w-96 rounded-full bg-[#fca311]/5 blur-3xl" />

        {/* Floating Glassmorphic Ambient Orbs */}
        {[
          { size: "w-72 h-72", initialX: "10%", initialY: "20%", duration: 14, delay: 0 },
          { size: "w-96 h-96", initialX: "70%", initialY: "50%", duration: 18, delay: 1 },
          { size: "w-64 h-64", initialX: "40%", initialY: "75%", duration: 16, delay: 2 },
        ].map((orb, index) => (
          <motion.div
            key={index}
            animate={{
              y: ["0%", "10%", "-10%", "0%"],
              x: ["0%", "-5%", "5%", "0%"],
            }}
            transition={{
              duration: orb.duration,
              delay: orb.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{ left: orb.initialX, top: orb.initialY }}
            className={`absolute ${orb.size} rounded-full 
              bg-white/15 dark:bg-white/5 
              backdrop-blur-xl 
              border border-white/20 dark:border-white/10
              shadow-[0_8px_32px_0_rgba(20,33,61,0.03)]`}
          />
        ))}
      </div>

      {/* --- MAIN HERO CONTENT LAYER --- */}
      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col-reverse items-center justify-between gap-12 px-6 py-16 lg:flex-row lg:gap-16 lg:px-8 lg:py-24">
        
        {/* Left Side: Typography & Badges */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex max-w-2xl flex-col items-center text-center lg:items-start lg:text-left"
        >
          {/* Tagline Indicator */}
          <motion.div variants={itemVariants} className="flex flex-col items-center gap-3 lg:items-start">
            <p className="text-sm font-semibold uppercase tracking-widest text-[#fca311] sm:text-base" style={{ fontFamily: "var(--font-display)" }}>
              Hi, I&apos;m 👋
            </p>
          </motion.div>

          {/* Heading */}
          <motion.h1 
            variants={itemVariants}
            className="text-4xl font-extrabold tracking-tight text-[#14213d] sm:text-6xl xl:text-7xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Meeraj Mathin
          </motion.h1>

          {/* Tech Badges Row */}
          <motion.div variants={itemVariants} className="mb-4 flex flex-wrap justify-center gap-2 lg:justify-start mt-10">
            {techBadges.map((tech) => (
              <motion.span
                key={tech}
                whileHover={{ scale: 1.08, backgroundColor: "#fca311", color: "#14213d" }}
                whileTap={{ scale: 0.95 }}
                className="rounded-full bg-[#14213d] px-4 py-3 text-xs font-bold tracking-wide text-white shadow-sm border border-[#14213d]/20 transition-colors duration-300 cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>

          {/* Role Title */}
          <motion.h2 variants={itemVariants} className="mt-4 text-xl font-medium text-[#333333] sm:text-2xl md:text-3xl" style={{ fontFamily: "var(--font-display)" }}>
            Full Stack Developer
          </motion.h2>

          {/* Intro Paragraph */}
          <motion.p variants={itemVariants} className="mt-6 max-w-xl text-base leading-relaxed text-[#5c5c5c] sm:text-lg sm:leading-8" style={{ fontFamily: "var(--font-sans)" }}>
            I build modern, responsive, and scalable web applications using React, Next.js, Node.js, Express.js, MongoDB, and Tailwind CSS. Passionate about creating clean user experiences and writing maintainable code.
          </motion.p>
          
          {/* Action CTAs */}
          <motion.div variants={itemVariants} className="mt-8 flex w-full flex-col gap-4 sm:w-auto sm:flex-row sm:justify-center lg:justify-start">
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
              className="w-full text-center rounded-xl bg-[#14213d] px-8 py-3.5 text-base font-semibold text-white transition-all duration-300 hover:bg-[#29447e] sm:w-auto cursor-pointer"
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
              className="w-full rounded-xl border border-[#b8b8b8] bg-[#fafafa] px-8 py-3.5 text-base font-semibold text-[#333333] transition-all duration-300 hover:border-[#14213d] hover:text-[#14213d] sm:w-auto cursor-pointer"
            >
              Get In Touch
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Right Side: Animated Frame Image Container */}
        <div className="relative group z-10">
          {/* Ambient Glow backing the Image */}
          <div className="absolute inset-0 rounded-full bg-[#fca311] blur-3xl opacity-20 transition-opacity group-hover:opacity-30" />

          {/* Micro floating container */}
          <motion.div 
            initial={{ y: 0 }}
            animate={{ y: [-10, 10, -10] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            whileHover={{ scale: 1.02 }}
            className="md:mt-8 mt-16 relative h-70 w-70 overflow-hidden rounded-[8px] border-4 border-[#ffffff] shadow-xl ring-1 ring-[#e5e5e5] sm:h-80 sm:w-80 md:h-120 md:w-100 lg:border-8"
          >
            <Image
              src="/Meeraj.jpg"
              alt="Meeraj Mathin Profile Presentation"
              fill
              priority
              sizes="(max-width: 640px) 256px, (max-width: 768px) 320px, 384px"
              className="object-cover"
            />
          </motion.div>
        </div>

      </div>
    </section>
  );
}