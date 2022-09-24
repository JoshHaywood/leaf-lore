import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './search-bar';

export default function Header() {
  //Scroll state
  const [scrolled, setScroll] = useState(false)

  // The scroll listener
  const handleScroll = event => {
    if (window.scrollY >= 1) {
      setScroll(true)
    }

    else {
      setScroll(false)
    };
  };

  window.addEventListener('scroll', handleScroll);

  return (
    <div 
      className={`${
        scrolled ? 'nav-container-scrolled' : 'nav-container'
      }`}>
      <div className="nav-content">
        {/* Nav Logo */}
        <div className="nav-logo-container">
          <img src="../images/logo.webp"/> {/* Modified from: https://www.vecteezy.com/free-vector/plant-logo */}
          <span>Leaf Lore</span>
        </div>

        {/* Nav links */}
        <div className="nav-links-container">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/results">Results</Link></li>
          </ul>

          {/* Search Bar */}
          <SearchBar />
        </div>
      </div>
    </div>
  )
};