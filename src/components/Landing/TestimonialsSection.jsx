import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star } from 'lucide-react';

const TestimonialsSection = ({ testimonials, activeTestimonial, setActiveTestimonial }) => (
  <section id="testimonials" className="py-20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          What Our{' '}
          <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            Clients Say
          </span>
        </h2>
        <p className="text-xl text-gray-300">Join hundreds of satisfied clients who’ve transformed their video marketing</p>
      </motion.div>
      <div className="relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTestimonial}
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5 }}
          >
            <div className="backdrop-blur-md bg-white/5 rounded-2xl p-8 md:p-12 border border-gray-800">
              <div className="flex justify-center mb-6">
                {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                ))}
              </div>
              <blockquote className="text-2xl md:text-3xl font-light mb-8 leading-relaxed">
                "{testimonials[activeTestimonial].content}"
              </blockquote>
              <div className="flex items-center justify-center gap-4">
                <img
                  src={testimonials[activeTestimonial].image}
                  alt={testimonials[activeTestimonial].name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div className="text-left">
                  <div className="font-semibold text-lg">{testimonials[activeTestimonial].name}</div>
                  <div className="text-gray-400">{testimonials[activeTestimonial].role}</div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
        {/* Testimonial Navigation */}
        <div className="flex justify-center mt-8 gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === activeTestimonial ? 'bg-blue-500 w-8' : 'bg-gray-600 hover:bg-gray-500'
              }`}
              onClick={() => setActiveTestimonial(index)}
            />
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
