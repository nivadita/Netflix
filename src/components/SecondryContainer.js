import MovieList from "./MovieList"
import {useSelector} from "react-redux";

const SecondryContainer = () => {

  const movies = useSelector (store => store.movies)
  return (
    <MovieList title = {"Now Playing"} movies = {movies.nowPlayingMovies}/>
  )
}

export default SecondryContainer