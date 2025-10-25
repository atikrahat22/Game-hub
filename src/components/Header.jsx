import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

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
    <header className="container header">
      <Link to="/" className="logo">🎮 GameHub</Link>
      <nav className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/all-reviews">All Reviews</Link>
        {user ? (
          <>
            <img
              src={user.photoURL || 'https://via.placeholder.com/80'}
              alt="profile"
              className="profile-pic"
              onClick={() => navigate('/profile')}
              title={user.displayName || user.email}
            />
            <button className="button logout-btn" onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register" className="button">Register</Link>
          </>
        )}
      </nav>
    </header>
  );
}
