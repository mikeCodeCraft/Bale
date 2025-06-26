import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const FinalCTASection = ({ setIsBookCallOpen }) => (
  <section className="py-8 relative overflow-hidden"> {/* Reduced vertical padding */}
    <div className="absolute inset-0 " />
    <div className="max-w-xl mx-auto px-2 sm:px-4 lg:px-6 text-center relative z-10"> {/* Reduced max width and padding */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl md:text-3xl font-bold mb-3"> {/* Smaller heading */}
          Ready to Create{' '}
          <span className="bg-gradient-to-r from-red-400 to-orange-600 bg-clip-text text-transparent">
            Stunning Videos?
          </span>
        </h2>
        <p className="text-base text-gray-300 mb-4 max-w-md mx-auto"> {/* Smaller text */}
          Join the AI video revolution today and transform your content strategy forever.
        </p>
        <motion.button
          className="bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white px-6 py-3 rounded-md font-bold text-base flex items-center gap-2 mx-auto shadow-lg hover:shadow-red-500/25 transition-all duration-300" // Smaller button
          whileHover={{ scale: 1.05, boxShadow: '0 10px 20px rgba(248, 113, 113, 0.2)' }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsBookCallOpen(true)}
        >
          Book Free Call
          <ArrowRight className="w-5 h-5" />
        </motion.button>
      </motion.div>
    </div>
  </section>
);

export default FinalCTASection;
