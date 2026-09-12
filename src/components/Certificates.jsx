import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FadeInWhenVisible from "../components/FadeInWhenVisible";
import Modal from "../components/Modal"; // Pastikan kamu punya file Modal.jsx

const certificates = [
  {
    title: "Introduction to Cybersecurity",
    issuer: "Cisco Networking Academy",
    year: "2024",
    image: "/sertifikat/cybersecurity.jpg",
  },
  {
    title: "Sistem Basis Data",
    issuer: "PT Zahir Internasional",
    year: "2024",
    image: "/sertifikat/sbd.jpg",
  },
  {
    title: "Programming Essentials in Python",
    issuer: "Python Institute",
    year: "2023",
    image: "/sertifikat/python.jpg",
  },
];

const SWIPE_THRESHOLD = 10000;
const swipePower = (offset, velocity) => Math.abs(offset) * velocity;

function SearchIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4">
      <circle cx="11" cy="11" r="7" />
      <path strokeLinecap="round" d="M21 21l-4.35-4.35" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} className="w-4 h-4">
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}

function ChevronIcon({ direction = "right", className = "w-5 h-5" }) {
  const d =
    direction === "left" ? "M15.75 19.5L8.25 12l7.5-7.5" : "M8.25 4.5l7.5 7.5-7.5 7.5";
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d={d} />
    </svg>
  );
}

// Bingkai sudut ala tanda "scan/verifikasi", jadi ciri khas kartu kredensial.
function CornerFrame() {
  const base = "absolute w-4 h-4 border-teal-400/60 transition-colors duration-300";
  return (
    <>
      <span className={`${base} top-3 left-3 border-t-2 border-l-2`} />
      <span className={`${base} top-3 right-3 border-t-2 border-r-2`} />
      <span className={`${base} bottom-3 left-3 border-b-2 border-l-2`} />
      <span className={`${base} bottom-3 right-3 border-b-2 border-r-2`} />
    </>
  );
}

const stackVariants = {
  enter: (direction) => ({ x: direction > 0 ? 260 : -260, opacity: 0, rotate: direction > 0 ? 8 : -8 }),
  center: { x: 0, opacity: 1, rotate: 0 },
  exit: (direction) => ({ x: direction > 0 ? -260 : 260, opacity: 0, rotate: direction > 0 ? -8 : 8 }),
};

