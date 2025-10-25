import React from 'react';
import { motion } from 'framer-motion';

export default function Footer(){
  return (
    <motion.footer
      className="footer"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.8 }}
    >
      <motion.div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '15px'
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <motion.h3
          style={{
            fontSize: '1.5rem',
            background: 'linear-gradient(45deg, #ff006e, #8338ec, #00ffff)',
            backgroundSize: '200% 200%',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            animation: 'rainbow 3s ease-in-out infinite',
            margin: 0,
            textShadow: '0 0 15px rgba(255, 0, 110, 0.5)'
          }}
        >
          🎮 GameHub
        </motion.h3>
        <motion.p
          style={{
            color: '#ffbe0b',
            fontSize: '1rem',
            margin: 0,
            textShadow: '0 0 5px rgba(255, 190, 11, 0.3)'
          }}
          animate={{
            scale: [1, 1.05, 1],
            textShadow: [
              '0 0 5px rgba(255, 190, 11, 0.3)',
              '0 0 15px rgba(255, 190, 11, 0.6)',
              '0 0 5px rgba(255, 190, 11, 0.3)'
            ]
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Discover • Play • Enjoy
        </motion.p>
        <motion.div
          style={{
            display: 'flex',
            gap: '20px',
            flexWrap: 'wrap',
            justifyContent: 'center'
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <motion.span
            style={{
              color: '#00ffff',
              fontSize: '0.9rem',
              textShadow: '0 0 5px rgba(0, 255, 255, 0.3)'
            }}
            whileHover={{ scale: 1.1, color: '#ff006e' }}
          >
            Made with ❤️ & React
          </motion.span>
          <motion.span
            style={{
              color: '#ff006e',
              fontSize: '0.9rem',
              textShadow: '0 0 5px rgba(255, 0, 110, 0.3)'
            }}
            whileHover={{ scale: 1.1, color: '#00ffff' }}
          >
            &copy; {new Date().getFullYear()} GameHub
          </motion.span>
        </motion.div>
      </motion.div>
    </motion.footer>
  );
}
