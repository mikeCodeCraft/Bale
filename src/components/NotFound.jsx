
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <section className="py-20 bg-gray-50 flex items-center justify-center min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-5xl font-bold text-gray-800 mb-4">404 - Page Not Found</h2>
        <p className="text-xl text-gray-600 mb-8">The page you're looking for doesn't exist.</p>
        <Link
          to="/"
          className="px-6 py-3 bg-indigo-600 text-white rounded-full font-medium hover:bg-indigo-700 transition"
        >
          Back to Home
        </Link>
      </div>
    </section>
  );
};

export default NotFound;