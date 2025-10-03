// src/pages/Home.jsx
import React from "react";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-yellow-50 p-6">
      {/* Header */}
      <h1 className="text-5xl font-bold text-yellow-700 mb-4 text-center">
        Welcome to Deliver My Food
      </h1>
      <p className="text-lg text-gray-700 mb-8 text-center max-w-xl">
        Your favorite meals delivered fast and fresh! Explore a wide variety of
        restaurants, track your orders, and enjoy your food from the comfort of
        your home.
      </p>

      {/* Call-to-Action Buttons */}
      <div className="flex gap-4">
        <button className="px-6 py-3 bg-yellow-600 text-white font-semibold rounded-lg hover:bg-yellow-700 transition-colors">
          Order Now
        </button>
        <button className="px-6 py-3 border border-yellow-600 text-yellow-600 font-semibold rounded-lg hover:bg-yellow-100 transition-colors">
          Browse Restaurants
        </button>
      </div>

      {/* Footer Text */}
      <p className="text-gray-500 mt-10 text-sm text-center">
        Inspired by Food Panda services. Fast, fresh, and reliable delivery at
        your doorstep.
      </p>
    </div>
  );
};

export default Home;
