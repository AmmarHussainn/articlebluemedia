import React from 'react';
import { motion } from 'framer-motion';
import { Bot, PhoneCall, BarChart3, Zap, ChevronRight } from 'lucide-react';
import { Button } from '../ui/Button';

export const HeroSection = () => {
  return (
    <section className="relative pt-28 pb-20 md:pt-36 md:pb-32 overflow-hidden bg-gradient-to-br from-primary-900 via-primary-800 to-secondary-900 hero-shape">
      {/* Background Elements */}
      <div className="absolute inset-0 noise-bg opacity-10"></div>
      <div className="absolute top-0 right-0 w-full h-full overflow-hidden">
        <div className="w-[800px] h-[800px] absolute -top-[400px] -right-[400px] rounded-full bg-gradient-to-b from-primary-400/20 to-transparent"></div>
        <div className="w-[600px] h-[600px] absolute top-[10%] -right-[300px] rounded-full bg-gradient-to-b from-secondary-400/10 to-transparent"></div>
      </div>
      
      {/* Circuit Pattern */}
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/4792730/pexels-photo-4792730.jpeg?auto=compress&cs=tinysrgb&w=1600')] bg-no-repeat bg-cover opacity-5"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="mb-6 inline-block"
            >
              <span className="px-4 py-2 rounded-full bg-white/10 text-white text-sm font-medium backdrop-blur-sm border border-white/20">
                <span className="inline-block w-2 h-2 bg-accent-500 rounded-full mr-2 animate-pulse"></span>
                Next-Gen AI Calling Technology
              </span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
            >
              Transform Your <span className="gradient-text font-bold bg-gradient-to-r from-primary-300 to-secondary-300">Customer Calls</span> With Intelligent AI Agents
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-xl text-white/80 mb-8 max-w-xl"
            >
              Our AI agents handle both inbound and outbound calls with human-like conversation, 
              boosting efficiency while delivering exceptional customer experiences.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="flex flex-wrap gap-4"
            >
              <Button 
                to="/contact" 
                variant="gradient" 
                size="lg"
                icon={<ChevronRight className="w-5 h-5" />}
                iconPosition="right"
                className="shadow-lg shadow-primary-500/20"
              >
                Get Started Today
              </Button>
              
              <Button 
                href="https://youtu.be/example" 
                variant="outline" 
                size="lg"
                className="bg-white/10 border-white/30 text-white hover:bg-white/20"
                external
              >
                Watch Demo
              </Button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6"
            >
              {[
                { icon: <Bot className="w-6 h-6" />, text: "Lifelike AI Voices" },
                { icon: <PhoneCall className="w-6 h-6" />, text: "24/7 Availability" },
                { icon: <BarChart3 className="w-6 h-6" />, text: "99.9% Accuracy" },
                { icon: <Zap className="w-6 h-6" />, text: "Instant Deployment" }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 + (index * 0.1), duration: 0.5 }}
                  className="flex items-center gap-2 text-white/90"
                >
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                    {feature.icon}
                  </div>
                  <span className="text-sm">{feature.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="relative"
          >
            <div className="relative z-10 bg-white rounded-2xl shadow-2xl overflow-hidden border-8 border-white">
              <img 
                src="https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="AI Call Agent Dashboard" 
                className="w-full h-auto rounded-lg"
              />
              
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <h3 className="text-white text-lg font-medium mb-2">NexusAI Call Dashboard</h3>
                <p className="text-white/70 text-sm">Real-time analytics and conversation insights</p>
              </div>
            </div>
            
            {/* Floating Elements */}
            <motion.div 
              className="absolute -top-6 -left-6 bg-white rounded-lg shadow-lg p-4 z-20"
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 5 }}
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary-500 flex items-center justify-center text-white">
                  <Bot className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-medium text-neutral-800 text-sm">AI Agent</h4>
                  <p className="text-xs text-neutral-500">Active Calls: 27</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="absolute -bottom-6 -right-6 bg-white rounded-lg shadow-lg p-4 z-20"
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 4, delay: 1 }}
            >
              <div className="flex items-center gap-3">
                <div className="flex flex-col">
                  <h4 className="font-medium text-neutral-800 text-sm text-right">Customer Satisfaction</h4>
                  <p className="text-accent-500 font-bold text-right">98%</p>
                </div>
                <div className="w-10 h-10 rounded-full bg-accent-500 flex items-center justify-center text-white">
                  <BarChart3 className="w-6 h-6" />
                </div>
              </div>
            </motion.div>
            
            {/* Decorative elements */}
            <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] rounded-full bg-gradient-to-r from-primary-200/20 via-secondary-300/20 to-accent-200/20 blur-3xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};