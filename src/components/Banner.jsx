import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Banner(){
  const slides = [
    {
      url: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=1200&h=400&fit=crop',
      title: '🎮 Discover Amazing Gaming World',
      subtitle: 'Explore thousands of games from indie developers'
    },
    {
      url: 'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=1200&h=400&fit=crop',
      title: '⚡ Epic Gaming Adventures Await',
      subtitle: 'Join millions of players in epic battles'
    },
    {
      url: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=1200&h=400&fit=crop',
      title: '🏆 Join the Gaming Revolution',
      subtitle: 'Be part of the future of gaming'
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
    <div className="banner container" style={{ position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'relative', height: '400px' }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%'
            }}
          >
            <img
              src={slides[current].url}
              alt={slides[current].title}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                borderRadius: '15px'
              }}
            />
            <div style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              background: 'linear-gradient(transparent, rgba(0,0,0,0.8))',
              padding: '40px 20px 20px',
              borderRadius: '0 0 15px 15px'
            }}>
              <motion.h1
                style={{
                  color: 'white',
                  fontSize: '2.5rem',
                  margin: 0,
                  textShadow: '0 0 20px rgba(255,255,255,0.5)'
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                {slides[current].title}
              </motion.h1>
              <motion.p
                style={{
                  color: '#ffbe0b',
                  fontSize: '1.2rem',
                  margin: '10px 0 0',
                  textShadow: '0 0 10px rgba(255,190,11,0.5)'
                }}
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
        <div style={{
          position: 'absolute',
          bottom: '20px',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          gap: '10px',
          zIndex: 10
        }}>
          {slides.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => setCurrent(index)}
              style={{
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                border: 'none',
                background: current === index ? '#ff006e' : 'rgba(255,255,255,0.5)',
                cursor: 'pointer'
              }}
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
          style={{
            position: 'absolute',
            left: '20px',
            top: '50%',
            transform: 'translateY(-50%)',
            background: 'rgba(0,0,0,0.5)',
            border: 'none',
            borderRadius: '50%',
            width: '40px',
            height: '40px',
            cursor: 'pointer',
            fontSize: '20px',
            color: 'white',
            zIndex: 10
          }}
        >
          ‹
        </button>
        <button
          onClick={nextSlide}
          style={{
            position: 'absolute',
            right: '20px',
            top: '50%',
            transform: 'translateY(-50%)',
            background: 'rgba(0,0,0,0.5)',
            border: 'none',
            borderRadius: '50%',
            width: '40px',
            height: '40px',
            cursor: 'pointer',
            fontSize: '20px',
            color: 'white',
            zIndex: 10
          }}
        >
          ›
        </button>
      </div>
    </div>
  );
}
