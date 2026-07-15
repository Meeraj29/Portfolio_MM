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
    <section id="education" className="bg-[#ffffff] py-28 relative overflow-hidden">
      {/* Accent Background Highlights */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-blue-500/5 blur-[120px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center space-y-3"
        >
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#14213d]" style={{ fontFamily: "var(--font-display)" }}>
            Education
          </p>
          <h2 className="text-4xl font-black text-[#14213d] md:text-5xl tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
            Education & Qualifications
          </h2>
          <p className="text-base leading-relaxed text-gray-500 font-medium max-w-2xl mx-auto" style={{ fontFamily: "var(--font-sans)" }}>
            My academic journey has equipped me with a solid foundation in technology, problem-solving, and software development while continuously encouraging lifelong learning.
          </p>
        </motion.div>

        {/* Milestone Timeline Grid */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.12 } }
          }}
          className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {education.map((item) => (
            <motion.div
              key={item.level}
              variants={{ hidden: { opacity: 0, y: 25 }, visible: { opacity: 1, y: 0, transition: { type: "spring", damping: 15 } } }}
              whileHover={{ y: -6, borderColor: "#14213d", boxShadow: "0_20px_40px_-15px_rgba(20,33,61,0.08)" }}
              className="group relative rounded-3xl border border-gray-200/60 bg-white p-8 transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-xs"
            >
              {/* Dynamic top expanding border */}
              <div className="absolute inset-x-0 top-0 h-1 scale-x-0 bg-gradient-to-r from-[#14213d] to-[#fca311] transition-transform duration-500 group-hover:scale-x-100" />
              
              {/* Card Dotted Grid Accent */}
              <div className="absolute right-4 top-4 bg-[radial-gradient(#00000008_1px,transparent_1px)] [background-size:8px_8px] h-12 w-12 rounded-full pointer-events-none" />

              <div>
                {/* Cap Icon Wrapper */}
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-gray-50 border border-gray-100 transition-all duration-300 group-hover:bg-[#14213d] group-hover:border-[#14213d]">
                  <GraduationCap className="h-5 w-5 text-[#14213d] transition-colors duration-300 group-hover:text-white" />
                </div>

                {/* Level Title */}
                <h3 className="text-lg font-black text-[#14213d] leading-snug tracking-tight group-hover:text-[#fca311] transition-colors duration-300" style={{ fontFamily: "var(--font-display)" }}>
                  {item.level}
                </h3>

                {/* Details Column */}
                <div className="mt-6 space-y-4 text-xs text-gray-500 font-medium">
                  <div className="flex items-start gap-3">
                    <Landmark className="mt-0.5 h-4 w-4 shrink-0 text-gray-400 group-hover:text-gray-600 transition-colors" />
                    <div>
                      <p className="font-bold text-gray-700">{item.school}</p>
                      <p className="text-[10px] text-gray-400 mt-0.5 leading-relaxed">{item.board}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <MapPin className="h-4 w-4 shrink-0 text-gray-400 group-hover:text-gray-600 transition-colors" />
                    <p className="font-semibold text-gray-600">{item.location}</p>
                  </div>
                </div>
              </div>

              {/* Grade Banner */}
              <div className="mt-6 pt-4 border-t border-gray-50 flex items-center gap-3">
                <Award className="h-4 w-4 shrink-0 text-[#fca311]" />
                <p className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                  Result: <span className="text-[#14213d] font-black">{item.grade}</span>
                </p>
              </div>

            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}