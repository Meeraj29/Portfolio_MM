"use client";

import { GraduationCap, Landmark, MapPin, Award } from "lucide-react";
import { motion } from "framer-motion";

const education = [
  {
    level: "B.E. Computer Science & Engineering",
    school: "BITM",
    board: "Visvesvaraya Technological University (VTU)",
    location: "Ballari, Karnataka",
    grade: "CGPA: 8.8 / 10",
  },
  {
    level: "Pre-University – Science",
    school: "Sri Vidyaniketan PU College",
    board: "Karnataka State Board",
    location: "Gangavathi, Karnataka",
    grade: "88%",
  },
  {
    level: "SSLC",
    school: "Bethal High School",
    board: "Karnataka State Board",
    location: "Ballari, Karnataka",
    grade: "82%",
  },
];

export default function Education() {
  return (
    <section id="education" className="bg-[#ffffff] py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#14213d]" style={{ fontFamily: "var(--font-display)" }}>
            Education
          </p>
          <h2 className="mt-3 text-4xl font-bold text-[#14213d] md:text-5xl" style={{ fontFamily: "var(--font-display)" }}>
            Education & Qualifications
          </h2>
          <p className="mt-6 text-lg leading-8 text-[#5c5c5c]" style={{ fontFamily: "var(--font-sans)" }}>
            My academic journey has equipped me with a solid foundation in technology, problem-solving, and software development while continuously encouraging lifelong learning.
          </p>
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
          }}
          className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {education.map((item) => (
            <motion.div
              key={item.level}
              variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { type: "spring", damping: 16 } } }}
              whileHover={{ y: -6, border: "1px solid #14213d", boxShadow: "0_20px_40px_-15px_rgba(20,33,61,0.12)" }}
              className="group relative rounded-2xl border border-[#b8b8b8]/40 bg-linear-to-b from-[#ffffff] to-[#fafafa] p-8 shadow-xs transition-all duration-300"
            >
              {/* Dynamic top expanding line mapping layout hover scales */}
              <motion.div className="absolute inset-x-0 top-0 h-1 scale-x-0 rounded-t-2xl bg-linear-to-r from-[#14213d] to-[#fca311] transition-transform duration-300 group-hover:scale-x-100" />

              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-[#ebebeb] transition-colors duration-300 group-hover:bg-[#14213d]">
                <GraduationCap className="h-6 w-6 text-[#14213d] transition-colors duration-300 group-hover:text-white" />
              </div>

              <h3 className="text-xl font-bold text-[#14213d] transition-colors duration-300 group-hover:text-[#fca311]" style={{ fontFamily: "var(--font-display)" }}>
                {item.level}
              </h3>

              <div className="mt-6 space-y-4 text-sm text-[#5c5c5c]">
                <div className="flex items-start gap-3">
                  <Landmark className="mt-0.5 h-4 w-4 shrink-0 text-[#8a8a8a] group-hover:text-[#333333]" />
                  <div>
                    <p className="font-semibold text-[#333333]">{item.school}</p>
                    <p className="text-xs text-[#8a8a8a] mt-0.5">{item.board}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <MapPin className="h-4 w-4 shrink-0 text-[#8a8a8a] group-hover:text-[#333333]" />
                  <p className="text-[#5c5c5c]">{item.location}</p>
                </div>

                <div className="flex items-center gap-3 pt-2 border-t border-[#ebebeb]">
                  <Award className="h-4 w-4 shrink-0 text-[#fca311]" />
                  <p className="font-medium text-[#14213d]">
                    Grade: <span className="text-[#fca311] font-semibold">{item.grade}</span>
                  </p>
                </div>
              </div>

            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}