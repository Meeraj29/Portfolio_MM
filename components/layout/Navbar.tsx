"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Education", href: "#education" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.getElementById(link.href.replace("#", "")))
      .filter((element): element is HTMLElement => Boolean(element));

    if (!sections.length) return;

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      const visibleEntries = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

      if (visibleEntries.length > 0) {
        setActiveSection(visibleEntries[0].target.id);
      }
    };

    const observer = new IntersectionObserver(handleIntersect, {
      root: null,
      rootMargin: "-20% 0px -45% 0px",
      threshold: [0.15, 0.3, 0.5, 0.75],
    });

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  // Professional Smooth Scroll Handler
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    setActiveSection(href.replace("#", ""));

    const targetElement = document.querySelector(href);
    if (targetElement) {
      const headerOffset = 80; // Match your navbar height
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-[#0c1425] bg-[#14213d]/90 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        
        {/* Logo Branding */}
        <Link href="/" className="flex flex-col tracking-tight">
          <span className="text-xl font-bold text-[#ffffff]">Meeraj Mathin</span>
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#fca311]">
            Full Stack Developer
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace("#", "");
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleScroll(e, link.href)}
                className={`text-sm font-medium transition-colors duration-200 ${
                  isActive
                    ? "text-[#fca311] underline underline-offset-4"
                    : "text-[#beccea] hover:text-[#ffffff]"
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

      {/* Action Button */}
<div className="hidden lg:block">
  <a
    href="/resume.pdf"
    download="Meeraj_Mathin_Resume.pdf" // 👈 ADD THIS: Triggers download with a custom filename
    className="rounded-lg bg-[#fca311] px-4 py-2 text-sm font-semibold text-[#14213d] transition-colors hover:bg-[#fdb541] cursor-pointer"
  >
    Resume
  </a>
</div>

        {/* Mobile Toggle Button */}
        <button
          className="text-[#beccea] hover:text-[#ffffff] lg:hidden cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="border-t border-[#0c1425] bg-[#14213d]/95 px-6 py-4 backdrop-blur-md lg:hidden">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace("#", "");
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleScroll(e, link.href)}
                  className={`text-sm font-medium transition-colors ${
                    isActive ? "text-[#fca311]" : "text-[#beccea]"
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
           {/* Inside Mobile Menu Dropdown */}
<a
  href="/Resume.pdf"
  download="Resume.pdf" // 👈 ADD THIS HERE TOO
  className="mt-2 inline-block rounded-lg bg-[#fca311] py-2 text-center text-sm font-semibold text-[#14213d]"
>
  Resume
</a>
          </nav>
        </div>
      )}
    </header>
  );
}