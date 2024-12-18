import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="relative bg-gray-800 p-4 shadow-lg sticky top-0 z-50">
      {/* Background Layer */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-30"></div>

      <nav className="container mx-auto flex justify-between items-center relative">
        {/* Logo */}
        <Link 
          to="/" 
          className="text-white text-3xl font-extrabold tracking-wide transition-transform duration-300 transform hover:scale-110"
        >
          My Blog
        </Link>

        {/* Hamburger Icon for Mobile */}
        <button 
          onClick={toggleMobileMenu} 
          className="text-white md:hidden focus:outline-none"
          aria-label="Toggle navigation"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>

        {/* Desktop Menu */}
        <ul className={`flex space-x-8 md:flex ${isMobileMenuOpen ? 'block' : 'hidden'} md:block`}>
          <li>
            <NavLink 
              to="/" 
              className={({ isActive }) => `text-white text-lg font-semibold hover:text-gray-200 transition duration-300 ${isActive ? 'underline' : ''}`}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/posts" 
              className={({ isActive }) => `text-white text-lg font-semibold hover:text-gray-200 transition duration-300 ${isActive ? 'underline' : ''}`}
            >
              Blog
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/contact" 
              className={({ isActive }) => `text-white text-lg font-semibold hover:text-gray-200 transition duration-300 ${isActive ? 'underline' : ''}`}
            >
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/privacy" 
              className={({ isActive }) => `text-white text-lg font-semibold hover:text-gray-200 transition duration-300 ${isActive ? 'underline' : ''}`}
            >
              Privacy Policy
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
