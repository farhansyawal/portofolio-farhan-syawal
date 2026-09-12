import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FadeInWhenVisible from "./FadeInWhenVisible";
import Modal from "./Modal"; // Pastikan file Modal.jsx tersedia

const projects = [
  {
    title: "Aplikasi Listrik Pascabayar",
    description:
      "Aplikasi berbasis web untuk memudahkan pembayaran listrik pascabayar secara online. Dibangun menggunakan Laravel dan Bootstrap.",
    technologies: ["Laravel", "Bootstrap", "MySQL"],
    images: [
      "/images/listrik/5.PNG",
      "/images/listrik/1.PNG",
      "/images/listrik/2.PNG",
      "/images/listrik/3.PNG",
      "/images/listrik/4.PNG",
    ],
  },
  
  {
    title: "Portfolio Website",
    description:
      "Situs web pribadi yang menampilkan informasi tentang saya, proyek, dan pengalaman. Dibuat dengan React dan Tailwind CSS.",
    technologies: ["React", "Tailwind", "Framer Motion"],
    images: [
      "/images/portofolio/1.PNG",
      "/images/portofolio/2.PNG",
      "/images/portofolio/3.PNG",
      "/images/portofolio/4.PNG",
    ],
  },
  {
    title: "SIMRS Pro",
    description:
      "Sistem informasi manajemen rumah sakit untuk mengelola data pasien, rekam medis, dan jadwal layanan secara terintegrasi.",
    technologies: ["Laravel 12", "Tailwind CSS"],
    images: [
      "/images/simrs/1.PNG",
      "/images/simrs/2.PNG",
      "/images/simrs/3.PNG",
      "/images/simrs/4.PNG",
    ],
  },
  {
    title: "KEMENTRIAN LINGKUNGAN HIDUP - BIRO SDMO",
    description:
      "Sistem informasi manajemen Biro SDMO mengelola layanan secara terintegrasi.",
    technologies: ["Laravel 12", "Tailwind CSS"],
    images: [
      "/images/bsdmo/1.PNG",
      "/images/bsdmo/2.PNG",
      "/images/bsdmo/3.PNG",
      "/images/bsdmo/4.PNG",
    ],
  },
];

const SWIPE_THRESHOLD = 10000;
const swipePower = (offset, velocity) => Math.abs(offset) * velocity;

function ChevronIcon({ direction = "right", className = "w-5 h-5" }) {
  const d =
    direction === "left"
      ? "M15.75 19.5L8.25 12l7.5-7.5"
      : "M8.25 4.5l7.5 7.5-7.5 7.5";
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={className}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d={d} />
    </svg>
  );
}

function ArrowUpRightIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      className="w-4 h-4"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M7 17L17 7M7 7h10v10"
      />
    </svg>
  );
}