const Certificates = () => {
  const [[page, direction], setPage] = useState([0, 0]);
  const [selectedCert, setSelectedCert] = useState(null);

  const total = certificates.length;
  const activeIndex = ((page % total) + total) % total;
  const peekIndex1 = (activeIndex + 1) % total;
  const peekIndex2 = (activeIndex + 2) % total;
  const active = certificates[activeIndex];

  const paginate = (dir) => setPage([page + dir, dir]);
  const goTo = (idx) => setPage([idx, idx > activeIndex ? 1 : -1]);

  return (
    <FadeInWhenVisible>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600&display=swap');
        .font-display { font-family: 'Space Grotesk', ui-sans-serif, sans-serif; }
        .font-body { font-family: 'Inter', ui-sans-serif, sans-serif; }
      `}</style>

      <section
        id="certificates"
        className="font-body scroll-mt-24 w-full min-h-screen bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white py-24 px-6"
      >
        <div className="max-w-6xl mx-auto text-center">
          <p className="font-display text-xs font-semibold tracking-[0.2em] text-teal-400 uppercase mb-4">
            Kredensial
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-white tracking-tight mb-4">
            Sertifikat &amp; Pencapaian
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto leading-relaxed mb-16">
            Pelatihan dan sertifikasi yang telah saya selesaikan. Geser
            tumpukan kartu untuk melihat satu per satu.
          </p>

          {/* Tumpukan kartu sertifikat yang bisa digeser */}
          <div className="relative max-w-sm mx-auto h-[440px] sm:h-[460px]">
            {/* Kartu peek paling belakang */}
            <div
              className="absolute inset-0 rounded-2xl overflow-hidden border border-white/10 pointer-events-none"
              style={{
                transform: "translateY(10px) rotate(6deg) scale(0.92)",
                opacity: 0.35,
                zIndex: 0,
              }}
            >
              <img src={certificates[peekIndex2].image} alt="" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-[#0f172a]/70" />
            </div>

            {/* Kartu peek tengah */}
            <div
              className="absolute inset-0 rounded-2xl overflow-hidden border border-white/10 pointer-events-none"
              style={{
                transform: "translateY(5px) rotate(-4deg) scale(0.96)",
                opacity: 0.6,
                zIndex: 1,
              }}
            >
              <img src={certificates[peekIndex1].image} alt="" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-[#0f172a]/50" />
            </div>

            {/* Kartu depan, aktif & bisa digeser */}
            <AnimatePresence initial={false} custom={direction} mode="popLayout">
              <motion.div
                key={page}
                custom={direction}
                variants={stackVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  rotate: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.8}
                onDragEnd={(e, { offset, velocity }) => {
                  const power = swipePower(offset.x, velocity.x);
                  if (power < -SWIPE_THRESHOLD) paginate(1);
                  else if (power > SWIPE_THRESHOLD) paginate(-1);
                }}
                className="absolute inset-0 z-10 flex flex-col rounded-2xl overflow-hidden border border-white/10 bg-[#141b29] shadow-2xl cursor-grab active:cursor-grabbing"
              >
                <div
                  className="group relative flex-1 min-h-0 bg-black/20"
                  onClick={() => setSelectedCert(active)}
                >
                  <img
                    src={active.image}
                    alt={active.title}
                    draggable={false}
                    className="w-full h-full object-cover pointer-events-none select-none"
                  />
                  <CornerFrame />

                  <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-[#0f172a]/80 border border-teal-400/40 flex items-center justify-center backdrop-blur-sm text-teal-400">
                    <CheckIcon />
                  </div>

                  <div className="absolute inset-0 bg-black/0 hover:bg-black/40 transition-colors duration-300 flex items-center justify-center opacity-0 hover:opacity-100">
                    <span className="inline-flex items-center gap-1.5 text-xs font-medium bg-teal-500 text-[#0f172a] px-3.5 py-1.5 rounded-full shadow-md pointer-events-none">
                      <SearchIcon />
                      Lihat Sertifikat
                    </span>
                  </div>
                </div>

                <div className="p-5 flex-shrink-0 text-left">
                  <span className="font-display text-[11px] tracking-widest text-teal-400/80 uppercase">
                    {active.year}
                  </span>
                  <h3 className="font-display text-lg font-semibold text-white mt-1.5 mb-1 leading-snug">
                    {active.title}
                  </h3>
                  <p className="text-sm text-slate-400">{active.issuer}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Kontrol navigasi: panah + indikator dalam satu baris */}
          <div className="flex items-center justify-center gap-4 mt-10">
            <button
              onClick={() => paginate(-1)}
              aria-label="Sertifikat sebelumnya"
              className="flex items-center justify-center w-9 h-9 rounded-full bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:border-teal-400/50 hover:bg-white/10 transition-colors"
            >
              <ChevronIcon direction="left" className="w-4 h-4" />
            </button>

            <div className="flex gap-2">
              {certificates.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => goTo(idx)}
                  aria-label={`Ke sertifikat ${idx + 1}`}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    idx === activeIndex ? "w-6 bg-teal-400" : "w-1.5 bg-slate-600 hover:bg-slate-400"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={() => paginate(1)}
              aria-label="Sertifikat berikutnya"
              className="flex items-center justify-center w-9 h-9 rounded-full bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:border-teal-400/50 hover:bg-white/10 transition-colors"
            >
              <ChevronIcon direction="right" className="w-4 h-4" />
            </button>
          </div>

          <p className="text-center text-xs text-slate-500 mt-4 sm:hidden">
            ← geser kartu untuk melihat sertifikat lainnya →
          </p>
        </div>

        {/* Modal detail sertifikat */}
        {selectedCert && (
          <Modal onClose={() => setSelectedCert(null)}>
            <div className="font-body w-full max-w-2xl mx-auto bg-[#121a2b] rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              <div className="bg-black/30 flex items-center justify-center p-6">
                <img
                  src={selectedCert.image}
                  alt={selectedCert.title}
                  className="max-w-full max-h-[65vh] object-contain rounded-md border border-white/10"
                />
              </div>
              <div className="p-6 border-t border-white/5 text-left">
                <span className="font-display text-xs font-medium tracking-widest text-teal-400 uppercase">
                  {selectedCert.year}
                </span>
                <h3 className="font-display text-xl font-semibold text-white mt-1.5">
                  {selectedCert.title}
                </h3>
                <p className="text-sm text-slate-400 mt-1">
                  Diterbitkan oleh {selectedCert.issuer}
                </p>
              </div>
            </div>
          </Modal>
        )}
      </section>
    </FadeInWhenVisible>
  );
};

export default Certificates;