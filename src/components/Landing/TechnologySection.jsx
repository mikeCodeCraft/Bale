import React from 'react';
import { motion } from 'framer-motion';

const techList = [
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
];

const TechnologySection = () => (
  <section className="py-10 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20" />
    <div className="max-w-5xl mx-auto px-2 sm:px-4 lg:px-6 relative z-10">
      <motion.div
        className="text-center mb-8"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl md:text-3xl font-bold mb-2">
          Powered by{' '}
          <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            Cutting-Edge AI
          </span>
        </h2>
        <p className="text-base text-gray-300 max-w-xl mx-auto">
          We leverage the most advanced AI video generation technologies available today
        </p>
      </motion.div>
      <div className="relative w-full overflow-x-hidden min-h-[30rem] flex items-center"> {/* Increased min height and center content vertically */}
        <div className="marquee flex w-max gap-8 animate-marquee hover:[animation-play-state:paused]">
          {techList.concat(techList).map((tech, index) => (
            <motion.div
              key={index}
              className="backdrop-blur-md bg-white/5 rounded-2xl p-6 border border-gray-800 hover:border-blue-500 transition-all duration-300 group cursor-pointer flex-shrink-0 w-64 hover:scale-110"
              whileHover={{ scale: 1.15 }}
              style={{ minWidth: '16rem' }}
            >
              <div className="relative h-40 rounded-lg overflow-hidden mb-4"> {/* Increased card image height */}
                <img
                  src={tech.image}
                  alt={tech.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              <h3 className="text-xl font-bold mb-2">{tech.name}</h3>
              <p className="text-gray-300 text-sm">{tech.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .marquee:hover {
          animation-play-state: paused !important;
        }
      `}</style>
    </div>
  </section>
);

export default TechnologySection;
