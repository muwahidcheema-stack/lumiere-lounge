import React, { useState } from 'react'
import { Link } from "react-router-dom";
import FavoriteButton from './FavoriteButton';
function MovieCard({movie}) {
    const [imageLoaded, setImageLoaded] = useState(false)
    const posterUrl = movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : 'https://image.tmdb.org/t/p/w500x750?text=No+Poster+Available';
    const releaseYear = movie.release_date ? movie.release_date.split('-')[0] : 'N/A';
    const rating = movie.vote_average ? movie.vote_average.toFixed(1) : 'NR';
  return (
    <>
        <div className='group relative rounded-xl bg-gray-600 overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between'>
            <div className='relative aspect-2/3 w-full overflow-hidden bg-gray-500'>
                {!imageLoaded && (
                    <div className="absolute inset-0 bg-gray-800 animate-pulse" />
                )}
                <Link to={`/movie/&{movie.id}`}>
                <img
                className={`w-full h-full object-cover group-hover:scale-105 transition-transform duration 150 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
                src={posterUrl}
                alt={movie.title}
                loading = "Lazy"
                onLoad={() => setImageLoaded(true)}
                />
                </Link>
                <div className='absolute top-1 px-2 flex items-center bg-black/2 font-semibold text-sm'>
                    <span>⭐</span>
                    <span>{rating}</span>
                </div>
                <div className='absolute top-0 right-2 z-10'>
                    <FavoriteButton movie={movie}/>
                </div>
            </div>
            <div className='p-4 flex flex-col grow justify-between bg-gray-900 '>
                <Link
                to={`/movie/${movie.id}`}
                className=''>
                    <h3 className='text-white font-bold line-clamp-1 text-xs' title={movie.title}>
                        {movie.title || 'N/A'}
                    </h3>
                </Link>
                <div className='flex justify-between items-center text-sm mt-2'>
                    <span>{releaseYear}</span>
                </div>
            </div>
            
        </div>
    </>
  )
}

export default MovieCard