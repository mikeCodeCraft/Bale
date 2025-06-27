// src/components/Authors.jsx
import { Link } from "react-router-dom";
import { authors } from "./data/authors";

const Authors = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="pt-28 pb-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6 ">
              Our {' '}
              <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
                 Authors
              </span>
            </h1>
            <p className="text-base text-gray-300 max-w-md mx-auto">
              Meet the brilliant minds behind Bale's content. Our team of experts
              brings diverse perspectives on AI, video production, and digital
              innovation.
            </p>
          </div>

          <div className="flex justify-center">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Object.values(authors).map((author) => (
                <Link
                  key={author.id}
                  to={`/authors/${author.id}`}
                  className="group h-full"
                >
                  <div className="bg-gray-900 p-3 rounded-lg hover:bg-gray-800 transition-all duration-300 hover:scale-105 flex flex-col h-full min-h-[180px] max-w-xs mx-auto">
                    <div className="text-center flex flex-col flex-1">
                      <img
                        src={author.avatar}
                        alt={author.name}
                        className="w-10 h-10 rounded-full mx-auto mb-2 group-hover:scale-110 transition-transform duration-300"
                      />
                      <h3 className="text-base font-bold mb-1 group-hover:text-orange-500 transition-colors">
                        {author.name}
                      </h3>
                      <p className="text-orange-500 text-xs mb-1">{author.role}</p>
                      <p className="text-gray-400 text-xs mb-2 leading-snug flex-1">
                        {author.bio}
                      </p>
                      <div className="flex justify-center space-x-2 mb-1">
                        <a
                          href={`https://twitter.com/${author.social.twitter}`}
                          className="text-gray-400 hover:text-blue-400 transition-colors text-xs"
                        >
                          Twitter
                        </a>
                        <a
                          href={`https://linkedin.com/in/${author.social.linkedin}`}
                          className="text-gray-400 hover:text-blue-600 transition-colors text-xs"
                        >
                          LinkedIn
                        </a>
                      </div>
                      <div className="text-xs text-gray-500">
                        {author.posts} articles
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Authors;