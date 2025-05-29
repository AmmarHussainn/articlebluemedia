import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { SectionHeading } from '../ui/SectionHeading';

export const TestimonialsSection = () => {
  const [swiper, setSwiper] = useState(null);
  
  const testimonials = [
    {
      quote: "NexusAI has completely transformed our customer service operations. The AI agents handle over 70% of our inbound calls, freeing our human agents to focus on complex issues. The ROI has been phenomenal.",
      author: "Sarah Johnson",
      position: "Customer Experience Director",
      company: "TechGlobal Solutions",
      rating: 5,
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      quote: "The outbound call capabilities have revolutionized our lead qualification process. We've increased our sales team efficiency by 58% while maintaining high-quality customer interactions.",
      author: "Michael Chen",
      position: "VP of Sales",
      company: "Innovate Corp",
      rating: 5,
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      quote: "I was skeptical about AI call agents at first, but NexusAI proved me wrong. The natural conversations and problem-solving capabilities are remarkable. Our customers can't tell they're talking to an AI.",
      author: "Rachel Williams",
      position: "Chief Technology Officer",
      company: "FutureTech Industries",
      rating: 5,
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      quote: "The implementation was seamless and the ongoing support is excellent. We've reduced our call center costs by 42% while improving our CSAT scores. It's been a game-changer for our business.",
      author: "James Wilson",
      position: "Operations Manager",
      company: "Global Retail Group",
      rating: 5,
      image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    }
  ];
  
  return (
    <section className="section bg-neutral-50 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full noise-bg"></div>
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-white to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <SectionHeading
          title="What Our Clients Say"
          subtitle="Discover how NexusAI is transforming businesses through intelligent AI agent technology"
          highlightWords={["Clients"]}
        />
        
        <div className="relative mt-12">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              breakpoints={{
                640: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 }
              }}
              autoplay={{ delay: 5000, disableOnInteraction: false }}
              pagination={{ clickable: true }}
              onSwiper={setSwiper}
              className="pb-16"
            >
              {testimonials.map((testimonial, index) => (
                <SwiperSlide key={index}>
                  <motion.div 
                    className="testimonial-card h-full flex flex-col"
                    whileHover={{ y: -10 }}
                  >
                    <div className="mb-6 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-full overflow-hidden">
                          <img 
                            src={testimonial.image} 
                            alt={testimonial.author}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        
                        <div>
                          <h4 className="font-semibold text-neutral-900">{testimonial.author}</h4>
                          <p className="text-sm text-neutral-500">{testimonial.position}</p>
                        </div>
                      </div>
                      
                      <div className="text-primary-500">
                        <Quote className="w-8 h-8 opacity-50" />
                      </div>
                    </div>
                    
                    <p className="text-neutral-700 flex-grow mb-6">"{testimonial.quote}"</p>
                    
                    <div className="mt-auto">
                      <div className="flex items-center justify-between">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i} 
                              className={`w-4 h-4 ${i < testimonial.rating ? 'text-warning-500 fill-warning-500' : 'text-neutral-300'}`} 
                            />
                          ))}
                        </div>
                        <p className="text-sm text-neutral-500">{testimonial.company}</p>
                      </div>
                    </div>
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>
            
            <div className="absolute top-1/2 left-4 transform -translate-y-1/2 z-10 hidden md:block">
              <button 
                onClick={() => swiper?.slidePrev()}
                className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-neutral-700 hover:bg-primary-50 hover:text-primary-600 transition-colors duration-300"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
            </div>
            
            <div className="absolute top-1/2 right-4 transform -translate-y-1/2 z-10 hidden md:block">
              <button 
                onClick={() => swiper?.slideNext()}
                className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-neutral-700 hover:bg-primary-50 hover:text-primary-600 transition-colors duration-300"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
        </div>
        
        {/* Logos Section */}
        <div className="mt-20">
          <motion.h3 
            className="text-center text-xl text-neutral-600 mb-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Trusted by leading companies worldwide
          </motion.h3>
          
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {[...Array(6)].map((_, index) => (
              <div key={index} className="flex justify-center">
                <div className="h-12 w-32 bg-neutral-200 rounded flex items-center justify-center text-neutral-500 font-bold text-sm">
                  LOGO {index + 1}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};