import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import { Clock, Users, Building, Award, TrendingUp } from 'lucide-react';

export const StatsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const stats = [
    { 
      icon: <Clock className="w-8 h-8" />, 
      value: 24, 
      suffix: "/7", 
      label: "Availability" 
    },
    { 
      icon: <Users className="w-8 h-8" />, 
      value: 500000, 
      prefix: "+", 
      label: "Daily Calls Handled" 
    },
    { 
      icon: <Building className="w-8 h-8" />, 
      value: 250, 
      prefix: "+", 
      label: "Enterprise Clients" 
    },
    { 
      icon: <Award className="w-8 h-8" />, 
      value: 99.8, 
      suffix: "%", 
      label: "Service Uptime" 
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-primary-900 via-primary-800 to-secondary-900 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 noise-bg"></div>
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-white/10 to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Trusted by Industry Leaders Worldwide
          </motion.h2>
          
          <motion.p 
            className="text-xl text-white/80"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Our AI agents are revolutionizing how businesses connect with their customers.
          </motion.p>
        </div>
        
        <motion.div 
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 + (index * 0.1) }}
              whileHover={{ translateY: -10, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white/20 flex items-center justify-center text-white">
                {stat.icon}
              </div>
              
              <h3 className="text-4xl font-bold text-white mb-2">
                {stat.prefix && <span>{stat.prefix}</span>}
                {inView ? (
                  <CountUp 
                    end={stat.value} 
                    duration={2.5} 
                    separator="," 
                    decimals={stat.value % 1 !== 0 ? 1 : 0}
                    decimal="."
                  />
                ) : '0'}
                {stat.suffix && <span>{stat.suffix}</span>}
              </h3>
              
              <p className="text-white/80 text-lg">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Growth metric */}
        <motion.div 
          className="mt-16 bg-white/5 border border-white/20 rounded-2xl p-8 backdrop-blur-md"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 rounded-full bg-accent-500/20 flex items-center justify-center text-accent-500">
                <TrendingUp className="w-8 h-8" />
              </div>
              
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-white">
                  <span className="text-accent-400">
                    {inView ? <CountUp end={47} duration={3} /> : '0'}%
                  </span> Increase in Conversion Rate
                </h3>
                <p className="text-white/70">Average improvement reported by our enterprise clients</p>
              </div>
            </div>
            
            <motion.a 
              href="#contact" 
              className="btn btn-accent"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              See How We Do It
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};