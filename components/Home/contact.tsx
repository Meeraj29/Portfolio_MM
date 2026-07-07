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
    <section id="contact" className="relative overflow-hidden bg-[#fafafa] px-6 py-24">
      <div className="absolute bottom-0 right-0 -z-10 h-96 w-96 rounded-full bg-[#fca311]/5 blur-3xl" />
      <div className="absolute left-0 top-12 -z-10 h-80 w-80 rounded-full bg-[#14213d]/5 blur-3xl" />

      <div className="mx-auto max-w-7xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#14213d]" style={{ fontFamily: "var(--font-display)" }}>Contact</p>
          <h2 className="mt-3 text-4xl font-bold tracking-tight text-[#14213d] md:text-5xl" style={{ fontFamily: "var(--font-display)" }}>Get In Touch</h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-[#5c5c5c]" style={{ fontFamily: "var(--font-sans)" }}>
            Have a project idea, freelance opportunity, or just want to say hello? I&apos;d love to hear from you.
          </p>
        </motion.div>

        <div className="grid items-start gap-10 lg:grid-cols-2">
          
          {/* Left Connect Card */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ type: "spring", damping: 18 }}
            className="rounded-3xl border border-[#b8b8b8]/40 bg-[#ffffff] p-8 shadow-xs md:p-10"
          >
            <h3 className="mb-4 text-2xl font-bold tracking-tight text-[#14213d] md:text-3xl" style={{ fontFamily: "var(--font-display)" }}>Let&apos;s Connect</h3>
            <p className="mb-6 leading-relaxed text-[#5c5c5c]">I usually reply within 1–2 business days.</p>

            <ul className="mb-8 space-y-3 text-sm text-[#5c5c5c]">
              {["Web development and UI/UX implementation", "Freelance collaborations and product ideas", "Mentorship, internships, and career conversations"].map((text, i) => (
                <motion.li initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }} key={i} className="flex items-start gap-2">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-[#fca311]" /> {text}
                </motion.li>
              ))}
            </ul>

            <div className="space-y-6">
              <a href={`mailto:${contactEmail}`} className="group flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#ebebeb] transition-colors duration-300 group-hover:bg-[#14213d]/10">
                  <Mail className="h-5 w-5 text-[#5c5c5c] transition-colors duration-300 group-hover:text-[#14213d]" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-[#8a8a8a]">Email</h4>
                  <p className="mt-0.5 text-base font-medium text-[#333333]">{contactEmail}</p>
                </div>
              </a>

              <a href={`tel:${contactPhone}`} className="group flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#ebebeb] transition-colors duration-300 group-hover:bg-[#14213d]/10">
                  <Phone className="h-5 w-5 text-[#5c5c5c] transition-colors duration-300 group-hover:text-[#14213d]" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-[#8a8a8a]">Phone</h4>
                  <p className="mt-0.5 text-base font-medium text-[#333333]">{contactPhone}</p>
                </div>
              </a>
            </div>

            <div className="my-8 border-t border-[#ebebeb]" />
            <h4 className="mb-4 text-lg font-semibold text-[#14213d]" style={{ fontFamily: "var(--font-display)" }}>Follow Me</h4>
            <motion.a 
              whileHover={{ scale: 1.1, rotate: 5 }} whileTap={{ scale: 0.95 }}
              href="https://github.com/Meeraj29" target="_blank" rel="noopener noreferrer"
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#b8b8b8]/60 bg-[#ffffff] text-[#5c5c5c] hover:border-[#14213d] hover:text-[#14213d] transition-colors"
            >
              <FaGithub size={18} />
            </motion.a>
          </motion.div>

          {/* Right Message Form Card */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ type: "spring", damping: 18 }}
            className="rounded-3xl border border-[#b8b8b8]/40 bg-[#ffffff] p-8 shadow-xs md:p-10"
          >
            <h3 className="mb-8 text-2xl font-bold tracking-tight text-[#14213d] md:text-3xl" style={{ fontFamily: "var(--font-display)" }}>Send Me a Message</h3>

            <form className="space-y-5" onSubmit={handleSubmit}>
              {["name", "email", "subject"].map((field) => (
                <div key={field}>
                  <label className="mb-2 block text-sm font-semibold text-[#333333] capitalize">Your {field}</label>
                  <motion.input
                    whileFocus={{ scale: 1.01 }}
                    type={field === "email" ? "email" : "text"}
                    name={field}
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    value={(formData as any)[field]}
                    onChange={handleChange}
                    placeholder={`Enter your ${field}`}
                    className="w-full rounded-xl border border-[#b8b8b8] bg-[#fafafa] px-4 py-3 text-sm text-[#14213d] outline-none transition-all focus:border-[#fca311] focus:ring-2 focus:ring-[#fca311]/20"
                    required
                  />
                </div>
              ))}

              <div>
                <label className="mb-2 block text-sm font-semibold text-[#333333]">Message</label>
                <motion.textarea
                  whileFocus={{ scale: 1.01 }}
                  rows={5}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  className="w-full resize-none rounded-xl border border-[#b8b8b8] bg-[#fafafa] px-4 py-3 text-sm text-[#14213d] outline-none transition-all focus:border-[#fca311] focus:ring-2 focus:ring-[#fca311]/20"
                  required
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={status === "loading"}
                className="flex w-full cursor-pointer items-center justify-center gap-2.5 rounded-xl bg-[#14213d] py-3.5 font-semibold text-[#ffffff] transition-colors hover:bg-[#29447e] disabled:cursor-not-allowed disabled:opacity-70"
              >
                <Send className="h-4 w-4" />
                {status === "loading" ? "Sending..." : "Send Message"}
              </motion.button>

              <AnimatePresence>
                {feedback && (
                  <motion.p 
                    initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                    className={`text-sm ${status === "success" ? "text-emerald-600" : "text-red-600"}`}
                  >
                    {feedback}
                  </motion.p>
                )}
              </AnimatePresence>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}