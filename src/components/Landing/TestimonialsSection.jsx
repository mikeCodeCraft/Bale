import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star } from 'lucide-react';

const TestimonialsSection = ({ testimonials, activeTestimonial, setActiveTestimonial }) => (
  <section id="testimonials" className="py-10"> {/* Reduced vertical padding */}
    <div className="max-w-3xl mx-auto px-2 sm:px-4 lg:px-6"> {/* Reduced max width and padding */}
      <motion.div
        className="text-center mb-8" // Reduced margin bottom
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl md:text-3xl font-bold mb-3"> {/* Smaller heading */}
          What Our{' '}
          <span className="bg-gradient-to-r from-red-400 to-orange-600 bg-clip-text text-transparent">
            Clients Say
          </span>
        </h2>
        <p className="text-base text-gray-300">Join hundreds of satisfied clients who’ve transformed their video marketing</p> {/* Smaller text */}
      </motion.div>
      <div className="relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTestimonial}
            className="max-w-2xl mx-auto text-center" // Reduced max width
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5 }}
          >
            <div className="backdrop-blur-md bg-white/5 rounded-xl p-6 md:p-8 border border-gray-800"> {/* Smaller card */}
              <div className="flex justify-center mb-4"> {/* Reduced margin */}
                {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <blockquote className="text-lg md:text-xl font-light mb-6 leading-relaxed"> {/* Smaller quote */}
                "{testimonials[activeTestimonial].content}"
              </blockquote>
              <div className="flex items-center justify-center gap-3"> {/* Reduced gap */}
                <img
                  src={testimonials[activeTestimonial].image}
                  alt={testimonials[activeTestimonial].name}
                  className="w-12 h-12 rounded-full object-cover" /> {/* Smaller avatar */}
                <div className="text-left">
                  <div className="font-semibold text-base">{testimonials[activeTestimonial].name}</div>
                  <div className="text-gray-400 text-sm">{testimonials[activeTestimonial].role}</div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
        {/* Testimonial Navigation */}
        <div className="flex justify-center mt-6 gap-1"> {/* Reduced margin and gap */}
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === activeTestimonial ? 'bg-red-500 w-5' : 'bg-gray-600 hover:bg-gray-500'
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
