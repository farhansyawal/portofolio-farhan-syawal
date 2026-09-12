import React from "react";
import { motion } from "framer-motion";
import FadeInSection from "./FadeInSection";
import LanyardAnimation from "./LanyardAnimation";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
} from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

const techStack = [
  { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400" /> },
  { name: "React", icon: <FaReact className="text-cyan-400" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
];

const Hero = () => {
  return (
    <FadeInSection>
      <section
        id="home"
        className="min-h-screen pt-20 bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white flex items-center justify-center px-4 pb-16"
      >
        <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Kiri: Teks & Tech Stack */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-left px-4 sm:px-6 md:px-0 overflow-hidden w-full"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight mb-4">
              Halo, saya <span className="text-teal-400">Farhan Syawaludin</span>
            </h1>
            <p className="text-base md:text-lg text-gray-300 mb-6">
              Junior Web Developer | UI/UX Enthusiast | Student at Bina Sarana Informatika
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-10">
              <a
                href="#projects"
                className="px-6 py-3 rounded-lg border border-teal-500 text-white font-semibold hover:bg-teal-600 transition duration-300"
              >
                Download CV
              </a>
              <a
                href="#projects"
                className="px-6 py-3 rounded-lg bg-teal-500 text-white font-semibold hover:bg-teal-600 transition duration-300"
              >
                Lihat Proyek Saya
              </a>
            </div>

            {/* Tech Stack - Animasi Berjalan (Infinite Marquee) */}
            <div className="mt-8 relative w-full overflow-hidden 
              before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-12 before:bg-gradient-to-r before:from-[#0f172a] before:to-transparent 
              after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-12 after:bg-gradient-to-l after:from-[#1e293b] after:to-transparent">
              
              <motion.div
                className="flex w-max gap-4 py-2"
                animate={{ x: ["0%", "-50%"] }}
                transition={{
                  ease: "linear",
                  duration: 20, // Semakin besar angka, semakin lambat bergeraknya
                  repeat: Infinity,
                }}
              >
                {/* Datanya di-map dua kali agar sambungannya terlihat mulus (tidak putus) */}
                {[...techStack, ...techStack].map((tech, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 px-5 py-3 bg-white/10 rounded-lg backdrop-blur-sm border border-white/5 whitespace-nowrap hover:bg-white/20 transition-colors"
                  >
                    <div className="text-2xl">{tech.icon}</div>
                    <p className="text-sm font-medium text-gray-200">{tech.name}</p>
                  </div>
                ))}
              </motion.div>
            </div>
          </motion.div>

          {/* Kanan: Lanyard Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center md:justify-end w-full"
          >
            <div className="w-full max-w-[280px] sm:max-w-[320px] md:max-w-[400px] lg:max-w-[500px]">
              <LanyardAnimation />
            </div>
          </motion.div>
        </div>
      </section>
    </FadeInSection>
  );
};

export default Hero;