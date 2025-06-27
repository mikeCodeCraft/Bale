import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  Calendar, 
  Clock, 
  User, 
  Mail, 
  Phone, 
  Building, 
  MessageSquare,
  Video,
  CheckCircle,
  AlertCircle
} from 'lucide-react';

const BookCallModal = ({ isOpen, onClose, isDarkMode }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    preferredDate: '',
    preferredTime: '',
    message: '',
    callType: 'consultation'
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const modalRef = useRef(null);

  useEffect(() => {
    if (isSubmitted && modalRef.current) {
      modalRef.current.scrollTop = 0;
    }
  }, [isSubmitted]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.company.trim()) newErrors.company = 'Company is required';
    if (!formData.preferredDate) newErrors.preferredDate = 'Date is required';
    if (!formData.preferredTime) newErrors.preferredTime = 'Time is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Remove auto-close and reset logic here
  };

  const callTypes = [
    { value: 'consultation', label: 'Free Consultation', duration: '30 min' },
    { value: 'demo', label: 'Product Demo', duration: '30 min' },
    { value: 'strategy', label: 'Strategy Session', duration: '30 min' }
  ];

  // Get tomorrow's date as minimum selectable date
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const minDate = tomorrow.toISOString().split('T')[0];

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)' }}
        onClick={onClose}
      >
        <motion.div
          ref={modalRef}
          initial={{ scale: 0.8, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.8, opacity: 0, y: 20 }}
          transition={{ type: "spring", duration: 0.5 }}
          className={`relative w-full max-w-2xl max-h-[90vh] bg-white rounded-2xl shadow-2xl ${isSubmitted ? 'overflow-hidden' : 'overflow-y-auto'}`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="relative bg-gradient-to-r from-red-600 to-orange-600 p-6 rounded-t-2xl">
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 text-white hover:bg-white/20 rounded-lg transition-colors duration-200"
            >
              <X className="w-6 h-6" />
            </button>
            
            <div className="flex items-center gap-3 text-white">
              <Video className="w-8 h-8" />
              <div>
                <h2 className="text-2xl font-bold">Book Your Strategy Call</h2>
                <p className="text-red-100">Let's discuss how AI can transform your video content</p>
              </div>
            </div>
          </div>

          {/* Success State */}
          <AnimatePresence>
            {isSubmitted && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="absolute inset-0 bg-white rounded-2xl flex items-center justify-center z-10"
              >
                <div className="text-center p-8 w-full">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2 }}
                    className="w-20 h-20 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6"
                  >
                    <CheckCircle className="w-10 h-10 text-white" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Call Booked Successfully!</h3>
                  <p className="text-gray-600 mb-4">
                    We've sent you a Google Meet invitation with all the details.
                  </p>
                  <button
                    className="mt-4 px-6 py-2 bg-gradient-to-r from-red-600 to-orange-600 text-white rounded-lg font-semibold hover:from-red-700 hover:to-orange-700 transition-all"
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        company: '',
                        phone: '',
                        preferredDate: '',
                        preferredTime: '',
                        message: '',
                        callType: 'consultation'
                      });
                      onClose();
                    }}
                  >
                    Close
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Form Content */}
          <div className="p-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Call Type Selection */}
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-3">
                  Select Call Type
                </label>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {callTypes.map((type) => (
                    <label
                      key={type.value}
                      className={`relative p-4 border-2 rounded-lg cursor-pointer transition-all duration-200 hover:border-orange-400 ${
                        formData.callType === type.value
                          ? 'border-red-500 bg-gradient-to-r from-red-50 to-orange-50'
                          : 'border-gray-200 hover:bg-gray-50'
                      }`}
                    >
                      <input
                        type="radio"
                        name="callType"
                        value={type.value}
                        checked={formData.callType === type.value}
                        onChange={handleChange}
                        className="sr-only"
                      />
                      <div className="text-center">
                        <div className="font-semibold text-gray-900">{type.label}</div>
                        <div className="text-sm text-gray-500">{type.duration}</div>
                      </div>
                      {formData.callType === type.value && (
                        <div className="absolute top-2 right-2 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                        </div>
                      )}
                    </label>
                  ))}
                </div>
              </div>

              {/* Personal Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    <User className="w-4 h-4 inline mr-2" />
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-0 transition-colors duration-200 ${
                      errors.name
                        ? 'border-red-500 focus:border-red-600'
                        : 'border-gray-200 focus:border-orange-500'
                    }`}
                    placeholder="John Doe"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-4 h-4" />
                      {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    <Mail className="w-4 h-4 inline mr-2" />
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-0 transition-colors duration-200 ${
                      errors.email
                        ? 'border-red-500 focus:border-red-600'
                        : 'border-gray-200 focus:border-orange-500'
                    }`}
                    placeholder="john@company.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-4 h-4" />
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    <Building className="w-4 h-4 inline mr-2" />
                    Company *
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-0 transition-colors duration-200 ${
                      errors.company
                        ? 'border-red-500 focus:border-red-600'
                        : 'border-gray-200 focus:border-orange-500'
                    }`}
                    placeholder="Your Company"
                  />
                  {errors.company && (
                    <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-4 h-4" />
                      {errors.company}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    <Phone className="w-4 h-4 inline mr-2" />
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-0 focus:border-orange-500 transition-colors duration-200"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
              </div>

              {/* Date & Time */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    <Calendar className="w-4 h-4 inline mr-2" />
                    Preferred Date *
                  </label>
                  <input
                    type="date"
                    name="preferredDate"
                    value={formData.preferredDate}
                    onChange={handleChange}
                    min={minDate}
                    className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-0 transition-colors duration-200 ${
                      errors.preferredDate
                        ? 'border-red-500 focus:border-red-600'
                        : 'border-gray-200 focus:border-orange-500'
                    }`}
                  />
                  {errors.preferredDate && (
                    <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-4 h-4" />
                      {errors.preferredDate}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    <Clock className="w-4 h-4 inline mr-2" />
                    Preferred Time *
                  </label>
                  <select
                    name="preferredTime"
                    value={formData.preferredTime}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-0 transition-colors duration-200 ${
                      errors.preferredTime
                        ? 'border-red-500 focus:border-red-600'
                        : 'border-gray-200 focus:border-orange-500'
                    }`}
                  >
                    <option value="">Select time</option>
                    <option value="09:00">9:00 AM</option>
                    <option value="10:00">10:00 AM</option>
                    <option value="11:00">11:00 AM</option>
                    <option value="14:00">2:00 PM</option>
                    <option value="15:00">3:00 PM</option>
                    <option value="16:00">4:00 PM</option>
                    <option value="17:00">5:00 PM</option>
                  </select>
                  {errors.preferredTime && (
                    <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-4 h-4" />
                      {errors.preferredTime}
                    </p>
                  )}
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  <MessageSquare className="w-4 h-4 inline mr-2" />
                  Tell us about your project
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-0 focus:border-orange-500 transition-colors duration-200 resize-none"
                  placeholder="What type of videos are you looking to create? What are your current challenges with video content?"
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 disabled:from-gray-400 disabled:to-gray-500 text-white font-bold py-4 px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
                  whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                  whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                >
                  {isSubmitting ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                      />
                      Booking Your Call...
                    </>
                  ) : (
                    <>
                      <Video className="w-5 h-5" />
                      Book Strategy Call
                    </>
                  )}
                </motion.button>
              </div>

              {/* Footer Note */}
              <div className="text-center text-sm text-gray-500 pt-2">
                <p>We'll send you a Google Meet link and calendar invite within 24 hours.</p>
                <p className="mt-1">All calls are 100% free with no commitments.</p>
              </div>
            </form>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default BookCallModal;