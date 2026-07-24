import React from 'react'
import { useState } from 'react'
import {Link, NavLink, useNavigate} from 'react-router-dom'
function Navbar() {
    const [query, setQuery] = useState("")
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        if(query.trim){
            navigate(`/search?q=${encodeURIComponent(query)}`)
        }
    }
  return (
    <header className="shadow sticky z-50 top-0 bg-white border-b border-gray-200">
      <nav className="px-4 lg:px-6 py-3">
        <div className="flex items-center justify-between mx-auto max-w-7xl">
          
          {/* 1. LEFT: Brand Logo */}
          <Link to="/" className="text-xl font-bold text-gray-900 flex items-center">
            <span className='text-orange-600 mr-1'>Lumiére </span> 
            Lounge
          </Link>

          {/* 2. MIDDLE: Nav Links */}
          <div className="hidden lg:flex items-center justify-center flex-1 mx-8">
            <ul className="flex flex-row space-x-8 font-medium">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `block py-1 duration-200 ${
                      isActive ? "text-orange-700 font-semibold" : "text-gray-700 hover:text-orange-700"
                    }`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/favorites"
                  className={({ isActive }) =>
                    `block py-1 duration-200 ${
                      isActive ? "text-orange-700 font-semibold" : "text-gray-700 hover:text-orange-700"
                    }`
                  }
                >
                  Favorites
                </NavLink>
              </li>
            </ul>
          </div>

          {/* 3. RIGHT: Search Button / Icon */}
          <div className="flex items-center">
            <button
              onClick={() => navigate('/search')}
              className="flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-gray-700 hover:text-orange-700 border border-gray-300 rounded-lg hover:border-orange-700 transition-colors"
            >
              {/* SVG Search Icon */}
              <svg 
                className="w-4 h-4" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth="2" 
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" 
                />
              </svg>
              <span>Search</span>
            </button>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar