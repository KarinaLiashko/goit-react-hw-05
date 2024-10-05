import axios from "axios";

const API_KEY = "f64a4d568d4efd29ba7b22d6b0848832";
const BASE_URL = "https://api.themoviedb.org/3";

export const fetchTrendingMovies = async () => {
  const response = await axios.get(`${BASE_URL}/trending/movie/day`, {
    params: {
      api_key: API_KEY,
    },
  });
  return response.data.results;
};

export const searchMovies = async query => {
  const response = await axios.get(`${BASE_URL}/search/movie`, {
    params: { query, api_key: API_KEY },
  });
  return response.data.results;
};

export const fetchMovieDetails = async movieId => {
  const response = await axios.get(`${BASE_URL}/movie/${movieId}`, {
    params: {
      api_key: API_KEY,
    },
  });
  return response.data;
};

export const fetchMovieCast = async movieId => {
  const response = await axios.get(`${BASE_URL}/movie/${movieId}/credits`, {
    params: {
      api_key: API_KEY,
    },
  });
  return response.data.cast;
};

export const fetchMovieReviews = async movieId => {
  const response = await axios.get(`${BASE_URL}/movie/${movieId}/reviews`, {
    params: {
      api_key: API_KEY,
    },
  });
  return response.data.results;
};

//export async function fetchRequest(url) {
// console.log(url);
// const options = {
//   headers: {
//    Authorization:
//      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNjRhNGQ1NjhkNGVmZDI5YmE3YjIyZDZiMDg0ODgzMiIsIm5iZiI6MTcyNzAzMDQ2OC44NTI3NTksInN1YiI6IjY2ZTZkYWM3Mzc2OGE3M2Y4ZDkxNThmNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.U1oCm3iZssX9WpZYBqxTwxwjU4CF3apGt2rd7yCHtAM",
//   },
// };
//  const response = await axios.get(url, options);

// return response;
//}
//export const imageUrl = "https://image.tmdb.org/t/p/w500";
