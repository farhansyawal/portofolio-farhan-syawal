import React from 'react';
import { Facebook, Twitter, Instagram, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo & Deskripsi */}
        <div>
          <h2 className="text-2xl font-bold text-teal-400 mb-4">FarhanDev</h2>
          <p className="text-sm leading-relaxed">
            Junior Web Developer | UI/UX Enthusiast | Student at Bina Sarana Informatika
          </p>
        </div>

        {/* Navigasi */}
        <div>
          <h3 className="text-teal-400 font-semibold mb-4">Navigasi</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:underline">Beranda</a></li>
            <li><a href="/jadwal" className="hover:underline">About</a></li>
            <li><a href="/proyek" className="hover:underline">Project</a></li>
            <li><a href="/sertifikat" className="hover:underline">Certificate</a></li>
            <li><a href="/kontak" className="hover:underline">Contact</a></li>
          </ul>
        </div>

        {/* Bantuan */}
        <div>
          <h3 className="text-teal-400 font-semibold mb-4">Bantuan</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/faq" className="hover:underline">FAQ</a></li>
            <li><a href="/kontak" className="hover:underline">Kontak Kami</a></li>
            <li><a href="/kebijakan" className="hover:underline">Kebijakan Privasi</a></li>
          </ul>
        </div>

        {/* Sosial Media */}
        <div>
          <h3 className="text-teal-400 font-semibold mb-4">Ikuti Kami</h3>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-white"><Facebook size={20} /></a>
            <a href="#" className="hover:text-white"><Twitter size={20} /></a>
            <a href="https://www.instagram.com/farhansawal22_" className="hover:text-white"><Instagram size={20} /></a>
            <a href="mailto:farhansawal20@gmail.com" className="hover:text-white"><Mail size={20} /></a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-10 border-t border-gray-700 pt-6 text-sm text-center text-gray-500">
        &copy; {new Date().getFullYear()} farhansawal22_.
      </div>
    </footer>
  );
};

export default Footer;
