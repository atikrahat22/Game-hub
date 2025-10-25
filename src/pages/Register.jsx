import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

export default function Register(){
  const { register, updateUser, googleLogin } = useAuth();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [photo, setPhoto] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  useEffect(()=>{ document.title = 'GameHub | Register'; },[]);

  const validate = (pwd) => /(?=.*[a-z])(?=.*[A-Z]).{6,}/.test(pwd);

  const handleSubmit = async (e)=>{
    e.preventDefault();
    if (!validate(password)) return alert('Password must have upper, lower and at least 6 characters');
    try{
      const cred = await register(email, password);
      await updateUser({ displayName: name, photoURL: photo });
      navigate('/');
    }catch(err){ alert(err.message); }
  };

  return (
    <div className="container">
      <h2>Register</h2>
      <form className="form" onSubmit={handleSubmit}>
        <input className="input" placeholder="Name" value={name} onChange={e=>setName(e.target.value)} />
        <input className="input" placeholder="Photo URL" value={photo} onChange={e=>setPhoto(e.target.value)} />
        <input className="input" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} />
        <input className="input" placeholder="Password" value={password} onChange={e=>setPassword(e.target.value)} />
        <button className="button">Register</button>
      </form>
      <button className="button" onClick={googleLogin} style={{ marginTop:8 }}>Continue with Google</button>
    </div>
  );
}
