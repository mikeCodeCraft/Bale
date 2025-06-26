import { useState } from "react";
import { Link } from "react-router-dom";
import { blogPosts } from "./data/blogPosts";
import { authors } from "./data/authors";
import { categories } from "./data/constants";
import Pagination from "./Pagination";
import FinalCTASection from "../Landing/FinalCTASection";
import Preload from "../Landing/Preload";
import { motion } from 'framer-motion';
import { Play, Clock, DollarSign, Users, Search } from 'lucide-react';

const BRAND_ORANGE = '#BA3D0A';
const BRAND_RED = '#A90F0A';
const BRAND_BLACK = '#000000';
const BRAND_WHITE = '#FFFFFF';

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("date");
  const [currentPage, setCurrentPage] = useState(1);
  const [posts, setPosts] = useState(blogPosts);
  const [loading, setLoading] = useState(true);
  const [showMobileSearch, setShowMobileSearch] = useState(false);
  const postsPerPage = 6;

  // Preload logic
  if (loading) return <Preload onFinish={() => setLoading(false)} />;

  const filteredPosts = posts
    .filter(
      (post) =>
        (selectedCategory === "All" || post.category === selectedCategory) &&
        (searchTerm === "" ||
          post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
          post.tags.some((tag) =>
            tag.toLowerCase().includes(searchTerm.toLowerCase())
          ))
    )
    .sort((a, b) => {
      switch (sortBy) {
        case "popular":
          return b.views - a.views;
        case "title":
          return a.title.localeCompare(b.title);
        case "date":
        default:
          return new Date(b.date) - new Date(a.date);
      }
    });

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const currentPosts = filteredPosts.slice(
    (currentPage - 1) * postsPerPage,
    currentPage * postsPerPage
  );
  const featuredPosts = posts.filter((post) => post.featured);

  return (
    <div className="min-h-screen bg-black text-white" style={{ fontFamily: "'Inter', sans-serif" }}>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-0 group">
        <div className="container mx-auto">
          <div className="text-center mb-4">
            <h1 className="text-4xl md:text-6xl lg:text-5xl font-extrabold mb-10 leading-tight">
              <span
                className="bg-clip-text text-transparent font-extrabold"
                style={{
                  backgroundImage: `linear-gradient(to right, ${BRAND_ORANGE}, ${BRAND_RED})`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Bale {''}
              </span>
              <span>Blog</span>
            </h1>
            <p className="text-base md:text-lg text-gray-300 mb-8 max-w-xl mx-auto leading-relaxed">
              Dive deep into the world of AI-powered video production. Discover
              insights, trends, and innovations that are reshaping the creative
              industry.
            </p>
            <motion.div className="flex flex-col sm:flex-row justify-center gap-4 mt-6 items-center">
              <Link
                to="/authors"
                className="border-2 border-[#A90F0A] text-white px-5 py-2.5 rounded-lg font-semibold text-lg flex items-center justify-center gap-2 shadow-lg hover:bg-red-600 transition-all duration-200 min-w-[120px] text-center"
                style={{ backgroundImage: `red` }}
                whileHover={{ scale: 1.02, boxShadow: '0 10px 20px rgba(186, 61, 10, 0.10)' }}
                whileTap={{ scale: 0.97 }}
              >
                Meet Our Authors
              </Link>
              <Link
                to="/admin"
                className="border-2 border-orange-600 px-5 py-2.5 rounded-lg font-semibold text-lg flex items-center justify-center gap-2 text-orange-500 hover:bg-orange-600 hover:text-white transition-all duration-200 min-w-[120px] text-center"
              >
                Admin
              </Link>
            </motion.div>
          </div>
          {/* Search, Category, and Sort */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-center gap-2 mb-0">
            {/* Mobile: Search Icon Toggle */}
            <div className="flex w-full md:hidden justify-center items-center gap-2">
              <button
                aria-label="Show search"
                className="p-2 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
                onClick={() => setShowMobileSearch((prev) => !prev)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z" />
                </svg>
              </button>
              {showMobileSearch && (
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-32 px-3 py-2 rounded bg-gray-800 text-white placeholder-gray-400 text-sm focus:outline-none focus:ring-1 focus:ring-orange-500 transition-all duration-200"
                  autoFocus
                />
              )}
              {/* Category Dropdown */}
              <div className="relative w-24">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="appearance-none w-full px-2 py-2 pr-8 rounded bg-gray-800 text-white text-sm focus:outline-none focus:ring-1 focus:ring-orange-500"
                >
                  {categories.map((cat) => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
                <span className="pointer-events-none absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400">
                  <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                </span>
              </div>
              {/* Sort Dropdown */}
              <div className="relative w-20">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none w-full px-2 py-2 pr-8 rounded bg-gray-800 text-white text-sm focus:outline-none focus:ring-1 focus:ring-orange-500"
                >
                  <option value="date">Newest</option>
                  <option value="popular">Most Popular</option>
                  <option value="title">Title</option>
                </select>
                <span className="pointer-events-none absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400">
                  <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                </span>
              </div>
            </div>
            {/* Desktop: Always show search bar and controls */}
            <div className="hidden md:flex w-full justify-center items-center gap-2">
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-1/4 px-3 py-2 rounded bg-gray-800 text-white placeholder-gray-400 text-sm focus:outline-none focus:ring-1 focus:ring-orange-500"
              />
              {/* Category Dropdown */}
              <div className="relative w-32">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="appearance-none w-full px-3 py-2 pr-8 rounded bg-gray-800 text-white text-sm focus:outline-none focus:ring-1 focus:ring-orange-500"
                >
                  {categories.map((cat) => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
                <span className="pointer-events-none absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400">
                  <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                </span>
              </div>
              {/* Sort Dropdown */}
              <div className="relative w-28">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none w-full px-3 py-2 pr-8 rounded bg-gray-800 text-white text-sm focus:outline-none focus:ring-1 focus:ring-orange-500"
                >
                  <option value="date">Newest</option>
                  <option value="popular">Most Popular</option>
                  <option value="title">Title</option>
                </select>
                <span className="pointer-events-none absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400">
                  <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Featured Articles */}
      {searchTerm === "" && selectedCategory === "All" && (
        <section className="pt-0 pb-0 px-2 mt-[-90px] md:mt-[-50px]">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-orange-500">
              Featured Articles
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {featuredPosts.map((post) => (
                <Link
                  key={post.id}
                  to={`/blog/${post.id}`}
                  className="group cursor-pointer"
                >
                  <article className="bg-gray-900 rounded-xl overflow-hidden hover:bg-gray-800 transition-all duration-300 hover:scale-105 h-full flex flex-col">
                    <div className="aspect-video bg-gradient-to-r from-red-900/20 to-orange-900/20 relative overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                      <div className="absolute bottom-4 left-4">
                        <span className="bg-red-600 px-3 py-1 rounded-full text-xs font-semibold">
                          {post.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      <h3 className="text-xl font-bold mb-3 group-hover:text-orange-500 transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-gray-400 mb-4 leading-relaxed flex-1">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-sm text-gray-500 mt-auto">
                        <span>{authors[post.authorId]?.name}</span>
                        <div className="flex items-center space-x-4">
                          <span>{post.views} views</span>
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
      {/* Main Articles */}
      <section className="py-16 px-2">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12">
            {searchTerm || selectedCategory !== "All"
              ? `Search Results (${filteredPosts.length})`
              : "Latest Articles"}
          </h2>
          {currentPosts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-400 text-lg">
                No articles found matching your criteria.
              </p>
            </div>
          ) : (
            <>
              <div className="grid md:grid-cols-2 gap-6">
                {currentPosts.map((post, index) => (
                  <Link
                    key={post.id}
                    to={`/blog/${post.id}`}
                    className="group cursor-pointer"
                  >
                    <motion.div
                      className="relative overflow-hidden rounded-xl bg-white/5 border border-red-800 hover:border-red-600 transition-all duration-500 p-4 flex flex-col h-full"
                      initial={{ opacity: 0, y: 60 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.01 }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-red-300/10 to-orange-300/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="relative p-2 flex-1 flex flex-col">
                        <div className="mb-2 relative h-28 rounded-md overflow-hidden">
                          <img
                            src={post.image}
                            alt={post.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                          <div className="absolute bottom-2 left-2">
                            <span className="bg-red-600 px-3 py-1 rounded-full text-xs font-semibold">
                              {post.category}
                            </span>
                          </div>
                        </div>
                        <h3 className="text-lg font-bold mb-1 group-hover:text-orange-300 transition-colors duration-300">
                          {post.title}
                        </h3>
                        <p className="text-gray-300 leading-relaxed mb-2 text-sm">
                          {post.excerpt}
                        </p>
                        <div className="flex items-center justify-between text-xs text-gray-400 mt-2">
                          <span>{authors[post.authorId]?.name}</span>
                          <div className="flex items-center space-x-2">
                            <span>{post.views} views</span>
                            <span>•</span>
                            <span>{post.readTime}</span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </Link>
                ))}
              </div>
              {totalPages > 1 && (
                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={setCurrentPage}
                />
              )}
            </>
          )}
        </div>
      </section>
   
      <FinalCTASection />
    </div>
  );
};

export default Blog;