import React from 'react'
import MovieCard from './MovieCard'
function SimilarMovies({movies = []}) {
    const cleanMovies = movies.filter((vid) => (vid.title && vid.poster_path)).slice(0,5);
    if(cleanMovies.length === 0) return null;
  return (
    <>
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6'>
            {cleanMovies.map((movie) => (
                <MovieCard key={movie.id} movie={movie}/>
            ))}
        </div>
    </>
  )
}
export default SimilarMovies