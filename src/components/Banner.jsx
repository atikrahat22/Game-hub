import React from 'react';
import { motion } from 'framer-motion';

export default function Banner(){
  const slides = [
    {
      url: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=1200&h=400&fit=crop',
      title: 'Discover Amazing Indie Games'
    },
    {
      url: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=1200&h=400&fit=crop',
      title: 'Epic Adventures Await'
    },
    {
      url: 'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=1200&h=400&fit=crop',
      title: 'Support Indie Developers'
    }
  ];

  return (
    <div className="banner container">
      {slides.map((slide, i) => (
        <motion.img 
          key={i} 
          src={slide.url} 
          alt={slide.title}
          initial={{ opacity: 0, x: 50 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.6, delay: i * 0.15 }} 
        />
      ))}
    </div>
  );
}
