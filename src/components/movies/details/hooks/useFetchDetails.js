import { useCallback, useEffect, useRef, useState } from "react";
import { ERROR_DEFAULT, getMovieDetails } from "../../services";
import { useParams } from "react-router-dom";

const useFetchDetails = (stopLoading) => {
  const { id } = useParams();
  const [details, setDetails] = useState({});
  const [error, setError] = useState();
  const imdbID = useRef();

  const onSuccess = useCallback(
    (result) => {
      const { Error } = result;
      stopLoading();
      if (Error) {
        setDetails({});
        setError(Error);
      } else {
        setDetails(result);
        setError();
      }
    },
    [stopLoading]
  );

  const onError = useCallback(() => {
    stopLoading();
    setDetails({});
    setError(ERROR_DEFAULT);
  }, [stopLoading]);

  const fetchDetails = useCallback(
    (movieId) => {
      getMovieDetails(movieId).then(onSuccess).catch(onError);
    },
    [onSuccess, onError]
  );

  useEffect(() => {
    if (id && id !== imdbID.current) {
      imdbID.current = id;
      fetchDetails(id);
    }
  }, [id, fetchDetails]);

  return { details, error };
};

export default useFetchDetails;
