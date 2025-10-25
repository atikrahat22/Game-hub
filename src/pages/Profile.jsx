import React, { useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Profile(){
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(()=>{ document.title = 'GameHub | Profile'; },[]);

  if (!user) return (
    <div className="container">
      <motion.h2
        style={{
          textAlign: 'center',
          color: '#ff006e',
          textShadow: '0 0 15px rgba(255, 0, 110, 0.6)',
          fontSize: '2rem'
        }}
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        Please login to view your profile
      </motion.h2>
    </div>
  );

  return (
    <motion.div
      className="container"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      style={{ marginTop: 30 }}
    >
      <motion.div
        style={{
          background: 'linear-gradient(135deg, rgba(255,255,255,0.12), rgba(255,255,255,0.06))',
          padding: 35,
          borderRadius: 25,
          border: '1px solid rgba(255,255,255,0.2)',
          backdropFilter: 'blur(20px)',
          boxShadow: '0 20px 60px rgba(0, 0, 0, 0.4)',
          textAlign: 'center',
          maxWidth: 500,
          margin: '0 auto'
        }}
        initial={{ scale: 0.95 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
        >
          <motion.img
            src={user.photoURL || 'https://via.placeholder.com/150'}
            alt="profile"
            style={{
              width: 120,
              height: 120,
              borderRadius: '50%',
              objectFit: 'cover',
              marginBottom: 20,
              border: '4px solid #00ffff',
              boxShadow: '0 0 30px rgba(0, 255, 255, 0.4)'
            }}
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>

        <motion.h2
          style={{
            color: '#00ffff',
            fontSize: '2.2rem',
            marginBottom: 15,
            textShadow: '0 0 15px rgba(0, 255, 255, 0.6)'
          }}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
        >
          {user.displayName || 'Gamer'}
        </motion.h2>

        <motion.p
          style={{
            color: '#ffbe0b',
            fontSize: '1.1rem',
            marginBottom: 25,
            textShadow: '0 0 5px rgba(255, 190, 11, 0.3)'
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          {user.email}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
        >
          <motion.button
            className="button"
            onClick={() => navigate('/update-profile')}
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
            ✨ Update Profile
          </motion.button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
