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
import { HeroSection } from './HeroSection';
import { HowItWorksSection, WhatYouGetSection } from './HowItWorksSection';

import PricingSection from './PricingSection';
import TechnologySection from './TechnologySection';
import TestimonialsSection from './TestimonialsSection';
import FinalCTASection from './FinalCTASection';
import FeaturesSection from './FeaturesSection';
import FAQSection from './FAQSection';
import Preload from './Preload';

const LandingPage = ({ setIsBookCallOpen }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [openFaq, setOpenFaq] = useState(null);
  const [loading, setLoading] = useState(true);
  const { scrollYProgress } = useScroll();

  const heroBackgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

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

  const features = [
    {
      icon: <Video className="w-8 h-8" />,
      title: 'Become a Story Brand',
      description:(<>
        We don’t just generate clips we craft <strong>brand stories</strong>. Your concept is fed through our AI storytelling engine to emerge as a polished, emotionally charged video that audiences remember and share.</>),
      image: 'brand.jpg',
    },
    {
      icon: <Wand2 className="w-8 h-8" />,
      title: 'Prompt-to-Premiere Workflow',
      description:(<> Hand us a one-line prompt; get back a studio-quality production. Scripting, storyboarding, voice, SFX, and edits all handled in days, not months.</>),
      image: 'prompt.jpg',
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: 'Immersive Visual Effects',
      description: (
        <>Kinetic typography, dynamic transitions, and tactile 3D elements fuse together to <strong>add depth, drama, and “wow”</strong> to every frame no physical set or camera crew required.</>
      ),
      image: 'visual.jpg',
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: ' Social Media Optimized',
      description:(<> Swipe-stopping Reels, Shorts, and TikToks  <strong>formatted, captioned, and hook-tested </strong> for each platform so your content doesn’t just play; it performs.</>),
      image: 'social.jpg',
    },
  ];

  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'Marketing Director at TechFlow',
      content:
        "Bale transformed our video marketing strategy. We're now producing content 10x faster than before, and the quality is absolutely stunning.",
      rating: 5,
      image: 'gift.jpg',
    },
    {
      name: 'Marcus Rodriguez',
      role: 'Founder, CreativeSpace',
      content:
        'The AI-generated videos from Bale are indistinguishable from traditional production. Our engagement rates have increased by 300%.',
      rating: 5,
      image: 'gift2.jpg',
    },
    {
      name: 'Emily Watson',
      role: 'Brand Manager, InnovateCorp',
      content:
        'What used to take us weeks and thousands of dollars now takes hours. Bale has revolutionized how we approach video content.',
      rating: 5,
      image: 'gift1.jpg',
    },
  ];

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

  const faqs = [
    {
      question: 'How is Bale different from traditional video agencies?',
      answer:
        <>Unlike traditional agencies that rely on physical sets, camera crews, and long timelines, Bale uses advanced AI tools like Google Veo and Kling to generate <strong>studio-quality videos from text prompts</strong>. This means faster turnaround, lower costs, and more creative flexibility without sacrificing quality.</>,
    },
    {
      question: 'What kinds of videos can you create?',
      answer:
        <>We specialize in <strong>brand storytelling</strong>, product explainers, launch trailers, viral-style content, and platform-optimized videos (Reels, Shorts, TikToks). Whether you're a startup, creator, or enterprise brand, we tailor each project to your visual style and strategic goals.
</>,
    },
    {
      question: 'How long does it take to receive a finished video?',
      answer:
        <>
        Turnaround times vary by plan, but most projects are delivered within <strong>3–5 business days</strong>. Our AI-first pipeline allows us to move faster without compromising creative integrity.</>,
    },
    {
      question: 'Do I own the videos you create for me?',
      answer:
        <>Yes. All videos we deliver including edits and source files are <strong>100% yours to use, repurpose, and monetize</strong> however you like. You also receive perpetual commercial rights.</>,
    },
    {
      question: 'Can I request revisions or changes to a video?',
      answer:
        <>Absolutely. Each plan includes at least one full round of revision. For clients on our Elite plan, we offer <strong> unlimited minor edits and dedicated creative support</strong> to ensure the final product matches your vision.</>,
    },
  ];

  if (loading) return <Preload onFinish={() => setLoading(false)} />;

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
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
        setIsBookCallOpen={setIsBookCallOpen}
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
      <PricingSection pricingPlans={pricingPlans} setIsBookCallOpen={setIsBookCallOpen} />
      <FAQSection faqs={faqs} openFaq={openFaq} setOpenFaq={setOpenFaq} />
      <FinalCTASection setIsBookCallOpen={setIsBookCallOpen} />
    </div>
  );
};

export default LandingPage;