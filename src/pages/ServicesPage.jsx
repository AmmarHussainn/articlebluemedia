import React from 'react';

import { motion } from 'framer-motion';
import { SectionHeading } from '../components/ui/SectionHeading';
import { 
  PhoneIncoming, 
  PhoneOutgoing, 
  FileBarChart, 
  Brain, 
  Headphones, 
  UserCheck, 
  Settings, 
  RefreshCw,
  Check,
  ArrowRight
} from 'lucide-react';
import { Button } from '../components/ui/Button';

export const ServicesPage = () => {
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
              Our <span className="gradient-text bg-gradient-to-r from-primary-300 to-secondary-300">AI Agent</span> Services
            </h1>
            <p className="text-xl text-white/80 mb-8">
              Comprehensive solutions designed to transform your business communications
            </p>
          </motion.div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Intelligent Communication Solutions"
            subtitle="Our AI agents are designed to handle various aspects of your business communication needs"
            highlightWords={["Intelligent", "Communication"]}
          />
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: <PhoneIncoming className="w-8 h-8" />,
                title: "Inbound Call AI Agents",
                description: "Handle customer inquiries, support requests, and information services with natural conversation flow.",
                color: "from-primary-500 to-primary-600",
                id: "inbound"
              },
              {
                icon: <PhoneOutgoing className="w-8 h-8" />,
                title: "Outbound Call AI Agents",
                description: "Conduct follow-ups, appointment reminders, surveys, and lead qualification calls at scale.",
                color: "from-secondary-500 to-secondary-600",
                id: "outbound"
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                id={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="bg-white rounded-2xl shadow-xl p-8 overflow-hidden relative border border-neutral-100"
              >
                <div className={`absolute top-0 left-0 w-full h-2 bg-gradient-to-r ${service.color}`}></div>
                
                <div className={`w-16 h-16 rounded-lg mb-6 flex items-center justify-center text-white bg-gradient-to-r ${service.color} shadow-lg`}>
                  {service.icon}
                </div>
                
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-neutral-600 mb-6">{service.description}</p>
                
                <div className="space-y-4 mb-8">
                  {[
                    ...(index === 0 ? [
                      "Customer Support & Service",
                      "Order Status & Tracking",
                      "Information & FAQs",
                      "Appointment Scheduling",
                      "Technical Troubleshooting"
                    ] : [
                      "Appointment Reminders",
                      "Lead Qualification",
                      "Customer Surveys & Feedback",
                      "Account Updates & Notifications",
                      "Renewal & Reorder Prompts"
                    ])
                  ].map((feature, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-primary-500 mt-1" />
                      <p className="text-neutral-700">{feature}</p>
                    </div>
                  ))}
                </div>
                
                <Button 
                  to="/contact" 
                  variant="outline" 
                  icon={<ArrowRight className="w-5 h-5" />}
                  iconPosition="right"
                >
                  Learn More
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-neutral-50" id="integration">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Additional Services & Solutions"
            subtitle="Complementary offerings to enhance your AI agent implementation"
            highlightWords={["Additional", "Solutions"]}
          />
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <FileBarChart className="w-6 h-6" />,
                title: "Analytics & Reporting",
                description: "Gain actionable insights from customer conversations with advanced analytics dashboards.",
                id: "analytics"
              },
              {
                icon: <Brain className="w-6 h-6" />,
                title: "Custom AI Solutions",
                description: "Tailored AI implementations designed to address your unique business challenges.",
                id: "custom"
              },
              {
                icon: <Settings className="w-6 h-6" />,
                title: "System Integration",
                description: "Seamless integration with your existing CRM, helpdesk, and communications systems.",
              },
              {
                icon: <UserCheck className="w-6 h-6" />,
                title: "Training & Onboarding",
                description: "Comprehensive training for your team to maximize the value of our AI solutions.",
              },
              {
                icon: <Headphones className="w-6 h-6" />,
                title: "Ongoing Support",
                description: "Dedicated support to ensure your AI agents are performing at their best.",
              },
              {
                icon: <RefreshCw className="w-6 h-6" />,
                title: "Continuous Improvement",
                description: "Regular updates and optimizations based on conversation data and performance metrics.",
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                id={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="bg-white p-6 rounded-xl shadow-soft border border-neutral-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-primary-50 flex items-center justify-center text-primary-600 mb-4">
                  {service.icon}
                </div>
                
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-neutral-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Our Implementation Process"
            subtitle="A structured approach to delivering exceptional AI agent solutions"
            highlightWords={["Implementation"]}
          />
          
          <div className="mt-16 relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-primary-100 hidden md:block"></div>
            
            {[
              {
                title: "Discovery & Requirements",
                description: "We start by understanding your business goals, communication workflows, and specific requirements.",
                icon: <div className="text-2xl font-bold">1</div>
              },
              {
                title: "Solution Design",
                description: "Our team designs a customized AI agent solution tailored to your needs and integration points.",
                icon: <div className="text-2xl font-bold">2</div>
              },
              {
                title: "Development & Configuration",
                description: "We build and configure your AI agents with the appropriate conversation flows and integrations.",
                icon: <div className="text-2xl font-bold">3</div>
              },
              {
                title: "Testing & Optimization",
                description: "Rigorous testing ensures your AI agents perform accurately and effectively in real-world scenarios.",
                icon: <div className="text-2xl font-bold">4</div>
              },
              {
                title: "Deployment & Training",
                description: "We deploy your solution and provide comprehensive training for your team.",
                icon: <div className="text-2xl font-bold">5</div>
              },
              {
                title: "Ongoing Support & Improvement",
                description: "Our team continuously monitors, supports, and enhances your AI agents based on performance data.",
                icon: <div className="text-2xl font-bold">6</div>
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="mb-12 md:mb-24 relative"
              >
                <div className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center`}>
                  {/* Timeline node */}
                  <div className="w-12 h-12 rounded-full bg-primary-600 text-white flex items-center justify-center z-10 mb-4 md:mb-0">
                    {step.icon}
                  </div>
                  
                  {/* Content */}
                  <div className={`md:w-5/12 ${index % 2 === 0 ? 'md:mr-auto md:text-right md:pr-16' : 'md:ml-auto md:pl-16'}`}>
                    <div className="bg-white p-6 rounded-xl shadow-soft border border-neutral-100">
                      <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                      <p className="text-neutral-600">{step.description}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary-900 via-primary-800 to-secondary-900 relative overflow-hidden">
        <div className="absolute inset-0 noise-bg"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-3xl md:text-4xl font-bold text-white mb-6"
            >
              Ready to Transform Your Customer Communications?
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-xl text-white/80 mb-8"
            >
              Schedule a consultation with our team to discuss how our AI agent solutions can help your business.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <Button 
                to="/contact" 
                variant="primary" 
                size="lg"
                className="bg-white text-primary-600 hover:bg-white/90"
              >
                Schedule a Consultation
              </Button>
              
              <Button 
                to="/pricing" 
                variant="outline" 
                size="lg"
                className="border-white/30 text-white hover:bg-white/10"
              >
                View Pricing
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};