import fetch from "node-fetch";
import Axios from "axios";

const BASE_URL = "https://yts.mx/api/v2/";
const MOVIE_LIST_URL = `${BASE_URL}list_movies.json?`;
const MOVIE_SUGGESTIONS_URL = `${BASE_URL}movie_suggestions.json`;
const Movie_DETAILS_URL = `${BASE_URL}movie_details.json`;

export const getMovies = (limit, rating) => {
  let REQUEST_URL = MOVIE_LIST_URL;
  if (limit > 0) {
    REQUEST_URL += `limit=${limit}`;
  }
  if (rating > 0) {
    REQUEST_URL += `&minimum_rating=${rating}`;
  }

  return fetch(REQUEST_URL)
    .then((res) => res.json())
    .then((json) => json.data.movies);
};

export const getMovie = async (id) => {
  const {
    data: {
      data: { movie },
    },
  } = await Axios(Movie_DETAILS_URL, {
    params: {
      movie_id: id,
    },
  });
  return movie;
};

export const getSuggestion = async (id) => {
  const {
    data: {
      data: { movies },
    },
  } = await Axios(MOVIE_SUGGESTIONS_URL, {
    params: {
      movie_id: id,
    },
  });
  return movies;
};
