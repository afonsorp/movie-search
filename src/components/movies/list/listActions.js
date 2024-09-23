import React from "react";
import PropTypes from "prop-types";
import { FaRegEye } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { FavoriteIcon } from "../../favorites/favoriteIcon";
import "./listActions.less";

export const ListActions = ({ imdbID, favorites, setFavorites }) => {
  return (
    <div className="a-listItem__actions">
      <FavoriteIcon
        favorites={favorites}
        setFavorites={setFavorites}
        id={imdbID}
      />
      <Link
        title="Details"
        className="m-button"
        to={`/details/${imdbID}`}
        disabled
      >
        <FaRegEye />
      </Link>
    </div>
  );
};

ListActions.propTypes = {
  imdbID: PropTypes.string.isRequired,
};

export default ListActions;
