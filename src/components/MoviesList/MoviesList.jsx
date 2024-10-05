import { Link } from "react-router-dom";
import styles from "./MoviesList.module.css";

const MoviesList = ({ movies }) => (
  <ul className={styles.list}>
    {movies.map(movie => (
      <li key={movie.id} className={styles.item}>
        <Link to={`/movies/${movie.id}`} className={styles.link}>
          {movie.title}
        </Link>
      </li>
    ))}
  </ul>
);

export default MoviesList;
