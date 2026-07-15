"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

interface ProjectCardProps {
  badge: string;
  title: string;
  description: string;
  tags: string[];
  projectLink: string;
  imageSrc: string;
  imageAlt: string;
  index: number;
}

function ProjectCard({
  badge,
  title,
  description,
  tags,
  projectLink,
  imageSrc,
  imageAlt,
  index,
}: ProjectCardProps) {
  // State for spotlight mouse tracking
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setCoords({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  // Theme configuration based on index to keep cards visually matching their projects
  const themes = [
    {
      spotlight: "rgba(59, 130, 246, 0.08)", // Blue (SmartEdLabs)
      borderGlow: "rgba(59, 130, 246, 0.35)",
      badgeBg: "bg-blue-500/10 text-blue-600 border-blue-500/20",
      accentText: "group-hover/title:text-blue-600 dark:group-hover/title:text-blue-400",
      btnBg: "bg-blue-600 hover:bg-blue-700 shadow-blue-500/20 hover:shadow-blue-500/30",
      pillBorder: "hover:border-blue-500/30 hover:bg-blue-50/50 hover:text-blue-700 dark:hover:text-blue-400",
    },
    {
      spotlight: "rgba(168, 85, 247, 0.08)", // Purple (Zikrabyte)
      borderGlow: "rgba(168, 85, 247, 0.35)",
      badgeBg: "bg-purple-500/10 text-purple-600 border-purple-500/20",
      accentText: "group-hover/title:text-purple-600 dark:group-hover/title:text-purple-400",
      btnBg: "bg-purple-600 hover:bg-purple-700 shadow-purple-500/20 hover:shadow-purple-500/30",
      pillBorder: "hover:border-purple-500/30 hover:bg-purple-50/50 hover:text-purple-700 dark:hover:text-purple-400",
    },
    {
      spotlight: "rgba(245, 158, 11, 0.08)", // Amber (Bizkit)
      borderGlow: "rgba(245, 158, 11, 0.35)",
      badgeBg: "bg-amber-500/10 text-amber-600 border-amber-500/20",
      accentText: "group-hover/title:text-amber-600 dark:group-hover/title:text-amber-400",
      btnBg: "bg-amber-600 hover:bg-amber-700 shadow-amber-500/20 hover:shadow-amber-500/30",
      pillBorder: "hover:border-amber-500/30 hover:bg-amber-50/50 hover:text-amber-700 dark:hover:text-amber-400",
    },
    {
      spotlight: "rgba(16, 185, 129, 0.08)", // Emerald (AgTechWare)
      borderGlow: "rgba(16, 185, 129, 0.35)",
      badgeBg: "bg-emerald-500/10 text-emerald-600 border-emerald-500/20",
      accentText: "group-hover/title:text-emerald-600 dark:group-hover/title:text-emerald-400",
      btnBg: "bg-emerald-600 hover:bg-emerald-700 shadow-emerald-500/20 hover:shadow-emerald-500/30",
      pillBorder: "hover:border-emerald-500/30 hover:bg-emerald-50/50 hover:text-emerald-700 dark:hover:text-emerald-400",
    },
  ];

  const currentTheme = themes[index % themes.length];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ type: "spring", stiffness: 85, damping: 15, delay: index * 0.05 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setCoords({ x: 0, y: 0 });
      }}
      className="relative p-[1px] rounded-[28px] overflow-hidden bg-gray-150 dark:bg-zinc-800 transition-all duration-300 w-full flex flex-col h-full hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)]"
    >
      {/* Spotlight Border Layer */}
      <div
        className="absolute inset-0 opacity-0 transition-opacity duration-300 pointer-events-none rounded-[28px]"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(280px circle at ${coords.x}px ${coords.y}px, ${currentTheme.borderGlow}, transparent 80%)`,
        }}
      />

      {/* Inner Card Container */}
      <div className="relative flex flex-col overflow-hidden rounded-[27px] bg-white/95 dark:bg-zinc-900/95 backdrop-blur-xl w-full h-full flex-1 justify-between">
        {/* Background Spotlight Glow */}
        <div
          className="absolute inset-0 opacity-0 transition-opacity duration-500 pointer-events-none rounded-[27px]"
          style={{
            opacity: isHovered ? 1 : 0,
            background: `radial-gradient(350px circle at ${coords.x}px ${coords.y}px, ${currentTheme.spotlight}, transparent 80%)`,
          }}
        />

        {/* Top Section: Screenshot Image Showcase */}
        <div className="relative w-full aspect-video overflow-hidden rounded-t-[27px] bg-gray-50 dark:bg-zinc-800/40 border-b border-gray-100 dark:border-zinc-850">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            sizes="(max-width: 768px) 100vw, 30vw"
            className="object-contain p-4 filter brightness-[95%] hover:brightness-100 hover:scale-[1.03] transition-all duration-500 ease-out"
            priority
          />

          {/* Category Badge */}
          <div className={`absolute left-4 top-4 z-10 rounded-full px-2.5 py-0.5 text-[8px] font-extrabold tracking-widest uppercase border ${currentTheme.badgeBg}`}>
            {badge}
          </div>
        </div>

        {/* Bottom Section: Details & Context */}
        <div className="p-6 flex flex-col justify-between flex-1 space-y-6">
          <div className="space-y-2.5">
            <div className="space-y-0.5 group/title">
              <h3 className={`text-lg sm:text-xl font-black tracking-tight text-gray-900 dark:text-white leading-snug transition-colors duration-300 ${currentTheme.accentText}`}>
                {title}
              </h3>

            </div>

            <p className="text-xs leading-relaxed text-gray-500 dark:text-zinc-400 font-medium line-clamp-4">
              {description}
            </p>
          </div>

          <div className="space-y-4 pt-4 border-t border-gray-50 dark:border-zinc-800">
            {/* Tech tags */}
            <div className="flex flex-wrap gap-1">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className={`rounded-full bg-gray-50 dark:bg-zinc-800/50 border border-gray-100 dark:border-zinc-800 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-gray-600 dark:text-zinc-300 cursor-default transition-all duration-300 ${currentTheme.pillBorder}`}
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Launch link */}
            <div className="flex items-center">
              <Link
                href={projectLink}
                target={projectLink !== "#" ? "_blank" : undefined}
                className={`group/link inline-flex items-center space-x-1.5 text-white px-4 py-2 rounded-full text-[10px] font-extrabold shadow-sm hover:shadow-md transition-all duration-300 uppercase tracking-widest ${currentTheme.btnBg}`}
              >
                <span>{projectLink !== "#" ? "Launch Site" : "Internal Demo"}</span>
                <ExternalLink className="w-3 h-3 text-white transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function ProjectShowcase() {
  const projects = [
    {
      badge: "Front End",
      title: "SmartEdLabs – Interactive EdTech Platform",
      description: "An interactive, responsive virtual learning platform and laboratory simulation workspace designed to optimize remote education workflows. Features role-based dashboards for students, instructors, and admins to track experiment logs and course progress. Engineered with state sync logic for lesson checkpoints, dynamic asset filters, and visual status badges.",
      tags: ["Next.JS", "JavaScript", "Tailwind CSS", "React Router", "HTML5/CSS3"],
      projectLink: "https://smart-ed-labs-project.vercel.app/",
      imageSrc: "/SmartEdLab.png",
      imageAlt: "SmartEdLabs Workspace Dashboard Preview",
    },
    {
      badge: "Full Stack",
      title: "Zikrabyte – Agency Portfolio Platform",
      description: "A premium, modern corporate web application designed to showcase custom digital solutions, product ecosystems, and creative agency services. Engineered with optimized asset delivery, fluid layout transitions, and responsive Tailwind layouts to deliver an immersive brand experience. Focused on performance optimization, SEO-friendly structures, and interactive UI.",
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Node.js", "Vercel"],
      projectLink: "https://zikrabyte.vercel.app",
      imageSrc: "/Zikrabyte.png",
      imageAlt: "Zikrabyte Platform Home Preview",
    },
    {
      badge: "Front End",
      title: "Bizkit – Business Productivity Suite",
      description: "A premium business productivity suite that integrates custom business modules like digital networking cards, project task managers, and shift trackers. Engineered with optimized touch/scroll gesture triggers, interactive Framer Motion animations, and dynamic Tailwind styling to deliver a seamless, native-app-like web interface.",
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "React 19", "Vercel"],
      projectLink: "https://bizkit-ani-yb5l.vercel.app/",
      imageSrc: "/Bizkit.png",
      imageAlt: "Bizkit Platform Preview",
    },
    {
      badge: "Front End",
      title: "AgTechWare – Enterprise Logistics & Supply Chain Dashboard",
      description: "A premium, high-performance enterprise resource planning (ERP) and logistics dashboard. Designed to streamline global logistics workflows, it includes interactive modules for customs clearance tracking, real-time fleet utilization metrics, cargo shipment pipelines, financial reporting, and a certified VGM (Verified Gross Mass) calculator. Focused on structured state management and modern data visualization.",
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "Recharts", "Redux Toolkit", "Lucide Icons"],
      projectLink: "https://ag-techware-dashboard-9ai2.vercel.app/",
      imageSrc: "/Ag_techware.png",
      imageAlt: "AgTechWare Logistics and Supply Chain ERP Dashboard Preview",
    },
  ];

  return (
    <section id="projects" className="bg-[#fafbfc] dark:bg-zinc-950 py-28 px-6 lg:px-8 overflow-hidden relative">
      {/* Ambient glows */}
      <div className="absolute top-1/2 left-[-15%] w-[40%] h-[40%] rounded-full bg-blue-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/2 right-[-15%] w-[40%] h-[40%] rounded-full bg-[#fca311]/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl w-full mx-auto space-y-16 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-3 max-w-2xl mx-auto"
        >
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#14213d] dark:text-zinc-400" style={{ fontFamily: "var(--font-display)" }}>
            Portfolio
          </p>
          <h2 className="text-4xl font-black tracking-tight text-[#14213d] dark:text-white md:text-5xl leading-none">
            Featured Projects
          </h2>
          <p className="text-base text-gray-500 dark:text-zinc-400 font-medium leading-relaxed max-w-lg mx-auto">
            A selection of my web and full-stack projects, highlighting clean design, structured coding, and smooth experiences.
          </p>
        </motion.div>

        {/* 3-in-a-Row Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          {projects.map((project, idx) => (
            <ProjectCard key={idx} {...project} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}