import { useEffect, useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", target: "home" },
    { name: "About", target: "about" },
    { name: "Projects", target: "projects" },
    { name: "Certificates", target: "certificates" },
    { name: "Contacts", target: "contacts" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#0f172a]/90 backdrop-blur-md border-b border-white/10 shadow-lg py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center text-white">
        {/* Logo */}
        <Link
          to="home"
          smooth={true}
          duration={500}
          className="cursor-pointer flex items-center group"
        >
          <img
            src="/images/logoo.png"
            alt="FarhanDev Logo"
            className="h-10 w-auto transition-transform duration-300 group-hover:scale-105"
          />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-8 text-sm font-medium">
          {navItems.map((item, i) => (
            <li key={i}>
              <Link
                to={item.target}
                spy={true}
                smooth={true}
                duration={500}
                offset={-70}
                activeClass="!text-teal-400 font-semibold after:!w-full"
                className="relative cursor-pointer text-gray-300 hover:text-teal-400 transition-colors py-1.5
                           after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 
                           after:h-[2px] after:bg-teal-400 after:transition-all after:duration-300 
                           hover:after:w-full"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
            className="p-1.5 text-gray-300 hover:text-teal-400 focus:outline-none transition-colors"
          >
            {isOpen ? <HiX size={28} /> : <HiMenu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu dengan Animasi */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden overflow-hidden bg-[#0f172a]/95 backdrop-blur-xl border-b border-white/10"
          >
            <ul className="px-6 pt-3 pb-6 space-y-3 text-white text-base font-medium">
              {navItems.map((item, i) => (
                <li key={i}>
                  <Link
                    to={item.target}
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    activeClass="!text-teal-400 font-bold pl-3 border-l-2 border-teal-400"
                    className="block cursor-pointer text-gray-300 hover:text-teal-400 transition-all py-1.5"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;