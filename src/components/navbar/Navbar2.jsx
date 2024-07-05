import React from 'react';
import { NavLink } from 'react-router-dom';
import BurgerMenu from './BurgerMenu';

export const Navbar2 = () => {
  return (
    <nav className="bg-black text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <NavLink to="/" className="text-lg font-semibold hover:text-gray-400">Home</NavLink>
          <NavLink to="/genre" className="hover:text-gray-400">Genre</NavLink>
          <NavLink to="/country" className="hover:text-gray-400">Country</NavLink>
        </div>
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Search movies..."
            className="px-4 py-2 rounded-l bg-gray-800 text-white focus:outline-none"
          />
          <button className="px-4 py-2 bg-gray-700 rounded-r hover:bg-gray-600">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
        </div>
        <div className="flex items-center space-x-4">
          <NavLink to="/movies" className="hover:text-gray-400">Movies</NavLink>
          <NavLink to="/series" className="hover:text-gray-400">Series</NavLink>
          <NavLink to="/animation" className="hover:text-gray-400">Animation</NavLink>
          <NavLink to="/login" className="hover:text-gray-400">Login/Signup</NavLink>
          <div className="relative">
            <BurgerMenu/>
          </div>
        </div>
      </div>
    </nav>
  );
};