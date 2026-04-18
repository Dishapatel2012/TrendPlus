import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowTrendUp, faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white shadow-lg fixed w-full z-10">

      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <FontAwesomeIcon icon={faArrowTrendUp} className="text-2xl" />
          <span className="text-2xl font-bold tracking-wide">
            Trendplus
          </span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 font-medium">
          <li><a href="#" className="hover:text-pink-200 transition">Home</a></li>
          <li><a href="#" className="hover:text-pink-200 transition">Trending</a></li>
          <li><a href="#" className="hover:text-pink-200 transition">Dashboard</a></li>
          <li><a href="#" className="hover:text-pink-200 transition">How It Works</a></li>
          <li><a href="#" className="hover:text-pink-200 transition">About</a></li>
          <li><a href="#" className="hover:text-pink-200 transition">Contact</a></li>
        </ul>

        {/* Login Button */}
        <button className="hidden md:block bg-white text-blue-600 font-semibold px-5 py-2 rounded-full hover:bg-pink-100 transition duration-300">
          Login
        </button>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            <FontAwesomeIcon icon={menuOpen ? faXmark : faBars} size="lg" />
          </button>
        </div>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white text-gray-800 px-6 py-4 space-y-4 shadow-md">
          <a href="#" className="block hover:text-pink-500">Home</a>
          <a href="#" className="block hover:text-pink-500">Trendingplus</a>
          <a href="#" className="block hover:text-pink-500">Dashboard</a>
          <a href="#" className="block hover:text-pink-500">How It Works</a>
          <a href="#" className="block hover:text-pink-500">About</a>
          <a href="#" className="block hover:text-pink-500">Contact</a>

          <button className="w-full bg-gradient-to-r from-blue-500 to-pink-500 text-white py-2 rounded-full">
            Login
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;