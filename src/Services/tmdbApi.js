import axios from "axios";
const tmdbClient = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    headers: {
        Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
        'Content-Type': 'application/json',
    },
    timeout: 5000,
});

const fetcher = async (url, params = {}) => {
    const response = await tmdbClient.get(url, {params});
    return response.data;
}

export const getTrendyMovies = () => fetcher('/trending/all/day');
export const getPopularMovies = () => fetcher('/movie/popular');
export const getTopratedMovies = () => fetcher('/movie/top_rated');
export const getUpcomingMovies = () => fetcher('/movie/upcoming');

export const getMovieDetails = (movieId) => fetcher(`/movie/${movieId}`);
export const getMovieCredits = (movieId) => fetcher(`/movie/${movieId}/credits`);
export const getMovieVideo = (movieId) => fetcher(`/movie/${movieId}/videos`);
export const getSimilarMovies = (movieId) => fetcher(`/movie/${movieId}/similar`);

export const searchMovie = (query, page = 1) => fetcher('/search/movie', {query,page});

export const getFilteredMovies = ({genreId, release_year, language, sortBy, page = 1}) => {
    const params = {
        page,
        with_genres: genreId || undefined,
        primary_relase_year: release_year || undefined,
        with_original_language: language || undefined,
        sort_by: sortBy || 'popularity.desc',
    };
    return fetcher('/discover/movie/', params)
}
export default tmdbClient