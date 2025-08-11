import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaCode, FaPalette, FaServer, FaLaptopCode } from "react-icons/fa";

const skills = [
  {
    name: "HTML/CSS",
    level: 70,
    icon: <FaCode />,
    description: "Fondasi utama untuk membangun tampilan halaman web.",
  },
  {
    name: "JavaScript",
    level: 85,
    icon: <FaLaptopCode />,
    description:
      "Digunakan untuk membuat website menjadi interaktif dan dinamis.",
  },
  {
    name: "React & Tailwind",
    level: 90,
    icon: <FaLaptopCode />,
    description:
      "Membangun antarmuka modern dengan komponen dan styling cepat.",
  },
  {
    name: "PHP & Laravel",
    level: 75,
    icon: <FaServer />,
    description: "Untuk pengembangan backend dan RESTful API modern.",
  },
  {
    name: "UI/UX Design",
    level: 80,
    icon: <FaPalette />,
    description: "Merancang tampilan dan pengalaman pengguna yang menarik.",
  },
];

const tools = ["VS Code", "Figma", "GitHub", "Postman", "MySQL", "Trello"];

const experience = [
  {
    title: "Freelance Web Developer",
    period: "2023 - Sekarang",
    desc: "Membangun aplikasi web responsif dengan HTML, Bootstrap, dan PHP.",
  },
  {
    title: "Freelance UI/UX Designer",
    period: "2024 - Sekarang",
    desc: "Merancang antarmuka intuitif dengan Figma dan usability testing.",
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
  const [refTools, inViewTools] = useInView({
    threshold: 0.2,
    triggerOnce: false,
  });

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
            Mahasiswa TI yang berfokus pada teknologi web, antarmuka interaktif,
            dan pengembangan aplikasi modern.
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
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="text-teal-400 text-xl">
                          {skill.icon}
                        </div>
                        <div>
                          <p className="text-white font-medium">{skill.name}</p>
                          <p className="text-gray-400 text-xs">
                            {skill.description}
                          </p>
                        </div>
                      </div>
                      <span className="text-sm text-teal-300">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2 mt-3 overflow-hidden">
                      <motion.div
                        className="h-2 bg-teal-400 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: false }}
                        transition={{ duration: 1 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Tools */}
            <div ref={refTools}>
              <h3 className="text-xl text-teal-400 font-semibold mb-4">
                Tools
              </h3>
              <div className="flex flex-wrap gap-3 justify-start">
                {tools.map((tool, idx) => (
                  <motion.span
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    animate={inViewTools ? { opacity: 1, y: 0 } : {}}
                    transition={{
                      delay: idx * 0.1,
                      duration: 0.4,
                      ease: "easeOut",
                    }}
                    whileHover={{
                      scale: 1.15,
                      rotate: [0, 2, -2, 0],
                      transition: { duration: 0.3 },
                    }}
                    className="px-4 py-1 text-sm border border-teal-500 rounded-full text-teal-300 bg-white/5 shadow-md cursor-default transition-all"
                  >
                    {tool}
                  </motion.span>
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
