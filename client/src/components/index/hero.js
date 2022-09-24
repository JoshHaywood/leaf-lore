import React from 'react';
import SearchBar from '../search-bar';

export default function Hero() {
    return (
        <div class="hero-container">
            <img src="../images/plant-stock.png"/> {/* Attribution: https://www.pexels.com/photo/succulent-plant-912396/ */}
            <div class="search-container">
                <h1>Title</h1>
                <SearchBar />
            </div>
        </div>
    );
};