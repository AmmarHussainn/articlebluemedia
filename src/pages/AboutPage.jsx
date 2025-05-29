import React from 'react';

import { motion } from 'framer-motion';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Users, Globe, Award, Lightbulb, Check } from 'lucide-react';

export const AboutPage = () => {
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
              About <span className="gradient-text bg-gradient-to-r from-primary-300 to-secondary-300">NexusAI</span>
            </h1>
            <p className="text-xl text-white/80 mb-8">
              We're on a mission to transform business communications through innovative AI technology.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
              <p className="text-lg text-neutral-700 mb-6">
                Founded in 2022 by a team of AI researchers and customer experience experts, NexusAI was born from a simple observation: businesses were struggling to scale their customer communications efficiently while maintaining quality.
              </p>
              <p className="text-lg text-neutral-700 mb-6">
                We set out to create AI agents that could handle both inbound and outbound calls with the empathy, intelligence, and problem-solving abilities of human agents, but with the scalability and consistency of technology.
              </p>
              <p className="text-lg text-neutral-700">
                Today, our AI agents handle millions of customer interactions every month for businesses across industries, delivering exceptional experiences while helping our clients optimize their operations.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="NexusAI Team" 
                  className="w-full h-auto"
                />
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -z-10 -bottom-10 -right-10 w-64 h-64 bg-primary-100 rounded-full"></div>
              <div className="absolute -z-10 -top-10 -left-10 w-40 h-40 bg-secondary-100 rounded-full"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20 bg-neutral-50">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Our Mission & Values"
            subtitle="Guiding principles that drive everything we do at NexusAI"
            highlightWords={["Mission", "Values"]}
          />
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white p-8 rounded-2xl shadow-soft"
            >
              <div className="w-16 h-16 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 mb-6">
                <Lightbulb className="w-8 h-8" />
              </div>
              
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-neutral-700 mb-6">
                To empower businesses with intelligent AI communication tools that deliver exceptional customer experiences while maximizing operational efficiency.
              </p>
              
              <div className="space-y-4">
                {[
                  "Transform customer service through innovation",
                  "Make AI technology accessible to businesses of all sizes",
                  "Create measurable value for our clients and their customers"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-primary-500 mt-1" />
                    <p className="text-neutral-700">{item}</p>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white p-8 rounded-2xl shadow-soft"
            >
              <div className="w-16 h-16 rounded-full bg-secondary-100 flex items-center justify-center text-secondary-600 mb-6">
                <Award className="w-8 h-8" />
              </div>
              
              <h3 className="text-2xl font-bold mb-4">Our Values</h3>
              
              <div className="space-y-6">
                {[
                  { 
                    title: "Innovation", 
                    description: "We're constantly pushing the boundaries of what AI can do in customer communications." 
                  },
                  { 
                    title: "Customer Obsession", 
                    description: "We measure our success by the success of our clients and the satisfaction of their customers." 
                  },
                  { 
                    title: "Integrity", 
                    description: "We're committed to ethical AI development and transparent business practices." 
                  },
                  { 
                    title: "Excellence", 
                    description: "We strive for excellence in everything we do, from our technology to our customer support." 
                  }
                ].map((value, index) => (
                  <div key={index}>
                    <h4 className="font-semibold text-lg">{value.title}</h4>
                    <p className="text-neutral-700">{value.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Meet Our Leadership Team"
            subtitle="The experts behind NexusAI's innovative technology and vision"
            highlightWords={["Leadership"]}
          />
          
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Alex Richardson",
                position: "CEO & Co-Founder",
                bio: "Former AI research lead with 15+ years of experience in conversational AI.",
                image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              },
              {
                name: "Sarah Chen",
                position: "CTO & Co-Founder",
                bio: "PhD in Computational Linguistics with expertise in natural language processing.",
                image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              },
              {
                name: "Michael Jordan",
                position: "Chief Product Officer",
                bio: "Former VP of Product at a leading CRM company with focus on customer experience.",
                image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              },
              {
                name: "Lisa Patel",
                position: "Chief Customer Officer",
                bio: "20+ years in customer success and support operations for enterprise software.",
                image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              }
            ].map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="bg-white rounded-xl shadow-soft overflow-hidden"
              >
                <div className="h-64 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-primary-600 font-medium mb-3">{member.position}</p>
                  <p className="text-neutral-600">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-primary-900 via-primary-800 to-secondary-900 relative overflow-hidden">
        <div className="absolute inset-0 noise-bg"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                icon: <Users className="w-10 h-10" />, 
                value: "50+", 
                label: "Team Members",
                description: "Passionate experts in AI, linguistics, and customer experience" 
              },
              { 
                icon: <Globe className="w-10 h-10" />, 
                value: "25+", 
                label: "Countries",
                description: "Supporting clients with global operations and multilingual needs" 
              },
              { 
                icon: <Award className="w-10 h-10" />, 
                value: "12", 
                label: "Industry Awards",
                description: "Recognized for innovation in AI and customer service technology" 
              }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 text-center"
              >
                <div className="w-20 h-20 mx-auto rounded-full bg-white/20 flex items-center justify-center text-white mb-6">
                  {stat.icon}
                </div>
                
                <h3 className="text-4xl font-bold text-white mb-2">{stat.value}</h3>
                <p className="text-xl text-white/80 mb-4">{stat.label}</p>
                <p className="text-white/60">{stat.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-3xl p-12 text-center max-w-4xl mx-auto relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center opacity-10"></div>
            
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Join Us on Our Mission
              </h2>
              
              <p className="text-lg text-neutral-700 mb-8 max-w-2xl mx-auto">
                Whether you're looking to transform your customer communications with AI or join our growing team, we'd love to connect with you.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4">
                <a href="/contact" className="btn btn-gradient">
                  Contact Us
                </a>
                
                <a href="/careers" className="btn btn-outline">
                  View Careers
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};