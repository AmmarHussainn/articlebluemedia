import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram, Bot, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <footer className="bg-neutral-900 text-white pt-16 pb-8 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 noise-bg pointer-events-none"></div>
      <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-primary-900/30 to-transparent pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-secondary-900/20 to-transparent pointer-events-none"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Newsletter Section */}
        <div className="mb-16 bg-gradient-to-r from-primary-900/80 to-secondary-900/80 p-6 md:p-10 rounded-2xl shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              variants={fadeIn}
            >
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Stay Updated with AI Trends</h3>
              <p className="text-neutral-300 mb-0 md:mb-4 text-base md:text-lg">
                Subscribe to our newsletter for the latest AI agent insights, industry news, and special offers.
              </p>
            </motion.div>
            
            <motion.form 
              className="flex flex-col sm:flex-row gap-3"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              variants={fadeIn}
            >
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-grow px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary-500"
                required
              />
              <button 
                type="submit" 
                className="btn btn-gradient px-6 py-3"
              >
                Subscribe
                <ArrowRight className="ml-2 w-4 h-4" />
              </button>
            </motion.form>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            variants={fadeIn}
          >
            <Link to="/" className="flex items-center gap-2 text-2xl font-bold mb-6">
              <Bot className="w-8 h-8 text-primary-500" />
              <span>Nexus<span className="text-primary-500">AI</span></span>
            </Link>
            <p className="text-neutral-300 mb-6">
              Transforming business communications with cutting-edge AI agents for inbound and outbound calls.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: <Facebook className="w-5 h-5" />, href: "#" },
                { icon: <Twitter className="w-5 h-5" />, href: "#" },
                { icon: <Linkedin className="w-5 h-5" />, href: "#" },
                { icon: <Instagram className="w-5 h-5" />, href: "#" }
              ].map((social, index) => (
                <motion.a 
                  key={index}
                  href={social.href} 
                  className="text-neutral-400 hover:text-primary-500 bg-neutral-800/50 p-2 rounded-full transition-colors duration-300"
                  whileHover={{ y: -3, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            variants={fadeIn}
          >
            <h5 className="text-xl font-semibold mb-6">Quick Links</h5>
            <ul className="space-y-3">
              {[
                { name: 'Home', path: '/' },
                { name: 'About Us', path: '/about' },
                { name: 'Services', path: '/services' },
                { name: 'Pricing', path: '/pricing' },
                { name: 'Contact', path: '/contact' }
              ].map((link, index) => (
                <li key={index}>
                  <Link to={link.path} className="text-neutral-300 hover:text-primary-500 transition-colors duration-300 flex items-center">
                    <ArrowRight className="w-4 h-4 mr-2 opacity-0 -ml-6 transition-all duration-300 group-hover:opacity-100 group-hover:ml-0" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            variants={fadeIn}
          >
            <h5 className="text-xl font-semibold mb-6">Services</h5>
            <ul className="space-y-3">
              {[
                { name: 'Inbound Call Agents', path: '/services#inbound' },
                { name: 'Outbound Call Agents', path: '/services#outbound' },
                { name: 'Custom AI Solutions', path: '/services#custom' },
                { name: 'AI Integration', path: '/services#integration' },
                { name: 'Analytics & Reporting', path: '/services#analytics' }
              ].map((service, index) => (
                <li key={index}>
                  <Link to={service.path} className="text-neutral-300 hover:text-primary-500 transition-colors duration-300 group flex items-center">
                    <ArrowRight className="w-4 h-4 mr-2 opacity-0 -ml-6 transition-all duration-300 group-hover:opacity-100 group-hover:ml-0" />
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            variants={fadeIn}
          >
            <h5 className="text-xl font-semibold mb-6">Contact Us</h5>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary-500 mt-1 flex-shrink-0" />
                <span className="text-neutral-300">
                  1234 Tech Boulevard, Suite 500<br />
                  San Francisco, CA 94107
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary-500 flex-shrink-0" />
                <a href="tel:+18001234567" className="text-neutral-300 hover:text-primary-500 transition-colors duration-300">
                  +1 (800) 123-4567
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary-500 flex-shrink-0" />
                <a href="mailto:info@nexusai.com" className="text-neutral-300 hover:text-primary-500 transition-colors duration-300">
                  info@nexusai.com
                </a>
              </li>
            </ul>
          </motion.div>
        </div>
        
        <hr className="border-neutral-800 mb-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-neutral-400 text-sm mb-4 md:mb-0">
            &copy; {currentYear} NexusAI. All rights reserved.
          </p>
          <div className="flex space-x-6">
            {[
              { name: 'Privacy Policy', href: '#' },
              { name: 'Terms of Service', href: '#' },
              { name: 'Cookie Policy', href: '#' }
            ].map((link, index) => (
              <a 
                key={index}
                href={link.href} 
                className="text-neutral-400 hover:text-primary-500 text-sm transition-colors duration-300"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};