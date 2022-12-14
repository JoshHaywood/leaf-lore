import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../search-bar';

export default function Hero() {
    const  items = [
        {title: 'card1'},
        {title: 'card2'},
        {title: 'card3'},
    ]
    return (
        <div class="hero-container">
            {/* Main card column */}
            <div class="main-card-container">
                {/* Text */}
                <div class="text-container">
                    <h2>Plant Name</h2>
                    <p>Tagline</p>
                </div>
                
                {/* Image*/}
                <div class="image-container">
                    <img src="../images/plant-stock.png"/> {/* Attribution: https://www.pexels.com/photo/succulent-plant-912396/ */}
                    <div></div>

                    {/* Link */}
                    <Link to="#" class="link-container">
                        <p>Link</p>

                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"> {/* Attribution: https://fontawesome.com/icons/chevron-right?s=solid&f=classic */}
                            <path d="M342.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L274.7 256 105.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/>
                        </svg>
                    </Link>
                </div>
            </div>

            {/* Text column */}
            <div class="text-container">
                {/* Search Bar */}
                <div class="search-container">
                    <h1>Welcome to Leaf Lore</h1>
                    <p>Any and all related information from a wide variety of plant species. Accessible from a quick search</p>

                    <div class="search-wrapper">
                        <SearchBar />
                    </div>
                </div>

                <div class="card-wrapper">
                    {items.map((items) => 
                        <div class="card-container">
                            {/* Text */}
                            <div class="text-container">
                                <h2>Plant Name</h2>
                                <p>Tagline</p>
                            </div>
                            
                            {/* Image*/}
                            <div class="image-container">
                                <img src="../images/plant-stock.png"/> {/* Attribution: https://www.pexels.com/photo/succulent-plant-912396/ */}
                                <div></div>

                                {/* Link */}
                                <Link to="#" class="link-container">
                                    <p>Link</p>

                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"> {/* Attribution: https://fontawesome.com/icons/chevron-right?s=solid&f=classic */}
                                        <path d="M342.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L274.7 256 105.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/>
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};