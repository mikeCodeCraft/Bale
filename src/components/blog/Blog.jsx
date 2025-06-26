import { useState } from "react";
import { Link } from "react-router-dom";
import { blogPosts } from "./data/blogPosts";
import { authors } from "./data/authors";
import { categories } from "./data/constants";
import Pagination from "./Pagination";
import Newsletter from "./Newsletter";
import Preload from "../Landing/Preload";
import { motion } from 'framer-motion';
import { Play, Clock, DollarSign, Users } from 'lucide-react';

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
    <div className="min-h-screen bg-black text-white">
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 group">
        <div className="container mx-auto">
          <div className="text-center mb-8">
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
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-xl mx-auto leading-relaxed">
              Dive deep into the world of AI-powered video production. Discover
              insights, trends, and innovations that are reshaping the creative
              industry.
            </p>
            <motion.div className="flex justify-center gap-4 mt-6">
              <Link
                to="/authors"
                className="border-2 border-[#A90F0A] text-white px-8 py-4 rounded-lg font-semibold text-lg flex items-center gap-2 shadow-lg hover:shadow-orange-800/10 transition-all duration-200"
                style={{ backgroundImage: 'linear-gradient(45deg, #BA3D0A -88%, #000000 70%)' }}
                whileHover={{ scale: 1.02, boxShadow: '0 10px 20px rgba(186, 61, 10, 0.10)' }}
                whileTap={{ scale: 0.97 }}
              >
                Meet Our Authors
              </Link>
              <Link
                to="/admin"
                className="inline-block border border-orange-600 px-6 py-2 rounded-lg font-semibold text-orange-500 hover:bg-orange-600 hover:text-white transition-all"
              >
                Admin
              </Link>
            </motion.div>
          </div>
          {/* Search, Category, and Sort */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-center gap-4 mb-8">
            <input
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full md:w-1/3 px-4 py-3 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full md:w-auto px-4 py-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
            >
              {categories.map((cat) => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="w-full md:w-auto px-4 py-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
            >
              <option value="date">Newest</option>
              <option value="popular">Most Popular</option>
              <option value="title">Title</option>
            </select>
          </div>
        </div>
      </section>
      {/* Featured Articles */}
      {searchTerm === "" && selectedCategory === "All" && (
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-orange-500">
              Featured Articles
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {featuredPosts.map((post) => (
                <Link
                  key={post.id}
                  to={`/blog/${post.id}`}
                  className="group cursor-pointer"
                >
                  <article className="bg-gray-900 rounded-xl overflow-hidden hover:bg-gray-800 transition-all duration-300 hover:scale-105">
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
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-3 group-hover:text-orange-500 transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-gray-400 mb-4 leading-relaxed">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-sm text-gray-500">
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
      <section className="py-16 px-4">
        <div className="container mx-auto">
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
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {currentPosts.map((post) => (
                  <Link
                    key={post.id}
                    to={`/blog/${post.id}`}
                    className="group cursor-pointer"
                  >
                    <article className="bg-gray-900 rounded-xl overflow-hidden hover:bg-gray-800 transition-all duration-300 hover:scale-105">
                      <div className="aspect-video bg-gradient-to-r from-orange-900/20 to-red-900/20 relative overflow-hidden">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                        <div className="absolute bottom-4 left-4">
                          <span className="bg-orange-600 px-3 py-1 rounded-full text-xs font-semibold">
                            {post.category}
                          </span>
                        </div>
                      </div>
                      <div className="p-6">
                        <h3 className="text-lg font-bold mb-3 group-hover:text-orange-500 transition-colors">
                          {post.title}
                        </h3>
                        <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                          {post.excerpt}
                        </p>
                        <div className="flex items-center justify-between text-xs text-gray-500">
                          <span>{authors[post.authorId]?.name}</span>
                          <div className="flex items-center space-x-2">
                            <span>{post.views} views</span>
                            <span>•</span>
                            <span>{post.readTime}</span>
                          </div>
                        </div>
                      </div>
                    </article>
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
      <Newsletter />
    </div>
  );
};

export default Blog;