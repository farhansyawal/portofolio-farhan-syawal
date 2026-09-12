import React from "react";
import { motion } from "framer-motion";
import { FaCode, FaPalette, FaServer, FaLaptopCode } from "react-icons/fa";

const TIERS = ["Dasar", "Berkembang", "Cakap", "Mahir", "Ahli"];

const skills = [
  {
    name: "HTML/CSS",
    tier: 4,
    icon: <FaCode />,
    description: "Fondasi utama untuk membangun tampilan halaman web.",
  },
  {
    name: "JavaScript",
    tier: 2,
    icon: <FaLaptopCode />,
    description:
      "Digunakan untuk membuat website menjadi interaktif dan dinamis.",
  },
  {
    name: "React & Tailwind",
    tier: 2,
    icon: <FaLaptopCode />,
    description:
      "Membangun antarmuka modern dengan komponen dan styling cepat.",
  },
  {
    name: "PHP & Laravel",
    tier: 4,
    icon: <FaServer />,
    description: "Untuk pengembangan backend dan RESTful API modern.",
  },
  {
    name: "UI/UX Design",
    tier: 4,
    icon: <FaPalette />,
    description: "Merancang tampilan dan pengalaman pengguna yang menarik.",
  },
];

const experience = [
  {
    title: "Freelance Web Developer",
    period: "2023 - Sekarang",
    desc: "Membangun aplikasi web responsif dengan HTML, Bootstrap, dan PHP.",
  },
  {
    title: "Backend Developer Intern - Kementrian Lingkungan Hidup",
    period: "Oktober 2025 - Januari 2026",
    desc: "Membangun aplikasi web layanan pegawai dengan Laravel, Tailwind CSS, dan.",
  },
  
];

const education = [
  {
    title: "Universitas Bina Sarana Informatika",
    degree: "S1 Teknologi Informasi",
    period: "2022 - Sekarang",
    desc: "Fokus pada pengembangan aplikasi web dan teknologi interaktif.",
  },
];

const About = () => {
  return (
    <section
      id="about"
      className="scroll-mt-24 w-full min-h-screen bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white py-24 px-6"
    >
      <div className="max-w-6xl mx-auto space-y-20">
        {/* Header */}
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl font-bold text-teal-400 mb-3"
          >
            About Me
          </motion.h2>
          <p className="text-gray-400 text-base mt-3 max-w-xl mx-auto">
            Fresh Graduate Universitas Bina Sarana Informatika, berpengalaman sebagai Backend Developer Intern di Kementerian Lingkungan
Hidup / Badan Pengendalian Lingkungan Hidup. Berfokus pada pengembangan aplikasi berbasis web yang responsif dan terintegrasi
menggunakan Laravel dan Tailwind CSS. Memiliki kemampuan analisis logika backend yang solid serta terbiasa membangun sistem
digital yang efisien dan nyaman digunakan. Siap berkontribusi dalam mendukung kebutuhan pengembangan web perusahaan.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mt-6">
            {[
              "Open to Work",
              "Team Player",
              "UX Mindset",
              "Problem Solver",
              "Creative Thinker",
            ].map((badge, idx) => (
              <span
                key={idx}
                className="px-4 py-1 text-sm text-teal-300 border border-teal-500 rounded-full bg-white/5 backdrop-blur hover:bg-teal-600/20 transition"
              >
                #{badge}
              </span>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Education & Experience */}
          <div className="space-y-12">
            <div>
              <h3 className="text-xl text-teal-400 font-semibold mb-4">
                Education
              </h3>
              {education.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="border-l-4 border-teal-500 pl-6 mb-6 relative"
                >
                  <div className="absolute -left-2 top-1 w-3 h-3 bg-teal-400 rounded-full" />
                  <h4 className="text-lg font-bold">{item.title}</h4>
                  <span className="text-sm text-gray-400">{item.period}</span>
                  <p className="text-sm text-gray-300 mt-1">{item.desc}</p>
                </motion.div>
              ))}
            </div>

            <div>
              <h3 className="text-xl text-teal-400 font-semibold mb-4">
                Experience
              </h3>
              {experience.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="border-l-4 border-teal-500 pl-6 mb-6 relative"
                >
                  <div className="absolute -left-2 top-1 w-3 h-3 bg-teal-400 rounded-full" />
                  <h4 className="text-lg font-bold">{item.title}</h4>
                  <span className="text-sm text-gray-400">{item.period}</span>
                  <p className="text-sm text-gray-300 mt-1">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Skills & Tools */}
          <div className="space-y-12">
            {/* Skills */}
            <div>
              <h3 className="text-xl text-teal-400 font-semibold mb-4">
                Skills
              </h3>
              <div className="space-y-4">
                {skills.map((skill, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ delay: idx * 0.1 }}
                    className="group p-4 bg-white/5 rounded-lg shadow-lg hover:bg-white/10 transition-all duration-300"
                  >
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex items-center gap-3 min-w-0">
                        <div className="text-teal-400 text-xl shrink-0">
                          {skill.icon}
                        </div>
                        <div className="min-w-0">
                          <p className="text-white font-medium">{skill.name}</p>
                          <p className="text-gray-400 text-xs truncate">
                            {skill.description}
                          </p>
                        </div>
                      </div>

                      <div className="shrink-0 text-right">
                        <span className="text-[11px] font-semibold text-teal-300 uppercase tracking-wide">
                          {TIERS[skill.tier - 1]}
                        </span>
                        <div className="flex items-center gap-1.5 mt-1.5">
                          {TIERS.map((_, dotIdx) => (
                            <motion.span
                              key={dotIdx}
                              initial={{ scale: 0 }}
                              whileInView={{ scale: 1 }}
                              viewport={{ once: false }}
                              transition={{
                                delay: idx * 0.1 + dotIdx * 0.05,
                                duration: 0.25,
                              }}
                              className={`w-2 h-2 rounded-full ${
                                dotIdx < skill.tier
                                  ? "bg-teal-400"
                                  : "bg-gray-700"
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="relative max-w-4xl mx-auto bg-white/5 border border-white/10 backdrop-blur-md px-8 py-6 rounded-xl shadow-md text-center"
        >
          <p className="text-lg italic text-gray-300">
            "Kreativitas adalah ketika teknologi dan desain bersatu untuk
            menyelesaikan masalah manusia."
          </p>
          <span className="block text-teal-400 mt-4 font-medium">
            — Farhan Syawaludin
          </span>
        </motion.div>
      </div>
    </section>
  );
};

export default About;