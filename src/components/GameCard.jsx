import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function GameCard({ game }){
  return (
    <motion.div
      className="card"
      style={{ '--delay': Math.floor(Math.random() * 6) }}
      whileHover={{
        y: -15,
        scale: 1.05,
        rotate: 1,
        boxShadow: '0 25px 60px rgba(255, 0, 110, 0.4)'
      }}
      transition={{ type: "spring", stiffness: 250, damping: 15 }}
      whileTap={{ scale: 0.98 }}
    >
      <motion.div
        style={{ position: 'relative', overflow: 'hidden', borderRadius: 15 }}
        whileHover={{ scale: 1.08 }}
        transition={{ duration: 0.4 }}
      >
        <motion.img
          src={game.coverPhoto}
          alt={game.title}
          style={{
            width:'100%',
            height: '200px',
            objectFit: 'cover',
            borderRadius: 15,
            marginBottom: 0
          }}
          loading="lazy"
        />
        <motion.div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(45deg, rgba(255,0,110,0.3), rgba(0,255,255,0.3))',
            opacity: 0,
            borderRadius: 15
          }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
        <motion.div
          style={{
            position: 'absolute',
            top: '10px',
            right: '10px',
            background: 'rgba(0,0,0,0.8)',
            padding: '8px 12px',
            borderRadius: '20px',
            backdropFilter: 'blur(10px)'
          }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
        >
          <span style={{
            color: '#ffbe0b',
            fontSize: '0.9rem',
            fontWeight: 700
          }}>
            ⭐ {game.ratings}
          </span>
        </motion.div>
      </motion.div>

      <div style={{ padding: '20px 15px 15px' }}>
        <motion.h3
          style={{
            fontSize: '1.25rem',
            marginBottom: 12,
            color: '#00ffff',
            textShadow: '0 0 10px rgba(0, 255, 255, 0.5)',
            lineHeight: 1.3
          }}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          {game.title}
        </motion.h3>

        <motion.div
          style={{ marginBottom: 12 }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
        >
          <span style={{
            background: 'linear-gradient(135deg, #ff006e, #8338ec)',
            padding: '8px 14px',
            borderRadius: 15,
            fontSize: '0.8rem',
            fontWeight: 700,
            color: 'white',
            textShadow: '0 0 8px rgba(255, 255, 255, 0.4)',
            display: 'inline-block',
            boxShadow: '0 4px 15px rgba(255, 0, 110, 0.3)'
          }}>
            {game.category}
          </span>
        </motion.div>

        <motion.p
          className="small"
          style={{
            marginBottom: 18,
            color: '#ffbe0b',
            fontWeight: 600,
            fontSize: '0.85rem'
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          by {game.developer}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Link
            to={`/games/${game.id}`}
            className="button"
            style={{
              display:'block',
              textAlign: 'center',
              width: '100%',
              fontSize: '0.9rem',
              padding: '12px 15px',
              background: 'linear-gradient(135deg, #06ffa5, #00b4d8)',
              boxShadow: '0 8px 25px rgba(6, 255, 165, 0.4)'
            }}
            whileHover={{
              background: 'linear-gradient(135deg, #00b4d8, #06ffa5)',
              boxShadow: '0 12px 35px rgba(6, 255, 165, 0.6)'
            }}
            whileTap={{ scale: 0.95 }}
          >
            🎮 View Details
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
}
