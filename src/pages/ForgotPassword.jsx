import React, { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useLocation } from 'react-router-dom';

export default function ForgotPassword(){
  const { resetPassword } = useAuth();
  const loc = useLocation();
  const [email, setEmail] = useState(loc.state?.email || '');

  useEffect(()=>{ document.title = 'GameHub | Reset Password'; },[]);

  const handle = async (e)=>{
    e.preventDefault();
    try{
      await resetPassword(email);
      alert('Reset email sent. Check your Gmail.');
    }catch(err){ alert(err.message); }
  };

  return (
    <div className="container">
      <h2>Reset Password</h2>
      <form className="form" onSubmit={handle}>
        <input className="input" value={email} onChange={e=>setEmail(e.target.value)} />
        <button className="button">Send Reset Email</button>
      </form>
    </div>
  );
}
