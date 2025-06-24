import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Play, Clock, DollarSign, Users } from 'lucide-react';
import { HowItWorksSection, WhatYouGetSection } from './HowItWorksSection';

const BRAND_ORANGE = '#BA3D0A';
const BRAND_RED = '#A90F0A';
const BRAND_BLACK = '#000000';
const BRAND_WHITE = '#FFFFFF';

// Simple Particle Background Component
const ParticleBackground = () => {
  const canvasRef = useRef(null);
  const particlesRef = useRef([]);
  const animationIdRef = useRef(null);
  const dpr = window.devicePixelRatio || 1;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let width = window.innerWidth;
    let height = window.innerHeight;
    let running = true;

    let numParticles = Math.floor(width / 32);

    // Set canvas dimensions and scaling
    function setCanvasSize() {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = width + 'px';
      canvas.style.height = height + 'px';
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);
    }

    // Create or update particles
    function createParticles() {
      numParticles = Math.floor(width / 32);
      if (particlesRef.current.length !== numParticles || particlesRef.current.length === 0) {
        particlesRef.current = Array.from({ length: numParticles }, () => ({
          x: Math.random() * width,
          y: Math.random() * height,
          r: 2 + Math.random() * 1.5,
          dx: -0.2 + Math.random() * 0.4,
          dy: -0.2 + Math.random() * 0.4,
          opacity: 0.4 + Math.random() * 0.6,
        }));
      }
    }

    function draw() {
      if (!running) return;
      ctx.clearRect(0, 0, width, height);
      // Always ensure particles exist
      if (particlesRef.current.length === 0) {
        createParticles();
      }
      for (const p of particlesRef.current) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, 2 * Math.PI);
        ctx.fillStyle = `rgba(255,255,255,${p.opacity})`;
        ctx.shadowColor = '#BA3D0A';
        ctx.shadowBlur = 10;
        ctx.fill();
        p.x += p.dx;
        p.y += p.dy;
        // Wrap around edges
        if (isNaN(p.x) || isNaN(p.y)) {
          // If a particle's position becomes NaN, reset it
          p.x = Math.random() * width;
          p.y = Math.random() * height;
        }
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;
      }
      animationIdRef.current = requestAnimationFrame(draw);
    }

    setCanvasSize();
    createParticles();
    running = true;
    animationIdRef.current = requestAnimationFrame(draw);
    window.addEventListener('resize', () => {
      setCanvasSize();
      createParticles();
    });

    return () => {
      running = false;
      window.removeEventListener('resize', () => {
        setCanvasSize();
        createParticles();
      });
      cancelAnimationFrame(animationIdRef.current);
    };
  }, [dpr]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full z-0 pointer-events-none"
      style={{ opacity: 0.5 }}
      aria-hidden="true"
    />
  );
};

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
      {/* Particle Background */}
      <ParticleBackground />
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
          <motion.h1 className="text-4xl md:text-6xl lg:text-5xl font-extrabold mb-10 leading-tight" variants={fadeInUp}>
            <span
              className="bg-clip-text text-transparent font-extrabold"
              style={{
                backgroundImage: `linear-gradient(to right, ${BRAND_ORANGE}, ${BRAND_RED})`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Hollywood-Level Videos
            </span>
            <br />
            <span className="block mt-4 font-extrabold"> Zero Camera Crews.</span>
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
              className="border-2 border-[#A90F0A] text-white px-8 py-4 rounded-lg font-semibold text-lg flex items-center gap-2 shadow-lg hover:shadow-orange-800/10 transition-all duration-200"
              style={{ backgroundImage: 'linear-gradient(45deg, #BA3D0A -88%, #000000 70%)' }}
              whileHover={{ scale: 1.02, boxShadow: '0 10px 20px rgba(186, 61, 10, 0.10)' }}
              whileTap={{ scale: 0.97 }}
            >
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

export { HeroSection };
