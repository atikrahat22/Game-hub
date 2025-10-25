import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function NotFound(){
  useEffect(()=>{ document.title = 'GameHub | 404 Not Found'; },[]);
  
  return (
    <motion.div 
      className="container" 
      style={{ 
        textAlign: 'center', 
        marginTop: 80,
        minHeight: '60vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
      }}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h1 
        style={{ 
          fontSize: '8rem', 
          margin: 0,
          background: 'linear-gradient(135deg, #ef4444, #dc2626)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text'
        }}
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        404
      </motion.h1>
      
      <h2 style={{ marginBottom: 16 }}>Oops! Page Not Found</h2>
      
      <p className="small" style={{ marginBottom: 32, maxWidth: 500 }}>
        The page you&apos;re looking for doesn&apos;t exist or has been moved. 
        Let&apos;s get you back to exploring amazing indie games!
      </p>
      
      <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', justifyContent: 'center' }}>
        <Link to="/" className="button">
          🏠 Go Home
        </Link>
        <Link to="/all-reviews" className="button" style={{ background: 'rgba(255,255,255,0.1)' }}>
          🎮 Browse Games
        </Link>
      </div>
    </motion.div>
  );
}
