import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Banner from '../components/Banner';
import GameCard from '../components/GameCard';

export default function Home(){
  const [games, setGames] = useState([]);

  useEffect(()=>{
    fetch('/games.json')
      .then(r=>r.json())
      .then(setGames)
      .catch(()=>setGames([]));
    document.title = 'GameHub | Home';
  },[]);

  const popular = [...games].sort((a,b)=> parseFloat(b.ratings)-parseFloat(a.ratings)).slice(0,6);

  return (
    <main>
      <Banner />

      <motion.section
        className="container"
        style={{ marginTop: 50 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.h2
          style={{
            fontSize: '2.5rem',
            color: '#00ffff',
            textShadow: '0 0 20px rgba(0, 255, 255, 0.6)',
            textAlign: 'center',
            marginBottom: 25
          }}
          animate={{
            backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
          }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          🔥 Popular Games
        </motion.h2>
        <motion.div
          className="grid"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {popular.map((g, index) => (
            <motion.div
              key={g.id}
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ y: -10, scale: 1.05 }}
            >
              <GameCard game={g} />
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      <motion.section
        className="container"
        style={{
          marginTop: 60,
          textAlign: 'center'
        }}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        <motion.h3
          style={{
            fontSize: '2rem',
            color: '#ff006e',
            textShadow: '0 0 15px rgba(255, 0, 110, 0.6)',
            marginBottom: 15
          }}
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          📧 Stay Updated
        </motion.h3>
        <motion.p
          className="small"
          style={{
            fontSize: '1.1rem',
            color: '#ffbe0b',
            marginBottom: 25,
            textShadow: '0 0 5px rgba(255, 190, 11, 0.3)'
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          Subscribe to receive updates about the latest indie games and exclusive content!
        </motion.p>
        <motion.form
          className="form"
          onSubmit={(e)=>{ e.preventDefault(); alert('🎉 Subscribed Successfully!'); }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          style={{
            maxWidth: '500px',
            margin: '0 auto',
            background: 'linear-gradient(135deg, rgba(255, 0, 110, 0.1), rgba(0, 255, 255, 0.1))',
            border: '2px solid rgba(255, 0, 110, 0.3)'
          }}
        >
          <motion.input
            className="input"
            placeholder="Enter your email address"
            type="email"
            required
            style={{
              border: '1px solid rgba(0, 255, 255, 0.3)',
              background: 'rgba(0, 255, 255, 0.1)',
              color: '#00ffff',
              textAlign: 'center',
              fontWeight: 600
            }}
            whileFocus={{ scale: 1.02, borderColor: '#00ffff' }}
          />
          <motion.button
            className="button"
            type="submit"
            style={{
              background: 'linear-gradient(135deg, #ff006e, #8338ec, #00ffff)',
              backgroundSize: '200% 200%',
              animation: 'rainbow 3s ease-in-out infinite',
              fontSize: '1.1rem',
              padding: '15px 30px'
            }}
            whileHover={{ scale: 1.05, rotate: 2 }}
            whileTap={{ scale: 0.95 }}
          >
            🚀 Subscribe Now
          </motion.button>
        </motion.form>
      </motion.section>
    </main>
  );
}
