import React from 'react';
import { motion } from 'framer-motion';

export default function Banner(){
  const slides = [
    {
      url: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=1200&h=400&fit=crop',
      title: '🎮 Discover Amazing Gaming World'
    },
    {
      url: 'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=1200&h=400&fit=crop',
      title: '⚡ Epic Gaming Adventures Await'
    },
    {
      url: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=1200&h=400&fit=crop',
      title: '🏆 Join the Gaming Revolution'
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
