import React from 'react';
import { Routes, Route } from 'react-router-dom';

import './styles/index.css';

import LandingPage from './components/Landing/bale'; 
import NotFound from './components/Landing/NotFound'; 

const App = () => {
  return (
    <div className="font-sans bg-gray-50 text-gray-800">
      
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {/* <Route path="/landing" element={<LandingPage />} /> */}

    </div>
  );
};

export default App;