import React from 'react';
import { Routes, Route } from 'react-router-dom';

import './styles/index.css';

import LandingPage from './components/bale';  

const App = () => {
  return (
    <div className="font-sans bg-gray-50 text-gray-800">
      
      <Routes>
        <Route path="/" element={<LandingPage />} />
        
      </Routes>
      {/* <Route path="/landing" element={<LandingPage />} /> */}

    </div>
  );
};

export default App;