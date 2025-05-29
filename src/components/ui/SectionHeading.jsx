import React from 'react';
import { motion } from 'framer-motion';

export const SectionHeading = ({
  title,
  subtitle,
  centered = true,
  className = '',
  titleClassName = '',
  subtitleClassName = '',
  highlightWords = []
}) => {
  // Function to highlight specific words in the title
  const highlightTitle = (text) => {
    if (highlightWords.length === 0) return text;
    
    let parts = [text];
    highlightWords.forEach(word => {
      parts = parts.flatMap(part => {
        if (typeof part === 'string') {
          const splitText = part.split(new RegExp(`(${word})`, 'gi'));
          return splitText.map(text => 
            text.toLowerCase() === word.toLowerCase() 
              ? <span key={Math.random()} className="gradient-text font-bold">{text}</span> 
              : text
          );
        }
        return part;
      });
    });
    
    return parts;
  };

  return (
    <div 
      className={`mb-12 ${centered ? 'text-center' : ''} ${className}`}
    >
      <motion.h2 
        className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight ${titleClassName}`}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {highlightTitle(title)}
      </motion.h2>
      
      <motion.p 
        className={`text-lg md:text-xl text-neutral-600 max-w-3xl mx-auto ${subtitleClassName}`}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {subtitle}
      </motion.p>
    </div>
  );
};