import { useCallback, useState } from "react";

const useMovies = () => {
  const [movies, setMovies] = useState([]);
  const [totalMovies, setTotalMovies] = useState(0);
  const [error, setError] = useState();

  const onMovieResult = useCallback((result) => {
    const { Search, Error, totalResults } = result;
    if (Error) {
      setError(Error);
      setMovies([]);
      setTotalMovies(0);
    } else {
      setMovies(Search);
      setTotalMovies(totalResults);
      setError();
    }
  }, []);

  return { movies, totalMovies, onMovieResult, error };
};

export default useMovies;
