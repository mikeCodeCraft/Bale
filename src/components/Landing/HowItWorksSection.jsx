import React from 'react';

const BRAND_ORANGE = '#BA3D0A';
const BRAND_RED = '#A90F0A';

const HowItWorksSection = () => (
  <section className="py-20 md:py-30 ">
    <div className="max-w-6xl mx-auto px-4 mt-[-2.5rem] ">
      <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center bg-clip-text ">
      Prompt to {' '}
      <span className="bg-gradient-to-r from-red-400 to-orange-600 bg-clip-text text-transparent">
          Finality
        </span>
      </h2>
      
      <div className="grid md:grid-cols-2 gap-20 md:gap-0 items-center">
        {/* Image Left */}
        <div className="flex justify-end md:pr-10">
          <img
            src="how.jpg"
            alt="How it works"
            className="w-full max-w-sm md:max-w-md rounded-xl shadow-2xl"
            style={{ background: `linear-gradient(135deg, ${BRAND_ORANGE}22 0%, ${BRAND_RED}22 100%)` }}
          />
        </div>
        {/* Text Right */}
        <div className="md:pl-1 ">
          <h2 className="text-1.5xl md:text-2xl font-bold mb-4 bg-clip-text text-transparent" style={{ backgroundImage: `linear-gradient(to right, ${BRAND_ORANGE}, ${BRAND_RED})`, WebkitBackgroundClip: 'text' }}>
            How It Works
          </h2>
          <ul className="list-disc pl-6 text-gray-300 space-y-3 text-base ">
            <li>Plug-In: Share a brief or jump on a 15-minute strategy call.</li>
            <li>Prompt-to-Production: We script, storyboard, and generate polished footage</li>
            <li>Polish & Publish: You receive ready-to-post assets</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);

const WhatYouGetSection = () => (
  <section className="py-6 md:py-0 ">
    <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-20 md:gap-0 items-center">
      {/* Text Left */}
      
      <div className="order-2 md:order-1 md:pr-10 md:pl-16">
        <h2 className="text-1.5xl md:text-2xl font-bold mb-4 bg-clip-text text-transparent text-left w-full md:w-auto" style={{ backgroundImage: `linear-gradient(to right, ${BRAND_ORANGE}, ${BRAND_RED})`, WebkitBackgroundClip: 'text' }}>
          What You Get
        </h2>
        
        <ul className="list-disc pl-6 text-gray-300 space-y-3 text-base ">
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
  </section>
);

export { HowItWorksSection, WhatYouGetSection };