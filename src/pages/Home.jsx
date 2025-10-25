import React, { useEffect, useState } from 'react';
import Banner from '../components/Banner';
import GameCard from '../components/GameCard';

export default function Home(){
  const [games, setGames] = useState([]);

  useEffect(()=>{
    fetch('/games.json').then(r=>r.json()).then(setGames).catch(()=>setGames([]));
    document.title = 'GameHub | Home';
  },[]);

  const popular = [...games].sort((a,b)=> parseFloat(b.ratings)-parseFloat(a.ratings)).slice(0,6);

  if (games.length === 0) {
    return (
      <main>
        <div className="container" style={{ textAlign: 'center', marginTop: 60 }}>
          <h2>Loading games...</h2>
        </div>
      </main>
    );
  }

  return (
    <main>
      {!import.meta.env.VITE_API_KEY && (
        <div className="container" style={{ marginTop: 20, padding: 16, background: 'rgba(6, 182, 212, 0.1)', borderRadius: 12, border: '1px solid rgba(6, 182, 212, 0.3)' }}>
          <h3 style={{ margin: 0, marginBottom: 8 }}>⚠️ Firebase Not Configured</h3>
          <p className="small" style={{ margin: 0 }}>
            To enable authentication, create a <code>.env</code> file in the root directory with your Firebase credentials. 
            See <code>.env.example</code> for the required variables.
          </p>
        </div>
      )}
      
      <Banner />
      <section className="container" style={{ marginTop:20 }}>
        <h2>Popular Games</h2>
        <div className="grid">
          {popular.map(g=> <GameCard key={g.id} game={g} />)}
        </div>
      </section>

      <section className="container" style={{ marginTop:20 }}>
        <h3>Newsletter</h3>
        <p className="small">Subscribe to receive updates about indie games</p>
        <form className="form" onSubmit={(e)=>{ e.preventDefault(); alert('Subscribed!'); }}>
          <input className="input" placeholder="Your email" type="email" required />
          <button className="button" type="submit">Subscribe</button>
        </form>
      </section>
    </main>
  );
}
