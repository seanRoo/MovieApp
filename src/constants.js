export const API_KEY = "cf6f4935";
export const FETCH_URL = (query) =>
  `http://www.omdbapi.com/?s=${query}*&type=movie&apikey=${API_KEY}`;
