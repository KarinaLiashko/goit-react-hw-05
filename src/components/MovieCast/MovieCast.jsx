import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieCast } from "../../movie-api";
import css from "./MovieCast.module.css";

const defaultImg =
  "<https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg>";

const MovieCast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    fetchMovieCast(movieId)
      .then(setCast)
      .catch(error => console.error("Error fetching cast:", error));
  }, [movieId]);

  return (
    <ul className={css.list}>
      {cast.map(actor => (
        <li key={actor.cast_id} className={css.item}>
          <img
            className={css.img}
            src={
              actor.profile_path
                ? `https://image.tmdb.org/t/p/w200/${actor.profile_path}`
                : defaultImg
            }
            alt={actor.name}
          />
          <p className={css.name}>{actor.name}</p>
        </li>
      ))}
    </ul>
  );
};

export default MovieCast;
