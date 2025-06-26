// src/components/Authors.jsx
import { Link } from "react-router-dom";
import { authors } from "./data/authors";

const Authors = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
              Our Authors
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Meet the brilliant minds behind Bale's content. Our team of experts
              brings diverse perspectives on AI, video production, and digital
              innovation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.values(authors).map((author) => (
              <Link
                key={author.id}
                to={`/authors/${author.id}`}
                className="group"
              >
                <div className="bg-gray-900 p-8 rounded-xl hover:bg-gray-800 transition-all duration-300 hover:scale-105">
                  <div className="text-center">
                    <img
                      src={author.avatar}
                      alt={author.name}
                      className="w-24 h-24 rounded-full mx-auto mb-4 group-hover:scale-110 transition-transform duration-300"
                    />
                    <h3 className="text-xl font-bold mb-2 group-hover:text-orange-500 transition-colors">
                      {author.name}
                    </h3>
                    <p className="text-orange-500 text-sm mb-4">{author.role}</p>
                    <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                      {author.bio}
                    </p>
                    <div className="flex justify-center space-x-4 mb-4">
                      <a
                        href={`https://twitter.com/${author.social.twitter}`}
                        className="text-gray-400 hover:text-blue-400 transition-colors"
                      >
                        Twitter
                      </a>
                      <a
                        href={`https://linkedin.com/in/${author.social.linkedin}`}
                        className="text-gray-400 hover:text-blue-600 transition-colors"
                      >
                        LinkedIn
                      </a>
                    </div>
                    <div className="text-sm text-gray-500">
                      {author.posts} articles published
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Authors;