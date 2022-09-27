import React from 'react';
import { Helmet } from 'react-helmet';
import Hero from './hero'

export default function Index() {
    return (
        <>
            <Helmet>
                <title>Leaf Lore | Home</title> 
            </Helmet>
            
            <div class='hero-wrapper'>
                <Hero />
            </div>
        </>
    );
};