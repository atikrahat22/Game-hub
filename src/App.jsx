import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import GameDetails from './pages/GameDetails';
import Profile from './pages/Profile';
import UpdateProfile from './pages/UpdateProfile';
import ForgotPassword from './pages/ForgotPassword';
import AllReviews from './pages/AllReviews';
import Categories from './pages/Categories';
import NotFound from './pages/NotFound';
import PrivateRoute from './routes/PrivateRoute';

export default function App(){
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/all-reviews" element={<AllReviews />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/categories/:category" element={<Categories />} />
        <Route path="/games/:id" element={<PrivateRoute><GameDetails /></PrivateRoute>} />
        <Route path="/profile" element={<PrivateRoute><Profile /></PrivateRoute>} />
        <Route path="/update-profile" element={<PrivateRoute><UpdateProfile /></PrivateRoute>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}
