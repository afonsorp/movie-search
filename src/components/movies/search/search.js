import React from "react";
import PropTypes from "prop-types";
import { HelmetComponent } from "../../helmet/helmetComponent";
import useFetchMovies from "./hooks/useFetchMovies";
import "./search.less";

export const Search = ({
  onMovieResult,
  startLoading,
  stopLoading,
  currentPage,
  setCurrentPage,
}) => {
  const { handleSearch, searchTerm } = useFetchMovies(
    currentPage,
    onMovieResult,
    startLoading,
    stopLoading,
    setCurrentPage
  );
  return (
    <>
      <HelmetComponent title="Home" description="Movie Search Home Page" />
      <div className="m-search__container">
        <input
          placeholder="Search Movie"
          id="search"
          onChange={handleSearch}
          className="a-search__input"
          value={searchTerm || ""}
        />
      </div>
    </>
  );
};

Search.propTypes = {
  onMovieResult: PropTypes.func.isRequired,
  startLoading: PropTypes.func.isRequired,
  stopLoading: PropTypes.func.isRequired,
  currentPage: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
  setCurrentPage: PropTypes.func.isRequired,
};

export default Search;
