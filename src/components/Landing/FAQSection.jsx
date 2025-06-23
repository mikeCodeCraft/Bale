import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const FAQSection = ({ faqs, openFaq, setOpenFaq }) => (
  <section id="faq" className="py-20">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Frequently Asked{' '}
          <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            Questions
          </span>
        </h2>
        <p className="text-xl text-gray-300">Everything you need to know about Bale’s AI video creation</p>
      </motion.div>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            className="backdrop-blur-md bg-white/5 rounded-lg border border-gray-800"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <button
              className="w-full p-6 text-left flex justify-between items-center hover:bg-white/5 transition-colors duration-300"
              onClick={() => setOpenFaq(openFaq === index ? null : index)}
            >
              <span className="font-semibold text-lg pr-4">{faq.question}</span>
              <ChevronDown
                className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${
                  openFaq === index ? 'transform rotate-180' : ''
                }`}
              />
            </button>
            <AnimatePresence>
              {openFaq === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <p className="px-6 pb-6 text-gray-300 leading-relaxed">{faq.answer}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default FAQSection;
