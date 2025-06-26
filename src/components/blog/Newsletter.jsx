import React from "react";

const Newsletter = () => {
  return (
    <section className="py-16 px-4 bg-gradient-to-r from-red-900/20 to-orange-900/20">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
          Stay Updated
        </h2>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Get the latest insights on AI video production, industry trends, and
          exclusive content delivered to your inbox.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-6 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-orange-500 flex-1"
          />
          <button className="bg-gradient-to-r from-red-600 to-orange-600 px-8 py-3 rounded-lg font-semibold hover:from-red-700 hover:to-orange-700 transition-all">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;