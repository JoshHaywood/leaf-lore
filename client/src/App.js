import React from 'react';
import './App.scss';
import { Routes, Route } from "react-router-dom";
import Header from './components/header';
import Footer from './components/footer';
import Index from './components/index/index'
import Database from './components/database';
import Error from './components/error';

export default function App() {
  return (
    <div>
      <Header />
      
      <Routes>
        <Route path="/" element={<Index />}/>
        <Route path="/dev" element={<Database />}/>

        <Route path="*" element={<Error />}/>
      </Routes>

      <Footer />

    </div>
  );
};