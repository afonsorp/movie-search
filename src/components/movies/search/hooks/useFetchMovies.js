import { useCallback, useEffect, useMemo, useState } from "react";
import { debounce } from "../../../../utils/debounce";
import { ERROR_DEFAULT, getMovies } from "../../services";
import {
  KEY_PAGINATION,
  START_PAGE,
} from "../../../pagination/hooks/usePagination";
import { useSearchParams } from "react-router-dom";

const KEY_SEARCH = "search";

const useFetchMovies = (
  currentPage,
  onMovieResult,
  startLoading,
  stopLoading,
  setCurrentPage
) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState(
    searchParams.get(KEY_SEARCH) || ""
  );

  const onSuccess = useCallback(
    (result) => {
      stopLoading();
      onMovieResult(result);
    },
    [stopLoading, onMovieResult]
  );

  const onError = useCallback(() => {
    stopLoading();
    onMovieResult(ERROR_DEFAULT);
  }, [stopLoading, onMovieResult]);

  const fetchMovies = useMemo(
    () =>
      debounce((term) => {
        getMovies(term, currentPage).then(onSuccess).catch(onError);
      }),
    [onSuccess, onError, currentPage]
  );

  const handleSearch = useCallback(
    (e) => {
      e.preventDefault();
      const {
        target: { value },
      } = e;
      if (currentPage > START_PAGE) {
        setCurrentPage(START_PAGE);
      }
      setSearchTerm(value);
    },
    [currentPage, setCurrentPage, setSearchTerm]
  );

  useEffect(() => {
    if (searchTerm && searchTerm.length > 3) {
      setSearchParams({
        [KEY_SEARCH]: searchTerm,
        [KEY_PAGINATION]: currentPage,
      });
      startLoading();
      fetchMovies(searchTerm);
    } else {
      onMovieResult([]);
    }
  }, [
    onMovieResult,
    fetchMovies,
    searchTerm,
    currentPage,
    startLoading,
    setSearchParams,
  ]);

  return { handleSearch, searchTerm };
};

export default useFetchMovies;
