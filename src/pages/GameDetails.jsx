import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function GameDetails(){
  const { id } = useParams();
  const navigate = useNavigate();
  const [game, setGame] = useState(null);
  const [games, setGames] = useState([]);

  useEffect(()=>{
    fetch('/games.json')
      .then(r=>r.json())
      .then(list=> {
        setGames(list);
        const foundGame = list.find(g=>g.id===id);
        if (foundGame) {
          setGame(foundGame);
          document.title = `GameHub | ${foundGame.title}`;
        } else {
          navigate('/404');
        }
      })
      .catch(()=>{});
  },[id, navigate]);

  if (!game) {
    return (
      <div className="container" style={{ textAlign: 'center', marginTop: 60 }}>
        <motion.h2
          style={{
            color: '#ff006e',
            textShadow: '0 0 20px rgba(255, 0, 110, 0.6)',
            fontSize: '2.5rem'
          }}
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          Loading game details...
        </motion.h2>
      </div>
    );
  }

  return (
    <motion.div
      className="container"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      style={{ marginTop: 30 }}
    >
      <motion.button
        onClick={() => navigate(-1)}
        className="button"
        style={{
          marginBottom: 25,
          background: 'rgba(255,255,255,0.1)',
          color: '#00ffff',
          border: '1px solid rgba(0, 255, 255, 0.3)'
        }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        ← Back to Games
      </motion.button>

      <motion.div
        style={{
          background:
            'linear-gradient(180deg, rgba(255,255,255,0.12), rgba(255,255,255,0.06)),' +
            'linear-gradient(135deg, rgba(255, 0, 110, 0.1), rgba(0, 255, 255, 0.1))',
          padding: 30,
          borderRadius: 25,
          border: '1px solid rgba(255,255,255,0.2)',
          backdropFilter: 'blur(20px)',
          boxShadow: '0 20px 60px rgba(0, 0, 0, 0.4)'
        }}
        initial={{ scale: 0.95 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.h1
          style={{
            marginBottom: 20,
            fontSize: '3rem',
            background: 'linear-gradient(45deg, #ff006e, #8338ec, #3a86ff, #06ffa5)',
            backgroundSize: '400% 400%',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            animation: 'rainbow 4s ease-in-out infinite',
            textAlign: 'center'
          }}
        >
          {game.title}
        </motion.h1>

        <motion.img
          src={game.coverPhoto}
          alt={game.title}
          style={{
            width:'100%',
            maxHeight: 500,
            objectFit:'cover',
            borderRadius: 20,
            marginBottom: 25,
            boxShadow: '0 25px 60px rgba(0,0,0,0.5)'
          }}
          whileHover={{ scale: 1.02, rotate: 1 }}
          transition={{ duration: 0.4 }}
        />

        <motion.div
          style={{
            display: 'flex',
            gap: 15,
            marginBottom: 25,
            flexWrap: 'wrap',
            justifyContent: 'center'
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <motion.span
            style={{
              background: 'linear-gradient(135deg, #ff006e, #8338ec)',
              padding: '12px 20px',
              borderRadius: 15,
              fontWeight: 700,
              fontSize: '0.9rem',
              color: 'white',
              textShadow: '0 0 10px rgba(255, 255, 255, 0.3)',
              boxShadow: '0 8px 25px rgba(255, 0, 110, 0.4)'
            }}
            whileHover={{ scale: 1.1, rotate: 5 }}
          >
            {game.category}
          </motion.span>
          <motion.span
            style={{
              background: 'linear-gradient(135deg, #ffbe0b, #ff8500)',
              padding: '12px 20px',
              borderRadius: 15,
              fontWeight: 700,
              fontSize: '0.9rem',
              color: 'white',
              textShadow: '0 0 10px rgba(255, 255, 255, 0.3)',
              boxShadow: '0 8px 25px rgba(255, 190, 11, 0.4)'
            }}
            whileHover={{ scale: 1.1, rotate: -5 }}
          >
            ⭐ {game.ratings} Rating
          </motion.span>
          <motion.span
            style={{
              background: 'linear-gradient(135deg, #06ffa5, #00b4d8)',
              padding: '12px 20px',
              borderRadius: 15,
              fontWeight: 700,
              fontSize: '0.9rem',
              color: 'white',
              textShadow: '0 0 10px rgba(255, 255, 255, 0.3)',
              boxShadow: '0 8px 25px rgba(6, 255, 165, 0.4)'
            }}
            whileHover={{ scale: 1.1, rotate: 3 }}
          >
            {game.developer}
          </motion.span>
        </motion.div>

        <motion.h3
          style={{
            marginTop: 30,
            marginBottom: 15,
            fontSize: '2rem',
            color: '#ff006e',
            textShadow: '0 0 15px rgba(255, 0, 110, 0.6)',
            textAlign: 'center'
          }}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
        >
          About This Game
        </motion.h3>
        <motion.p
          style={{
            lineHeight: 1.8,
            fontSize: '1.1rem',
            marginBottom: 30,
            textAlign: 'justify',
            color: '#e6eef8',
            textShadow: '0 0 5px rgba(255, 255, 255, 0.2)'
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          {game.description}
        </motion.p>

        <motion.a
          className="button"
          href={game.downloadLink}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-block',
            fontSize: '1.2rem',
            padding: '15px 40px',
            background: 'linear-gradient(135deg, #ff006e, #8338ec, #00ffff)',
            backgroundSize: '200% 200%',
            animation: 'rainbow 3s ease-in-out infinite',
            boxShadow: '0 15px 40px rgba(255, 0, 110, 0.5)',
            textTransform: 'uppercase',
            fontWeight: 800,
            letterSpacing: '1px'
          }}
          whileHover={{ scale: 1.1, rotate: 2 }}
          whileTap={{ scale: 0.95 }}
        >
          🚀 Download / Visit Official Site
        </motion.a>
      </motion.div>
    </motion.div>
  );
}
