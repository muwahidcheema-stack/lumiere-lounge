import React from 'react'
import { useFavorite } from '../Context/FavoriteContext'
import MovieCard from '../Components/MovieCard'
function Favorites() {
  const { favorites } = useFavorite();
  return (
    <>
      <main className='max-w-7xl min-h-screen text-white bg-gray-950 px-6 py-10 mx-auto'>
        <h1 className='text-3xl gap-3 font-extrabold md:text-4xl mb-8 flex items-center pl-3 border-l-4 border-orange-600'>
          Your Favorite Movies ❤️
        </h1>

        { favorites.length === 0 ? (
            <div className='text-center py-20 text-gray-400 space-y-3'>
              <p className='text-2xl font-semibold'>No Favorite Added yet!</p>
              <p className='text-sm'>Try Clicking ❤️ on Moviecard or Detail Page to add to Favorite.</p>
            </div>
          ) : (
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-6 px-2 sm:px-6'>
              { favorites.map((movie) => (
                <MovieCard key={movie.id} movie={movie}/>
              ))}
            </div>
          )
        }
      </main>
    </>
  )
}

export default Favorites