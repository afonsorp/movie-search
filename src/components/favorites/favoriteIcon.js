import React from "react";
import PropTypes from "prop-types";
import useFavoriteActions from "./hooks/useFavoriteActions";
import { FaStar } from "react-icons/fa6";
import classNames from "classnames";
import "./favoriteIcon.less";

export const FavoriteIcon = ({ favorites, id, setFavorites }) => {
  const { isFavorite, handleClick } = useFavoriteActions(
    id,
    favorites,
    setFavorites
  );
  return (
    <FaStar
      title="Favorite"
      onClick={handleClick}
      className={classNames("m-button", {
        "a-favorite__buttonFavorite": isFavorite,
      })}
    />
  );
};

FavoriteIcon.propTypes = {
  favorites: PropTypes.arrayOf(PropTypes.string).isRequired,
  id: PropTypes.string.isRequired,
  setFavorites: PropTypes.func.isRequired,
};

export default FavoriteIcon;
