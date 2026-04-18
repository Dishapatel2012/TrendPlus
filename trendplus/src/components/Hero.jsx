import React from 'react';
import image from '../assets/hero.png';

const Hero = () => {
  return (
    <section className="bg-purple-100 py-40">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

        {/* left side */}
        <div className="max-w-lg">
          <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Predict Viral Products Before They Trend
            </h1>

          <p className="text-gray-600 mb-6 text-xl">
            AI analyzes TikTok, news, and social media to find trending products.
          </p>

          <div className="flex gap-4">
            <button className="bg-purple-600 text-white px-6 py-2 rounded-lg">
              Get Started
            </button>

            <button className="border border-purple-700 text-purple-900  px-6 py-2 rounded-lg">
              Explore Trends
            </button>
          </div>
        </div>

        {/* right side */}
        <div>
          <img src={image} alt="hero" className="w-[600px]" />
        </div>

      </div>
    </section>
  );
};

export default Hero;