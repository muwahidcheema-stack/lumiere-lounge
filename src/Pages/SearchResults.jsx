import React, {useState, useEffect} from 'react'
import { searchMovie } from '../Services/tmdbApi'
import MovieCard from '../Components/MovieCard'
import Loader from '../Components/Loader'

function SearchResults() {

  const [query, setQuery] = useState('');
  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);
  const [error, setError] = useState(null)

  useEffect(() => {
    if(!query.trim()){
      setResult([]);
      setLoading(false);
      setHasSearched(false);
      return;
    }
    setLoading(true);
    const timer = setTimeout(async () => {
      try{
        const searchData = await searchMovie(query);
  
        const validateMovies = (res) => {
          const list = res.results || res || []
          return list.filter((item) => item.title && item.poster_path)
        }
  
        setResult(validateMovies(searchData));
        setHasSearched(true); 
      }catch(err){
        console.log("Unable to fetch Data", err);
        setError("Unable to fetch Movie !!")
      }finally{
        setLoading(false)
      }
    }, 400);
    return () => clearTimeout(timer)
  },[query])
  return (
    <>
      <main className='min-h-screen bg-gray-950 text-white px-4 py-8 max-w-7xl mx-auto'>
        <div className='flex flex-col items-center gap-4 mb-10 max-w-2xl mx-auto text-center'>
          <h2 className='text-3xl md:text-4xl font-extrabold text-white tracking-tight'>Find Your Next Movie</h2>
        
          <div className='w-full relative'>
            <input 
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder='Search by Title e.g. Inception, Batman...'
            className='w-full bg-gray-900 rounded-2xl text-white placeholder-gray-400 pl-12 pr-10 py-4 border border-gray-800 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all duration-150 shadow-2xl'
            />

            <svg
            className='text-gray-400 w-5 h-5 absolute top-1/2 -translate-y-1/2 left-3'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'>
              <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
              />
            </svg>

            {query && (
              <button
              className='absolute w-5 h-5 right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white text-sm bg-gray-600 rounded-full flex items-center justify-center transition'
              onClick={() => setQuery('')}
              > <strong>X</strong> </button>
            )}
          </div>
        </div>

        {loading ? (
          <Loader count={10}/>
        ) : hasSearched && result.length === 0 ? (
          <div className='text-center py-16 text-gray-400 space-y-2'>
            <p className='text-2xl font-semibold'> No Results Found </p>
            <p className='text-sm'> Try searching for something else like "Intersteller" or "Dark Knight".</p>
          </div>
        ) : (
          <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6'>
            { result.map((movie) => (
              <MovieCard key={movie.id} movie={movie}/>
            ))}
          </div>
        )}
      </main>
    </>
  )
}

export default SearchResults