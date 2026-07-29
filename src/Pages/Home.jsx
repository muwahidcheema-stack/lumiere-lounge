import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import HeroSection from '../Components/HeroSection';
import MovieCard from '../Components/MovieCard';
import { getTrendingMovies, getPopularMovies, getTopratedMovies, getUpcomingMovies } from '../Services/tmdbApi'
import { useEffect } from 'react';
import Loader from '../Components/Loader';
function Home() {

  const [query, setQuery] = useState("")
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if(query.trim()){
      navigate(`/search?q=${encodeURIComponent(query)}`)
    }
  }

  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const [loading, setLoading] = useState(false)

  const [trendingMovie, setTrendingMovie] = useState([])
  const [UpcomingMovie, setUpcomingMovie] = useState([])
  const [popularMovie, setPopularMovie] = useState([])
  const [topRatedMovie, setTopRatedMovie] = useState([])


  useEffect(() => {
    let timer;

    async function fetchAllHomeMovies(){
      const MIN_LOADING_TIME = 1000;
      const startTime = Date.now();

      try{
        setLoading(true)
        const [trendingData, popularData, topRatedData, upcomingData] = await Promise.all([
          getTrendingMovies(page),
          getPopularMovies(page),
          getTopratedMovies(page),
          getUpcomingMovies(page),
        ]);

        const validateMovies = (res) => {
          const list = res.results || res || [];
          return list.filter((movie) => movie.title?.trim() && movie.poster_path)
        }

        const validatedTrending = validateMovies(trendingData)
        const validatedPopular = validateMovies(popularData)
        const validatedTopRated = validateMovies(topRatedData)
        const validatedUpcoming = validateMovies(upcomingData)

        const elapsedTime = Date.now() - startTime;
        const remainingTime = Math.max(0, MIN_LOADING_TIME - elapsedTime);

        timer = setTimeout(() => {
          setTrendingMovie((prev) => (page === 1 ? validatedTrending : [...prev, ...validatedTrending]));
          setPopularMovie((prev) => (page === 1 ? validatedPopular : [...prev, ...validatedPopular]))
          setTopRatedMovie((prev) => (page === 1 ? validatedTopRated : [...prev, ...validatedTopRated]))
          setUpcomingMovie((prev) => (page === 1 ? validatedUpcoming : [...prev, ...validatedUpcoming]))
          setLoading(false)
        }, remainingTime);
      }
      catch (err){
        console.error("Failed to fetch trending movies ", err);
      }finally{
        setLoading(false)
      }
    }

    fetchAllHomeMovies();

    return () => clearTimeout(timer);
  }, [page])

  const handleLoadMore = () => {
    setPage((prev) => prev + 1)
  }

  return (
    <>
      <main className='min-h-screen bg-gray-950 text-white'>
        <HeroSection
        query={query}
        setQuery={setQuery}
        handleSubmit={handleSubmit}
        />

        <section className='max-w-7xl mx-auto px-4 py-8'>
          <h2 className='text-2xl font-bold pl-3 border-l-4 border-orange-600 mb-6 text-white'>
            Trending Movies🔥
          </h2>

          {loading && <Loader count = {10}/>}

          { !loading && (
            <>   
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-6 px-2 sm:px-6">
                {trendingMovie.slice(0,10).map((movie) => (
                  <MovieCard key={movie.id} movie={movie} />
                ))}
              </div>

              {/* <div className="flex justify-center mt-8">
                <button
                  onClick={handleLoadMore}
                  disabled={loading}
                  className="px-6 py-2.5 bg-orange-600 hover:bg-orange-700 disabled:bg-gray-700 text-white font-medium rounded-xl transition shadow-md active:scale-95"
                >
                  {loading ? 'Loading...' : 'Load More Movies'}
                </button>
              </div> */}
            </>
            

          )}
        </section>

        <section className='max-w-7xl mx-auto px-4 py-8'>
          <h2 className='text-2xl font-bold pl-3 border-l-4 border-orange-600 mb-6 text-white'>
            Top-Rated Movies👑
          </h2>

          {loading && <Loader count = {10}/>}

          { !loading && (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-6 px-2 sm:px-6">
            {topRatedMovie.slice(0,10).map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
          )}
        </section>

        <section className='max-w-7xl mx-auto px-4 py-8'>
          <h2 className='text-2xl font-bold pl-3 border-l-4 border-orange-600 mb-6 text-white'>
            Upcoming Movies
          </h2>

          {loading && <Loader count = {10}/>}

          { !loading && (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-6 px-2 sm:px-6">
            {UpcomingMovie.slice(0,10).map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
          )}
        </section>


        <section className='max-w-7xl mx-auto px-4 py-8'>
          <h2 className='text-2xl font-bold pl-3 border-l-4 border-orange-600 mb-6 text-white'>
            Popular Movies⭐
          </h2>

          {loading && <Loader count = {10}/>}

          { !loading && (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-6 px-2 sm:px-6">
            {popularMovie.slice(0,10).map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
          )}
        </section>
      </main>
    </>
  )
}

export default Home