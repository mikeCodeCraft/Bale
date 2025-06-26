// src/components/AuthorProfile.jsx
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { authors } from "./data/authors";
import { blogPosts } from "./data/blogPosts";

const AuthorProfile = () => {
  const { id } = useParams();
  const author = authors[parseInt(id)];
  const [authorPosts, setAuthorPosts] = useState([]);

  useEffect(() => {
    if (author) {
      const posts = blogPosts.filter((post) => post.authorId === author.id);
      setAuthorPosts(posts);
    }
  }, [author]);

  if (!author) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Author Not Found</h1>
          <Link
            to="/authors"
            className="text-orange-500 hover:text-orange-400"
          >
            ← Back to Authors
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <Link
            to="/authors"
            className="text-orange-500 hover:text-orange-400 mb-8 inline-block"
          >
            ← Back to Authors
          </Link>

          <div className="text-center mb-16">
            <img
              src={author.avatar}
              alt={author.name}
              className="w-32 h-32 rounded-full mx-auto mb-6"
            />
            <h1 className="text-4xl font-bold mb-4">{author.name}</h1>
            <p className="text-orange-500 text-lg mb-6">{author.role}</p>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-6">
              {author.bio}
            </p>
            <div className="flex justify-center space-x-6 mb-8">
              <a
                href={`#`}
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                Twitter
              </a>
              <a
                href={`#`}
                className="text-gray-400 hover:text-blue-600 transition-colors"
              >
                LinkedIn
              </a>
              <a
                href={`#`}
                className="text-gray-400 hover:text-orange-500 transition-colors"
              >
                Email
              </a>
            </div>
            <div className="text-gray-400">
              {author.posts} articles published
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-8">
              Articles by {author.name}
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {authorPosts.map((post) => (
                <Link
                  key={post.id}
                  to={`/blog/${post.id}`}
                  className="group"
                >
                  <article className="bg-gray-900 rounded-xl overflow-hidden hover:bg-gray-800 transition-all duration-300 hover:scale-105">
                    <div className="aspect-video bg-gradient-to-r from-orange-900/20 to-red-900/20 relative overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
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
                        <span>{post.date}</span>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthorProfile;