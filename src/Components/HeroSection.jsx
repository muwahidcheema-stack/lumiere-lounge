import React from 'react'
import { useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
function HeroSection({query, setQuery, handleSubmit}) {
  return (
    <div className="relative bg-gray-900 text-white py-20 px-6 flex flex-col items-center justify-center text-center">
      <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
        Welcome to Lumiére Lounge
      </h1>
      <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl">
        Millions of movies, TV shows and people to discover. Explore now.
      </p>

      {/* Large Input Box */}
      {/* <form onSubmit={handleSubmit} className="w-full max-w-3xl flex shadow-lg">
        <input
          type="text"
          placeholder="Search for a movie, TV show, person..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full px-6 py-4 text-lg text-black bg-white rounded-l-full focus:outline-none focus:ring-2 focus:ring-orange-700"
        />
        <button
          type="submit"
          className="bg-orange-700 hover:bg-orange-800 text-white px-8 py-4 text-lg font-semibold rounded-r-full transition-colors duration-200"
        >
          Search
        </button>
      </form> */}
    </div>
  )
}
export default HeroSection