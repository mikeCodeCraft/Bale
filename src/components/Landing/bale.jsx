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
import '../../styles/bale.css';
import logo from '../../assets/logo.svg';
import Navbar from './Navbar';
import { HeroSection } from './HeroSection';
import { HowItWorksSection, WhatYouGetSection } from './HowItWorksSection';
import Footer from './Footer';
import PricingSection from './PricingSection';
import TechnologySection from './TechnologySection';
import TestimonialsSection from './TestimonialsSection';
import FinalCTASection from './FinalCTASection';
import FeaturesSection from './FeaturesSection';
import FAQSection from './FAQSection';

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
      <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
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
      <HeroSection
        heroBackgroundY={heroBackgroundY}
        heroOpacity={heroOpacity}
        fadeInUp={fadeInUp}
        staggerContainer={staggerContainer}
      />
      <FeaturesSection features={features} />
      <HowItWorksSection />
      <WhatYouGetSection />
      <TechnologySection />
      <TestimonialsSection
        testimonials={testimonials}
        activeTestimonial={activeTestimonial}
        setActiveTestimonial={setActiveTestimonial}
      />
      {/* Pricing Section */}
      <PricingSection pricingPlans={pricingPlans} />
      {/* FAQ Section */}
      <FAQSection faqs={faqs} openFaq={openFaq} setOpenFaq={setOpenFaq} />
      <FinalCTASection />
      <Footer />
    </div>
  );
};

export default LandingPage;