import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const PricingSection = ({ pricingPlans, setIsBookCallOpen }) => (
  <section id="pricing" className="py-10 relative"> 
    <div className="absolute inset-0 " />
    <div className="max-w-4xl mx-auto px-2 sm:px-4 lg:px-6 relative z-10"> 
      <motion.div
        className="text-center mb-8" 
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl md:text-3xl font-bold mb-3"> 
          No Risk,{' '}
          <span className="bg-gradient-to-r from-red-400 to-orange-600 bg-clip-text text-transparent">
            All Reward
          </span>
        </h2>
        <p className="text-base text-gray-300">30-Days “Double-Value” Guarantee. 30-Days 
If your first month’s videos aren’t worth at least 2× what you paid, we work free until they are</p>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-7 items-stretch"> 
        {pricingPlans.map((plan, index) => (
          <motion.div
            key={index}
            className={
              'group relative flex flex-col h-full rounded-xl p-4 border transition-all duration-500 hover:scale-105 bg-gradient-to-br from-red-900/50 to-orange-900/50 border-red-500 shadow-xl shadow-red-500/20'
            }
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            {plan.popular && (
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-gradient-to-r from-red-500 to-orange-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                  Most Popular
                </span>
              </div>
            )}
            <div className="text-center mb-4"> 
              <h3 className="text-lg font-bold mb-1">{plan.name}</h3>
              <p className="text-gray-400 mb-2 text-sm">{plan.description}</p>
              <div className="flex items-baseline justify-center">
                <span className="text-3xl font-bold">{plan.price}</span>
                <span className="text-gray-400 ml-1 text-sm">{plan.period}</span>
              </div>
            </div>
            <ul className="space-y-2 mb-4 flex-1"> 
              {plan.features.map((feature, featureIndex) => (
                <li key={featureIndex} className="flex items-center gap-2 text-sm">
                  <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                  <span className="text-gray-300">{feature}</span>
                </li>
              ))}
            </ul>
            <div className="mt-auto"> 
              <button
                className={`w-full py-2 rounded-md font-semibold text-base transition-all duration-300 bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white shadow-md hover:shadow-lg`}
                onClick={() => setIsBookCallOpen(true)}
              >
                Book Demo
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default PricingSection;
