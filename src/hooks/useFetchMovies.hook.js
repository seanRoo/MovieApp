import { useEffect, useState } from "react";
import { FETCH_URL } from "../constants";

const useFetchMovies = ({ query = "" }) => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (query.substring(query.length - 1) !== " ") {
      fetch(FETCH_URL(query))
        .then((res) => res.json())
        .then((res) => setMovies(res?.Search))
        .catch((e) => setError(true));
    }
  }, [query]);

  return { movies, error };
};

export default useFetchMovies;
