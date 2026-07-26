import React from 'react'
import { useFavorite } from '../Context/FavoriteContext';
function FavoriteButton({movie}) {

    const {toggleFavorite, isFavorite} = useFavorite();
    const favorited = isFavorite(movie);

    const handleClick = (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (movie) {
            toggleFavorite(movie);
        }
    }
    
  return (
    <>
        <button
        className={`p-2 rounded-full transition-colors duration-200 backdrop-blur-md text-white        ${favorited ? 'text-red-500 hover:text-red-600' : 'text-gray-300 hover:text-red-500 '}`}
        onClick={handleClick}
        title={favorited ? "Remove from favorites" : "Add to Favorites"}
        >
            <svg
            className={`w-5 h-5 fill-current transition-transform duration-200 active:scale-125 ${favorited ? 'fill-red-500' : 'fill-none stroke-current stroke-2'}`}
            viewBox='0 0 24 24'
            >
                <path d='M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z'/>
            </svg>
        </button>
    </>
  )
}
export default FavoriteButton