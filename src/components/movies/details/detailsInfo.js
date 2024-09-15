import React from "react";
import PropTypes from "prop-types";
import useFavorites from "../list/hooks/useFavorites";
import { FavoriteIcon } from "../../favoriteIcon/favoriteIcon";
import "./detailsInfo.less";

export const DetailsInfo = ({ rating, genre, imdbID, runtime }) => {
  const { favorites, setFavorites } = useFavorites();
  return (
    <div className="m-detailsInfo__container">
      <FavoriteIcon
        favorites={favorites}
        setFavorites={setFavorites}
        id={imdbID}
      />
      <span aria-label="Rating">{rating}</span>
      <span aria-label="Genre">{genre}</span>
      <span aria-label="RunTime">{runtime}</span>
    </div>
  );
};

DetailsInfo.propTypes = {
  rating: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  imdbID: PropTypes.string.isRequired,
  runtime: PropTypes.string.isRequired,
};

export default DetailsInfo;
