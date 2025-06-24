import React from 'react';

const BRAND_ORANGE = '#BA3D0A';
const BRAND_RED = '#A90F0A';

const HowItWorksSection = () => (
  <section className="py-1 bg-gradient-to-br from-orange-900/10 to-red-900/10">
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center bg-clip-text text-transparent" style={{ backgroundImage: `linear-gradient(to right, ${BRAND_ORANGE}, ${BRAND_RED})`, WebkitBackgroundClip: 'text' }}>
        Prompt to Finality
      </h2>
      <div className="grid md:grid-cols-2 gap-4 items-center"> {/* Reduced gap for closer layout */}
        {/* Image Left */}
        <div className="flex justify-end md:pr-2">
          <img
            src="how.jpg"
            alt="How it works"
            className="w-full max-w-xs rounded-xl shadow-lg" // Reduced max width
            style={{ background: `linear-gradient(135deg, ${BRAND_ORANGE}22 0%, ${BRAND_RED}22 100%)` }}
          />
        </div>
        {/* Text Right */}
        <div className="md:pl-2">
          <h3 className="text-2xl md:text-3xl font-bold mb-4 bg-clip-text text-transparent" style={{ backgroundImage: `linear-gradient(to right, ${BRAND_ORANGE}, ${BRAND_RED})`, WebkitBackgroundClip: 'text' }}>
            How It Works
          </h3>
          <ul className="list-disc pl-6 text-gray-300 space-y-2">
            <li>Upload your script or idea</li>
            <li>Choose your video style and preferences</li>
            <li>AI edits, enhances, and produces your video</li>
            <li>Download or share your finished content</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);

const WhatYouGetSection = () => (
  <section className="py-1 bg-gradient-to-br from-orange-900/10 to-red-900/10">
    <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-4 items-center"> {/* px-4 for moderate centering */}
      {/* Text Left */}
      <div className="order-2 md:order-1 md:pr-20 flex flex-col items-center md:items-end md:text-left"> {/* Add right padding back on desktop */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent" style={{ backgroundImage: `linear-gradient(to right, ${BRAND_ORANGE}, ${BRAND_RED})`, WebkitBackgroundClip: 'text' }}>
          What You Get
        </h2>
        <ul className="list-disc pl-6 text-gray-300 space-y-2">
          <li>Hollywood-level video quality</li>
          <li>Lightning-fast delivery</li>
          <li>Affordable pricing</li>
          <li>Easy collaboration and sharing</li>
        </ul>
      </div>
      {/* Image Right */}
      <div className="order-1 md:order-2 flex justify-start md:pl-2">
        <img
          src="what.jpg"
          alt="What you get"
          className="w-full max-w-xs rounded-xl shadow-lg"
          style={{ background: `linear-gradient(135deg, ${BRAND_ORANGE}22 0%, ${BRAND_RED}22 100%)` }}
        />
      </div>
    </div>
  </section>
);

export { HowItWorksSection, WhatYouGetSection };
