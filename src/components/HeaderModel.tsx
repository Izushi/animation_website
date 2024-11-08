import { motion } from "framer-motion";
import { useState } from 'react';
import { FaBars, FaTimes } from "react-icons/fa";

const HeaderModel = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        type: 'spring',
        duration: 1,
        delay: 0.5,
        stiffness: 130,
      }}
      className="fixed top-0 left-0 right-0 w-full text-white z-50 bg-slate-900"
    >
      <div className="container mx-auto flex justify-between items-center h-16 px-4 md:px-0">
        <span className="font-bold text-3xl">My Portfolio Site</span>

        <nav className="hidden md:flex">
          <ul className="flex items-center gap-4 text-2xl">
            <li>
              <a href="#home" className="hover:text-teal-300 transition-colors duration-300">Home</a>
            </li>
            <li>
              <a href="#about" className="hover:text-teal-300 transition-colors duration-300">About</a>
            </li>
            <li>
              <a href="#work" className="hover:text-teal-300 transition-colors duration-300">Experience</a>
            </li>
            <li>
              <a href="#skills" className="hover:text-teal-300 transition-colors duration-300">Skills</a>
            </li>
            <li>
              <a href="#contact" className="hover:text-teal-300 transition-colors duration-300">Contact</a>
            </li>
          </ul>
        </nav>
        {/* toggle menu */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-3xl">
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* mobile menu */}
      {isMenuOpen && (
        <nav className="md:hidden bg-slate-900">
          <ul className="flex flex-col items-center gap-4 text-3xl py-4">
            <li>
              <a href="#home" className="hover:text-teal-300 transition-colors duration-300" onClick={toggleMenu}>Home</a>
            </li>
            <li>
              <a href="#about" className="hover:text-teal-300 transition-colors duration-300" onClick={toggleMenu}>About</a>
            </li>
            <li>
              <a href="#work" className="hover:text-teal-300 transition-colors duration-300" onClick={toggleMenu}>Experience</a>
            </li>
            <li>
              <a href="#skills" className="hover:text-teal-300 transition-colors duration-300" onClick={toggleMenu}>Skills</a>
            </li>
            <li>
              <a href="#contact" className="hover:text-teal-300 transition-colors duration-300" onClick={toggleMenu}>Contact</a>
            </li>
          </ul>
        </nav>
      )}
    </motion.header>
  );
};

export default HeaderModel;