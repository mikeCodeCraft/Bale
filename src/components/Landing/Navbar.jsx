import React from 'react';
import { motion } from 'framer-motion';
import { Menu } from 'lucide-react';
import logo from '../../assets/logo.svg';

const BRAND_ORANGE = '#BA3D0A';
const BRAND_RED = '#A90F0A';
const BRAND_BLACK = '#000000';
const BRAND_WHITE = '#FFFFFF';

const Navbar = ({ isMenuOpen, setIsMenuOpen }) => (
  <nav className="fixed top-0 w-full z-50 pt-6" style={{ background: `${BRAND_BLACK}CC`, backdropFilter: 'blur(8px)' }}>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="relative flex items-center justify-between h-20">
        {/* Logo Left */}
        <motion.div
          className="flex items-center gap-2 text-2xl font-bold bg-gradient-to-r bg-clip-text text-transparent absolute left-0 top-1/2 -translate-y-1/2"
          style={{ backgroundImage: `linear-gradient(to right, ${BRAND_ORANGE}, ${BRAND_RED}, ${BRAND_BLACK}, ${BRAND_WHITE})` }}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <img src={logo} alt="Bale Logo" className="h-18 w-20" />
        </motion.div>
        {/* Centered Menu */}
        <div className="hidden md:flex flex-1 justify-center space-x-8 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          {['Features', 'Pricing', 'Testimonials', 'FAQ'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-gray-300 hover:text-white transition-colors duration-300 hover:scale-105 transform"
            >
              {item}
            </a>
          ))}
        </div>
        {/* Right: Book Call and Signup */}
        <div className="flex items-center gap-4 absolute right-0 top-1/2 -translate-y-1/2">
          {/* Book Call Button */}
          <a
            href="#book-call"
            className="hidden md:inline-block px-6 py-2 rounded-full font-semibold border-2 border-[#BA3D0A] text-[#BA3D0A] bg-transparent hover:bg-[#BA3D0A] hover:text-white transition shadow focus:outline-none focus:ring-2 focus:ring-[#BA3D0A] focus:ring-offset-2"
          >
            Book Call
          </a>
          {/* Signup Button */}
          <a
            href="#signup"
            className="hidden md:inline-block px-6 py-2 rounded-full font-semibold bg-gradient-to-r from-[#BA3D0A] via-[#A90F0A] to-[#000000] hover:from-[#A90F0A] hover:to-[#000000] transition text-white shadow focus:outline-none focus:ring-2 focus:ring-[#BA3D0A] focus:ring-offset-2"
          >
            Sign Up
          </a>
          {/* Mobile Menu Button (unchanged) */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>
    </div>
  </nav>
);

export default Navbar;
