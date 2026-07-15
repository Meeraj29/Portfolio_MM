"use client";

import { useState } from "react";
import { Mail, Phone, Send } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const contactEmail = "meerajmathin@gmail.com";
const contactPhone = "+91 8050431731";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [feedback, setFeedback] = useState("");

  // Coordinate tracking for spotlights
  const [leftCoords, setLeftCoords] = useState({ x: 0, y: 0 });
  const [leftHovered, setLeftHovered] = useState(false);

  const [rightCoords, setRightCoords] = useState({ x: 0, y: 0 });
  const [rightHovered, setRightHovered] = useState(false);

  const handleLeftMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setLeftCoords({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleRightMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setRightCoords({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    setFeedback("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (!response.ok || !data.success) throw new Error(data.message || "Unable to send message.");

      setStatus("success");
      setFeedback(data.message || "Your message was sent successfully.");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      setStatus("error");
      setFeedback(error instanceof Error ? error.message : "Something went wrong. Please try again.");
    }
  };

  return (
    <section id="contact" className="relative overflow-hidden bg-[#fafbfc] dark:bg-zinc-950 px-6 py-28 border-t border-gray-100/60 dark:border-zinc-900">
      {/* Background Orbs */}
      <div className="absolute bottom-0 right-0 -z-10 h-[400px] w-[400px] rounded-full bg-[#fca311]/5 blur-[120px] pointer-events-none" />
      <div className="absolute left-0 top-12 -z-10 h-[400px] w-[400px] rounded-full bg-blue-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#00000002_1px,transparent_1px)] dark:bg-[radial-gradient(#ffffff01_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none opacity-50" />

      <div className="mx-auto max-w-7xl relative z-10">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-center space-y-3"
        >
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#14213d] dark:text-zinc-400" style={{ fontFamily: "var(--font-display)" }}>Contact</p>
          <h2 className="text-4xl font-black tracking-tight text-[#14213d] dark:text-white md:text-5xl leading-none" style={{ fontFamily: "var(--font-display)" }}>Get In Touch</h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-gray-500 dark:text-zinc-400 font-medium" style={{ fontFamily: "var(--font-sans)" }}>
            Have a project idea, freelance opportunity, or just want to say hello? I&apos;d love to hear from you.
          </p>
        </motion.div>

        <div className="grid items-stretch gap-10 lg:grid-cols-2 max-w-5xl mx-auto w-full">
          
          {/* Left Connect Card */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ type: "spring", damping: 18 }}
            onMouseMove={handleLeftMouseMove}
            onMouseEnter={() => setLeftHovered(true)}
            onMouseLeave={() => {
              setLeftHovered(false);
              setLeftCoords({ x: 0, y: 0 });
            }}
            className="relative p-[1px] rounded-[32px] overflow-hidden bg-gray-150 dark:bg-zinc-800 transition-all duration-300 w-full hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)]"
          >
            {/* Spotlight Border Layer */}
            <div
              className="absolute inset-0 opacity-0 transition-opacity duration-300 pointer-events-none rounded-[32px]"
              style={{
                opacity: leftHovered ? 1 : 0,
                background: `radial-gradient(300px circle at ${leftCoords.x}px ${leftCoords.y}px, rgba(252, 163, 17, 0.35), transparent 80%)`,
              }}
            />

            {/* Inner Content */}
            <div className="relative rounded-[31px] bg-white/95 dark:bg-zinc-900/95 backdrop-blur-xl p-8 md:p-10 h-full w-full flex flex-col justify-between">
              {/* Background Spotlight Glow */}
              <div
                className="absolute inset-0 opacity-0 transition-opacity duration-500 pointer-events-none rounded-[31px]"
                style={{
                  opacity: leftHovered ? 1 : 0,
                  background: `radial-gradient(350px circle at ${leftCoords.x}px ${leftCoords.y}px, rgba(252, 163, 17, 0.08), transparent 80%)`,
                }}
              />

              <div className="relative z-10 space-y-6">
                <div className="space-y-4">
                  <h3 className="text-2xl font-black tracking-tight text-[#14213d] dark:text-white" style={{ fontFamily: "var(--font-display)" }}>Let&apos;s Connect</h3>
                  <p className="text-sm font-semibold text-gray-400 dark:text-zinc-500 tracking-wider uppercase">I usually reply within 1–2 business days.</p>
                </div>

                <ul className="space-y-3.5 text-xs font-semibold text-gray-500 dark:text-zinc-400">
                  {["Web development and UI/UX implementation", "Freelance collaborations and product ideas", "Mentorship, internships, and career conversations"].map((text, i) => (
                    <motion.li 
                      initial={{ opacity: 0, x: -10 }} 
                      whileInView={{ opacity: 1, x: 0 }} 
                      transition={{ delay: i * 0.08 }} 
                      key={i} 
                      className="flex items-start gap-3"
                    >
                      <span className="mt-1.5 h-2 w-2 rounded-full bg-[#fca311] shrink-0 shadow-sm" /> 
                      <span className="leading-relaxed">{text}</span>
                    </motion.li>
                  ))}
                </ul>

                <div className="space-y-5 pt-4">
                  <motion.a 
                    href={`mailto:${contactEmail}`} 
                    whileHover={{ x: 6 }}
                    transition={{ type: "spring", stiffness: 200, damping: 12 }}
                    className="group flex items-center gap-4.5"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gray-50 dark:bg-zinc-800 border border-gray-100 dark:border-zinc-700 transition-all duration-300 group-hover:bg-[#14213d] group-hover:border-[#14213d] dark:group-hover:bg-white dark:group-hover:border-white">
                      <Mail className="h-5 w-5 text-gray-500 transition-colors duration-300 group-hover:text-white dark:group-hover:text-zinc-950" />
                    </div>
                    <div>
                      <h4 className="text-[9px] font-extrabold uppercase tracking-wider text-gray-400">Email</h4>
                      <p className="mt-0.5 text-sm font-black text-gray-800 dark:text-white tracking-wide">{contactEmail}</p>
                    </div>
                  </motion.a>

                  <motion.a 
                    href={`tel:${contactPhone}`} 
                    whileHover={{ x: 6 }}
                    transition={{ type: "spring", stiffness: 200, damping: 12 }}
                    className="group flex items-center gap-4.5"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gray-50 dark:bg-zinc-800 border border-gray-100 dark:border-zinc-700 transition-all duration-300 group-hover:bg-[#14213d] group-hover:border-[#14213d] dark:group-hover:bg-white dark:group-hover:border-white">
                      <Phone className="h-5 w-5 text-gray-500 transition-colors duration-300 group-hover:text-white dark:group-hover:text-zinc-950" />
                    </div>
                    <div>
                      <h4 className="text-[9px] font-extrabold uppercase tracking-wider text-gray-400">Phone</h4>
                      <p className="mt-0.5 text-sm font-black text-gray-800 dark:text-white tracking-wide">{contactPhone}</p>
                    </div>
                  </motion.a>
                </div>
              </div>

              <div className="relative z-10 mt-8 pt-8 border-t border-gray-100 dark:border-zinc-800 space-y-4">
                <h4 className="text-xs font-extrabold uppercase tracking-widest text-[#14213d] dark:text-white" style={{ fontFamily: "var(--font-display)" }}>Follow Me</h4>
                <motion.a 
                  whileHover={{ scale: 1.08, rotate: 3, borderColor: "#14213d", color: "#14213d" }} 
                  whileTap={{ scale: 0.95 }}
                  href="https://github.com/Meeraj29" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-gray-200 dark:border-zinc-750 bg-white dark:bg-zinc-800 text-gray-500 dark:text-zinc-300 transition-colors duration-300 shadow-sm"
                >
                  <FaGithub size={20} />
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Right Message Form Card */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ type: "spring", damping: 18 }}
            onMouseMove={handleRightMouseMove}
            onMouseEnter={() => setRightHovered(true)}
            onMouseLeave={() => {
              setRightHovered(false);
              setRightCoords({ x: 0, y: 0 });
            }}
            className="relative p-[1px] rounded-[32px] overflow-hidden bg-gray-150 dark:bg-zinc-800 transition-all duration-300 w-full hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)]"
          >
            {/* Spotlight Border Layer */}
            <div
              className="absolute inset-0 opacity-0 transition-opacity duration-300 pointer-events-none rounded-[32px]"
              style={{
                opacity: rightHovered ? 1 : 0,
                background: `radial-gradient(300px circle at ${rightCoords.x}px ${rightCoords.y}px, rgba(59, 130, 246, 0.35), transparent 80%)`,
              }}
            />

            {/* Inner Content */}
            <div className="relative rounded-[31px] bg-white/95 dark:bg-zinc-900/95 backdrop-blur-xl p-8 md:p-10 h-full w-full">
              {/* Background Spotlight Glow */}
              <div
                className="absolute inset-0 opacity-0 transition-opacity duration-500 pointer-events-none rounded-[31px]"
                style={{
                  opacity: rightHovered ? 1 : 0,
                  background: `radial-gradient(350px circle at ${rightCoords.x}px ${rightCoords.y}px, rgba(59, 130, 246, 0.08), transparent 80%)`,
                }}
              />

              <div className="relative z-10">
                <h3 className="mb-6 text-2xl font-black tracking-tight text-[#14213d] dark:text-white" style={{ fontFamily: "var(--font-display)" }}>Send Me a Message</h3>

                <form className="space-y-5" onSubmit={handleSubmit}>
                  {["name", "email", "subject"].map((field) => (
                    <div key={field}>
                      <label className="mb-2 block text-xs font-bold text-gray-700 dark:text-zinc-400 uppercase tracking-widest capitalize">Your {field}</label>
                      <motion.input
                        whileFocus={{ scale: 1.01 }}
                        type={field === "email" ? "email" : "text"}
                        name={field}
                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                        value={(formData as any)[field]}
                        onChange={handleChange}
                        placeholder={`Enter your ${field}`}
                        className="w-full rounded-2xl border border-gray-200 dark:border-zinc-800 bg-gray-50 dark:bg-zinc-800/40 px-4.5 py-3.5 text-xs text-[#14213d] dark:text-white font-semibold outline-none transition-all focus:border-[#fca311] dark:focus:border-[#fca311] focus:ring-2 focus:ring-[#fca311]/25 focus:bg-white"
                        required
                      />
                    </div>
                  ))}

                  <div>
                    <label className="mb-2 block text-xs font-bold text-gray-700 dark:text-zinc-400 uppercase tracking-widest">Message</label>
                    <motion.textarea
                      whileFocus={{ scale: 1.01 }}
                      rows={4}
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project..."
                      className="w-full resize-none rounded-2xl border border-gray-200 dark:border-zinc-800 bg-gray-50 dark:bg-zinc-800/40 px-4.5 py-3.5 text-xs text-[#14213d] dark:text-white font-semibold outline-none transition-all focus:border-[#fca311] dark:focus:border-[#fca311] focus:ring-2 focus:ring-[#fca311]/25 focus:bg-white"
                      required
                    />
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    disabled={status === "loading"}
                    className="group flex w-full cursor-pointer items-center justify-center gap-2.5 rounded-2xl bg-[#14213d] dark:bg-white dark:text-[#14213d] py-4 text-xs font-extrabold text-white uppercase tracking-widest shadow-md hover:shadow-lg hover:bg-[#203158] dark:hover:bg-zinc-100 transition-all duration-300 disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    <motion.span
                      animate={status === "loading" ? { rotate: 360 } : {}}
                      transition={status === "loading" ? { repeat: Infinity, duration: 1.2, ease: "linear" } : {}}
                      className="inline-block transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                    >
                      <Send className="h-4 w-4" />
                    </motion.span>
                    <span>{status === "loading" ? "Sending..." : "Send Message"}</span>
                  </motion.button>

                  <AnimatePresence>
                    {feedback && (
                      <motion.p 
                        initial={{ opacity: 0, y: 10 }} 
                        animate={{ opacity: 1, y: 0 }} 
                        exit={{ opacity: 0 }}
                        className={`text-xs font-bold uppercase tracking-wider text-center mt-3 ${status === "success" ? "text-emerald-600" : "text-red-500"}`}
                      >
                        {feedback}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </form>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}