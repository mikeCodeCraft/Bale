import React from 'react';
import { motion } from 'framer-motion';

const FeaturesSection = ({ features }) => (
  <section id="features" className="py-10 relative"> {/* Reduced vertical padding */}
    <div className="max-w-5xl mx-auto px-2 sm:px-4 lg:px-6"> {/* Reduced max width and padding */}
      <motion.div
        className="text-center mb-8" // Reduced margin bottom
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-3"> {/* Smaller heading */}
          Revolutionize Your{' '}
          <span className="bg-gradient-to-r from-orange-400 to-red-600 bg-clip-text text-transparent">
            Video Creation
          </span>
        </h2>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto"> {/* Smaller text */}
          Our cutting-edge AI technology transforms your ideas into stunning, professional videos that captivate audiences and drive results.
        </p>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-7"> {/* Reduced gap */}
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-900 to-black border border-red-800 hover:border-red-600 transition-all duration-500 p-4" // Smaller border radius and padding
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.01 }} // Less hover scale
          >
            <div className="absolute inset-0 bg-gradient-to-br from-red-300/10 to-orange-300/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative p-4"> {/* Less padding */}
              <div className="flex items-start gap-4"> {/* Reduced gap */}
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-gradient-to-br from-orange-300 to-red-600 rounded-lg flex items-center justify-center text-white group-hover:scale-105 transition-transform duration-300"> {/* Smaller icon box */}
                    {feature.icon}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold mb-1 group-hover:text-orange-300 transition-colors duration-300"> {/* Smaller title */}
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed mb-2 text-sm"> {/* Smaller description */}
                    {feature.description}
                  </p>
                  <div className="relative h-24 rounded-md overflow-hidden"> {/* Smaller image */}
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
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
);

export default FeaturesSection;
