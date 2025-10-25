import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function GameDetails(){
  const { id } = useParams();
  const navigate = useNavigate();
  const [game, setGame] = useState(null);

  useEffect(()=>{
    fetch('/games.json')
      .then(r=>r.json())
      .then(list=> {
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
        <h2>Loading game details...</h2>
      </div>
    );
  }

  return (
    <motion.div 
      className="container"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <button 
        onClick={() => navigate(-1)} 
        className="button"
        style={{ marginBottom: 20, background: 'rgba(255,255,255,0.1)' }}
      >
        ← Back
      </button>

      <div style={{ 
        background: 'linear-gradient(180deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))',
        padding: 24,
        borderRadius: 16,
        border: '1px solid rgba(255,255,255,0.1)'
      }}>
        <h1 style={{ marginBottom: 16 }}>{game.title}</h1>
        
        <img 
          src={game.coverPhoto} 
          alt={game.title}
          style={{ 
            width:'100%', 
            maxHeight: 450, 
            objectFit:'cover', 
            borderRadius: 16,
            marginBottom: 24,
            boxShadow: '0 10px 40px rgba(0,0,0,0.3)'
          }} 
        />

        <div style={{ display: 'flex', gap: 12, marginBottom: 20, flexWrap: 'wrap' }}>
          <span style={{ 
            background: 'rgba(6, 182, 212, 0.2)', 
            padding: '8px 16px', 
            borderRadius: 8,
            fontWeight: 600
          }}>
            {game.category}
          </span>
          <span style={{ 
            background: 'rgba(251, 191, 36, 0.2)', 
            padding: '8px 16px', 
            borderRadius: 8,
            fontWeight: 600
          }}>
            ⭐ {game.ratings}
          </span>
          <span style={{ 
            background: 'rgba(139, 92, 246, 0.2)', 
            padding: '8px 16px', 
            borderRadius: 8,
            fontWeight: 600
          }}>
            {game.developer}
          </span>
        </div>

        <h3 style={{ marginTop: 24, marginBottom: 12 }}>About This Game</h3>
        <p style={{ lineHeight: 1.8, fontSize: '1.05rem', marginBottom: 24 }}>
          {game.description}
        </p>

        <a 
          className="button" 
          href={game.downloadLink} 
          target="_blank"
          rel="noopener noreferrer"
          style={{ 
            display: 'inline-block',
            fontSize: '1.1rem',
            padding: '12px 32px'
          }}
        >
          🎮 Download / Visit Official Site
        </a>
      </div>
    </motion.div>
  );
}
