import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <section className="py-20 min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-purple-900 text-white">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-6xl md:text-7xl font-extrabold mb-4 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
          404
        </h2>
        <h3 className="text-3xl md:text-4xl font-bold mb-4">Page Not Found</h3>
        <p className="text-lg md:text-xl text-gray-300 mb-8">
          Oops! The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          className="inline-block px-8 py-3 rounded-full font-semibold bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 transition text-white shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
        >
          Back to Home
        </Link>
      </div>
    </section>
  );
};

export default NotFound;