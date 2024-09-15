import React from "react";
import useMovies from "./hooks/useMovies";
import useLoading from "../loading/hooks/useLoading";
import usePagination from "../pagination/hooks/usePagination";
import { Search } from "./search/search";
import { Loading } from "../loading/loading";
import { List } from "./list/list";
import { Pagination } from "../pagination/pagination";
import { Message } from "../message/message";

export const Movies = () => {
  const { movies, totalMovies, onMovieResult, error } = useMovies();
  const { loading, startLoading, stopLoading } = useLoading();
  const { currentPage, totalItems, totalPages, setCurrentPage, hasPagination } =
    usePagination(totalMovies);

  return (
    <div>
      <Search
        onMovieResult={onMovieResult}
        startLoading={startLoading}
        stopLoading={stopLoading}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
      <Loading loading={loading}>
        {totalItems ? (
          <List movies={movies} />
        ) : (
          !loading && <Message message={error} />
        )}
        {hasPagination && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            setCurrentPage={setCurrentPage}
          />
        )}
      </Loading>
    </div>
  );
};

export default Movies;
