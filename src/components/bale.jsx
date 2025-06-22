import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import {
  Play,
  Zap,
  Video,
  Wand2,
  Sparkles,
  CheckCircle,
  ArrowRight,
  Menu,
  X,
  Star,
  Clock,
  DollarSign,
  Users,
  ChevronDown,
} from 'lucide-react';
import '../styles/bale.css';
import logo from '../assets/logo.svg';

const LandingPage = () => {
  // State management
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [openFaq, setOpenFaq] = useState(null);
  const { scrollYProgress } = useScroll();

  // Scroll-based animations
  const heroBackgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Animation variants
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] },
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  // Data for features section
  const features = [
    {
      icon: <Video className="w-8 h-8" />,
      title: 'AI-Generated Videos',
      description:
        'From product explainers to emotional brand stories, created with cutting-edge AI technology.',
      image: 'https://images.unsplash.com/photo-1588524806723-19c4dfd2bc17',
    },
    {
      icon: <Wand2 className="w-8 h-8" />,
      title: 'Script to Video Pipeline',
      description: 'End-to-end content creation from simple prompts to polished video renders.',
      image: 'https://images.unsplash.com/photo-1543336472-fcf478c443db',
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: 'Motion Design & 3D',
      description: 'Animated logo reveals, product spins, and immersive scenes that captivate audiences.',
      image: 'https://images.pexels.com/photos/9667639/pexels-photo-9667639.jpeg',
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Social Content Packages',
      description: 'Reels, Shorts, TikToks optimized for each platform with viral potential.',
      image: 'https://images.pexels.com/photos/9667555/pexels-photo-9667555.jpeg',
    },
  ];

  // Data for testimonials section
  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'Marketing Director at TechFlow',
      content:
        "Bale transformed our video marketing strategy. We're now producing content 10x faster than before, and the quality is absolutely stunning.",
      rating: 5,
      image: 'https://images.pexels.com/photos/3031396/pexels-photo-3031396.jpeg',
    },
    {
      name: 'Marcus Rodriguez',
      role: 'Founder, CreativeSpace',
      content:
        'The AI-generated videos from Bale are indistinguishable from traditional production. Our engagement rates have increased by 300%.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1637979910374-ce7e8736b670',
    },
    {
      name: 'Emily Watson',
      role: 'Brand Manager, InnovateCorp',
      content:
        'What used to take us weeks and thousands of dollars now takes hours. Bale has revolutionized how we approach video content.',
      rating: 5,
      image: 'https://images.pexels.com/photos/3031396/pexels-photo-3031396.jpeg',
    },
  ];

  // Data for pricing section
  const pricingPlans = [
    {
      name: 'Starter',
      price: '$750',
      period: '/month',
      description: 'Perfect for startups and small businesses',
      features: [
        '3 videos per month',
        'Basic editing & rendering',
        'Script assistance',
        'Email support',
        'HD quality output',
      ],
      popular: false,
    },
    {
      name: 'Pro',
      price: '$1,500',
      period: '/month',
      description: 'Ideal for growing brands and agencies',
      features: [
        '6 videos per month',
        'Full editing & post-production',
        'Custom storyboarding',
        'Professional voiceovers',
        'Priority support',
        '4K quality output',
      ],
      popular: true,
    },
    {
      name: 'Elite',
      price: '$2,500',
      period: '/month',
      description: 'For enterprises and high-volume creators',
      features: [
        '10 videos per month',
        'Custom scenes & animations',
        'Dedicated account manager',
        'Social content included',
        'Rush delivery available',
        'White-label options',
      ],
      popular: false,
    },
  ];

  // Data for FAQ section
  const faqs = [
    {
      question: 'How does AI video generation work?',
      answer:
        'We use cutting-edge AI models like Google Veo 2 & 3 and Kling to transform your scripts and ideas into professional-quality videos. Simply provide us with your concept, and our AI creates stunning visuals, animations, and effects.',
    },
    {
      question: 'What’s the typical turnaround time?',
      answer:
        'Most videos are completed within 24-48 hours. Rush deliveries are available for Elite plan subscribers, with some projects completed in as little as 6 hours.',
    },
    {
      question: 'Can I customize the videos after creation?',
      answer:
        'Absolutely! We provide revision rounds based on your plan, and you can request specific changes to colors, text, music, or visual elements to match your brand perfectly.',
    },
    {
      question: 'What formats do you deliver?',
      answer:
        'We deliver in all major formats including MP4, MOV, and optimized versions for social platforms like Instagram, TikTok, YouTube, and LinkedIn.',
    },
    {
      question: 'Do you provide music and voiceovers?',
      answer:
        'Yes! Pro and Elite plans include professional voiceovers and licensed music. We can also work with your existing brand voice or music preferences.',
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <motion.div
              className="flex items-center gap-2 text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <img src={logo} alt="Bale Logo" className="h-18 w-20" />
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
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

            {/* Mobile Menu Button */}
            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-black/95 backdrop-blur-md"
            >
              <div className="px-4 py-4 space-y-4">
                {['Features', 'Pricing', 'Testimonials', 'FAQ'].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="block text-gray-300 hover:text-white transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Background Image with Parallax */}
        <motion.div className="absolute inset-0 z-0" style={{ y: heroBackgroundY, opacity: heroOpacity }}>
          <div
            className="w-full h-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage:
                "linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.8)), url('https://images.unsplash.com/photo-1614760522172-2c2d660427b4')",
            }}
          />
        </motion.div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0 z-1">
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-blue-400 rounded-full opacity-20"
              initial={{
                x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
                y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
              }}
              animate={{
                y: [null, Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800)],
                opacity: [0.2, 0.8, 0.2],
              }}
              transition={{
                duration: Math.random() * 10 + 5,
                repeat: Infinity,
                ease: 'linear',
              }}
            />
          ))}
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div className="max-w-4xl mx-auto" variants={staggerContainer} initial="initial" animate="animate">
            <motion.h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight" variants={fadeInUp}>
              Create{' '}
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Hollywood-Level Videos
              </span>
              <br />
              Without a Crew, Camera, or Studio
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"
              variants={fadeInUp}
            >
              Bale helps brands create premium video content{' '}
              <span className="text-blue-400 font-semibold">10x faster</span> and{' '}
              <span className="text-green-400 font-semibold">cheaper</span> using state-of-the-art AI
            </motion.p>

            <motion.div className="flex flex-col sm:flex-row gap-4 justify-center items-center" variants={fadeInUp}>
              <motion.button
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-semibold text-lg flex items-center gap-2 shadow-2xl hover:shadow-blue-500/25 transition-all duration-300"
                whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(59, 130, 246, 0.3)' }}
                whileTap={{ scale: 0.95 }}
              >
                Start Creating Now
                <ArrowRight className="w-5 h-5" />
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
                { icon: <Clock className="w-8 h-8 mx-auto mb-2 text-blue-400" />, title: '10x Faster', desc: 'Production Speed' },
                { icon: <DollarSign className="w-8 h-8 mx-auto mb-2 text-green-400" />, title: '90% Cheaper', desc: 'Than Traditional' },
                { icon: <Users className="w-8 h-8 mx-auto mb-2 text-purple-400" />, title: '500+', desc: 'Happy Clients' },
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

      {/* Features Section */}
      <section id="features" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Revolutionize Your{' '}
              <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                Video Creation
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our cutting-edge AI technology transforms your ideas into stunning, professional videos that captivate
              audiences and drive results.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900 to-black border border-gray-800 hover:border-gray-600 transition-all duration-500"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative p-8">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                        {feature.icon}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-3 group-hover:text-blue-400 transition-colors duration-300">
                        {feature.title}
                      </h3>
                      <p className="text-gray-300 leading-relaxed mb-6">{feature.description}</p>
                      <div className="relative h-48 rounded-lg overflow-hidden">
                        <img
                          src={feature.image}
                          alt={feature.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Powered by{' '}
              <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                Cutting-Edge AI
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We leverage the most advanced AI video generation technologies available today
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Google Veo 2 & 3',
                description: 'Next-generation video synthesis with unprecedented quality and control',
                image: 'https://images.unsplash.com/photo-1714779573250-36242918e044',
              },
              {
                name: 'Kling AI',
                description: 'Dynamic storytelling and motion graphics with cinematic precision',
                image: 'https://images.pexels.com/photos/9667555/pexels-photo-9667555.jpeg',
              },
              {
                name: 'Custom Models',
                description: 'Proprietary AI trained on premium content for unique brand experiences',
                image: 'https://images.unsplash.com/photo-1627736619924-ce9f159dedca',
              },
            ].map((tech, index) => (
              <motion.div
                key={index}
                className="backdrop-blur-md bg-white/5 rounded-2xl p-8 border border-gray-800 hover:border-gray-600 transition-all duration-500 group"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="relative h-48 rounded-lg overflow-hidden mb-6">
                  <img
                    src={tech.image}
                    alt={tech.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <h3 className="text-2xl font-bold mb-3">{tech.name}</h3>
                <p className="text-gray-300">{tech.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              What Our{' '}
              <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                Clients Say
              </span>
            </h2>
            <p className="text-xl text-gray-300">Join hundreds of satisfied clients who’ve transformed their video marketing</p>
          </motion.div>

          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTestimonial}
                className="max-w-4xl mx-auto text-center"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.5 }}
              >
                <div className="backdrop-blur-md bg-white/5 rounded-2xl p-8 md:p-12 border border-gray-800">
                  <div className="flex justify-center mb-6">
                    {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                      <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-2xl md:text-3xl font-light mb-8 leading-relaxed">
                    "{testimonials[activeTestimonial].content}"
                  </blockquote>
                  <div className="flex items-center justify-center gap-4">
                    <img
                      src={testimonials[activeTestimonial].image}
                      alt={testimonials[activeTestimonial].name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div className="text-left">
                      <div className="font-semibold text-lg">{testimonials[activeTestimonial].name}</div>
                      <div className="text-gray-400">{testimonials[activeTestimonial].role}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Testimonial Navigation */}
            <div className="flex justify-center mt-8 gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === activeTestimonial ? 'bg-blue-500 w-8' : 'bg-gray-600 hover:bg-gray-500'
                  }`}
                  onClick={() => setActiveTestimonial(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-blue-900/20" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Choose Your{' '}
              <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                Creative Plan
              </span>
            </h2>
            <p className="text-xl text-gray-300">Flexible pricing to match your video content needs</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                className={`relative rounded-2xl p-8 border transition-all duration-500 hover:scale-105 ${
                  plan.popular
                    ? 'bg-gradient-to-br from-blue-900/50 to-purple-900/50 border-blue-500 shadow-2xl shadow-blue-500/20'
                    : 'backdrop-blur-md bg-white/5 border-gray-800 hover:border-gray-600'
                }`}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-gray-400 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-5xl font-bold">{plan.price}</span>
                    <span className="text-gray-400 ml-2">{plan.period}</span>
                  </div>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full py-4 rounded-lg font-semibold text-lg transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl'
                      : 'border border-gray-600 hover:border-gray-400 text-white hover:bg-white/5'
                  }`}
                >
                  Get Started
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Frequently Asked{' '}
              <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                Questions
              </span>
            </h2>
            <p className="text-xl text-gray-300">Everything you need to know about Bale’s AI video creation</p>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="backdrop-blur-md bg-white/5 rounded-lg border border-gray-800"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <button
                  className="w-full p-6 text-left flex justify-between items-center hover:bg-white/5 transition-colors duration-300"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <span className="font-semibold text-lg pr-4">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${
                      openFaq === index ? 'transform rotate-180' : ''
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {openFaq === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-6 text-gray-300 leading-relaxed">{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 to-purple-900/30" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Ready to Create{' '}
              <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                Stunning Videos?
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join the AI video revolution today and transform your content strategy forever.
            </p>
            <motion.button
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-12 py-6 rounded-lg font-bold text-xl flex items-center gap-3 mx-auto shadow-2xl hover:shadow-blue-500/25 transition-all duration-300"
              whileHover={{ scale: 1.05, boxShadow: '0 25px 50px rgba(59, 130, 246, 0.4)' }}
              whileTap={{ scale: 0.95 }}
            >
              Start Your Free Trial
              <ArrowRight className="w-6 h-6" />
            </motion.button>
            <p className="text-gray-400 mt-4">No credit card required • Cancel anytime • 14-day free trial</p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent mb-4">
                <img src={logo} alt="Bale Logo" className="h-15 w-20" />
              </div>
              <p className="text-gray-400 leading-relaxed">
                Creating Hollywood-level videos without a crew, camera, or studio.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    AI Video Generation
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Script to Video
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Motion Design
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Social Content
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Case Studies
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Support
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Terms
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>© 2025 Bale. All rights reserved. Revolutionizing video creation with AI.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;