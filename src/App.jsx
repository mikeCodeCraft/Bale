import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import './styles/index.css';

import Navbar from './components/Landing/Navbar';
import LandingPage from './components/Landing/bale'; 
import NotFound from './components/Landing/NotFound'; 
import Blog from './components/blog/Blog';
import BlogPost from './components/blog/BlogPost';
import Authors from './components/blog/Authors';
import AuthorProfile from './components/blog/AuthorProfile';
import Footer from './components/Landing/Footer';
import Admin from './components/blog/Admin';
import Preload from './components/Landing/Preload';

const App = () => {
  const [loading, setLoading] = useState(true);

  if (loading) return <Preload onFinish={() => setLoading(false)} />;

  return (
    <div className="font-sans bg-gray-50 text-gray-800 min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogPost />} />
          <Route path="/authors" element={<Authors />} />
          <Route path="/authors/:id" element={<AuthorProfile />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;