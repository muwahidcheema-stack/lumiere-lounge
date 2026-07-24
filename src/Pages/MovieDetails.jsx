import React from 'react'
import { useState,useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'

import CastList from '../Components/CastList'
import SimilarMovies from '../Components/SimilarMovies'
import TrailerPlayer from '../Components/TrailerPlayer'
import Loader from '../Components/Loader'

import {getMovieCredits, getMovieDetails, getMovieVideo, getSimilarMovies} from '../Services/tmdbApi'
function MovieDetails() {
  const {movieId} = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const [movieCredits, setMovieCredits] = useState([]);
  const [movieVideo, setMovieVideo] = useState([]);
  const [similarMovies, setSimilarMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    async function fetchAllDetails(){
      try{
        setError(null);
        setLoading(true);
        const [deatilsData, creditsData, videoData, similarData] = await Promise.all([
          getMovieDetails(movieId),
          getMovieCredits(movieId),
          getMovieVideo(movieId),
          getSimilarMovies(movieId),
        ]);

        const validateMovies = (res) => {
          const list = res.results || res || [];
          return list.filter((movie) => movie.title?.trim() && movie.poster_path)
        }

        setMovieDetails(deatilsData);
        setMovieCredits(creditsData.cast || [])
        setMovieVideo(videoData.results || [])
        setSimilarMovies(validateMovies(similarData.results || []))
      }catch(err){
        console.log("Failed to Load Movie Details", err);
        setError("Unable to Fetch Movies !!")
      }finally{
        setLoading(false);
      }
    }

    if(movieId){
      fetchAllDetails();
      window.scrollTo({top:0, behavior: "smooth"})
    }
  },[movieId])


  if(loading){
    return(
      <div className='min-h-screen bg-gray-950 text-white p-8'>
        <Loader count={5}/>
      </div>
    )
  }

  if(error || !movieDetails){
    return(
      <main className='flex flex-col min-h-screen text-white justify-center items-center gap-4'>
        <p className='text-red-600 text-lg'> {error || "Movie Not Found"} </p>
        <Link 
        to="/" 
        className='px-4 py-2 bg-orange-500 hover:bg-orange-800 rounded-lg text-white transition'>
          Back To Home
        </Link>
      </main>
    )
  }

  const backDropUrl = movieDetails.backdrop_path ? `https://image.tmdb.org/t/p/original${movieDetails.backdrop_path}` : null;

  const posterUrl = movieDetails.poster_path ? `https://image.tmdb.org/t/p/w500${movieDetails.poster_path}` : 'https://via.placeholder.com/500x750?text=No+poster+Available';

  const releaseYear = movieDetails.release_date ? movieDetails.release_date.split('-')[0] : 'N/A'

  const duration = movieDetails.runtime ? `${Math.floor(movieDetails.runtime / 60)}h ${movieDetails.runtime % 60}m` : 'N/A'
  return (
    <>
      <main className='min-h-screen bg-gray-950 text-white pb-16'>
        {/* HERO SECTION CONTAINER */}
        <div className="relative w-full min-h-125 flex items-end bg-gray-950 overflow-hidden">
          
          {/* 1. Backdrop Image */}
          {backDropUrl && (
            <div
              className="absolute h-screen inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${backDropUrl})` }}
            />
          )}

          {/* 2. Darkness & Gradient Overlays */}
          {/* Darkens image slightly overall */}
          <div className="absolute inset-0 bg-black/5" /> 
          {/* Smooth gradient fading into the page bottom */}
          <div className="absolute inset-0 bg-linear-to-t from-gray-950 via-gray-950/60 to-transparent" />
          {/* Side gradient for better text readability */}
          <div className="absolute inset-0 bg-linear-to-r from-gray-950/90 via-gray-950/40 to-transparent" />

          {/* 3. Hero Content Overlay */}
          <div className="relative z-10 max-w-7xl mx-auto px-6 py-12 w-full flex flex-col md:flex-row gap-8 items-center md:items-end">
            
            {/* Poster Image Card */}
            <div className="w-48 md:w-64 shrink-0 rounded-2xl overflow-hidden shadow-2xl border border-gray-800/80">
              <img
                src={posterUrl}
                alt={movieDetails.title}
                className="w-full h-auto object-cover"
              />
            </div>

            
            <div className="flex-1 text-white space-y-3">
              <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">
                {movieDetails.title}
              </h1>
              
              {movieDetails.tagline && (
                <p className="text-gray-300 italic text-lg">"{movieDetails.tagline}"</p>
              )}


              {movieDetails?.genre?.map((genre) => (
                <p className="text-gray-300 italic text-lg">"{genre.name}"</p>
              ))}

              
              <p className="text-gray-300 max-w-2xl line-clamp-3 text-sm md:text-base leading-relaxed">
                {movieDetails.overview}
              </p>
            </div>

          </div>
        </div>
        


        <div className="max-w-7xl mx-auto px-4 py-10 flex flex-col gap-12">
        
          
          {movieCredits.length > 0 && (
            <section>
              <h2 className="text-2xl font-bold mb-4 border-l-4 border-orange-600 pl-3">
                Top Cast
              </h2>
              <CastList cast={movieCredits} />
            </section>
          )}

          
          <section>
            <h2 className="text-2xl font-bold mb-4 border-l-4 border-orange-600 pl-3">
              Official Trailer
            </h2>
            <TrailerPlayer video={movieVideo} />
          </section>

          
          {similarMovies.length > 0 && (
            <section>
              <h2 className="text-2xl font-bold mb-6 border-l-4 border-orange-600 pl-3">
                You Might Also Like
              </h2>
              <SimilarMovies movies={similarMovies} />
            </section>
          )}

        </div>
      </main>
    </>
  )
}

export default MovieDetails