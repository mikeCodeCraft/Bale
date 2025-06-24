import React from 'react';
import { motion } from 'framer-motion';

const BRAND_ORANGE = '#BA3D0A';
const BRAND_RED = '#A90F0A';

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] },
};

const HowItWorksSection = () => (
  <motion.section
    className="py-20 md:py-32 bg-gradient-to-br from-orange-900/10 to-red-900/10"
    initial="initial"
    whileInView="animate"
    viewport={{ once: true, amount: 0.3 }}
    variants={fadeInUp}
  >
    <div className="max-w-6xl mx-auto px-4">
      <motion.h2
        className="text-5xl md:text-6xl font-bold mb-16 text-center bg-clip-text text-transparent"
        style={{ backgroundImage: `linear-gradient(to right, ${BRAND_ORANGE}, ${BRAND_RED})`, WebkitBackgroundClip: 'text' }}
        variants={fadeInUp}
      >
        Prompt to Finality
      </motion.h2>
      <div className="grid md:grid-cols-2 gap-20 md:gap-0 items-center">
        {/* Image Left */}
        <motion.div className="flex justify-end md:pr-10" variants={fadeInUp}>
          <img
            src="how.jpg"
            alt="How it works"
            className="w-full max-w-sm md:max-w-md rounded-xl shadow-2xl"
            style={{ background: `linear-gradient(135deg, ${BRAND_ORANGE}22 0%, ${BRAND_RED}22 100%)` }}
          />
        </motion.div>
        {/* Text Right */}
        <motion.div className="md:pl-1" variants={fadeInUp}>
          <h2 className="text-3xl md:text-4xl font-bold mb-8 bg-clip-text text-transparent" style={{ backgroundImage: `linear-gradient(to right, ${BRAND_ORANGE}, ${BRAND_RED})`, WebkitBackgroundClip: 'text' }}>
            How It Works
          </h2>
          <ul className="list-disc pl-6 text-gray-300 space-y-3 text-base md:text-lg">
            <li>Plug-In: Share a brief or jump on a 15-minute strategy call.</li>
            <li>Prompt-to-Production: We script, storyboard, and generate polished footage</li>
            <li>Polish & Publish: You receive ready-to-post assets</li>
          </ul>
        </motion.div>
      </div>
    </div>
  </motion.section>
);

const WhatYouGetSection = () => (
  <motion.section
    className="py-6 md:py-0 bg-gradient-to-br from-orange-900/10 to-red-900/10"
    initial="initial"
    whileInView="animate"
    viewport={{ once: true, amount: 0.3 }}
    variants={fadeInUp}
  >
    <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-20 md:gap-0 items-center">
      {/* Text Left */}
      <div className="md:pl-20">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 bg-clip-text text-transparent text-left w-full md:w-auto" style={{ backgroundImage: `linear-gradient(to right, ${BRAND_ORANGE}, ${BRAND_RED})`, WebkitBackgroundClip: 'text' }}>
          What You Get
        </h2>
        <ul className="list-disc pl-6 text-gray-300 space-y-3 text-base md:text-lg">
          <li>4K, hyper-realistic generative video</li>
          <li>Voiceover, SFX, motion graphics included</li>
          <li>Platform-specific cuts (TikTok, Reels, Shorts)
          </li>
        </ul>
      </div>
      {/* Image Right */}
      <div className="order-1 md:order-2 flex justify-start md:pl-10">
        <img
          src="what.jpg"
          alt="What you get"
          className="w-full max-w-sm md:max-w-md rounded-xl shadow-2xl"
          style={{ background: `linear-gradient(135deg, ${BRAND_ORANGE}22 0%, ${BRAND_RED}22 100%)` }}
        />
      </div>
    </div>
  </motion.section>
);

export { HowItWorksSection, WhatYouGetSection };
