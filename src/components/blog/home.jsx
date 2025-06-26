import { useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const Home = () => {
  const helloWorldApi = async () => {
    try {
      const response = await axios.get(`${API}/`);
      console.log(response.data.message);
    } catch (e) {
      console.error(e, `errored out requesting / api`);
    }
  };

  useEffect(() => {
    helloWorldApi();
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-red-500 via-orange-500 to-red-600 bg-clip-text text-transparent">
            Bale
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Create Hollywood-level videos without a crew, camera, or studio using
            cutting-edge AI technology.
          </p>
          <div className="flex justify-center space-x-4">
            <Link
              to="/blog"
              className="bg-gradient-to-r from-red-600 to-orange-600 px-8 py-3 rounded-lg font-semibold hover:from-red-700 hover:to-orange-700 transition-all"
            >
              Read Our Blog
            </Link>
            <Link
              to="/authors"
              className="border border-gray-700 px-8 py-3 rounded-lg font-semibold hover:border-orange-500 transition-all"
            >
              Meet Our Team
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;