import React from 'react';
import { Routes, Route } from 'react-router-dom';

import './styles/index.css';

import Navbar from './components/Landing/Navbar';
import LandingPage from './components/Landing/bale'; 
import NotFound from './components/Landing/NotFound'; 

const App = () => {
  return (
    <div className="font-sans bg-gray-50 text-gray-800">
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;