const slideVariants = {
  enter: (direction) => ({ x: direction > 0 ? 80 : -80, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (direction) => ({ x: direction > 0 ? -80 : 80, opacity: 0 }),
};

export default function Projects() {
  const [[page, direction], setPage] = useState([0, 0]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const total = projects.length;
  const activeIndex = ((page % total) + total) % total;
  const activeProject = projects[activeIndex];

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };

  const goTo = (index) => {
    setPage([index, index > activeIndex ? 1 : -1]);
  };

  const handleOpenModal = (project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
  };

  const nextImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % selectedProject.images.length);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) =>
      prev === 0 ? selectedProject.images.length - 1 : prev - 1,
    );
  };

  return (
    <FadeInWhenVisible>
      {/* Pasangan tipografi: Space Grotesk untuk judul & angka, Inter untuk teks isi */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600&display=swap');
        .font-display { font-family: 'Space Grotesk', ui-sans-serif, sans-serif; }
        .font-body { font-family: 'Inter', ui-sans-serif, sans-serif; }
      `}</style>

      <section
        id="projects"
        className="font-body scroll-mt-24 w-full min-h-screen bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white py-24 px-6"
      >
        <div className="max-w-5xl mx-auto">
          {/* Header section */}
          <div className="mb-14 md:mb-16">
            <p className="font-display text-xs font-semibold tracking-[0.2em] text-teal-400 uppercase mb-4">
              Karya Terpilih
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-white tracking-tight mb-4">
              Proyek yang Pernah Saya Bangun
            </h2>
            <p className="text-slate-400 max-w-xl leading-relaxed">
              Sebagian proyek yang mencerminkan proses kerja saya, mulai dari
              perencanaan sistem hingga implementasi antarmuka.
            </p>
          </div>

          {/* Carousel proyek yang bisa digeser */}
          <div className="relative">
            <div className="relative overflow-hidden">
              <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.div
                  key={page}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 32 },
                    opacity: { duration: 0.2 },
                  }}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.7}
                  onDragEnd={(e, { offset, velocity }) => {
                    const power = swipePower(offset.x, velocity.x);
                    if (power < -SWIPE_THRESHOLD) paginate(1);
                    else if (power > SWIPE_THRESHOLD) paginate(-1);
                  }}
                  className="cursor-grab active:cursor-grabbing py-6 md:py-8"
                >
                  <div className="grid md:grid-cols-12 gap-8 md:gap-14 items-center">
                    <div
                      className={`md:col-span-5 ${
                        activeIndex % 2 === 1 ? "md:order-2" : "md:order-1"
                      }`}
                    >
                      <span className="font-display text-sm text-slate-600">
                        {String(activeIndex + 1).padStart(2, "0")} /{" "}
                        {String(total).padStart(2, "0")}
                      </span>
                      <h3 className="font-display text-2xl md:text-[1.7rem] font-semibold text-white mt-2 mb-3">
                        {activeProject.title}
                      </h3>
                      <p className="text-slate-400 text-sm leading-relaxed mb-5">
                        {activeProject.description}
                      </p>
                      <p className="text-xs text-slate-500 tracking-wide mb-6">
                        {activeProject.technologies
                          .filter(Boolean)
                          .join("  ·  ")}
                      </p>
                      <button
                        onClick={() => handleOpenModal(activeProject)}
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-teal-400 hover:gap-2.5 transition-all duration-300"
                      >
                        Lihat detail proyek
                        <ArrowUpRightIcon />
                      </button>
                    </div>

                    <div
                      className={`md:col-span-7 ${
                        activeIndex % 2 === 1 ? "md:order-1" : "md:order-2"
                      }`}
                    >
                      <div
                        onClick={() => handleOpenModal(activeProject)}
                        className="relative rounded-lg overflow-hidden border border-white/10 cursor-pointer aspect-[16/10] bg-black/20"
                      >
                        <img
                          src={activeProject.images[0]}
                          alt={activeProject.title}
                          draggable={false}
                          className="w-full h-full object-contain pointer-events-none select-none"
                        />
                        {activeProject.images.length > 1 && (
                          <span className="absolute bottom-3 right-3 font-display text-[11px] tracking-wide bg-black/60 text-slate-200 px-2.5 py-1 rounded-full backdrop-blur-sm">
                            {activeProject.images.length} tampilan
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Panah navigasi */}
            <button
              onClick={() => paginate(-1)}
              aria-label="Proyek sebelumnya"
              className="hidden sm:flex absolute -left-4 md:-left-14 top-1/2 -translate-y-1/2 items-center justify-center w-10 h-10 rounded-full bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:border-teal-400/50 hover:bg-white/10 transition-colors z-10"
            >
              <ChevronIcon direction="left" className="w-5 h-5" />
            </button>
            <button
              onClick={() => paginate(1)}
              aria-label="Proyek berikutnya"
              className="hidden sm:flex absolute -right-4 md:-right-14 top-1/2 -translate-y-1/2 items-center justify-center w-10 h-10 rounded-full bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:border-teal-400/50 hover:bg-white/10 transition-colors z-10"
            >
              <ChevronIcon direction="right" className="w-5 h-5" />
            </button>

            {/* Indikator titik */}
            <div className="flex items-center justify-center gap-2 mt-10">
              {projects.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => goTo(idx)}
                  aria-label={`Ke proyek ${idx + 1}`}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    idx === activeIndex
                      ? "w-6 bg-teal-400"
                      : "w-1.5 bg-slate-600 hover:bg-slate-400"
                  }`}
                />
              ))}
            </div>

            <p className="text-center text-xs text-slate-500 mt-4 sm:hidden">
              ← geser untuk melihat proyek lainnya →
            </p>
          </div>
        </div>

        {/* Modal: tampilan studi kasus, gambar juga bisa digeser */}
        {selectedProject && (
          <Modal onClose={() => setSelectedProject(null)}>
            <div className="font-body w-full max-w-4xl mx-auto bg-[#121a2b] rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              <div className="flex items-start justify-between gap-6 p-6 md:p-8 border-b border-white/5">
                <div className="min-w-0">
                  <span className="font-display text-xs font-medium text-teal-400 tracking-wide">
                    {String(currentImageIndex + 1).padStart(2, "0")} /{" "}
                    {String(selectedProject.images.length).padStart(2, "0")}
                  </span>
                  <h3 className="font-display text-2xl font-semibold text-white mt-1">
                    {selectedProject.title}
                  </h3>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {selectedProject.technologies
                      .filter(Boolean)
                      .map((tech, i) => (
                        <span
                          key={i}
                          className="text-[11px] tracking-wide border border-white/10 bg-white/5 text-slate-300 px-2.5 py-1 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                  </div>
                </div>
              </div>

              <div className="relative bg-black/30 flex items-center justify-center min-h-[280px] overflow-hidden">
                {selectedProject.images.length > 1 && (
                  <button
                    onClick={prevImage}
                    aria-label="Gambar sebelumnya"
                    className="absolute left-3 md:left-5 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2.5 rounded-full hover:bg-teal-500 hover:text-[#0f172a] transition-colors shadow-lg z-10"
                  >
                    <ChevronIcon direction="left" className="w-5 h-5" />
                  </button>
                )}

                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentImageIndex}
                    initial={{ opacity: 0, x: 14 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -14 }}
                    transition={{ duration: 0.25 }}
                    drag={selectedProject.images.length > 1 ? "x" : false}
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={0.7}
                    onDragEnd={(e, info) => {
                      if (info.offset.x < -60) nextImage(e);
                      else if (info.offset.x > 60) prevImage(e);
                    }}
                    src={selectedProject.images[currentImageIndex]}
                    alt={`${selectedProject.title} tampilan ${currentImageIndex + 1}`}
                    className="max-w-full max-h-[60vh] object-contain mx-auto cursor-grab active:cursor-grabbing"
                  />
                </AnimatePresence>

                {selectedProject.images.length > 1 && (
                  <button
                    onClick={nextImage}
                    aria-label="Gambar berikutnya"
                    className="absolute right-3 md:right-5 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2.5 rounded-full hover:bg-teal-500 hover:text-[#0f172a] transition-colors shadow-lg z-10"
                  >
                    <ChevronIcon direction="right" className="w-5 h-5" />
                  </button>
                )}
              </div>

              {selectedProject.images.length > 1 && (
                <div className="flex gap-2 p-4 overflow-x-auto border-t border-white/5">
                  {selectedProject.images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={(e) => {
                        e.stopPropagation();
                        setCurrentImageIndex(idx);
                      }}
                      className={`flex-shrink-0 w-20 h-14 rounded-md overflow-hidden border-2 transition-colors ${
                        idx === currentImageIndex
                          ? "border-teal-400"
                          : "border-transparent opacity-50 hover:opacity-90"
                      }`}
                    >
                      <img
                        src={img}
                        alt={`Thumbnail ${idx + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}

              <div className="p-6 md:p-8 pt-5">
                <p className="text-slate-400 text-sm leading-relaxed">
                  {selectedProject.description}
                </p>
              </div>
            </div>
          </Modal>
        )}
      </section>
    </FadeInWhenVisible>
  );
}
