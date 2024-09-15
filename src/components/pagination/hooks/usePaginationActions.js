import { useCallback, useMemo } from "react";
import { START_PAGE } from "./usePagination";

const usePaginationActions = (currentPage, totalPages, setCurrentPage) => {
  const backwardDisabled = useMemo(
    () => currentPage * 1 === START_PAGE,
    [currentPage]
  );

  const forwardDisable = useMemo(
    () => currentPage * 1 === totalPages,
    [currentPage, totalPages]
  );

  const goForward = useCallback(() => {
    setCurrentPage((old) => old * 1 + 1);
  }, [setCurrentPage]);

  const goAllForward = useCallback(() => {
    setCurrentPage(totalPages);
  }, [setCurrentPage, totalPages]);

  const goBackward = useCallback(() => {
    setCurrentPage((old) => old * 1 - 1);
  }, [setCurrentPage]);

  const goAllBackward = useCallback(() => {
    setCurrentPage(START_PAGE);
  }, [setCurrentPage]);

  return {
    goForward,
    goBackward,
    goAllForward,
    goAllBackward,
    backwardDisabled,
    forwardDisable,
  };
};

export default usePaginationActions;
