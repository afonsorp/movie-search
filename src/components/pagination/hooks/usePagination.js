import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";

export const KEY_PAGINATION = "page";
export const START_PAGE = 1;
export const RESULTS_PER_PAGE = 10;

const usePagination = (totalItems) => {
  let [searchParams] = useSearchParams();
  const [currentPage, setCurrentPage] = useState(
    searchParams.get(KEY_PAGINATION) || START_PAGE
  );

  const totalPages = useMemo(
    () => Math.ceil(totalItems / RESULTS_PER_PAGE),
    [totalItems]
  );

  const hasPagination = useMemo(() => totalPages > 1, [totalPages]);

  return { currentPage, totalItems, totalPages, setCurrentPage, hasPagination };
};

export default usePagination;
