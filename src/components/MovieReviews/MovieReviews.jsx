import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieReviews } from "../../movie-api";
import css from "./MovieReviews.module.css";

const MovieReviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetchMovieReviews(movieId)
      .then(setReviews)
      .catch(error => console.error("Error fetching reviews:", error));
  }, [movieId]);

  return (
    <ul className={css.list}>
      {reviews.map(review => (
        <li key={review.id} className={css.item}>
          <h3 className={css.author}>{review.author}</h3>
          <p className={css.content}>{review.content}</p>
        </li>
      ))}
    </ul>
  );
};

export default MovieReviews;
