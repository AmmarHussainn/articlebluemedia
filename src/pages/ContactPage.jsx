import React from 'react';

import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export const ContactPage = () => {
  return (
    <>
    

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary-900 via-primary-800 to-secondary-900 relative overflow-hidden">
        <div className="absolute inset-0 noise-bg"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Get In <span className="gradient-text bg-gradient-to-r from-primary-300 to-secondary-300">Touch</span>
            </h1>
            <p className="text-xl text-white/80 mb-8">
              We'd love to hear from you. Contact our team to learn more about our AI agent solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
              <p className="text-neutral-600 mb-8">
                Fill out the form below and our team will get back to you within 24 hours.
              </p>
              
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
                  <label htmlFor="subject" className="block text-sm font-medium text-neutral-700 mb-1">
                    Subject
                  </label>
                  <select
                    id="subject"
                    className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-300"
                    required
                  >
                    <option value="">Select a subject</option>
                    <option value="demo">Request a Demo</option>
                    <option value="pricing">Pricing Inquiry</option>
                    <option value="support">Technical Support</option>
                    <option value="partnership">Partnership Opportunity</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-300"
                    placeholder="How can we help you?"
                    required
                  ></textarea>
                </div>
                
                <div>
                  <motion.button
                    type="submit"
                    className="btn btn-gradient"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Send Message
                  </motion.button>
                </div>
              </form>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-neutral-50 rounded-2xl p-8 shadow-soft mb-8">
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 flex-shrink-0">
                      <Phone className="w-6 h-6" />
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-lg">Phone</h4>
                      <a href="tel:+18001234567" className="text-neutral-600 hover:text-primary-600 transition-colors duration-300">
                        +1 (800) 123-4567
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 flex-shrink-0">
                      <Mail className="w-6 h-6" />
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-lg">Email</h4>
                      <a href="mailto:info@nexusai.com" className="text-neutral-600 hover:text-primary-600 transition-colors duration-300">
                        info@nexusai.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 flex-shrink-0">
                      <MapPin className="w-6 h-6" />
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-lg">Office</h4>
                      <p className="text-neutral-600">
                        1234 Tech Boulevard, Suite 500<br />
                        San Francisco, CA 94107<br />
                        United States
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 flex-shrink-0">
                      <Clock className="w-6 h-6" />
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-lg">Business Hours</h4>
                      <p className="text-neutral-600">
                        Monday - Friday: 9:00 AM - 6:00 PM (PST)<br />
                        Saturday & Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="rounded-2xl overflow-hidden h-80 shadow-soft">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.1034212892037!2d-122.40050562443471!3d37.78121841212818!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085807ded297e89%3A0x9cdf34c1cfb656f5!2sSan%20Francisco%2C%20CA%2094107!5e0!3m2!1sen!2sus!4v1699285200011!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Office Location"
                ></iframe>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
            
            <div className="space-y-6">
              {[
                {
                  question: "How quickly can I expect a response?",
                  answer: "We typically respond to all inquiries within 24 business hours. For urgent matters, please call our support line directly."
                },
                {
                  question: "Can I schedule a product demo?",
                  answer: "Yes! You can request a demo through our contact form or by calling our sales team directly. We'll schedule a time that works for you and your team."
                },
                {
                  question: "Do you offer custom solutions?",
                  answer: "Absolutely. We understand that every business has unique needs. Our team can work with you to develop custom AI agent solutions tailored to your specific requirements."
                },
                {
                  question: "Is there a trial period for your services?",
                  answer: "Yes, we offer a 14-day trial for our Professional plan. This allows you to experience the capabilities of our AI agents before making a commitment."
                }
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className="bg-white p-6 rounded-xl shadow-soft"
                >
                  <h3 className="text-xl font-bold mb-3">{faq.question}</h3>
                  <p className="text-neutral-600">{faq.answer}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};