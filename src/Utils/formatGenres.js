import { MOVIE_GENRES } from '../Constants/movieGenres'

function  getGenreNames(genreIds = []) {
    if(genreIds.length === 0){
        return "Unknown"
    }
    return genreIds
    .map((id) => MOVIE_GENRES.find((g) => g.id === id)?. name)
    .filter(Boolean)
    .join(", ");   
}
export default getGenreNames