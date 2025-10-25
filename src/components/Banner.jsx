import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Banner(){
  const slides = [
    {
      url: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=1920&h=600&fit=crop',
      title: '🎮 Discover Amazing Gaming World',
      subtitle: 'Explore thousands of games from indie developers to AAA titles'
    },
    {
      url: 'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=1920&h=600&fit=crop',
      title: '⚡ Epic Gaming Adventures Await',
      subtitle: 'Join millions of players in epic battles and immersive worlds'
    },
    {
      url: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=1920&h=600&fit=crop',
      title: '🏆 Join the Gaming Revolution',
      subtitle: 'Be part of the future of gaming with cutting-edge technology'
    }
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="banner-full-width">
      <div className="banner-container">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="banner-slide"
          >
            <img
              src={slides[current].url}
              alt={slides[current].title}
              className="banner-image"
            />
            <div className="banner-overlay">
              <motion.h1
                className="banner-title-full"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                {slides[current].title}
              </motion.h1>
              <motion.p
                className="banner-subtitle-full"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                {slides[current].subtitle}
              </motion.p>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Dots */}
        <div className="banner-dots">
          {slides.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => setCurrent(index)}
              className={`banner-dot ${current === index ? 'active' : ''}`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              animate={{
                background: current === index
                  ? 'linear-gradient(45deg, #ff006e, #8338ec)'
                  : 'rgba(255,255,255,0.5)'
              }}
              transition={{ duration: 0.3 }}
            />
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="banner-arrow banner-arrow-left"
        >
          ‹
        </button>
        <button
          onClick={nextSlide}
          className="banner-arrow banner-arrow-right"
        >
          ›
        </button>
      </div>
    </div>
  );
}
