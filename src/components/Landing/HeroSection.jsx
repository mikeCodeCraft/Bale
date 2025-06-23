import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Clock, DollarSign, Users, Phone } from 'lucide-react';

const BRAND_ORANGE = '#BA3D0A';
const BRAND_RED = '#A90F0A';
const BRAND_BLACK = '#000000';
const BRAND_WHITE = '#FFFFFF';
const HeroSection = ({
  heroBackgroundY,
  heroOpacity,
  fadeInUp,
  staggerContainer,
}) => {
  // Mouse position state for background animation
  const [mouse, setMouse] = useState(null); // null means no mouse yet
  const heroRef = useRef(null);

  // Mouse move handler
  const handleMouseMove = (e) => {
    const rect = heroRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    setMouse({ x, y });
  };
  // Mouse leave handler
  const handleMouseLeave = () => {
    setMouse(null);
  };

  // Compute background position
  const x = mouse ? mouse.x : 0.5;
  const y = mouse ? mouse.y : 0.5;

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 group"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Animated Gradient Background */}
      <motion.div
        className="absolute inset-0 z-0 pointer-events-none"
        animate={{
          background: BRAND_BLACK,
        }}
        transition={{ type: 'spring', stiffness: 80, damping: 30, mass: 1 }}
        style={{ willChange: 'background' }}
      />
      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-10 md:pt-14">
        <motion.div className="max-w-4xl mx-auto" variants={staggerContainer} initial="initial" animate="animate">
          <motion.h1 className="text-4xl md:text-6xl lg:text-4xl font-bold mb-10 leading-tight" variants={fadeInUp}>
            Create{' '}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: `linear-gradient(to right, ${BRAND_ORANGE}, ${BRAND_RED})`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Hollywood-Level Videos
            </span>
            <br />
            <span className="block mt-4">Without a Crew, Camera, or Studio</span>
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-xl mx-auto leading-relaxed"
            variants={fadeInUp}
          >
            Bale helps brands create premium video content{' '}
            <span className="text-[#BA3D0A] font-semibold">10x faster</span> and{' '}
            <span className="text-[#A90F0A] font-semibold">cheaper</span> using state-of-the-art AI
          </motion.p>
          <motion.div className="flex flex-col sm:flex-row gap-4 justify-center items-center" variants={fadeInUp}>
            <motion.button
              className="border-2 border-[#A90F0A] text-white px-8 py-4 rounded-lg font-semibold text-lg flex items-center gap-2 shadow-2xl hover:shadow-orange-800/25 transition-all duration-300"
              style={{ backgroundImage: 'linear-gradient(45deg, #BA3D0A -88%, #000000 70%)' }}
              whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(186, 61, 10, 0.3)' }}
              whileTap={{ scale: 0.95 }}
            >
              <Phone className="w-5 h-5" />
              Book Call
            </motion.button>
            <motion.button
              className="border border-gray-600 hover:border-gray-400 text-white px-8 py-4 rounded-lg font-semibold text-lg flex items-center gap-2 backdrop-blur-sm bg-white/5 hover:bg-white/10 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Play className="w-5 h-5" />
              Watch Demo
            </motion.button>
          </motion.div>

          <motion.div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center" variants={fadeInUp}>
            {[
              { icon: <Clock className="w-8 h-8 mx-auto mb-2 text-red-400" />, title: '10x Faster', desc: 'Production Speed' },
              { icon: <DollarSign className="w-8 h-8 mx-auto mb-2 text-orange-400" />, title: '90% Cheaper', desc: 'Than Traditional' },
              { icon: <Users className="w-8 h-8 mx-auto mb-2 text-black-400" />, title: '500+', desc: 'Happy Clients' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="backdrop-blur-md bg-white/5 rounded-lg p-6 border border-gray-800"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.2 }}
              >
                {stat.icon}
                <h3 className="text-2xl font-bold">{stat.title}</h3>
                <p className="text-gray-400">{stat.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
