import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, X, PhoneIncoming, PhoneOutgoing, Bot, AlertCircle } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { Button } from '../ui/Button';

export const PricingSection = () => {
  const [isAnnual, setIsAnnual] = useState(true);
  
  const pricingPlans = [
    {
      name: "Starter",
      description: "Perfect for small businesses just getting started with AI agents",
      monthlyPrice: 499,
      annualPrice: 399,
      features: [
        { text: "Up to 5,000 minutes per month", included: true },
        { text: "Inbound Call AI Agents", included: true },
        { text: "Basic Call Analytics", included: true },
        { text: "Standard Voice Options", included: true },
        { text: "Email Support", included: true },
        { text: "Outbound Call AI Agents", included: false },
        { text: "Advanced Analytics", included: false },
        { text: "Custom Voice Options", included: false },
        { text: "Priority Support", included: false },
        { text: "API Access", included: false }
      ],
      icon: <PhoneIncoming className="w-6 h-6" />,
      accent: "border-primary-200 bg-primary-50",
      popular: false
    },
    {
      name: "Professional",
      description: "Ideal for growing businesses with higher call volumes",
      monthlyPrice: 999,
      annualPrice: 799,
      features: [
        { text: "Up to 25,000 minutes per month", included: true },
        { text: "Inbound Call AI Agents", included: true },
        { text: "Outbound Call AI Agents", included: true },
        { text: "Advanced Call Analytics", included: true },
        { text: "Premium Voice Options", included: true },
        { text: "Priority Email Support", included: true },
        { text: "Live Chat Support", included: true },
        { text: "Custom Workflows", included: true },
        { text: "API Access", included: false },
        { text: "Dedicated Account Manager", included: false }
      ],
      icon: <Bot className="w-6 h-6" />,
      accent: "border-secondary-200",
      popular: true
    },
    {
      name: "Enterprise",
      description: "Comprehensive solution for large organizations",
      monthlyPrice: 2499,
      annualPrice: 1999,
      features: [
        { text: "Unlimited minutes", included: true },
        { text: "Inbound Call AI Agents", included: true },
        { text: "Outbound Call AI Agents", included: true },
        { text: "Enterprise Analytics Suite", included: true },
        { text: "Custom Voice Development", included: true },
        { text: "24/7 Priority Support", included: true },
        { text: "Dedicated Account Manager", included: true },
        { text: "Advanced API Access", included: true },
        { text: "Custom Integration", included: true },
        { text: "SLA Guarantees", included: true }
      ],
      icon: <PhoneOutgoing className="w-6 h-6" />,
      accent: "border-accent-200 bg-accent-50",
      popular: false
    }
  ];
  
  return (
    <section className="section bg-white relative overflow-hidden" id="pricing">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-neutral-50 to-transparent"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-50 rounded-full -mb-20 -mr-20 opacity-50 blur-3xl"></div>
      <div className="absolute top-0 left-0 w-96 h-96 bg-secondary-50 rounded-full -mt-20 -ml-20 opacity-50 blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <SectionHeading
          title="Simple, Transparent Pricing"
          subtitle="Choose the plan that fits your business needs. All plans include our core AI agent technology."
          highlightWords={["Transparent", "Pricing"]}
        />
        
        {/* Billing Toggle */}
        <div className="flex items-center justify-center mb-12">
          <motion.div 
            className="bg-neutral-100 p-1 rounded-full flex items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <button
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                !isAnnual 
                  ? 'bg-white shadow-md text-primary-600' 
                  : 'text-neutral-600 hover:text-primary-600'
              }`}
              onClick={() => setIsAnnual(false)}
            >
              Monthly
            </button>
            
            <button
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                isAnnual 
                  ? 'bg-white shadow-md text-primary-600' 
                  : 'text-neutral-600 hover:text-primary-600'
              }`}
              onClick={() => setIsAnnual(true)}
            >
              Annual 
              <span className="ml-1 bg-accent-500 text-white text-xs px-2 py-0.5 rounded-full">
                Save 20%
              </span>
            </button>
          </motion.div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <motion.div 
              key={index}
              className={`pricing-card ${plan.popular ? 'popular' : ''} ${plan.accent}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <div className="w-12 h-12 rounded-full bg-white shadow-md mb-6 flex items-center justify-center text-primary-600">
                {plan.icon}
              </div>
              
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <p className="text-neutral-600 mb-6">{plan.description}</p>
              
              <div className="mb-6">
                <span className="text-4xl font-bold">
                  ${isAnnual ? plan.annualPrice : plan.monthlyPrice}
                </span>
                <span className="text-neutral-600">/month</span>
                
                {isAnnual && (
                  <p className="text-accent-600 text-sm mt-1">
                    Billed annually (${plan.annualPrice * 12}/year)
                  </p>
                )}
              </div>
              
              <Button 
                to="/contact" 
                variant={plan.popular ? "gradient" : "outline"} 
                className="w-full mb-8"
              >
                {plan.popular ? 'Get Started' : 'Choose Plan'}
              </Button>
              
              <h4 className="font-semibold mb-4 text-neutral-800">Features include:</h4>
              
              <ul className="space-y-3">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    {feature.included ? (
                      <Check className="w-5 h-5 text-success-500 mt-0.5 flex-shrink-0" />
                    ) : (
                      <X className="w-5 h-5 text-neutral-400 mt-0.5 flex-shrink-0" />
                    )}
                    <span className={`text-sm ${feature.included ? 'text-neutral-800' : 'text-neutral-500'}`}>
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
        
        {/* Enterprise CTA */}
        <motion.div 
          className="mt-16 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl p-8 text-white shadow-xl relative overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="absolute top-0 left-0 w-full h-full noise-bg"></div>
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-2">Need a custom solution?</h3>
              <p className="text-white/80 max-w-xl">
                Our enterprise team will work with you to create a tailored AI agent solution 
                that meets your specific business requirements.
              </p>
            </div>
            
            <Button 
              to="/contact"
              variant="primary"
              size="lg"
              className="whitespace-nowrap bg-white text-primary-600 hover:bg-white/90"
            >
              Contact Sales
            </Button>
          </div>
        </motion.div>
        
        {/* FAQ */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold mb-8 text-center">Frequently Asked Questions</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                question: "How quickly can I deploy AI agents?",
                answer: "Our standard deployment takes just 7-10 business days. We'll configure your AI agents to your specifications, integrate with your existing systems, and provide comprehensive training."
              },
              {
                question: "Can I customize the AI agent voices?",
                answer: "Yes! Professional and Enterprise plans include voice customization options. You can select from our premium voice library or work with us to develop a custom voice that matches your brand identity."
              },
              {
                question: "What languages are supported?",
                answer: "Our AI agents currently support 12 languages including English, Spanish, French, German, Italian, Portuguese, Japanese, Chinese, Korean, Russian, Arabic, and Hindi."
              },
              {
                question: "How do I monitor AI agent performance?",
                answer: "All plans include access to our analytics dashboard where you can monitor call volumes, duration, outcomes, customer satisfaction, and other key metrics in real-time."
              }
            ].map((faq, index) => (
              <motion.div 
                key={index}
                className="bg-white rounded-lg p-6 shadow-sm border border-neutral-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
                  <AlertCircle className="w-5 h-5 text-primary-500" />
                  {faq.question}
                </h4>
                <p className="text-neutral-600">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};