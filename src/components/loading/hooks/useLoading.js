import { useCallback, useState } from "react";

const useLoading = (isLoading = false) => {
  const [loading, setLoading] = useState(isLoading);

  const startLoading = useCallback(() => {
    setLoading(true);
  }, []);

  const stopLoading = useCallback(() => {
    setLoading(false);
  }, []);

  return { loading, startLoading, stopLoading };
};

export default useLoading;
