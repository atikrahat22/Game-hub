import React, { useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

export default function Profile(){
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(()=>{ document.title = 'GameHub | Profile'; },[]);

  if (!user) return <div className="container">No user</div>;

  return (
    <div className="container">
      <h2>My Profile</h2>
      <img src={user.photoURL || 'https://via.placeholder.com/150'} alt="me" style={{ width:120, borderRadius:12 }} />
      <h3>{user.displayName || user.email}</h3>
      <p className="small">{user.email}</p>
      <div style={{ marginTop:12 }}>
        <button className="button" onClick={()=>navigate('/update-profile')}>Update Info</button>
      </div>
    </div>
  );
}
