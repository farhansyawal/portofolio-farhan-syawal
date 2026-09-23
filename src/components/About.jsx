import React from "react";
import { motion } from "framer-motion";
import { FaCode, FaPalette, FaServer, FaLaptopCode, FaMobileAlt } from "react-icons/fa";

const skills = [
  {
    name: "React & Tailwind CSS",
    icon: <FaLaptopCode />,
    description: "Membangun antarmuka web modern yang responsif, dinamis, dan interaktif.",
  },
  {
    name: "PHP & Laravel",
    icon: <FaServer />,
    description: "Pengembangan backend, arsitektur MVC, integrasi database, dan pembuatan RESTful API.",
  },
  {
    name: "Flutter & Firebase",
    icon: <FaMobileAlt />,
    description: "Pengembangan aplikasi mobile lintas platform (Android/iOS) dengan backend real-time.",
  },
  {
    name: "Database & System Design",
    icon: <FaCode />,
    description: "Manajemen relasi data menggunakan MySQL dan implementasi sistem informasi.",
  },
  {
    name: "UI/UX & Analysis",
    icon: <FaPalette />,
    description: "Merancang pengalaman pengguna yang intuitif dan merancang alur sistem terstruktur.",
  },
];

const experience = [
  {
    title: "Freelance Web & Mobile Developer",
    period: "2023 - Sekarang",
    desc: "Membangun aplikasi web responsif dan aplikasi mobile (Android) yang terintegrasi dengan database cloud.",
  },
  {
    title: "Backend Developer Intern - Kementerian Lingkungan Hidup (KLH/BPLH)",
    period: "Oktober 2025 - Januari 2026",
    desc: "Ditempatkan di Biro Sumber Daya Manusia dan Organisasi (BSDMO). Bertanggung jawab memigrasikan layanan internal dari Google Sites ke aplikasi kustom berbasis Laravel.",
  },
];

const education = [
  {
    title: "Universitas Bina Sarana Informatika",
    degree: "S1 Teknologi Informasi",
    period: "2022 - 2026",
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
          <p className="text-gray-400 text-base mt-3 max-w-2xl mx-auto leading-relaxed">
            Fresh Graduate S1 Teknologi Informasi dari Universitas Bina Sarana Informatika yang memiliki minat kuat dan pengalaman praktis dalam pengembangan perangkat lunak. Berpengalaman sebagai Backend Developer Intern di Kementerian Lingkungan Hidup (KLH/BPLH) dalam memigrasikan layanan internal ke sistem berbasis Laravel. Terbiasa membangun aplikasi web dan mobile menggunakan Laravel, React, Tailwind CSS, dan Flutter. Memiliki kemampuan analisis logika yang solid serta fokus pada perancangan sistem digital yang efisien, fungsional, dan nyaman digunakan.
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
                className="px-4 py-1.5 text-sm font-medium text-teal-300 border border-teal-500/50 rounded-full bg-white/5 backdrop-blur hover:bg-teal-500 hover:text-white transition-all cursor-default"
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
              <h3 className="text-2xl text-teal-400 font-bold mb-6 flex items-center gap-2">
                Education
              </h3>
              {education.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="border-l-4 border-teal-500 pl-6 mb-6 relative group"
                >
                  <div className="absolute -left-[11px] top-1.5 w-4 h-4 bg-[#0f172a] border-4 border-teal-500 rounded-full group-hover:bg-teal-400 transition-colors" />
                  <h4 className="text-xl font-bold text-white">{item.title}</h4>
                  <div className="flex flex-wrap items-center gap-2 mt-1">
                    <span className="text-sm font-medium text-teal-300">{item.degree}</span>
                    <span className="text-gray-500 text-xs">•</span>
                    <span className="text-sm text-gray-400">{item.period}</span>
                  </div>
                  <p className="text-sm text-gray-300 mt-2 leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>

            <div>
              <h3 className="text-2xl text-teal-400 font-bold mb-6 flex items-center gap-2">
                Experience
              </h3>
              {experience.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="border-l-4 border-teal-500 pl-6 mb-6 relative group"
                >
                  <div className="absolute -left-[11px] top-1.5 w-4 h-4 bg-[#0f172a] border-4 border-teal-500 rounded-full group-hover:bg-teal-400 transition-colors" />
                  <h4 className="text-xl font-bold text-white leading-tight">{item.title}</h4>
                  <span className="inline-block text-sm text-teal-300 mt-1 font-medium">{item.period}</span>
                  <p className="text-sm text-gray-300 mt-2 leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Skills & Tools (Tanpa Indikator Level) */}
          <div>
            <h3 className="text-2xl text-teal-400 font-bold mb-6">
              Skills & Expertise
            </h3>
            <div className="space-y-4">
              {skills.map((skill, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ delay: idx * 0.1 }}
                  className="group p-5 bg-white/5 border border-white/5 rounded-xl shadow-lg hover:bg-white/10 hover:border-teal-500/40 transition-all duration-300"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-teal-500/10 text-teal-400 text-2xl shrink-0 group-hover:scale-110 group-hover:bg-teal-500/20 transition-all">
                      {skill.icon}
                    </div>
                    <div>
                      <p className="text-white font-semibold text-lg">{skill.name}</p>
                      <p className="text-gray-400 text-sm mt-0.5 leading-relaxed">
                        {skill.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="relative max-w-4xl mx-auto bg-white/5 border border-white/10 backdrop-blur-md px-8 py-6 rounded-xl shadow-md text-center mt-12"
        >
          <p className="text-lg italic text-gray-300">
            "Kreativitas adalah ketika teknologi dan desain bersatu untuk menyelesaikan masalah manusia."
          </p>
          <span className="block text-teal-400 mt-4 font-medium tracking-wide">
            — Farhan Syawal
          </span>
        </motion.div>
      </div>
    </section>
  );
};

export default About;