import React from 'react';
export default function Footer(){
  return (
    <footer className="footer">
      <div className="container small">© {new Date().getFullYear()} GameHub — built for Assignment 9</div>
    </footer>
  );
}
