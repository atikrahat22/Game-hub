import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function GameCard({ game }){
  return (
    <motion.div
      className="card"
      whileHover={{ y: -10, scale: 1.03 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <motion.img
        src={game.coverPhoto}
        alt={game.title}
        style={{
          width:'100%',
          height: '200px',
          objectFit: 'cover',
          borderRadius: 15,
          marginBottom: 15
        }}
        whileHover={{ scale: 1.1, rotate: 2 }}
        transition={{ duration: 0.3 }}
      />
      <h3 style={{
        fontSize: '1.2rem',
        marginBottom: 10,
        color: '#00ffff',
        textShadow: '0 0 10px rgba(0, 255, 255, 0.5)'
      }}>
        {game.title}
      </h3>
      <p className="small" style={{ marginBottom: 8 }}>
        <span style={{
          background: 'linear-gradient(135deg, #ff006e, #8338ec)',
          padding: '6px 12px',
          borderRadius: 12,
          fontSize: '0.8rem',
          fontWeight: 600,
          color: 'white',
          textShadow: '0 0 5px rgba(255, 255, 255, 0.3)'
        }}>
          {game.category}
        </span>
      </p>
      <p className="small" style={{
        marginBottom: 15,
        color: '#ffbe0b',
        fontWeight: 600
      }}>
        ⭐ {game.ratings} • {game.developer}
      </p>
      <Link
        to={`/games/${game.id}`}
        className="button"
        style={{
          display:'block',
          textAlign: 'center',
          width: '100%',
          fontSize: '0.9rem',
          padding: '10px 15px'
        }}
      >
        🎮 View Details
      </Link>
    </motion.div>
  );
}
