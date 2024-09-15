import React from "react";
import PropTypes from "prop-types";
import { ListActions } from "./listActions";
import { getPoster } from "./hooks/usePoster";
import "./listItem.less";

export const ListItem = ({ movie, favorites, setFavorites }) => {
  const { Title, Poster, imdbID, Year } = movie;
  return (
    <li key={`${imdbID}#${Year}`} className="m-listItem__item">
      <img className="a-listItem__image" alt={Title} src={getPoster(Poster)} />
      <div className="m-listItem__info">
        <h2 className="a-listItem__title">{`${Title} (${Year})`}</h2>
        <ListActions
          imdbID={imdbID}
          favorites={favorites}
          setFavorites={setFavorites}
        />
      </div>
    </li>
  );
};

ListItem.propTypes = {
  movie: PropTypes.shape({
    Title: PropTypes.string.isRequired,
    Poster: PropTypes.string.isRequired,
    imdbID: PropTypes.string.isRequired,
    Year: PropTypes.string.isRequired,
  }).isRequired,
  favorites: PropTypes.arrayOf(PropTypes.string),
  setFavorites: PropTypes.func.isRequired,
};

export default ListItem;
