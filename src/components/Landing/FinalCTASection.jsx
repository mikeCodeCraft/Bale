import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const FinalCTASection = () => (
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
          Book Free Call
          <ArrowRight className="w-6 h-6" />
        </motion.button>
        <p className="text-gray-400 mt-4">No credit card required </p>
      </motion.div>
    </div>
  </section>
);

export default FinalCTASection;
