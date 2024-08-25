import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Make sure to create this CSS file for the styling
<style>
@import url('https://fonts.googleapis.com/css2?family=Teko:wght@300..700&display=swap');
</style>

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <h1>G FORGE</h1>
      </div>
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="/" className="nav-link">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/gallery" className="nav-link">Gallery</Link>
          </li>
          <li className="nav-item">
            <Link to="/blog" className="nav-link">Blog</Link>
          </li>
          <li className="nav-item">
            <Link to="/join" className="nav-link">Join</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
