import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const PricingSection = ({ pricingPlans }) => (
  <section id="pricing" className="py-20 relative">
    <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-blue-900/20" />
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Choose Your{' '}
          <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            Creative Plan
          </span>
        </h2>
        <p className="text-xl text-gray-300">Flexible pricing to match your video content needs</p>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {pricingPlans.map((plan, index) => (
          <motion.div
            key={index}
            className={`relative rounded-2xl p-8 border transition-all duration-500 hover:scale-105 ${
              plan.popular
                ? 'bg-gradient-to-br from-blue-900/50 to-purple-900/50 border-blue-500 shadow-2xl shadow-blue-500/20'
                : 'backdrop-blur-md bg-white/5 border-gray-800 hover:border-gray-600'
            }`}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            {plan.popular && (
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  Most Popular
                </span>
              </div>
            )}
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <p className="text-gray-400 mb-4">{plan.description}</p>
              <div className="flex items-baseline justify-center">
                <span className="text-5xl font-bold">{plan.price}</span>
                <span className="text-gray-400 ml-2">{plan.period}</span>
              </div>
            </div>
            <ul className="space-y-4 mb-8">
              {plan.features.map((feature, featureIndex) => (
                <li key={featureIndex} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-300">{feature}</span>
                </li>
              ))}
            </ul>
            <button
              className={`w-full py-4 rounded-lg font-semibold text-lg transition-all duration-300 ${
                plan.popular
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl'
                  : 'border border-gray-600 hover:border-gray-400 text-white hover:bg-white/5'
              }`}
            >
              Get Started
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default PricingSection;
