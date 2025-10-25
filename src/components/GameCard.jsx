import React from 'react';
import { Link } from 'react-router-dom';

export default function GameCard({ game }){
  return (
    <div className="card">
      <img 
        src={game.coverPhoto} 
        alt={game.title} 
        style={{ 
          width:'100%', 
          height: '180px',
          objectFit: 'cover',
          borderRadius: 12,
          marginBottom: 12
        }} 
      />
      <h3 style={{ fontSize: '1.1rem', marginBottom: 8 }}>{game.title}</h3>
      <p className="small" style={{ marginBottom: 4 }}>
        <span style={{ 
          background: 'rgba(6, 182, 212, 0.2)', 
          padding: '4px 8px', 
          borderRadius: 4,
          fontSize: '0.85rem'
        }}>
          {game.category}
        </span>
      </p>
      <p className="small" style={{ marginBottom: 12 }}>
        ⭐ {game.ratings} • {game.developer}
      </p>
      <Link 
        to={`/games/${game.id}`} 
        className="button" 
        style={{ 
          display:'block', 
          textAlign: 'center',
          width: '100%'
        }}
      >
        View Details
      </Link>
    </div>
  );
}
