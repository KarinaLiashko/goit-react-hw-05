import { useEffect, useState } from "react";
import MoviesList from "../components/MoviesList/MoviesList";
import { fetchTrendingMovies } from "../movie-api";

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchTrendingMovies().then(setMovies);
  }, []);

  return (
    <div>
      <h1>Trending today</h1>
      <MoviesList movies={movies} />
    </div>
  );
};

export default HomePage;
