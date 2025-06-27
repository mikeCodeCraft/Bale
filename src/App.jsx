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
import AdminCreate from './components/blog/AdminCreate';
import AdminEdit from './components/blog/AdminEdit';
import Preload from './components/Landing/Preload';
import BookCallModal from './components/Landing/BookCall';

const App = () => {
  const [loading, setLoading] = useState(true);
  const [isBookCallOpen, setIsBookCallOpen] = useState(false);

  if (loading) return <Preload onFinish={() => setLoading(false)} />;

  return (
    <div className="font-sans bg-gray-50 text-gray-800 min-h-screen flex flex-col">
      <Navbar setIsBookCallOpen={setIsBookCallOpen} />
      <div className="flex-1">
        <Routes>
          <Route path="/" element={<LandingPage setIsBookCallOpen={setIsBookCallOpen} />} />
          <Route path="/blog" element={<Blog setIsBookCallOpen={setIsBookCallOpen} />} />
          <Route path="/blog/:id" element={<BlogPost />} />
          <Route path="/authors" element={<Authors />} />
          <Route path="/authors/:id" element={<AuthorProfile />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/admin/create" element={<AdminCreate />} />
          <Route path="/admin/edit/:id" element={<AdminEdit />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
      <BookCallModal isOpen={isBookCallOpen} onClose={() => setIsBookCallOpen(false)} />
    </div>
  );
};

export default App;