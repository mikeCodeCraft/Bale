import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import logo from '../../assets/logo.svg';
import { useNavigate } from 'react-router-dom';

const BRAND_ORANGE = '#BA3D0A';
const BRAND_RED = '#A90F0A';
const BRAND_BLACK = '#000000';
const BRAND_WHITE = '#FFFFFF';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuRef = useRef();
  const buttonRef = useRef();
  const navigate = useNavigate();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    if (!isMobileMenuOpen) return;
    const handleScroll = () => setIsMobileMenuOpen(false);
    const handleClickOutside = (e) => {
      if (
        menuRef.current &&
        !menuRef.current.classList.contains('hidden') &&
        !menuRef.current.contains(e.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(e.target)
      ) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  return (
    <nav className="fixed top-0 w-full z-50 pt-2" style={{ background: `${BRAND_BLACK}CC`, backdropFilter: 'blur(8px)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-20">
          {/* Logo Left */}
          <motion.div
            className="flex items-center gap-2 text-2xl font-bold bg-gradient-to-r bg-clip-text text-transparent absolute left-0 top-[20%] -translate-y-1/2"
            style={{ backgroundImage: `linear-gradient(to right, ${BRAND_ORANGE}, ${BRAND_RED}, ${BRAND_BLACK}, ${BRAND_WHITE})` }}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <img src={logo} alt="Bale Logo" className="h-10 w-23" />
          </motion.div>
         
          <div className="hidden md:flex flex-1 justify-center space-x-8 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            {['Features', 'Pricing', 'Testimonials', 'Blog', 'FAQ'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-300 hover:text-white transition-colors duration-300 hover:scale-105 transform"
                onClick={closeMobileMenu}
              >
                {item}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4 absolute right-0 top-1/2 -translate-y-1/2">
            <a
              href="#book-call"
              className="hidden md:inline-block px-6 py-2 rounded-full font-semibold border-2 border-[#BA3D0A] text-[#BA3D0A] bg-transparent hover:bg-[#BA3D0A] hover:text-white transition shadow focus:outline-none focus:ring-2 focus:ring-[#BA3D0A] focus:ring-offset-2"
            >
              Book Call
            </a>
            <button
              className="md:hidden mobile-menu-button text-white border-2 p-2 rounded-full focus:ring-0 focus:outline-none"
              style={{
                borderImage: `linear-gradient(90deg, ${BRAND_ORANGE}, ${BRAND_RED}) 1`,
                borderStyle: 'solid',
                borderWidth: '2px',
              }}
              ref={buttonRef}
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
        {/* Mobile Menu */}
        <div
          ref={menuRef}
          className={`mobile-menu md:hidden bg-black/95 backdrop-blur-md transition-all duration-300 ${isMobileMenuOpen ? '' : 'hidden'}`}
        >
          <div className="px-4 py-4 space-y-4">
            {['Features', 'Pricing', 'Testimonials', 'Blog', 'FAQ'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block text-gray-300 hover:text-white transition-colors"
                onClick={closeMobileMenu}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
