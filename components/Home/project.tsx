"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

interface ProjectCardProps {
  badge: string;
  title: string;
  description: string;
  tags: string[];
  projectLink: string;
  imageSrc: string;
  imageAlt: string;
}

function ProjectCard({
  badge,
  title,
  description,
  tags,
  projectLink,
  imageSrc,
  imageAlt,
}: ProjectCardProps) {
  return (
    <motion.div 
      whileHover={{ y: -8, scale: 1.01, boxShadow: "0_25px_50px_-12px_rgba(0,0,0,0.12)" }}
      transition={{ type: "spring", stiffness: 150, damping: 20 }}
      className="flex flex-col overflow-hidden rounded-[24px] border border-gray-100 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.03)] w-full"
    >
      <div className="relative aspect-16/10 w-full bg-gray-50 border-b border-gray-100 p-6 flex items-center justify-center overflow-hidden">
        <motion.div 
          whileHover={{ scale: 1.05 }} 
          transition={{ duration: 0.4 }}
          className="relative w-full h-full"
        >
          <Image src={imageSrc} alt={imageAlt} fill className="object-contain" priority />
        </motion.div>
        <div className="absolute left-4 top-4 z-10 rounded-full bg-[#111827] px-4 py-1 text-[11px] font-extrabold tracking-widest text-white uppercase">
          {badge}
        </div>
      </div>

      <div className="flex flex-col p-6 sm:p-7 flex-1 justify-between">
        <div className="space-y-4">
          <h3 className="text-xl font-black tracking-tight text-gray-900 sm:text-2xl leading-snug">
            {title}
          </h3>
          <p className="text-sm leading-relaxed text-gray-500 font-normal">
            {description}
          </p>
        </div>

        <div className="mt-6 space-y-6">
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <motion.span
                key={tag}
                whileHover={{ scale: 1.05, backgroundColor: "#e2e8f0" }}
                className="rounded-full bg-[#f3f4f6] px-3.5 py-1.5 text-xs font-medium text-gray-600 cursor-default"
              >
                {tag}
              </motion.span>
            ))}
          </div>

          <div className="pt-2 border-t border-gray-50">
            <Link href={projectLink} target="_blank" className="group/link inline-flex items-center text-sm font-bold text-[#d97706] hover:text-amber-700 transition">
              View Project <motion.span className="ml-1 inline-block" group-hover={{ x: 3 }}>→</motion.span>
            </Link>
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
      title: "SmartEdLabs – Interactive EdTech & Virtual Laboratory Platform",
      description: "An interactive, responsive virtual learning platform and laboratory simulation workspace designed to optimize remote education workflows. Features role-based dashboards for students, instructors, and admins to seamlessly track experiment logs and course progress. Engineered with granular state sync logic for multi-step lesson checkpoints, dynamic asset filters, and responsive visual status badges to maximize student accessibility.",
      tags: ["NextJS", "JavaScript", "Tailwind CSS", "React Router", "HTML5/CSS3"],
      projectLink: "https://smart-ed-labs-project.vercel.app/",
      imageSrc: "/SmartEdLab.png",
      imageAlt: "SmartEdLabs Workspace Dashboard Preview",
    },
    {
      badge: "Full Stack",
      title: "Zikrabyte – Agency Portfolio & Digital Solutions Platform",
      description: "A premium, modern corporate web application designed to showcase custom digital solutions, product ecosystems, and creative agency services. Engineered with optimized asset delivery, fluid layout transitions, and responsive Tailwind layouts to deliver an immersive brand experience. Focused on performance optimization, SEO-friendly structures, and highly interactive user interfaces.",
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Node.js", "Vercel Deployment"],
      projectLink: "https://zikrabyte.vercel.app",
      imageSrc: "/Zikrabyte.png",
      imageAlt: "Zikrabyte Platform Home Preview",
    },
  ];

  return (
    <section id="projects" className="bg-[#f8f9fa] py-16 px-4 sm:px-6 lg:px-8 min-h-screen flex flex-col items-center justify-center">
      <div className="max-w-7xl w-full mx-auto space-y-12">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-3 max-w-2xl mx-auto"
        >
          <h2 className="text-3xl font-black tracking-tight text-gray-900 sm:text-4xl">Featured Projects</h2>
          <p className="text-base text-gray-500 font-medium leading-relaxed">
            A selection of my web and full-stack projects, highlighting clean design and smooth user experiences.
          </p>
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
          }}
          className="grid gap-8 md:grid-cols-2 w-full max-w-4xl mx-auto items-stretch"
        >
          {projects.map((project, idx) => (
            <motion.div key={idx} variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { type: "spring", damping: 18 } } }}>
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </motion.div>
        
      </div>
    </section>
  );
}