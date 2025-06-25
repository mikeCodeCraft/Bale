import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const FAQSection = ({ faqs, openFaq, setOpenFaq }) => (
  <section id="faq" className="py-10"> 
    <div className="max-w-2xl mx-auto px-2 sm:px-4 lg:px-6"> 
      <motion.div
        className="text-center mb-8" 
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl md:text-3xl font-bold mb-3"> 
          Frequently Asked{' '}
          <span className="bg-gradient-to-r from-red-400 to-orange-600 bg-clip-text text-transparent">
            Questions
          </span>
        </h2>
        <p className="text-base text-gray-300">Everything you need to know about Bale’s AI video creation</p> 
      </motion.div>
      <div className="space-y-2"> 
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            className="backdrop-blur-md bg-white/5 rounded-md border border-gray-800" 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <button
              className="w-full p-4 text-left flex justify-between items-center hover:bg-white/5 transition-colors duration-300" 
              onClick={() => setOpenFaq(openFaq === index ? null : index)}
            >
              <span className="font-semibold text-base pr-2">{faq.question}</span> 
              <ChevronDown
                className={`w-4 h-4 text-gray-400 transition-transform duration-300 ${
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
                  <p className="px-4 pb-4 text-gray-300 leading-relaxed text-sm">{faq.answer}</p> 
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
