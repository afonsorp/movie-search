import axios from "axios";
import { API_KEY } from "../../api-config";

export const ERROR_DEFAULT = {
  Error:
    "Something went wrong! Apologies for the inconvenience. We're working to fix the issue. Please try again later.",
  Response: "False",
};

const BASE_URL = `https://www.omdbapi.com/?apikey=${API_KEY}&type=movie`;

const dataCache = {};

export const getMovies = (term, page) => {
  const trimmedTerm = term ? term.trim() : term;
  const key = `${term}#${page}`;
  if (!dataCache[key]) {
    const url = `${BASE_URL}&s=${trimmedTerm}&page=${page}`;
    return axios
      .get(url)
      .then((response) => {
        dataCache[key] = response.data;
        return response.data;
      })
      .catch((e) => {
        console.log({ e });
      });
  }
  return new Promise((resolve) => resolve(dataCache[key]));
};

export const getMovieDetails = (id) => {
  const key = id;
  if (!dataCache[key]) {
    const url = `${BASE_URL}&i=${id}`;
    return axios
      .get(url)
      .then((response) => {
        dataCache[key] = response.data;
        return response.data;
      })
      .catch((e) => {
        console.log({ e });
      });
  }
  return new Promise((resolve) => resolve(dataCache[key]));
};
