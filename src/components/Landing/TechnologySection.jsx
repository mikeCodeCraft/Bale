import React from 'react';
import { motion } from 'framer-motion';

const TechnologySection = () => (
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
);

export default TechnologySection;
