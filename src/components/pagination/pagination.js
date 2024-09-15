import React from "react";
import PropTypes from "prop-types";
import {
  FaAngleLeft,
  FaAngleRight,
  FaAnglesLeft,
  FaAnglesRight,
} from "react-icons/fa6";
import usePaginationActions from "./hooks/usePaginationActions";
import "./pagination.less";

export const Pagination = ({ currentPage, totalPages, setCurrentPage }) => {
  const {
    goForward,
    goBackward,
    goAllForward,
    goAllBackward,
    backwardDisabled,
    forwardDisable,
  } = usePaginationActions(currentPage, totalPages, setCurrentPage);
  return (
    <div className="m-pagination__container">
      <button
        className="m-button"
        onClick={goAllBackward}
        disabled={backwardDisabled}
        aria-label="Go to first page"
      >
        <FaAnglesLeft />
      </button>
      <button
        className="m-button"
        onClick={goBackward}
        disabled={backwardDisabled}
        aria-label="Go to previous page"
      >
        <FaAngleLeft />
      </button>
      {`${currentPage}/${totalPages}`}
      <button
        className="m-button"
        onClick={goForward}
        disabled={forwardDisable}
        aria-label="Go to next page"
      >
        <FaAngleRight />
      </button>
      <button
        className="m-button"
        onClick={goAllForward}
        disabled={forwardDisable}
        aria-label="Go to last page"
      >
        <FaAnglesRight />
      </button>
    </div>
  );
};

Pagination.propTypes = {
  currentPage: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
  setCurrentPage: PropTypes.func.isRequired,
  totalPages: PropTypes.number.isRequired,
};

export default Pagination;
