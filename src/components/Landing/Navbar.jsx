import React from 'react';
import { motion } from 'framer-motion';
import { Menu } from 'lucide-react';
import logo from '../../assets/logo.svg';

const BRAND_ORANGE = '#BA3D0A';
const BRAND_RED = '#A90F0A';
const BRAND_BLACK = '#000000';
const BRAND_WHITE = '#FFFFFF';

const Navbar = ({ isMenuOpen, setIsMenuOpen }) => (
  <nav className="fixed top-0 w-full z-50" style={{ background: `${BRAND_BLACK}CC`, backdropFilter: 'blur(8px)' }}>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between py-4">
        {/* Logo Left */}
        <motion.div
          className="flex items-center gap-2 text-2xl font-bold bg-gradient-to-r bg-clip-text text-transparent"
          style={{ backgroundImage: `linear-gradient(to right, ${BRAND_ORANGE}, ${BRAND_RED}, ${BRAND_BLACK}, ${BRAND_WHITE})` }}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <img src={logo} alt="Bale Logo" className="h-18 w-20" />
        </motion.div>
        {/* Centered Menu */}
        <div className="hidden md:flex flex-1 justify-center space-x-8">
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
        {/* Right: X and Signup */}
        <div className="flex items-center gap-4">
          {/* X (Twitter) icon always visible (desktop) */}
          <a
            href="https://x.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center justify-center p-1 rounded-full hover:bg-white/10 transition"
            aria-label="X (Twitter)"
          >
            <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-white" style={{ display: 'block' }}>
              <path fill="currentColor" d="M19.615 14.438 28.16 4.5h-2.13l-7.6 8.97-6.08-8.97H4.5l8.89 13.09-8.89 10.51h2.13l8.13-9.59 6.5 9.59h5.85l-9.09-13.13Zm-2.88 3.4-.94-1.36-7.48-10.8h3.13l6.04 8.73.94 1.36 7.74 11.13h-3.13l-6.3-9.06Z"/>
            </svg>
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
