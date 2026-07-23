import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import HeroSection from '../Components/HeroSection';
function Home() {
  const [query, setQuery] = useState("")
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if(query.trim){
      navigate(`/search?q=${encodeURIComponent(query)}`)
    }
  }
  return (
    <>
      <main className='min-h-screen bg-gray-500 text-white'>
        <HeroSection
        query={query}
        setQuery={setQuery}
        handleSubmit={handleSubmit}
        />

      </main>
    </>
  )
}

export default Home