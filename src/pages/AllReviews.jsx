import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import GameCard from '../components/GameCard';

export default function AllReviews(){
  const [games, setGames] = useState([]);
  const [filter, setFilter] = useState('all');
  const [sortBy, setSortBy] = useState('rating');

  useEffect(()=>{
    fetch('/games.json').then(r=>r.json()).then(setGames).catch(()=>setGames([]));
    document.title = 'GameHub | All Reviews';
  },[]);

  const categories = ['all', ...new Set(games.map(g => g.category))];

  const filteredGames = games
    .filter(g => filter === 'all' || g.category === filter)
    .sort((a, b) => {
      if (sortBy === 'rating') return parseFloat(b.ratings) - parseFloat(a.ratings);
      if (sortBy === 'name') return a.title.localeCompare(b.title);
      return 0;
    });

  return (
    <div className="container" style={{ marginTop: 20 }}>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1>All Game Reviews</h1>
        <p className="small" style={{ marginBottom: 20 }}>
          Browse our complete collection of {games.length} indie game reviews
        </p>

        <div style={{ display: 'flex', gap: 12, marginBottom: 20, flexWrap: 'wrap' }}>
          <div>
            <label className="small" style={{ marginRight: 8 }}>Filter by Category:</label>
            <select 
              className="input" 
              value={filter} 
              onChange={e => setFilter(e.target.value)}
              style={{ width: 'auto', display: 'inline-block' }}
            >
              {categories.map(cat => (
                <option key={cat} value={cat}>
                  {cat.charAt(0).toUpperCase() + cat.slice(1)}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="small" style={{ marginRight: 8 }}>Sort by:</label>
            <select 
              className="input" 
              value={sortBy} 
              onChange={e => setSortBy(e.target.value)}
              style={{ width: 'auto', display: 'inline-block' }}
            >
              <option value="rating">Rating</option>
              <option value="name">Name</option>
            </select>
          </div>
        </div>

        <motion.div 
          className="grid"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {filteredGames.map((g, index) => (
            <motion.div
              key={g.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
            >
              <GameCard game={g} />
            </motion.div>
          ))}
        </motion.div>

        {filteredGames.length === 0 && (
          <p className="small" style={{ textAlign: 'center', marginTop: 40 }}>
            No games found in this category.
          </p>
        )}
      </motion.div>
    </div>
  );
}
