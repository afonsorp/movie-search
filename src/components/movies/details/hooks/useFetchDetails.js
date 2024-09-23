import { useCallback, useEffect, useState } from "react";
import { ERROR_DEFAULT, getMovieDetails } from "../../services";
import { useParams } from "react-router-dom";

const useFetchDetails = (stopLoading) => {
  const { id } = useParams();
  const [details, setDetails] = useState({});
  const [error, setError] = useState();

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
    setError(ERROR_DEFAULT.Error);
  }, [stopLoading]);

  const fetchDetails = useCallback(() => {
    getMovieDetails(id).then(onSuccess).catch(onError);
  }, [id, onSuccess, onError]);

  useEffect(() => {
    if (id) fetchDetails(id);
  }, [id, fetchDetails]);

  return { details, error };
};

export default useFetchDetails;
