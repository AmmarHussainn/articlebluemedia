import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Phone, Mail, Calendar } from 'lucide-react';
import { Button } from '../ui/Button';

export const CTASection = () => {
  return (
    <section className="py-20 relative overflow-hidden" id="contact">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-900 via-primary-800 to-secondary-900"></div>
      <div className="absolute inset-0 noise-bg"></div>
      <div className="absolute top-0 right-0 w-1/3 h-full bg-secondary-500/20 blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Customer Communications?
            </h2>
            
            <p className="text-xl text-white/80 mb-8">
              Schedule a personalized demo to see how our AI agents can revolutionize your inbound and outbound calls.
            </p>
            
            <div className="space-y-6 mb-8">
              {[
                { icon: <Phone className="w-6 h-6" />, text: "See our AI agents in action with a live demo" },
                { icon: <Calendar className="w-6 h-6" />, text: "Discuss your specific business requirements" },
                { icon: <Mail className="w-6 h-6" />, text: "Get a customized implementation plan" }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  className="flex items-center gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
                >
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white">
                    {item.icon}
                  </div>
                  <p className="text-white/90">{item.text}</p>
                </motion.div>
              ))}
            </div>
            
            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <Button 
                href="tel:+18001234567" 
                variant="gradient" 
                size="lg"
                className="bg-white text-primary-600 hover:bg-white/90"
                icon={<Phone className="w-5 h-5" />}
              >
                Call Us Now
              </Button>
              
              <Button 
                to="/contact" 
                variant="outline" 
                size="lg"
                className="border-white/30 text-white hover:bg-white/10"
                icon={<ArrowRight className="w-5 h-5" />}
                iconPosition="right"
              >
                Schedule a Demo
              </Button>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold mb-6">Request a Demo</h3>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-neutral-700 mb-1">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-300"
                      placeholder="John"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-neutral-700 mb-1">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-300"
                      placeholder="Doe"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-300"
                    placeholder="john.doe@example.com"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-neutral-700 mb-1">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-300"
                    placeholder="Your Company"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-300"
                    placeholder="+1 (123) 456-7890"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-1">
                    How can we help?
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-300"
                    placeholder="Tell us about your needs and challenges..."
                  ></textarea>
                </div>
                
                <div>
                  <motion.button
                    type="submit"
                    className="w-full btn btn-gradient"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Request Demo
                  </motion.button>
                </div>
                
                <p className="text-xs text-neutral-500 text-center">
                  By submitting this form, you agree to our <a href="#" className="text-primary-600 hover:underline">Privacy Policy</a> and <a href="#" className="text-primary-600 hover:underline">Terms of Service</a>.
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};