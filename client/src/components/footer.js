import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './search-bar';

export default function Footer() {
  return (
    <footer class="footer-container">
      <div class="footer-content">
        {/* Links */}
        <div class="footer-links">
          <span>Pages</span>
          
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/results">Results</Link></li>
          </ul>
        </div>

        {/* Search Bar */}
        <div class="search-wrapper">
          <span>Results</span>

          <SearchBar />
        </div>
      </div>

      {/* Footnote */}
      <div class="footnote-wrapper">
        <a href="https://www.joshhaywood-portfolio.com">© Josh Haywood {new Date().getFullYear()}</a>
      </div>
    </footer>
  )
};