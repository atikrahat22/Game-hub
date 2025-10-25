import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { motion } from 'framer-motion';

export default function Header() {
  const { user, logOut } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logOut();
      navigate('/');
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  return (
    <motion.header
      className="container header"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        whileHover={{ scale: 1.05, rotate: 2 }}
        transition={{ duration: 0.3 }}
      >
        <Link to="/" className="logo">🎮 GameHub</Link>
      </motion.div>
      <nav className="nav-links">
        <motion.div whileHover={{ scale: 1.05 }}>
          <Link to="/">🏠 Home</Link>
        </motion.div>
        <motion.div whileHover={{ scale: 1.05 }}>
          <Link to="/categories">🎯 Categories</Link>
        </motion.div>
        <motion.div whileHover={{ scale: 1.05 }}>
          <Link to="/all-reviews">📚 All Reviews</Link>
        </motion.div>
        {user ? (
          <>
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <img
                src={user.photoURL || 'https://via.placeholder.com/80'}
                alt="profile"
                className="profile-pic"
                onClick={() => navigate('/profile')}
                title={user.displayName || user.email}
              />
            </motion.div>
            <motion.button
              className="button logout-btn"
              onClick={handleLogout}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              🚪 Logout
            </motion.button>
          </>
        ) : (
          <>
            <motion.div whileHover={{ scale: 1.05 }}>
              <Link to="/login">🔐 Login</Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }}>
              <Link
                to="/register"
                className="button"
                style={{
                  background: 'linear-gradient(135deg, #06ffa5, #00b4d8)',
                  boxShadow: '0 8px 25px rgba(6, 255, 165, 0.4)'
                }}
              >
                ✨ Register
              </Link>
            </motion.div>
          </>
        )}
      </nav>
    </motion.header>
  );
}
