import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Login(){
  const { login, googleLogin, resetPassword } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const loc = useLocation();

  useEffect(()=>{ document.title = 'GameHub | Login'; if (loc.state?.email) setEmail(loc.state.email); },[]);

  const handleSubmit = async (e)=>{
    e.preventDefault();
    try{
      await login(email, password);
      navigate('/');
    }catch(err){ alert(err.message); }
  };

  return (
    <div className="container">
      <h2>Login</h2>
      <form className="form" onSubmit={handleSubmit}>
        <input className="input" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} />
        <input className="input" placeholder="Password" type="password" value={password} onChange={e=>setPassword(e.target.value)} />
        <button className="button">Login</button>
      </form>

      <button className="button" onClick={googleLogin} style={{ marginTop:8 }}>Continue with Google</button>
      <div style={{ marginTop:8 }}>
        <Link to="/forgot-password" state={{ email }}>Forgot password?</Link>
      </div>
      <div style={{ marginTop:8 }}>
        <Link to="/register">Don't have an account? Register</Link>
      </div>
    </div>
  );
}
