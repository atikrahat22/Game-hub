import React, { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

export default function UpdateProfile(){
  const { user, updateUser } = useAuth();
  const [name, setName] = useState(user?.displayName || '');
  const [photo, setPhoto] = useState(user?.photoURL || '');
  const navigate = useNavigate();

  useEffect(()=>{ document.title = 'GameHub | Update Profile'; },[]);

  const handle = async (e)=>{
    e.preventDefault();
    try{
      await updateUser({ displayName: name, photoURL: photo });
      alert('Profile updated');
      navigate('/profile');
    }catch(err){ alert(err.message); }
  };

  return (
    <div className="container">
      <h2>Update Info</h2>
      <form className="form" onSubmit={handle}>
        <input className="input" value={name} onChange={e=>setName(e.target.value)} placeholder="Name" />
        <input className="input" value={photo} onChange={e=>setPhoto(e.target.value)} placeholder="Photo URL" />
        <button className="button">Update Information</button>
      </form>
    </div>
  );
}
