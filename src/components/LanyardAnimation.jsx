import React from "react";
import { motion } from "framer-motion";

const swingAnimation = {
  animate: {
    rotate: [0, 2, -2, 2, -2, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const LanyardAnimation = () => {
  return (
    <motion.div
      variants={swingAnimation}
      animate="animate"
      drag
      dragConstraints={{ left: -100, right: 100, top: -50, bottom: 50 }}
      dragElastic={0.5}
      dragTransition={{ bounceStiffness: 600, bounceDamping: 15 }}
      className="flex flex-col items-center max-w-full overflow-hidden cursor-grab active:cursor-grabbing"
    >
      {/* Tali Melengkung Atas */}
      <svg
        width="60"
        height="40"
        viewBox="0 0 100 60"
        className="mb-0"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10 0 C10 40, 90 40, 90 0"
          stroke="#94a3b8"
          strokeWidth="4"
          fill="none"
          strokeLinecap="round"
        />
      </svg>

      {/* Tali Panjang */}
      <div className="w-1 h-20 bg-gray-500 mb-2 rounded-full"></div>

      {/* ID Card */}
      <div className="relative w-64 h-84 bg-gradient-to-br from-[#1e293b] to-[#0f172a] rounded-2xl shadow-2xl border border-gray-700 px-5 py-6 flex flex-col items-center justify-between">
        {/* Foto Profil */}
        <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-teal-500 shadow-md">
          <img
            src="/farhan.webp"
            alt="Farhan"
            width={96}
            height={96}
            loading="eager"
            decoding="async"
            fetchpriority="high"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Nama dan Deskripsi */}
        <div className="text-center mt-4">
          <h2 className="text-xl font-bold text-white">Farhan Syawaludin</h2>
          <p className="text-sm text-gray-300">Junior Web Developer</p>
          <p className="text-xs text-gray-400 mt-1">BSI University</p>
        </div>

        {/* Garis Pemisah */}
        <div className="w-full my-3 border-t border-dashed border-gray-500"></div>

        {/* QR Code */}
        <div className="flex flex-col items-center">
          <img
            src="https://api.qrserver.com/v1/create-qr-code/?size=80x80&data=https://instagram.com/farhansawal22_"
            alt="QR Code"
            width={80}
            height={80}
            loading="lazy"
            decoding="async"
            className="rounded-lg shadow-md"
          />
          <p className="text-xs text-gray-500 mt-1">Scan untuk lihat profil</p>
        </div>
      </div>
    </motion.div>
  );
};

export default LanyardAnimation;