import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  PhoneIncoming, 
  PhoneOutgoing, 
  Brain, 
  LineChart, 
  Shield, 
  Clock, 
  MessageSquare, 
  Users,
  Check
} from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';

export const FeaturesSection = () => {
  const features = [
    {
      icon: <PhoneIncoming className="w-6 h-6" />,
      title: "Inbound Call AI Agents",
      description: "Handle customer inquiries, support requests, and information services with natural conversation flow.",
      color: "from-primary-500 to-primary-600"
    },
    {
      icon: <PhoneOutgoing className="w-6 h-6" />,
      title: "Outbound Call AI Agents",
      description: "Conduct follow-ups, appointment reminders, surveys, and lead qualification calls at scale.",
      color: "from-secondary-500 to-secondary-600"
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Natural Language Processing",
      description: "Advanced NLP enables our AI agents to understand context, accents, and complex customer requests.",
      color: "from-accent-500 to-accent-600"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Enterprise-Grade Security",
      description: "End-to-end encryption and compliance with industry standards to keep your data protected.",
      color: "from-success-500 to-success-600"
    },
    {
      icon: <LineChart className="w-6 h-6" />,
      title: "Real-time Analytics",
      description: "Gain actionable insights from every call with advanced analytics and reporting dashboards.",
      color: "from-warning-500 to-warning-600"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "24/7 Availability",
      description: "Your AI agents never sleep, ensuring round-the-clock service for your customers worldwide.",
      color: "from-primary-600 to-secondary-600"
    }
  ];

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section className="section bg-neutral-50 relative overflow-hidden" id="features">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-white to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-white to-transparent"></div>
      <div className="absolute -top-20 -right-20 w-80 h-80 bg-primary-100 rounded-full opacity-50 blur-3xl"></div>
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-secondary-100 rounded-full opacity-50 blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <SectionHeading
          title="Powerful AI Agent Features"
          subtitle="Our AI-powered virtual agents are designed to deliver exceptional customer experiences while maximizing operational efficiency."
          highlightWords={["AI Agent", "Features"]}
        />
        
        <motion.div 
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="featured-card"
            >
              <div className="relative z-10">
                <div className={`w-14 h-14 rounded-lg mb-6 flex items-center justify-center text-white bg-gradient-to-r ${feature.color} shadow-lg`}>
                  {feature.icon}
                </div>
                
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-neutral-600 mb-6">{feature.description}</p>
                
                <div className="space-y-2">
                  {[
                    "Seamless Integration",
                    "Customizable Workflows",
                    "Detailed Reporting"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <Check className="w-5 h-5 text-primary-500" />
                      <span className="text-sm text-neutral-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Advanced Features Highlight */}
        <div className="mt-20 bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <motion.h3 
                className="text-2xl md:text-3xl font-bold mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                Advanced Conversation Intelligence
              </motion.h3>
              
              <motion.p 
                className="text-neutral-600 mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                Our AI agents leverage cutting-edge natural language understanding to deliver 
                human-like conversations that adapt to customer needs in real-time.
              </motion.p>
              
              <motion.div 
                className="space-y-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {[
                  { icon: <MessageSquare className="w-5 h-5" />, title: "Context Awareness", description: "Maintains conversation context for natural interactions" },
                  { icon: <Users className="w-5 h-5" />, title: "Multi-Intent Recognition", description: "Understands complex customer requests with multiple intents" },
                  { icon: <Brain className="w-5 h-5" />, title: "Sentiment Analysis", description: "Adapts responses based on customer sentiment and emotion" }
                ].map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary-50 flex items-center justify-center flex-shrink-0">
                      <div className="text-primary-600">
                        {item.icon}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold">{item.title}</h4>
                      <p className="text-sm text-neutral-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-600 to-secondary-600 opacity-90"></div>
              <img 
                src="https://images.pexels.com/photos/7709085/pexels-photo-7709085.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Advanced AI Technology" 
                className="w-full h-full object-cover object-center mix-blend-overlay"
              />
              <div className="absolute inset-0 flex items-center justify-center p-8">
                <div className="text-white text-center">
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">Experience the Future of Customer Service</h3>
                  <p className="text-white/80 mb-6">Our AI agents handle over 1 million customer interactions daily with 98% satisfaction</p>
                  <motion.div 
                    className="inline-block"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <a 
                      href="#contact" 
                      className="btn btn-lg bg-white text-primary-600 hover:bg-white/90"
                    >
                      Schedule a Demo
                    </a>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};